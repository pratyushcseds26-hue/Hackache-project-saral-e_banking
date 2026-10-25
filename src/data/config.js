(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralConfig = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return {
    appName: "Saral Banking",
    version: "1.0.0",
    inactivityLockSeconds: 120, // 2 minutes auto-lock
    demoCredentials: {
      pinHash: "03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4", // SHA-256 for demo PIN 1234 (never stored in plaintext)
      otp: "123456"
    },
    limits: {
      defaultDailyLimitPaise: 5000000,      // ₹50,000
      youngSaverDailyLimitPaise: 100000,    // ₹1,000
      newPayee24hLimitPaise: 1000000,       // ₹10,000
      simpleModeConfirmThresholdPaise: 500000, // ₹5,000
      safetyCheckThresholdPaise: 1000000    // ₹10,000
    },
    sampleCharges: [
      {
        id: "sms",
        nameEn: "SMS Alerts",
        nameHi: "एसएमएस अलर्ट",
        nameTa: "குறுஞ்செய்தி கட்டணம் (SMS Alerts)",
        amountPaise: 1500, // ₹15
        frequencyEn: "Every 3 months (Sample)",
        frequencyHi: "हर 3 महीने (नमूना)",
        frequencyTa: "3 மாதங்களுக்கு ஒருமுறை (மாதிரி)",
        plainDescEn: "Cost of text messages sent to your phone after any transaction.",
        plainDescHi: "लेन-देन के बाद आपके फ़ोन पर आने वाले संदेशों का शुल्क।",
        plainDescTa: "பரிவர்த்தனை முடிந்ததும் உங்கள் மொபைலுக்கு வரும் குறுஞ்செய்திகளுக்கான கட்டணம்."
      },
      {
        id: "card",
        nameEn: "Debit Card Annual Fee",
        nameHi: "डेबिट कार्ड वार्षिक शुल्क",
        nameTa: "வங்கி அட்டை (Debit Card) ஆண்டுக் கட்டணம்",
        amountPaise: 15000, // ₹150
        frequencyEn: "Once a year (Sample)",
        frequencyHi: "साल में एक बार (नमूना)",
        frequencyTa: "ஆண்டுக்கு ஒரு முறை (மாதிரி)",
        plainDescEn: "Fee to keep your ATM card active and insured.",
        plainDescHi: "एटीएम कार्ड को सक्रिय और सुरक्षित रखने का वार्षिक शुल्क।",
        plainDescTa: "உங்கள் வங்கி அட்டையை (ATM) தொடர்ந்து இயங்க வைப்பதற்கான ஆண்டுக் கட்டணம்."
      },
      {
        id: "cheque",
        nameEn: "Extra Cheque Leaves",
        nameHi: "अतिरिक्त चेक पत्ते",
        nameTa: "கூடுதல் காசோலை பக்கங்கள் (Cheque Leaves)",
        amountPaise: 300, // ₹3
        frequencyEn: "Per leaf after 20 free leaves (Sample)",
        frequencyHi: "20 मुफ़्त पत्तों के बाद प्रति पत्ता (नमूना)",
        frequencyTa: "20 இலவச பக்கங்களுக்குப் பிறகு ஒரு பக்கத்திற்கு (மாதிரி)",
        plainDescEn: "First 20 cheque leaves each year are free. Further leaves cost ₹3 each.",
        plainDescHi: "हर साल पहले 20 चेक मुफ़्त हैं। इसके बाद प्रति पत्ता ₹3 का शुल्क है।",
        plainDescTa: "ஒவ்வொரு ஆண்டும் முதல் 20 பக்கங்கள் இலவசம். கூடுதல் பக்கங்களுக்கு ஒரு பக்கத்திற்கு ₹3."
      },
      {
        id: "atm_other",
        nameEn: "Other Bank ATM Cash",
        nameHi: "अन्य बैंक एटीएम से नकद निकासी",
        nameTa: "மற்ற வங்கி ATM-ல் பணம் எடுத்தல்",
        amountPaise: 2100, // ₹21
        frequencyEn: "Per cash withdrawal after 5 free per month (Sample)",
        frequencyHi: "प्रति माह 5 मुफ़्त निकासी के बाद प्रति निकासी (नमूना)",
        frequencyTa: "மாதத்திற்கு 5 முறைக்கு மேல் பணம் எடுக்கும் போது (மாதிரி)",
        plainDescEn: "First 5 withdrawals per month at other bank ATMs are free.",
        plainDescHi: "अन्य बैंक एटीएम पर हर महीने पहली 5 निकासी मुफ़्त हैं।",
        plainDescTa: "மற்ற வங்கிகளின் ATM-ல் மாதம் முதல் 5 முறைகள் இலவசமாக பணம் எடுக்கலாம்."
      }
    ],
    newPayeeRules: {
      coolingPeriodHours: 24,
      limitPaise: 1000000, // ₹10,000
      reasonEn: "To protect your money from rush mistakes or scam calls, new payees have a ₹10,000 limit for their first 24 hours.",
      reasonHi: "धोखाधड़ी और जल्दबाज़ी से बचने के लिए, नए जोड़े गए व्यक्ति को पहले 24 घंटों में अधिकतम ₹10,000 ही भेजे जा सकते हैं।",
      reasonTa: "தவறுதலாகவோ அல்லது ஏமாற்று நபர்களின் பேச்சைக் கேட்டோ பணத்தை இழக்காமல் இருக்க, புதிதாகச் சேர்த்த நபருக்கு முதல் 24 மணி நேரத்திற்கு ₹10,000 மட்டுமே அனுப்ப முடியும்."
    },
    helplineNumbers: {
      cyberFraud: "1930",
      cyberPortal: "cybercrime.gov.in",
      demoSupport: "1800-000-DEMO"
    }
  };
});
