(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralTransactions = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return [
  {
    "id": "tx_1",
    "customerId": "shankar",
    "timestamp": "2026-10-22T18:00:00",
    "type": "credit",
    "category": "pension",
    "amountPaise": 3200000,
    "rawDescription": "NEFT/CR/410000013749/CENTRAL PENSION DEPT/SBIN",
    "plainEn": "Monthly pension received ₹32,000",
    "plainHi": "मासिक पेंशन प्राप्त हुई ₹32,000",
    "plainTa": "மாதாந்திர ஓய்வூதியம் வரவு வைக்கப்பட்டது ₹32,000",
    "counterpartyName": "CENTRAL PENSION DEPT",
    "referenceNumber": "410000013749",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: NEFT (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000013749",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CENTRAL PENSION DEPT",
        "meaningEn": "Party: CENTRAL PENSION DEPT",
        "meaningHi": "संबंधित पक्ष: CENTRAL PENSION DEPT",
        "meaningTa": "தொடர்புடைய நபர்: CENTRAL PENSION DEPT"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_2",
    "customerId": "shankar",
    "timestamp": "2026-10-21T14:43:00",
    "type": "debit",
    "category": "pharmacy",
    "amountPaise": 185000,
    "rawDescription": "UPI/DR/410000027498/APOLLO PHARMACY/HDFC",
    "plainEn": "Paid for monthly medicines ₹1,850",
    "plainHi": "मासिक दवाओं के लिए भुगतान किया ₹1,850",
    "plainTa": "மாதாந்திர மருந்துகளுக்கு பணம் செலுத்தப்பட்டது ₹1,850",
    "counterpartyName": "APOLLO PHARMACY",
    "referenceNumber": "410000027498",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000027498",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "APOLLO PHARMACY",
        "meaningEn": "Party: APOLLO PHARMACY",
        "meaningHi": "संबंधित पक्ष: APOLLO PHARMACY",
        "meaningTa": "தொடர்புடைய நபர்: APOLLO PHARMACY"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Routing Code: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_3",
    "customerId": "shankar",
    "timestamp": "2026-10-20T11:26:00",
    "type": "debit",
    "category": "milk",
    "amountPaise": 160000,
    "rawDescription": "UPI/DR/410000041247/VERKA MILK BOOTH/PUNB",
    "plainEn": "Paid monthly milk bill ₹1,600",
    "plainHi": "आपने VERKA MILK BOOTH को ₹1,600 दिए",
    "plainTa": "பால் பில் தொகை செலுத்தப்பட்டது ₹1,600",
    "counterpartyName": "VERKA MILK BOOTH",
    "referenceNumber": "410000041247",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000041247",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "VERKA MILK BOOTH",
        "meaningEn": "Party: VERKA MILK BOOTH",
        "meaningHi": "संबंधित पक्ष: VERKA MILK BOOTH",
        "meaningTa": "தொடர்புடைய நபர்: VERKA MILK BOOTH"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Routing Code: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_4",
    "customerId": "shankar",
    "timestamp": "2026-10-19T08:09:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 215000,
    "rawDescription": "UPI/DR/410000054996/UPPCL ELECTRICITY/ICIC",
    "plainEn": "Paid electricity bill ₹2,150",
    "plainHi": "बिजली बिल का भुगतान किया ₹2,150",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹2,150",
    "counterpartyName": "UPPCL ELECTRICITY",
    "referenceNumber": "410000054996",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000054996",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "UPPCL ELECTRICITY",
        "meaningEn": "Party: UPPCL ELECTRICITY",
        "meaningHi": "संबंधित पक्ष: UPPCL ELECTRICITY",
        "meaningTa": "தொடர்புடைய நபர்: UPPCL ELECTRICITY"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Routing Code: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_5",
    "customerId": "shankar",
    "timestamp": "2026-10-17T05:47:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 95000,
    "rawDescription": "UPI/DR/410000068745/GUPTA GENERAL STORE/BARB",
    "plainEn": "Paid for groceries ₹950",
    "plainHi": "आपने GUPTA GENERAL STORE को ₹950 दिए",
    "plainTa": "மளிகைப் பொருட்கள் வாங்கப்பட்டது ₹950",
    "counterpartyName": "GUPTA GENERAL STORE",
    "referenceNumber": "410000068745",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000068745",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "GUPTA GENERAL STORE",
        "meaningEn": "Party: GUPTA GENERAL STORE",
        "meaningHi": "संबंधित पक्ष: GUPTA GENERAL STORE",
        "meaningTa": "தொடர்புடைய நபர்: GUPTA GENERAL STORE"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Routing Code: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_6",
    "customerId": "shankar",
    "timestamp": "2026-10-16T02:30:00",
    "type": "debit",
    "category": "vegetables",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410000082494/RAMESH VEG VENDOR/SBIN",
    "plainEn": "Paid for fresh vegetables ₹350",
    "plainHi": "ताजी सब्जियों का भुगतान किया ₹350",
    "plainTa": "காய்கறி வாங்கப்பட்டது ₹350",
    "counterpartyName": "RAMESH VEG VENDOR",
    "referenceNumber": "410000082494",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000082494",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "RAMESH VEG VENDOR",
        "meaningEn": "Party: RAMESH VEG VENDOR",
        "meaningHi": "संबंधित पक्ष: RAMESH VEG VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: RAMESH VEG VENDOR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_7",
    "customerId": "shankar",
    "timestamp": "2026-10-15T17:13:00",
    "type": "debit",
    "category": "temple",
    "amountPaise": 50000,
    "rawDescription": "UPI/DR/410000096243/HANUMAN MANDIR TRUST/UBIN",
    "plainEn": "You paid HANUMAN MANDIR TRUST ₹500",
    "plainHi": "आपने HANUMAN MANDIR TRUST को ₹500 दिए",
    "plainTa": "நீங்கள் HANUMAN MANDIR TRUST என்பவருக்கு ₹500 செலுத்தினீர்கள்",
    "counterpartyName": "HANUMAN MANDIR TRUST",
    "referenceNumber": "410000096243",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000096243",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "HANUMAN MANDIR TRUST",
        "meaningEn": "Party: HANUMAN MANDIR TRUST",
        "meaningHi": "संबंधित पक्ष: HANUMAN MANDIR TRUST",
        "meaningTa": "தொடர்புடைய நபர்: HANUMAN MANDIR TRUST"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Routing Code: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_8",
    "customerId": "shankar",
    "timestamp": "2026-10-13T14:51:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 200000,
    "rawDescription": "UPI/DR/410000109992/AARAV SHARMA/JSBK",
    "plainEn": "You paid AARAV SHARMA ₹2,000",
    "plainHi": "आपने AARAV SHARMA को ₹2,000 दिए",
    "plainTa": "நீங்கள் AARAV SHARMA என்பவருக்கு ₹2,000 செலுத்தினீர்கள்",
    "counterpartyName": "AARAV SHARMA",
    "referenceNumber": "410000109992",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000109992",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "AARAV SHARMA",
        "meaningEn": "Party: AARAV SHARMA",
        "meaningHi": "संबंधित पक्ष: AARAV SHARMA",
        "meaningTa": "தொடர்புடைய நபர்: AARAV SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_9",
    "customerId": "shankar",
    "timestamp": "2026-10-12T11:34:00",
    "type": "debit",
    "category": "newspaper",
    "amountPaise": 45000,
    "rawDescription": "UPI/DR/410000123741/DAILY TRIBUNE VENDOR/CBIN",
    "plainEn": "Paid newspaper bill ₹450",
    "plainHi": "आपने DAILY TRIBUNE VENDOR को ₹450 दिए",
    "plainTa": "செய்தித்தாள் கட்டணம் செலுத்தப்பட்டது ₹450",
    "counterpartyName": "DAILY TRIBUNE VENDOR",
    "referenceNumber": "410000123741",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000123741",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "DAILY TRIBUNE VENDOR",
        "meaningEn": "Party: DAILY TRIBUNE VENDOR",
        "meaningHi": "संबंधित पक्ष: DAILY TRIBUNE VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: DAILY TRIBUNE VENDOR"
      },
      {
        "code": "CBIN",
        "meaningEn": "Bank Routing Code: CBIN",
        "meaningHi": "बैंक कोड: CBIN",
        "meaningTa": "வங்கி குறியீடு: CBIN"
      }
    ]
  },
  {
    "id": "tx_10",
    "customerId": "shankar",
    "timestamp": "2026-10-11T08:17:00",
    "type": "debit",
    "category": "atm",
    "amountPaise": 500000,
    "rawDescription": "ATM/DR/410000137490/CASH WITHDRAWAL ATM/JSBK",
    "plainEn": "You paid CASH WITHDRAWAL ATM ₹5,000",
    "plainHi": "आपने CASH WITHDRAWAL ATM को ₹5,000 दिए",
    "plainTa": "நீங்கள் CASH WITHDRAWAL ATM என்பவருக்கு ₹5,000 செலுத்தினீர்கள்",
    "counterpartyName": "CASH WITHDRAWAL ATM",
    "referenceNumber": "410000137490",
    "paymentMode": "ATM",
    "rawBreakdown": [
      {
        "code": "ATM",
        "meaningEn": "Payment Mode: ATM (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: ATM (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: ATM (ரொக்கம் எடுத்தல்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000137490",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CASH WITHDRAWAL ATM",
        "meaningEn": "Party: CASH WITHDRAWAL ATM",
        "meaningHi": "संबंधित पक्ष: CASH WITHDRAWAL ATM",
        "meaningTa": "தொடர்புடைய நபர்: CASH WITHDRAWAL ATM"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_11",
    "customerId": "shankar",
    "timestamp": "2026-10-09T05:55:00",
    "type": "credit",
    "category": "interest",
    "amountPaise": 84500,
    "rawDescription": "INTEREST/CR/410000151239/QUARTERLY INTEREST/JSBK",
    "plainEn": "Received ₹845 from QUARTERLY INTEREST",
    "plainHi": "QUARTERLY INTEREST से ₹845 प्राप्त हुए",
    "plainTa": "QUARTERLY INTEREST இடமிருந்து ₹845 வரவு வந்தது",
    "counterpartyName": "QUARTERLY INTEREST",
    "referenceNumber": "410000151239",
    "paymentMode": "INTEREST",
    "rawBreakdown": [
      {
        "code": "INTEREST",
        "meaningEn": "Payment Mode: INTEREST (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: INTEREST (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: வட்டி வரவு"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000151239",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "QUARTERLY INTEREST",
        "meaningEn": "Party: QUARTERLY INTEREST",
        "meaningHi": "संबंधित पक्ष: QUARTERLY INTEREST",
        "meaningTa": "தொடர்புடைய நபர்: QUARTERLY INTEREST"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_12",
    "customerId": "shankar",
    "timestamp": "2026-10-08T02:38:00",
    "type": "debit",
    "category": "mobile",
    "amountPaise": 39900,
    "rawDescription": "UPI/DR/410000164988/JIO PREPAID RECHARGE/SBIN",
    "plainEn": "Mobile recharge paid ₹399",
    "plainHi": "मोबाइल रिचार्ज का भुगतान किया ₹399",
    "plainTa": "நீங்கள் JIO PREPAID RECHARGE என்பவருக்கு ₹399 செலுத்தினீர்கள்",
    "counterpartyName": "JIO PREPAID RECHARGE",
    "referenceNumber": "410000164988",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000164988",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "JIO PREPAID RECHARGE",
        "meaningEn": "Party: JIO PREPAID RECHARGE",
        "meaningHi": "संबंधित पक्ष: JIO PREPAID RECHARGE",
        "meaningTa": "தொடர்புடைய நபர்: JIO PREPAID RECHARGE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_13",
    "customerId": "shankar",
    "timestamp": "2026-10-07T17:21:00",
    "type": "debit",
    "category": "fruits",
    "amountPaise": 28000,
    "rawDescription": "UPI/DR/410000178737/SURESH FRUIT STALL/PYTM",
    "plainEn": "Paid for fruits ₹280",
    "plainHi": "आपने SURESH FRUIT STALL को ₹280 दिए",
    "plainTa": "பழங்கள் வாங்கப்பட்டது ₹280",
    "counterpartyName": "SURESH FRUIT STALL",
    "referenceNumber": "410000178737",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000178737",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "SURESH FRUIT STALL",
        "meaningEn": "Party: SURESH FRUIT STALL",
        "meaningHi": "संबंधित पक्ष: SURESH FRUIT STALL",
        "meaningTa": "தொடர்புடைய நபர்: SURESH FRUIT STALL"
      },
      {
        "code": "PYTM",
        "meaningEn": "Bank Routing Code: PYTM",
        "meaningHi": "बैंक कोड: PYTM",
        "meaningTa": "வங்கி குறியீடு: PYTM"
      }
    ]
  },
  {
    "id": "tx_14",
    "customerId": "shankar",
    "timestamp": "2026-10-05T14:59:00",
    "type": "debit",
    "category": "gas",
    "amountPaise": 115000,
    "rawDescription": "UPI/DR/410000192486/INDANE GAS CYLINDER/IOBA",
    "plainEn": "You paid INDANE GAS CYLINDER ₹1,150",
    "plainHi": "आपने INDANE GAS CYLINDER को ₹1,150 दिए",
    "plainTa": "நீங்கள் INDANE GAS CYLINDER என்பவருக்கு ₹1,150 செலுத்தினீர்கள்",
    "counterpartyName": "INDANE GAS CYLINDER",
    "referenceNumber": "410000192486",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000192486",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "INDANE GAS CYLINDER",
        "meaningEn": "Party: INDANE GAS CYLINDER",
        "meaningHi": "संबंधित पक्ष: INDANE GAS CYLINDER",
        "meaningTa": "தொடர்புடைய நபர்: INDANE GAS CYLINDER"
      },
      {
        "code": "IOBA",
        "meaningEn": "Bank Routing Code: IOBA",
        "meaningHi": "बैंक कोड: IOBA",
        "meaningTa": "வங்கி குறியீடு: IOBA"
      }
    ]
  },
  {
    "id": "tx_15",
    "customerId": "shankar",
    "timestamp": "2026-10-04T11:42:00",
    "type": "credit",
    "category": "pension",
    "amountPaise": 3200000,
    "rawDescription": "NEFT/CR/410000206235/CENTRAL PENSION DEPT/SBIN",
    "plainEn": "Monthly pension received ₹32,000",
    "plainHi": "मासिक पेंशन प्राप्त हुई ₹32,000",
    "plainTa": "மாதாந்திர ஓய்வூதியம் வரவு வைக்கப்பட்டது ₹32,000",
    "counterpartyName": "CENTRAL PENSION DEPT",
    "referenceNumber": "410000206235",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: NEFT (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000206235",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CENTRAL PENSION DEPT",
        "meaningEn": "Party: CENTRAL PENSION DEPT",
        "meaningHi": "संबंधित पक्ष: CENTRAL PENSION DEPT",
        "meaningTa": "தொடர்புடைய நபர்: CENTRAL PENSION DEPT"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_16",
    "customerId": "shankar",
    "timestamp": "2026-10-03T08:25:00",
    "type": "debit",
    "category": "pharmacy",
    "amountPaise": 185000,
    "rawDescription": "UPI/DR/410000219984/APOLLO PHARMACY/HDFC",
    "plainEn": "Paid for monthly medicines ₹1,850",
    "plainHi": "मासिक दवाओं के लिए भुगतान किया ₹1,850",
    "plainTa": "மாதாந்திர மருந்துகளுக்கு பணம் செலுத்தப்பட்டது ₹1,850",
    "counterpartyName": "APOLLO PHARMACY",
    "referenceNumber": "410000219984",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000219984",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "APOLLO PHARMACY",
        "meaningEn": "Party: APOLLO PHARMACY",
        "meaningHi": "संबंधित पक्ष: APOLLO PHARMACY",
        "meaningTa": "தொடர்புடைய நபர்: APOLLO PHARMACY"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Routing Code: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_17",
    "customerId": "shankar",
    "timestamp": "2026-10-02T05:08:00",
    "type": "debit",
    "category": "milk",
    "amountPaise": 160000,
    "rawDescription": "UPI/DR/410000233733/VERKA MILK BOOTH/PUNB",
    "plainEn": "Paid monthly milk bill ₹1,600",
    "plainHi": "आपने VERKA MILK BOOTH को ₹1,600 दिए",
    "plainTa": "பால் பில் தொகை செலுத்தப்பட்டது ₹1,600",
    "counterpartyName": "VERKA MILK BOOTH",
    "referenceNumber": "410000233733",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000233733",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "VERKA MILK BOOTH",
        "meaningEn": "Party: VERKA MILK BOOTH",
        "meaningHi": "संबंधित पक्ष: VERKA MILK BOOTH",
        "meaningTa": "தொடர்புடைய நபர்: VERKA MILK BOOTH"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Routing Code: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_18",
    "customerId": "shankar",
    "timestamp": "2026-09-30T02:46:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 215000,
    "rawDescription": "UPI/DR/410000247482/UPPCL ELECTRICITY/ICIC",
    "plainEn": "Paid electricity bill ₹2,150",
    "plainHi": "बिजली बिल का भुगतान किया ₹2,150",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹2,150",
    "counterpartyName": "UPPCL ELECTRICITY",
    "referenceNumber": "410000247482",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000247482",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "UPPCL ELECTRICITY",
        "meaningEn": "Party: UPPCL ELECTRICITY",
        "meaningHi": "संबंधित पक्ष: UPPCL ELECTRICITY",
        "meaningTa": "தொடர்புடைய நபர்: UPPCL ELECTRICITY"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Routing Code: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_19",
    "customerId": "shankar",
    "timestamp": "2026-09-29T17:29:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 95000,
    "rawDescription": "UPI/DR/410000261231/GUPTA GENERAL STORE/BARB",
    "plainEn": "Paid for groceries ₹950",
    "plainHi": "आपने GUPTA GENERAL STORE को ₹950 दिए",
    "plainTa": "மளிகைப் பொருட்கள் வாங்கப்பட்டது ₹950",
    "counterpartyName": "GUPTA GENERAL STORE",
    "referenceNumber": "410000261231",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000261231",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "GUPTA GENERAL STORE",
        "meaningEn": "Party: GUPTA GENERAL STORE",
        "meaningHi": "संबंधित पक्ष: GUPTA GENERAL STORE",
        "meaningTa": "தொடர்புடைய நபர்: GUPTA GENERAL STORE"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Routing Code: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_20",
    "customerId": "shankar",
    "timestamp": "2026-09-28T14:12:00",
    "type": "debit",
    "category": "vegetables",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410000274980/RAMESH VEG VENDOR/SBIN",
    "plainEn": "Paid for fresh vegetables ₹350",
    "plainHi": "ताजी सब्जियों का भुगतान किया ₹350",
    "plainTa": "காய்கறி வாங்கப்பட்டது ₹350",
    "counterpartyName": "RAMESH VEG VENDOR",
    "referenceNumber": "410000274980",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000274980",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "RAMESH VEG VENDOR",
        "meaningEn": "Party: RAMESH VEG VENDOR",
        "meaningHi": "संबंधित पक्ष: RAMESH VEG VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: RAMESH VEG VENDOR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_21",
    "customerId": "shankar",
    "timestamp": "2026-09-26T11:50:00",
    "type": "debit",
    "category": "temple",
    "amountPaise": 50000,
    "rawDescription": "UPI/DR/410000288729/HANUMAN MANDIR TRUST/UBIN",
    "plainEn": "You paid HANUMAN MANDIR TRUST ₹500",
    "plainHi": "आपने HANUMAN MANDIR TRUST को ₹500 दिए",
    "plainTa": "நீங்கள் HANUMAN MANDIR TRUST என்பவருக்கு ₹500 செலுத்தினீர்கள்",
    "counterpartyName": "HANUMAN MANDIR TRUST",
    "referenceNumber": "410000288729",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000288729",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "HANUMAN MANDIR TRUST",
        "meaningEn": "Party: HANUMAN MANDIR TRUST",
        "meaningHi": "संबंधित पक्ष: HANUMAN MANDIR TRUST",
        "meaningTa": "தொடர்புடைய நபர்: HANUMAN MANDIR TRUST"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Routing Code: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_22",
    "customerId": "shankar",
    "timestamp": "2026-09-25T08:33:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 200000,
    "rawDescription": "UPI/DR/410000302478/AARAV SHARMA/JSBK",
    "plainEn": "You paid AARAV SHARMA ₹2,000",
    "plainHi": "आपने AARAV SHARMA को ₹2,000 दिए",
    "plainTa": "நீங்கள் AARAV SHARMA என்பவருக்கு ₹2,000 செலுத்தினீர்கள்",
    "counterpartyName": "AARAV SHARMA",
    "referenceNumber": "410000302478",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000302478",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "AARAV SHARMA",
        "meaningEn": "Party: AARAV SHARMA",
        "meaningHi": "संबंधित पक्ष: AARAV SHARMA",
        "meaningTa": "தொடர்புடைய நபர்: AARAV SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_23",
    "customerId": "shankar",
    "timestamp": "2026-09-24T05:16:00",
    "type": "debit",
    "category": "newspaper",
    "amountPaise": 45000,
    "rawDescription": "UPI/DR/410000316227/DAILY TRIBUNE VENDOR/CBIN",
    "plainEn": "Paid newspaper bill ₹450",
    "plainHi": "आपने DAILY TRIBUNE VENDOR को ₹450 दिए",
    "plainTa": "செய்தித்தாள் கட்டணம் செலுத்தப்பட்டது ₹450",
    "counterpartyName": "DAILY TRIBUNE VENDOR",
    "referenceNumber": "410000316227",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000316227",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "DAILY TRIBUNE VENDOR",
        "meaningEn": "Party: DAILY TRIBUNE VENDOR",
        "meaningHi": "संबंधित पक्ष: DAILY TRIBUNE VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: DAILY TRIBUNE VENDOR"
      },
      {
        "code": "CBIN",
        "meaningEn": "Bank Routing Code: CBIN",
        "meaningHi": "बैंक कोड: CBIN",
        "meaningTa": "வங்கி குறியீடு: CBIN"
      }
    ]
  },
  {
    "id": "tx_24",
    "customerId": "shankar",
    "timestamp": "2026-09-22T02:54:00",
    "type": "debit",
    "category": "atm",
    "amountPaise": 500000,
    "rawDescription": "ATM/DR/410000329976/CASH WITHDRAWAL ATM/JSBK",
    "plainEn": "You paid CASH WITHDRAWAL ATM ₹5,000",
    "plainHi": "आपने CASH WITHDRAWAL ATM को ₹5,000 दिए",
    "plainTa": "நீங்கள் CASH WITHDRAWAL ATM என்பவருக்கு ₹5,000 செலுத்தினீர்கள்",
    "counterpartyName": "CASH WITHDRAWAL ATM",
    "referenceNumber": "410000329976",
    "paymentMode": "ATM",
    "rawBreakdown": [
      {
        "code": "ATM",
        "meaningEn": "Payment Mode: ATM (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: ATM (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: ATM (ரொக்கம் எடுத்தல்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000329976",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CASH WITHDRAWAL ATM",
        "meaningEn": "Party: CASH WITHDRAWAL ATM",
        "meaningHi": "संबंधित पक्ष: CASH WITHDRAWAL ATM",
        "meaningTa": "தொடர்புடைய நபர்: CASH WITHDRAWAL ATM"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_25",
    "customerId": "shankar",
    "timestamp": "2026-09-21T17:37:00",
    "type": "credit",
    "category": "interest",
    "amountPaise": 84500,
    "rawDescription": "INTEREST/CR/410000343725/QUARTERLY INTEREST/JSBK",
    "plainEn": "Received ₹845 from QUARTERLY INTEREST",
    "plainHi": "QUARTERLY INTEREST से ₹845 प्राप्त हुए",
    "plainTa": "QUARTERLY INTEREST இடமிருந்து ₹845 வரவு வந்தது",
    "counterpartyName": "QUARTERLY INTEREST",
    "referenceNumber": "410000343725",
    "paymentMode": "INTEREST",
    "rawBreakdown": [
      {
        "code": "INTEREST",
        "meaningEn": "Payment Mode: INTEREST (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: INTEREST (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: வட்டி வரவு"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000343725",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "QUARTERLY INTEREST",
        "meaningEn": "Party: QUARTERLY INTEREST",
        "meaningHi": "संबंधित पक्ष: QUARTERLY INTEREST",
        "meaningTa": "தொடர்புடைய நபர்: QUARTERLY INTEREST"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_26",
    "customerId": "shankar",
    "timestamp": "2026-09-20T14:20:00",
    "type": "debit",
    "category": "mobile",
    "amountPaise": 39900,
    "rawDescription": "UPI/DR/410000357474/JIO PREPAID RECHARGE/SBIN",
    "plainEn": "Mobile recharge paid ₹399",
    "plainHi": "मोबाइल रिचार्ज का भुगतान किया ₹399",
    "plainTa": "நீங்கள் JIO PREPAID RECHARGE என்பவருக்கு ₹399 செலுத்தினீர்கள்",
    "counterpartyName": "JIO PREPAID RECHARGE",
    "referenceNumber": "410000357474",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000357474",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "JIO PREPAID RECHARGE",
        "meaningEn": "Party: JIO PREPAID RECHARGE",
        "meaningHi": "संबंधित पक्ष: JIO PREPAID RECHARGE",
        "meaningTa": "தொடர்புடைய நபர்: JIO PREPAID RECHARGE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_27",
    "customerId": "shankar",
    "timestamp": "2026-09-18T11:58:00",
    "type": "debit",
    "category": "fruits",
    "amountPaise": 28000,
    "rawDescription": "UPI/DR/410000371223/SURESH FRUIT STALL/PYTM",
    "plainEn": "Paid for fruits ₹280",
    "plainHi": "आपने SURESH FRUIT STALL को ₹280 दिए",
    "plainTa": "பழங்கள் வாங்கப்பட்டது ₹280",
    "counterpartyName": "SURESH FRUIT STALL",
    "referenceNumber": "410000371223",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000371223",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "SURESH FRUIT STALL",
        "meaningEn": "Party: SURESH FRUIT STALL",
        "meaningHi": "संबंधित पक्ष: SURESH FRUIT STALL",
        "meaningTa": "தொடர்புடைய நபர்: SURESH FRUIT STALL"
      },
      {
        "code": "PYTM",
        "meaningEn": "Bank Routing Code: PYTM",
        "meaningHi": "बैंक कोड: PYTM",
        "meaningTa": "வங்கி குறியீடு: PYTM"
      }
    ]
  },
  {
    "id": "tx_28",
    "customerId": "shankar",
    "timestamp": "2026-09-17T08:41:00",
    "type": "debit",
    "category": "gas",
    "amountPaise": 115000,
    "rawDescription": "UPI/DR/410000384972/INDANE GAS CYLINDER/IOBA",
    "plainEn": "You paid INDANE GAS CYLINDER ₹1,150",
    "plainHi": "आपने INDANE GAS CYLINDER को ₹1,150 दिए",
    "plainTa": "நீங்கள் INDANE GAS CYLINDER என்பவருக்கு ₹1,150 செலுத்தினீர்கள்",
    "counterpartyName": "INDANE GAS CYLINDER",
    "referenceNumber": "410000384972",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000384972",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "INDANE GAS CYLINDER",
        "meaningEn": "Party: INDANE GAS CYLINDER",
        "meaningHi": "संबंधित पक्ष: INDANE GAS CYLINDER",
        "meaningTa": "தொடர்புடைய நபர்: INDANE GAS CYLINDER"
      },
      {
        "code": "IOBA",
        "meaningEn": "Bank Routing Code: IOBA",
        "meaningHi": "बैंक कोड: IOBA",
        "meaningTa": "வங்கி குறியீடு: IOBA"
      }
    ]
  },
  {
    "id": "tx_29",
    "customerId": "shankar",
    "timestamp": "2026-09-16T05:24:00",
    "type": "credit",
    "category": "pension",
    "amountPaise": 3200000,
    "rawDescription": "NEFT/CR/410000398721/CENTRAL PENSION DEPT/SBIN",
    "plainEn": "Monthly pension received ₹32,000",
    "plainHi": "मासिक पेंशन प्राप्त हुई ₹32,000",
    "plainTa": "மாதாந்திர ஓய்வூதியம் வரவு வைக்கப்பட்டது ₹32,000",
    "counterpartyName": "CENTRAL PENSION DEPT",
    "referenceNumber": "410000398721",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: NEFT (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000398721",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CENTRAL PENSION DEPT",
        "meaningEn": "Party: CENTRAL PENSION DEPT",
        "meaningHi": "संबंधित पक्ष: CENTRAL PENSION DEPT",
        "meaningTa": "தொடர்புடைய நபர்: CENTRAL PENSION DEPT"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_30",
    "customerId": "shankar",
    "timestamp": "2026-09-15T02:07:00",
    "type": "debit",
    "category": "pharmacy",
    "amountPaise": 185000,
    "rawDescription": "UPI/DR/410000412470/APOLLO PHARMACY/HDFC",
    "plainEn": "Paid for monthly medicines ₹1,850",
    "plainHi": "मासिक दवाओं के लिए भुगतान किया ₹1,850",
    "plainTa": "மாதாந்திர மருந்துகளுக்கு பணம் செலுத்தப்பட்டது ₹1,850",
    "counterpartyName": "APOLLO PHARMACY",
    "referenceNumber": "410000412470",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000412470",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "APOLLO PHARMACY",
        "meaningEn": "Party: APOLLO PHARMACY",
        "meaningHi": "संबंधित पक्ष: APOLLO PHARMACY",
        "meaningTa": "தொடர்புடைய நபர்: APOLLO PHARMACY"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Routing Code: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_31",
    "customerId": "shankar",
    "timestamp": "2026-09-13T17:45:00",
    "type": "debit",
    "category": "milk",
    "amountPaise": 160000,
    "rawDescription": "UPI/DR/410000426219/VERKA MILK BOOTH/PUNB",
    "plainEn": "Paid monthly milk bill ₹1,600",
    "plainHi": "आपने VERKA MILK BOOTH को ₹1,600 दिए",
    "plainTa": "பால் பில் தொகை செலுத்தப்பட்டது ₹1,600",
    "counterpartyName": "VERKA MILK BOOTH",
    "referenceNumber": "410000426219",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000426219",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "VERKA MILK BOOTH",
        "meaningEn": "Party: VERKA MILK BOOTH",
        "meaningHi": "संबंधित पक्ष: VERKA MILK BOOTH",
        "meaningTa": "தொடர்புடைய நபர்: VERKA MILK BOOTH"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Routing Code: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_32",
    "customerId": "shankar",
    "timestamp": "2026-09-12T14:28:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 215000,
    "rawDescription": "UPI/DR/410000439968/UPPCL ELECTRICITY/ICIC",
    "plainEn": "Paid electricity bill ₹2,150",
    "plainHi": "बिजली बिल का भुगतान किया ₹2,150",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹2,150",
    "counterpartyName": "UPPCL ELECTRICITY",
    "referenceNumber": "410000439968",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000439968",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "UPPCL ELECTRICITY",
        "meaningEn": "Party: UPPCL ELECTRICITY",
        "meaningHi": "संबंधित पक्ष: UPPCL ELECTRICITY",
        "meaningTa": "தொடர்புடைய நபர்: UPPCL ELECTRICITY"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Routing Code: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_33",
    "customerId": "shankar",
    "timestamp": "2026-09-11T11:11:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 95000,
    "rawDescription": "UPI/DR/410000453717/GUPTA GENERAL STORE/BARB",
    "plainEn": "Paid for groceries ₹950",
    "plainHi": "आपने GUPTA GENERAL STORE को ₹950 दिए",
    "plainTa": "மளிகைப் பொருட்கள் வாங்கப்பட்டது ₹950",
    "counterpartyName": "GUPTA GENERAL STORE",
    "referenceNumber": "410000453717",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000453717",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "GUPTA GENERAL STORE",
        "meaningEn": "Party: GUPTA GENERAL STORE",
        "meaningHi": "संबंधित पक्ष: GUPTA GENERAL STORE",
        "meaningTa": "தொடர்புடைய நபர்: GUPTA GENERAL STORE"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Routing Code: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_34",
    "customerId": "shankar",
    "timestamp": "2026-09-09T08:49:00",
    "type": "debit",
    "category": "vegetables",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410000467466/RAMESH VEG VENDOR/SBIN",
    "plainEn": "Paid for fresh vegetables ₹350",
    "plainHi": "ताजी सब्जियों का भुगतान किया ₹350",
    "plainTa": "காய்கறி வாங்கப்பட்டது ₹350",
    "counterpartyName": "RAMESH VEG VENDOR",
    "referenceNumber": "410000467466",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000467466",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "RAMESH VEG VENDOR",
        "meaningEn": "Party: RAMESH VEG VENDOR",
        "meaningHi": "संबंधित पक्ष: RAMESH VEG VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: RAMESH VEG VENDOR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_35",
    "customerId": "shankar",
    "timestamp": "2026-09-08T05:32:00",
    "type": "debit",
    "category": "temple",
    "amountPaise": 50000,
    "rawDescription": "UPI/DR/410000481215/HANUMAN MANDIR TRUST/UBIN",
    "plainEn": "You paid HANUMAN MANDIR TRUST ₹500",
    "plainHi": "आपने HANUMAN MANDIR TRUST को ₹500 दिए",
    "plainTa": "நீங்கள் HANUMAN MANDIR TRUST என்பவருக்கு ₹500 செலுத்தினீர்கள்",
    "counterpartyName": "HANUMAN MANDIR TRUST",
    "referenceNumber": "410000481215",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000481215",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "HANUMAN MANDIR TRUST",
        "meaningEn": "Party: HANUMAN MANDIR TRUST",
        "meaningHi": "संबंधित पक्ष: HANUMAN MANDIR TRUST",
        "meaningTa": "தொடர்புடைய நபர்: HANUMAN MANDIR TRUST"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Routing Code: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_36",
    "customerId": "shankar",
    "timestamp": "2026-09-07T02:15:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 200000,
    "rawDescription": "UPI/DR/410000494964/AARAV SHARMA/JSBK",
    "plainEn": "You paid AARAV SHARMA ₹2,000",
    "plainHi": "आपने AARAV SHARMA को ₹2,000 दिए",
    "plainTa": "நீங்கள் AARAV SHARMA என்பவருக்கு ₹2,000 செலுத்தினீர்கள்",
    "counterpartyName": "AARAV SHARMA",
    "referenceNumber": "410000494964",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000494964",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "AARAV SHARMA",
        "meaningEn": "Party: AARAV SHARMA",
        "meaningHi": "संबंधित पक्ष: AARAV SHARMA",
        "meaningTa": "தொடர்புடைய நபர்: AARAV SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_37",
    "customerId": "shankar",
    "timestamp": "2026-09-05T17:53:00",
    "type": "debit",
    "category": "newspaper",
    "amountPaise": 45000,
    "rawDescription": "UPI/DR/410000508713/DAILY TRIBUNE VENDOR/CBIN",
    "plainEn": "Paid newspaper bill ₹450",
    "plainHi": "आपने DAILY TRIBUNE VENDOR को ₹450 दिए",
    "plainTa": "செய்தித்தாள் கட்டணம் செலுத்தப்பட்டது ₹450",
    "counterpartyName": "DAILY TRIBUNE VENDOR",
    "referenceNumber": "410000508713",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000508713",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "DAILY TRIBUNE VENDOR",
        "meaningEn": "Party: DAILY TRIBUNE VENDOR",
        "meaningHi": "संबंधित पक्ष: DAILY TRIBUNE VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: DAILY TRIBUNE VENDOR"
      },
      {
        "code": "CBIN",
        "meaningEn": "Bank Routing Code: CBIN",
        "meaningHi": "बैंक कोड: CBIN",
        "meaningTa": "வங்கி குறியீடு: CBIN"
      }
    ]
  },
  {
    "id": "tx_38",
    "customerId": "shankar",
    "timestamp": "2026-09-04T14:36:00",
    "type": "debit",
    "category": "atm",
    "amountPaise": 500000,
    "rawDescription": "ATM/DR/410000522462/CASH WITHDRAWAL ATM/JSBK",
    "plainEn": "You paid CASH WITHDRAWAL ATM ₹5,000",
    "plainHi": "आपने CASH WITHDRAWAL ATM को ₹5,000 दिए",
    "plainTa": "நீங்கள் CASH WITHDRAWAL ATM என்பவருக்கு ₹5,000 செலுத்தினீர்கள்",
    "counterpartyName": "CASH WITHDRAWAL ATM",
    "referenceNumber": "410000522462",
    "paymentMode": "ATM",
    "rawBreakdown": [
      {
        "code": "ATM",
        "meaningEn": "Payment Mode: ATM (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: ATM (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: ATM (ரொக்கம் எடுத்தல்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000522462",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CASH WITHDRAWAL ATM",
        "meaningEn": "Party: CASH WITHDRAWAL ATM",
        "meaningHi": "संबंधित पक्ष: CASH WITHDRAWAL ATM",
        "meaningTa": "தொடர்புடைய நபர்: CASH WITHDRAWAL ATM"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_39",
    "customerId": "shankar",
    "timestamp": "2026-09-03T11:19:00",
    "type": "credit",
    "category": "interest",
    "amountPaise": 84500,
    "rawDescription": "INTEREST/CR/410000536211/QUARTERLY INTEREST/JSBK",
    "plainEn": "Received ₹845 from QUARTERLY INTEREST",
    "plainHi": "QUARTERLY INTEREST से ₹845 प्राप्त हुए",
    "plainTa": "QUARTERLY INTEREST இடமிருந்து ₹845 வரவு வந்தது",
    "counterpartyName": "QUARTERLY INTEREST",
    "referenceNumber": "410000536211",
    "paymentMode": "INTEREST",
    "rawBreakdown": [
      {
        "code": "INTEREST",
        "meaningEn": "Payment Mode: INTEREST (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: INTEREST (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: வட்டி வரவு"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000536211",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "QUARTERLY INTEREST",
        "meaningEn": "Party: QUARTERLY INTEREST",
        "meaningHi": "संबंधित पक्ष: QUARTERLY INTEREST",
        "meaningTa": "தொடர்புடைய நபர்: QUARTERLY INTEREST"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_40",
    "customerId": "shankar",
    "timestamp": "2026-09-01T08:57:00",
    "type": "debit",
    "category": "mobile",
    "amountPaise": 39900,
    "rawDescription": "UPI/DR/410000549960/JIO PREPAID RECHARGE/SBIN",
    "plainEn": "Mobile recharge paid ₹399",
    "plainHi": "मोबाइल रिचार्ज का भुगतान किया ₹399",
    "plainTa": "நீங்கள் JIO PREPAID RECHARGE என்பவருக்கு ₹399 செலுத்தினீர்கள்",
    "counterpartyName": "JIO PREPAID RECHARGE",
    "referenceNumber": "410000549960",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000549960",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "JIO PREPAID RECHARGE",
        "meaningEn": "Party: JIO PREPAID RECHARGE",
        "meaningHi": "संबंधित पक्ष: JIO PREPAID RECHARGE",
        "meaningTa": "தொடர்புடைய நபர்: JIO PREPAID RECHARGE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_41",
    "customerId": "shankar",
    "timestamp": "2026-08-31T05:40:00",
    "type": "debit",
    "category": "fruits",
    "amountPaise": 28000,
    "rawDescription": "UPI/DR/410000563709/SURESH FRUIT STALL/PYTM",
    "plainEn": "Paid for fruits ₹280",
    "plainHi": "आपने SURESH FRUIT STALL को ₹280 दिए",
    "plainTa": "பழங்கள் வாங்கப்பட்டது ₹280",
    "counterpartyName": "SURESH FRUIT STALL",
    "referenceNumber": "410000563709",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000563709",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "SURESH FRUIT STALL",
        "meaningEn": "Party: SURESH FRUIT STALL",
        "meaningHi": "संबंधित पक्ष: SURESH FRUIT STALL",
        "meaningTa": "தொடர்புடைய நபர்: SURESH FRUIT STALL"
      },
      {
        "code": "PYTM",
        "meaningEn": "Bank Routing Code: PYTM",
        "meaningHi": "बैंक कोड: PYTM",
        "meaningTa": "வங்கி குறியீடு: PYTM"
      }
    ]
  },
  {
    "id": "tx_42",
    "customerId": "shankar",
    "timestamp": "2026-08-30T02:23:00",
    "type": "debit",
    "category": "gas",
    "amountPaise": 115000,
    "rawDescription": "UPI/DR/410000577458/INDANE GAS CYLINDER/IOBA",
    "plainEn": "You paid INDANE GAS CYLINDER ₹1,150",
    "plainHi": "आपने INDANE GAS CYLINDER को ₹1,150 दिए",
    "plainTa": "நீங்கள் INDANE GAS CYLINDER என்பவருக்கு ₹1,150 செலுத்தினீர்கள்",
    "counterpartyName": "INDANE GAS CYLINDER",
    "referenceNumber": "410000577458",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000577458",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "INDANE GAS CYLINDER",
        "meaningEn": "Party: INDANE GAS CYLINDER",
        "meaningHi": "संबंधित पक्ष: INDANE GAS CYLINDER",
        "meaningTa": "தொடர்புடைய நபர்: INDANE GAS CYLINDER"
      },
      {
        "code": "IOBA",
        "meaningEn": "Bank Routing Code: IOBA",
        "meaningHi": "बैंक कोड: IOBA",
        "meaningTa": "வங்கி குறியீடு: IOBA"
      }
    ]
  },
  {
    "id": "tx_43",
    "customerId": "shankar",
    "timestamp": "2026-08-29T17:06:00",
    "type": "credit",
    "category": "pension",
    "amountPaise": 3200000,
    "rawDescription": "NEFT/CR/410000591207/CENTRAL PENSION DEPT/SBIN",
    "plainEn": "Monthly pension received ₹32,000",
    "plainHi": "मासिक पेंशन प्राप्त हुई ₹32,000",
    "plainTa": "மாதாந்திர ஓய்வூதியம் வரவு வைக்கப்பட்டது ₹32,000",
    "counterpartyName": "CENTRAL PENSION DEPT",
    "referenceNumber": "410000591207",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: NEFT (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000591207",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CENTRAL PENSION DEPT",
        "meaningEn": "Party: CENTRAL PENSION DEPT",
        "meaningHi": "संबंधित पक्ष: CENTRAL PENSION DEPT",
        "meaningTa": "தொடர்புடைய நபர்: CENTRAL PENSION DEPT"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_44",
    "customerId": "shankar",
    "timestamp": "2026-08-27T14:44:00",
    "type": "debit",
    "category": "pharmacy",
    "amountPaise": 185000,
    "rawDescription": "UPI/DR/410000604956/APOLLO PHARMACY/HDFC",
    "plainEn": "Paid for monthly medicines ₹1,850",
    "plainHi": "मासिक दवाओं के लिए भुगतान किया ₹1,850",
    "plainTa": "மாதாந்திர மருந்துகளுக்கு பணம் செலுத்தப்பட்டது ₹1,850",
    "counterpartyName": "APOLLO PHARMACY",
    "referenceNumber": "410000604956",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000604956",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "APOLLO PHARMACY",
        "meaningEn": "Party: APOLLO PHARMACY",
        "meaningHi": "संबंधित पक्ष: APOLLO PHARMACY",
        "meaningTa": "தொடர்புடைய நபர்: APOLLO PHARMACY"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Routing Code: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_45",
    "customerId": "shankar",
    "timestamp": "2026-08-26T11:27:00",
    "type": "debit",
    "category": "milk",
    "amountPaise": 160000,
    "rawDescription": "UPI/DR/410000618705/VERKA MILK BOOTH/PUNB",
    "plainEn": "Paid monthly milk bill ₹1,600",
    "plainHi": "आपने VERKA MILK BOOTH को ₹1,600 दिए",
    "plainTa": "பால் பில் தொகை செலுத்தப்பட்டது ₹1,600",
    "counterpartyName": "VERKA MILK BOOTH",
    "referenceNumber": "410000618705",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000618705",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "VERKA MILK BOOTH",
        "meaningEn": "Party: VERKA MILK BOOTH",
        "meaningHi": "संबंधित पक्ष: VERKA MILK BOOTH",
        "meaningTa": "தொடர்புடைய நபர்: VERKA MILK BOOTH"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Routing Code: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_46",
    "customerId": "shankar",
    "timestamp": "2026-08-25T08:10:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 215000,
    "rawDescription": "UPI/DR/410000632454/UPPCL ELECTRICITY/ICIC",
    "plainEn": "Paid electricity bill ₹2,150",
    "plainHi": "बिजली बिल का भुगतान किया ₹2,150",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹2,150",
    "counterpartyName": "UPPCL ELECTRICITY",
    "referenceNumber": "410000632454",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000632454",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "UPPCL ELECTRICITY",
        "meaningEn": "Party: UPPCL ELECTRICITY",
        "meaningHi": "संबंधित पक्ष: UPPCL ELECTRICITY",
        "meaningTa": "தொடர்புடைய நபர்: UPPCL ELECTRICITY"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Routing Code: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_47",
    "customerId": "shankar",
    "timestamp": "2026-08-23T05:48:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 95000,
    "rawDescription": "UPI/DR/410000646203/GUPTA GENERAL STORE/BARB",
    "plainEn": "Paid for groceries ₹950",
    "plainHi": "आपने GUPTA GENERAL STORE को ₹950 दिए",
    "plainTa": "மளிகைப் பொருட்கள் வாங்கப்பட்டது ₹950",
    "counterpartyName": "GUPTA GENERAL STORE",
    "referenceNumber": "410000646203",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000646203",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "GUPTA GENERAL STORE",
        "meaningEn": "Party: GUPTA GENERAL STORE",
        "meaningHi": "संबंधित पक्ष: GUPTA GENERAL STORE",
        "meaningTa": "தொடர்புடைய நபர்: GUPTA GENERAL STORE"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Routing Code: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_48",
    "customerId": "shankar",
    "timestamp": "2026-08-22T02:31:00",
    "type": "debit",
    "category": "vegetables",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410000659952/RAMESH VEG VENDOR/SBIN",
    "plainEn": "Paid for fresh vegetables ₹350",
    "plainHi": "ताजी सब्जियों का भुगतान किया ₹350",
    "plainTa": "காய்கறி வாங்கப்பட்டது ₹350",
    "counterpartyName": "RAMESH VEG VENDOR",
    "referenceNumber": "410000659952",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000659952",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "RAMESH VEG VENDOR",
        "meaningEn": "Party: RAMESH VEG VENDOR",
        "meaningHi": "संबंधित पक्ष: RAMESH VEG VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: RAMESH VEG VENDOR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_49",
    "customerId": "shankar",
    "timestamp": "2026-08-21T17:14:00",
    "type": "debit",
    "category": "temple",
    "amountPaise": 50000,
    "rawDescription": "UPI/DR/410000673701/HANUMAN MANDIR TRUST/UBIN",
    "plainEn": "You paid HANUMAN MANDIR TRUST ₹500",
    "plainHi": "आपने HANUMAN MANDIR TRUST को ₹500 दिए",
    "plainTa": "நீங்கள் HANUMAN MANDIR TRUST என்பவருக்கு ₹500 செலுத்தினீர்கள்",
    "counterpartyName": "HANUMAN MANDIR TRUST",
    "referenceNumber": "410000673701",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000673701",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "HANUMAN MANDIR TRUST",
        "meaningEn": "Party: HANUMAN MANDIR TRUST",
        "meaningHi": "संबंधित पक्ष: HANUMAN MANDIR TRUST",
        "meaningTa": "தொடர்புடைய நபர்: HANUMAN MANDIR TRUST"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Routing Code: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_50",
    "customerId": "shankar",
    "timestamp": "2026-08-19T14:52:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 200000,
    "rawDescription": "UPI/DR/410000687450/AARAV SHARMA/JSBK",
    "plainEn": "You paid AARAV SHARMA ₹2,000",
    "plainHi": "आपने AARAV SHARMA को ₹2,000 दिए",
    "plainTa": "நீங்கள் AARAV SHARMA என்பவருக்கு ₹2,000 செலுத்தினீர்கள்",
    "counterpartyName": "AARAV SHARMA",
    "referenceNumber": "410000687450",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000687450",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "AARAV SHARMA",
        "meaningEn": "Party: AARAV SHARMA",
        "meaningHi": "संबंधित पक्ष: AARAV SHARMA",
        "meaningTa": "தொடர்புடைய நபர்: AARAV SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_51",
    "customerId": "shankar",
    "timestamp": "2026-08-18T11:35:00",
    "type": "debit",
    "category": "newspaper",
    "amountPaise": 45000,
    "rawDescription": "UPI/DR/410000701199/DAILY TRIBUNE VENDOR/CBIN",
    "plainEn": "Paid newspaper bill ₹450",
    "plainHi": "आपने DAILY TRIBUNE VENDOR को ₹450 दिए",
    "plainTa": "செய்தித்தாள் கட்டணம் செலுத்தப்பட்டது ₹450",
    "counterpartyName": "DAILY TRIBUNE VENDOR",
    "referenceNumber": "410000701199",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000701199",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "DAILY TRIBUNE VENDOR",
        "meaningEn": "Party: DAILY TRIBUNE VENDOR",
        "meaningHi": "संबंधित पक्ष: DAILY TRIBUNE VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: DAILY TRIBUNE VENDOR"
      },
      {
        "code": "CBIN",
        "meaningEn": "Bank Routing Code: CBIN",
        "meaningHi": "बैंक कोड: CBIN",
        "meaningTa": "வங்கி குறியீடு: CBIN"
      }
    ]
  },
  {
    "id": "tx_52",
    "customerId": "shankar",
    "timestamp": "2026-08-17T08:18:00",
    "type": "debit",
    "category": "atm",
    "amountPaise": 500000,
    "rawDescription": "ATM/DR/410000714948/CASH WITHDRAWAL ATM/JSBK",
    "plainEn": "You paid CASH WITHDRAWAL ATM ₹5,000",
    "plainHi": "आपने CASH WITHDRAWAL ATM को ₹5,000 दिए",
    "plainTa": "நீங்கள் CASH WITHDRAWAL ATM என்பவருக்கு ₹5,000 செலுத்தினீர்கள்",
    "counterpartyName": "CASH WITHDRAWAL ATM",
    "referenceNumber": "410000714948",
    "paymentMode": "ATM",
    "rawBreakdown": [
      {
        "code": "ATM",
        "meaningEn": "Payment Mode: ATM (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: ATM (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: ATM (ரொக்கம் எடுத்தல்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000714948",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CASH WITHDRAWAL ATM",
        "meaningEn": "Party: CASH WITHDRAWAL ATM",
        "meaningHi": "संबंधित पक्ष: CASH WITHDRAWAL ATM",
        "meaningTa": "தொடர்புடைய நபர்: CASH WITHDRAWAL ATM"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_53",
    "customerId": "shankar",
    "timestamp": "2026-08-15T05:56:00",
    "type": "credit",
    "category": "interest",
    "amountPaise": 84500,
    "rawDescription": "INTEREST/CR/410000728697/QUARTERLY INTEREST/JSBK",
    "plainEn": "Received ₹845 from QUARTERLY INTEREST",
    "plainHi": "QUARTERLY INTEREST से ₹845 प्राप्त हुए",
    "plainTa": "QUARTERLY INTEREST இடமிருந்து ₹845 வரவு வந்தது",
    "counterpartyName": "QUARTERLY INTEREST",
    "referenceNumber": "410000728697",
    "paymentMode": "INTEREST",
    "rawBreakdown": [
      {
        "code": "INTEREST",
        "meaningEn": "Payment Mode: INTEREST (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: INTEREST (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: வட்டி வரவு"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000728697",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "QUARTERLY INTEREST",
        "meaningEn": "Party: QUARTERLY INTEREST",
        "meaningHi": "संबंधित पक्ष: QUARTERLY INTEREST",
        "meaningTa": "தொடர்புடைய நபர்: QUARTERLY INTEREST"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_54",
    "customerId": "shankar",
    "timestamp": "2026-08-14T02:39:00",
    "type": "debit",
    "category": "mobile",
    "amountPaise": 39900,
    "rawDescription": "UPI/DR/410000742446/JIO PREPAID RECHARGE/SBIN",
    "plainEn": "Mobile recharge paid ₹399",
    "plainHi": "मोबाइल रिचार्ज का भुगतान किया ₹399",
    "plainTa": "நீங்கள் JIO PREPAID RECHARGE என்பவருக்கு ₹399 செலுத்தினீர்கள்",
    "counterpartyName": "JIO PREPAID RECHARGE",
    "referenceNumber": "410000742446",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000742446",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "JIO PREPAID RECHARGE",
        "meaningEn": "Party: JIO PREPAID RECHARGE",
        "meaningHi": "संबंधित पक्ष: JIO PREPAID RECHARGE",
        "meaningTa": "தொடர்புடைய நபர்: JIO PREPAID RECHARGE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_55",
    "customerId": "shankar",
    "timestamp": "2026-08-13T17:22:00",
    "type": "debit",
    "category": "fruits",
    "amountPaise": 28000,
    "rawDescription": "UPI/DR/410000756195/SURESH FRUIT STALL/PYTM",
    "plainEn": "Paid for fruits ₹280",
    "plainHi": "आपने SURESH FRUIT STALL को ₹280 दिए",
    "plainTa": "பழங்கள் வாங்கப்பட்டது ₹280",
    "counterpartyName": "SURESH FRUIT STALL",
    "referenceNumber": "410000756195",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000756195",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "SURESH FRUIT STALL",
        "meaningEn": "Party: SURESH FRUIT STALL",
        "meaningHi": "संबंधित पक्ष: SURESH FRUIT STALL",
        "meaningTa": "தொடர்புடைய நபர்: SURESH FRUIT STALL"
      },
      {
        "code": "PYTM",
        "meaningEn": "Bank Routing Code: PYTM",
        "meaningHi": "बैंक कोड: PYTM",
        "meaningTa": "வங்கி குறியீடு: PYTM"
      }
    ]
  },
  {
    "id": "tx_56",
    "customerId": "shankar",
    "timestamp": "2026-08-12T15:00:00",
    "type": "debit",
    "category": "gas",
    "amountPaise": 115000,
    "rawDescription": "UPI/DR/410000769944/INDANE GAS CYLINDER/IOBA",
    "plainEn": "You paid INDANE GAS CYLINDER ₹1,150",
    "plainHi": "आपने INDANE GAS CYLINDER को ₹1,150 दिए",
    "plainTa": "நீங்கள் INDANE GAS CYLINDER என்பவருக்கு ₹1,150 செலுத்தினீர்கள்",
    "counterpartyName": "INDANE GAS CYLINDER",
    "referenceNumber": "410000769944",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000769944",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "INDANE GAS CYLINDER",
        "meaningEn": "Party: INDANE GAS CYLINDER",
        "meaningHi": "संबंधित पक्ष: INDANE GAS CYLINDER",
        "meaningTa": "தொடர்புடைய நபர்: INDANE GAS CYLINDER"
      },
      {
        "code": "IOBA",
        "meaningEn": "Bank Routing Code: IOBA",
        "meaningHi": "बैंक कोड: IOBA",
        "meaningTa": "வங்கி குறியீடு: IOBA"
      }
    ]
  },
  {
    "id": "tx_57",
    "customerId": "shankar",
    "timestamp": "2026-08-10T11:43:00",
    "type": "credit",
    "category": "pension",
    "amountPaise": 3200000,
    "rawDescription": "NEFT/CR/410000783693/CENTRAL PENSION DEPT/SBIN",
    "plainEn": "Monthly pension received ₹32,000",
    "plainHi": "मासिक पेंशन प्राप्त हुई ₹32,000",
    "plainTa": "மாதாந்திர ஓய்வூதியம் வரவு வைக்கப்பட்டது ₹32,000",
    "counterpartyName": "CENTRAL PENSION DEPT",
    "referenceNumber": "410000783693",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: NEFT (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (आपके खाते में पैसे जमा हुए)",
        "meaningTa": "வரவு (உங்கள் கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000783693",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "CENTRAL PENSION DEPT",
        "meaningEn": "Party: CENTRAL PENSION DEPT",
        "meaningHi": "संबंधित पक्ष: CENTRAL PENSION DEPT",
        "meaningTa": "தொடர்புடைய நபர்: CENTRAL PENSION DEPT"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_58",
    "customerId": "shankar",
    "timestamp": "2026-08-09T08:26:00",
    "type": "debit",
    "category": "pharmacy",
    "amountPaise": 185000,
    "rawDescription": "UPI/DR/410000797442/APOLLO PHARMACY/HDFC",
    "plainEn": "Paid for monthly medicines ₹1,850",
    "plainHi": "मासिक दवाओं के लिए भुगतान किया ₹1,850",
    "plainTa": "மாதாந்திர மருந்துகளுக்கு பணம் செலுத்தப்பட்டது ₹1,850",
    "counterpartyName": "APOLLO PHARMACY",
    "referenceNumber": "410000797442",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000797442",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "APOLLO PHARMACY",
        "meaningEn": "Party: APOLLO PHARMACY",
        "meaningHi": "संबंधित पक्ष: APOLLO PHARMACY",
        "meaningTa": "தொடர்புடைய நபர்: APOLLO PHARMACY"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Routing Code: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_59",
    "customerId": "shankar",
    "timestamp": "2026-08-08T05:09:00",
    "type": "debit",
    "category": "milk",
    "amountPaise": 160000,
    "rawDescription": "UPI/DR/410000811191/VERKA MILK BOOTH/PUNB",
    "plainEn": "Paid monthly milk bill ₹1,600",
    "plainHi": "आपने VERKA MILK BOOTH को ₹1,600 दिए",
    "plainTa": "பால் பில் தொகை செலுத்தப்பட்டது ₹1,600",
    "counterpartyName": "VERKA MILK BOOTH",
    "referenceNumber": "410000811191",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000811191",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "VERKA MILK BOOTH",
        "meaningEn": "Party: VERKA MILK BOOTH",
        "meaningHi": "संबंधित पक्ष: VERKA MILK BOOTH",
        "meaningTa": "தொடர்புடைய நபர்: VERKA MILK BOOTH"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Routing Code: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_60",
    "customerId": "shankar",
    "timestamp": "2026-08-06T02:47:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 215000,
    "rawDescription": "UPI/DR/410000824940/UPPCL ELECTRICITY/ICIC",
    "plainEn": "Paid electricity bill ₹2,150",
    "plainHi": "बिजली बिल का भुगतान किया ₹2,150",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹2,150",
    "counterpartyName": "UPPCL ELECTRICITY",
    "referenceNumber": "410000824940",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000824940",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "UPPCL ELECTRICITY",
        "meaningEn": "Party: UPPCL ELECTRICITY",
        "meaningHi": "संबंधित पक्ष: UPPCL ELECTRICITY",
        "meaningTa": "தொடர்புடைய நபர்: UPPCL ELECTRICITY"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Routing Code: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_61",
    "customerId": "shankar",
    "timestamp": "2026-08-05T17:30:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 95000,
    "rawDescription": "UPI/DR/410000838689/GUPTA GENERAL STORE/BARB",
    "plainEn": "Paid for groceries ₹950",
    "plainHi": "आपने GUPTA GENERAL STORE को ₹950 दिए",
    "plainTa": "மளிகைப் பொருட்கள் வாங்கப்பட்டது ₹950",
    "counterpartyName": "GUPTA GENERAL STORE",
    "referenceNumber": "410000838689",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000838689",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "GUPTA GENERAL STORE",
        "meaningEn": "Party: GUPTA GENERAL STORE",
        "meaningHi": "संबंधित पक्ष: GUPTA GENERAL STORE",
        "meaningTa": "தொடர்புடைய நபர்: GUPTA GENERAL STORE"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Routing Code: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_62",
    "customerId": "shankar",
    "timestamp": "2026-08-04T14:13:00",
    "type": "debit",
    "category": "vegetables",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410000852438/RAMESH VEG VENDOR/SBIN",
    "plainEn": "Paid for fresh vegetables ₹350",
    "plainHi": "ताजी सब्जियों का भुगतान किया ₹350",
    "plainTa": "காய்கறி வாங்கப்பட்டது ₹350",
    "counterpartyName": "RAMESH VEG VENDOR",
    "referenceNumber": "410000852438",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000852438",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "RAMESH VEG VENDOR",
        "meaningEn": "Party: RAMESH VEG VENDOR",
        "meaningHi": "संबंधित पक्ष: RAMESH VEG VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: RAMESH VEG VENDOR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Routing Code: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_63",
    "customerId": "shankar",
    "timestamp": "2026-08-02T11:51:00",
    "type": "debit",
    "category": "temple",
    "amountPaise": 50000,
    "rawDescription": "UPI/DR/410000866187/HANUMAN MANDIR TRUST/UBIN",
    "plainEn": "You paid HANUMAN MANDIR TRUST ₹500",
    "plainHi": "आपने HANUMAN MANDIR TRUST को ₹500 दिए",
    "plainTa": "நீங்கள் HANUMAN MANDIR TRUST என்பவருக்கு ₹500 செலுத்தினீர்கள்",
    "counterpartyName": "HANUMAN MANDIR TRUST",
    "referenceNumber": "410000866187",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000866187",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "HANUMAN MANDIR TRUST",
        "meaningEn": "Party: HANUMAN MANDIR TRUST",
        "meaningHi": "संबंधित पक्ष: HANUMAN MANDIR TRUST",
        "meaningTa": "தொடர்புடைய நபர்: HANUMAN MANDIR TRUST"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Routing Code: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_64",
    "customerId": "shankar",
    "timestamp": "2026-08-01T08:34:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 200000,
    "rawDescription": "UPI/DR/410000879936/AARAV SHARMA/JSBK",
    "plainEn": "You paid AARAV SHARMA ₹2,000",
    "plainHi": "आपने AARAV SHARMA को ₹2,000 दिए",
    "plainTa": "நீங்கள் AARAV SHARMA என்பவருக்கு ₹2,000 செலுத்தினீர்கள்",
    "counterpartyName": "AARAV SHARMA",
    "referenceNumber": "410000879936",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000879936",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "AARAV SHARMA",
        "meaningEn": "Party: AARAV SHARMA",
        "meaningHi": "संबंधित पक्ष: AARAV SHARMA",
        "meaningTa": "தொடர்புடைய நபர்: AARAV SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Routing Code: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_65",
    "customerId": "shankar",
    "timestamp": "2026-07-31T05:17:00",
    "type": "debit",
    "category": "newspaper",
    "amountPaise": 45000,
    "rawDescription": "UPI/DR/410000893685/DAILY TRIBUNE VENDOR/CBIN",
    "plainEn": "Paid newspaper bill ₹450",
    "plainHi": "आपने DAILY TRIBUNE VENDOR को ₹450 दिए",
    "plainTa": "செய்தித்தாள் கட்டணம் செலுத்தப்பட்டது ₹450",
    "counterpartyName": "DAILY TRIBUNE VENDOR",
    "referenceNumber": "410000893685",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Standard secure system)",
        "meaningHi": "भुगतान माध्यम: UPI (सुरक्षित बैंकिंग प्रणाली)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (आपके खाते से पैसे कटे)",
        "meaningTa": "பற்று (உங்கள் கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000893685",
        "meaningEn": "Bank reference number (quote this to bank if any issue)",
        "meaningHi": "बैंक संदर्भ संख्या (किसी समस्या पर बैंक को यह बताएं)",
        "meaningTa": "வங்கி பரிவர்த்தனை எண் (சிக்கல் இருந்தால் இதைத் தெரிவிக்கவும்)"
      },
      {
        "code": "DAILY TRIBUNE VENDOR",
        "meaningEn": "Party: DAILY TRIBUNE VENDOR",
        "meaningHi": "संबंधित पक्ष: DAILY TRIBUNE VENDOR",
        "meaningTa": "தொடர்புடைய நபர்: DAILY TRIBUNE VENDOR"
      },
      {
        "code": "CBIN",
        "meaningEn": "Bank Routing Code: CBIN",
        "meaningHi": "बैंक कोड: CBIN",
        "meaningTa": "வங்கி குறியீடு: CBIN"
      }
    ]
  },
  {
    "id": "tx_66",
    "customerId": "priya",
    "timestamp": "2026-10-22T18:00:00",
    "type": "credit",
    "category": "salary",
    "amountPaise": 11500000,
    "rawDescription": "NEFT/CR/410000907434/INFOSYS TECHNOLOGIES/HDFC",
    "plainEn": "Monthly salary credited ₹1,15,000",
    "plainHi": "मासिक वेतन खाते में जमा हुआ ₹1,15,000",
    "plainTa": "மாதாந்திர சம்பளம் வரவு வைக்கப்பட்டது ₹1,15,000",
    "counterpartyName": "INFOSYS TECHNOLOGIES",
    "referenceNumber": "410000907434",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410000907434",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "INFOSYS TECHNOLOGIES",
        "meaningEn": "Entity: INFOSYS TECHNOLOGIES",
        "meaningHi": "संस्थान/व्यक्ति: INFOSYS TECHNOLOGIES",
        "meaningTa": "நிறுவனம் / நபர்: INFOSYS TECHNOLOGIES"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_67",
    "customerId": "priya",
    "timestamp": "2026-10-21T13:37:00",
    "type": "debit",
    "category": "rent",
    "amountPaise": 2600000,
    "rawDescription": "NEFT/DR/410000921183/ANAND BUILDERS RENT/ICIC",
    "plainEn": "House rent paid ₹26,000",
    "plainHi": "घर का किराया चुकाया ₹26,000",
    "plainTa": "வீட்டு வாடகை செலுத்தப்பட்டது ₹26,000",
    "counterpartyName": "ANAND BUILDERS RENT",
    "referenceNumber": "410000921183",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000921183",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ANAND BUILDERS RENT",
        "meaningEn": "Entity: ANAND BUILDERS RENT",
        "meaningHi": "संस्थान/व्यक्ति: ANAND BUILDERS RENT",
        "meaningTa": "நிறுவனம் / நபர்: ANAND BUILDERS RENT"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_68",
    "customerId": "priya",
    "timestamp": "2026-10-20T09:14:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 1500000,
    "rawDescription": "UPI/DR/410000934932/SHANKAR NARAYAN/JSBK",
    "plainEn": "You paid SHANKAR NARAYAN ₹15,000",
    "plainHi": "आपने SHANKAR NARAYAN को ₹15,000 दिए",
    "plainTa": "நீங்கள் SHANKAR NARAYAN என்பவருக்கு ₹15,000 செலுத்தினீர்கள்",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410000934932",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000934932",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "Entity: SHANKAR NARAYAN",
        "meaningHi": "संस्थान/व्यक्ति: SHANKAR NARAYAN",
        "meaningTa": "நிறுவனம் / நபர்: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक पहचान कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_69",
    "customerId": "priya",
    "timestamp": "2026-10-19T05:49:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 420000,
    "rawDescription": "UPI/DR/410000948681/NATURE BASKET/SBIN",
    "plainEn": "You paid NATURE BASKET ₹4,200",
    "plainHi": "किराना सुपरमार्केट में भुगतान किया ₹4,200",
    "plainTa": "பல்பொருள் அங்காடியில் மளிகை வாங்கப்பட்டது ₹4,200",
    "counterpartyName": "NATURE BASKET",
    "referenceNumber": "410000948681",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000948681",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NATURE BASKET",
        "meaningEn": "Entity: NATURE BASKET",
        "meaningHi": "संस्थान/व्यक्ति: NATURE BASKET",
        "meaningTa": "நிறுவனம் / நபர்: NATURE BASKET"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_70",
    "customerId": "priya",
    "timestamp": "2026-10-17T01:26:00",
    "type": "debit",
    "category": "utilities",
    "amountPaise": 189900,
    "rawDescription": "UPI/DR/410000962430/ACT FIBERNET WIFI/HDFC",
    "plainEn": "Broadband internet bill paid ₹1,899",
    "plainHi": "ब्रॉडबैंड इंटरनेट बिल चुकाया ₹1,899",
    "plainTa": "இணையதள வைஃபை கட்டணம் செலுத்தப்பட்டது ₹1,899",
    "counterpartyName": "ACT FIBERNET WIFI",
    "referenceNumber": "410000962430",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000962430",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ACT FIBERNET WIFI",
        "meaningEn": "Entity: ACT FIBERNET WIFI",
        "meaningHi": "संस्थान/व्यक्ति: ACT FIBERNET WIFI",
        "meaningTa": "நிறுவனம் / நபர்: ACT FIBERNET WIFI"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_71",
    "customerId": "priya",
    "timestamp": "2026-10-16T17:03:00",
    "type": "debit",
    "category": "food",
    "amountPaise": 64000,
    "rawDescription": "UPI/DR/410000976179/SWIGGY BANGALORE/KKBK",
    "plainEn": "Food delivery order paid ₹640",
    "plainHi": "स्विगी फ़ूड आर्डर का भुगतान किया ₹640",
    "plainTa": "ஸ்விகி உணவு ஆர்டருக்கு பணம் செலுத்தப்பட்டது ₹640",
    "counterpartyName": "SWIGGY BANGALORE",
    "referenceNumber": "410000976179",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000976179",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SWIGGY BANGALORE",
        "meaningEn": "Entity: SWIGGY BANGALORE",
        "meaningHi": "संस्थान/व्यक्ति: SWIGGY BANGALORE",
        "meaningTa": "நிறுவனம் / நபர்: SWIGGY BANGALORE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_72",
    "customerId": "priya",
    "timestamp": "2026-10-15T13:38:00",
    "type": "debit",
    "category": "transport",
    "amountPaise": 48000,
    "rawDescription": "UPI/DR/410000989928/UBER INDIA RIDES/ICIC",
    "plainEn": "You paid UBER INDIA RIDES ₹480",
    "plainHi": "आपने UBER INDIA RIDES को ₹480 दिए",
    "plainTa": "நீங்கள் UBER INDIA RIDES என்பவருக்கு ₹480 செலுத்தினீர்கள்",
    "counterpartyName": "UBER INDIA RIDES",
    "referenceNumber": "410000989928",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410000989928",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "UBER INDIA RIDES",
        "meaningEn": "Entity: UBER INDIA RIDES",
        "meaningHi": "संस्थान/व्यक्ति: UBER INDIA RIDES",
        "meaningTa": "நிறுவனம் / நபர்: UBER INDIA RIDES"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_73",
    "customerId": "priya",
    "timestamp": "2026-10-13T09:15:00",
    "type": "debit",
    "category": "shopping",
    "amountPaise": 249900,
    "rawDescription": "UPI/DR/410001003677/AMAZON INDIA/HDFC",
    "plainEn": "You paid AMAZON INDIA ₹2,499",
    "plainHi": "ऑनलाइन शॉपिंग का भुगतान ₹2,499",
    "plainTa": "நீங்கள் AMAZON INDIA என்பவருக்கு ₹2,499 செலுத்தினீர்கள்",
    "counterpartyName": "AMAZON INDIA",
    "referenceNumber": "410001003677",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001003677",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "AMAZON INDIA",
        "meaningEn": "Entity: AMAZON INDIA",
        "meaningHi": "संस्थान/व्यक्ति: AMAZON INDIA",
        "meaningTa": "நிறுவனம் / நபர்: AMAZON INDIA"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_74",
    "customerId": "priya",
    "timestamp": "2026-10-12T05:50:00",
    "type": "debit",
    "category": "investment",
    "amountPaise": 1000000,
    "rawDescription": "NEFT/DR/410001017426/NIPPON MUTUAL FUND/UTIB",
    "plainEn": "You paid NIPPON MUTUAL FUND ₹10,000",
    "plainHi": "आपने NIPPON MUTUAL FUND को ₹10,000 दिए",
    "plainTa": "நீங்கள் NIPPON MUTUAL FUND என்பவருக்கு ₹10,000 செலுத்தினீர்கள்",
    "counterpartyName": "NIPPON MUTUAL FUND",
    "referenceNumber": "410001017426",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001017426",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NIPPON MUTUAL FUND",
        "meaningEn": "Entity: NIPPON MUTUAL FUND",
        "meaningHi": "संस्थान/व्यक्ति: NIPPON MUTUAL FUND",
        "meaningTa": "நிறுவனம் / நபர்: NIPPON MUTUAL FUND"
      },
      {
        "code": "UTIB",
        "meaningEn": "Bank Identifier: UTIB",
        "meaningHi": "बैंक पहचान कोड: UTIB",
        "meaningTa": "வங்கி குறியீடு: UTIB"
      }
    ]
  },
  {
    "id": "tx_75",
    "customerId": "priya",
    "timestamp": "2026-10-11T01:27:00",
    "type": "debit",
    "category": "fitness",
    "amountPaise": 350000,
    "rawDescription": "UPI/DR/410001031175/CULT FIT GYM/YESB",
    "plainEn": "You paid CULT FIT GYM ₹3,500",
    "plainHi": "जिम सदस्यता शुल्क चुकाया ₹3,500",
    "plainTa": "நீங்கள் CULT FIT GYM என்பவருக்கு ₹3,500 செலுத்தினீர்கள்",
    "counterpartyName": "CULT FIT GYM",
    "referenceNumber": "410001031175",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001031175",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "CULT FIT GYM",
        "meaningEn": "Entity: CULT FIT GYM",
        "meaningHi": "संस्थान/व्यक्ति: CULT FIT GYM",
        "meaningTa": "நிறுவனம் / நபர்: CULT FIT GYM"
      },
      {
        "code": "YESB",
        "meaningEn": "Bank Identifier: YESB",
        "meaningHi": "बैंक पहचान कोड: YESB",
        "meaningTa": "வங்கி குறியீடு: YESB"
      }
    ]
  },
  {
    "id": "tx_76",
    "customerId": "priya",
    "timestamp": "2026-10-09T17:04:00",
    "type": "credit",
    "category": "reimbursement",
    "amountPaise": 380000,
    "rawDescription": "IMPS/CR/410001044924/COMPANY EXPENSE CLAIM/HDFC",
    "plainEn": "Travel reimbursement credited ₹3,800",
    "plainHi": "यात्रा व्यय प्रतिपूर्ति जमा हुई ₹3,800",
    "plainTa": "பயணச் செலவு ரீஇம்பர்ஸ்மென்ட் வரவு ₹3,800",
    "counterpartyName": "COMPANY EXPENSE CLAIM",
    "referenceNumber": "410001044924",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Mode: IMPS (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: IMPS (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001044924",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "COMPANY EXPENSE CLAIM",
        "meaningEn": "Entity: COMPANY EXPENSE CLAIM",
        "meaningHi": "संस्थान/व्यक्ति: COMPANY EXPENSE CLAIM",
        "meaningTa": "நிறுவனம் / நபர்: COMPANY EXPENSE CLAIM"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_77",
    "customerId": "priya",
    "timestamp": "2026-10-08T13:39:00",
    "type": "debit",
    "category": "cafe",
    "amountPaise": 38000,
    "rawDescription": "UPI/DR/410001058673/THIRD WAVE COFFEE/KKBK",
    "plainEn": "You paid THIRD WAVE COFFEE ₹380",
    "plainHi": "कॉफ़ी और नाश्ते का भुगतान ₹380",
    "plainTa": "நீங்கள் THIRD WAVE COFFEE என்பவருக்கு ₹380 செலுத்தினீர்கள்",
    "counterpartyName": "THIRD WAVE COFFEE",
    "referenceNumber": "410001058673",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001058673",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "THIRD WAVE COFFEE",
        "meaningEn": "Entity: THIRD WAVE COFFEE",
        "meaningHi": "संस्थान/व्यक्ति: THIRD WAVE COFFEE",
        "meaningTa": "நிறுவனம் / நபர்: THIRD WAVE COFFEE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_78",
    "customerId": "priya",
    "timestamp": "2026-10-07T09:16:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 145000,
    "rawDescription": "UPI/DR/410001072422/BESCOM BENGALURU/SBIN",
    "plainEn": "Electricity bill paid ₹1,450",
    "plainHi": "बिजली बिल का भुगतान किया ₹1,450",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹1,450",
    "counterpartyName": "BESCOM BENGALURU",
    "referenceNumber": "410001072422",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001072422",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "BESCOM BENGALURU",
        "meaningEn": "Entity: BESCOM BENGALURU",
        "meaningHi": "संस्थान/व्यक्ति: BESCOM BENGALURU",
        "meaningTa": "நிறுவனம் / நபர்: BESCOM BENGALURU"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_79",
    "customerId": "priya",
    "timestamp": "2026-10-05T05:51:00",
    "type": "debit",
    "category": "entertainment",
    "amountPaise": 89900,
    "rawDescription": "UPI/DR/410001086171/NETFLIX ENTERTAINMENT/CITI",
    "plainEn": "You paid NETFLIX ENTERTAINMENT ₹899",
    "plainHi": "आपने NETFLIX ENTERTAINMENT को ₹899 दिए",
    "plainTa": "நீங்கள் NETFLIX ENTERTAINMENT என்பவருக்கு ₹899 செலுத்தினீர்கள்",
    "counterpartyName": "NETFLIX ENTERTAINMENT",
    "referenceNumber": "410001086171",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001086171",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NETFLIX ENTERTAINMENT",
        "meaningEn": "Entity: NETFLIX ENTERTAINMENT",
        "meaningHi": "संस्थान/व्यक्ति: NETFLIX ENTERTAINMENT",
        "meaningTa": "நிறுவனம் / நபர்: NETFLIX ENTERTAINMENT"
      },
      {
        "code": "CITI",
        "meaningEn": "Bank Identifier: CITI",
        "meaningHi": "बैंक पहचान कोड: CITI",
        "meaningTa": "வங்கி குறியீடு: CITI"
      }
    ]
  },
  {
    "id": "tx_80",
    "customerId": "priya",
    "timestamp": "2026-10-04T01:28:00",
    "type": "credit",
    "category": "salary",
    "amountPaise": 11500000,
    "rawDescription": "NEFT/CR/410001099920/INFOSYS TECHNOLOGIES/HDFC",
    "plainEn": "Monthly salary credited ₹1,15,000",
    "plainHi": "मासिक वेतन खाते में जमा हुआ ₹1,15,000",
    "plainTa": "மாதாந்திர சம்பளம் வரவு வைக்கப்பட்டது ₹1,15,000",
    "counterpartyName": "INFOSYS TECHNOLOGIES",
    "referenceNumber": "410001099920",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001099920",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "INFOSYS TECHNOLOGIES",
        "meaningEn": "Entity: INFOSYS TECHNOLOGIES",
        "meaningHi": "संस्थान/व्यक्ति: INFOSYS TECHNOLOGIES",
        "meaningTa": "நிறுவனம் / நபர்: INFOSYS TECHNOLOGIES"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_81",
    "customerId": "priya",
    "timestamp": "2026-10-03T17:05:00",
    "type": "debit",
    "category": "rent",
    "amountPaise": 2600000,
    "rawDescription": "NEFT/DR/410001113669/ANAND BUILDERS RENT/ICIC",
    "plainEn": "House rent paid ₹26,000",
    "plainHi": "घर का किराया चुकाया ₹26,000",
    "plainTa": "வீட்டு வாடகை செலுத்தப்பட்டது ₹26,000",
    "counterpartyName": "ANAND BUILDERS RENT",
    "referenceNumber": "410001113669",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001113669",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ANAND BUILDERS RENT",
        "meaningEn": "Entity: ANAND BUILDERS RENT",
        "meaningHi": "संस्थान/व्यक्ति: ANAND BUILDERS RENT",
        "meaningTa": "நிறுவனம் / நபர்: ANAND BUILDERS RENT"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_82",
    "customerId": "priya",
    "timestamp": "2026-10-02T13:40:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 1500000,
    "rawDescription": "UPI/DR/410001127418/SHANKAR NARAYAN/JSBK",
    "plainEn": "You paid SHANKAR NARAYAN ₹15,000",
    "plainHi": "आपने SHANKAR NARAYAN को ₹15,000 दिए",
    "plainTa": "நீங்கள் SHANKAR NARAYAN என்பவருக்கு ₹15,000 செலுத்தினீர்கள்",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410001127418",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001127418",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "Entity: SHANKAR NARAYAN",
        "meaningHi": "संस्थान/व्यक्ति: SHANKAR NARAYAN",
        "meaningTa": "நிறுவனம் / நபர்: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक पहचान कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_83",
    "customerId": "priya",
    "timestamp": "2026-09-30T09:17:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 420000,
    "rawDescription": "UPI/DR/410001141167/NATURE BASKET/SBIN",
    "plainEn": "You paid NATURE BASKET ₹4,200",
    "plainHi": "किराना सुपरमार्केट में भुगतान किया ₹4,200",
    "plainTa": "பல்பொருள் அங்காடியில் மளிகை வாங்கப்பட்டது ₹4,200",
    "counterpartyName": "NATURE BASKET",
    "referenceNumber": "410001141167",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001141167",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NATURE BASKET",
        "meaningEn": "Entity: NATURE BASKET",
        "meaningHi": "संस्थान/व्यक्ति: NATURE BASKET",
        "meaningTa": "நிறுவனம் / நபர்: NATURE BASKET"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_84",
    "customerId": "priya",
    "timestamp": "2026-09-29T05:52:00",
    "type": "debit",
    "category": "utilities",
    "amountPaise": 189900,
    "rawDescription": "UPI/DR/410001154916/ACT FIBERNET WIFI/HDFC",
    "plainEn": "Broadband internet bill paid ₹1,899",
    "plainHi": "ब्रॉडबैंड इंटरनेट बिल चुकाया ₹1,899",
    "plainTa": "இணையதள வைஃபை கட்டணம் செலுத்தப்பட்டது ₹1,899",
    "counterpartyName": "ACT FIBERNET WIFI",
    "referenceNumber": "410001154916",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001154916",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ACT FIBERNET WIFI",
        "meaningEn": "Entity: ACT FIBERNET WIFI",
        "meaningHi": "संस्थान/व्यक्ति: ACT FIBERNET WIFI",
        "meaningTa": "நிறுவனம் / நபர்: ACT FIBERNET WIFI"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_85",
    "customerId": "priya",
    "timestamp": "2026-09-28T01:29:00",
    "type": "debit",
    "category": "food",
    "amountPaise": 64000,
    "rawDescription": "UPI/DR/410001168665/SWIGGY BANGALORE/KKBK",
    "plainEn": "Food delivery order paid ₹640",
    "plainHi": "स्विगी फ़ूड आर्डर का भुगतान किया ₹640",
    "plainTa": "ஸ்விகி உணவு ஆர்டருக்கு பணம் செலுத்தப்பட்டது ₹640",
    "counterpartyName": "SWIGGY BANGALORE",
    "referenceNumber": "410001168665",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001168665",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SWIGGY BANGALORE",
        "meaningEn": "Entity: SWIGGY BANGALORE",
        "meaningHi": "संस्थान/व्यक्ति: SWIGGY BANGALORE",
        "meaningTa": "நிறுவனம் / நபர்: SWIGGY BANGALORE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_86",
    "customerId": "priya",
    "timestamp": "2026-09-26T17:06:00",
    "type": "debit",
    "category": "transport",
    "amountPaise": 48000,
    "rawDescription": "UPI/DR/410001182414/UBER INDIA RIDES/ICIC",
    "plainEn": "You paid UBER INDIA RIDES ₹480",
    "plainHi": "आपने UBER INDIA RIDES को ₹480 दिए",
    "plainTa": "நீங்கள் UBER INDIA RIDES என்பவருக்கு ₹480 செலுத்தினீர்கள்",
    "counterpartyName": "UBER INDIA RIDES",
    "referenceNumber": "410001182414",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001182414",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "UBER INDIA RIDES",
        "meaningEn": "Entity: UBER INDIA RIDES",
        "meaningHi": "संस्थान/व्यक्ति: UBER INDIA RIDES",
        "meaningTa": "நிறுவனம் / நபர்: UBER INDIA RIDES"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_87",
    "customerId": "priya",
    "timestamp": "2026-09-25T13:41:00",
    "type": "debit",
    "category": "shopping",
    "amountPaise": 249900,
    "rawDescription": "UPI/DR/410001196163/AMAZON INDIA/HDFC",
    "plainEn": "You paid AMAZON INDIA ₹2,499",
    "plainHi": "ऑनलाइन शॉपिंग का भुगतान ₹2,499",
    "plainTa": "நீங்கள் AMAZON INDIA என்பவருக்கு ₹2,499 செலுத்தினீர்கள்",
    "counterpartyName": "AMAZON INDIA",
    "referenceNumber": "410001196163",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001196163",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "AMAZON INDIA",
        "meaningEn": "Entity: AMAZON INDIA",
        "meaningHi": "संस्थान/व्यक्ति: AMAZON INDIA",
        "meaningTa": "நிறுவனம் / நபர்: AMAZON INDIA"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_88",
    "customerId": "priya",
    "timestamp": "2026-09-24T09:18:00",
    "type": "debit",
    "category": "investment",
    "amountPaise": 1000000,
    "rawDescription": "NEFT/DR/410001209912/NIPPON MUTUAL FUND/UTIB",
    "plainEn": "You paid NIPPON MUTUAL FUND ₹10,000",
    "plainHi": "आपने NIPPON MUTUAL FUND को ₹10,000 दिए",
    "plainTa": "நீங்கள் NIPPON MUTUAL FUND என்பவருக்கு ₹10,000 செலுத்தினீர்கள்",
    "counterpartyName": "NIPPON MUTUAL FUND",
    "referenceNumber": "410001209912",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001209912",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NIPPON MUTUAL FUND",
        "meaningEn": "Entity: NIPPON MUTUAL FUND",
        "meaningHi": "संस्थान/व्यक्ति: NIPPON MUTUAL FUND",
        "meaningTa": "நிறுவனம் / நபர்: NIPPON MUTUAL FUND"
      },
      {
        "code": "UTIB",
        "meaningEn": "Bank Identifier: UTIB",
        "meaningHi": "बैंक पहचान कोड: UTIB",
        "meaningTa": "வங்கி குறியீடு: UTIB"
      }
    ]
  },
  {
    "id": "tx_89",
    "customerId": "priya",
    "timestamp": "2026-09-22T05:53:00",
    "type": "debit",
    "category": "fitness",
    "amountPaise": 350000,
    "rawDescription": "UPI/DR/410001223661/CULT FIT GYM/YESB",
    "plainEn": "You paid CULT FIT GYM ₹3,500",
    "plainHi": "जिम सदस्यता शुल्क चुकाया ₹3,500",
    "plainTa": "நீங்கள் CULT FIT GYM என்பவருக்கு ₹3,500 செலுத்தினீர்கள்",
    "counterpartyName": "CULT FIT GYM",
    "referenceNumber": "410001223661",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001223661",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "CULT FIT GYM",
        "meaningEn": "Entity: CULT FIT GYM",
        "meaningHi": "संस्थान/व्यक्ति: CULT FIT GYM",
        "meaningTa": "நிறுவனம் / நபர்: CULT FIT GYM"
      },
      {
        "code": "YESB",
        "meaningEn": "Bank Identifier: YESB",
        "meaningHi": "बैंक पहचान कोड: YESB",
        "meaningTa": "வங்கி குறியீடு: YESB"
      }
    ]
  },
  {
    "id": "tx_90",
    "customerId": "priya",
    "timestamp": "2026-09-21T01:30:00",
    "type": "credit",
    "category": "reimbursement",
    "amountPaise": 380000,
    "rawDescription": "IMPS/CR/410001237410/COMPANY EXPENSE CLAIM/HDFC",
    "plainEn": "Travel reimbursement credited ₹3,800",
    "plainHi": "यात्रा व्यय प्रतिपूर्ति जमा हुई ₹3,800",
    "plainTa": "பயணச் செலவு ரீஇம்பர்ஸ்மென்ட் வரவு ₹3,800",
    "counterpartyName": "COMPANY EXPENSE CLAIM",
    "referenceNumber": "410001237410",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Mode: IMPS (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: IMPS (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001237410",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "COMPANY EXPENSE CLAIM",
        "meaningEn": "Entity: COMPANY EXPENSE CLAIM",
        "meaningHi": "संस्थान/व्यक्ति: COMPANY EXPENSE CLAIM",
        "meaningTa": "நிறுவனம் / நபர்: COMPANY EXPENSE CLAIM"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_91",
    "customerId": "priya",
    "timestamp": "2026-09-20T17:07:00",
    "type": "debit",
    "category": "cafe",
    "amountPaise": 38000,
    "rawDescription": "UPI/DR/410001251159/THIRD WAVE COFFEE/KKBK",
    "plainEn": "You paid THIRD WAVE COFFEE ₹380",
    "plainHi": "कॉफ़ी और नाश्ते का भुगतान ₹380",
    "plainTa": "நீங்கள் THIRD WAVE COFFEE என்பவருக்கு ₹380 செலுத்தினீர்கள்",
    "counterpartyName": "THIRD WAVE COFFEE",
    "referenceNumber": "410001251159",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001251159",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "THIRD WAVE COFFEE",
        "meaningEn": "Entity: THIRD WAVE COFFEE",
        "meaningHi": "संस्थान/व्यक्ति: THIRD WAVE COFFEE",
        "meaningTa": "நிறுவனம் / நபர்: THIRD WAVE COFFEE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_92",
    "customerId": "priya",
    "timestamp": "2026-09-18T13:42:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 145000,
    "rawDescription": "UPI/DR/410001264908/BESCOM BENGALURU/SBIN",
    "plainEn": "Electricity bill paid ₹1,450",
    "plainHi": "बिजली बिल का भुगतान किया ₹1,450",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹1,450",
    "counterpartyName": "BESCOM BENGALURU",
    "referenceNumber": "410001264908",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001264908",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "BESCOM BENGALURU",
        "meaningEn": "Entity: BESCOM BENGALURU",
        "meaningHi": "संस्थान/व्यक्ति: BESCOM BENGALURU",
        "meaningTa": "நிறுவனம் / நபர்: BESCOM BENGALURU"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_93",
    "customerId": "priya",
    "timestamp": "2026-09-17T09:19:00",
    "type": "debit",
    "category": "entertainment",
    "amountPaise": 89900,
    "rawDescription": "UPI/DR/410001278657/NETFLIX ENTERTAINMENT/CITI",
    "plainEn": "You paid NETFLIX ENTERTAINMENT ₹899",
    "plainHi": "आपने NETFLIX ENTERTAINMENT को ₹899 दिए",
    "plainTa": "நீங்கள் NETFLIX ENTERTAINMENT என்பவருக்கு ₹899 செலுத்தினீர்கள்",
    "counterpartyName": "NETFLIX ENTERTAINMENT",
    "referenceNumber": "410001278657",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001278657",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NETFLIX ENTERTAINMENT",
        "meaningEn": "Entity: NETFLIX ENTERTAINMENT",
        "meaningHi": "संस्थान/व्यक्ति: NETFLIX ENTERTAINMENT",
        "meaningTa": "நிறுவனம் / நபர்: NETFLIX ENTERTAINMENT"
      },
      {
        "code": "CITI",
        "meaningEn": "Bank Identifier: CITI",
        "meaningHi": "बैंक पहचान कोड: CITI",
        "meaningTa": "வங்கி குறியீடு: CITI"
      }
    ]
  },
  {
    "id": "tx_94",
    "customerId": "priya",
    "timestamp": "2026-09-16T05:54:00",
    "type": "credit",
    "category": "salary",
    "amountPaise": 11500000,
    "rawDescription": "NEFT/CR/410001292406/INFOSYS TECHNOLOGIES/HDFC",
    "plainEn": "Monthly salary credited ₹1,15,000",
    "plainHi": "मासिक वेतन खाते में जमा हुआ ₹1,15,000",
    "plainTa": "மாதாந்திர சம்பளம் வரவு வைக்கப்பட்டது ₹1,15,000",
    "counterpartyName": "INFOSYS TECHNOLOGIES",
    "referenceNumber": "410001292406",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001292406",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "INFOSYS TECHNOLOGIES",
        "meaningEn": "Entity: INFOSYS TECHNOLOGIES",
        "meaningHi": "संस्थान/व्यक्ति: INFOSYS TECHNOLOGIES",
        "meaningTa": "நிறுவனம் / நபர்: INFOSYS TECHNOLOGIES"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_95",
    "customerId": "priya",
    "timestamp": "2026-09-15T01:31:00",
    "type": "debit",
    "category": "rent",
    "amountPaise": 2600000,
    "rawDescription": "NEFT/DR/410001306155/ANAND BUILDERS RENT/ICIC",
    "plainEn": "House rent paid ₹26,000",
    "plainHi": "घर का किराया चुकाया ₹26,000",
    "plainTa": "வீட்டு வாடகை செலுத்தப்பட்டது ₹26,000",
    "counterpartyName": "ANAND BUILDERS RENT",
    "referenceNumber": "410001306155",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001306155",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ANAND BUILDERS RENT",
        "meaningEn": "Entity: ANAND BUILDERS RENT",
        "meaningHi": "संस्थान/व्यक्ति: ANAND BUILDERS RENT",
        "meaningTa": "நிறுவனம் / நபர்: ANAND BUILDERS RENT"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_96",
    "customerId": "priya",
    "timestamp": "2026-09-13T17:08:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 1500000,
    "rawDescription": "UPI/DR/410001319904/SHANKAR NARAYAN/JSBK",
    "plainEn": "You paid SHANKAR NARAYAN ₹15,000",
    "plainHi": "आपने SHANKAR NARAYAN को ₹15,000 दिए",
    "plainTa": "நீங்கள் SHANKAR NARAYAN என்பவருக்கு ₹15,000 செலுத்தினீர்கள்",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410001319904",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001319904",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "Entity: SHANKAR NARAYAN",
        "meaningHi": "संस्थान/व्यक्ति: SHANKAR NARAYAN",
        "meaningTa": "நிறுவனம் / நபர்: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक पहचान कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_97",
    "customerId": "priya",
    "timestamp": "2026-09-12T13:43:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 420000,
    "rawDescription": "UPI/DR/410001333653/NATURE BASKET/SBIN",
    "plainEn": "You paid NATURE BASKET ₹4,200",
    "plainHi": "किराना सुपरमार्केट में भुगतान किया ₹4,200",
    "plainTa": "பல்பொருள் அங்காடியில் மளிகை வாங்கப்பட்டது ₹4,200",
    "counterpartyName": "NATURE BASKET",
    "referenceNumber": "410001333653",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001333653",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NATURE BASKET",
        "meaningEn": "Entity: NATURE BASKET",
        "meaningHi": "संस्थान/व्यक्ति: NATURE BASKET",
        "meaningTa": "நிறுவனம் / நபர்: NATURE BASKET"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_98",
    "customerId": "priya",
    "timestamp": "2026-09-11T09:20:00",
    "type": "debit",
    "category": "utilities",
    "amountPaise": 189900,
    "rawDescription": "UPI/DR/410001347402/ACT FIBERNET WIFI/HDFC",
    "plainEn": "Broadband internet bill paid ₹1,899",
    "plainHi": "ब्रॉडबैंड इंटरनेट बिल चुकाया ₹1,899",
    "plainTa": "இணையதள வைஃபை கட்டணம் செலுத்தப்பட்டது ₹1,899",
    "counterpartyName": "ACT FIBERNET WIFI",
    "referenceNumber": "410001347402",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001347402",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ACT FIBERNET WIFI",
        "meaningEn": "Entity: ACT FIBERNET WIFI",
        "meaningHi": "संस्थान/व्यक्ति: ACT FIBERNET WIFI",
        "meaningTa": "நிறுவனம் / நபர்: ACT FIBERNET WIFI"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_99",
    "customerId": "priya",
    "timestamp": "2026-09-09T05:55:00",
    "type": "debit",
    "category": "food",
    "amountPaise": 64000,
    "rawDescription": "UPI/DR/410001361151/SWIGGY BANGALORE/KKBK",
    "plainEn": "Food delivery order paid ₹640",
    "plainHi": "स्विगी फ़ूड आर्डर का भुगतान किया ₹640",
    "plainTa": "ஸ்விகி உணவு ஆர்டருக்கு பணம் செலுத்தப்பட்டது ₹640",
    "counterpartyName": "SWIGGY BANGALORE",
    "referenceNumber": "410001361151",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001361151",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SWIGGY BANGALORE",
        "meaningEn": "Entity: SWIGGY BANGALORE",
        "meaningHi": "संस्थान/व्यक्ति: SWIGGY BANGALORE",
        "meaningTa": "நிறுவனம் / நபர்: SWIGGY BANGALORE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_100",
    "customerId": "priya",
    "timestamp": "2026-09-08T01:32:00",
    "type": "debit",
    "category": "transport",
    "amountPaise": 48000,
    "rawDescription": "UPI/DR/410001374900/UBER INDIA RIDES/ICIC",
    "plainEn": "You paid UBER INDIA RIDES ₹480",
    "plainHi": "आपने UBER INDIA RIDES को ₹480 दिए",
    "plainTa": "நீங்கள் UBER INDIA RIDES என்பவருக்கு ₹480 செலுத்தினீர்கள்",
    "counterpartyName": "UBER INDIA RIDES",
    "referenceNumber": "410001374900",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001374900",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "UBER INDIA RIDES",
        "meaningEn": "Entity: UBER INDIA RIDES",
        "meaningHi": "संस्थान/व्यक्ति: UBER INDIA RIDES",
        "meaningTa": "நிறுவனம் / நபர்: UBER INDIA RIDES"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_101",
    "customerId": "priya",
    "timestamp": "2026-09-07T17:09:00",
    "type": "debit",
    "category": "shopping",
    "amountPaise": 249900,
    "rawDescription": "UPI/DR/410001388649/AMAZON INDIA/HDFC",
    "plainEn": "You paid AMAZON INDIA ₹2,499",
    "plainHi": "ऑनलाइन शॉपिंग का भुगतान ₹2,499",
    "plainTa": "நீங்கள் AMAZON INDIA என்பவருக்கு ₹2,499 செலுத்தினீர்கள்",
    "counterpartyName": "AMAZON INDIA",
    "referenceNumber": "410001388649",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001388649",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "AMAZON INDIA",
        "meaningEn": "Entity: AMAZON INDIA",
        "meaningHi": "संस्थान/व्यक्ति: AMAZON INDIA",
        "meaningTa": "நிறுவனம் / நபர்: AMAZON INDIA"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_102",
    "customerId": "priya",
    "timestamp": "2026-09-05T13:44:00",
    "type": "debit",
    "category": "investment",
    "amountPaise": 1000000,
    "rawDescription": "NEFT/DR/410001402398/NIPPON MUTUAL FUND/UTIB",
    "plainEn": "You paid NIPPON MUTUAL FUND ₹10,000",
    "plainHi": "आपने NIPPON MUTUAL FUND को ₹10,000 दिए",
    "plainTa": "நீங்கள் NIPPON MUTUAL FUND என்பவருக்கு ₹10,000 செலுத்தினீர்கள்",
    "counterpartyName": "NIPPON MUTUAL FUND",
    "referenceNumber": "410001402398",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001402398",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NIPPON MUTUAL FUND",
        "meaningEn": "Entity: NIPPON MUTUAL FUND",
        "meaningHi": "संस्थान/व्यक्ति: NIPPON MUTUAL FUND",
        "meaningTa": "நிறுவனம் / நபர்: NIPPON MUTUAL FUND"
      },
      {
        "code": "UTIB",
        "meaningEn": "Bank Identifier: UTIB",
        "meaningHi": "बैंक पहचान कोड: UTIB",
        "meaningTa": "வங்கி குறியீடு: UTIB"
      }
    ]
  },
  {
    "id": "tx_103",
    "customerId": "priya",
    "timestamp": "2026-09-04T09:21:00",
    "type": "debit",
    "category": "fitness",
    "amountPaise": 350000,
    "rawDescription": "UPI/DR/410001416147/CULT FIT GYM/YESB",
    "plainEn": "You paid CULT FIT GYM ₹3,500",
    "plainHi": "जिम सदस्यता शुल्क चुकाया ₹3,500",
    "plainTa": "நீங்கள் CULT FIT GYM என்பவருக்கு ₹3,500 செலுத்தினீர்கள்",
    "counterpartyName": "CULT FIT GYM",
    "referenceNumber": "410001416147",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001416147",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "CULT FIT GYM",
        "meaningEn": "Entity: CULT FIT GYM",
        "meaningHi": "संस्थान/व्यक्ति: CULT FIT GYM",
        "meaningTa": "நிறுவனம் / நபர்: CULT FIT GYM"
      },
      {
        "code": "YESB",
        "meaningEn": "Bank Identifier: YESB",
        "meaningHi": "बैंक पहचान कोड: YESB",
        "meaningTa": "வங்கி குறியீடு: YESB"
      }
    ]
  },
  {
    "id": "tx_104",
    "customerId": "priya",
    "timestamp": "2026-09-03T05:56:00",
    "type": "credit",
    "category": "reimbursement",
    "amountPaise": 380000,
    "rawDescription": "IMPS/CR/410001429896/COMPANY EXPENSE CLAIM/HDFC",
    "plainEn": "Travel reimbursement credited ₹3,800",
    "plainHi": "यात्रा व्यय प्रतिपूर्ति जमा हुई ₹3,800",
    "plainTa": "பயணச் செலவு ரீஇம்பர்ஸ்மென்ட் வரவு ₹3,800",
    "counterpartyName": "COMPANY EXPENSE CLAIM",
    "referenceNumber": "410001429896",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Mode: IMPS (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: IMPS (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001429896",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "COMPANY EXPENSE CLAIM",
        "meaningEn": "Entity: COMPANY EXPENSE CLAIM",
        "meaningHi": "संस्थान/व्यक्ति: COMPANY EXPENSE CLAIM",
        "meaningTa": "நிறுவனம் / நபர்: COMPANY EXPENSE CLAIM"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_105",
    "customerId": "priya",
    "timestamp": "2026-09-01T01:33:00",
    "type": "debit",
    "category": "cafe",
    "amountPaise": 38000,
    "rawDescription": "UPI/DR/410001443645/THIRD WAVE COFFEE/KKBK",
    "plainEn": "You paid THIRD WAVE COFFEE ₹380",
    "plainHi": "कॉफ़ी और नाश्ते का भुगतान ₹380",
    "plainTa": "நீங்கள் THIRD WAVE COFFEE என்பவருக்கு ₹380 செலுத்தினீர்கள்",
    "counterpartyName": "THIRD WAVE COFFEE",
    "referenceNumber": "410001443645",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001443645",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "THIRD WAVE COFFEE",
        "meaningEn": "Entity: THIRD WAVE COFFEE",
        "meaningHi": "संस्थान/व्यक्ति: THIRD WAVE COFFEE",
        "meaningTa": "நிறுவனம் / நபர்: THIRD WAVE COFFEE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_106",
    "customerId": "priya",
    "timestamp": "2026-08-31T17:10:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 145000,
    "rawDescription": "UPI/DR/410001457394/BESCOM BENGALURU/SBIN",
    "plainEn": "Electricity bill paid ₹1,450",
    "plainHi": "बिजली बिल का भुगतान किया ₹1,450",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹1,450",
    "counterpartyName": "BESCOM BENGALURU",
    "referenceNumber": "410001457394",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001457394",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "BESCOM BENGALURU",
        "meaningEn": "Entity: BESCOM BENGALURU",
        "meaningHi": "संस्थान/व्यक्ति: BESCOM BENGALURU",
        "meaningTa": "நிறுவனம் / நபர்: BESCOM BENGALURU"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_107",
    "customerId": "priya",
    "timestamp": "2026-08-30T13:45:00",
    "type": "debit",
    "category": "entertainment",
    "amountPaise": 89900,
    "rawDescription": "UPI/DR/410001471143/NETFLIX ENTERTAINMENT/CITI",
    "plainEn": "You paid NETFLIX ENTERTAINMENT ₹899",
    "plainHi": "आपने NETFLIX ENTERTAINMENT को ₹899 दिए",
    "plainTa": "நீங்கள் NETFLIX ENTERTAINMENT என்பவருக்கு ₹899 செலுத்தினீர்கள்",
    "counterpartyName": "NETFLIX ENTERTAINMENT",
    "referenceNumber": "410001471143",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001471143",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NETFLIX ENTERTAINMENT",
        "meaningEn": "Entity: NETFLIX ENTERTAINMENT",
        "meaningHi": "संस्थान/व्यक्ति: NETFLIX ENTERTAINMENT",
        "meaningTa": "நிறுவனம் / நபர்: NETFLIX ENTERTAINMENT"
      },
      {
        "code": "CITI",
        "meaningEn": "Bank Identifier: CITI",
        "meaningHi": "बैंक पहचान कोड: CITI",
        "meaningTa": "வங்கி குறியீடு: CITI"
      }
    ]
  },
  {
    "id": "tx_108",
    "customerId": "priya",
    "timestamp": "2026-08-29T09:22:00",
    "type": "credit",
    "category": "salary",
    "amountPaise": 11500000,
    "rawDescription": "NEFT/CR/410001484892/INFOSYS TECHNOLOGIES/HDFC",
    "plainEn": "Monthly salary credited ₹1,15,000",
    "plainHi": "मासिक वेतन खाते में जमा हुआ ₹1,15,000",
    "plainTa": "மாதாந்திர சம்பளம் வரவு வைக்கப்பட்டது ₹1,15,000",
    "counterpartyName": "INFOSYS TECHNOLOGIES",
    "referenceNumber": "410001484892",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001484892",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "INFOSYS TECHNOLOGIES",
        "meaningEn": "Entity: INFOSYS TECHNOLOGIES",
        "meaningHi": "संस्थान/व्यक्ति: INFOSYS TECHNOLOGIES",
        "meaningTa": "நிறுவனம் / நபர்: INFOSYS TECHNOLOGIES"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_109",
    "customerId": "priya",
    "timestamp": "2026-08-27T05:57:00",
    "type": "debit",
    "category": "rent",
    "amountPaise": 2600000,
    "rawDescription": "NEFT/DR/410001498641/ANAND BUILDERS RENT/ICIC",
    "plainEn": "House rent paid ₹26,000",
    "plainHi": "घर का किराया चुकाया ₹26,000",
    "plainTa": "வீட்டு வாடகை செலுத்தப்பட்டது ₹26,000",
    "counterpartyName": "ANAND BUILDERS RENT",
    "referenceNumber": "410001498641",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001498641",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ANAND BUILDERS RENT",
        "meaningEn": "Entity: ANAND BUILDERS RENT",
        "meaningHi": "संस्थान/व्यक्ति: ANAND BUILDERS RENT",
        "meaningTa": "நிறுவனம் / நபர்: ANAND BUILDERS RENT"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_110",
    "customerId": "priya",
    "timestamp": "2026-08-26T01:34:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 1500000,
    "rawDescription": "UPI/DR/410001512390/SHANKAR NARAYAN/JSBK",
    "plainEn": "You paid SHANKAR NARAYAN ₹15,000",
    "plainHi": "आपने SHANKAR NARAYAN को ₹15,000 दिए",
    "plainTa": "நீங்கள் SHANKAR NARAYAN என்பவருக்கு ₹15,000 செலுத்தினீர்கள்",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410001512390",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001512390",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "Entity: SHANKAR NARAYAN",
        "meaningHi": "संस्थान/व्यक्ति: SHANKAR NARAYAN",
        "meaningTa": "நிறுவனம் / நபர்: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक पहचान कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_111",
    "customerId": "priya",
    "timestamp": "2026-08-25T17:11:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 420000,
    "rawDescription": "UPI/DR/410001526139/NATURE BASKET/SBIN",
    "plainEn": "You paid NATURE BASKET ₹4,200",
    "plainHi": "किराना सुपरमार्केट में भुगतान किया ₹4,200",
    "plainTa": "பல்பொருள் அங்காடியில் மளிகை வாங்கப்பட்டது ₹4,200",
    "counterpartyName": "NATURE BASKET",
    "referenceNumber": "410001526139",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001526139",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NATURE BASKET",
        "meaningEn": "Entity: NATURE BASKET",
        "meaningHi": "संस्थान/व्यक्ति: NATURE BASKET",
        "meaningTa": "நிறுவனம் / நபர்: NATURE BASKET"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_112",
    "customerId": "priya",
    "timestamp": "2026-08-23T13:46:00",
    "type": "debit",
    "category": "utilities",
    "amountPaise": 189900,
    "rawDescription": "UPI/DR/410001539888/ACT FIBERNET WIFI/HDFC",
    "plainEn": "Broadband internet bill paid ₹1,899",
    "plainHi": "ब्रॉडबैंड इंटरनेट बिल चुकाया ₹1,899",
    "plainTa": "இணையதள வைஃபை கட்டணம் செலுத்தப்பட்டது ₹1,899",
    "counterpartyName": "ACT FIBERNET WIFI",
    "referenceNumber": "410001539888",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001539888",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ACT FIBERNET WIFI",
        "meaningEn": "Entity: ACT FIBERNET WIFI",
        "meaningHi": "संस्थान/व्यक्ति: ACT FIBERNET WIFI",
        "meaningTa": "நிறுவனம் / நபர்: ACT FIBERNET WIFI"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_113",
    "customerId": "priya",
    "timestamp": "2026-08-22T09:23:00",
    "type": "debit",
    "category": "food",
    "amountPaise": 64000,
    "rawDescription": "UPI/DR/410001553637/SWIGGY BANGALORE/KKBK",
    "plainEn": "Food delivery order paid ₹640",
    "plainHi": "स्विगी फ़ूड आर्डर का भुगतान किया ₹640",
    "plainTa": "ஸ்விகி உணவு ஆர்டருக்கு பணம் செலுத்தப்பட்டது ₹640",
    "counterpartyName": "SWIGGY BANGALORE",
    "referenceNumber": "410001553637",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001553637",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SWIGGY BANGALORE",
        "meaningEn": "Entity: SWIGGY BANGALORE",
        "meaningHi": "संस्थान/व्यक्ति: SWIGGY BANGALORE",
        "meaningTa": "நிறுவனம் / நபர்: SWIGGY BANGALORE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_114",
    "customerId": "priya",
    "timestamp": "2026-08-21T05:58:00",
    "type": "debit",
    "category": "transport",
    "amountPaise": 48000,
    "rawDescription": "UPI/DR/410001567386/UBER INDIA RIDES/ICIC",
    "plainEn": "You paid UBER INDIA RIDES ₹480",
    "plainHi": "आपने UBER INDIA RIDES को ₹480 दिए",
    "plainTa": "நீங்கள் UBER INDIA RIDES என்பவருக்கு ₹480 செலுத்தினீர்கள்",
    "counterpartyName": "UBER INDIA RIDES",
    "referenceNumber": "410001567386",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001567386",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "UBER INDIA RIDES",
        "meaningEn": "Entity: UBER INDIA RIDES",
        "meaningHi": "संस्थान/व्यक्ति: UBER INDIA RIDES",
        "meaningTa": "நிறுவனம் / நபர்: UBER INDIA RIDES"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_115",
    "customerId": "priya",
    "timestamp": "2026-08-19T01:35:00",
    "type": "debit",
    "category": "shopping",
    "amountPaise": 249900,
    "rawDescription": "UPI/DR/410001581135/AMAZON INDIA/HDFC",
    "plainEn": "You paid AMAZON INDIA ₹2,499",
    "plainHi": "ऑनलाइन शॉपिंग का भुगतान ₹2,499",
    "plainTa": "நீங்கள் AMAZON INDIA என்பவருக்கு ₹2,499 செலுத்தினீர்கள்",
    "counterpartyName": "AMAZON INDIA",
    "referenceNumber": "410001581135",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001581135",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "AMAZON INDIA",
        "meaningEn": "Entity: AMAZON INDIA",
        "meaningHi": "संस्थान/व्यक्ति: AMAZON INDIA",
        "meaningTa": "நிறுவனம் / நபர்: AMAZON INDIA"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_116",
    "customerId": "priya",
    "timestamp": "2026-08-18T17:12:00",
    "type": "debit",
    "category": "investment",
    "amountPaise": 1000000,
    "rawDescription": "NEFT/DR/410001594884/NIPPON MUTUAL FUND/UTIB",
    "plainEn": "You paid NIPPON MUTUAL FUND ₹10,000",
    "plainHi": "आपने NIPPON MUTUAL FUND को ₹10,000 दिए",
    "plainTa": "நீங்கள் NIPPON MUTUAL FUND என்பவருக்கு ₹10,000 செலுத்தினீர்கள்",
    "counterpartyName": "NIPPON MUTUAL FUND",
    "referenceNumber": "410001594884",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001594884",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NIPPON MUTUAL FUND",
        "meaningEn": "Entity: NIPPON MUTUAL FUND",
        "meaningHi": "संस्थान/व्यक्ति: NIPPON MUTUAL FUND",
        "meaningTa": "நிறுவனம் / நபர்: NIPPON MUTUAL FUND"
      },
      {
        "code": "UTIB",
        "meaningEn": "Bank Identifier: UTIB",
        "meaningHi": "बैंक पहचान कोड: UTIB",
        "meaningTa": "வங்கி குறியீடு: UTIB"
      }
    ]
  },
  {
    "id": "tx_117",
    "customerId": "priya",
    "timestamp": "2026-08-17T13:47:00",
    "type": "debit",
    "category": "fitness",
    "amountPaise": 350000,
    "rawDescription": "UPI/DR/410001608633/CULT FIT GYM/YESB",
    "plainEn": "You paid CULT FIT GYM ₹3,500",
    "plainHi": "जिम सदस्यता शुल्क चुकाया ₹3,500",
    "plainTa": "நீங்கள் CULT FIT GYM என்பவருக்கு ₹3,500 செலுத்தினீர்கள்",
    "counterpartyName": "CULT FIT GYM",
    "referenceNumber": "410001608633",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001608633",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "CULT FIT GYM",
        "meaningEn": "Entity: CULT FIT GYM",
        "meaningHi": "संस्थान/व्यक्ति: CULT FIT GYM",
        "meaningTa": "நிறுவனம் / நபர்: CULT FIT GYM"
      },
      {
        "code": "YESB",
        "meaningEn": "Bank Identifier: YESB",
        "meaningHi": "बैंक पहचान कोड: YESB",
        "meaningTa": "வங்கி குறியீடு: YESB"
      }
    ]
  },
  {
    "id": "tx_118",
    "customerId": "priya",
    "timestamp": "2026-08-15T09:24:00",
    "type": "credit",
    "category": "reimbursement",
    "amountPaise": 380000,
    "rawDescription": "IMPS/CR/410001622382/COMPANY EXPENSE CLAIM/HDFC",
    "plainEn": "Travel reimbursement credited ₹3,800",
    "plainHi": "यात्रा व्यय प्रतिपूर्ति जमा हुई ₹3,800",
    "plainTa": "பயணச் செலவு ரீஇம்பர்ஸ்மென்ட் வரவு ₹3,800",
    "counterpartyName": "COMPANY EXPENSE CLAIM",
    "referenceNumber": "410001622382",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Mode: IMPS (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: IMPS (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001622382",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "COMPANY EXPENSE CLAIM",
        "meaningEn": "Entity: COMPANY EXPENSE CLAIM",
        "meaningHi": "संस्थान/व्यक्ति: COMPANY EXPENSE CLAIM",
        "meaningTa": "நிறுவனம் / நபர்: COMPANY EXPENSE CLAIM"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_119",
    "customerId": "priya",
    "timestamp": "2026-08-14T05:59:00",
    "type": "debit",
    "category": "cafe",
    "amountPaise": 38000,
    "rawDescription": "UPI/DR/410001636131/THIRD WAVE COFFEE/KKBK",
    "plainEn": "You paid THIRD WAVE COFFEE ₹380",
    "plainHi": "कॉफ़ी और नाश्ते का भुगतान ₹380",
    "plainTa": "நீங்கள் THIRD WAVE COFFEE என்பவருக்கு ₹380 செலுத்தினீர்கள்",
    "counterpartyName": "THIRD WAVE COFFEE",
    "referenceNumber": "410001636131",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001636131",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "THIRD WAVE COFFEE",
        "meaningEn": "Entity: THIRD WAVE COFFEE",
        "meaningHi": "संस्थान/व्यक्ति: THIRD WAVE COFFEE",
        "meaningTa": "நிறுவனம் / நபர்: THIRD WAVE COFFEE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_120",
    "customerId": "priya",
    "timestamp": "2026-08-13T01:36:00",
    "type": "debit",
    "category": "electricity",
    "amountPaise": 145000,
    "rawDescription": "UPI/DR/410001649880/BESCOM BENGALURU/SBIN",
    "plainEn": "Electricity bill paid ₹1,450",
    "plainHi": "बिजली बिल का भुगतान किया ₹1,450",
    "plainTa": "மின்சாரக் கட்டணம் செலுத்தப்பட்டது ₹1,450",
    "counterpartyName": "BESCOM BENGALURU",
    "referenceNumber": "410001649880",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001649880",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "BESCOM BENGALURU",
        "meaningEn": "Entity: BESCOM BENGALURU",
        "meaningHi": "संस्थान/व्यक्ति: BESCOM BENGALURU",
        "meaningTa": "நிறுவனம் / நபர்: BESCOM BENGALURU"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_121",
    "customerId": "priya",
    "timestamp": "2026-08-12T17:13:00",
    "type": "debit",
    "category": "entertainment",
    "amountPaise": 89900,
    "rawDescription": "UPI/DR/410001663629/NETFLIX ENTERTAINMENT/CITI",
    "plainEn": "You paid NETFLIX ENTERTAINMENT ₹899",
    "plainHi": "आपने NETFLIX ENTERTAINMENT को ₹899 दिए",
    "plainTa": "நீங்கள் NETFLIX ENTERTAINMENT என்பவருக்கு ₹899 செலுத்தினீர்கள்",
    "counterpartyName": "NETFLIX ENTERTAINMENT",
    "referenceNumber": "410001663629",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001663629",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NETFLIX ENTERTAINMENT",
        "meaningEn": "Entity: NETFLIX ENTERTAINMENT",
        "meaningHi": "संस्थान/व्यक्ति: NETFLIX ENTERTAINMENT",
        "meaningTa": "நிறுவனம் / நபர்: NETFLIX ENTERTAINMENT"
      },
      {
        "code": "CITI",
        "meaningEn": "Bank Identifier: CITI",
        "meaningHi": "बैंक पहचान कोड: CITI",
        "meaningTa": "வங்கி குறியீடு: CITI"
      }
    ]
  },
  {
    "id": "tx_122",
    "customerId": "priya",
    "timestamp": "2026-08-10T13:48:00",
    "type": "credit",
    "category": "salary",
    "amountPaise": 11500000,
    "rawDescription": "NEFT/CR/410001677378/INFOSYS TECHNOLOGIES/HDFC",
    "plainEn": "Monthly salary credited ₹1,15,000",
    "plainHi": "मासिक वेतन खाते में जमा हुआ ₹1,15,000",
    "plainTa": "மாதாந்திர சம்பளம் வரவு வைக்கப்பட்டது ₹1,15,000",
    "counterpartyName": "INFOSYS TECHNOLOGIES",
    "referenceNumber": "410001677378",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Money came INTO your account)",
        "meaningHi": "क्रेडिट (खाते में राशि आई)",
        "meaningTa": "வரவு (கணக்கில் பணம் சேர்ந்தது)"
      },
      {
        "code": "410001677378",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "INFOSYS TECHNOLOGIES",
        "meaningEn": "Entity: INFOSYS TECHNOLOGIES",
        "meaningHi": "संस्थान/व्यक्ति: INFOSYS TECHNOLOGIES",
        "meaningTa": "நிறுவனம் / நபர்: INFOSYS TECHNOLOGIES"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_123",
    "customerId": "priya",
    "timestamp": "2026-08-09T09:25:00",
    "type": "debit",
    "category": "rent",
    "amountPaise": 2600000,
    "rawDescription": "NEFT/DR/410001691127/ANAND BUILDERS RENT/ICIC",
    "plainEn": "House rent paid ₹26,000",
    "plainHi": "घर का किराया चुकाया ₹26,000",
    "plainTa": "வீட்டு வாடகை செலுத்தப்பட்டது ₹26,000",
    "counterpartyName": "ANAND BUILDERS RENT",
    "referenceNumber": "410001691127",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001691127",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ANAND BUILDERS RENT",
        "meaningEn": "Entity: ANAND BUILDERS RENT",
        "meaningHi": "संस्थान/व्यक्ति: ANAND BUILDERS RENT",
        "meaningTa": "நிறுவனம் / நபர்: ANAND BUILDERS RENT"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_124",
    "customerId": "priya",
    "timestamp": "2026-08-08T06:00:00",
    "type": "debit",
    "category": "family",
    "amountPaise": 1500000,
    "rawDescription": "UPI/DR/410001704876/SHANKAR NARAYAN/JSBK",
    "plainEn": "You paid SHANKAR NARAYAN ₹15,000",
    "plainHi": "आपने SHANKAR NARAYAN को ₹15,000 दिए",
    "plainTa": "நீங்கள் SHANKAR NARAYAN என்பவருக்கு ₹15,000 செலுத்தினீர்கள்",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410001704876",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001704876",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "Entity: SHANKAR NARAYAN",
        "meaningHi": "संस्थान/व्यक्ति: SHANKAR NARAYAN",
        "meaningTa": "நிறுவனம் / நபர்: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक पहचान कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_125",
    "customerId": "priya",
    "timestamp": "2026-08-06T01:37:00",
    "type": "debit",
    "category": "groceries",
    "amountPaise": 420000,
    "rawDescription": "UPI/DR/410001718625/NATURE BASKET/SBIN",
    "plainEn": "You paid NATURE BASKET ₹4,200",
    "plainHi": "किराना सुपरमार्केट में भुगतान किया ₹4,200",
    "plainTa": "பல்பொருள் அங்காடியில் மளிகை வாங்கப்பட்டது ₹4,200",
    "counterpartyName": "NATURE BASKET",
    "referenceNumber": "410001718625",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001718625",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NATURE BASKET",
        "meaningEn": "Entity: NATURE BASKET",
        "meaningHi": "संस्थान/व्यक्ति: NATURE BASKET",
        "meaningTa": "நிறுவனம் / நபர்: NATURE BASKET"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक पहचान कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_126",
    "customerId": "priya",
    "timestamp": "2026-08-05T17:14:00",
    "type": "debit",
    "category": "utilities",
    "amountPaise": 189900,
    "rawDescription": "UPI/DR/410001732374/ACT FIBERNET WIFI/HDFC",
    "plainEn": "Broadband internet bill paid ₹1,899",
    "plainHi": "ब्रॉडबैंड इंटरनेट बिल चुकाया ₹1,899",
    "plainTa": "இணையதள வைஃபை கட்டணம் செலுத்தப்பட்டது ₹1,899",
    "counterpartyName": "ACT FIBERNET WIFI",
    "referenceNumber": "410001732374",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001732374",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "ACT FIBERNET WIFI",
        "meaningEn": "Entity: ACT FIBERNET WIFI",
        "meaningHi": "संस्थान/व्यक्ति: ACT FIBERNET WIFI",
        "meaningTa": "நிறுவனம் / நபர்: ACT FIBERNET WIFI"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_127",
    "customerId": "priya",
    "timestamp": "2026-08-04T13:49:00",
    "type": "debit",
    "category": "food",
    "amountPaise": 64000,
    "rawDescription": "UPI/DR/410001746123/SWIGGY BANGALORE/KKBK",
    "plainEn": "Food delivery order paid ₹640",
    "plainHi": "स्विगी फ़ूड आर्डर का भुगतान किया ₹640",
    "plainTa": "ஸ்விகி உணவு ஆர்டருக்கு பணம் செலுத்தப்பட்டது ₹640",
    "counterpartyName": "SWIGGY BANGALORE",
    "referenceNumber": "410001746123",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001746123",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "SWIGGY BANGALORE",
        "meaningEn": "Entity: SWIGGY BANGALORE",
        "meaningHi": "संस्थान/व्यक्ति: SWIGGY BANGALORE",
        "meaningTa": "நிறுவனம் / நபர்: SWIGGY BANGALORE"
      },
      {
        "code": "KKBK",
        "meaningEn": "Bank Identifier: KKBK",
        "meaningHi": "बैंक पहचान कोड: KKBK",
        "meaningTa": "வங்கி குறியீடு: KKBK"
      }
    ]
  },
  {
    "id": "tx_128",
    "customerId": "priya",
    "timestamp": "2026-08-02T09:26:00",
    "type": "debit",
    "category": "transport",
    "amountPaise": 48000,
    "rawDescription": "UPI/DR/410001759872/UBER INDIA RIDES/ICIC",
    "plainEn": "You paid UBER INDIA RIDES ₹480",
    "plainHi": "आपने UBER INDIA RIDES को ₹480 दिए",
    "plainTa": "நீங்கள் UBER INDIA RIDES என்பவருக்கு ₹480 செலுத்தினீர்கள்",
    "counterpartyName": "UBER INDIA RIDES",
    "referenceNumber": "410001759872",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001759872",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "UBER INDIA RIDES",
        "meaningEn": "Entity: UBER INDIA RIDES",
        "meaningHi": "संस्थान/व्यक्ति: UBER INDIA RIDES",
        "meaningTa": "நிறுவனம் / நபர்: UBER INDIA RIDES"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक पहचान कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_129",
    "customerId": "priya",
    "timestamp": "2026-08-01T05:03:00",
    "type": "debit",
    "category": "shopping",
    "amountPaise": 249900,
    "rawDescription": "UPI/DR/410001773621/AMAZON INDIA/HDFC",
    "plainEn": "You paid AMAZON INDIA ₹2,499",
    "plainHi": "ऑनलाइन शॉपिंग का भुगतान ₹2,499",
    "plainTa": "நீங்கள் AMAZON INDIA என்பவருக்கு ₹2,499 செலுத்தினீர்கள்",
    "counterpartyName": "AMAZON INDIA",
    "referenceNumber": "410001773621",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Mode: UPI (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: UPI (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001773621",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "AMAZON INDIA",
        "meaningEn": "Entity: AMAZON INDIA",
        "meaningHi": "संस्थान/व्यक्ति: AMAZON INDIA",
        "meaningTa": "நிறுவனம் / நபர்: AMAZON INDIA"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक पहचान कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_130",
    "customerId": "priya",
    "timestamp": "2026-07-31T01:38:00",
    "type": "debit",
    "category": "investment",
    "amountPaise": 1000000,
    "rawDescription": "NEFT/DR/410001787370/NIPPON MUTUAL FUND/UTIB",
    "plainEn": "You paid NIPPON MUTUAL FUND ₹10,000",
    "plainHi": "आपने NIPPON MUTUAL FUND को ₹10,000 दिए",
    "plainTa": "நீங்கள் NIPPON MUTUAL FUND என்பவருக்கு ₹10,000 செலுத்தினீர்கள்",
    "counterpartyName": "NIPPON MUTUAL FUND",
    "referenceNumber": "410001787370",
    "paymentMode": "NEFT",
    "rawBreakdown": [
      {
        "code": "NEFT",
        "meaningEn": "Payment Mode: NEFT (Direct electronic transfer)",
        "meaningHi": "भुगतान माध्यम: NEFT (प्रत्यक्ष इलेक्ट्रॉनिक ट्रांसफर)",
        "meaningTa": "பரிவர்த்தனை முறை: NEFT (வங்கி பரிமாற்றம்)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001787370",
        "meaningEn": "Bank reference number for transaction tracking",
        "meaningHi": "लेनदेन ट्रैकिंग के लिए बैंक संदर्भ संख्या",
        "meaningTa": "பரிவர்த்தனை கண்காணிப்பு எண்"
      },
      {
        "code": "NIPPON MUTUAL FUND",
        "meaningEn": "Entity: NIPPON MUTUAL FUND",
        "meaningHi": "संस्थान/व्यक्ति: NIPPON MUTUAL FUND",
        "meaningTa": "நிறுவனம் / நபர்: NIPPON MUTUAL FUND"
      },
      {
        "code": "UTIB",
        "meaningEn": "Bank Identifier: UTIB",
        "meaningHi": "बैंक पहचान कोड: UTIB",
        "meaningTa": "வங்கி குறியீடு: UTIB"
      }
    ]
  },
  {
    "id": "tx_131",
    "customerId": "aarav",
    "timestamp": "2026-10-22T18:00:00",
    "type": "credit",
    "category": "allowance",
    "amountPaise": 150000,
    "rawDescription": "UPI/CR/410001801119/MEENA SHARMA/JSBK",
    "plainEn": "Monthly pocket money from Mom ₹1,500",
    "plainHi": "माता जी से मासिक पॉकेट मनी मिली ₹1,500",
    "plainTa": "அம்மாவிடமிருந்து மாதாந்திர பாக்கெட் மணி ₹1,500",
    "counterpartyName": "MEENA SHARMA",
    "referenceNumber": "410001801119",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410001801119",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MEENA SHARMA",
        "meaningEn": "To/From: MEENA SHARMA",
        "meaningHi": "किसको/किससे: MEENA SHARMA",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MEENA SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_132",
    "customerId": "aarav",
    "timestamp": "2026-10-21T15:41:00",
    "type": "credit",
    "category": "gift",
    "amountPaise": 200000,
    "rawDescription": "UPI/CR/410001814868/SHANKAR NARAYAN/JSBK",
    "plainEn": "Gift from Grandfather Shankar ₹2,000",
    "plainHi": "दादाजी शंकर नारायण से उपहार मिला ₹2,000",
    "plainTa": "தாத்தா சங்கர் நாராயணனிடமிருந்து பரிசு ₹2,000",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410001814868",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410001814868",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "To/From: SHANKAR NARAYAN",
        "meaningHi": "किसको/किससे: SHANKAR NARAYAN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_133",
    "customerId": "aarav",
    "timestamp": "2026-10-20T13:22:00",
    "type": "debit",
    "category": "education",
    "amountPaise": 65000,
    "rawDescription": "UPI/DR/410001828617/SAPNA BOOK HOUSE/SBIN",
    "plainEn": "Bought science reference books ₹650",
    "plainHi": "आपने SAPNA BOOK HOUSE को ₹650 दिए",
    "plainTa": "அறிவியல் குறிப்புப் புத்தகங்கள் வாங்கப்பட்டது ₹650",
    "counterpartyName": "SAPNA BOOK HOUSE",
    "referenceNumber": "410001828617",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001828617",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SAPNA BOOK HOUSE",
        "meaningEn": "To/From: SAPNA BOOK HOUSE",
        "meaningHi": "किसको/किससे: SAPNA BOOK HOUSE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SAPNA BOOK HOUSE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_134",
    "customerId": "aarav",
    "timestamp": "2026-10-19T11:53:00",
    "type": "debit",
    "category": "canteen",
    "amountPaise": 12000,
    "rawDescription": "UPI/DR/410001842366/SCHOOL CANTEEN/ICIC",
    "plainEn": "You paid SCHOOL CANTEEN ₹120",
    "plainHi": "आपने SCHOOL CANTEEN को ₹120 दिए",
    "plainTa": "நீங்கள் SCHOOL CANTEEN என்பவருக்கு ₹120 செலுத்தினீர்கள்",
    "counterpartyName": "SCHOOL CANTEEN",
    "referenceNumber": "410001842366",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001842366",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SCHOOL CANTEEN",
        "meaningEn": "To/From: SCHOOL CANTEEN",
        "meaningHi": "किसको/किससे: SCHOOL CANTEEN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SCHOOL CANTEEN"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_135",
    "customerId": "aarav",
    "timestamp": "2026-10-17T09:34:00",
    "type": "debit",
    "category": "stationery",
    "amountPaise": 18000,
    "rawDescription": "UPI/DR/410001856115/STUDENT CORNER/PUNB",
    "plainEn": "You paid STUDENT CORNER ₹180",
    "plainHi": "कॉपियां और ज्योमेट्री बॉक्स खरीदा ₹180",
    "plainTa": "நீங்கள் STUDENT CORNER என்பவருக்கு ₹180 செலுத்தினீர்கள்",
    "counterpartyName": "STUDENT CORNER",
    "referenceNumber": "410001856115",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001856115",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "STUDENT CORNER",
        "meaningEn": "To/From: STUDENT CORNER",
        "meaningHi": "किसको/किससे: STUDENT CORNER",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: STUDENT CORNER"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Identifier: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_136",
    "customerId": "aarav",
    "timestamp": "2026-10-16T07:15:00",
    "type": "debit",
    "category": "sports",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410001869864/DECATHLON SPORTS/HDFC",
    "plainEn": "You paid DECATHLON SPORTS ₹350",
    "plainHi": "आपने DECATHLON SPORTS को ₹350 दिए",
    "plainTa": "பேட்மிண்டன் இறகுப்பந்து வாங்கப்பட்டது ₹350",
    "counterpartyName": "DECATHLON SPORTS",
    "referenceNumber": "410001869864",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001869864",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "DECATHLON SPORTS",
        "meaningEn": "To/From: DECATHLON SPORTS",
        "meaningHi": "किसको/किससे: DECATHLON SPORTS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: DECATHLON SPORTS"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_137",
    "customerId": "aarav",
    "timestamp": "2026-10-15T05:46:00",
    "type": "debit",
    "category": "snacks",
    "amountPaise": 15000,
    "rawDescription": "UPI/DR/410001883613/CORNER BAKERY/SBIN",
    "plainEn": "You paid CORNER BAKERY ₹150",
    "plainHi": "आपने CORNER BAKERY को ₹150 दिए",
    "plainTa": "நீங்கள் CORNER BAKERY என்பவருக்கு ₹150 செலுத்தினீர்கள்",
    "counterpartyName": "CORNER BAKERY",
    "referenceNumber": "410001883613",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001883613",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CORNER BAKERY",
        "meaningEn": "To/From: CORNER BAKERY",
        "meaningHi": "किसको/किससे: CORNER BAKERY",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CORNER BAKERY"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_138",
    "customerId": "aarav",
    "timestamp": "2026-10-13T03:27:00",
    "type": "debit",
    "category": "bus",
    "amountPaise": 25000,
    "rawDescription": "UPI/DR/410001897362/CITY BUS SMART CARD/BARB",
    "plainEn": "You paid CITY BUS SMART CARD ₹250",
    "plainHi": "आपने CITY BUS SMART CARD को ₹250 दिए",
    "plainTa": "நீங்கள் CITY BUS SMART CARD என்பவருக்கு ₹250 செலுத்தினீர்கள்",
    "counterpartyName": "CITY BUS SMART CARD",
    "referenceNumber": "410001897362",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001897362",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CITY BUS SMART CARD",
        "meaningEn": "To/From: CITY BUS SMART CARD",
        "meaningHi": "किसको/किससे: CITY BUS SMART CARD",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CITY BUS SMART CARD"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Identifier: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_139",
    "customerId": "aarav",
    "timestamp": "2026-10-12T17:58:00",
    "type": "credit",
    "category": "reward",
    "amountPaise": 50000,
    "rawDescription": "IMPS/CR/410001911111/MATH OLYMPIAD CASH PRIZE/SBIN",
    "plainEn": "Received ₹500 from MATH OLYMPIAD CASH PRIZE",
    "plainHi": "MATH OLYMPIAD CASH PRIZE से ₹500 प्राप्त हुए",
    "plainTa": "பள்ளி கணிதப் போட்டி பரிசுத் தொகை வரவு ₹500",
    "counterpartyName": "MATH OLYMPIAD CASH PRIZE",
    "referenceNumber": "410001911111",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Type: IMPS",
        "meaningHi": "भुगतान माध्यम: IMPS",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி வங்கி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410001911111",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MATH OLYMPIAD CASH PRIZE",
        "meaningEn": "To/From: MATH OLYMPIAD CASH PRIZE",
        "meaningHi": "किसको/किससे: MATH OLYMPIAD CASH PRIZE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MATH OLYMPIAD CASH PRIZE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_140",
    "customerId": "aarav",
    "timestamp": "2026-10-11T15:39:00",
    "type": "debit",
    "category": "savings_goal",
    "amountPaise": 50000,
    "rawDescription": "INTERNAL/DR/410001924860/ROBOTICS KIT SAVINGS/JSBK",
    "plainEn": "You paid ROBOTICS KIT SAVINGS ₹500",
    "plainHi": "आपने ROBOTICS KIT SAVINGS को ₹500 दिए",
    "plainTa": "ரோபோட்டிக்ஸ் கிட் சேமிப்பிற்கு மாற்றப்பட்டது ₹500",
    "counterpartyName": "ROBOTICS KIT SAVINGS",
    "referenceNumber": "410001924860",
    "paymentMode": "INTERNAL",
    "rawBreakdown": [
      {
        "code": "INTERNAL",
        "meaningEn": "Payment Type: INTERNAL",
        "meaningHi": "भुगतान माध्यम: INTERNAL",
        "meaningTa": "பரிவர்த்தனை முறை: உள் கணக்கு பரிமாற்றம்"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001924860",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "ROBOTICS KIT SAVINGS",
        "meaningEn": "To/From: ROBOTICS KIT SAVINGS",
        "meaningHi": "किसको/किससे: ROBOTICS KIT SAVINGS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: ROBOTICS KIT SAVINGS"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_141",
    "customerId": "aarav",
    "timestamp": "2026-10-09T13:20:00",
    "type": "debit",
    "category": "art",
    "amountPaise": 22000,
    "rawDescription": "UPI/DR/410001938609/CAMLIN ART SUPPLIES/UBIN",
    "plainEn": "You paid CAMLIN ART SUPPLIES ₹220",
    "plainHi": "आपने CAMLIN ART SUPPLIES को ₹220 दिए",
    "plainTa": "நீங்கள் CAMLIN ART SUPPLIES என்பவருக்கு ₹220 செலுத்தினீர்கள்",
    "counterpartyName": "CAMLIN ART SUPPLIES",
    "referenceNumber": "410001938609",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001938609",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CAMLIN ART SUPPLIES",
        "meaningEn": "To/From: CAMLIN ART SUPPLIES",
        "meaningHi": "किसको/किससे: CAMLIN ART SUPPLIES",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CAMLIN ART SUPPLIES"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Identifier: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_142",
    "customerId": "aarav",
    "timestamp": "2026-10-08T11:51:00",
    "type": "debit",
    "category": "ice_cream",
    "amountPaise": 8000,
    "rawDescription": "UPI/DR/410001952358/AMUL ICE CREAM PARLOUR/SBIN",
    "plainEn": "You paid AMUL ICE CREAM PARLOUR ₹80",
    "plainHi": "आपने AMUL ICE CREAM PARLOUR को ₹80 दिए",
    "plainTa": "ஐஸ்கிரீம் வாங்கப்பட்டது ₹80",
    "counterpartyName": "AMUL ICE CREAM PARLOUR",
    "referenceNumber": "410001952358",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001952358",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "AMUL ICE CREAM PARLOUR",
        "meaningEn": "To/From: AMUL ICE CREAM PARLOUR",
        "meaningHi": "किसको/किससे: AMUL ICE CREAM PARLOUR",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: AMUL ICE CREAM PARLOUR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_143",
    "customerId": "aarav",
    "timestamp": "2026-10-07T09:32:00",
    "type": "credit",
    "category": "allowance",
    "amountPaise": 150000,
    "rawDescription": "UPI/CR/410001966107/MEENA SHARMA/JSBK",
    "plainEn": "Monthly pocket money from Mom ₹1,500",
    "plainHi": "माता जी से मासिक पॉकेट मनी मिली ₹1,500",
    "plainTa": "அம்மாவிடமிருந்து மாதாந்திர பாக்கெட் மணி ₹1,500",
    "counterpartyName": "MEENA SHARMA",
    "referenceNumber": "410001966107",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410001966107",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MEENA SHARMA",
        "meaningEn": "To/From: MEENA SHARMA",
        "meaningHi": "किसको/किससे: MEENA SHARMA",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MEENA SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_144",
    "customerId": "aarav",
    "timestamp": "2026-10-05T07:13:00",
    "type": "credit",
    "category": "gift",
    "amountPaise": 200000,
    "rawDescription": "UPI/CR/410001979856/SHANKAR NARAYAN/JSBK",
    "plainEn": "Gift from Grandfather Shankar ₹2,000",
    "plainHi": "दादाजी शंकर नारायण से उपहार मिला ₹2,000",
    "plainTa": "தாத்தா சங்கர் நாராயணனிடமிருந்து பரிசு ₹2,000",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410001979856",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410001979856",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "To/From: SHANKAR NARAYAN",
        "meaningHi": "किसको/किससे: SHANKAR NARAYAN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_145",
    "customerId": "aarav",
    "timestamp": "2026-10-04T05:44:00",
    "type": "debit",
    "category": "education",
    "amountPaise": 65000,
    "rawDescription": "UPI/DR/410001993605/SAPNA BOOK HOUSE/SBIN",
    "plainEn": "Bought science reference books ₹650",
    "plainHi": "आपने SAPNA BOOK HOUSE को ₹650 दिए",
    "plainTa": "அறிவியல் குறிப்புப் புத்தகங்கள் வாங்கப்பட்டது ₹650",
    "counterpartyName": "SAPNA BOOK HOUSE",
    "referenceNumber": "410001993605",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410001993605",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SAPNA BOOK HOUSE",
        "meaningEn": "To/From: SAPNA BOOK HOUSE",
        "meaningHi": "किसको/किससे: SAPNA BOOK HOUSE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SAPNA BOOK HOUSE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_146",
    "customerId": "aarav",
    "timestamp": "2026-10-03T03:25:00",
    "type": "debit",
    "category": "canteen",
    "amountPaise": 12000,
    "rawDescription": "UPI/DR/410002007354/SCHOOL CANTEEN/ICIC",
    "plainEn": "You paid SCHOOL CANTEEN ₹120",
    "plainHi": "आपने SCHOOL CANTEEN को ₹120 दिए",
    "plainTa": "நீங்கள் SCHOOL CANTEEN என்பவருக்கு ₹120 செலுத்தினீர்கள்",
    "counterpartyName": "SCHOOL CANTEEN",
    "referenceNumber": "410002007354",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002007354",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SCHOOL CANTEEN",
        "meaningEn": "To/From: SCHOOL CANTEEN",
        "meaningHi": "किसको/किससे: SCHOOL CANTEEN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SCHOOL CANTEEN"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_147",
    "customerId": "aarav",
    "timestamp": "2026-10-02T17:56:00",
    "type": "debit",
    "category": "stationery",
    "amountPaise": 18000,
    "rawDescription": "UPI/DR/410002021103/STUDENT CORNER/PUNB",
    "plainEn": "You paid STUDENT CORNER ₹180",
    "plainHi": "कॉपियां और ज्योमेट्री बॉक्स खरीदा ₹180",
    "plainTa": "நீங்கள் STUDENT CORNER என்பவருக்கு ₹180 செலுத்தினீர்கள்",
    "counterpartyName": "STUDENT CORNER",
    "referenceNumber": "410002021103",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002021103",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "STUDENT CORNER",
        "meaningEn": "To/From: STUDENT CORNER",
        "meaningHi": "किसको/किससे: STUDENT CORNER",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: STUDENT CORNER"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Identifier: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_148",
    "customerId": "aarav",
    "timestamp": "2026-09-30T15:37:00",
    "type": "debit",
    "category": "sports",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410002034852/DECATHLON SPORTS/HDFC",
    "plainEn": "You paid DECATHLON SPORTS ₹350",
    "plainHi": "आपने DECATHLON SPORTS को ₹350 दिए",
    "plainTa": "பேட்மிண்டன் இறகுப்பந்து வாங்கப்பட்டது ₹350",
    "counterpartyName": "DECATHLON SPORTS",
    "referenceNumber": "410002034852",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002034852",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "DECATHLON SPORTS",
        "meaningEn": "To/From: DECATHLON SPORTS",
        "meaningHi": "किसको/किससे: DECATHLON SPORTS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: DECATHLON SPORTS"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_149",
    "customerId": "aarav",
    "timestamp": "2026-09-29T13:18:00",
    "type": "debit",
    "category": "snacks",
    "amountPaise": 15000,
    "rawDescription": "UPI/DR/410002048601/CORNER BAKERY/SBIN",
    "plainEn": "You paid CORNER BAKERY ₹150",
    "plainHi": "आपने CORNER BAKERY को ₹150 दिए",
    "plainTa": "நீங்கள் CORNER BAKERY என்பவருக்கு ₹150 செலுத்தினீர்கள்",
    "counterpartyName": "CORNER BAKERY",
    "referenceNumber": "410002048601",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002048601",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CORNER BAKERY",
        "meaningEn": "To/From: CORNER BAKERY",
        "meaningHi": "किसको/किससे: CORNER BAKERY",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CORNER BAKERY"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_150",
    "customerId": "aarav",
    "timestamp": "2026-09-28T11:49:00",
    "type": "debit",
    "category": "bus",
    "amountPaise": 25000,
    "rawDescription": "UPI/DR/410002062350/CITY BUS SMART CARD/BARB",
    "plainEn": "You paid CITY BUS SMART CARD ₹250",
    "plainHi": "आपने CITY BUS SMART CARD को ₹250 दिए",
    "plainTa": "நீங்கள் CITY BUS SMART CARD என்பவருக்கு ₹250 செலுத்தினீர்கள்",
    "counterpartyName": "CITY BUS SMART CARD",
    "referenceNumber": "410002062350",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002062350",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CITY BUS SMART CARD",
        "meaningEn": "To/From: CITY BUS SMART CARD",
        "meaningHi": "किसको/किससे: CITY BUS SMART CARD",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CITY BUS SMART CARD"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Identifier: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_151",
    "customerId": "aarav",
    "timestamp": "2026-09-26T09:30:00",
    "type": "credit",
    "category": "reward",
    "amountPaise": 50000,
    "rawDescription": "IMPS/CR/410002076099/MATH OLYMPIAD CASH PRIZE/SBIN",
    "plainEn": "Received ₹500 from MATH OLYMPIAD CASH PRIZE",
    "plainHi": "MATH OLYMPIAD CASH PRIZE से ₹500 प्राप्त हुए",
    "plainTa": "பள்ளி கணிதப் போட்டி பரிசுத் தொகை வரவு ₹500",
    "counterpartyName": "MATH OLYMPIAD CASH PRIZE",
    "referenceNumber": "410002076099",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Type: IMPS",
        "meaningHi": "भुगतान माध्यम: IMPS",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி வங்கி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002076099",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MATH OLYMPIAD CASH PRIZE",
        "meaningEn": "To/From: MATH OLYMPIAD CASH PRIZE",
        "meaningHi": "किसको/किससे: MATH OLYMPIAD CASH PRIZE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MATH OLYMPIAD CASH PRIZE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_152",
    "customerId": "aarav",
    "timestamp": "2026-09-25T07:11:00",
    "type": "debit",
    "category": "savings_goal",
    "amountPaise": 50000,
    "rawDescription": "INTERNAL/DR/410002089848/ROBOTICS KIT SAVINGS/JSBK",
    "plainEn": "You paid ROBOTICS KIT SAVINGS ₹500",
    "plainHi": "आपने ROBOTICS KIT SAVINGS को ₹500 दिए",
    "plainTa": "ரோபோட்டிக்ஸ் கிட் சேமிப்பிற்கு மாற்றப்பட்டது ₹500",
    "counterpartyName": "ROBOTICS KIT SAVINGS",
    "referenceNumber": "410002089848",
    "paymentMode": "INTERNAL",
    "rawBreakdown": [
      {
        "code": "INTERNAL",
        "meaningEn": "Payment Type: INTERNAL",
        "meaningHi": "भुगतान माध्यम: INTERNAL",
        "meaningTa": "பரிவர்த்தனை முறை: உள் கணக்கு பரிமாற்றம்"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002089848",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "ROBOTICS KIT SAVINGS",
        "meaningEn": "To/From: ROBOTICS KIT SAVINGS",
        "meaningHi": "किसको/किससे: ROBOTICS KIT SAVINGS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: ROBOTICS KIT SAVINGS"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_153",
    "customerId": "aarav",
    "timestamp": "2026-09-24T05:42:00",
    "type": "debit",
    "category": "art",
    "amountPaise": 22000,
    "rawDescription": "UPI/DR/410002103597/CAMLIN ART SUPPLIES/UBIN",
    "plainEn": "You paid CAMLIN ART SUPPLIES ₹220",
    "plainHi": "आपने CAMLIN ART SUPPLIES को ₹220 दिए",
    "plainTa": "நீங்கள் CAMLIN ART SUPPLIES என்பவருக்கு ₹220 செலுத்தினீர்கள்",
    "counterpartyName": "CAMLIN ART SUPPLIES",
    "referenceNumber": "410002103597",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002103597",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CAMLIN ART SUPPLIES",
        "meaningEn": "To/From: CAMLIN ART SUPPLIES",
        "meaningHi": "किसको/किससे: CAMLIN ART SUPPLIES",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CAMLIN ART SUPPLIES"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Identifier: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_154",
    "customerId": "aarav",
    "timestamp": "2026-09-22T03:23:00",
    "type": "debit",
    "category": "ice_cream",
    "amountPaise": 8000,
    "rawDescription": "UPI/DR/410002117346/AMUL ICE CREAM PARLOUR/SBIN",
    "plainEn": "You paid AMUL ICE CREAM PARLOUR ₹80",
    "plainHi": "आपने AMUL ICE CREAM PARLOUR को ₹80 दिए",
    "plainTa": "ஐஸ்கிரீம் வாங்கப்பட்டது ₹80",
    "counterpartyName": "AMUL ICE CREAM PARLOUR",
    "referenceNumber": "410002117346",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002117346",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "AMUL ICE CREAM PARLOUR",
        "meaningEn": "To/From: AMUL ICE CREAM PARLOUR",
        "meaningHi": "किसको/किससे: AMUL ICE CREAM PARLOUR",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: AMUL ICE CREAM PARLOUR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_155",
    "customerId": "aarav",
    "timestamp": "2026-09-21T17:54:00",
    "type": "credit",
    "category": "allowance",
    "amountPaise": 150000,
    "rawDescription": "UPI/CR/410002131095/MEENA SHARMA/JSBK",
    "plainEn": "Monthly pocket money from Mom ₹1,500",
    "plainHi": "माता जी से मासिक पॉकेट मनी मिली ₹1,500",
    "plainTa": "அம்மாவிடமிருந்து மாதாந்திர பாக்கெட் மணி ₹1,500",
    "counterpartyName": "MEENA SHARMA",
    "referenceNumber": "410002131095",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002131095",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MEENA SHARMA",
        "meaningEn": "To/From: MEENA SHARMA",
        "meaningHi": "किसको/किससे: MEENA SHARMA",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MEENA SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_156",
    "customerId": "aarav",
    "timestamp": "2026-09-20T15:35:00",
    "type": "credit",
    "category": "gift",
    "amountPaise": 200000,
    "rawDescription": "UPI/CR/410002144844/SHANKAR NARAYAN/JSBK",
    "plainEn": "Gift from Grandfather Shankar ₹2,000",
    "plainHi": "दादाजी शंकर नारायण से उपहार मिला ₹2,000",
    "plainTa": "தாத்தா சங்கர் நாராயணனிடமிருந்து பரிசு ₹2,000",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410002144844",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002144844",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "To/From: SHANKAR NARAYAN",
        "meaningHi": "किसको/किससे: SHANKAR NARAYAN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_157",
    "customerId": "aarav",
    "timestamp": "2026-09-18T13:16:00",
    "type": "debit",
    "category": "education",
    "amountPaise": 65000,
    "rawDescription": "UPI/DR/410002158593/SAPNA BOOK HOUSE/SBIN",
    "plainEn": "Bought science reference books ₹650",
    "plainHi": "आपने SAPNA BOOK HOUSE को ₹650 दिए",
    "plainTa": "அறிவியல் குறிப்புப் புத்தகங்கள் வாங்கப்பட்டது ₹650",
    "counterpartyName": "SAPNA BOOK HOUSE",
    "referenceNumber": "410002158593",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002158593",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SAPNA BOOK HOUSE",
        "meaningEn": "To/From: SAPNA BOOK HOUSE",
        "meaningHi": "किसको/किससे: SAPNA BOOK HOUSE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SAPNA BOOK HOUSE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_158",
    "customerId": "aarav",
    "timestamp": "2026-09-17T11:47:00",
    "type": "debit",
    "category": "canteen",
    "amountPaise": 12000,
    "rawDescription": "UPI/DR/410002172342/SCHOOL CANTEEN/ICIC",
    "plainEn": "You paid SCHOOL CANTEEN ₹120",
    "plainHi": "आपने SCHOOL CANTEEN को ₹120 दिए",
    "plainTa": "நீங்கள் SCHOOL CANTEEN என்பவருக்கு ₹120 செலுத்தினீர்கள்",
    "counterpartyName": "SCHOOL CANTEEN",
    "referenceNumber": "410002172342",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002172342",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SCHOOL CANTEEN",
        "meaningEn": "To/From: SCHOOL CANTEEN",
        "meaningHi": "किसको/किससे: SCHOOL CANTEEN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SCHOOL CANTEEN"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_159",
    "customerId": "aarav",
    "timestamp": "2026-09-16T09:28:00",
    "type": "debit",
    "category": "stationery",
    "amountPaise": 18000,
    "rawDescription": "UPI/DR/410002186091/STUDENT CORNER/PUNB",
    "plainEn": "You paid STUDENT CORNER ₹180",
    "plainHi": "कॉपियां और ज्योमेट्री बॉक्स खरीदा ₹180",
    "plainTa": "நீங்கள் STUDENT CORNER என்பவருக்கு ₹180 செலுத்தினீர்கள்",
    "counterpartyName": "STUDENT CORNER",
    "referenceNumber": "410002186091",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002186091",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "STUDENT CORNER",
        "meaningEn": "To/From: STUDENT CORNER",
        "meaningHi": "किसको/किससे: STUDENT CORNER",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: STUDENT CORNER"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Identifier: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_160",
    "customerId": "aarav",
    "timestamp": "2026-09-15T07:59:00",
    "type": "debit",
    "category": "sports",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410002199840/DECATHLON SPORTS/HDFC",
    "plainEn": "You paid DECATHLON SPORTS ₹350",
    "plainHi": "आपने DECATHLON SPORTS को ₹350 दिए",
    "plainTa": "பேட்மிண்டன் இறகுப்பந்து வாங்கப்பட்டது ₹350",
    "counterpartyName": "DECATHLON SPORTS",
    "referenceNumber": "410002199840",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002199840",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "DECATHLON SPORTS",
        "meaningEn": "To/From: DECATHLON SPORTS",
        "meaningHi": "किसको/किससे: DECATHLON SPORTS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: DECATHLON SPORTS"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_161",
    "customerId": "aarav",
    "timestamp": "2026-09-13T05:40:00",
    "type": "debit",
    "category": "snacks",
    "amountPaise": 15000,
    "rawDescription": "UPI/DR/410002213589/CORNER BAKERY/SBIN",
    "plainEn": "You paid CORNER BAKERY ₹150",
    "plainHi": "आपने CORNER BAKERY को ₹150 दिए",
    "plainTa": "நீங்கள் CORNER BAKERY என்பவருக்கு ₹150 செலுத்தினீர்கள்",
    "counterpartyName": "CORNER BAKERY",
    "referenceNumber": "410002213589",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002213589",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CORNER BAKERY",
        "meaningEn": "To/From: CORNER BAKERY",
        "meaningHi": "किसको/किससे: CORNER BAKERY",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CORNER BAKERY"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_162",
    "customerId": "aarav",
    "timestamp": "2026-09-12T03:21:00",
    "type": "debit",
    "category": "bus",
    "amountPaise": 25000,
    "rawDescription": "UPI/DR/410002227338/CITY BUS SMART CARD/BARB",
    "plainEn": "You paid CITY BUS SMART CARD ₹250",
    "plainHi": "आपने CITY BUS SMART CARD को ₹250 दिए",
    "plainTa": "நீங்கள் CITY BUS SMART CARD என்பவருக்கு ₹250 செலுத்தினீர்கள்",
    "counterpartyName": "CITY BUS SMART CARD",
    "referenceNumber": "410002227338",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002227338",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CITY BUS SMART CARD",
        "meaningEn": "To/From: CITY BUS SMART CARD",
        "meaningHi": "किसको/किससे: CITY BUS SMART CARD",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CITY BUS SMART CARD"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Identifier: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_163",
    "customerId": "aarav",
    "timestamp": "2026-09-11T17:52:00",
    "type": "credit",
    "category": "reward",
    "amountPaise": 50000,
    "rawDescription": "IMPS/CR/410002241087/MATH OLYMPIAD CASH PRIZE/SBIN",
    "plainEn": "Received ₹500 from MATH OLYMPIAD CASH PRIZE",
    "plainHi": "MATH OLYMPIAD CASH PRIZE से ₹500 प्राप्त हुए",
    "plainTa": "பள்ளி கணிதப் போட்டி பரிசுத் தொகை வரவு ₹500",
    "counterpartyName": "MATH OLYMPIAD CASH PRIZE",
    "referenceNumber": "410002241087",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Type: IMPS",
        "meaningHi": "भुगतान माध्यम: IMPS",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி வங்கி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002241087",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MATH OLYMPIAD CASH PRIZE",
        "meaningEn": "To/From: MATH OLYMPIAD CASH PRIZE",
        "meaningHi": "किसको/किससे: MATH OLYMPIAD CASH PRIZE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MATH OLYMPIAD CASH PRIZE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_164",
    "customerId": "aarav",
    "timestamp": "2026-09-09T15:33:00",
    "type": "debit",
    "category": "savings_goal",
    "amountPaise": 50000,
    "rawDescription": "INTERNAL/DR/410002254836/ROBOTICS KIT SAVINGS/JSBK",
    "plainEn": "You paid ROBOTICS KIT SAVINGS ₹500",
    "plainHi": "आपने ROBOTICS KIT SAVINGS को ₹500 दिए",
    "plainTa": "ரோபோட்டிக்ஸ் கிட் சேமிப்பிற்கு மாற்றப்பட்டது ₹500",
    "counterpartyName": "ROBOTICS KIT SAVINGS",
    "referenceNumber": "410002254836",
    "paymentMode": "INTERNAL",
    "rawBreakdown": [
      {
        "code": "INTERNAL",
        "meaningEn": "Payment Type: INTERNAL",
        "meaningHi": "भुगतान माध्यम: INTERNAL",
        "meaningTa": "பரிவர்த்தனை முறை: உள் கணக்கு பரிமாற்றம்"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002254836",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "ROBOTICS KIT SAVINGS",
        "meaningEn": "To/From: ROBOTICS KIT SAVINGS",
        "meaningHi": "किसको/किससे: ROBOTICS KIT SAVINGS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: ROBOTICS KIT SAVINGS"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_165",
    "customerId": "aarav",
    "timestamp": "2026-09-08T13:14:00",
    "type": "debit",
    "category": "art",
    "amountPaise": 22000,
    "rawDescription": "UPI/DR/410002268585/CAMLIN ART SUPPLIES/UBIN",
    "plainEn": "You paid CAMLIN ART SUPPLIES ₹220",
    "plainHi": "आपने CAMLIN ART SUPPLIES को ₹220 दिए",
    "plainTa": "நீங்கள் CAMLIN ART SUPPLIES என்பவருக்கு ₹220 செலுத்தினீர்கள்",
    "counterpartyName": "CAMLIN ART SUPPLIES",
    "referenceNumber": "410002268585",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002268585",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CAMLIN ART SUPPLIES",
        "meaningEn": "To/From: CAMLIN ART SUPPLIES",
        "meaningHi": "किसको/किससे: CAMLIN ART SUPPLIES",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CAMLIN ART SUPPLIES"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Identifier: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_166",
    "customerId": "aarav",
    "timestamp": "2026-09-07T11:45:00",
    "type": "debit",
    "category": "ice_cream",
    "amountPaise": 8000,
    "rawDescription": "UPI/DR/410002282334/AMUL ICE CREAM PARLOUR/SBIN",
    "plainEn": "You paid AMUL ICE CREAM PARLOUR ₹80",
    "plainHi": "आपने AMUL ICE CREAM PARLOUR को ₹80 दिए",
    "plainTa": "ஐஸ்கிரீம் வாங்கப்பட்டது ₹80",
    "counterpartyName": "AMUL ICE CREAM PARLOUR",
    "referenceNumber": "410002282334",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002282334",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "AMUL ICE CREAM PARLOUR",
        "meaningEn": "To/From: AMUL ICE CREAM PARLOUR",
        "meaningHi": "किसको/किससे: AMUL ICE CREAM PARLOUR",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: AMUL ICE CREAM PARLOUR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_167",
    "customerId": "aarav",
    "timestamp": "2026-09-05T09:26:00",
    "type": "credit",
    "category": "allowance",
    "amountPaise": 150000,
    "rawDescription": "UPI/CR/410002296083/MEENA SHARMA/JSBK",
    "plainEn": "Monthly pocket money from Mom ₹1,500",
    "plainHi": "माता जी से मासिक पॉकेट मनी मिली ₹1,500",
    "plainTa": "அம்மாவிடமிருந்து மாதாந்திர பாக்கெட் மணி ₹1,500",
    "counterpartyName": "MEENA SHARMA",
    "referenceNumber": "410002296083",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002296083",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MEENA SHARMA",
        "meaningEn": "To/From: MEENA SHARMA",
        "meaningHi": "किसको/किससे: MEENA SHARMA",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MEENA SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_168",
    "customerId": "aarav",
    "timestamp": "2026-09-04T07:57:00",
    "type": "credit",
    "category": "gift",
    "amountPaise": 200000,
    "rawDescription": "UPI/CR/410002309832/SHANKAR NARAYAN/JSBK",
    "plainEn": "Gift from Grandfather Shankar ₹2,000",
    "plainHi": "दादाजी शंकर नारायण से उपहार मिला ₹2,000",
    "plainTa": "தாத்தா சங்கர் நாராயணனிடமிருந்து பரிசு ₹2,000",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410002309832",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002309832",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "To/From: SHANKAR NARAYAN",
        "meaningHi": "किसको/किससे: SHANKAR NARAYAN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_169",
    "customerId": "aarav",
    "timestamp": "2026-09-03T05:38:00",
    "type": "debit",
    "category": "education",
    "amountPaise": 65000,
    "rawDescription": "UPI/DR/410002323581/SAPNA BOOK HOUSE/SBIN",
    "plainEn": "Bought science reference books ₹650",
    "plainHi": "आपने SAPNA BOOK HOUSE को ₹650 दिए",
    "plainTa": "அறிவியல் குறிப்புப் புத்தகங்கள் வாங்கப்பட்டது ₹650",
    "counterpartyName": "SAPNA BOOK HOUSE",
    "referenceNumber": "410002323581",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002323581",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SAPNA BOOK HOUSE",
        "meaningEn": "To/From: SAPNA BOOK HOUSE",
        "meaningHi": "किसको/किससे: SAPNA BOOK HOUSE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SAPNA BOOK HOUSE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_170",
    "customerId": "aarav",
    "timestamp": "2026-09-01T03:19:00",
    "type": "debit",
    "category": "canteen",
    "amountPaise": 12000,
    "rawDescription": "UPI/DR/410002337330/SCHOOL CANTEEN/ICIC",
    "plainEn": "You paid SCHOOL CANTEEN ₹120",
    "plainHi": "आपने SCHOOL CANTEEN को ₹120 दिए",
    "plainTa": "நீங்கள் SCHOOL CANTEEN என்பவருக்கு ₹120 செலுத்தினீர்கள்",
    "counterpartyName": "SCHOOL CANTEEN",
    "referenceNumber": "410002337330",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002337330",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SCHOOL CANTEEN",
        "meaningEn": "To/From: SCHOOL CANTEEN",
        "meaningHi": "किसको/किससे: SCHOOL CANTEEN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SCHOOL CANTEEN"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_171",
    "customerId": "aarav",
    "timestamp": "2026-08-31T17:50:00",
    "type": "debit",
    "category": "stationery",
    "amountPaise": 18000,
    "rawDescription": "UPI/DR/410002351079/STUDENT CORNER/PUNB",
    "plainEn": "You paid STUDENT CORNER ₹180",
    "plainHi": "कॉपियां और ज्योमेट्री बॉक्स खरीदा ₹180",
    "plainTa": "நீங்கள் STUDENT CORNER என்பவருக்கு ₹180 செலுத்தினீர்கள்",
    "counterpartyName": "STUDENT CORNER",
    "referenceNumber": "410002351079",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002351079",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "STUDENT CORNER",
        "meaningEn": "To/From: STUDENT CORNER",
        "meaningHi": "किसको/किससे: STUDENT CORNER",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: STUDENT CORNER"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Identifier: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_172",
    "customerId": "aarav",
    "timestamp": "2026-08-30T15:31:00",
    "type": "debit",
    "category": "sports",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410002364828/DECATHLON SPORTS/HDFC",
    "plainEn": "You paid DECATHLON SPORTS ₹350",
    "plainHi": "आपने DECATHLON SPORTS को ₹350 दिए",
    "plainTa": "பேட்மிண்டன் இறகுப்பந்து வாங்கப்பட்டது ₹350",
    "counterpartyName": "DECATHLON SPORTS",
    "referenceNumber": "410002364828",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002364828",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "DECATHLON SPORTS",
        "meaningEn": "To/From: DECATHLON SPORTS",
        "meaningHi": "किसको/किससे: DECATHLON SPORTS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: DECATHLON SPORTS"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_173",
    "customerId": "aarav",
    "timestamp": "2026-08-29T13:12:00",
    "type": "debit",
    "category": "snacks",
    "amountPaise": 15000,
    "rawDescription": "UPI/DR/410002378577/CORNER BAKERY/SBIN",
    "plainEn": "You paid CORNER BAKERY ₹150",
    "plainHi": "आपने CORNER BAKERY को ₹150 दिए",
    "plainTa": "நீங்கள் CORNER BAKERY என்பவருக்கு ₹150 செலுத்தினீர்கள்",
    "counterpartyName": "CORNER BAKERY",
    "referenceNumber": "410002378577",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002378577",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CORNER BAKERY",
        "meaningEn": "To/From: CORNER BAKERY",
        "meaningHi": "किसको/किससे: CORNER BAKERY",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CORNER BAKERY"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_174",
    "customerId": "aarav",
    "timestamp": "2026-08-27T11:43:00",
    "type": "debit",
    "category": "bus",
    "amountPaise": 25000,
    "rawDescription": "UPI/DR/410002392326/CITY BUS SMART CARD/BARB",
    "plainEn": "You paid CITY BUS SMART CARD ₹250",
    "plainHi": "आपने CITY BUS SMART CARD को ₹250 दिए",
    "plainTa": "நீங்கள் CITY BUS SMART CARD என்பவருக்கு ₹250 செலுத்தினீர்கள்",
    "counterpartyName": "CITY BUS SMART CARD",
    "referenceNumber": "410002392326",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002392326",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CITY BUS SMART CARD",
        "meaningEn": "To/From: CITY BUS SMART CARD",
        "meaningHi": "किसको/किससे: CITY BUS SMART CARD",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CITY BUS SMART CARD"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Identifier: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_175",
    "customerId": "aarav",
    "timestamp": "2026-08-26T09:24:00",
    "type": "credit",
    "category": "reward",
    "amountPaise": 50000,
    "rawDescription": "IMPS/CR/410002406075/MATH OLYMPIAD CASH PRIZE/SBIN",
    "plainEn": "Received ₹500 from MATH OLYMPIAD CASH PRIZE",
    "plainHi": "MATH OLYMPIAD CASH PRIZE से ₹500 प्राप्त हुए",
    "plainTa": "பள்ளி கணிதப் போட்டி பரிசுத் தொகை வரவு ₹500",
    "counterpartyName": "MATH OLYMPIAD CASH PRIZE",
    "referenceNumber": "410002406075",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Type: IMPS",
        "meaningHi": "भुगतान माध्यम: IMPS",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி வங்கி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002406075",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MATH OLYMPIAD CASH PRIZE",
        "meaningEn": "To/From: MATH OLYMPIAD CASH PRIZE",
        "meaningHi": "किसको/किससे: MATH OLYMPIAD CASH PRIZE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MATH OLYMPIAD CASH PRIZE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_176",
    "customerId": "aarav",
    "timestamp": "2026-08-25T07:55:00",
    "type": "debit",
    "category": "savings_goal",
    "amountPaise": 50000,
    "rawDescription": "INTERNAL/DR/410002419824/ROBOTICS KIT SAVINGS/JSBK",
    "plainEn": "You paid ROBOTICS KIT SAVINGS ₹500",
    "plainHi": "आपने ROBOTICS KIT SAVINGS को ₹500 दिए",
    "plainTa": "ரோபோட்டிக்ஸ் கிட் சேமிப்பிற்கு மாற்றப்பட்டது ₹500",
    "counterpartyName": "ROBOTICS KIT SAVINGS",
    "referenceNumber": "410002419824",
    "paymentMode": "INTERNAL",
    "rawBreakdown": [
      {
        "code": "INTERNAL",
        "meaningEn": "Payment Type: INTERNAL",
        "meaningHi": "भुगतान माध्यम: INTERNAL",
        "meaningTa": "பரிவர்த்தனை முறை: உள் கணக்கு பரிமாற்றம்"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002419824",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "ROBOTICS KIT SAVINGS",
        "meaningEn": "To/From: ROBOTICS KIT SAVINGS",
        "meaningHi": "किसको/किससे: ROBOTICS KIT SAVINGS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: ROBOTICS KIT SAVINGS"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_177",
    "customerId": "aarav",
    "timestamp": "2026-08-23T05:36:00",
    "type": "debit",
    "category": "art",
    "amountPaise": 22000,
    "rawDescription": "UPI/DR/410002433573/CAMLIN ART SUPPLIES/UBIN",
    "plainEn": "You paid CAMLIN ART SUPPLIES ₹220",
    "plainHi": "आपने CAMLIN ART SUPPLIES को ₹220 दिए",
    "plainTa": "நீங்கள் CAMLIN ART SUPPLIES என்பவருக்கு ₹220 செலுத்தினீர்கள்",
    "counterpartyName": "CAMLIN ART SUPPLIES",
    "referenceNumber": "410002433573",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002433573",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CAMLIN ART SUPPLIES",
        "meaningEn": "To/From: CAMLIN ART SUPPLIES",
        "meaningHi": "किसको/किससे: CAMLIN ART SUPPLIES",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CAMLIN ART SUPPLIES"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Identifier: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_178",
    "customerId": "aarav",
    "timestamp": "2026-08-22T03:17:00",
    "type": "debit",
    "category": "ice_cream",
    "amountPaise": 8000,
    "rawDescription": "UPI/DR/410002447322/AMUL ICE CREAM PARLOUR/SBIN",
    "plainEn": "You paid AMUL ICE CREAM PARLOUR ₹80",
    "plainHi": "आपने AMUL ICE CREAM PARLOUR को ₹80 दिए",
    "plainTa": "ஐஸ்கிரீம் வாங்கப்பட்டது ₹80",
    "counterpartyName": "AMUL ICE CREAM PARLOUR",
    "referenceNumber": "410002447322",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002447322",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "AMUL ICE CREAM PARLOUR",
        "meaningEn": "To/From: AMUL ICE CREAM PARLOUR",
        "meaningHi": "किसको/किससे: AMUL ICE CREAM PARLOUR",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: AMUL ICE CREAM PARLOUR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_179",
    "customerId": "aarav",
    "timestamp": "2026-08-21T17:48:00",
    "type": "credit",
    "category": "allowance",
    "amountPaise": 150000,
    "rawDescription": "UPI/CR/410002461071/MEENA SHARMA/JSBK",
    "plainEn": "Monthly pocket money from Mom ₹1,500",
    "plainHi": "माता जी से मासिक पॉकेट मनी मिली ₹1,500",
    "plainTa": "அம்மாவிடமிருந்து மாதாந்திர பாக்கெட் மணி ₹1,500",
    "counterpartyName": "MEENA SHARMA",
    "referenceNumber": "410002461071",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002461071",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MEENA SHARMA",
        "meaningEn": "To/From: MEENA SHARMA",
        "meaningHi": "किसको/किससे: MEENA SHARMA",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MEENA SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_180",
    "customerId": "aarav",
    "timestamp": "2026-08-19T15:29:00",
    "type": "credit",
    "category": "gift",
    "amountPaise": 200000,
    "rawDescription": "UPI/CR/410002474820/SHANKAR NARAYAN/JSBK",
    "plainEn": "Gift from Grandfather Shankar ₹2,000",
    "plainHi": "दादाजी शंकर नारायण से उपहार मिला ₹2,000",
    "plainTa": "தாத்தா சங்கர் நாராயணனிடமிருந்து பரிசு ₹2,000",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410002474820",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002474820",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "To/From: SHANKAR NARAYAN",
        "meaningHi": "किसको/किससे: SHANKAR NARAYAN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_181",
    "customerId": "aarav",
    "timestamp": "2026-08-18T14:00:00",
    "type": "debit",
    "category": "education",
    "amountPaise": 65000,
    "rawDescription": "UPI/DR/410002488569/SAPNA BOOK HOUSE/SBIN",
    "plainEn": "Bought science reference books ₹650",
    "plainHi": "आपने SAPNA BOOK HOUSE को ₹650 दिए",
    "plainTa": "அறிவியல் குறிப்புப் புத்தகங்கள் வாங்கப்பட்டது ₹650",
    "counterpartyName": "SAPNA BOOK HOUSE",
    "referenceNumber": "410002488569",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002488569",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SAPNA BOOK HOUSE",
        "meaningEn": "To/From: SAPNA BOOK HOUSE",
        "meaningHi": "किसको/किससे: SAPNA BOOK HOUSE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SAPNA BOOK HOUSE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_182",
    "customerId": "aarav",
    "timestamp": "2026-08-17T11:41:00",
    "type": "debit",
    "category": "canteen",
    "amountPaise": 12000,
    "rawDescription": "UPI/DR/410002502318/SCHOOL CANTEEN/ICIC",
    "plainEn": "You paid SCHOOL CANTEEN ₹120",
    "plainHi": "आपने SCHOOL CANTEEN को ₹120 दिए",
    "plainTa": "நீங்கள் SCHOOL CANTEEN என்பவருக்கு ₹120 செலுத்தினீர்கள்",
    "counterpartyName": "SCHOOL CANTEEN",
    "referenceNumber": "410002502318",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002502318",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SCHOOL CANTEEN",
        "meaningEn": "To/From: SCHOOL CANTEEN",
        "meaningHi": "किसको/किससे: SCHOOL CANTEEN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SCHOOL CANTEEN"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_183",
    "customerId": "aarav",
    "timestamp": "2026-08-15T09:22:00",
    "type": "debit",
    "category": "stationery",
    "amountPaise": 18000,
    "rawDescription": "UPI/DR/410002516067/STUDENT CORNER/PUNB",
    "plainEn": "You paid STUDENT CORNER ₹180",
    "plainHi": "कॉपियां और ज्योमेट्री बॉक्स खरीदा ₹180",
    "plainTa": "நீங்கள் STUDENT CORNER என்பவருக்கு ₹180 செலுத்தினீர்கள்",
    "counterpartyName": "STUDENT CORNER",
    "referenceNumber": "410002516067",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002516067",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "STUDENT CORNER",
        "meaningEn": "To/From: STUDENT CORNER",
        "meaningHi": "किसको/किससे: STUDENT CORNER",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: STUDENT CORNER"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Identifier: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  },
  {
    "id": "tx_184",
    "customerId": "aarav",
    "timestamp": "2026-08-14T07:53:00",
    "type": "debit",
    "category": "sports",
    "amountPaise": 35000,
    "rawDescription": "UPI/DR/410002529816/DECATHLON SPORTS/HDFC",
    "plainEn": "You paid DECATHLON SPORTS ₹350",
    "plainHi": "आपने DECATHLON SPORTS को ₹350 दिए",
    "plainTa": "பேட்மிண்டன் இறகுப்பந்து வாங்கப்பட்டது ₹350",
    "counterpartyName": "DECATHLON SPORTS",
    "referenceNumber": "410002529816",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002529816",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "DECATHLON SPORTS",
        "meaningEn": "To/From: DECATHLON SPORTS",
        "meaningHi": "किसको/किससे: DECATHLON SPORTS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: DECATHLON SPORTS"
      },
      {
        "code": "HDFC",
        "meaningEn": "Bank Identifier: HDFC",
        "meaningHi": "बैंक कोड: HDFC",
        "meaningTa": "வங்கி குறியீடு: HDFC"
      }
    ]
  },
  {
    "id": "tx_185",
    "customerId": "aarav",
    "timestamp": "2026-08-13T05:34:00",
    "type": "debit",
    "category": "snacks",
    "amountPaise": 15000,
    "rawDescription": "UPI/DR/410002543565/CORNER BAKERY/SBIN",
    "plainEn": "You paid CORNER BAKERY ₹150",
    "plainHi": "आपने CORNER BAKERY को ₹150 दिए",
    "plainTa": "நீங்கள் CORNER BAKERY என்பவருக்கு ₹150 செலுத்தினீர்கள்",
    "counterpartyName": "CORNER BAKERY",
    "referenceNumber": "410002543565",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002543565",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CORNER BAKERY",
        "meaningEn": "To/From: CORNER BAKERY",
        "meaningHi": "किसको/किससे: CORNER BAKERY",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CORNER BAKERY"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_186",
    "customerId": "aarav",
    "timestamp": "2026-08-12T03:15:00",
    "type": "debit",
    "category": "bus",
    "amountPaise": 25000,
    "rawDescription": "UPI/DR/410002557314/CITY BUS SMART CARD/BARB",
    "plainEn": "You paid CITY BUS SMART CARD ₹250",
    "plainHi": "आपने CITY BUS SMART CARD को ₹250 दिए",
    "plainTa": "நீங்கள் CITY BUS SMART CARD என்பவருக்கு ₹250 செலுத்தினீர்கள்",
    "counterpartyName": "CITY BUS SMART CARD",
    "referenceNumber": "410002557314",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002557314",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CITY BUS SMART CARD",
        "meaningEn": "To/From: CITY BUS SMART CARD",
        "meaningHi": "किसको/किससे: CITY BUS SMART CARD",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CITY BUS SMART CARD"
      },
      {
        "code": "BARB",
        "meaningEn": "Bank Identifier: BARB",
        "meaningHi": "बैंक कोड: BARB",
        "meaningTa": "வங்கி குறியீடு: BARB"
      }
    ]
  },
  {
    "id": "tx_187",
    "customerId": "aarav",
    "timestamp": "2026-08-10T17:46:00",
    "type": "credit",
    "category": "reward",
    "amountPaise": 50000,
    "rawDescription": "IMPS/CR/410002571063/MATH OLYMPIAD CASH PRIZE/SBIN",
    "plainEn": "Received ₹500 from MATH OLYMPIAD CASH PRIZE",
    "plainHi": "MATH OLYMPIAD CASH PRIZE से ₹500 प्राप्त हुए",
    "plainTa": "பள்ளி கணிதப் போட்டி பரிசுத் தொகை வரவு ₹500",
    "counterpartyName": "MATH OLYMPIAD CASH PRIZE",
    "referenceNumber": "410002571063",
    "paymentMode": "IMPS",
    "rawBreakdown": [
      {
        "code": "IMPS",
        "meaningEn": "Payment Type: IMPS",
        "meaningHi": "भुगतान माध्यम: IMPS",
        "meaningTa": "பரிவர்த்தனை முறை: IMPS (உடனடி வங்கி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002571063",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MATH OLYMPIAD CASH PRIZE",
        "meaningEn": "To/From: MATH OLYMPIAD CASH PRIZE",
        "meaningHi": "किसको/किससे: MATH OLYMPIAD CASH PRIZE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MATH OLYMPIAD CASH PRIZE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_188",
    "customerId": "aarav",
    "timestamp": "2026-08-09T15:27:00",
    "type": "debit",
    "category": "savings_goal",
    "amountPaise": 50000,
    "rawDescription": "INTERNAL/DR/410002584812/ROBOTICS KIT SAVINGS/JSBK",
    "plainEn": "You paid ROBOTICS KIT SAVINGS ₹500",
    "plainHi": "आपने ROBOTICS KIT SAVINGS को ₹500 दिए",
    "plainTa": "ரோபோட்டிக்ஸ் கிட் சேமிப்பிற்கு மாற்றப்பட்டது ₹500",
    "counterpartyName": "ROBOTICS KIT SAVINGS",
    "referenceNumber": "410002584812",
    "paymentMode": "INTERNAL",
    "rawBreakdown": [
      {
        "code": "INTERNAL",
        "meaningEn": "Payment Type: INTERNAL",
        "meaningHi": "भुगतान माध्यम: INTERNAL",
        "meaningTa": "பரிவர்த்தனை முறை: உள் கணக்கு பரிமாற்றம்"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002584812",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "ROBOTICS KIT SAVINGS",
        "meaningEn": "To/From: ROBOTICS KIT SAVINGS",
        "meaningHi": "किसको/किससे: ROBOTICS KIT SAVINGS",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: ROBOTICS KIT SAVINGS"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_189",
    "customerId": "aarav",
    "timestamp": "2026-08-08T13:58:00",
    "type": "debit",
    "category": "art",
    "amountPaise": 22000,
    "rawDescription": "UPI/DR/410002598561/CAMLIN ART SUPPLIES/UBIN",
    "plainEn": "You paid CAMLIN ART SUPPLIES ₹220",
    "plainHi": "आपने CAMLIN ART SUPPLIES को ₹220 दिए",
    "plainTa": "நீங்கள் CAMLIN ART SUPPLIES என்பவருக்கு ₹220 செலுத்தினீர்கள்",
    "counterpartyName": "CAMLIN ART SUPPLIES",
    "referenceNumber": "410002598561",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002598561",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "CAMLIN ART SUPPLIES",
        "meaningEn": "To/From: CAMLIN ART SUPPLIES",
        "meaningHi": "किसको/किससे: CAMLIN ART SUPPLIES",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: CAMLIN ART SUPPLIES"
      },
      {
        "code": "UBIN",
        "meaningEn": "Bank Identifier: UBIN",
        "meaningHi": "बैंक कोड: UBIN",
        "meaningTa": "வங்கி குறியீடு: UBIN"
      }
    ]
  },
  {
    "id": "tx_190",
    "customerId": "aarav",
    "timestamp": "2026-08-06T11:39:00",
    "type": "debit",
    "category": "ice_cream",
    "amountPaise": 8000,
    "rawDescription": "UPI/DR/410002612310/AMUL ICE CREAM PARLOUR/SBIN",
    "plainEn": "You paid AMUL ICE CREAM PARLOUR ₹80",
    "plainHi": "आपने AMUL ICE CREAM PARLOUR को ₹80 दिए",
    "plainTa": "ஐஸ்கிரீம் வாங்கப்பட்டது ₹80",
    "counterpartyName": "AMUL ICE CREAM PARLOUR",
    "referenceNumber": "410002612310",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002612310",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "AMUL ICE CREAM PARLOUR",
        "meaningEn": "To/From: AMUL ICE CREAM PARLOUR",
        "meaningHi": "किसको/किससे: AMUL ICE CREAM PARLOUR",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: AMUL ICE CREAM PARLOUR"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_191",
    "customerId": "aarav",
    "timestamp": "2026-08-05T09:20:00",
    "type": "credit",
    "category": "allowance",
    "amountPaise": 150000,
    "rawDescription": "UPI/CR/410002626059/MEENA SHARMA/JSBK",
    "plainEn": "Monthly pocket money from Mom ₹1,500",
    "plainHi": "माता जी से मासिक पॉकेट मनी मिली ₹1,500",
    "plainTa": "அம்மாவிடமிருந்து மாதாந்திர பாக்கெட் மணி ₹1,500",
    "counterpartyName": "MEENA SHARMA",
    "referenceNumber": "410002626059",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002626059",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "MEENA SHARMA",
        "meaningEn": "To/From: MEENA SHARMA",
        "meaningHi": "किसको/किससे: MEENA SHARMA",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: MEENA SHARMA"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_192",
    "customerId": "aarav",
    "timestamp": "2026-08-04T07:51:00",
    "type": "credit",
    "category": "gift",
    "amountPaise": 200000,
    "rawDescription": "UPI/CR/410002639808/SHANKAR NARAYAN/JSBK",
    "plainEn": "Gift from Grandfather Shankar ₹2,000",
    "plainHi": "दादाजी शंकर नारायण से उपहार मिला ₹2,000",
    "plainTa": "தாத்தா சங்கர் நாராயணனிடமிருந்து பரிசு ₹2,000",
    "counterpartyName": "SHANKAR NARAYAN",
    "referenceNumber": "410002639808",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "CR",
        "meaningEn": "Credit (Pocket money or gift received)",
        "meaningHi": "क्रेडिट (पॉकेट मनी या उपहार मिला)",
        "meaningTa": "வரவு (பணம் வந்து சேர்ந்தது)"
      },
      {
        "code": "410002639808",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SHANKAR NARAYAN",
        "meaningEn": "To/From: SHANKAR NARAYAN",
        "meaningHi": "किसको/किससे: SHANKAR NARAYAN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SHANKAR NARAYAN"
      },
      {
        "code": "JSBK",
        "meaningEn": "Bank Identifier: JSBK",
        "meaningHi": "बैंक कोड: JSBK",
        "meaningTa": "வங்கி குறியீடு: JSBK"
      }
    ]
  },
  {
    "id": "tx_193",
    "customerId": "aarav",
    "timestamp": "2026-08-02T05:32:00",
    "type": "debit",
    "category": "education",
    "amountPaise": 65000,
    "rawDescription": "UPI/DR/410002653557/SAPNA BOOK HOUSE/SBIN",
    "plainEn": "Bought science reference books ₹650",
    "plainHi": "आपने SAPNA BOOK HOUSE को ₹650 दिए",
    "plainTa": "அறிவியல் குறிப்புப் புத்தகங்கள் வாங்கப்பட்டது ₹650",
    "counterpartyName": "SAPNA BOOK HOUSE",
    "referenceNumber": "410002653557",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002653557",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SAPNA BOOK HOUSE",
        "meaningEn": "To/From: SAPNA BOOK HOUSE",
        "meaningHi": "किसको/किससे: SAPNA BOOK HOUSE",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SAPNA BOOK HOUSE"
      },
      {
        "code": "SBIN",
        "meaningEn": "Bank Identifier: SBIN",
        "meaningHi": "बैंक कोड: SBIN",
        "meaningTa": "வங்கி குறியீடு: SBIN"
      }
    ]
  },
  {
    "id": "tx_194",
    "customerId": "aarav",
    "timestamp": "2026-08-01T03:13:00",
    "type": "debit",
    "category": "canteen",
    "amountPaise": 12000,
    "rawDescription": "UPI/DR/410002667306/SCHOOL CANTEEN/ICIC",
    "plainEn": "You paid SCHOOL CANTEEN ₹120",
    "plainHi": "आपने SCHOOL CANTEEN को ₹120 दिए",
    "plainTa": "நீங்கள் SCHOOL CANTEEN என்பவருக்கு ₹120 செலுத்தினீர்கள்",
    "counterpartyName": "SCHOOL CANTEEN",
    "referenceNumber": "410002667306",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002667306",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "SCHOOL CANTEEN",
        "meaningEn": "To/From: SCHOOL CANTEEN",
        "meaningHi": "किसको/किससे: SCHOOL CANTEEN",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: SCHOOL CANTEEN"
      },
      {
        "code": "ICIC",
        "meaningEn": "Bank Identifier: ICIC",
        "meaningHi": "बैंक कोड: ICIC",
        "meaningTa": "வங்கி குறியீடு: ICIC"
      }
    ]
  },
  {
    "id": "tx_195",
    "customerId": "aarav",
    "timestamp": "2026-07-31T17:44:00",
    "type": "debit",
    "category": "stationery",
    "amountPaise": 18000,
    "rawDescription": "UPI/DR/410002681055/STUDENT CORNER/PUNB",
    "plainEn": "You paid STUDENT CORNER ₹180",
    "plainHi": "कॉपियां और ज्योमेट्री बॉक्स खरीदा ₹180",
    "plainTa": "நீங்கள் STUDENT CORNER என்பவருக்கு ₹180 செலுத்தினீர்கள்",
    "counterpartyName": "STUDENT CORNER",
    "referenceNumber": "410002681055",
    "paymentMode": "UPI",
    "rawBreakdown": [
      {
        "code": "UPI",
        "meaningEn": "Payment Type: UPI",
        "meaningHi": "भुगतान माध्यम: UPI",
        "meaningTa": "பரிவர்த்தனை முறை: UPI (உடனடி முறை)"
      },
      {
        "code": "DR",
        "meaningEn": "Debit (Money went OUT of your account)",
        "meaningHi": "डेबिट (खाते से राशि निकली)",
        "meaningTa": "பற்று (கணக்கிலிருந்து பணம் சென்றது)"
      },
      {
        "code": "410002681055",
        "meaningEn": "Receipt reference number",
        "meaningHi": "रसीद संदर्भ संख्या",
        "meaningTa": "ரசீது பரிவர்த்தனை எண்"
      },
      {
        "code": "STUDENT CORNER",
        "meaningEn": "To/From: STUDENT CORNER",
        "meaningHi": "किसको/किससे: STUDENT CORNER",
        "meaningTa": "யாரிடமிருந்து / யாருக்கு: STUDENT CORNER"
      },
      {
        "code": "PUNB",
        "meaningEn": "Bank Identifier: PUNB",
        "meaningHi": "बैंक कोड: PUNB",
        "meaningTa": "வங்கி குறியீடு: PUNB"
      }
    ]
  }
];
});
