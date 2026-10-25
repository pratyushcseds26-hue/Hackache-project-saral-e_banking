import os
import re

base_dir = r"C:\Users\Sahil Pal\.gemini\antigravity\scratch\saral-banking"
errors = []

# Verify files exist
required_files = [
    'index.html',
    'src/app.js',
    'src/audio.js',
    'src/data/config.js',
    'src/data/banks.js',
    'src/data/customers.js',
    'src/data/transactions.js',
    'src/data/payees.js',
    'src/data/glossary.js',
    'src/data/faq.js',
    'src/data/scams.js',
    'src/i18n/en.js',
    'src/i18n/hi.js',
    'src/i18n/ta.js'
]

for rf in required_files:
    full_path = os.path.join(base_dir, rf)
    if not os.path.exists(full_path):
        errors.append(f"Missing file: {rf}")
    else:
        print(f"Verified exists: {rf}")

# Check transactions count & Tamil translations
tx_path = os.path.join(base_dir, 'src/data/transactions.js')
with open(tx_path, 'r', encoding='utf-8') as f:
    tx_content = f.read()
    tx_matches = re.findall(r'["\']?id["\']?\s*:\s*["\'](tx_\d+)["\']', tx_content)
    plain_ta = re.findall(r'["\']?plainTa["\']?\s*:\s*["\']', tx_content)
    print(f"Total transactions found in transactions.js: {len(tx_matches)} (with {len(plain_ta)} plainTa entries)")
    if len(tx_matches) < 180:
        errors.append(f"Insufficient transactions: expected at least 180 (60 per customer), found {len(tx_matches)}")
    if len(tx_matches) != len(plain_ta):
        errors.append(f"Mismatch: {len(tx_matches)} transactions but {len(plain_ta)} plainTa entries")

# Check FAQ count & Tamil translations
faq_path = os.path.join(base_dir, 'src/data/faq.js')
with open(faq_path, 'r', encoding='utf-8') as f:
    faq_content = f.read()
    faq_matches = re.findall(r'["\']?id["\']?\s*:\s*["\'](faq_\d+)["\']', faq_content)
    faq_ta = re.findall(r'["\']?questionTa["\']?\s*:\s*["\']', faq_content)
    print(f"Total FAQ items found in faq.js: {len(faq_matches)} (with {len(faq_ta)} questionTa entries)")
    if len(faq_matches) < 25:
        errors.append(f"Insufficient FAQs: expected at least 25, found {len(faq_matches)}")
    if len(faq_matches) != len(faq_ta):
        errors.append(f"Mismatch: {len(faq_matches)} FAQs but {len(faq_ta)} questionTa entries")

# Check Scams count & Tamil translations
scam_path = os.path.join(base_dir, 'src/data/scams.js')
with open(scam_path, 'r', encoding='utf-8') as f:
    scam_content = f.read()
    scam_matches = re.findall(r'["\']?id["\']?\s*:\s*["\'](scam_\w+)["\']', scam_content)
    scam_ta = re.findall(r'["\']?titleTa["\']?\s*:\s*["\']', scam_content)
    print(f"Total Scams found in scams.js: {len(scam_matches)} (with {len(scam_ta)} titleTa entries)")
    if len(scam_matches) < 6:
        errors.append(f"Insufficient scams: expected at least 6, found {len(scam_matches)}")
    if len(scam_matches) != len(scam_ta):
        errors.append(f"Mismatch: {len(scam_matches)} scams but {len(scam_ta)} titleTa entries")

# Check Banks count
banks_path = os.path.join(base_dir, 'src/data/banks.js')
with open(banks_path, 'r', encoding='utf-8') as f:
    banks_content = f.read()
    bank_matches = re.findall(r'["\']?id["\']?\s*:\s*["\'](janata_saral|suraksha|pragati)["\']', banks_content)
    bank_ta = re.findall(r'["\']?nameTa["\']?\s*:\s*["\']', banks_content)
    print(f"Total Banks found in banks.js: {len(bank_matches)} (with {len(bank_ta)} nameTa entries)")
    if len(bank_matches) != 3 or len(bank_ta) != 3:
        errors.append(f"Expected 3 banks with Tamil names, found {len(bank_matches)}")

# Check Glossary
gloss_path = os.path.join(base_dir, 'src/data/glossary.js')
with open(gloss_path, 'r', encoding='utf-8') as f:
    gloss_content = f.read()
    gloss_terms = re.findall(r'["\']?term["\']?\s*:\s*["\']([^"\']+)["\']', gloss_content)
    gloss_ta = re.findall(r'["\']?labelTa["\']?\s*:\s*["\']', gloss_content)
    print(f"Total Glossary terms: {len(gloss_terms)} (with {len(gloss_ta)} labelTa entries)")
    if len(gloss_terms) != len(gloss_ta):
        errors.append(f"Mismatch in glossary terms and Tamil labels")

# Check Audio inrToWordsTa
audio_path = os.path.join(base_dir, 'src/audio.js')
with open(audio_path, 'r', encoding='utf-8') as f:
    audio_content = f.read()
    if 'inrToWordsTa' in audio_content:
        print("Verified inrToWordsTa exists in src/audio.js")
    else:
        errors.append("Missing inrToWordsTa in src/audio.js")

if errors:
    print("\nERRORS DETECTED:")
    for e in errors:
        print(" -", e)
else:
    print("\nALL VERIFICATION CHECKS PASSED SUCCESSFULLY!")
