(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralFAQ = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return [
    {
      id: "faq_1",
      keywords: ["balance", "available", "total", "hold", "बैलेंस", "रुपये", "कितने पैसे", "கையிருப்பு", "மொத்த இருப்பு", "பணம்", "இருப்பு"],
      questionEn: "Why does my available balance look different from my total balance?",
      questionHi: "मेरा उपलब्ध बैलेंस और कुल बैलेंस अलग-अलग क्यों दिख रहा है?",
      questionTa: "எனது பயன்படுத்தக்கூடிய கையிருப்பும் மொத்த இருப்பும் ஏன் வெவ்வேறாக உள்ளன?",
      answerEn: "Available balance is money you can spend immediately right now. Total balance includes money kept on temporary hold (such as a pending cheque or security deposit).",
      answerHi: "उपलब्ध बैलेंस वह राशि है जिसे आप अभी तुरंत खर्च कर सकते हैं। कुल बैलेंस में वह राशि भी शामिल होती है जो किसी चेक या गारंटी के कारण कुछ समय के लिए रोकी गई है।",
      answerTa: "பயன்படுத்தக்கூடிய கையிருப்பு (Available Balance) என்பது நீங்கள் இப்போது உடனடியாக செலவழிக்கக்கூடிய பணம். மொத்த இருப்பு (Total Balance) என்பது காசோலை அல்லது பாதுகாப்பு வைப்புத்தொகைக்காக தற்காலிகமாக நிறுத்தி வைக்கப்பட்ட பணத்தையும் உள்ளடக்கியது."
    },
    {
      id: "faq_2",
      keywords: ["receive money", "pin to receive", "receive", "पैसे लेना", "पैसे पाना", "प्राप्त करना", "பணம் பெற", "ரகசிய எண்", "பின்", "வரவு"],
      questionEn: "Do I need to enter my PIN to receive money into my account?",
      questionHi: "क्या पैसे प्राप्त करने के लिए मुझे अपना गुप्त पिन डालना पड़ता है?",
      questionTa: "எனது கணக்கில் பணம் பெற நான் ரகசிய எண்ணை (PIN) உள்ளிட வேண்டுமா?",
      answerEn: "NO. You NEVER need to enter your PIN or scan a QR code to receive money. Entering your PIN ONLY sends money OUT of your account. If anyone asks you to enter your PIN to receive money, it is a scam.",
      answerHi: "बिल्कुल नहीं! पैसे पाने के लिए कभी भी पिन नहीं डालना होता। गुप्त पिन डालने से हमेशा आपके खाते से पैसे कटते हैं। यदि कोई कहे कि पैसे पाने के लिए पिन डालें, तो वह धोखेबाज है।",
      answerTa: "இல்லை! பணம் பெற ஒருபோதும் ரகசிய எண்ணையோ (PIN) அல்லது QR குறியீட்டையோ ஸ்கேன் செய்ய வேண்டியதில்லை. ரகசிய எண்ணை உள்ளிட்டால் உங்கள் கணக்கிலிருந்து பணம் மட்டுமே போகும். பணம் பெற ரகசிய எண் கேட்டால் அது ஏமாற்று வேலை."
    },
    {
      id: "faq_3",
      keywords: ["send money", "pay", "transfer", "भुगतान", "पैसे भेजना", "भेजें", "பணம் அனுப்ப", "பரிமாற்றம்", "செலுத்த"],
      questionEn: "How do I send money safely using Saral Banking?",
      questionHi: "सरल बैंकिंग से सुरक्षित तरीके से पैसे कैसे भेजें?",
      questionTa: "சரள் பேங்கிங் மூலம் பாதுகாப்பாக பணம் அனுப்புவது எப்படி?",
      answerEn: "Go to the 'Pay' tab at the bottom. Choose UPI ID, Mobile number, or Bank Account. Fill in the amount, review the receiver's verified registered name on the review screen, and enter your 4-digit PIN.",
      answerHi: "नीचे 'Pay (भुगतान)' टैब पर जाएं। यूपीआई, मोबाइल नंबर या बैंक खाता चुनें। राशि लिखें, समीक्षा स्क्रीन पर प्राप्तकर्ता का असली नाम जांचें, और अपना 4 अंकों का पिन डालें।",
      answerTa: "கீழே உள்ள 'பணம் செலுத்து' பொத்தானைத் தொடவும். UPI, மொபைல் எண் அல்லது வங்கி கணக்கைத் தேர்ந்தெடுக்கவும். தொகையை உள்ளிட்டு, சரிபார்ப்புத் திரையில் பெறுபவரின் உண்மையான பெயரைச் சரிபார்த்து, உங்கள் 4 இலக்க ரகசிய எண்ணை (PIN) உள்ளிடவும்."
    },
    {
      id: "faq_4",
      keywords: ["pin", "forgot pin", "reset pin", "पिन भूल गया", "पिन बदलना", "ரகசிய எண் மறந்துவிட்டது", "பின் எண்", "மாற்ற"],
      questionEn: "What should I do if I forget my secret PIN?",
      questionHi: "यदि मैं अपना पिन भूल जाऊं तो क्या करूं?",
      questionTa: "எனது ரகசிய எண்ணை (PIN) மறந்துவிட்டால் நான் என்ன செய்ய வேண்டும்?",
      answerEn: "In this prototype, your demo PIN is 1234. In a real bank app, you tap 'Forgot PIN', verify your identity with your debit card and a secure SMS OTP, and set a new 4-digit PIN.",
      answerHi: "इस डेमो ऐप में आपका पिन 1234 है। वास्तविक बैंक में आप 'पिन भूल गए' पर टैप करेंगे और अपने एटीएम कार्ड व ओटीपी से नया पिन बना सकते हैं।",
      answerTa: "இந்த மாதிரி செயலியில் உங்கள் மாதிரி ரகசிய எண் 1234 ஆகும். உண்மையான வங்கியில், 'ரகசிய எண் மறந்துவிட்டது' என்பதைத் தொட்டு, உங்கள் வங்கி அட்டை மற்றும் OTP மூலம் புதிய எண்ணை உருவாக்கலாம்."
    },
    {
      id: "faq_5",
      keywords: ["new payee", "limit", "cooling", "10000", "नया व्यक्ति", "सीमा", "புதிய நபர்", "வரம்பு", "பாதுகாப்பு"],
      questionEn: "Why is there a ₹10,000 limit when I add a new payee?",
      questionHi: "नया व्यक्ति जोड़ने पर ₹10,000 की सीमा क्यों होती है?",
      questionTa: "புதிய நபரைச் சேர்க்கும்போது ₹10,000 வரம்பு இருப்பது ஏன்?",
      answerEn: "This is a mandatory safety cooling period rule. During the first 24 hours of adding a new person, the limit is ₹10,000 to protect you from hasty mistakes or scam callers.",
      answerHi: "यह सुरक्षा का नियम है। नया प्राप्तकर्ता जोड़ने के पहले 24 घंटे में अधिकतम ₹10,000 ही भेजे जा सकते हैं ताकि किसी जल्दबाज़ी या धोखे से आपका पैसा सुरक्षित रहे।",
      answerTa: "இது ஒரு கட்டாயப் பாதுகாப்பு விதி. அவசர தவறுகளையோ மோசடிகளையோ தவிர்க்க, புதிய நபரைச் சேர்த்த முதல் 24 மணி நேரத்திற்கு அதிகபட்சமாக ₹10,000 மட்டுமே அனுப்ப முடியும்."
    },
    {
      id: "faq_6",
      keywords: ["block card", "lost card", "stolen", "कार्ड ब्लॉक", "एटीएम खो गया", "அட்டை முடக்கம்", "கார்டு தொலைந்தது", "தடுக்க"],
      questionEn: "How can I instantly block my debit card if it is lost?",
      questionHi: "यदि एटीएम कार्ड खो जाए तो उसे तुरंत कैसे बंद करें?",
      questionTa: "வங்கி அட்டை (Debit Card) தொலைந்துவிட்டால் அதை உடனே முடக்குவது (Block) எப்படி?",
      answerEn: "Go to 'Services' and toggle 'Block Debit Card', or tap 'Report fraud' in the Help tab. Your card will be blocked immediately to prevent any misuse.",
      answerHi: "'Services' में जाकर 'ब्लॉक डेबिट कार्ड' चुनें, या Help में 'धोखाधड़ी रिपोर्ट' पर एक टैप करें। आपका कार्ड तुरंत बंद कर दिया जाएगा।",
      answerTa: "'சேவைகள்' பகுதிக்குச் சென்று 'வங்கி அட்டையை முடக்கு' என்பதைத் தேர்வு செய்யவும், அல்லது உதவித் திரையில் 'மோசடி குறித்துப் புகாரளி' என்பதை ஒரு தொடுதலில் அழுத்தவும். அட்டை உடனடியாக முடக்கப்படும்."
    },
    {
      id: "faq_7",
      keywords: ["statement", "download", "pdf", "csv", "पासबुक", "स्टेटमेंट", "खाता विवरण", "கணக்கு அறிக்கை", "ஸ்டேட்மென்ட்", "பதிவிறக்கம்", "PDF"],
      questionEn: "How do I download my account statement or passbook?",
      questionHi: "मैं अपना खाता विवरण (स्टेटमेंट) कैसे डाउनलोड कर सकता हूँ?",
      questionTa: "எனது கணக்கு அறிக்கையை (Statement) எவ்வாறு பதிவிறக்குவது?",
      answerEn: "Go to Services > Account Statement. Select the period (last month, 3 months, or custom) and tap 'Download CSV' or 'Print / Save as PDF'.",
      answerHi: "Services > खाता विवरण (Statement) पर जाएं। अवधि (पिछला महीना, 3 महीने आदि) चुनें और 'CSV डाउनलोड' या 'प्रिंट / पीडीएफ' पर टैप करें।",
      answerTa: "சேவைகள் > கணக்கு அறிக்கை என்பதற்குச் செல்லவும். காலத்தைத் தேர்ந்தெடுத்து (கடந்த மாதம், 3 மாதங்கள் போன்றவை), 'CSV கோப்பாகப் பதிவிறக்கு' அல்லது 'அச்சிடு / PDF ஆகச் சேமி' என்பதை அழுத்தவும்."
    },
    {
      id: "faq_8",
      keywords: ["simple mode", "elderly", "big text", "सरल मोड", "बड़ा टेक्स्ट", "எளிய முறை", "முதியோர்", "பெரிய எழுத்துகள்"],
      questionEn: "What is Simple Mode and who is it designed for?",
      questionHi: "सरल मोड (Simple Mode) क्या है और यह किसके लिए है?",
      questionTa: "எளிய முறை (Simple Mode) என்றால் என்ன, இது யாருக்கானது?",
      answerEn: "Simple Mode is designed for senior citizens and anyone who prefers clarity over clutter. It features 4 big buttons on Home, larger fonts, automatic voice read-aloud on money screens, and an extra confirmation for payments over ₹5,000.",
      answerHi: "सरल मोड वरिष्ठ नागरिकों और कम विकल्पों को पसंद करने वालों के लिए है। इसमें होम स्क्रीन पर सिर्फ 4 बड़े बटन होते हैं, बड़े अक्षर होते हैं, और स्क्रीन पर लिखी बातें बोलकर सुनाई जाती हैं।",
      answerTa: "எளிய முறை என்பது முதியோர்கள் மற்றும் எளிமையை விரும்புபவர்களுக்கானது. இதில் முகப்பில் 4 பெரிய பொத்தான்கள் மட்டுமே இருக்கும், பெரிய எழுத்துகள், குரல் வாசிப்பு மற்றும் ₹5,000-க்கு மேல் அனுப்பினால் கூடுதல் உறுதிப்படுத்தல் இருக்கும்."
    },
    {
      id: "faq_9",
      keywords: ["young saver", "teenager", "guardian", "minor", "युवा बचतकर्ता", "अभिभावक", "बच्चे का खाता", "இளம் சேமிப்பாளர்", "சிறுவர் கணக்கு", "பெற்றோர்"],
      questionEn: "How does the Young Saver account work for teenagers?",
      questionHi: "18 वर्ष से कम उम्र के बच्चों के लिए युवा बचत खाता कैसे काम करता है?",
      questionTa: "18 வயதுக்குட்பட்டவர்களுக்கான இளம் சேமிப்பாளர் கணக்கு எவ்வாறு செயல்படுகிறது?",
      answerEn: "It is linked to a guardian (such as Meena). It has a daily spending limit (e.g. ₹1,000) and no loans or credit cards. Any payment above the limit is sent to the guardian to approve before money moves.",
      answerHi: "यह खाता माता-पिता (अभिभावक) से जुड़ा होता है। इसमें दैनिक खर्च की सीमा होती है और कोई कर्ज या क्रेडिट कार्ड नहीं होता। सीमा से अधिक का भुगतान अभिभावक की अनुमति के बाद ही होता है।",
      answerTa: "இது பெற்றோருடன் (மீனா) இணைக்கப்பட்டுள்ளது. தினசரி செலவு வரம்பு (₹1,000) உண்டு; கடன் அட்டைகள் கிடையாது. வரம்பிற்கு மேல் பணம் அனுப்பினால் பெற்றோர் அனுமதித்த பிறகே பணம் செல்லும்."
    },
    {
      id: "faq_10",
      keywords: ["guardian view", "approve payment", "meena", "अभिभावक दृश्य", "मंजूरी", "பெற்றோர் ஒப்புதல்", "மீனா", "அனுமதி"],
      questionEn: "How does a parent or guardian approve a child's payment request?",
      questionHi: "माता-पिता बच्चे के भुगतान अनुरोध को कैसे मंजूरी देते हैं?",
      questionTa: "பெற்றோர் எவ்வாறு குழந்தையின் பணக் கோரிக்கைக்கு ஒப்புதல் அளிக்கிறார்கள்?",
      answerEn: "Switch customer to Meena (Guardian View) from the sign-in screen. Under 'Pending Approvals', you will see the child's requested payment with details and can tap 'Approve' or 'Decline'.",
      answerHi: "साइन-इन स्क्रीन से मीना (अभिभावक) चुनें। वहां 'लंबित स्वीकृतियां' में बच्चे द्वारा मांगा गया भुगतान दिखेगा, जिसे आप 'मंजूर' या 'अस्वीकार' कर सकते हैं।",
      answerTa: "நுழைவுத் திரையிலிருந்து மீனாவைத் (பெற்றோர் காட்சி) தேர்ந்தெடுக்கவும். 'ஒப்புதலுக்காகக் காத்திருக்கும் கோரிக்கைகள்' என்பதில் குழந்தையின் கோரிக்கையைப் பார்த்து 'ஒப்புதல் அளி' அல்லது 'நிராகரி' என்பதை அழுத்தலாம்."
    },
    {
      id: "faq_11",
      keywords: ["scam", "fraud", "cyber", "1930", "धोखाधड़ी", "साइबर अपराध", "மோசடி", "சைபர் குற்றம்"],
      questionEn: "What should I do immediately if I suspect a fraud or scam?",
      questionHi: "यदि मुझे किसी धोखाधड़ी का संदेह हो तो तुरंत क्या करना चाहिए?",
      questionTa: "பண மோசடி நடந்ததாக சந்தேகம் இருந்தால் உடனடியாக என்ன செய்ய வேண்டும்?",
      answerEn: "1. Go to Help > 'Report Fraud' to lock your card and UPI in one tap. 2. Call the National Cyber Crime Helpline at 1930 immediately. 3. File a complaint at cybercrime.gov.in.",
      answerHi: "1. Help में जाकर 'धोखाधड़ी रिपोर्ट' पर टैप कर कार्ड और यूपीआई तुरंत बंद करें। 2. राष्ट्रीय हेल्पलाइन नंबर 1930 पर तुरंत कॉल करें। 3. cybercrime.gov.in पर शिकायत दर्ज करें।",
      answerTa: "1. உதவி > 'மோசடி குறித்துப் புகாரளி' என்பதில் அட்டை மற்றும் UPI-ஐ உடனடியாக முடக்கவும். 2. தேசிய உதவி எண் 1930-ஐ உடனே அழைக்கவும். 3. cybercrime.gov.in தளத்தில் புகார் அளிக்கவும்."
    },
    {
      id: "faq_12",
      keywords: ["cheque", "cheque book", "leaves", "चेक बुक", "चेक", "காசோலை புத்தகம்", "செக் புக்", "விண்ணப்பம்"],
      questionEn: "How do I request a new cheque book?",
      questionHi: "नई चेक बुक के लिए आवेदन कैसे करें?",
      questionTa: "புதிய காசோலை புத்தகம் (Cheque Book) கோருவது எப்படி?",
      answerEn: "Go to 'Services' > 'Request Cheque Book'. Confirm your registered delivery address, verify with the demo OTP (123456), and track the status right on the timeline.",
      answerHi: "'Services' > 'चेक बुक आवेदन' पर जाएं। अपना पता जांचें, डेमो ओटीपी (123456) दर्ज करें और स्क्रीन पर आवेदन की स्थिति देखें।",
      answerTa: "'சேவைகள்' > 'காசோலை புத்தகம் கோருதல்' என்பதற்குச் சென்று, முகவரியைச் சரிபார்த்து, மாதிரி OTP (123456) மூலம் உறுதி செய்தால் வீட்டிற்கே வந்து சேரும்."
    },
    {
      id: "faq_13",
      keywords: ["address", "phone", "email", "update", "पता बदलना", "फोन नंबर", "மொபைல் எண்", "முகவரி மாற்றம்", "மின்னஞ்சல்"],
      questionEn: "Can I update my registered mobile number or home address here?",
      questionHi: "क्या मैं अपना पंजीकृत मोबाइल नंबर या घर का पता यहां बदल सकता हूँ?",
      questionTa: "எனது பதிவு செய்யப்பட்ட மொபைல் எண் அல்லது முகவரியை மாற்ற முடியுமா?",
      answerEn: "Yes! In Services > 'Update Profile Details', enter the new information, verify with the demo OTP (123456), and it will be updated safely.",
      answerHi: "हाँ! Services में जाकर 'प्रोफ़ाइल विवरण बदलें' चुनें, नई जानकारी भरें और डेमो ओटीपी (123456) डालकर सुरक्षित पुष्टि करें।",
      answerTa: "ஆம்! சேவைகள் > 'மொபைல் எண், மின்னஞ்சல் அல்லது முகவரியை மாற்று' என்பதில் புதிய விவரங்களை உள்ளிட்டு, மாதிரி OTP (123456) மூலம் உடனடியாக மாற்றிக்கொள்ளலாம்."
    },
    {
      id: "faq_14",
      keywords: ["nominee", "nomination", "वारिस", "नॉमिनी", "வாரிசுதாரர்", "நாமினி", "வாரிசு"],
      questionEn: "What is a nominee and how do I change my nominee?",
      questionHi: "नॉमिनी (वारिस) क्या होता है और इसे कैसे बदलें?",
      questionTa: "வாரிசுதாரர் (Nominee) என்றால் என்ன, அவரை எவ்வாறு மாற்றுவது?",
      answerEn: "A nominee is the trusted family member authorized to claim the account funds in unfortunate events. You can update or change the nominee under Services > Nominee Details.",
      answerHi: "नॉमिनी वह विश्वसनीय परिजन है जिसे आपके न रहने पर खाते की राशि प्राप्त होती है। इसे Services में 'नॉमिनी विवरण' में जाकर बदला जा सकता है।",
      answerTa: "வாரிசுதாரர் என்பது எதிர்பாராத சூழ்நிலைகளில் உங்கள் கணக்கிலுள்ள பணத்தைப் பெறும் குடும்ப உறுப்பினர். சேவைகள் > 'வாரிசுதாரர் விவரங்கள்' என்பதில் இதை மாற்றலாம்."
    },
    {
      id: "faq_15",
      keywords: ["bank switch", "change bank", "janata", "suraksha", "pragati", "बैंक बदलना", "வங்கி மாற்றம்", "வண்ணம்", "லோகோ"],
      questionEn: "What happens when I switch the bank in Settings?",
      questionHi: "सेटिंग्स में बैंक बदलने से क्या होता है?",
      questionTa: "அமைப்புகளில் வங்கியை மாற்றினால் என்ன நடக்கும்?",
      answerEn: "Only the bank theme colors and logo change. The layout, words, tabs, and buttons stay exactly in the same place. This proves the Saral Standard works universally for any bank.",
      answerHi: "केवल बैंक का रंग और लोगो बदलता है। सभी बटन, शब्द और स्क्रीन बिल्कुल अपनी जगह पर रहते हैं। यह दिखाता है कि यह मानक हर बैंक के लिए समान रूप से काम कर सकता है।",
      answerTa: "வங்கியின் வண்ணம் மற்றும் லோகோ மட்டுமே மாறும். அனைத்துப் பொத்தான்களும் சொற்களும் அதே இடத்திலேயே இருக்கும். இது சரள் தரநிலை அனைத்து வங்கிகளுக்கும் பொருந்தும் என்பதை நிரூபிக்கிறது."
    },
    {
      id: "faq_16",
      keywords: ["read aloud", "voice", "speech", "सुनना", "बोलकर बताएं", "आवाज", "குரல் வாசிப்பு", "வாசித்துக் காட்டு", "பேசுதல்"],
      questionEn: "How does the Read Aloud voice feature work?",
      questionHi: "बोलकर सुनाने (Read Aloud) की सुविधा कैसे काम करती है?",
      questionTa: "குரல் மூலம் வாசித்துக் காட்டும் (Read Aloud) வசதி எவ்வாறு செயல்படுகிறது?",
      answerEn: "When enabled in Settings (or automatically in Simple Mode), tapping the speaker icon or viewing money details speaks the text aloud in English or Hindi, pronouncing numbers in lakhs and rupees.",
      answerHi: "सेटिंग्स में चालू करने पर (या सरल मोड में स्वतः) स्पीकर आइकन पर टैप करने पर स्क्रीन पर लिखी बातें हिंदी या अंग्रेजी में स्पष्ट आवाज़ में सुनाई जाती हैं।",
      answerTa: "அமைப்புகளில் இதை இயக்கினால் (அல்லது எளிய முறையில் தானாகவே), ஸ்பீக்கர் சின்னத்தைத் தொடும்போது திரையிலுள்ள விவரங்களும் தொகைகளும் தமிழ் அல்லது ஆங்கிலத்தில் தெளிவாக வாசித்துக் காட்டப்படும்."
    },
    {
      id: "faq_17",
      keywords: ["contrast", "high contrast", "color", "दिखाई नहीं देता", "हाई कंट्रास्ट", "மாறுபட்ட நிறம்", "ஹை கான்ட்ராஸ்ட்", "பார்வை"],
      questionEn: "How do I turn on High Contrast mode for better readability?",
      questionHi: "बेहतर दिखाई देने के लिए हाई कंट्रास्ट मोड कैसे चालू करें?",
      questionTa: "எளிதில் படிப்பதற்கு அதிக மாறுபட்ட நிற முறையை (High Contrast) எவ்வாறு இயக்குவது?",
      answerEn: "Go to Settings at the bottom right. Toggle 'High Contrast'. This applies deep black backgrounds, pure white cards, and bold borders for maximum visual clarity.",
      answerHi: "सेटिंग्स में जाकर 'हाई कंट्रास्ट' चालू करें। इससे गहरा काला बैकग्राउंड और स्पष्ट सफेद अक्षर दिखाई देंगे ताकि पढ़ने में कोई परेशानी न हो।",
      answerTa: "அமைப்புகளுக்குச் சென்று 'அதிக மாறுபட்ட நிற முறை' என்பதை இயக்கவும். இது ஆழ்ந்த கருப்பு பின்னணி மற்றும் வெள்ளை எழுத்துகளை அமைத்து தெளிவாகக் காட்டும்."
    },
    {
      id: "faq_18",
      keywords: ["text size", "font size", "larger text", "अक्षर बड़े करें", "फॉन्ट साइज", "எழுத்து அளவு", "பெரிய எழுத்துகள்", "சைஸ்"],
      questionEn: "Can I increase the text size across the entire application?",
      questionHi: "क्या मैं पूरी ऐप में अक्षरों (टेक्स्ट) का आकार बड़ा कर सकता हूँ?",
      questionTa: "செயலி முழுவதும் எழுத்துகளின் அளவை பெரிதாக்க முடியுமா?",
      answerEn: "Yes. In Settings, select Text Size: Normal, Large, or Extra Large. All text, buttons, and amounts will resize smoothly without breaking the layout.",
      answerHi: "हाँ। सेटिंग्स में टेक्स्ट साइज़ चुनें: सामान्य, बड़ा, या बहुत बड़ा। सभी शब्द और बटन बिना किसी गड़बड़ी के बड़े हो जाएंगे।",
      answerTa: "ஆம். அமைப்புகளில் 'எழுத்துகளின் அளவு' என்பதில் வழக்கமானது, பெரியது அல்லது மிகப் பெரியது என்பதைத் தேர்வு செய்யலாம்."
    },
    {
      id: "faq_19",
      keywords: ["interest rate", "quarterly interest", "ब्याज दर", "ब्याज कब मिलता है", "வட்டி", "சேமிப்பு வட்டி", "வட்டி வரவு"],
      questionEn: "When is savings account interest credited to my account?",
      questionHi: "बचत खाते का ब्याज मेरे खाते में कब जमा होता है?",
      questionTa: "சேமிப்புக் கணக்கிற்கான வட்டி எப்போது கணக்கில் சேரும்?",
      answerEn: "Banks calculate savings interest daily and credit it to your account every 3 months (quarterly). In this demo, you can see quarterly interest transactions in your History.",
      answerHi: "बैंक प्रतिदिन के बैलेंस पर ब्याज गिनते हैं और हर 3 महीने में खाते में जमा करते हैं। आप अपने हिस्ट्री (इतिहास) टैब में ब्याज जमा होने की प्रविष्टियां देख सकते हैं।",
      answerTa: "வங்கிகள் தினமும் இருப்புத் தொகையைக் கணக்கிட்டு, ஒவ்வொரு 3 மாதங்களுக்கும் ஒருமுறை வட்டியை வரவு வைக்கின்றன. வரவு செலவுப் பட்டியலில் இதைப் பார்க்கலாம்."
    },
    {
      id: "faq_20",
      keywords: ["minimum balance", "charges", "penalty", "न्यूनतम बैलेंस", "पेनाल्टी", "குறைந்தபட்ச இருப்பு", "அபராதம்", "கட்டணம்"],
      questionEn: "Is there any penalty for not maintaining a minimum balance?",
      questionHi: "क्या न्यूनतम बैलेंस न रखने पर कोई जुर्माना लगता है?",
      questionTa: "குறைந்தபட்ச இருப்புத் தொகையை பராமரிக்காவிட்டால் அபராதம் உண்டா?",
      answerEn: "Under the Saral Standard guidelines, basic savings accounts have zero minimum balance penalties. Check the Learn tab for sample bank charges.",
      answerHi: "सरल बैंकिंग मानक के अनुसार बुनियादी बचत खातों में न्यूनतम बैलेंस न होने पर कोई जुर्माना नहीं होता। अधिक जानकारी के लिए 'Learn (सीखें)' टैब देखें।",
      answerTa: "சரள் தரநிலையின்படி, அடிப்படை சேமிப்புக் கணக்குகளில் இருப்புத் தொகை குறைந்தாலும் எந்தவித அபராதமும் விதிக்கப்பட மாட்டாது."
    },
    {
      id: "faq_21",
      keywords: ["failed transaction", "debited", "refund", "पैसे कट गए", "ट्रांजेक्शन फेल", "பணம் பிடித்தம்", "தோல்வி", "ரீபண்ட்"],
      questionEn: "What happens if money was deducted but the receiver did not get it?",
      questionHi: "अगर मेरे खाते से पैसे कट गए पर सामने वाले को नहीं मिले तो क्या करें?",
      questionTa: "பணம் எடுக்கப்பட்டு பெறுபவருக்குப் போய்ச் சேரவில்லை என்றால் என்ன செய்வது?",
      answerEn: "Under RBI rules, failed UPI transfers are automatically refunded back to your account within 24 to 48 hours. Open the transaction in History and tap 'Report a problem with this'.",
      answerHi: "आरबीआई नियमों के तहत ऐसे पैसे 24 से 48 घंटे में अपने आप वापस आ जाते हैं। आप हिस्ट्री में जाकर उस लेनदेन पर टैप कर 'समस्या की रिपोर्ट करें' दबा सकते हैं।",
      answerTa: "ரிசர்வ் வங்கி விதிகளின்படி, தோல்வியடைந்த பரிமாற்றத் தொகை 24 முதல் 48 மணி நேரத்திற்குள் தானாகவே உங்கள் கணக்கிற்குத் திரும்பிவிடும். வரவு செலவில் 'புகாரளி' என்பதைத் தொடலாம்."
    },
    {
      id: "faq_22",
      keywords: ["qr code", "scan", "बारकोड", "क्यूआर कोड स्कैन", "க்யூஆர் கோட்", "ஸ்கேன்", "படக் குறியீடு"],
      questionEn: "How do I scan a merchant QR code to pay?",
      questionHi: "दुकानदार का क्यूआर कोड स्कैन करके भुगतान कैसे करें?",
      questionTa: "கடைக்காரரின் QR குறியீட்டை ஸ்கேன் செய்து பணம் செலுத்துவது எப்படி?",
      answerEn: "In the Pay tab, tap 'Scan QR Code'. If your browser supports camera barcode detection, it opens your camera. You can also upload a QR image or try the demo test QR button.",
      answerHi: "Pay टैब में 'QR कोड स्कैन करें' पर टैप करें। यह कैमरा खोलता है। आप डेमो परीक्षण के लिए दिए गए टेस्ट बटन का भी उपयोग कर सकते हैं।",
      answerTa: "'பணம் செலுத்து' திரையில் 'QR ஸ்கேன்' என்பதைத் தொடவும். இது கேமராவைத் திறக்கும். அல்லது மாதிரி QR குறியீட்டையும் சோதிக்கலாம்."
    },
    {
      id: "faq_23",
      keywords: ["real money", "real bank", "prototype", "असली पैसे", "क्या यह असली बैंक है", "உண்மையான பணம்", "உண்மை வங்கி", "மாதிரி"],
      questionEn: "Does Saral Banking connect to real banks or use real money?",
      questionHi: "क्या सरल बैंकिंग असली बैंक से जुड़ा है या इसमें असली पैसे हैं?",
      questionTa: "சரள் பேங்கிங் உண்மையான வங்கியுடன் இணைக்கப்பட்டுள்ளதா?",
      answerEn: "No. Saral Banking is a design prototype for a hackathon. Every customer, balance, account number, and transaction is completely simulated. Never enter real personal details.",
      answerHi: "नहीं। यह केवल एक प्रोटोटाइप (प्रदर्शनी ऐप) है। इसमें सभी खाते, बैलेंस और लेनदेन काल्पनिक हैं। इसमें कभी भी अपनी वास्तविक निजी जानकारी न डालें।",
      answerTa: "இல்லை. இது ஒரு வடிவமைப்பு மாதிரி (Prototype) மட்டுமே. இதில் உள்ள அனைத்து கணக்குகளும் பணமும் கற்பனையானவை. உண்மையான விவரங்களை உள்ளிட வேண்டாம்."
    },
    {
      id: "faq_24",
      keywords: ["auto lock", "timeout", "2 minutes", "स्वतः लॉक", "2 मिनट", "தானியங்கி பூட்டு", "2 நிமிடம்", "லாக்"],
      questionEn: "Why did the app lock itself automatically?",
      questionHi: "ऐप अपने आप लॉक क्यों हो गई?",
      questionTa: "செயலி தானாகவே ஏன் பூட்டிக்கொண்டது?",
      answerEn: "For your safety, if you don't touch the screen for 2 minutes, the app automatically locks itself to protect your account if your phone is left unattended. Enter PIN 1234 to unlock.",
      answerHi: "आपकी सुरक्षा के लिए, यदि 2 मिनट तक फोन को न छुआ जाए, तो ऐप अपने आप लॉक हो जाती है ताकि कोई और इसे न देख सके। अनलॉक करने के लिए पिन 1234 डालें।",
      answerTa: "உங்கள் பாதுகாப்பிற்காக, 2 நிமிடங்கள் தொடுதிரையைத் தொடாவிட்டால் செயலி தானாகப் பூட்டிக்கொள்ளும். திறக்க ரகசிய எண் 1234 ஐ உள்ளிடவும்."
    },
    {
      id: "faq_25",
      keywords: ["standard", "design standard", "rules", "मानक क्या है", "नियम", "சரள் தரநிலை", "விதிகள்", "ஸ்டாண்டர்ட்"],
      questionEn: "What is 'The Standard' screen in Help?",
      questionHi: "Help में 'The Standard (मानक)' स्क्रीन क्या है?",
      questionTa: "உதவிப் பகுதியில் உள்ள 'சரள் தரநிலை' (The Standard) என்றால் என்ன?",
      answerEn: "'The Standard' outlines the universal rules of simple banking: 5 constant bottom tabs, single plain action buttons, 3-step confirmation (Fill, Review, PIN), and no hidden surprises, with live demonstrations.",
      answerHi: "'The Standard' सरल बैंकिंग के बुनियादी नियम सिखाता है: हमेशा 5 मुख्य टैब, एक स्पष्ट मुख्य बटन, 3-चरणीय पुष्टि (भरें, जांचें, पिन डालें), और बिना किसी भ्रामक शब्दों के पारदर्शी बैंकिंग।",
      answerTa: "'சரள் தரநிலை' என்பது எளிய வங்கியியலின் 5 அடிப்படை விதிகளை விளக்குகிறது: மாறாத 5 பொத்தான்கள், எளிய சொற்கள், 3-படி பண பரிமாற்றம் மற்றும் தளவமைப்பு மாறாத வங்கி முறை."
    },
    {
      id: "faq_26",
      keywords: ["reset", "reset demo", "डेटा रीसेट", "शुरू से शुरू करें", "மீட்டமை", "ரீசெட்", "ஆரம்ப நிலை"],
      questionEn: "How can I restore the prototype back to its original state?",
      questionHi: "मैं इस डेमो ऐप को दोबारा शुरुआती स्थिति में कैसे ला सकता हूँ?",
      questionTa: "செயலியை ஆரம்ப நிலைக்கு எவ்வாறு மீட்டமைப்பது?",
      answerEn: "Go to Settings and scroll down to the red button labeled 'Reset demo'. Tapping this clears all custom edits and reloads the initial customer data and balances.",
      answerHi: "सेटिंग्स में जाएं और सबसे नीचे लाल रंग के 'डेमो रीसेट करें (Reset demo)' बटन पर टैप करें। इससे सभी बदलाव मिट जाएंगे और ऐप शुरुआती स्थिति में आ जाएगी।",
      answerTa: "அமைப்புகளுக்குச் சென்று 'மாதிரி தரவை மீட்டமை' (Reset demo) என்ற சிவப்பு பொத்தானைத் தொடவும். இது அனைத்து மாற்றங்களையும் அழித்து ஆரம்ப நிலைக்குக் கொண்டுவரும்."
    }
  ];
});
