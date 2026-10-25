(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralI18nHi = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return {
    appName: "सरल बैंकिंग",
    tagline: "सुरक्षित और स्पष्ट बचत खाते का खुला मानक",
    prototypeBadge: "हैकथॉन डेमो प्रोटोटाइप",
    prototypeNotice: "यह एक प्रदर्शनी प्रोटोटाइप है। कोई असली पैसा या वास्तविक बैंक खाता इससे नहीं जुड़ा है। कभी भी अपनी वास्तविक निजी जानकारी न डालें।",
    
    // Bottom Nav
    tabs: {
      home: "होम",
      pay: "भुगतान",
      history: "इतिहास",
      services: "सेवाएं",
      help: "सहायता"
    },
    
    // Common
    common: {
      back: "पीछे जाएं",
      continue: "आगे बढ़ें",
      confirm: "पुष्टि करें और भेजें",
      cancel: "रद्द करें",
      done: "पूर्ण",
      close: "बंद करें",
      copy: "कॉपी करें",
      copied: "कॉपी हो गया!",
      share: "साझा करें",
      shared: "रसीद साझा करने के लिए तैयार है",
      search: "खोजें...",
      filter: "फ़िल्टर",
      clear: "साफ़ करें",
      save: "सुरक्षित करें",
      delete: "हटाएं",
      edit: "बदलें",
      yes: "हाँ",
      no: "नहीं",
      readAloud: "बोलकर सुनाएं",
      loading: "लोड हो रहा है...",
      status: "स्थिति",
      moneyIn: "पैसे आए",
      moneyOut: "पैसे गए",
      all: "सभी",
      today: "आज",
      yesterday: "कल",
      stepOf: "चरण {step} / {total}",
      active: "सक्रिय",
      selected: "चयनित",
      primaryUser: "मुख्य उपयोगकर्ता",
      noData: "वर्तमान में कोई अनुरोध नहीं",
      sendMoney: "पैसे भेजें"
    },
    
    // Sign in
    signIn: {
      welcome: "सरल बैंकिंग में आपका स्वागत है",
      subtitle: "प्रोटोटाइप जांचने के लिए ग्राहक चुनें:",
      pickCustomer: "ग्राहक प्रोफ़ाइल चुनें",
      demoPinHelp: "डेमो पिन: 1234 (डेमो में हमेशा यही रहेगा)",
      enterPin: "अपना 4 अंकों का पिन डालें",
      useFingerprint: "फिंगरप्रिंट का उपयोग करें (डेमो)",
      fingerprintSuccess: "फिंगरप्रिंट तुरंत सत्यापित हुआ!",
      invalidPin: "गलत पिन। इस डेमो के लिए 1234 का उपयोग करें।",
      changeCustomer: "दूसरा ग्राहक चुनें",
      autoLockNotice: "2 मिनट तक स्क्रीन न छूने पर ऐप अपने आप लॉक हो जाती है।",
      guardianBadge: "युवा बचतकर्ता (अभिभावक द्वारा प्रबंधित)",
      guardianRoleDesc: "आरव की माता और अभिभावक"
    },
    
    // Home Screen
    home: {
      greeting: "नमस्ते, {name}",
      availableBalance: "उपलब्ध बैलेंस",
      availableHelp: "वह पैसा जिसे आप अभी खर्च कर सकते हैं",
      totalBalance: "कुल बैलेंस",
      totalHelp: "इसमें अस्थायी रूप से रोकी गई राशि भी शामिल है",
      onHold: "रोकी गई राशि",
      showBalance: "बैलेंस देखें",
      hideBalance: "बैलेंस छिपाएं",
      accountDetails: "खाता विवरण",
      accountNumber: "खाता संख्या",
      ifsc: "आईएफएससी कोड (IFSC)",
      branch: "शाखा (ब्रांच)",
      copyDetails: "खाता विवरण कॉपी करें",
      recentPayments: "हाल के भुगतान",
      viewAllHistory: "पूरा लेन-देन इतिहास देखें",
      noTransactions: "अभी कोई लेन-देन नहीं है।",
      officialPassbook: "आधिकारिक पासबुक रिकॉर्ड",
      accountHolderName: "खाताधारक का नाम",
      unmaskedAcc: "पूर्ण खाता संख्या",
      copyFullDetails: "पूरा खाता विवरण कॉपी करें",
      viewDetails: "विवरण देखें",
      
      // Simple Mode 4 Big Actions
      simpleSeeMoney: "1. मेरे पैसे देखें",
      simpleSeeMoneySub: "खाता नंबर, आईएफएससी और शेष राशि",
      simpleSendMoney: "2. पैसे भेजें",
      simpleSendMoneySub: "सुरक्षित तरीके से पैसे भेजें",
      simpleRecentPayments: "3. हाल के लेन-देन",
      simpleRecentPaymentsSub: "हाल के 5 लेन-देन बड़े अक्षरों में",
      simpleHelp: "4. सहायता और मदद",
      simpleHelpSub: "सवाल पूछें या आपातकालीन सुरक्षा",
      
      // Young saver additions
      savingsGoals: "बचत के लक्ष्य",
      dailyLimitRemaining: "आज की बची हुई खर्च सीमा",
      guardianNotice: "आपका खाता आपकी माता जी मीना से जुड़ा है। ₹1,000 से अधिक के भुगतान के लिए उनकी मंजूरी चाहिए।"
    },
    
    // Pay Screen
    pay: {
      title: "पैसे भेजें",
      chooseMethod: "आप पैसे कैसे भेजना चाहते हैं?",
      toUpi: "यूपीआई आईडी (UPI ID)",
      toMobile: "मोबाइल नंबर द्वारा",
      toBank: "बैंक खाता और आईएफएससी",
      toPayee: "सहेजे गए व्यक्ति को",
      scanQr: "क्यूआर कोड स्कैन करें",
      scanQrHelp: "कैमरे को किसी भी यूपीआई क्यूआर कोड के सामने लाएं",
      demoQrTest: "डेमो क्यूआर कोड जांचें",
      
      // Form
      enterUpi: "यूपीआई आईडी डालें (जैसे name@bank)",
      enterMobile: "10 अंकों का मोबाइल नंबर डालें",
      enterAccount: "खाता संख्या डालें",
      reenterAccount: "खाता संख्या दोबारा डालें",
      enterIfsc: "आईएफएससी कोड (11 अक्षर और अंक)",
      enterAmount: "रुपयों में राशि",
      amountPlaceholder: "₹0",
      enterNote: "यह किस काम के लिए है? (वैकल्पिक)",
      notePlaceholder: "जैसे: किराना, किराया, उपहार",
      
      // Review Screen
      reviewTitle: "भुगतान की जांच करें",
      reviewSubtitle: "पिन डालने से पहले सभी विवरण ध्यान से जांच लें:",
      to: "किसे",
      note: "नोट",
      payingTo: "पैसे पाने वाला",
      registeredNameLabel: "बैंक में पंजीकृत असली नाम",
      isThisRightPerson: "क्या यह वही व्यक्ति हैं जिन्हें आप पैसे भेजना चाहते हैं?",
      amountToSend: "भेजी जाने वाली राशि",
      noteLabel: "नोट",
      coolingWarning: "सूचना: नए व्यक्ति के लिए पहले 24 घंटे में ₹10,000 की सीमा लागू है।",
      
      // PIN Screen
      enterPinToPay: "{amount} भेजने के लिए अपना पिन डालें",
      pinSubtext: "याद रखें: पिन केवल पैसे भेजते समय डाला जाता है, पैसे पाते समय कभी नहीं।",
      confirmAndPay: "पुष्टि करें और भुगतान करें",
      
      // Receipt Screen
      paymentSuccess: "पैसे सफलतापूर्वक भेज दिए गए!",
      referenceNumber: "लेनदेन संदर्भ संख्या (UTR)",
      paidFrom: "आपके इस खाते से कटे",
      paidTo: "इन्हें प्राप्त हुए",
      dateAndTime: "दिनांक और समय",
      saveReceipt: "रसीद सहेजें या साझा करें",
      makeAnotherPayment: "एक और भुगतान करें",
      backToHome: "होम पर लौटें",
      
      // Payment Requests
      incomingRequestsTitle: "दूसरों द्वारा मांगे गए पैसे (अनुरोध)",
      requestAsking: "{name} आपसे {amount} मांग रहे हैं",
      requestWarning: "इस पर भुगतान करने से आपके खाते से पैसे निकलेंगे। पैसे पाने के लिए कभी पिन नहीं डालना होता।",
      acceptRequest: "भुगतान करें",
      declineRequest: "अस्वीकार करें (अनजान होने पर अनुशंसित)",
      declinedMessage: "भुगतान का अनुरोध हटा दिया गया।",
      
      // Young Saver Guardian Approval
      sentForApprovalTitle: "अभिभावक की मंजूरी के लिए भेजा गया",
      sentForApprovalDesc: "यह {amount} का भुगतान आपकी दैनिक सीमा {limit} से अधिक है। इसे आपकी माता जी मीना के पास मंजूरी के लिए भेज दिया गया है।",
      approvalPendingBadge: "अभिभावक की मंजूरी लंबित"
    },
    
    // Safety Check Dialog
    safetyCheck: {
      title: "त्वरित सुरक्षा जांच",
      question: "क्या किसी ने फ़ोन या मैसेज करके आपसे यह पैसे भेजने को कहा है?",
      yesScam: "हाँ, किसी के कहने पर भेज रहा हूँ",
      noSafe: "नहीं, मैं अपनी मर्जी से भेज रहा हूँ",
      warningTitle: "आपकी सुरक्षा के लिए भुगतान रोका गया",
      warningBody: "तुरंत रुकें! धोखेबाज अक्सर बैंक मैनेजर, पुलिस, लॉटरी या खरीदार बनकर जल्दबाज़ी में पैसे भेजने का दबाव बनाते हैं। किसी के दबाव में आकर पैसे न भेजें।",
      stopPayment: "यह भुगतान रद्द करें",
      callHelpline: "1930 साइबर हेल्पलाइन पर कॉल करें",
      simpleSureTitle: "क्या आप निश्चित रूप से {amount} भेजना चाहते हैं?",
      simpleSureDesc: "यह पैसा तुरंत आपके खाते से निकल जाएगा। कृपया प्राप्तकर्ता का नाम एक बार फिर जांच लें।"
    },
    
    // Payees Screen
    payees: {
      title: "सहेजे गए व्यक्ति (Payees)",
      addNew: "नया व्यक्ति जोड़ें",
      payeeNameLabel: "प्राप्तकर्ता का नाम",
      payeeIdentifierLabel: "यूपीआई आईडी, मोबाइल या खाता संख्या",
      addTitle: "विश्वसनीय व्यक्ति का विवरण जोड़ें",
      searchPayees: "सहेजे गए व्यक्तियों में खोजें...",
      coolingBadge: "नया: 24 घंटे की सीमा ₹10,000",
      coolingExplanation: "आपकी सुरक्षा के लिए, नए जोड़े गए व्यक्ति को पहले 24 घंटे में अधिकतम ₹10,000 ही भेजे जा सकते हैं।",
      deleteConfirm: "क्या आप वाकई {name} को अपनी सूची से हटाना चाहते हैं?",
      payeeAdded: "नया व्यक्ति सफलतापूर्वक जोड़ दिया गया!",
      noPayees: "अभी कोई सहेजा गया व्यक्ति नहीं है।",
      reviewNewPayee: "नए व्यक्ति के विवरण की पुष्टि करें",
      nameCheckFound: "बैंक में सत्यापित नाम मिला: {name}"
    },
    
    // History Screen
    history: {
      filterDateRange: "समय सीमा",
      rangeAll: "सभी समय",
      rangeLast7: "पिछले 7 दिन",
      rangeLast30: "पिछले 30 दिन",
      rangeLast90: "पिछले 3 महीने",
      filterType: "प्रकार",
      typeAll: "सभी प्रकार",
      typeUpi: "यूपीआई भुगतान",
      typeTransfer: "बैंक ट्रांसफर",
      typePension: "पेंशन और वेतन",
      typeBill: "उपयोगिता बिल",
      title: "लेन-देन का इतिहास",
      searchPlaceholder: "व्यक्ति, दुकान या राशि से खोजें...",
      filterAll: "सभी",
      filterIn: "पैसे आए (जमा)",
      filterOut: "पैसे गए (निकासी)",
      monthlySummary: "मासिक विवरण",
      totalReceived: "कुल प्राप्त हुए",
      totalSpent: "कुल खर्च हुए",
      tapToExplain: "बैंक की भाषा को सरल शब्दों में समझने के लिए किसी भी लेनदेन पर टैप करें।",
      detailTitle: "लेन-देन का संपूर्ण विवरण",
      plainExplanation: "सरल शब्दों में क्या हुआ:",
      rawBankDescription: "बैंक पासबुक में लिखा मूल विवरण:",
      decodedParts: "बैंक कोड का सरल अर्थ:",
      reportProblem: "इस लेन-देन में समस्या की शिकायत करें",
      askAboutTx: "इस लेन-देन के बारे में AI से पूछें",
      problemReported: "शिकायत दर्ज कर ली गई है। शिकायत संदर्भ संख्या #TK-{ref} आपके बैंक को भेज दी गई है।"
    },
    
    // Statements Screen
    statements: {
      title: "खाता विवरण (स्टेटमेंट)",
      periodLabel: "विवरण की अवधि चुनें",
      lastMonth: "पिछला महीना (सितंबर 2026)",
      last3Months: "पिछले 3 महीने (अगस्त - अक्टूबर 2026)",
      last6Months: "पिछले 6 महीने",
      customDates: "अपनी पसंद की तारीखें",
      downloadCsv: "CSV स्प्रेडशीट डाउनलोड करें",
      printPdf: "प्रिंट करें / पीडीएफ सहेजें",
      openingBalance: "प्रारंभिक बैलेंस",
      closingBalance: "अंतिम बैलेंस",
      totalDebits: "कुल खर्च (निकासी)",
      totalCredits: "कुल जमा",
      statementDisclaimer: "सरल बैंकिंग ओपन प्रोटोटाइप द्वारा निर्मित। यह कंप्यूटर जनित प्रतिलिपि है, हस्ताक्षर की आवश्यकता नहीं है।"
    },
    
    // Services Screen
    services: {
      stepTitle: "सेवा अनुरोध",
      newPhoneLabel: "नया मोबाइल नंबर",
      newEmailLabel: "नया ईमेल पता",
      newAddressLabel: "नया घर का पता",
      chequeConfirmTitle: "चेक बुक (20 पत्ते) का अनुरोध",
      chequeDeliveryAddress: "पंजीकृत पते पर भेजा जाएगा:",
      upiLimitTitle: "दैनिक खर्च सीमा बदलें",
      newLimitLabel: "नई दैनिक खर्च सीमा (₹)",
      nomineeTitle: "खाता नॉमिनी बदलें",
      nomineeNameLabel: "नॉमिनी का पूरा नाम",
      nomineeRelationLabel: "संबंध (जैसे पत्नी, बेटा, बेटी)",
      reviewSetting: "बदलाव की समीक्षा करें",
      otpPrompt: "डेमो ओटीपी दर्ज करें: 123456",
      settingReceiptTitle: "सेटिंग सफलतापूर्वक बदल दी गई!",
      title: "सेवाएं और अनुरोध",
      updateProfile: "मोबाइल नंबर, ईमेल या पता बदलें",
      updateProfileDesc: "ओटीपी सत्यापन द्वारा अपनी संपर्क जानकारी तुरंत बदलें",
      chequeBook: "नई चेक बुक मांगें",
      chequeBookDesc: "20 मुफ़्त चेक पन्नों की पुस्तिका अपने घर के पते पर मंगवाएं",
      cardSafety: "डेबिट कार्ड और यूपीआई सुरक्षा",
      blockCard: "डेबिट कार्ड बंद (ब्लॉक) करें",
      unblockCard: "डेबिट कार्ड दोबारा चालू करें",
      cardBlocked: "डेबिट कार्ड सुरक्षित रूप से ब्लॉक कर दिया गया है।",
      blockUpi: "यूपीआई अस्थायी रूप से बंद करें",
      unblockUpi: "यूपीआई दोबारा चालू करें",
      setLimits: "दैनिक खर्च सीमा तय करें",
      setLimitsDesc: "प्रतिदिन अधिकतम खर्च की सीमा स्वयं निर्धारित करें",
      nomineeDetails: "नॉमिनी (वारिस) का विवरण",
      nomineeDesc: "अपने खाते के वारिस का नाम देखें या बदलें",
      requestTimeline: "सक्रिय सेवा अनुरोध",
      statusRequested: "आवेदन मिला",
      statusInProgress: "प्रक्रिया में",
      statusCompleted: "पूर्ण हुआ",
      enterOtpPrompt: "डेमो ओटीपी डालें: 123456",
      invalidOtp: "गलत ओटीपी। कृपया 123456 डालें।",
      serviceSuccess: "अनुरोध सफलतापूर्वक दर्ज हो गया!"
    },
    
    // Learn Screen
    learn: {
      title: "सुरक्षित बैंकिंग सीखें",
      subtitle: "सरल पाठ जिन्हें कोई भी 2 मिनट में समझ सकता है",
      lessonSavingsTitle: "बचत खाता क्या होता है?",
      lessonSavingsText: "बैंक में आपका एक सुरक्षित डिजिटल लॉकर। बैंक आपके पैसे सुरक्षित रखता है, उस पर ब्याज देता है, और जब चाहें तब निकालने की सुविधा देता है।",
      lessonInterestTitle: "बचत खाते का ब्याज कैसे मिलता है?",
      lessonInterestText: "बैंक आपके पैसे रखने के बदले हर 3 महीने में आपको अतिरिक्त पैसे देता है। भारत में बचत खाते पर आमतौर पर 3% से 4% सालाना ब्याज मिलता है।",
      lessonMinBalanceTitle: "न्यूनतम बैलेंस के नियम",
      lessonMinBalanceText: "कुछ खातों में न्यूनतम राशि रखनी होती है। लेकिन सरल बैंकिंग मानक के तहत बुनियादी खातों पर बैलेंस कम होने पर कोई जुर्माना नहीं होता।",
      lessonSampleChargesTitle: "बैंक के नमूना शुल्क",
      lessonUpiTitle: "यूपीआई (UPI) क्या है?",
      lessonUpiText: "यूपीआई भारत की बहुत तेज़ और मुफ़्त भुगतान प्रणाली है। बिना बड़े खाता नंबर मांगे सिर्फ फोन नंबर या यूपीआई आईडी से किसी को भी पैसे भेजे जा सकते हैं।",
      spotScamsTitle: "6 आम धोखाधड़ी से कैसे बचें",
      glossaryNotice: "ऐप में जिन शब्दों के नीचे बिंदीदार रेखा है, उन पर टैप करके आप उनका सरल अर्थ देख सकते हैं।"
    },
    
    // Help Screen
    help: {
      title: "सहायता और संपर्क",
      chatTitle: "सरल सहायक (AI बैंकिंग गाइड)",
      aiAssistantBadge: "AI सक्रिय",
      chatSubtitle: "सरल शब्दों में बैंकिंग का कोई भी सवाल पूछें",
      chatPlaceholder: "सरल हिंदी, अंग्रेजी या तमिल में सवाल पूछें...",
      chatSend: "पूछें",
      charCount: "अक्षर",
      aiTyping: "AI सोच रहा है...",
      clearChat: "बातचीत मिटाएं",
      askTxPrompt: "इस लेन-देन का मतलब मुझे सरल शब्दों में समझाएं:",
      quickQ1: "सुरक्षित पैसे कैसे भेजें?",
      quickQ2: "DR और CR का क्या मतलब है?",
      quickQ3: "फ़ोन पर कोई मुझसे OTP या PIN मांग रहा है",
      quickQ4: "डेबिट कार्ड कैसे ब्लॉक करें?",
      securityWarning: "अपना गोपनीय पिन (PIN), ओटीपी (OTP) या कार्ड विवरण किसी के साथ साझा न करें, बैंक अधिकारी भी कभी यह नहीं मांगते।",
      offlineNotice: "मानक उत्तर (AI सर्वर उपलब्ध नहीं है या कुंजी सेट नहीं है)।",
      noResults: "कोई सवाल नहीं मिला।",
      popularQuestions: "अक्सर पूछे जाने वाले सवाल",
      reportFraudTitle: "आपातकालीन: धोखाधड़ी या फ्रॉड की रिपोर्ट",
      reportFraudDesc: "यदि आपको पैसे चोरी होने का शक हो, तो अपने सभी कार्ड और यूपीआई तुरंत एक टैप में बंद करें।",
      freezeEverythingBtn: "आपातकालीन 1-टैप खाता सुरक्षा (फ्रीज)",
      unfreezeBtn: "खाता व कार्ड दोबारा चालू करें",
      frozenNotice: "आपातकालीन सुरक्षा सक्रिय है! आपका डेबिट कार्ड और यूपीआई अभी बंद हैं।",
      nationalHelplines: "राष्ट्रीय साइबर अपराध हेल्पलाइन",
      cyberHelplineNumber: "1930 (टोल-फ्री, 24 घंटे उपलब्ध)",
      cyberPortalLink: "cybercrime.gov.in",
      theStandardTitle: "The Saral Standard (सरल मानक)",
      theStandardDesc: "वे खुले नियम जो किसी भी बैंक को इस्तेमाल में आसान और सुरक्षित बनाते हैं"
    },
    
    // The Standard Screen
    standardRules: {
      liveExampleBadge: "मानक का प्रत्यक्ष उदाहरण:",
      rule1Live: "नीचे दिए गए 5 टैब सभी बैंकों और मोड में हमेशा एक ही जगह रहते हैं।",
      rule2Live: "शीर्ष पर हमेशा बैलेंस रहता है; नीचे हमेशा मुख्य कार्य बटन रहता है।",
      rule3Live: "इस आधिकारिक बैंकिंग शब्द पर टैप करके इसका सरल अर्थ देखें:",
      rule4Live: "1. जानकारी भरें ➔ 2. एक ही स्क्रीन पर जांचें ➔ 3. पिन डालें ➔ रसीद",
      rule5Live: "नीचे किसी भी बैंक पर टैप करें: सिर्फ रंग और लोगो बदलेंगे, लेआउट नहीं।",
      title: "सरल बैंकिंग मानक (The Saral Standard)",
      subtitle: "एक सार्वभौमिक डिज़ाइन विनिर्देश जिसे कोई भी बैंक अपना सकता है ताकि किसी भी नागरिक को डिजिटल बैंकिंग में कठिनाई या डर न हो।",
      rule1Title: "1. हर स्क्रीन पर नीचे वही 5 टैब",
      rule1Desc: "होम, भुगतान, इतिहास, सेवाएं, और सहायता कभी अपनी जगह से नहीं हिलते, न नाम बदलते हैं, न कभी छिपते हैं।",
      rule2Title: "2. एक ही चीज़ के लिए एक ही स्थान",
      rule2Desc: "होम के सबसे ऊपर बैलेंस, हर स्क्रीन के सबसे नीचे एक बड़ा मुख्य बटन, और ऊपर बाईं ओर 'पीछे जाएं'।",
      rule3Title: "3. एक विचार के लिए एक ही सरल शब्द",
      rule3Desc: "बटन पर कभी 'फंड ट्रांसफर', 'आईएमपीएस' या 'नेफ्ट' न लिखें। सिर्फ 'पैसे भेजें' लिखें। आधिकारिक शब्दों को समझने के लिए ग्लॉसरी दें।",
      rule4Title: "4. पैसे का 3-चरणीय नियम",
      rule4Desc: "पैसे भेजने या बदलाव का हर काम ठीक 3 चरणों में होता है: 1. भरें -> 2. एक ही स्क्रीन पर सब जांचें -> 3. पिन डालकर पुष्टि करें। फिर रसीद।",
      rule5Title: "5. बैंक बदलने पर लेआउट न बदलना",
      rule5Desc: "सेटिंग्स में बैंक बदलने पर सिर्फ रंग और लोगो बदलता है। कोई भी बटन या मेन्यू अपनी जगह से नहीं हिलता।",
      liveDemoTitle: "सरल मानक के प्रत्यक्ष उदाहरण:"
    },
    
    // Settings Screen
    settings: {
      title: "सेटिंग्स और प्राथमिकताएं",
      languageLabel: "भाषा / Language",
      textSizeLabel: "अक्षरों का आकार (Text Size)",
      textSizeNormal: "सामान्य (16px)",
      textSizeLarge: "बड़ा (18px)",
      textSizeXLarge: "बहुत बड़ा (20px)",
      highContrastLabel: "हाई कंट्रास्ट मोड",
      highContrastDesc: "स्पष्ट दृष्टि के लिए गहरे काले बॉर्डर और अधिक चमकीले रंग",
      readAloudLabel: "बोलकर सुनाने की सुविधा (Read Aloud)",
      readAloudDesc: "पैसे से जुड़ी स्क्रीनों पर विवरण और राशि बोलकर सुनाएं",
      modeLabel: "अनुभव मोड (Mode)",
      modeStandard: "मानक मोड (सभी सुविधाएं)",
      modeSimple: "सरल मोड (4 बड़े बटन, वरिष्ठ नागरिकों के लिए)",
      modeYoungSaver: "युवा बचतकर्ता मोड (18 से कम, अभिभावक से जुड़ा)",
      bankSwitcherLabel: "बैंक चुनें (थीम और ब्रांड)",
      bankSwitcherDesc: "3 काल्पनिक बैंकों में से चुनें। रंग और लोगो बदलेंगे, लेआउट वही रहेगा।",
      hideBalanceByDefault: "होम पर शुरुआत में बैलेंस छिपाकर रखें",
      resetDemoBtn: "डेमो रीसेट करें (Reset demo)",
      resetConfirm: "क्या आप सभी बदलाव मिटाकर ऐप को शुरुआती डेमो स्थिति में वापस लाना चाहते हैं?"
    },
    
    // Guardian View Screen
    guardian: {
      consentTitle: "अभिभावक सहमति और खाता सेटअप",
      consentSubtitle: "18 वर्ष से कम आयु के युवा बचतकर्ताओं के लिए अनिवार्य",
      consentAgreement: "मैं, मीना शर्मा (माता जी), इस खाते की देखरेख करने, लेन-देन की निगरानी करने और ₹1,000 से अधिक के भुगतान को मंजूरी देने के लिए सहमत हूँ।",
      consentAgreeBtn: "सहमति दें और खाता खोलें",
      consentDetailsNotice: "केवल आवश्यक खाता विवरण लिए जाते हैं। इस खाते पर कोई ऋण या क्रेडिट कार्ड चालू नहीं है।",
      title: "अभिभावक नियंत्रण दृश्य",
      dashboardBadge: "अभिभावक डैशबोर्ड",
      subtitle: "आरव शर्मा के युवा बचत खाते का प्रबंधन",
      guardianName: "अभिभावक: मीना शर्मा (माता जी)",
      aaravBalance: "आरव के खाते का बैलेंस",
      dailyLimitSetting: "आरव की दैनिक खर्च सीमा",
      perDay: "प्रति दिन",
      wantsToPay: "{name} {amount} भेजना चाहता है",
      pendingRequestsTitle: "लंबित अनुमोदन अनुरोध",
      noPendingRequests: "आरव की तरफ से अभी कोई लंबित अनुरोध नहीं है।",
      approveBtn: "भुगतान को मंजूरी दें",
      declineBtn: "भुगतान अस्वीकार करें",
      approvedMsg: "{amount} के भुगतान को मंजूरी दे दी गई! पैसे भेज दिए गए हैं।",
      declinedMsg: "भुगतान अनुरोध अस्वीकार कर दिया गया।",
      aaravActivityTitle: "आरव के हालिया लेन-देन"
    }
,
    
    // Voice Assistant Controls & Commands
    voice: {
      btnVoice: "बोलकर आदेश दें (आवाज़ सहायता)",
      btnVoicePay: "बोलकर भुगतान करें",
      assistantTitle: "सरल वॉइस असिस्टेंट",
      listening: "सुन रहे हैं...",
      listeningHelp: "अब हिंदी या अंग्रेज़ी में बोलें",
      takeYourTime: "आराम से बोलें, हम सुन रहे हैं...",
      doneSpeaking: "बोलना समाप्त हुआ ➔",
      hearingYou: "सुनाई दिया: ",
      tapToStop: "रोकने के लिए टैप करें",
      tapToSpeak: "बोलने के लिए माइक दबाएं",
      speakPrompt: "कुछ बोलें, जैसे: \"मेरा बैलेंस बताओ\" या \"रमेश को 500 रुपये भेजो\"",
      notSupported: "इस ब्राउज़र में आवाज़ पहचान की सुविधा उपलब्ध नहीं है।",
      pinWarningTitle: "पिन या ओटीपी कभी भी बोलकर न बताएं!",
      pinWarningDesc: "आपकी सुरक्षा के लिए, पिन और ओटीपी कभी भी बोलकर नहीं बताए जाते। इन्हें हमेशा स्क्रीन पर गुप्त रूप से टाइप करें या फिंगरप्रिंट का उपयोग करें।",
      pinWarningAcknowledge: "समझ गया, मैं टाइप करूँगा",
      suggestionsTitle: "हम समझ नहीं पाए। आप यह बोल सकते हैं:",
      didYouMean: "क्या आपका मतलब था:",
      suggestionBalance: "मेरा बैलेंस बताओ",
      suggestionPay: "रमेश को 500 रुपये भेजो",
      suggestionHistory: "पिछले भुगतान दिखाओ",
      suggestionStatement: "पिछले महीने का स्टेटमेंट डाउनलोड करो",
      suggestionCard: "मेरा कार्ड ब्लॉक करो",
      understoodBalance: "आपका उपलब्ध बैलेंस {amount} है।",
      understoodBalanceQuestion: "आपका उपलब्ध बैलेंस {amount} है। क्या इसे स्क्रीन पर देखना चाहते हैं?",
      understoodPayQuestion: "{name} को {amount} भेजें?",
      understoodHistory: "आपके पिछले लेनदेन खोले जा रहे हैं।",
      understoodStatement: "आपका खाता विवरण खोला जा रहा है।",
      understoodCardBlock: "कार्ड सुरक्षा विकल्प खोले जा रहे हैं।",
      confirmAction: "हाँ, विवरण देखें",
      cancelAction: "रद्द करें",
      reviewNotice: "भुगतान विवरण भर दिया गया है। वॉइस असिस्टेंट कभी भुगतान पूरा नहीं करता। कृपया स्क्रीन पर समीक्षा करें और पुष्टि के लिए अपना पिन डालें।",
      testPhrasesTitle: "या परीक्षण के लिए इनमें से कोई वाक्य चुनें:"
    }
  };
});
