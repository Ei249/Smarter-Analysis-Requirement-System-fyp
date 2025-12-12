"""
Train (Fine-tune) BERT Model for Requirements Classification
Using Sentence-Transformers with CosineSimilarityLoss
"""
import csv
import os
import shutil
from sentence_transformers import SentenceTransformer, InputExample, losses, evaluation
from torch.utils.data import DataLoader
import random

# 配置
MODEL_NAME = 'all-MiniLM-L6-v2' # 轻量级 BERT
OUTPUT_PATH = './fine_tuned_bert' # 训练好的模型保存位置
BATCH_SIZE = 16
EPOCHS = 1 # 训练 1 轮通常就够了，防止过拟合

def load_data(filename="dataset.csv"):
    if not os.path.exists(filename):
        print("❌ dataset.csv not found! Run generate_dataset.py first.")
        return []
    
    examples = []
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # 将文本转换为 InputExample
            # 我们使用 "Label Sentence" 策略：
            # 比如 "FR The system shall login"
            # 这样模型会学习将 FR 和这种句子拉近距离
            
            # 为了简化，我们使用 SetFit 风格的训练数据构造：
            # 构造正样本对 (Anchor, Positive) 和负样本对 (Anchor, Negative)
            # 这里简化为直接训练分类器太慢，我们使用 SentenceTransformer 的微调方式
            pass 
            
    # 重新设计：使用最简单的 Softmax Loss 或者 Cosine Similarity
    # 这里我们采用一种巧妙的方法：把 Label 当作 Anchor
    # FR text -> 应该接近 "Functional Requirement" 这个词的向量
    
    train_examples = []
    with open(filename, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            text = row['text']
            label = row['label']
            
            # 定义每个类别的“中心句”
            if label == "FR":
                anchor = "The system shall perform a function."
                score = 1.0
            elif label == "NFR":
                anchor = "The system performance must be constrained."
                score = 1.0
            else: # Unknown
                # Unknown 应该远离 FR 和 NFR
                # 这里我们训练它接近 "Noise text garbage"
                anchor = "This is random text noise header footer."
                score = 1.0
            
            train_examples.append(InputExample(texts=[text, anchor], label=score))
            
            # 负采样 (让它远离错误的类别)
            if label == "Unknown":
                 train_examples.append(InputExample(texts=[text, "The system shall perform a function."], label=0.0))

    return train_examples

def train():
    print(f"📥 Loading base model: {MODEL_NAME}...")
    model = SentenceTransformer(MODEL_NAME)

    print("📊 Loading and preparing training data...")
    train_examples = load_data()
    
    # 打乱数据
    random.shuffle(train_examples)
    
    # 取一部分作为训练集
    train_dataloader = DataLoader(train_examples, shuffle=True, batch_size=BATCH_SIZE)
    
    # 定义损失函数 (CosineSimilarityLoss 效果很好)
    train_loss = losses.CosineSimilarityLoss(model)

    print("🔥 Starting Fine-tuning (this may take 2-5 minutes)...")
    model.fit(
        train_objectives=[(train_dataloader, train_loss)],
        epochs=EPOCHS,
        warmup_steps=100,
        show_progress_bar=True
    )

    print(f"💾 Saving fine-tuned model to {OUTPUT_PATH}...")
    # 清理旧模型
    if os.path.exists(OUTPUT_PATH):
        shutil.rmtree(OUTPUT_PATH)
    
    model.save(OUTPUT_PATH)
    print("✅ Training Complete! You can now run app.py")

if __name__ == "__main__":
    train()