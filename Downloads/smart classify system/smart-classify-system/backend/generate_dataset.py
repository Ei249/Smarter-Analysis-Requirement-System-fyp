import csv
import random

# ==========================================
# 1. 核心词库
# ==========================================
fr_actors = ["The system", "The application", "The platform", "The user interface", "The API", "The admin module", "The mobile app", "The backend server"]
fr_verbs = ["shall allow", "must enable", "will support", "should provide", "shall permit", "must facilitate", "allows", "enables", "is designed to let"]
fr_users = ["users", "students", "tutors", "administrators", "guests", "customers", "clients", "moderators", "parents", "staff"]
fr_actions = [
    "to register an account", "to log in securely", "to reset their password", "to update profile details",
    "to search for courses", "to filter results by price", "to book a session", "to cancel an appointment",
    "to upload assignments", "to download materials", "to view transaction history", "to generate invoices",
    "to receive notifications", "to chat with support", "to rate the tutor", "to submit feedback",
    "to manage content", "to configure settings", "to export data to PDF", "to import user lists",
    "to schedule a meeting", "to record the session", "to share the screen", "to mute the microphone"
]
fr_conditions = ["via email", "using a secure form", "in real-time", "after validation", "before session starts", "within the dashboard", "automatically", "manually"]

# 🔥 升级：NFR 专用主语
nfr_subjects = [
    "The system", "The database", "The login page", "The API response", "All user data", "Password storage", 
    "The network connection", "The server", "Data backups", "Security protocols", "Response time", "Availability"
]
nfr_constraints = [
    "must respond within 2 seconds", "shall have an uptime of 99.9%", "must be encrypted using AES-256",
    "shall support 10,000 concurrent users", "must comply with GDPR", "shall be compatible with Chrome and Edge",
    "must be accessible to screen readers (WCAG 2.1)", "shall auto-backup every 24 hours", "must allow recovery within 5 minutes",
    "shall use HTTPS for all communications", "must be modular and maintainable", "should have comprehensive documentation",
    "must load within 3 seconds", "shall adhere to ISO 27001", "must be protected against SQL injection"
]

noise_junk = ["Chapter 1", "Introduction", "Table of Contents", "Page 10", "Figure 5", "Note:", "Source:", "Q: ?", "A: Yes"]

# ==========================================
# 2. 生成逻辑
# ==========================================
def generate_dataset(filename="dataset.csv"):
    data = []
    
    # 数量设置 (20万级)
    target_fr = 70000
    target_nfr = 70000
    target_unknown = 100000

    print(f"🚀 Starting generation...")

    for _ in range(target_fr):
        s = f"{random.choice(fr_actors)} {random.choice(fr_verbs)} {random.choice(fr_users)} {random.choice(fr_actions)}."
        data.append((s, "FR"))
    
    for _ in range(target_nfr):
        s = f"{random.choice(nfr_subjects)} {random.choice(nfr_constraints)}."
        data.append((s, "NFR"))
        
    for _ in range(target_unknown):
        data.append((f"{random.choice(noise_junk)} {random.randint(1,999)}", "Unknown"))

    print("💾 Saving to CSV...")
    try:
        with open(filename, 'w', newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow(["text", "label"])
            
            # 手动种子数据 (针对不带 ID 的 NFR)
            manual_data = [
                ("Passwords shall be salted and hashed.", "NFR"),
                ("Data must be encrypted at rest.", "NFR"),
                ("Response time should not exceed 1 second.", "NFR"),
                ("Backups must be performed daily.", "NFR"),
                ("Reliability shall be 99.9%.", "NFR"),
                ("The system shall allow users to register.", "FR"),
                # 之前的垃圾反例
                ("Manual scheduling leads to double bookings.", "Unknown"),
                ("Affordable pricing - Tiered pricing model.", "Unknown"),
                ("Table 4 Stakeholder Needs Analysis", "Unknown"),
                ("R-05 NFR-10 Non-compliance with regulations.", "Unknown"),
                ("Smart Requirement Analysis Report", "Unknown"),
                ("File: BTSE2163_Project.pdf", "Unknown"),
                ("10 2.2.1 Login......", "Unknown")
            ]
            writer.writerows(manual_data)
            random.shuffle(data)
            writer.writerows(data)
            
        print(f"✅ DONE! Generated {len(data) + len(manual_data)} samples.")
        
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == "__main__":
    generate_dataset()