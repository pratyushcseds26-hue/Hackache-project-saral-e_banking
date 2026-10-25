(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralPayees = data;
})(typeof self !== 'undefined' ? self : this, function() {
  const now = new Date();
  const twoHoursAgo = new Date(now.getTime() - 2 * 60 * 60 * 1000).toISOString();
  const twentyFiveHoursAgo = new Date(now.getTime() - 25 * 60 * 60 * 1000).toISOString();
  const tomorrow = new Date(now.getTime() + 22 * 60 * 60 * 1000).toISOString();

  return {
    initialPayees: [
      {
        id: "p_shankar_1",
        customerId: "shankar",
        name: "Ramesh Kumar (Vegetables)",
        registeredName: "R*** Kumar",
        type: "upi",
        identifier: "ramesh.veg@sbi",
        bankName: "State Bank of India",
        isNew: false,
        addedAt: twentyFiveHoursAgo,
        coolingUntil: null
      },
      {
        id: "p_shankar_2",
        customerId: "shankar",
        name: "Apollo Pharmacy Civil Lines",
        registeredName: "A*** Enterprises",
        type: "upi",
        identifier: "apollo.prayag@hdfc",
        bankName: "HDFC Bank",
        isNew: false,
        addedAt: twentyFiveHoursAgo,
        coolingUntil: null
      },
      {
        id: "p_shankar_3",
        customerId: "shankar",
        name: "Suresh Electrician",
        registeredName: "S*** Kumar",
        type: "mobile",
        identifier: "+91 94151 22334",
        bankName: "Punjab National Bank",
        isNew: true, // New payee to demonstrate 24-hr ₹10,000 cooling limit
        addedAt: twoHoursAgo,
        coolingUntil: tomorrow
      },
      {
        id: "p_priya_1",
        customerId: "priya",
        name: "Anand Builders (House Rent)",
        registeredName: "A*** Real Estate Pvt Ltd",
        type: "bank",
        identifier: "5010 0982 1192 | ICIC0000102",
        accountNumber: "501009821192",
        ifsc: "ICIC0000102",
        bankName: "ICICI Bank",
        isNew: false,
        addedAt: twentyFiveHoursAgo,
        coolingUntil: null
      },
      {
        id: "p_priya_2",
        customerId: "priya",
        name: "Shankar Narayan (Father)",
        registeredName: "S*** Narayan",
        type: "upi",
        identifier: "shankar.narayan@saral",
        bankName: "Janata Saral Bank",
        isNew: false,
        addedAt: twentyFiveHoursAgo,
        coolingUntil: null
      },
      {
        id: "p_priya_3",
        customerId: "priya",
        name: "Deepak Freelance Designer",
        registeredName: "D*** Verma",
        type: "upi",
        identifier: "deepak.ui@icici",
        bankName: "ICICI Bank",
        isNew: true, // New payee!
        addedAt: twoHoursAgo,
        coolingUntil: tomorrow
      },
      {
        id: "p_aarav_1",
        customerId: "aarav",
        name: "Sapna Book House",
        registeredName: "S*** Educational Store",
        type: "upi",
        identifier: "sapna.books@sbi",
        bankName: "State Bank of India",
        isNew: false,
        addedAt: twentyFiveHoursAgo,
        coolingUntil: null
      },
      {
        id: "p_aarav_2",
        customerId: "aarav",
        name: "School Canteen Counter",
        registeredName: "V*** Caterers",
        type: "upi",
        identifier: "canteen.school@icici",
        bankName: "ICICI Bank",
        isNew: false,
        addedAt: twentyFiveHoursAgo,
        coolingUntil: null
      }
    ],
    samplePaymentRequests: [
      {
        id: "req_1",
        forCustomerId: "shankar",
        requesterName: "Ravi Verma",
        registeredName: "R*** Verma",
        amountPaise: 200000, // ₹2,000
        requesterUpi: "ravi.verma92@sbi",
        noteEn: "Claim your electricity subsidy refund",
        noteHi: "बिजली सब्सिडी रिफंड प्राप्त करने के लिए",
        noteTa: "மின்சார மானியத் தொகையைப் பெற",
        isSuspectScam: true, // This is a classic scam request
        requestedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString()
      },
      {
        id: "req_2",
        forCustomerId: "priya",
        requesterName: "Anand Builders",
        registeredName: "A*** Real Estate Pvt Ltd",
        amountPaise: 125000, // ₹1,250
        requesterUpi: "anand.rent@icici",
        noteEn: "Society water tanker maintenance share",
        noteHi: "सोसायटी वाटर टैंकर रखरखाव हिस्सा",
        noteTa: "குடியிருப்பு தண்ணீர் லாரி பராமரிப்பு பங்கு",
        isSuspectScam: false,
        requestedAt: new Date(Date.now() - 60 * 60 * 1000).toISOString()
      }
    ]
  };
});
