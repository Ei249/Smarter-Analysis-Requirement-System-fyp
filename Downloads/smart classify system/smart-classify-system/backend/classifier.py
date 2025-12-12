import re
import os
import unicodedata
import pdfplumber
import joblib
from difflib import SequenceMatcher

# =========================================================
# 1. 文本清洗
# =========================================================
def normalize_text(text):
    if not text: return ""
    text = re.sub(r'[^\w\s\.,;:\-\(\)\'\"\/]', ' ', text) 
    text = unicodedata.normalize("NFKD", text)
    text = re.sub(r'\s+', ' ', text)
    # 移除行首编号
    text = re.sub(r'^[\d\.]+\s+', '', text.strip()) 
    text = re.sub(r'^\([A-Za-z\s]+\)\s+', '', text) 
    return text.strip().lower()

def extract_text(file_path):
    if file_path.lower().endswith(".pdf"):
        try:
            with pdfplumber.open(file_path) as pdf:
                pages = [p.extract_text() for p in pdf.pages if p.extract_text()]
            return "\n".join(pages) 
        except: return ""
    if file_path.lower().endswith(".txt"):
        with open(file_path, "r", encoding="utf-8") as f: return f.read()
    return ""

def is_similar(new_text, existing_texts, threshold=0.80):
    def clean_core(t):
        t = re.sub(r'\b(fr|nfr|at|us|r)-\d+\b', '', t.lower())
        return re.sub(r'[^\w\s]', '', t).strip()

    new_core = clean_core(new_text)
    for existing in existing_texts:
        existing_core = clean_core(existing['requirement'])
        if SequenceMatcher(None, new_core, existing_core).ratio() > threshold:
            return True
        if len(new_core) > 10 and (new_core in existing_core or existing_core in new_core):
             return True
    return False

class RequirementClassifier:
    def __init__(self):
        self.model = None
        self.vectorizer = None
        try:
            if os.path.exists("fr_nfr_model.pkl"):
                self.model = joblib.load("fr_nfr_model.pkl")
                self.vectorizer = joblib.load("vectorizer.pkl")
                print("✓ SVM model loaded.")
        except: pass

    def is_noise(self, text):
        t = text.strip().lower()
        if len(t) < 15 or len(t) > 400: return True
        if "....." in t: return True
        
        # 1. 过滤非字母开头的 (但允许 FR/NFR 开头)
        if not re.match(r'^[a-zA-Z]', t) and not re.match(r'^(fr|nfr)', t): return True
        
        # 2. 过滤风险 ID
        if re.search(r'\br-\d+', t): return True

        noise_keywords = [
            "page ", "figure ", "table ", "appendix", "student id", "marks:", 
            "justification", "assumptions", "dependencies", "out of scope",
            "problem statement", "delayed", "difficulty", "lack of", "concerns about",
            "manual scheduling", "no centralized way", "time-consuming", "unreliable",
            "interview", "transcript", "survey result", "respondents", 
            "at-", "test id", "scenario", "expected outcome", "generated at",
            "this document", "serve as", "aims to", "contradict", "define performance",
            "validation summary", "traceability matrix", "completeness", "consistency",
            "related to payment", "consistent with usability", "address all core",
            "affordable pricing", "mobile-friendly", "analysis report", "file:", "date:",
            "documentation", "metrics" 
        ]
        for k in noise_keywords:
            if k in t: return True
        
        return False

    def classify(self, text):
        if self.is_noise(text): return "Unknown / Others", 1.0
        
        clean_t = normalize_text(text)
        
        # 定义合法主语 (扩充了 NFR 常见主语)
        valid_starts = (
            # 通用/功能性主语
            "the system", "the application", "the platform", "this module",
            "users", "admins", "students", "tutors", "instructors", "patients", "drivers",
            "it ", "access to",
            
            # 🔥 新增：NFR 专用主语 (关键修复)
            "data", "all data", "passwords", "performance", "security", "backups", 
            "recovery", "response time", "availability", "reliability", "encryption",
            "audit", "logs", "interfaces", "error", "communication", "apis"
        )
        
        # 必须包含的情态动词
        has_modal = re.search(r'\b(shall|must|will|should|can|allows?|provides?|supports?|enables?|includes?|facilitates?|ensure|maintain|comply)\b', clean_t)

        # --- 1. ID 检测 (最高优先级) ---
        has_fr_id = re.search(r'\b(fr|func)-\d+', text, re.IGNORECASE)
        has_nfr_id = re.search(r'\b(nfr|non-func)-\d+', text, re.IGNORECASE)

        if has_fr_id or has_nfr_id:
            # 只有当 ID 在句首，或者句子是标准主语开头时，才通过
            is_start_id = re.match(r'^\s*(fr|nfr|func)', text, re.IGNORECASE)
            is_valid_sentence = clean_t.startswith(valid_starts)
            
            if is_start_id or is_valid_sentence:
                if has_fr_id: return "Functional Requirement", 1.0
                if has_nfr_id: return "Non-Functional Requirement", 1.0

        # --- 2. 无 ID 的智能检测 (ML + 规则) ---
        # 只要主语合法 且 有动词，就允许进入 ML 判断
        if clean_t.startswith(valid_starts) and has_modal:
            if self.model:
                try:
                    vec = self.vectorizer.transform([text])
                    pred = self.model.predict(vec)[0]
                    confidence = abs(self.model.decision_function(vec)[0])
                    
                    if confidence > 0.4: # 只要模型确认，就通过
                        return ("Functional Requirement" if pred == "FR" else "Non-Functional Requirement"), 0.9
                except: pass
        
        return "Unknown / Others", 0.0

classifier = RequirementClassifier()

def analyze_document_with_highlighting(filepath):
    full_text = extract_text(filepath)
    if not full_text.strip(): return {"requirements": []}

    clean_text = re.sub(r'(?<!\.)\n', ' ', full_text)
    clean_text = re.sub(r'[●■?]', '', clean_text)
    sentences = re.split(r'(?<=[.!?])\s+', clean_text)

    reqs = []
    f_count = 0
    nf_count = 0
    
    for s in sentences:
        s = s.strip()
        if len(s) < 10: continue
        
        s_clean = normalize_text(s)
        cat, conf = classifier.classify(s)
        
        if cat != "Unknown / Others":
            if not is_similar(s_clean, reqs):
                if cat == "Functional Requirement": f_count += 1
                else: nf_count += 1
                
                final_text = s
                final_text = re.sub(r'^[\d\.]+\s+', '', final_text)
                final_text = re.sub(r'^\([A-Za-z\s]+\)\s+', '', final_text)
                
                # 修复首字母大写
                if final_text and not final_text[0].isupper() and not final_text.lower().startswith(('fr', 'nfr')):
                     final_text = final_text.capitalize()

                reqs.append({"requirement": final_text, "type": cat.split()[0], "confidence": conf})
            
    return {"requirements": reqs, "functional_count": f_count, "non_functional_count": nf_count}

def allowed_file(f): return '.' in f and f.rsplit('.', 1)[1].lower() in {'pdf', 'txt', 'docx'}