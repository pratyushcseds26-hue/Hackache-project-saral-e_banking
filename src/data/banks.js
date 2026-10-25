(function(root, factory) {
  const data = factory();
  if (typeof module === 'object' && module.exports) {
    module.exports = data;
  }
  root.SaralBanks = data;
})(typeof self !== 'undefined' ? self : this, function() {
  return [
    {
      id: "janata_saral",
      nameEn: "Janata Saral Bank",
      nameHi: "जनता सरल बैंक",
      nameTa: "ஜனதா சரள் வங்கி",
      taglineEn: "Banking made simple for everyone",
      taglineHi: "सबके लिए सरल और सुरक्षित बैंकिंग",
      taglineTa: "அனைவருக்கும் எளிய மற்றும் பாதுகாப்பான வங்கிச் சேவை",
      primaryColor: "#0f766e",
      primaryHover: "#115e59",
      accentColor: "#0d9488",
      bgColor: "#f0fdfa",
      headerBg: "#0f766e",
      cardBg: "#ffffff",
      logoSvg: `<svg viewBox="0 0 40 40" class="w-8 h-8 fill-current" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <path d="M20 8 L29 16 L29 30 L11 30 L11 16 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="20" cy="22" r="3.5" fill="currentColor"/>
      </svg>`
    },
    {
      id: "suraksha",
      nameEn: "Suraksha Standard Bank",
      nameHi: "सुरक्षा मानक बैंक",
      nameTa: "சுரக்ஷா தரநிலை வங்கி",
      taglineEn: "Safety and confidence in every step",
      taglineHi: "हर कदम पर सुरक्षा और विश्वास",
      taglineTa: "ஒவ்வொரு படியிலும் பாதுகாப்பு மற்றும் நம்பிக்கை",
      primaryColor: "#1e40af",
      primaryHover: "#1e3a8a",
      accentColor: "#2563eb",
      bgColor: "#eff6ff",
      headerBg: "#1e40af",
      cardBg: "#ffffff",
      logoSvg: `<svg viewBox="0 0 40 40" class="w-8 h-8 fill-current" aria-hidden="true">
        <path d="M20 5 L33 11 C33 24 20 35 20 35 C20 35 7 24 7 11 Z" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/>
        <path d="M14 19 L18 23 L26 15" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    },
    {
      id: "pragati",
      nameEn: "Pragati Sahyog Bank",
      nameHi: "प्रगति सहयोग बैंक",
      nameTa: "பிரகதி கூட்டுறவு வங்கி",
      taglineEn: "Growing together with transparent trust",
      taglineHi: "पारदर्शी विश्वास के साथ निरंतर प्रगति",
      taglineTa: "வெளிப்படையான நம்பிக்கையுடன் தொடர் வளர்ச்சி",
      primaryColor: "#9f1239",
      primaryHover: "#881337",
      accentColor: "#be123c",
      bgColor: "#fff1f2",
      headerBg: "#9f1239",
      cardBg: "#ffffff",
      logoSvg: `<svg viewBox="0 0 40 40" class="w-8 h-8 fill-current" aria-hidden="true">
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-width="2.5"/>
        <path d="M12 28 L20 12 L28 28" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15 22 L25 22" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
      </svg>`
    }
  ];
});
