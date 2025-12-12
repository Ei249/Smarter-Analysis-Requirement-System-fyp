import pandas as pd
import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report

def train_model():
    print("正在加载通用训练数据 (dataset.csv)...")
    
    # 1. 读取 CSV (确保你已经创建了 dataset.csv)
    try:
        df = pd.read_csv("dataset.csv")
    except FileNotFoundError:
        print("错误：找不到 dataset.csv。请先创建通用数据集文件。")
        return

    # 2. 准备数据
    X = df['text']
    y = df['label']

    # 3. 文本向量化 (通用化配置)
    # 使用 n-gram (1,2) 可以捕获 "response time", "system shall" 等短语
    vectorizer = TfidfVectorizer(ngram_range=(1, 2), stop_words='english', max_features=5000)
    X_vectorized = vectorizer.fit_transform(X)

    # 4. 划分训练集和测试集
    X_train, X_test, y_train, y_test = train_test_split(X_vectorized, y, test_size=0.2, random_state=42)

    # 5. 训练模型 (使用 LinearSVC，适合文本分类)
    print("正在训练通用模型...")
    model = LinearSVC()
    model.fit(X_train, y_train)

    # 6. 评估
    predictions = model.predict(X_test)
    print(f"模型准确率: {accuracy_score(y_test, predictions)}")
    print(classification_report(y_test, predictions))

    # 7. 保存模型
    joblib.dump(model, "fr_nfr_model.pkl")
    joblib.dump(vectorizer, "vectorizer.pkl")
    print("通用模型已保存为 'fr_nfr_model.pkl'")

if __name__ == "__main__":
    train_model()