(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralScams = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return [
    {
      id: "scam_kyc",
      titleEn: "1. Fake KYC Update Messages",
      titleHi: "1. फ़र्ज़ी केवाईसी अपडेट मैसेज",
      titleTa: "1. போலி வாடிக்கையாளர் சரிபார்ப்பு (KYC) குறுஞ்செய்தி",
      triggerKeywords: ["kyc", "block", "suspend", "aadhaar", "pan link", "केवाईसी", "खाता बंद", "கேஒய்சி", "முடக்கம்"],
      summaryEn: "An SMS claiming 'Your account will be blocked today! Click here to update KYC'.",
      summaryHi: "एसएमएस जिसमें लिखा हो 'आपका खाता आज बंद हो जाएगा! केवाईसी के लिए तुरंत लिंक पर क्लिक करें'।",
      summaryTa: "'உங்கள் கணக்கு இன்று முடக்கப்படும்! உடனடியாக இந்த இணைப்பைத் தொட்டு KYC புதுப்பிக்கவும்' என்ற குறுஞ்செய்தி.",
      explanationEn: "Banks never send web links to update your KYC over SMS. Real banks will only ask you to visit the official branch or use the verified app.",
      explanationHi: "बैंक कभी भी एसएमएस में लिंक भेजकर केवाईसी करने को नहीं कहते। इसके लिए सिर्फ अपनी बैंक शाखा में जाएं।",
      explanationTa: "வங்கிகள் ஒருபோதும் எஸ்எம்எஸ்-ல் இணையதள லிங்க் அனுப்பி KYC செய்யச் சொல்லாது. உண்மையான வங்கிகள் உங்களை கிளைக்கு வர மட்டுமே சொல்லும்.",
      safetyRuleEn: "Never click any link in an SMS warning about account block.",
      safetyRuleHi: "खाता बंद होने की धमकी देने वाले किसी भी लिंक पर कभी क्लिक न करें।",
      safetyRuleTa: "கணக்கு முடக்கப்படும் என எச்சரிக்கும் எந்த எஸ்எம்எஸ் இணைப்பையும் ஒருபோதும் தொடாதீர்கள்."
    },
    {
      id: "scam_prize",
      titleEn: "2. 'You Have Won a Prize or Lottery'",
      titleHi: "2. 'आपने लॉटरी या इनाम जीता है'",
      titleTa: "2. 'உங்களுக்கு லாட்டரி அல்லது பரிசு விழுந்துள்ளது'",
      triggerKeywords: ["lottery", "prize", "won", "reward", "crorepati", "इनाम", "लॉटरी", "பரிசு", "லாட்டரி"],
      summaryEn: "A call or WhatsApp claiming you won ₹25 Lakh, but you must pay ₹2,500 'tax' or 'processing fee' first.",
      summaryHi: "फ़ोन या व्हाट्सएप पर दावा कि आपने 25 लाख जीते हैं, पर पहले 2,500 रुपये 'टैक्स' या 'फीस' देनी होगी।",
      summaryTa: "நீங்கள் 25 லட்சம் வென்றுவிட்டீர்கள், ஆனால் வரி அல்லது கட்டணமாக முதலில் ₹2,500 செலுத்த வேண்டும் என்ற அழைப்பு.",
      explanationEn: "You can never win a contest you never entered. Real prizes never ask you to pay money to receive money.",
      explanationHi: "जिस प्रतियोगिता में आपने भाग नहीं लिया, उसमें कोई इनाम नहीं मिलता। असली इनाम पाने के लिए कोई फीस नहीं लगती।",
      explanationTa: "நீங்கள் பங்கேற்காத எந்தப் போட்டியிலும் உங்களுக்குப் பரிசு கிடைக்காது. உண்மையான பரிசுகளுக்கு பணம் செலுத்த வேண்டியதில்லை.",
      safetyRuleEn: "If someone asks for money to give you a prize, it is 100% a fraud.",
      safetyRuleHi: "यदि कोई इनाम देने के बदले पैसे मांगे, तो वह पूरी तरह से धोखा है।",
      safetyRuleTa: "பரிசு தருவதாகக் கூறி பணம் கேட்டால், அது நூற்றுக்கு நூறு ஏமாற்று வேலை."
    },
    {
      id: "scam_collect_request",
      titleEn: "3. Fake Payment Requests (Receive Money Trap)",
      titleHi: "3. 'पैसे पाने' के नाम पर भेजी गई रिक्वेस्ट",
      titleTa: "3. 'பணம் பெறலாம்' என்ற போலி பணக் கோரிக்கை வலை",
      triggerKeywords: ["qr", "receive money", "pin to receive", "request", "पैसे मिलेंगे", "पिन डालें", "பணம் பெற", "பின் எண்"],
      summaryEn: "A buyer on OLX or caller says: 'Enter your UPI PIN to receive the advance payment'.",
      summaryHi: "कोई खरीदार या कॉलर कहे: 'पैसे प्राप्त करने के लिए अपना यूपीआई पिन दर्ज करें'।",
      summaryTa: "'முன்பணம் பெற உங்கள் ரகசிய எண்ணை (UPI PIN) உள்ளிடுங்கள்' என்று ஒரு வாங்குபவர் கூறுவது.",
      explanationEn: "GOLDEN RULE: You NEVER enter your PIN to receive money. Entering your PIN ONLY sends money OUT of your bank account.",
      explanationHi: "सुनहरा नियम: पैसे प्राप्त करने के लिए कभी पिन दर्ज नहीं करना पड़ता। पिन डालते ही आपके खाते से पैसे कटते हैं।",
      explanationTa: "தங்க விதி: பணம் பெறுவதற்கு ஒருபோதும் ரகசிய எண் (PIN) போடக் கூடாது. ரகசிய எண்ணைப் போட்டால் உங்கள் கணக்கிலிருந்து பணம் போகும்.",
      safetyRuleEn: "Never enter your secret PIN when someone promises to send you money.",
      safetyRuleHi: "जब कोई पैसे भेजने का वादा करे, तो कभी भी अपना गुप्त पिन न डालें।",
      safetyRuleTa: "யாராவது உங்களுக்கு பணம் அனுப்புவதாகக் கூறும்போது உங்கள் ரகசிய எண்ணை (PIN) உள்ளிடாதீர்கள்."
    },
    {
      id: "scam_screen_share",
      titleEn: "4. Screen-Sharing Apps (AnyDesk, TeamViewer, RustDesk)",
      titleHi: "4. स्क्रीन शेयरिंग ऐप डाउनलोड कराना",
      titleTa: "4. திரையைப் பகிரும் செயலிகள் (AnyDesk, TeamViewer)",
      triggerKeywords: ["anydesk", "teamviewer", "quicksupport", "rustdesk", "स्क्रीन शेयर", "ஆப் பதிவிறக்கம்"],
      summaryEn: "A caller pretending to be bank support asks you to install an app from Play Store to fix an error.",
      summaryHi: "बैंक कर्मचारी बनकर कोई कहे कि समस्या ठीक करने के लिए प्ले स्टोर से कोई सहायता ऐप डाउनलोड करें।",
      summaryTa: "வங்கி ஊழியர் எனக்கூறி சிக்கலைச் சரிசெய்ய ப்ளே ஸ்டோரிலிருந்து ஒரு செயலியைப் பதிவிறக்கச் சொல்வது.",
      explanationEn: "These apps allow the fraudster to see everything on your mobile screen, including your bank passwords and OTPs.",
      explanationHi: "ये ऐप धोखेबाज को आपके मोबाइल की पूरी स्क्रीन, पासवर्ड और आने वाले सभी ओटीपी देखने की अनुमति दे देते हैं।",
      explanationTa: "இந்த செயலிகள் உங்கள் மொபைல் திரையில் தெரியும் பாஸ்வேர்ட் மற்றும் OTP போன்ற அனைத்தையும் திருடருக்கு காட்டிவிடும்.",
      safetyRuleEn: "Never install AnyDesk, TeamViewer, or QuickSupport on the advice of any caller.",
      safetyRuleHi: "किसी भी कॉलर के कहने पर एनीडेस्क या क्विकसपोर्ट ऐप कभी डाउनलोड न करें।",
      safetyRuleTa: "யார் சொல்லியும் உங்கள் மொபைலில் AnyDesk, TeamViewer போன்ற செயலிகளைப் பதிவிறக்காதீர்கள்."
    },
    {
      id: "scam_fake_care",
      titleEn: "5. Fake Customer Care Numbers on Google Search",
      titleHi: "5. गूगल सर्च पर फ़र्ज़ी कस्टमर केयर नंबर",
      titleTa: "5. கூகுள் தேடலில் வரும் போலி வாடிக்கையாளர் சேவை எண்கள்",
      triggerKeywords: ["customer care", "google search", "toll free", "हेल्पलाइन", "வாடிக்கையாளர் சேவை"],
      summaryEn: "Searching for customer care on Google and calling the top phone number result.",
      summaryHi: "गूगल पर कस्टमर केयर नंबर खोजकर पहले मिले नंबर पर कॉल करना।",
      summaryTa: "கூகுளில் வங்கி உதவி எண்ணைத் தேடி, முதலில் வரும் எண்ணிற்கு அழைப்பது.",
      explanationEn: "Scammers upload fake phone numbers on Google Maps and search results. When you call, a fraudster answers.",
      explanationHi: "धोखेबाज गूगल पर अपने फ़र्ज़ी नंबर डाल देते हैं। जब आप कॉल करते हैं तो धोखेबाज ही बात करता है।",
      explanationTa: "ஏமாற்றுபவர்கள் கூகுளில் தங்களின் போலி எண்களைப் பதிவேற்றி வைத்துள்ளனர். நீங்கள் அழைத்தால் திருடனே பேசுவான்.",
      safetyRuleEn: "Find helpline numbers ONLY on the back of your debit card or official passbook.",
      safetyRuleHi: "हेल्पलाइन नंबर सिर्फ अपने एटीएम कार्ड के पीछे या बैंक पासबुक से ही लें।",
      safetyRuleTa: "உதவி எண்களை உங்கள் வங்கி அட்டையின் பின்பக்கத்திலோ அல்லது வங்கி புத்தகத்திலோ மட்டுமே பார்க்கவும்."
    },
    {
      id: "scam_otp_pin",
      titleEn: "6. Anyone Asking for your OTP or PIN",
      titleHi: "6. कोई भी जो आपसे ओटीपी या पिन मांगे",
      titleTa: "6. ரகசிய எண் (PIN) அல்லது கடவுச்சொல் (OTP) கேட்பவர்கள்",
      triggerKeywords: ["otp", "pin", "cvv", "password", "पासवर्ड", "ओटीपी", "கடவுச்சொல்", "ரகசிய எண்"],
      summaryEn: "A caller claiming to be bank manager, police officer, or electricity officer asking for OTP.",
      summaryHi: "बैंक मैनेजर, पुलिस या बिजली अधिकारी बनकर कॉल करना और ओटीपी या पिन मांगना।",
      summaryTa: "வங்கி மேலாளர் அல்லது மின்சார வாரிய அதிகாரி எனக்கூறி உங்கள் OTP அல்லது ரகசிய எண் கேட்பது.",
      explanationEn: "No genuine bank employee, government official, or police officer will EVER ask for your OTP or PIN.",
      explanationHi: "कोई भी असली बैंक कर्मचारी, सरकारी अधिकारी या पुलिस कभी आपका ओटीपी या गुप्त पिन नहीं मांगते।",
      explanationTa: "உண்மையான வங்கி ஊழியரோ, அரசு அதிகாரியோ அல்லது காவல்துறையோ உங்கள் OTP அல்லது ரகசிய எண்ணை ஒருபோதும் கேட்க மாட்டார்கள்.",
      safetyRuleEn: "Your OTP and PIN are for your eyes only. Sharing them is like giving keys to your home.",
      safetyRuleHi: "आपका ओटीपी और पिन केवल आपके लिए है। इसे बताना घर की चाबी चोर को देने जैसा है।",
      safetyRuleTa: "உங்கள் OTP மற்றும் PIN உங்களுக்கு மட்டுமே உரியது. அதைச் சொல்வது வீட்டின் சாவியை திருடனிடம் கொடுப்பது போன்றது."
    }
  ];
});
