# How to Train the ML Model

## Quick Answer

**Yes, "training" is the correct term!** You train the model by running:

```bash
python train_model.py
```

## Step-by-Step Instructions

### 1. Navigate to the backend folder
```bash
cd smart-classify-system/backend
```

### 2. Install dependencies (if not already installed)
```bash
pip install pdfplumber joblib scikit-learn
```

### 3. Train the model
```bash
python train_model.py
```

## What Happens During Training?

1. **Extraction**: Extracts FR and NFR requirements from `BTSE2163_Project_B240115B_2025B.pdf`
   - Table 5 → Functional Requirements (FR-01 to FR-23)
   - Table 6 → Non-Functional Requirements (NFR-01 to NFR-19)

2. **Augmentation**: Creates 3-5 variations of each requirement for better training

3. **Training**: Trains an SVM (LinearSVC) model using TF-IDF vectorization

4. **Evaluation**: Tests the model and shows accuracy (target: ≥95%)

5. **Saving**: Saves model files:
   - `fr_nfr_model.pkl` - The trained model
   - `vectorizer.pkl` - The text vectorizer
   - `model_metadata.json` - Training metadata

## Expected Output

```
============================================================
FR/NFR ML Model Training Pipeline
============================================================
STEP 1: Extracting requirements from PDF
Extracted 23 FR requirements
Extracted 19 NFR requirements

STEP 2: Augmenting dataset
Augmented dataset: 203 samples

STEP 3: Training ML Model
Train Accuracy: 100.00%
Test Accuracy: 100.00%

STEP 4: Saving Model
Model saved to: fr_nfr_model.pkl
Vectorizer saved to: vectorizer.pkl

TRAINING COMPLETE!
Final Test Accuracy: 100.00%
✓ Target accuracy (≥95%) achieved!
```

## After Training

Once training is complete, restart your Flask app:

```bash
python app.py
```

The classifier will automatically load the trained model and show:
```
ML model loaded successfully.
```

## Troubleshooting

**If PDF not found:**
- Ensure `BTSE2163_Project_B240115B_2025B.pdf` is in `smart-classify-system/uploads/` folder

**If import errors:**
- Install missing packages: `pip install pdfplumber joblib scikit-learn`

**If low accuracy:**
- Check that the PDF contains Table 5 and Table 6
- Verify extraction worked (check console output)

## Terminology

- **Training** = Teaching the model to recognize patterns (correct term ✓)
- **Model** = The trained algorithm that classifies requirements
- **Vectorizer** = Converts text to numbers for the model
- **Accuracy** = How well the model performs (target: ≥95%)







