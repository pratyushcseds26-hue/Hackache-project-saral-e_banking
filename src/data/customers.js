(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralCustomers = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return [
    {
      id: "shankar",
      nameEn: "Shankar Narayan",
      nameHi: "शंकर नारायण",
      nameTa: "சங்கர் நாராயணன்",
      age: 68,
      roleEn: "Retired Pensioner (Uses Simple Mode in Hindi)",
      roleHi: "सेवानिवृत्त पेंशनभोगी (हिंदी में सरल मोड)",
      roleTa: "ஓய்வூதியதாரர் (எளிய முறையில் தமிழ் / இந்தியில்)",
      avatarText: "SN",
      accountNumberRaw: "5010 0482 4821",
      accountNumberMasked: "XXXX XXXX 4821",
      upiId: "shankar.narayan@saral",
      ifsc: "JSBK0001089",
      branchEn: "Civil Lines, Prayagraj",
      branchHi: "सिविल लाइंस, प्रयागराज",
      branchTa: "சிவில் லைன்ஸ், பிரயாக்ராஜ்",
      phone: "+91 94150 99821",
      email: "shankar.n68@email.com",
      addressEn: "Flat 4B, Shanti Kunj, Civil Lines, Prayagraj 211001",
      addressHi: "फ्लैट 4B, शांति कुंज, सिविल लाइंस, प्रयागराज 211001",
      addressTa: "பிளாட் 4B, சாந்தி குஞ்ச், சிவில் லைன்ஸ், பிரயாக்ராஜ் 211001",
      nomineeEn: "Ramesh Narayan (Son)",
      nomineeHi: "रमेश नारायण (सुपुत्र)",
      nomineeTa: "ரமேஷ் நாராயணன் (மகன்)",
      defaultMode: "simple",
      defaultLang: "hi",
      openingBalancePaise: 2500000, // ₹25,000.00 opening balance 3 months ago
      onHoldPaise: 200000, // ₹2,000 on hold for pension tax review
      cardBlocked: false,
      upiBlocked: false,
      dailyLimitPaise: 2500000, // ₹25,000
      guardian: null,
      savingsGoals: []
    },
    {
      id: "priya",
      nameEn: "Priya Sharma",
      nameHi: "प्रिया शर्मा",
      nameTa: "பிரியா ஷர்மா",
      age: 32,
      roleEn: "Working Professional (Standard Mode)",
      roleHi: "वेतनभोगी पेशेवर (मानक मोड)",
      roleTa: "பணியாற்றும் நபர் (வழக்கமான முறை)",
      avatarText: "PS",
      accountNumberRaw: "5010 0921 7314",
      accountNumberMasked: "XXXX XXXX 7314",
      upiId: "priya.sharma@saral",
      ifsc: "JSBK0002140",
      branchEn: "Koramangala 4th Block, Bengaluru",
      branchHi: "कोरमंगला चौथा ब्लॉक, बेंगलुरु",
      branchTa: "கோரமங்களா 4வது பிளாக், பெங்களூரு",
      phone: "+91 98860 12345",
      email: "priya.sharma.tech@email.com",
      addressEn: "302, Green Glen Heights, Bellandur, Bengaluru 560103",
      addressHi: "302, ग्रीन ग्लेन हाइट्स, बेलंदूर, बेंगलुरु 560103",
      addressTa: "302, கிரீன் கிளென் ஹைட்ஸ், பெள்ளந்தூர், பெங்களூரு 560103",
      nomineeEn: "Sunita Sharma (Mother)",
      nomineeHi: "सुनीता शर्मा (माता जी)",
      nomineeTa: "சுனிதா ஷர்மா (தாய்)",
      defaultMode: "standard",
      defaultLang: "en",
      openingBalancePaise: 4000000, // ₹40,000.00 opening balance 3 months ago
      onHoldPaise: 500000, // ₹5,000 security deposit hold for rental auto-debit
      cardBlocked: false,
      upiBlocked: false,
      dailyLimitPaise: 5000000, // ₹50,000
      guardian: null,
      savingsGoals: []
    },
    {
      id: "aarav",
      nameEn: "Aarav Sharma",
      nameHi: "आरव शर्मा",
      nameTa: "ஆரவ் ஷர்மா",
      age: 15,
      roleEn: "Young Saver (Under-18 with Guardian Meena)",
      roleHi: "युवा बचतकर्ता (18 वर्ष से कम, अभिभावक मीना के साथ)",
      roleTa: "இளம் சேமிப்பாளர் (18 வயதுக்குட்பட்டவர், தாய் மீனாவுடன்)",
      avatarText: "AS",
      accountNumberRaw: "5010 0638 1902",
      accountNumberMasked: "XXXX XXXX 1902",
      upiId: "aarav.junior@saral",
      ifsc: "JSBK0002140",
      branchEn: "Koramangala 4th Block, Bengaluru",
      branchHi: "कोरमंगला चौथा ब्लॉक, बेंगलुरु",
      branchTa: "கோரமங்களா 4வது பிளாக், பெங்களூரு",
      phone: "+91 98860 99001",
      email: "aarav.school@email.com",
      addressEn: "302, Green Glen Heights, Bellandur, Bengaluru 560103",
      addressHi: "302, ग्रीन ग्लेन हाइट्स, बेलंदूर, बेंगलुरु 560103",
      addressTa: "302, கிரீன் கிளென் ஹைட்ஸ், பெள்ளந்தூர், பெங்களூரு 560103",
      nomineeEn: "Meena Sharma (Mother)",
      nomineeHi: "मीना शर्मा (माता जी)",
      nomineeTa: "மீனா ஷர்மா (தாய்)",
      defaultMode: "young_saver",
      defaultLang: "en",
      openingBalancePaise: 200000, // ₹2,000.00 opening balance 3 months ago
      onHoldPaise: 0,
      cardBlocked: false,
      upiBlocked: false,
      dailyLimitPaise: 100000, // ₹1,000 daily limit set by guardian Meena
      guardian: {
        name: "Meena Sharma",
        relationEn: "Mother",
        relationHi: "माता जी",
        relationTa: "தாய்",
        phone: "+91 98860 55443",
        email: "meena.sharma@email.com",
        consentedAt: "2026-08-01"
      },
      savingsGoals: [
        {
          id: "g1",
          titleEn: "Robotics Kit for School",
          titleHi: "स्कूल के लिए रोबोटिक्स किट",
          titleTa: "பள்ளி ரோபோட்டிக்ஸ் கிட்",
          targetPaise: 300000, // ₹3,000
          currentPaise: 220000, // ₹2,200
          category: "Education"
        },
        {
          id: "g2",
          titleEn: "Bicycle Maintenance",
          titleHi: "साइकिल सर्विसिंग",
          titleTa: "மிதிவண்டி பழுதுபார்த்தல்",
          targetPaise: 120000, // ₹1,200
          currentPaise: 120000, // ₹1,200
          category: "Sports"
        }
      ]
    }
  ];
});
