import json
import os
from datetime import datetime, timedelta

SUBMISSIONS_FILE = 'submissions.json'
DATASET_FILE = 'dataset.csv'

# 配置
TOTAL_ADMINS = 5
MAX_VOTE_CHANGES = 3  # 最大改票次数
EXPIRATION_HOURS = 24 

def load_submissions():
    if not os.path.exists(SUBMISSIONS_FILE): return []
    with open(SUBMISSIONS_FILE, 'r') as f:
        try: return json.load(f)
        except: return []

def save_submissions(data):
    with open(SUBMISSIONS_FILE, 'w') as f: json.dump(data, f, indent=4)

def add_submission(text, req_type, system_type, user):
    submissions = load_submissions()
    new_sub = {
        "id": str(len(submissions) + 1000), 
        "text": text, "type": req_type, "system_type": system_type,
        "submitted_by": user, "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "status": "pending", "final_decision_reason": "",
        "votes": {"approve": [], "reject": []},
        "vote_tracking": {} # 记录每个 Admin 的投票次数 { "admin1": 1, "admin2": 2 }
    }
    submissions.append(new_sub)
    save_submissions(submissions)
    return True

def vote_submission(sub_id, admin_user, vote_type): 
    submissions = load_submissions()
    target = None
    for sub in submissions:
        if sub['id'] == sub_id: target = sub; break
    
    if not target or target['status'] != 'pending': return False, "Submission closed."
    
    check_expired() 
    if target['status'] != 'pending': return False, "Submission expired."

    # 初始化追踪
    if 'vote_tracking' not in target: target['vote_tracking'] = {}
    current_count = target['vote_tracking'].get(admin_user, 0)

    # 1. 检查是否已经投过这一票
    if admin_user in target['votes'][vote_type]:
        return False, "You already voted for this option."

    # 2. 检查是否是改票 (即已经在另一个列表里)
    opposite_type = 'reject' if vote_type == 'approve' else 'approve'
    if admin_user in target['votes'][opposite_type]:
        # 这是改票
        if current_count >= MAX_VOTE_CHANGES:
            return False, "Limit reached: You cannot change your vote anymore (Max 3)."
        
        # 执行改票：从对面移除，加入当前
        target['votes'][opposite_type].remove(admin_user)
        target['votes'][vote_type].append(admin_user)
        target['vote_tracking'][admin_user] = current_count + 1
        msg = f"Vote changed to {vote_type.upper()}. ({3 - (current_count + 1)} changes left)"
    else:
        # 这是第一次投票
        target['votes'][vote_type].append(admin_user)
        target['vote_tracking'][admin_user] = 1
        msg = f"Vote recorded: {vote_type.upper()}."

    # 3. 结算逻辑 (多数决)
    approve_count = len(target['votes']['approve'])
    reject_count = len(target['votes']['reject'])
    majority = (TOTAL_ADMINS // 2) + 1
    
    if approve_count >= majority:
        _finalize(target, 'approved', "Majority Voted Approve")
        msg = "Approved by majority!"
    elif reject_count >= majority:
        _finalize(target, 'rejected', "Majority Voted Reject")
        msg = "Rejected by majority."
        
    save_submissions(submissions)
    return True, msg

def _finalize(submission, status, reason):
    submission['status'] = status
    submission['final_decision_reason'] = reason
    if status == 'approved':
        _append_to_dataset(submission['text'], submission['type'], submission['system_type'])

def _append_to_dataset(text, label, domain):
    with open(DATASET_FILE, 'a', newline='', encoding='utf-8') as f:
        import csv
        writer = csv.writer(f)
        writer.writerow([text, label, domain])

def check_expired():
    submissions = load_submissions()
    changed = False
    now = datetime.now()
    for sub in submissions:
        if sub['status'] == 'pending':
            sub_time = datetime.strptime(sub['timestamp'], "%Y-%m-%d %H:%M:%S")
            if now - sub_time > timedelta(hours=EXPIRATION_HOURS):
                approve = len(sub['votes']['approve'])
                reject = len(sub['votes']['reject'])
                if approve > reject: _finalize(sub, 'approved', "Time Expired (Majority)")
                else: _finalize(sub, 'rejected', "Time Expired")
                changed = True
    if changed: save_submissions(submissions)