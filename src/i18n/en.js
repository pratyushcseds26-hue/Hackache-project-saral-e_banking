(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralI18nEn = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return {
    appName: "Saral Banking",
    tagline: "The open standard for safe, clear savings accounts",
    prototypeBadge: "HACKATHON DEMO PROTOTYPE",
    prototypeNotice: "This is a demonstration prototype. No real money or real bank account is connected. Never enter real personal details.",
    
    // Bottom Nav
    tabs: {
      home: "Home",
      pay: "Pay",
      history: "History",
      services: "Services",
      help: "Help"
    },
    
    // Common
    common: {
      back: "Back",
      continue: "Continue",
      confirm: "Confirm and Send",
      cancel: "Cancel",
      done: "Done",
      close: "Close",
      copy: "Copy",
      copied: "Copied to clipboard!",
      share: "Share",
      shared: "Receipt ready to share",
      search: "Search...",
      filter: "Filter",
      clear: "Clear",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      yes: "Yes",
      no: "No",
      readAloud: "Read aloud",
      loading: "Loading...",
      status: "Status",
      moneyIn: "Money In",
      moneyOut: "Money Out",
      all: "All",
      today: "Today",
      yesterday: "Yesterday",
      stepOf: "Step {step} of {total}",
      active: "Active",
      selected: "Selected",
      primaryUser: "Main User",
      noData: "No requests currently",
      sendMoney: "Send money"
    },
    
    // Sign in
    signIn: {
      welcome: "Welcome to Saral Banking",
      subtitle: "Choose a customer to test the prototype:",
      pickCustomer: "Select Customer Profile",
      demoPinHelp: "Demo PIN: 1234 (Always the same in demo)",
      enterPin: "Enter your 4-digit PIN",
      useFingerprint: "Use Fingerprint (Demo)",
      fingerprintSuccess: "Fingerprint verified instantly!",
      invalidPin: "Incorrect PIN. For this demo, use 1234.",
      changeCustomer: "Switch to another customer",
      autoLockNotice: "The app locks itself automatically after 2 minutes of no touch.",
      guardianBadge: "Young Saver (Guardian Managed)",
      guardianRoleDesc: "Mother & Guardian of Aarav"
    },
    
    // Home Screen
    home: {
      greeting: "Hello, {name}",
      availableBalance: "Available Balance",
      availableHelp: "Money you can use right now",
      totalBalance: "Total Balance",
      totalHelp: "Includes money on temporary hold",
      onHold: "On Hold",
      showBalance: "Show balance",
      hideBalance: "Hide balance",
      accountDetails: "Account Details",
      accountNumber: "Account Number",
      ifsc: "IFSC Code",
      branch: "Branch",
      copyDetails: "Copy Account Details",
      recentPayments: "Recent Payments",
      viewAllHistory: "See all transaction history",
      noTransactions: "No transactions yet.",
      officialPassbook: "Official Passbook Record",
      accountHolderName: "Account Holder Name",
      unmaskedAcc: "Unmasked Account Number",
      copyFullDetails: "Copy Full Account Details to Clipboard",
      viewDetails: "View Details",
      
      // Simple Mode 4 Big Actions
      simpleSeeMoney: "1. See my money",
      simpleSeeMoneySub: "Account number, IFSC and available balance",
      simpleSendMoney: "2. Send money",
      simpleSendMoneySub: "Send money safely in 3 steps",
      simpleRecentPayments: "3. Recent payments",
      simpleRecentPaymentsSub: "Recent 5 payments in clear large text",
      simpleHelp: "4. Help and support",
      simpleHelpSub: "Ask questions or emergency freeze",
      
      // Young saver additions
      savingsGoals: "Savings Goals",
      dailyLimitRemaining: "Daily Spending Limit Remaining",
      guardianNotice: "Your account is linked to your guardian Meena. Payments above ₹1,000 need her approval."
    },
    
    // Pay Screen
    pay: {
      title: "Send Money",
      chooseMethod: "How would you like to send money?",
      toUpi: "To UPI ID",
      toMobile: "To Mobile Number",
      toBank: "To Bank Account & IFSC",
      toPayee: "To Saved Payee",
      scanQr: "Scan QR Code",
      scanQrHelp: "Point camera at any UPI QR code",
      demoQrTest: "Try Sample Demo QR",
      
      // Form
      enterUpi: "Enter UPI ID (e.g. name@bank)",
      enterMobile: "Enter 10-digit mobile number",
      enterAccount: "Account number",
      reenterAccount: "Re-enter account number",
      enterIfsc: "IFSC code (11 letters and numbers)",
      enterAmount: "Amount in Rupees",
      amountPlaceholder: "₹0",
      enterNote: "What is this for? (Optional)",
      notePlaceholder: "e.g. Vegetables, Rent, Gift",
      
      // Review Screen
      reviewTitle: "Review your payment",
      reviewSubtitle: "Check every detail carefully before confirming:",
      to: "To",
      note: "Note",
      payingTo: "Sending to",
      registeredNameLabel: "Registered Bank Name",
      isThisRightPerson: "Is this the right person?",
      amountToSend: "Amount to send",
      noteLabel: "Note",
      coolingWarning: "Notice: New payee limit of ₹10,000 applies for 24 hours.",
      
      // PIN Screen
      enterPinToPay: "Enter PIN to send {amount}",
      pinSubtext: "Remember: You ONLY enter PIN when sending money.",
      confirmAndPay: "Confirm & Pay",
      
      // Receipt Screen
      paymentSuccess: "Payment Sent Successfully!",
      referenceNumber: "Reference Number (UTR)",
      paidFrom: "Paid from your account",
      paidTo: "Paid to",
      dateAndTime: "Date & Time",
      saveReceipt: "Save or Share Receipt",
      makeAnotherPayment: "Send another payment",
      backToHome: "Return to Home",
      
      // Payment Requests
      incomingRequestsTitle: "Payment Requests from Others",
      requestAsking: "{name} is asking for {amount}",
      requestWarning: "Paying this sends money OUT of your account. You NEVER need your PIN to receive money.",
      acceptRequest: "Pay Request",
      declineRequest: "Decline Request (Recommended if unknown)",
      declinedMessage: "Payment request declined and removed.",
      
      // Young Saver Guardian Approval
      sentForApprovalTitle: "Sent to Guardian for Approval",
      sentForApprovalDesc: "This payment of {amount} is above your daily limit of {limit}. We sent an approval request to your guardian Meena.",
      approvalPendingBadge: "Pending Guardian Approval"
    },
    
    // Safety Check Dialog
    safetyCheck: {
      title: "Quick Safety Check",
      question: "Did someone call or message you asking you to send this money?",
      yesScam: "Yes, someone told me to send",
      noSafe: "No, I am sending this myself",
      warningTitle: "Payment Paused for Your Safety",
      warningBody: "Stop immediately! Scammers frequently impersonate bank officers, police, lottery organizers, or buyers requesting advance payment. Never send money under pressure.",
      stopPayment: "Cancel this payment",
      callHelpline: "Call 1930 Cyber Helpline",
      simpleSureTitle: "Are you sure you want to send {amount}?",
      simpleSureDesc: "This money will leave your account immediately. Please check the person's name once more."
    },
    
    // Payees Screen
    payees: {
      title: "Saved Payees",
      addNew: "Add New Payee",
      payeeNameLabel: "Payee Name",
      payeeIdentifierLabel: "UPI ID or Mobile or Account Number",
      addTitle: "Add a trusted person",
      searchPayees: "Search saved payees...",
      coolingBadge: "New: 24h limit ₹10,000",
      coolingExplanation: "For your safety, payments to a new person are limited to ₹10,000 in the first 24 hours.",
      deleteConfirm: "Are you sure you want to delete {name} from your payees?",
      payeeAdded: "Payee added successfully!",
      noPayees: "No saved payees yet.",
      reviewNewPayee: "Confirm New Payee Details",
      nameCheckFound: "Verified account name found: {name}"
    },
    
    // History Screen
    history: {
      filterDateRange: "Date Range",
      rangeAll: "All Time",
      rangeLast7: "Last 7 Days",
      rangeLast30: "Last 30 Days",
      rangeLast90: "Last 3 Months",
      filterType: "Type",
      typeAll: "All Types",
      typeUpi: "UPI Payments",
      typeTransfer: "Bank Transfers",
      typePension: "Pension & Salary",
      typeBill: "Utility Bills",
      title: "Transaction History",
      searchPlaceholder: "Search by person, store or amount...",
      filterAll: "All",
      filterIn: "Money In (Credits)",
      filterOut: "Money Out (Debits)",
      monthlySummary: "Monthly Summary",
      totalReceived: "Total Received",
      totalSpent: "Total Spent",
      tapToExplain: "Tap any transaction to see its raw bank description decoded.",
      detailTitle: "Transaction Details",
      plainExplanation: "What happened:",
      rawBankDescription: "Raw Bank Statement Description:",
      decodedParts: "Decoded Bank Codes:",
      reportProblem: "Report a problem with this payment",
      askAboutTx: "Ask AI to explain this payment",
      problemReported: "Problem reported. Reference ticket #TK-{ref} logged with your bank."
    },
    
    // Statements Screen
    statements: {
      title: "Account Statement",
      periodLabel: "Select Statement Period",
      lastMonth: "Last Month (September 2026)",
      last3Months: "Last 3 Months (Aug - Oct 2026)",
      last6Months: "Last 6 Months",
      customDates: "Custom Date Range",
      downloadCsv: "Download CSV Spreadsheet",
      printPdf: "Print / Save as PDF",
      openingBalance: "Opening Balance",
      closingBalance: "Closing Balance",
      totalDebits: "Total Money Out",
      totalCredits: "Total Money In",
      statementDisclaimer: "Generated by Saral Banking Open Prototype. Computer generated copy, no physical signature required."
    },
    
    // Services Screen
    services: {
      stepTitle: "Service Request",
      newPhoneLabel: "New Mobile Number",
      newEmailLabel: "New Email Address",
      newAddressLabel: "New Home Address",
      chequeConfirmTitle: "Request Cheque Book (20 Leaves)",
      chequeDeliveryAddress: "Will be delivered to registered address:",
      upiLimitTitle: "Change Daily Spending Limit",
      newLimitLabel: "New Daily Limit (₹)",
      nomineeTitle: "Update Account Nominee",
      nomineeNameLabel: "Nominee Full Name",
      nomineeRelationLabel: "Relationship (e.g. Spouse, Son, Daughter)",
      reviewSetting: "Review Setting Change",
      otpPrompt: "Enter Demo OTP: 123456",
      settingReceiptTitle: "Setting Updated Successfully!",
      title: "Services & Requests",
      updateProfile: "Update Mobile, Email or Address",
      updateProfileDesc: "Change your contact details with instant OTP verification",
      chequeBook: "Request Cheque Book",
      chequeBookDesc: "Receive 20 free cheque leaves at your registered address",
      cardSafety: "Debit Card & UPI Safety",
      blockCard: "Block Debit Card",
      unblockCard: "Unblock Debit Card",
      cardBlocked: "Debit Card has been blocked securely.",
      blockUpi: "Temporarily Freeze UPI",
      unblockUpi: "Unfreeze UPI",
      setLimits: "Daily Spending Limits",
      setLimitsDesc: "Set the maximum amount you can spend per day",
      nomineeDetails: "Nominee Details",
      nomineeDesc: "Check or update your account nominee",
      requestTimeline: "Active Service Requests",
      statusRequested: "Requested",
      statusInProgress: "In Progress",
      statusCompleted: "Completed",
      enterOtpPrompt: "Enter Demo OTP: 123456",
      invalidOtp: "Incorrect OTP. Please enter 123456.",
      serviceSuccess: "Request submitted successfully!"
    },
    
    // Learn Screen
    learn: {
      title: "Learn Safe Banking",
      subtitle: "Plain lessons anyone can understand in 2 minutes",
      lessonSavingsTitle: "What is a Savings Account?",
      lessonSavingsText: "A safe digital locker with the bank. The bank keeps your money secure, gives you interest, and lets you withdraw or pay whenever you wish.",
      lessonInterestTitle: "How Savings Interest Works",
      lessonInterestText: "The bank pays you extra money every 3 months just for keeping your money in the account. In India, savings accounts usually give 3% to 4% per year.",
      lessonMinBalanceTitle: "Minimum Balance Rules",
      lessonMinBalanceText: "Some accounts require keeping a small amount. Under Saral Standard, basic accounts have zero penalty if balance drops.",
      lessonSampleChargesTitle: "Sample Bank Charges",
      lessonUpiTitle: "What is UPI?",
      lessonUpiText: "UPI is India's fast, free digital payment system. You can send money to anyone using their phone number or UPI ID without asking for long account numbers.",
      spotScamsTitle: "How to Spot the 6 Common Scams",
      glossaryNotice: "Dotted words in the app can be tapped anytime to see what they mean."
    },
    
    // Help Screen
    help: {
      title: "Help & Support",
      chatTitle: "Saral Sahayak (AI Banking Guide)",
      aiAssistantBadge: "AI Active",
      chatSubtitle: "Ask anything about banking in simple plain words",
      chatPlaceholder: "Ask any question in plain English, Hindi or Tamil...",
      chatSend: "Ask",
      charCount: "characters",
      aiTyping: "AI is thinking...",
      clearChat: "Clear chat",
      askTxPrompt: "Explain this transaction to me in simple words:",
      quickQ1: "How do I send money safely?",
      quickQ2: "What does DR and CR mean?",
      quickQ3: "A caller asks for my OTP or PIN",
      quickQ4: "How do I block my debit card?",
      securityWarning: "Never share your secret PIN, OTP, or Card details with anyone, even bank staff.",
      offlineNotice: "Standard answer (AI server unreachable or key not set).",
      noResults: "No matching questions found.",
      popularQuestions: "Frequently Asked Questions",
      reportFraudTitle: "Emergency: Report Fraud or Scam",
      reportFraudDesc: "Immediately freeze all cards and UPI payments if you suspect someone stole your money.",
      freezeEverythingBtn: "Emergency 1-Tap Freeze",
      unfreezeBtn: "Unfreeze Account & Card",
      frozenNotice: "Emergency Freeze Active! Your Debit Card and UPI are currently blocked.",
      nationalHelplines: "National Cyber Crime Helplines",
      cyberHelplineNumber: "1930 (Toll-Free, 24x7)",
      cyberPortalLink: "cybercrime.gov.in",
      theStandardTitle: "The Saral Standard",
      theStandardDesc: "The open design guidelines that make any bank easy and safe to use"
    },
    
    // The Standard Screen
    standardRules: {
      liveExampleBadge: "Live Standard Example:",
      rule1Live: "The 5 tabs below stay fixed across all banks, modes and customers.",
      rule2Live: "Top is always Balance; Bottom is always the single Primary Action.",
      rule3Live: "Tap this official banking term to see its plain meaning:",
      rule4Live: "1. Fill Details ➔ 2. Review on One Screen ➔ 3. Enter PIN ➔ Receipt",
      rule5Live: "Tap any bank below: only colors and logo change, zero layout shift.",
      title: "The Saral Banking Standard",
      subtitle: "A universal design specification that any commercial bank can adopt to eliminate digital financial exclusion and fraud.",
      rule1Title: "1. The 5 Bottom Tabs Everywhere",
      rule1Desc: "Home, Pay, History, Services, Help never move, never rename, never hide.",
      rule2Title: "2. The Same Place for the Same Thing",
      rule2Desc: "Balance at the top of Home, main action as one big button at the bottom, Back at the top left.",
      rule3Title: "3. One Plain Word Per Idea",
      rule3Desc: "Never say 'Fund transfer', 'IMPS' or 'NEFT' on an action button. Say 'Send money'. Keep official terms in tap-to-explain glossaries.",
      rule4Title: "4. The 3-Step Money Rule",
      rule4Desc: "Every action that moves money or changes a setting follows exactly: 1. Fill in -> 2. Review all on one screen -> 3. Confirm with PIN. Then a receipt.",
      rule5Title: "5. Brand Switcher with Zero Layout Shift",
      rule5Desc: "Changing banks changes only brand colors and logo. Zero elements move, ensuring familiarity across all institutions.",
      liveDemoTitle: "Live Standard Interactive Verification:"
    },
    
    // Settings Screen
    settings: {
      title: "Settings & Personalization",
      languageLabel: "Language / भाषा",
      textSizeLabel: "Text Size",
      textSizeNormal: "Normal (16px)",
      textSizeLarge: "Large (18px)",
      textSizeXLarge: "Extra Large (20px)",
      highContrastLabel: "High Contrast Mode",
      highContrastDesc: "Bold black borders and stark colors for better vision",
      readAloudLabel: "Read Aloud Voice Audio",
      readAloudDesc: "Speak text and amounts automatically on money screens",
      modeLabel: "Experience Mode",
      modeStandard: "Standard Mode (All features)",
      modeSimple: "Simple Mode (4 big buttons, senior friendly)",
      modeYoungSaver: "Young Saver Mode (Under-18, guardian linked)",
      bankSwitcherLabel: "Bank Switcher (Theme & Brand)",
      bankSwitcherDesc: "Switch between 3 fictional banks. Colors and logo change; layout stays identical.",
      hideBalanceByDefault: "Hide Balance by Default on Home",
      resetDemoBtn: "Reset Demo to Original State",
      resetConfirm: "Are you sure you want to reset all data and transactions back to the original demo state?"
    },
    
    // Guardian View Screen
    guardian: {
      consentTitle: "Guardian Consent & Setup",
      consentSubtitle: "Required for young savers under 18 years of age",
      consentAgreement: "I, Meena Sharma (Mother), agree to manage this account, supervise transactions, and approve spending over ₹1,000.",
      consentAgreeBtn: "Agree & Open Account",
      consentDetailsNotice: "Only essential account details are collected. No loans, credit cards, or overdrafts are enabled on this account.",
      title: "Guardian Control View",
      dashboardBadge: "Guardian Dashboard",
      subtitle: "Managing Aarav Sharma's Young Saver Account",
      guardianName: "Guardian: Meena Sharma (Mother)",
      aaravBalance: "Aarav's Account Balance",
      dailyLimitSetting: "Aarav's Daily Spending Limit",
      perDay: "per day",
      wantsToPay: "{name} wants to pay {amount}",
      pendingRequestsTitle: "Pending Approval Requests",
      noPendingRequests: "No pending approval requests from Aarav right now.",
      approveBtn: "Approve Payment",
      declineBtn: "Decline Payment",
      approvedMsg: "Payment of {amount} approved! Money transferred.",
      declinedMsg: "Payment request declined.",
      aaravActivityTitle: "Aarav's Recent Activity"
    }
,
    
    // Voice Assistant Controls & Commands
    voice: {
      btnVoice: "Voice Assistant",
      btnVoicePay: "Speak to Pay",
      assistantTitle: "Saral Voice Assistant",
      listening: "Listening...",
      listeningHelp: "Speak now in English or Hindi",
      takeYourTime: "Take your time, speak naturally...",
      doneSpeaking: "I'm Done Speaking ➔",
      hearingYou: "Hearing: ",
      tapToStop: "Tap to stop listening",
      tapToSpeak: "Tap microphone to speak",
      speakPrompt: "Say a command, e.g. \"Check my balance\" or \"Send 500 rupees to Ramesh\"",
      notSupported: "Speech recognition is not supported in this browser.",
      pinWarningTitle: "Never speak your PIN or OTP aloud!",
      pinWarningDesc: "For your security, PIN and OTP must never be spoken. Always type them secretly on the keypad or use fingerprint.",
      pinWarningAcknowledge: "Understood, I will type it",
      suggestionsTitle: "I didn't quite catch that. Try saying:",
      didYouMean: "Did you mean:",
      suggestionBalance: "Check my balance",
      suggestionPay: "Send 500 rupees to Ramesh",
      suggestionHistory: "Show my last payments",
      suggestionStatement: "Download last month's statement",
      suggestionCard: "Block my card",
      understoodBalance: "Your available balance is {amount}.",
      understoodBalanceQuestion: "Your available balance is {amount}. Show it on the screen?",
      understoodPayQuestion: "Send {amount} to {name}?",
      understoodHistory: "Opening your recent transactions.",
      understoodStatement: "Opening your account statement.",
      understoodCardBlock: "Opening card blocking options.",
      confirmAction: "Yes, Review Details",
      cancelAction: "Cancel",
      reviewNotice: "Details filled. Voice assistant never completes payments. Please review on screen and enter your PIN to confirm.",
      testPhrasesTitle: "Or tap a sample phrase to test:"
    }
  };
});
