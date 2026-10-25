/**
 * Saral Banking - Complete Single-Page Application Logic
 * Implements The Saral Standard:
 * 1. Constant 5 tabs at bottom
 * 2. Same place for same thing
 * 3. One plain word per idea
 * 4. 3-step confirmation (Fill -> Review -> PIN -> Receipt)
 * 5. Bank switcher with zero layout shift
 */

(function () {
  'use strict';

  // State Management
  const STORAGE_KEYS = {
    CUSTOMERS: 'saral_customers',
    TRANSACTIONS: 'saral_transactions',
    PAYEES: 'saral_payees',
    PAYMENT_REQUESTS: 'saral_payment_requests',
    SERVICE_REQUESTS: 'saral_service_requests',
    CURRENT_CUSTOMER_ID: 'saral_current_customer_id',
    ACTIVE_BANK_ID: 'saral_active_bank_id',
    LANG: 'saral_lang',
    MODE: 'saral_mode',
    TEXT_SIZE: 'saral_text_size',
    HIGH_CONTRAST: 'saral_high_contrast',
    READ_ALOUD: 'saral_read_aloud',
    HIDE_BALANCE_DEFAULT: 'saral_hide_balance_default',
    IS_AUTH: 'saral_is_auth',
    PENDING_APPROVALS: 'saral_pending_approvals'
  };

  // Root App State Object
  const state = {
    customers: [],
    transactions: [],
    payees: [],
    paymentRequests: [],
    serviceRequests: [],
    currentCustomerId: 'shankar', // Default to Shankar (68, Hindi, Simple Mode)
    activeBankId: 'janata_saral',
    lang: 'hi', // Default to Hindi as Shankar is primary persona
    mode: 'simple', // Default to Simple Mode
    textSize: 'large', // Default to Large for senior readability
    highContrast: false,
    readAloud: true,
    hideBalanceDefault: false,
    balanceVisible: true,
    isAuthenticated: false,
    isGuardianMode: false, // When logged in as Meena (Guardian of Aarav)
    activeTab: 'home', // 'home' | 'pay' | 'history' | 'services' | 'help'
    activeSubScreen: null, // null | 'payees' | 'statements' | 'learn' | 'settings' | 'the_standard' | 'guardian' | 'account_details'
    voiceModal: null, // null | { status: 'listening'|'understood'|'pin_warning'|'suggestions', transcript, message, ... }
    inactivityCountdown: 120, // 2 minutes
    inactivityTimerId: null,
    
    // Pay Flow State
    payFlow: {
      step: 1, // 1: Who, 2: Amount/Note, 3: Safety/Sure, 4: Review, 5: PIN, 6: Receipt
      method: 'upi', // 'upi' | 'mobile' | 'bank' | 'payee' | 'qr'
      recipientIdentifier: '',
      recipientName: '',
      recipientRegisteredName: '',
      recipientBank: '',
      amountPaise: 0,
      note: '',
      isNewPayee: false,
      completedTx: null,
      errorMsg: '',
      approvalPending: false
    },

    // Transaction Details Modal
    viewingTx: null,
    
    // Glossary Tooltip Modal
    activeGlossaryTerm: null,

    // Safety Alert Modal
    scamWarningOpen: false,

    // Help Chat Messages & State
    chatMessages: [],
    chatInput: '',
    aiTyping: false
  };

  // Synchronous pure-JS SHA-256 implementation (ensures PIN is stored and verified hashed)
  function sha256(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    let i, j;
    let result = '';
    const words = [];
    const asciiBitLength = (ascii || '').length * 8;
    
    let hash = [
      0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
      0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19
    ];

    const k = [
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
      0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
      0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
      0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
      0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
      0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
      0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
    ];

    for (i = 0; i < (ascii || '').length; i++) {
      const code = (ascii || '').charCodeAt(i);
      words[i >> 2] |= (code & 0xff) << (24 - (i % 4) * 8);
    }
    words[asciiBitLength >> 5] |= 0x80 << (24 - (asciiBitLength % 32));
    words[(((asciiBitLength + 64) >> 9) << 4) + 15] = asciiBitLength;

    for (i = 0; i < words.length; i += 16) {
      const w = [];
      for (j = 0; j < 16; j++) {
        w[j] = words[i + j] || 0;
      }
      for (j = 16; j < 64; j++) {
        const w15 = w[j - 15];
        const s0 = rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3);
        const w2 = w[j - 2];
        const s1 = rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10);
        w[j] = (w[j - 16] + s0 + w[j - 7] + s1) | 0;
      }
      let a = hash[0], b = hash[1], c = hash[2], d = hash[3];
      let e = hash[4], f = hash[5], g = hash[6], h = hash[7];

      for (j = 0; j < 64; j++) {
        const s1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
        const ch = (e & f) ^ ((~e) & g);
        const temp1 = (h + s1 + ch + k[j] + w[j]) | 0;
        const s0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
        const maj = (a & b) ^ (a & c) ^ (b & c);
        const temp2 = (s0 + maj) | 0;

        h = g;
        g = f;
        f = e;
        e = (d + temp1) | 0;
        d = c;
        c = b;
        b = a;
        a = (temp1 + temp2) | 0;
      }

      hash[0] = (hash[0] + a) | 0;
      hash[1] = (hash[1] + b) | 0;
      hash[2] = (hash[2] + c) | 0;
      hash[3] = (hash[3] + d) | 0;
      hash[4] = (hash[4] + e) | 0;
      hash[5] = (hash[5] + f) | 0;
      hash[6] = (hash[6] + g) | 0;
      hash[7] = (hash[7] + h) | 0;
    }

    for (i = 0; i < 8; i++) {
      for (j = 3; j >= 0; j--) {
        const byte = (hash[i] >>> (j * 8)) & 0xff;
        result += (byte < 16 ? '0' : '') + byte.toString(16);
      }
    }
    return result;
  }

  // Helper: Format Paise as Indian Currency String
  function formatINR(paise) {
    const rupees = (paise || 0) / 100;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(rupees);
  }

  // Locale helper
  function getLocale() {
    if (state.lang === 'ta') return 'ta-IN';
    if (state.lang === 'hi') return 'hi-IN';
    return 'en-IN';
  }

  // Localized field helper (supports fieldTa, fieldHi, fieldEn)
  function getLocalized(obj, field) {
    if (!obj) return '';
    if (state.lang === 'ta') {
      const taVal = obj[field + 'Ta'];
      if (taVal !== undefined && taVal !== null && taVal !== '') return taVal;
    } else if (state.lang === 'hi') {
      const hiVal = obj[field + 'Hi'];
      if (hiVal !== undefined && hiVal !== null && hiVal !== '') return hiVal;
    }
    const enVal = obj[field + 'En'];
    if (enVal !== undefined && enVal !== null && enVal !== '') return enVal;
    return obj[field] !== undefined ? obj[field] : '';
  }

  // Number to Indian Words Helper across en, hi, ta
  function inrToWords(paise) {
    if (state.lang === 'ta') {
      return (window.SaralAudio && window.SaralAudio.inrToWordsTa) ? window.SaralAudio.inrToWordsTa(paise) : '';
    }
    if (state.lang === 'hi') {
      return (window.SaralAudio && window.SaralAudio.inrToWordsHi) ? window.SaralAudio.inrToWordsHi(paise) : '';
    }
    return (window.SaralAudio && window.SaralAudio.inrToWordsEn) ? window.SaralAudio.inrToWordsEn(paise) : '';
  }

  // Get current language dictionary
  function t(keyPath, params) {
    let langObj = window.SaralI18nEn;
    if (state.lang === 'ta') langObj = window.SaralI18nTa;
    else if (state.lang === 'hi') langObj = window.SaralI18nHi;
    const parts = keyPath.split('.');
    let val = langObj;
    for (const p of parts) {
      if (val && typeof val === 'object' && p in val) {
        val = val[p];
      } else {
        // Fallback to english
        let fallbackVal = window.SaralI18nEn;
        for (const fp of parts) {
          if (fallbackVal && typeof fallbackVal === 'object' && fp in fallbackVal) {
            fallbackVal = fallbackVal[fp];
          } else {
            return keyPath;
          }
        }
        val = fallbackVal;
        break;
      }
    }
    if (typeof val === 'string' && params) {
      let str = val;
      for (const [k, v] of Object.entries(params)) {
        str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
      return str;
    }
    return val || keyPath;
  }

  // Speech Synthesis & Voice Detection for Tamil, Hindi, English
  let availableVoices = [];
  function updateVoices() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      availableVoices = window.speechSynthesis.getVoices() || [];
    }
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    updateVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      updateVoices();
      if (state.isAuthenticated && state.activeSubScreen === 'settings') {
        renderApp();
      }
    };
  }

  function hasVoiceForLang(lang) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return false;
    if (availableVoices.length === 0) {
      availableVoices = window.speechSynthesis.getVoices() || [];
    }
    const target = lang === 'hi' ? 'hi' : lang === 'ta' ? 'ta' : 'en';
    return availableVoices.some(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(target));
  }

  function getVoiceForLang(lang) {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    if (availableVoices.length === 0) {
      availableVoices = window.speechSynthesis.getVoices() || [];
    }
    const target = lang === 'hi' ? 'hi' : lang === 'ta' ? 'ta' : 'en';
    const exact = availableVoices.find(v => v.lang && v.lang.toLowerCase().replace('_', '-') === `${target}-in`);
    if (exact) return exact;
    return availableVoices.find(v => v.lang && v.lang.toLowerCase().replace('_', '-').startsWith(target)) || null;
  }

  // Speak Text Aloud using Web Speech API
  function speak(text) {
    if (!state.readAloud || !hasVoiceForLang(state.lang)) return;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        const voice = getVoiceForLang(state.lang);
        if (voice) {
          utterance.voice = voice;
        }
        utterance.lang = getLocale();
        utterance.rate = 0.9; // Calm and clear pace
        window.speechSynthesis.speak(utterance);
      } catch (e) {
        console.warn("Speech synthesis unavailable:", e);
      }
    }
  }

  // Initialize and Load Data from LocalStorage or Defaults
  function initData() {
    try {
      const storedCust = localStorage.getItem(STORAGE_KEYS.CUSTOMERS);
      state.customers = storedCust ? JSON.parse(storedCust) : JSON.parse(JSON.stringify(window.SaralCustomers));

      const storedTx = localStorage.getItem(STORAGE_KEYS.TRANSACTIONS);
      state.transactions = storedTx ? JSON.parse(storedTx) : JSON.parse(JSON.stringify(window.SaralTransactions));

      const storedPayees = localStorage.getItem(STORAGE_KEYS.PAYEES);
      state.payees = storedPayees ? JSON.parse(storedPayees) : JSON.parse(JSON.stringify(window.SaralPayees.initialPayees));

      const storedRequests = localStorage.getItem(STORAGE_KEYS.PAYMENT_REQUESTS);
      state.paymentRequests = storedRequests ? JSON.parse(storedRequests) : JSON.parse(JSON.stringify(window.SaralPayees.samplePaymentRequests));

      const storedServiceReqs = localStorage.getItem(STORAGE_KEYS.SERVICE_REQUESTS);
      state.serviceRequests = storedServiceReqs ? JSON.parse(storedServiceReqs) : [
        {
          id: 'sr_1',
          type: 'cheque_book',
          titleEn: 'Cheque Book (20 Leaves)',
          titleHi: 'चेक बुक (20 पत्ते)',
          status: 'in_progress', // requested | in_progress | completed
          requestedAt: '2026-10-18T10:30:00Z',
          etaEn: 'Delivering by 25 Oct 2026',
          etaHi: '25 अक्टूबर 2026 तक डिलीवरी'
        }
      ];

      const storedPending = localStorage.getItem(STORAGE_KEYS.PENDING_APPROVALS);
      state.pendingApprovals = storedPending ? JSON.parse(storedPending) : [];

      // Preferences
      state.currentCustomerId = localStorage.getItem(STORAGE_KEYS.CURRENT_CUSTOMER_ID) || 'shankar';
      state.activeBankId = localStorage.getItem(STORAGE_KEYS.ACTIVE_BANK_ID) || 'janata_saral';
      state.lang = localStorage.getItem(STORAGE_KEYS.LANG) || 'hi';
      state.mode = localStorage.getItem(STORAGE_KEYS.MODE) || 'simple';
      state.textSize = localStorage.getItem(STORAGE_KEYS.TEXT_SIZE) || 'large';
      state.highContrast = localStorage.getItem(STORAGE_KEYS.HIGH_CONTRAST) === 'true';
      state.readAloud = localStorage.getItem(STORAGE_KEYS.READ_ALOUD) !== 'false';
      state.hideBalanceDefault = localStorage.getItem(STORAGE_KEYS.HIDE_BALANCE_DEFAULT) === 'true';
      state.balanceVisible = !state.hideBalanceDefault;
      state.isAuthenticated = false; // Always require login on fresh launch

      // Apply initial customer preferences
      const curCustomer = getCurrentCustomer();
      if (curCustomer && !localStorage.getItem(STORAGE_KEYS.MODE)) {
        state.mode = curCustomer.defaultMode;
        state.lang = curCustomer.defaultLang;
      }
    } catch (err) {
      console.error("Initialization error, falling back to defaults:", err);
      resetDemoData();
    }
  }

  function saveAll() {
    try {
      localStorage.setItem(STORAGE_KEYS.CUSTOMERS, JSON.stringify(state.customers));
      localStorage.setItem(STORAGE_KEYS.TRANSACTIONS, JSON.stringify(state.transactions));
      localStorage.setItem(STORAGE_KEYS.PAYEES, JSON.stringify(state.payees));
      localStorage.setItem(STORAGE_KEYS.PAYMENT_REQUESTS, JSON.stringify(state.paymentRequests));
      localStorage.setItem(STORAGE_KEYS.SERVICE_REQUESTS, JSON.stringify(state.serviceRequests));
      localStorage.setItem(STORAGE_KEYS.PENDING_APPROVALS, JSON.stringify(state.pendingApprovals));
      localStorage.setItem(STORAGE_KEYS.CURRENT_CUSTOMER_ID, state.currentCustomerId);
      localStorage.setItem(STORAGE_KEYS.ACTIVE_BANK_ID, state.activeBankId);
      localStorage.setItem(STORAGE_KEYS.LANG, state.lang);
      localStorage.setItem(STORAGE_KEYS.MODE, state.mode);
      localStorage.setItem(STORAGE_KEYS.TEXT_SIZE, state.textSize);
      localStorage.setItem(STORAGE_KEYS.HIGH_CONTRAST, state.highContrast.toString());
      localStorage.setItem(STORAGE_KEYS.READ_ALOUD, state.readAloud.toString());
      localStorage.setItem(STORAGE_KEYS.HIDE_BALANCE_DEFAULT, state.hideBalanceDefault.toString());
    } catch (e) {
      console.warn("Storage save failed:", e);
    }
  }

  function resetDemoData() {
    localStorage.clear();
    state.customers = JSON.parse(JSON.stringify(window.SaralCustomers));
    state.transactions = JSON.parse(JSON.stringify(window.SaralTransactions));
    state.payees = JSON.parse(JSON.stringify(window.SaralPayees.initialPayees));
    state.paymentRequests = JSON.parse(JSON.stringify(window.SaralPayees.samplePaymentRequests));
    state.serviceRequests = [];
    state.pendingApprovals = [];
    state.currentCustomerId = 'shankar';
    state.activeBankId = 'janata_saral';
    state.lang = 'hi';
    state.mode = 'simple';
    state.textSize = 'large';
    state.highContrast = false;
    state.guardianConsentAccepted = false;
    localStorage.removeItem('saral_consent_aarav');
    state.readAloud = true;
    state.hideBalanceDefault = false;
    state.balanceVisible = true;
    state.isAuthenticated = false;
    state.activeTab = 'home';
    state.activeSubScreen = null;
    saveAll();
    renderApp();
  }

  function getCurrentCustomer() {
    return state.customers.find(c => c.id === state.currentCustomerId) || state.customers[0];
  }

  function getActiveBank() {
    return window.SaralBanks.find(b => b.id === state.activeBankId) || window.SaralBanks[0];
  }

  // Exact Balance Formula: Opening Balance + sum(credits) - sum(debits)
  function computeCustomerBalances(customerId) {
    const cust = state.customers.find(c => c.id === customerId);
    if (!cust) return { totalPaise: 0, availablePaise: 0, onHoldPaise: 0, openingPaise: 0 };
    
    const opening = cust.openingBalancePaise || 0;
    const custTxs = state.transactions.filter(t => t.customerId === customerId);
    
    let netChange = 0;
    for (const tx of custTxs) {
      if (tx.type === 'credit') {
        netChange += tx.amountPaise;
      } else if (tx.type === 'debit') {
        netChange -= tx.amountPaise;
      }
    }

    const totalPaise = opening + netChange;
    const onHoldPaise = cust.onHoldPaise || 0;
    const availablePaise = Math.max(0, totalPaise - onHoldPaise);

    return {
      openingPaise: opening,
      totalPaise: totalPaise,
      availablePaise: availablePaise,
      onHoldPaise: onHoldPaise
    };
  }

  // Inactivity Auto-Lock Timer (120 seconds)
  function resetInactivityTimer() {
    state.inactivityCountdown = 120;
    if (state.inactivityTimerId) {
      clearInterval(state.inactivityTimerId);
    }
    if (!state.isAuthenticated) return;

    state.inactivityTimerId = setInterval(() => {
      state.inactivityCountdown--;
      if (state.inactivityCountdown <= 0) {
        clearInterval(state.inactivityTimerId);
        state.isAuthenticated = false;
        state.payFlow.step = 1;
        state.activeSubScreen = null;
        renderApp();
      }
    }, 1000);
  }

  // Register user interactions to keep session alive
  ['click', 'touchstart', 'keydown'].forEach(evt => {
    window.addEventListener(evt, () => {
      if (state.isAuthenticated) {
        state.inactivityCountdown = 120;
      }
    }, { passive: true });
  });

  // Apply Theme & Font Scale to Root Element
  function applyTheme() {
    const root = document.documentElement;
    const bank = getActiveBank();

    // Set Bank Colors
    root.style.setProperty('--brand-primary', bank.primaryColor);
    root.style.setProperty('--brand-hover', bank.primaryHover);
    root.style.setProperty('--brand-accent', bank.accentColor);
    root.style.setProperty('--brand-bg', state.highContrast ? '#000000' : bank.bgColor);
    root.style.setProperty('--brand-header', bank.headerBg);

    // Apply High Contrast
    if (state.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Apply Text Size Scaling
    document.body.classList.remove('font-scale-normal', 'font-scale-large', 'font-scale-xlarge');
    if (state.textSize === 'large' || state.mode === 'simple') {
      document.body.classList.add('font-scale-large');
    } else if (state.textSize === 'xlarge') {
      document.body.classList.add('font-scale-xlarge');
    } else {
      document.body.classList.add('font-scale-normal');
    }
  }

  // Read Aloud Money Pronunciation
  function speakMoney(paise, prefixText) {
    if (!state.readAloud || !hasVoiceForLang(state.lang)) return;
    const inWords = inrToWords(paise);
    const fullText = (prefixText ? prefixText + ": " : "") + inWords;
    speak(fullText);
  }

  // ==========================================
  // VOICE CONTROL & SPEECH RECOGNITION ENGINE
  // ==========================================
  function hasSpeechRecognition() {
    return typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window);
  }

  let activeSpeechRecognition = null;
  let voiceSilenceTimer = null;
  let voiceRestartTimer = null;
  let voiceAccumulatedTranscript = '';
  let isListeningExplicitly = false;

  function clearVoiceTimers() {
    if (voiceSilenceTimer) {
      clearTimeout(voiceSilenceTimer);
      voiceSilenceTimer = null;
    }
    if (voiceRestartTimer) {
      clearTimeout(voiceRestartTimer);
      voiceRestartTimer = null;
    }
  }

  function setupSpeechInstance() {
    if (!hasSpeechRecognition() || !isListeningExplicitly) return;

    try {
      if (activeSpeechRecognition) {
        try { activeSpeechRecognition.abort(); } catch (e) {}
        activeSpeechRecognition = null;
      }

      const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
      const rec = new SpeechRec();
      rec.continuous = true;
      rec.interimResults = true;
      rec.maxAlternatives = 1;
      rec.lang = state.lang === 'hi' ? 'hi-IN' : state.lang === 'ta' ? 'ta-IN' : 'en-IN';

      rec.onresult = (event) => {
        let interimText = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const res = event.results[i];
          if (res.isFinal) {
            voiceAccumulatedTranscript += ' ' + res[0].transcript;
          } else {
            interimText += res[0].transcript;
          }
        }

        const combined = (voiceAccumulatedTranscript + ' ' + interimText).trim();
        if (state.voiceModal && state.voiceModal.status === 'listening') {
          state.voiceModal.transcript = voiceAccumulatedTranscript.trim();
          state.voiceModal.interim = interimText.trim();

          const transcriptEl = document.getElementById('voice-live-transcript');
          if (transcriptEl) {
            if (combined) {
              transcriptEl.textContent = `"${combined}"`;
              transcriptEl.className = 'text-xs font-bold text-teal-950';
            } else {
              transcriptEl.textContent = t('voice.takeYourTime');
              transcriptEl.className = 'text-xs text-slate-400 italic';
            }
          }
        }

        // Generous 3-second debounce timer after speech pause
        if (voiceSilenceTimer) clearTimeout(voiceSilenceTimer);
        voiceSilenceTimer = setTimeout(() => {
          const final = (voiceAccumulatedTranscript + ' ' + interimText).trim();
          if (final.length > 1 && isListeningExplicitly && state.voiceModal && state.voiceModal.status === 'listening') {
            handleVoiceTranscript(final);
          }
        }, 3000);
      };

      rec.onerror = (event) => {
        console.warn("Speech recognition notice:", event.error);
        // Do NOT close or switch to suggestions! Stay in listening mode!
      };

      rec.onend = () => {
        // If the browser ends the session due to silence, pause, or OS idle,
        // quietly restart listening as long as the user hasn't closed the modal!
        if (isListeningExplicitly && state.voiceModal && state.voiceModal.status === 'listening') {
          if (voiceRestartTimer) clearTimeout(voiceRestartTimer);
          voiceRestartTimer = setTimeout(() => {
            if (isListeningExplicitly && state.voiceModal && state.voiceModal.status === 'listening') {
              setupSpeechInstance();
            }
          }, 300);
        }
      };

      rec.start();
      activeSpeechRecognition = rec;
    } catch (err) {
      console.warn("Could not start speech recognition:", err);
    }
  }

  function startVoiceListening() {
    stopVoiceListening();
    clearVoiceTimers();

    isListeningExplicitly = true;
    voiceAccumulatedTranscript = '';

    state.voiceModal = {
      status: 'listening',
      transcript: '',
      interim: '',
      message: t('voice.listening')
    };
    renderApp();

    setupSpeechInstance();
  }

  function stopVoiceListening() {
    isListeningExplicitly = false;
    clearVoiceTimers();
    if (activeSpeechRecognition) {
      try { activeSpeechRecognition.abort(); } catch (e) {}
      activeSpeechRecognition = null;
    }
  }

  function handleVoiceTranscript(rawText) {
    stopVoiceListening();
    const text = (rawText || '').trim().toLowerCase();
    const curCustomer = getCurrentCustomer();
    const balances = computeCustomerBalances(curCustomer.id);

    // ------------------------------------------
    // 1. SECURITY INTERCEPTION: SPOKEN PIN OR OTP
    // "Never accept a PIN or OTP spoken aloud, and say so if someone tries."
    // ------------------------------------------
    const hasPinWord = /\b(pin|पिन|otp|ओटीपी|password|पासवर्ड|code|कोड)\b/i.test(text);
    const hasDigits = /\b\d{4,6}\b/.test(text) || /\b(1234|123456)\b/.test(text);

    if (hasPinWord || (hasDigits && (text.includes('pin') || text.includes('पिन') || text.includes('otp') || text.includes('ओटीपी')))) {
      const warningText = t('voice.pinWarningDesc');
      state.voiceModal = {
        status: 'pin_warning',
        transcript: rawText,
        message: t('voice.pinWarningTitle'),
        description: warningText
      };
      window.SaralAudio.playSound('alert');
      speak(t('voice.pinWarningTitle') + ". " + warningText);
      renderApp();
      return;
    }

    // ------------------------------------------
    // 2. CHECK BALANCE
    // "check my balance" / "मेरा बैलेंस बताओ"
    // ------------------------------------------
    const isBalanceCmd = /\b(balance|how much money|funds)\b/i.test(text) || text.includes('बैलेंस') || text.includes('खाते में') || text.includes('रुपये कितने') || text.includes('पैसे कितने') || text.includes('बचत');
    if (isBalanceCmd) {
      state.balanceVisible = true;
      const amtStr = formatINR(balances.availablePaise);
      const readBack = state.lang === 'hi' 
        ? `आपका उपलब्ध बैलेंस ${amtStr} है।`
        : `Your available balance is ${amtStr}.`;

      state.voiceModal = {
        status: 'understood',
        commandType: 'balance',
        transcript: rawText,
        title: t('voice.suggestionBalance'),
        message: readBack,
        actionLabel: t('voice.confirmAction'),
        onConfirm: () => {
          state.activeTab = 'home';
          state.activeSubScreen = null;
          state.voiceModal = null;
          renderApp();
        }
      };
      window.SaralAudio.playSound('success');
      speak(readBack);
      renderApp();
      return;
    }

    // ------------------------------------------
    // 3. SHOW RECENT PAYMENTS / HISTORY
    // "show my last payments" / "पिछले भुगतान दिखाओ"
    // ------------------------------------------
    const isHistoryCmd = /\b(last payments?|recent payments?|show payments?|history|transactions?)\b/i.test(text) || text.includes('भुगतान') || text.includes('हिस्ट्री') || text.includes('इतिहास') || text.includes('लेन-देन') || text.includes('लेनदेन');
    if (isHistoryCmd) {
      const readBack = state.lang === 'hi'
        ? "आपके पिछले भुगतान दिखाए जा रहे हैं।"
        : "Showing your recent payments.";

      state.voiceModal = {
        status: 'understood',
        commandType: 'history',
        transcript: rawText,
        title: t('voice.suggestionHistory'),
        message: readBack,
        actionLabel: t('voice.confirmAction'),
        onConfirm: () => {
          state.activeTab = 'history';
          state.activeSubScreen = null;
          state.voiceModal = null;
          renderApp();
        }
      };
      window.SaralAudio.playSound('success');
      speak(readBack);
      renderApp();
      return;
    }

    // ------------------------------------------
    // 4. DOWNLOAD LAST MONTH'S STATEMENT
    // "download last month's statement" / "पिछले महीने का स्टेटमेंट डाउनलोड करो"
    // ------------------------------------------
    const isStatementCmd = /\b(statement|passbook)\b/i.test(text) || text.includes('स्टेटमेंट') || text.includes('खाता विवरण') || text.includes('पासबुक');
    if (isStatementCmd) {
      const readBack = state.lang === 'hi'
        ? "पिछले महीने का खाता विवरण डाउनलोड किया जा रहा है।"
        : "Opening last month's statement for download.";

      state.voiceModal = {
        status: 'understood',
        commandType: 'statement',
        transcript: rawText,
        title: t('voice.suggestionStatement'),
        message: readBack,
        actionLabel: t('voice.confirmAction'),
        onConfirm: () => {
          state.activeTab = 'history';
          state.activeSubScreen = 'statements';
          statementPeriod = 'last_month';
          state.voiceModal = null;
          renderApp();
          exportStatementCSV();
        }
      };
      window.SaralAudio.playSound('success');
      speak(readBack);
      renderApp();
      return;
    }

    // ------------------------------------------
    // 5. BLOCK MY CARD
    // "block my card" / "मेरा कार्ड ब्लॉक करो"
    // ------------------------------------------
    const isBlockCardCmd = ((/\b(block|freeze|stop)\b/i.test(text) && /\b(card|atm|debit)\b/i.test(text)) || ((text.includes('ब्लॉक') || text.includes('बंद')) && (text.includes('कार्ड') || text.includes('एटीएम'))));
    if (isBlockCardCmd) {
      const readBack = state.lang === 'hi'
        ? "क्या आप अपना डेबिट कार्ड ब्लॉक करना चाहते हैं?"
        : "Do you want to block your debit card?";

      state.voiceModal = {
        status: 'understood',
        commandType: 'block_card',
        transcript: rawText,
        title: t('voice.suggestionCard'),
        message: readBack,
        actionLabel: t('voice.confirmAction'),
        onConfirm: () => {
          state.activeTab = 'services';
          state.activeSubScreen = null;
          state.voiceModal = null;
          curCustomer.cardBlocked = true;
          saveAll();
          window.SaralAudio.playSound('alert');
          showToast(t('services.cardBlocked'), 'warning');
          renderApp();
        }
      };
      window.SaralAudio.playSound('alert');
      speak(readBack);
      renderApp();
      return;
    }

    // ------------------------------------------
    // 6. SEND MONEY / PAY
    // "send 500 rupees to Ramesh" / "रमेश को 500 रुपये भेजो"
    // RULE: Voice can fill in a form but never finish one: every payment still shows the review screen and needs the PIN typed or fingerprint.
    // ------------------------------------------
    const isPayCmd = /\b(send|pay|transfer)\b/i.test(text) || text.includes('भेजो') || text.includes('डालो') || text.includes('दो') || text.includes('ट्रांसफर') || text.includes('पे');
    if (isPayCmd) {
      let amountRupees = 500;
      const numMatch = text.match(/\b(\d+)\b/);
      if (numMatch) {
        amountRupees = parseInt(numMatch[1], 10);
      } else if (text.includes('हज़ार') || text.includes('thousand')) {
        amountRupees = 1000;
      } else if (text.includes('सौ') || text.includes('hundred')) {
        amountRupees = 500;
      }

      const amountPaise = amountRupees * 100;

      let matchedPayee = state.payees.find(p => text.includes(p.name.toLowerCase()));
      if (!matchedPayee) {
        matchedPayee = state.payees.find(p => {
          const parts = p.name.toLowerCase().split(' ');
          return parts.some(part => part.length > 2 && text.includes(part));
        });
      }
      if (!matchedPayee && state.payees.length > 0) {
        matchedPayee = state.payees[0];
      }

      const payeeName = matchedPayee ? matchedPayee.name : "Ramesh Kumar";
      const amtStr = formatINR(amountPaise);
      const readBack = state.lang === 'hi'
        ? `${payeeName} को ${amtStr} भेजें?`
        : `Send ${amtStr} to ${payeeName}?`;

      state.voiceModal = {
        status: 'understood',
        commandType: 'pay',
        transcript: rawText,
        title: t('voice.suggestionPay'),
        message: readBack,
        notice: t('voice.reviewNotice'),
        actionLabel: t('voice.confirmAction'),
        onConfirm: () => {
          state.activeTab = 'pay';
          state.activeSubScreen = null;
          state.voiceModal = null;
          state.payFlow.method = 'payee';
          state.payFlow.recipientIdentifier = matchedPayee ? matchedPayee.identifier : 'ramesh@upi';
          state.payFlow.recipientName = matchedPayee ? matchedPayee.name : 'Ramesh Kumar';
          state.payFlow.recipientRegisteredName = matchedPayee ? (matchedPayee.registeredName || 'R*** Kumar') : 'R*** Kumar';
          state.payFlow.isNewPayee = matchedPayee ? !!matchedPayee.isNew : false;
          state.payFlow.amountPaise = amountPaise;
          state.payFlow.note = 'Voice transfer';
          // Navigate to Step 3 (Review screen) - Voice NEVER finishes payment
          state.payFlow.step = 3;
          renderApp();
          speak(t('voice.reviewNotice'));
        }
      };
      window.SaralAudio.playSound('success');
      speak(readBack);
      renderApp();
      return;
    }

    // ------------------------------------------
    // 7. FALLBACK SUGGESTIONS
    // "If it didn't understand, offer two or three suggestions."
    // ------------------------------------------
    showVoiceSuggestions(rawText);
  }

  function showVoiceSuggestions(rawText) {
    const suggestions = [
      { text: t('voice.suggestionBalance'), cmd: state.lang === 'hi' ? "मेरा बैलेंस बताओ" : "check my balance" },
      { text: t('voice.suggestionPay'), cmd: state.lang === 'hi' ? "रमेश को 500 रुपये भेजो" : "send 500 rupees to Ramesh" },
      { text: t('voice.suggestionHistory'), cmd: state.lang === 'hi' ? "पिछले भुगतान दिखाओ" : "show my last payments" }
    ];

    state.voiceModal = {
      status: 'suggestions',
      transcript: rawText || '',
      title: t('voice.suggestionsTitle'),
      suggestions: suggestions
    };
    speak(t('voice.suggestionsTitle'));
    renderApp();
  }

  // ==========================================
  // VOICE ASSISTANT MODAL COMPONENT
  // ==========================================
  function renderVoiceModal() {
    if (!state.voiceModal) return '';
    const vm = state.voiceModal;

    return `
      <div id="voice-assistant-modal" class="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fade-in" role="dialog" aria-modal="true">
        <div class="bg-white rounded-3xl max-w-sm w-full p-5 shadow-2xl space-y-4 border border-slate-200 relative max-h-[90vh] overflow-y-auto">
          <!-- Close button -->
          <button id="btn-close-voice" class="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition" aria-label="${t('common.close')}">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>

          <!-- Modal Header -->
          <div class="flex items-center space-x-2.5 pr-8">
            <div class="w-8 h-8 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center flex-shrink-0">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
            </div>
            <div>
              <h3 class="font-extrabold text-base text-slate-900">${t('voice.assistantTitle')}</h3>
              <p class="text-[11px] text-slate-500">${t('voice.listeningHelp')}</p>
            </div>
          </div>

          <!-- Active Listening State -->
          ${vm.status === 'listening' ? `
            <div class="text-center py-4 space-y-3.5">
              <div class="relative w-20 h-20 mx-auto flex items-center justify-center">
                <span class="absolute inset-0 rounded-full bg-teal-400/25 animate-ping"></span>
                <span class="absolute inset-1 rounded-full bg-teal-500/35 animate-pulse"></span>
                <button id="btn-pulse-mic" class="relative z-10 w-16 h-16 rounded-full bg-teal-700 text-white flex items-center justify-center shadow-lg hover:bg-teal-800 active:scale-95 transition" aria-label="${t('voice.tapToStop')}">
                  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                </button>
              </div>

              <div>
                <div class="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-900 text-xs font-bold">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>${t('voice.listening')}</span>
                </div>
                <p class="text-xs text-slate-500 mt-1 font-medium">${t('voice.takeYourTime')}</p>
              </div>

              <!-- Live Captions Bubble -->
              <div class="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 min-h-[58px] flex items-center justify-center text-center">
                <p id="voice-live-transcript" class="text-xs ${vm.transcript ? 'font-bold text-teal-950' : 'text-slate-400 italic'}">
                  ${vm.transcript ? `"${escapeHtml(vm.transcript)}"` : t('voice.speakPrompt')}
                </p>
              </div>

              <!-- Done Speaking & Cancel Actions -->
              <div class="space-y-2 pt-1">
                <button id="btn-done-speaking" class="w-full h-12 rounded-xl bg-teal-700 hover:bg-teal-800 active:scale-[0.99] text-white font-extrabold text-sm transition shadow-sm flex items-center justify-center space-x-1.5" style="background-color: var(--brand-primary);">
                  <span>✓</span>
                  <span>${t('voice.doneSpeaking')}</span>
                </button>
                <button id="btn-stop-listening" class="w-full h-9 rounded-xl text-slate-500 hover:bg-slate-100 font-bold text-xs transition">
                  ${t('common.cancel')}
                </button>
              </div>

              <!-- Or Tap a Command Directly (Always Accessible, Stays Open) -->
              <div class="pt-2 border-t border-slate-100">
                <span class="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">${t('voice.testPhrasesTitle')}</span>
                <div class="flex flex-wrap gap-1.5 justify-center">
                  <button class="voice-quick-chip px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-900 border border-slate-200 text-[11px] font-bold text-slate-700 transition active:scale-95" data-cmd="${state.lang === 'hi' ? 'मेरा बैलेंस बताओ' : state.lang === 'ta' ? 'என் இருப்பைச் சரிபார்க்கவும்' : 'check my balance'}">
                    💰 ${t('voice.suggestionBalance')}
                  </button>
                  <button class="voice-quick-chip px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-900 border border-slate-200 text-[11px] font-bold text-slate-700 transition active:scale-95" data-cmd="${state.lang === 'hi' ? 'रमेश को 500 रुपये भेजो' : state.lang === 'ta' ? 'ரமேஷிற்கு 500 ரூபாய் அனுப்பவும்' : 'send 500 rupees to Ramesh'}">
                    📤 ${t('voice.suggestionPay')}
                  </button>
                  <button class="voice-quick-chip px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-900 border border-slate-200 text-[11px] font-bold text-slate-700 transition active:scale-95" data-cmd="${state.lang === 'hi' ? 'पिछले भुगतान दिखाओ' : state.lang === 'ta' ? 'முந்தைய பரிவர்த்தனைகளைக் காட்டவும்' : 'show my last payments'}">
                    📋 ${t('voice.suggestionHistory')}
                  </button>
                  <button class="voice-quick-chip px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-900 border border-slate-200 text-[11px] font-bold text-slate-700 transition active:scale-95" data-cmd="${state.lang === 'hi' ? 'मेरा कार्ड ब्लॉक करो' : state.lang === 'ta' ? 'என் அட்டையை முடக்கவும்' : 'block my card'}">
                    🛑 ${t('voice.suggestionCard')}
                  </button>
                  <button class="voice-quick-chip px-2.5 py-1 rounded-full bg-slate-100 hover:bg-teal-50 hover:text-teal-900 border border-slate-200 text-[11px] font-bold text-slate-700 transition active:scale-95" data-cmd="${state.lang === 'hi' ? 'पिछले महीने का स्टेटमेंट डाउनलोड करो' : state.lang === 'ta' ? 'கடந்த மாத கணக்கு விவரத்தைப் பதிவிறக்கவும்' : 'download last month statement'}">
                    📄 ${t('voice.suggestionStatement')}
                  </button>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Understood State (Read Back before acting) -->
          ${vm.status === 'understood' ? `
            <div class="py-2 space-y-4">
              <div class="p-4 rounded-2xl bg-teal-50/70 border-2 border-teal-600 text-teal-950 space-y-2">
                <div class="flex items-center space-x-1.5 text-teal-800 text-xs font-bold uppercase tracking-wider">
                  <span>✓</span>
                  <span>${t('voice.didYouMean')}</span>
                </div>
                <p class="text-lg font-extrabold text-slate-900 leading-snug">
                  "${vm.message}"
                </p>
                ${vm.notice ? `
                  <div class="bg-amber-50 p-2.5 rounded-xl border border-amber-300 text-xs text-amber-900 font-semibold flex items-start space-x-2">
                    <span class="text-sm">🛡️</span>
                    <span>${vm.notice}</span>
                  </div>
                ` : ''}
              </div>

              <div class="space-y-2 pt-1">
                <button id="btn-voice-confirm-action" class="w-full h-12 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-sm transition shadow-sm flex items-center justify-center space-x-2">
                  <span>${vm.actionLabel || t('voice.confirmAction')}</span>
                  <span>➔</span>
                </button>
                <button id="btn-voice-cancel-action" class="w-full h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition">
                  ${t('voice.cancelAction')}
                </button>
              </div>
            </div>
          ` : ''}

          <!-- Security Pin Warning State -->
          ${vm.status === 'pin_warning' ? `
            <div class="py-2 space-y-4">
              <div class="p-4 rounded-2xl bg-red-50 border-2 border-red-500 text-red-950 space-y-2.5">
                <div class="flex items-center space-x-2 text-red-700 font-extrabold text-xs uppercase tracking-wider">
                  <span class="text-lg">⚠️</span>
                  <span>${vm.message}</span>
                </div>
                <p class="text-xs text-red-900 leading-relaxed font-semibold">
                  ${vm.description}
                </p>
              </div>

              <button id="btn-voice-ack-pin" class="w-full h-12 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-sm transition shadow-sm">
                ${t('voice.pinWarningAcknowledge')} ➔
              </button>
            </div>
          ` : ''}

          <!-- Suggestions State (Offered when not understood) -->
          ${vm.status === 'suggestions' ? `
            <div class="py-2 space-y-3">
              <div class="p-3 bg-slate-100 rounded-xl text-xs text-slate-600">
                <p class="font-bold text-slate-800">${t('voice.suggestionsTitle')}</p>
              </div>

              <div class="space-y-2">
                ${vm.suggestions.map(s => `
                  <button class="voice-suggestion-chip w-full text-left p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-500 hover:bg-teal-50/50 transition flex items-center justify-between group" data-cmd="${s.cmd}">
                    <span class="font-bold text-xs text-slate-800 group-hover:text-teal-900">
                      "${s.text}"
                    </span>
                    <span class="text-slate-400 group-hover:text-teal-700 font-bold text-xs">➔</span>
                  </button>
                `).join('')}
              </div>

              <div class="pt-2 flex items-center space-x-2">
                <button id="btn-voice-retry" class="flex-1 h-11 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition flex items-center justify-center space-x-1.5 shadow-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                  <span>${t('voice.tapToSpeak')}</span>
                </button>
                <button id="btn-voice-cancel-action" class="h-11 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition">
                  ${t('common.cancel')}
                </button>
              </div>
            </div>
          ` : ''}

          <!-- 10 Test Phrases Quick Accordion -->
          <div class="border-t border-slate-200 pt-3">
            <details class="text-[11px] text-slate-500">
              <summary class="cursor-pointer font-bold text-teal-800 hover:underline">
                ${t('voice.testPhrasesTitle')}
              </summary>
              <div class="mt-2 space-y-2">
                <p class="font-bold text-[10px] uppercase text-slate-400">English (5 phrases):</p>
                <div class="flex flex-wrap gap-1.5">
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="check my balance">"check my balance"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="show my last payments">"show my last payments"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="send 500 rupees to Ramesh">"send 500 rupees to Ramesh"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="download last month's statement">"download last month's statement"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="block my card">"block my card"</button>
                </div>
                <p class="font-bold text-[10px] uppercase text-slate-400 mt-2">हिंदी (5 वाक्य):</p>
                <div class="flex flex-wrap gap-1.5">
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="मेरा बैलेंस बताओ">"मेरा बैलेंस बताओ"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="पिछले भुगतान दिखाओ">"पिछले भुगतान दिखाओ"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="रमेश को 500 रुपये भेजो">"रमेश को 500 रुपये भेजो"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="पिछले महीने का स्टेटमेंट डाउनलोड करो">"पिछले महीने का स्टेटमेंट डाउनलोड करो"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-slate-100 hover:bg-teal-100 text-slate-700 hover:text-teal-900 rounded-lg font-semibold text-[11px] transition" data-phrase="मेरा कार्ड ब्लॉक करो">"मेरा कार्ड ब्लॉक करो"</button>
                </div>
                <p class="font-bold text-[10px] uppercase text-red-500 mt-2">Security Interception Test (Never accept spoken PIN):</p>
                <div class="flex flex-wrap gap-1.5">
                  <button class="voice-test-phrase px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg font-semibold text-[11px] transition" data-phrase="my PIN is 1234">"my PIN is 1234"</button>
                  <button class="voice-test-phrase px-2.5 py-1 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-lg font-semibold text-[11px] transition" data-phrase="मेरा पिन 1234 है">"मेरा पिन 1234 है"</button>
                </div>
              </div>
            </details>
          </div>
        </div>
      </div>
    `;
  }

  function bindVoiceModalEvents() {
    if (!state.voiceModal) return;

    const closeBtn = document.getElementById('btn-close-voice');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        stopVoiceListening();
        state.voiceModal = null;
        renderApp();
      });
    }

    const cancelBtn = document.getElementById('btn-voice-cancel-action');
    if (cancelBtn) {
      cancelBtn.addEventListener('click', () => {
        stopVoiceListening();
        state.voiceModal = null;
        renderApp();
      });
    }

    const stopBtn = document.getElementById('btn-stop-listening');
    if (stopBtn) {
      stopBtn.addEventListener('click', () => {
        stopVoiceListening();
        showVoiceSuggestions("Listening stopped.");
      });
    }

    const doneSpeakingBtn = document.getElementById('btn-done-speaking');
    if (doneSpeakingBtn) {
      doneSpeakingBtn.addEventListener('click', () => {
        const spoken = (voiceAccumulatedTranscript || '').trim();
        stopVoiceListening();
        if (spoken) {
          handleVoiceTranscript(spoken);
        } else {
          showVoiceSuggestions('');
        }
      });
    }

    const pulseMicBtn = document.getElementById('btn-pulse-mic');
    if (pulseMicBtn) {
      pulseMicBtn.addEventListener('click', () => {
        const spoken = (voiceAccumulatedTranscript || '').trim();
        stopVoiceListening();
        if (spoken) {
          handleVoiceTranscript(spoken);
        } else {
          showVoiceSuggestions('');
        }
      });
    }

    const confirmBtn = document.getElementById('btn-voice-confirm-action');
    if (confirmBtn && state.voiceModal.onConfirm) {
      confirmBtn.addEventListener('click', () => {
        stopVoiceListening();
        state.voiceModal.onConfirm();
      });
    }

    const ackPinBtn = document.getElementById('btn-voice-ack-pin');
    if (ackPinBtn) {
      ackPinBtn.addEventListener('click', () => {
        stopVoiceListening();
        state.voiceModal = null;
        renderApp();
      });
    }

    const retryBtn = document.getElementById('btn-voice-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        startVoiceListening();
      });
    }

    document.querySelectorAll('.voice-quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        handleVoiceTranscript(cmd);
      });
    });

    document.querySelectorAll('.voice-suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cmd = chip.dataset.cmd;
        handleVoiceTranscript(cmd);
      });
    });

    document.querySelectorAll('.voice-test-phrase').forEach(btn => {
      btn.addEventListener('click', () => {
        const phrase = btn.dataset.phrase;
        handleVoiceTranscript(phrase);
      });
    });
  }


  // ==========================================
  // IN-APP TOAST NOTIFICATION SYSTEM
  // Replaces disruptive browser alert() with sleek native-like toasts
  // ==========================================
  function showToast(message, type = 'info') {
    let toast = document.getElementById('saral-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'saral-toast';
      toast.className = 'fixed bottom-20 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-all';
      document.body.appendChild(toast);
    }
    const bgClass = type === 'success' ? 'bg-emerald-900/95 text-white border-emerald-500 shadow-emerald-950/20' :
                    type === 'error' ? 'bg-rose-900/95 text-white border-rose-500 shadow-rose-950/20' :
                    'bg-slate-900/95 text-white border-slate-700 shadow-slate-950/20';
    toast.innerHTML = `
      <div class="px-4 py-2.5 rounded-2xl shadow-2xl text-xs font-bold border backdrop-blur-md flex items-center space-x-2 toast-animate ${bgClass}">
        <span>${message}</span>
      </div>
    `;
    clearTimeout(window._saralToastTimer);
    window._saralToastTimer = setTimeout(() => {
      if (toast) toast.innerHTML = '';
    }, 2800);
  }

  // ==========================================
  // RENDER APP COMPONENT
  // ==========================================
  function renderApp() {
    applyTheme();
    const appEl = document.getElementById('saral-app');
    if (!appEl) return;

    if (!state.isAuthenticated) {
      appEl.innerHTML = renderSignInView();
      bindSignInEvents();
      return;
    }

    // Young Saver Guardian Consent Setup Screen Check
    if ((state.currentCustomerId === 'aarav' || state.mode === 'young_saver') && !state.guardianConsentAccepted && !state.isGuardianMode) {
      appEl.innerHTML = renderGuardianConsentView();
      const consentBtn = document.getElementById('btn-accept-guardian-consent');
      if (consentBtn) {
        consentBtn.addEventListener('click', () => {
          state.guardianConsentAccepted = true;
          localStorage.setItem('saral_consent_aarav', 'true');
          renderApp();
        });
      }
      return;
    }

    const curCustomer = getCurrentCustomer();
    const bank = getActiveBank();

    appEl.innerHTML = `
      <div class="min-h-screen flex flex-col justify-between max-w-md mx-auto bg-white shadow-2xl relative pb-20 select-none">
        <!-- Top App Bar (The Standard: Back at top left, Bank Logo & Customer at top) -->
        ${renderTopHeader(bank, curCustomer)}

        <!-- Main Screen Content Area -->
        <main id="main-content" class="flex-1 p-4 overflow-y-auto" role="main">
          ${renderCurrentScreenContent(curCustomer, bank)}
        </main>

        <!-- The Standard Bottom Navigation (Always 5 Tabs: Home, Pay, History, Services, Help) -->
        ${renderBottomTabs()}

        <!-- Global Modals & Dialogs -->
        ${state.viewingTx ? renderTxDetailModal() : ''}
        ${state.activeGlossaryTerm ? renderGlossaryModal() : ''}
        ${state.scamWarningOpen ? renderScamWarningModal() : ''}
        ${state.voiceModal ? renderVoiceModal() : ''}
      </div>
    `;

    bindGlobalEvents();
  }

  // ==========================================
  // TOP HEADER COMPONENT
  // ==========================================
  function renderTopHeader(bank, curCustomer) {
    const isSubScreen = state.activeSubScreen !== null;
    const customerName = getLocalized(curCustomer, 'name');
    const bankName = getLocalized(bank, 'name');
    const nowTimeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return `
      <header class="text-white px-4 pt-2 pb-3 sticky top-0 z-30 shadow-md transition-colors" style="background: linear-gradient(135deg, var(--brand-header), var(--brand-hover));">
        <!-- Simulated Mobile Status Bar -->
        <div class="flex items-center justify-between text-[10px] text-white/80 mb-1.5 pb-1 border-b border-white/15 font-mono select-none">
          <span class="font-bold tracking-tight">${nowTimeStr}</span>
          <div class="flex items-center space-x-2">
            <span class="inline-flex items-center space-x-0.5 bg-black/25 px-1.5 py-0.5 rounded text-[9px] text-emerald-300 font-sans font-bold">
              <span>🔒</span><span>256-Bit Safe</span>
            </span>
            <span>📶</span>
            <span>🔋 100%</span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <!-- Left: Back Button or Bank Brand -->
          <div class="flex items-center space-x-2">
            ${isSubScreen ? `
              <button id="btn-header-back" class="p-2 -ml-2 rounded-full hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white transition active:scale-95 flex items-center space-x-1" aria-label="${t('common.back')}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                </svg>
                <span class="text-xs font-bold">${t('common.back')}</span>
              </button>
            ` : `
              <div class="flex items-center space-x-2">
                <div class="w-7 h-7 text-white flex-shrink-0 drop-shadow-sm">
                  ${bank.logoSvg}
                </div>
                <span class="font-extrabold text-sm tracking-tight truncate max-w-[130px] drop-shadow-xs">${bankName}</span>
              </div>
            `}
          </div>

          <!-- Right: Customer Pill, Audio Toggle & Settings -->
          <div class="flex items-center space-x-1.5">
            <!-- Read Aloud Speaker Button -->
            ${hasVoiceForLang(state.lang) ? `
              <button id="btn-toggle-speaker" class="p-1.5 rounded-full hover:bg-black/20 focus:ring-2 focus:ring-white transition ${state.readAloud ? 'text-amber-300' : 'text-white/60'}" title="${t('common.readAloud')}">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.764l-4.502-3.602H2a1 1 0 01-1-1V7.838a1 1 0 011-1h1.881l4.502-3.602a1 1 0 011-.16zM14 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zm3-2a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clip-rule="evenodd"/>
                </svg>
              </button>
            ` : ''}

            <!-- Voice Control Header Shortcut (On Home & Pay, where supported) -->
            ${(hasSpeechRecognition() && (state.activeTab === 'home' || state.activeTab === 'pay')) ? `
              <button id="btn-header-voice" class="p-1.5 rounded-full hover:bg-black/20 focus:ring-2 focus:ring-white transition text-white" title="${t('voice.btnVoice')}">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                </svg>
              </button>
            ` : ''}

            <!-- Customer Avatar / Switcher Button -->
            <button id="btn-header-profile" class="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold focus:ring-2 focus:ring-white transition active:scale-95" title="${t('signIn.changeCustomer')}">
              <span class="w-5 h-5 rounded-full bg-white text-teal-900 flex items-center justify-center text-[10px] font-extrabold shadow-2xs">
                ${state.isGuardianMode ? 'M' : curCustomer.avatarText}
              </span>
              <span class="truncate max-w-[65px] font-bold">${state.isGuardianMode ? (state.lang === 'ta' ? 'மீனா (பா)' : state.lang === 'hi' ? 'मीना (अ)' : 'Meena (G)') : customerName.split(' ')[0]}</span>
            </button>

            <!-- Settings Cog -->
            <button id="btn-header-settings" class="p-1.5 rounded-full hover:bg-black/20 focus:ring-2 focus:ring-white transition active:scale-95" aria-label="${t('settings.title')}">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
    `;
  }

  // ==========================================
  // BOTTOM 5 TABS COMPONENT
  // ==========================================
  function renderBottomTabs() {
    const tabs = [
      { id: 'home', label: t('tabs.home'), icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>` },
      { id: 'pay', label: t('tabs.pay'), icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>` },
      { id: 'history', label: t('tabs.history'), icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>` },
      { id: 'services', label: t('tabs.services'), icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>` },
      { id: 'help', label: t('tabs.help'), icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>` }
    ];

    return `
      <nav class="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/95 backdrop-blur-md border-t border-slate-200 z-30 shadow-2xl" role="navigation" aria-label="Main Navigation">
        <div class="grid grid-cols-5 h-16">
          ${tabs.map(tab => {
            const isActive = state.activeSubScreen === null && state.activeTab === tab.id;
            return `
              <button 
                class="tab-btn flex flex-col items-center justify-center py-1 transition focus:outline-none ${isActive ? 'font-extrabold -translate-y-0.5' : 'text-slate-500 hover:text-slate-800'}"
                data-tab="${tab.id}"
                style="${isActive ? 'color: var(--brand-primary);' : ''}"
                aria-selected="${isActive}"
                role="tab"
              >
                <div class="w-10 h-7 flex items-center justify-center rounded-full transition-colors ${isActive ? 'bg-teal-50 shadow-2xs' : ''}" style="${isActive ? 'background-color: var(--brand-bg);' : ''}">
                  <svg class="w-5 h-5 transition-transform ${isActive ? 'scale-110' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    ${tab.icon}
                  </svg>
                </div>
                <span class="text-[10px] leading-tight tracking-tight mt-0.5">${tab.label}</span>
              </button>
            `;
          }).join('')}
        </div>
      </nav>
    `;
  }

  // ==========================================
  // DISPATCH CURRENT SCREEN CONTENT
  // ==========================================
  function renderCurrentScreenContent(curCustomer, bank) {
    if (state.serviceFlow) {
      return renderServiceFlowView(curCustomer, bank);
    }

    if (state.activeSubScreen) {
      switch (state.activeSubScreen) {
        case 'payees': return renderPayeesView(curCustomer);
        case 'statements': return renderStatementsView(curCustomer, bank);
        case 'learn': return renderLearnView();
        case 'settings': return renderSettingsView(curCustomer);
        case 'the_standard': return renderTheStandardView();
        case 'guardian': return renderGuardianView();
        case 'account_details': return renderAccountDetailsView(curCustomer, bank);
      }
    }

    switch (state.activeTab) {
      case 'home': return renderHomeView(curCustomer, bank);
      case 'pay': return renderPayView(curCustomer);
      case 'history': return renderHistoryView(curCustomer);
      case 'services': return renderServicesView(curCustomer);
      case 'help': return renderHelpView();
      default: return renderHomeView(curCustomer, bank);
    }
  }

  // ==========================================
  // GUARDIAN CONSENT SETUP SCREEN (Young Saver)
  // ==========================================
  function renderGuardianConsentView() {
    const aarav = state.customers.find(c => c.id === 'aarav');
    return `
      <div class="min-h-screen max-w-md mx-auto bg-slate-50 flex flex-col justify-between p-6 select-none">
        <div>
          <!-- Header -->
          <div class="inline-block px-3 py-1 bg-purple-100 text-purple-900 text-xs font-extrabold rounded-full mb-3 tracking-wide border border-purple-300 uppercase">
            ${t('guardian.dashboardBadge')}
          </div>
          <h1 class="text-2xl font-extrabold text-slate-900 tracking-tight">
            ${t('guardian.consentTitle')}
          </h1>
          <p class="text-xs text-slate-600 mt-1 mb-5">
            ${t('guardian.consentSubtitle')}
          </p>

          <!-- Guardian & Account Details Card (Only essential details needed) -->
          <div class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3 text-xs mb-5">
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('home.accountHolderName')}</span>
              <span class="font-bold text-slate-900">${getLocalized(aarav, 'name')} (${aarav.age})</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('settings.modeLabel')}</span>
              <span class="font-bold text-purple-800">${t('settings.modeYoungSaver')}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('guardian.guardianName')}</span>
              <span class="font-bold text-slate-900">Meena Sharma (${getLocalized(aarav.guardian, 'relation')})</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('guardian.dailyLimitSetting')}</span>
              <span class="font-bold text-emerald-800">${formatINR(aarav.dailyLimitPaise)} / ${t('guardian.perDay')}</span>
            </div>
            <div class="bg-purple-50 p-2.5 rounded-xl border border-purple-200 text-purple-950 font-medium leading-relaxed">
              🛡️ ${t('guardian.consentDetailsNotice')}
            </div>
          </div>

          <!-- Agreement Checkbox -->
          <div class="bg-amber-50 border-2 border-amber-300 rounded-2xl p-4 space-y-3">
            <label class="flex items-start space-x-3 cursor-pointer">
              <input type="checkbox" id="chk-guardian-consent" class="w-5 h-5 accent-teal-600 rounded mt-0.5" checked>
              <span class="text-xs text-slate-800 font-semibold leading-relaxed">
                ${t('guardian.consentAgreement')}
              </span>
            </label>
          </div>
        </div>

        <!-- Big Confirmation Button at bottom -->
        <div class="pt-6">
          <button id="btn-accept-guardian-consent" class="w-full h-14 rounded-2xl bg-teal-800 text-white font-extrabold text-base hover:bg-teal-900 shadow-lg active:scale-[0.99] transition" style="background-color: var(--brand-primary);">
            ${t('guardian.consentAgreeBtn')} ➔
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // SCREEN 1: SIGN IN VIEW
  // ==========================================
  function renderSignInView() {
    return `
      <div class="min-h-screen max-w-md mx-auto bg-slate-50 flex flex-col justify-between p-6 select-none">
        <div>
          <!-- Prototype Badge & Language Switcher -->
          <div class="flex items-center justify-between mb-4">
            <div class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold tracking-wider bg-amber-100 text-amber-800 border border-amber-300">
              <span class="w-2 h-2 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>
              ${t('prototypeBadge')}
            </div>
            <!-- Language Switcher on Sign-In Screen -->
            <div class="inline-flex rounded-xl p-0.5 bg-slate-100 border border-slate-200 text-xs font-bold">
              <button class="btn-set-lang px-2.5 py-1 rounded-lg transition ${state.lang === 'en' ? 'bg-white text-teal-900 shadow-sm font-extrabold' : 'text-slate-600 hover:text-slate-900'}" data-lang="en">English</button>
              <button class="btn-set-lang px-2.5 py-1 rounded-lg transition ${state.lang === 'hi' ? 'bg-white text-teal-900 shadow-sm font-extrabold' : 'text-slate-600 hover:text-slate-900'}" data-lang="hi">हिंदी</button>
              <button class="btn-set-lang px-2.5 py-1 rounded-lg transition ${state.lang === 'ta' ? 'bg-white text-teal-900 shadow-sm font-extrabold' : 'text-slate-600 hover:text-slate-900'}" data-lang="ta">தமிழ்</button>
            </div>
          </div>

          <!-- App Brand Title -->
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight flex items-center space-x-2">
            <span>${t('appName')}</span>
          </h1>
          <p class="text-sm text-slate-600 mt-1 mb-6">${t('tagline')}</p>

          <!-- Warning Notice: Never Real Details -->
          <div class="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-r-lg mb-6 text-xs text-blue-900 leading-relaxed">
            <strong>${t('prototypeNotice')}</strong>
          </div>

          <!-- Customer Picker -->
          <div class="mb-6">
            <label class="block text-sm font-bold text-slate-700 mb-2">${t('signIn.pickCustomer')}:</label>
            <div class="space-y-2.5">
              ${state.customers.map(c => {
                const isSelected = state.currentCustomerId === c.id && !state.isGuardianMode;
                const name = getLocalized(c, 'name');
                const role = getLocalized(c, 'role');
                return `
                  <div 
                    class="customer-card flex items-center p-3 rounded-xl border-2 transition cursor-pointer ${isSelected ? 'border-teal-600 bg-teal-50/60 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}"
                    data-customer-id="${c.id}"
                  >
                    <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm mr-3 ${isSelected ? 'bg-teal-700 text-white' : 'bg-slate-200 text-slate-700'}">
                      ${c.avatarText}
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center space-x-2">
                        <span class="font-bold text-slate-900 text-sm truncate">${name} (${c.age})</span>
                        ${c.id === 'shankar' ? `<span class="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-semibold">${t('common.primaryUser')}</span>` : ''}
                      </div>
                      <p class="text-xs text-slate-500 truncate">${role}</p>
                    </div>
                  </div>
                `;
              }).join('')}

              <!-- Guardian View Option (Meena) -->
              <div 
                class="customer-card flex items-center p-3 rounded-xl border-2 transition cursor-pointer ${state.isGuardianMode ? 'border-purple-600 bg-purple-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}"
                data-guardian="true"
              >
                <div class="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm mr-3">
                  MS
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center space-x-2">
                    <span class="font-bold text-slate-900 text-sm truncate">${state.lang === 'ta' ? 'மீனா ஷர்மா' : state.lang === 'hi' ? 'मीना शर्मा' : 'Meena Sharma'}</span>
                    <span class="text-[10px] bg-purple-100 text-purple-800 px-1.5 py-0.5 rounded font-semibold">${t('signIn.guardianBadge')}</span>
                  </div>
                  <p class="text-xs text-slate-500 truncate">${t('signIn.guardianRoleDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- PIN Entry Card -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm mb-4">
            <div class="text-center mb-3">
              <span class="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block">
                ${t('signIn.demoPinHelp')}
              </span>
              <p class="text-sm font-bold text-slate-800 mt-2">${t('signIn.enterPin')}</p>
            </div>

            <!-- 4 Dot PIN Display -->
            <div class="flex justify-center space-x-4 my-3" id="pin-dots">
              <div class="pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
              <div class="pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
              <div class="pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
              <div class="pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
            </div>

            <!-- Quick 1-Tap Fill Demo PIN -->
            <div class="flex items-center justify-center space-x-2 my-2">
              <button id="btn-quick-fill-pin" type="button" class="text-[11px] font-extrabold text-teal-800 bg-teal-50 hover:bg-teal-100 active:scale-95 px-3 py-1 rounded-full border border-teal-300 transition flex items-center space-x-1 shadow-2xs">
                <span>⚡</span>
                <span>${state.lang === 'ta' ? 'மாதிரி எண் (1234) நிரப்பு' : state.lang === 'hi' ? 'डेमो पिन (1234) तुरंत भरें' : '1-Tap Fill Demo PIN (1234)'}</span>
              </button>
            </div>

            <!-- Numeric Keypad -->
            <div class="grid grid-cols-3 gap-2.5 max-w-[260px] mx-auto mt-4">
              ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => `
                <button class="keypad-btn h-12 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 font-bold text-xl text-slate-800 transition flex items-center justify-center" data-val="${num}">
                  ${num}
                </button>
              `).join('')}
              <button class="keypad-btn h-12 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-600 transition flex items-center justify-center" data-action="clear">
                ${t('common.clear')}
              </button>
              <button class="keypad-btn h-12 rounded-xl bg-slate-100 hover:bg-slate-200 active:bg-slate-300 font-bold text-xl text-slate-800 transition flex items-center justify-center" data-val="0">
                0
              </button>
              <button class="keypad-btn h-12 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-red-600 transition flex items-center justify-center" data-action="backspace">
                ⌫
              </button>
            </div>

            <div id="pin-error" class="text-center text-xs text-red-600 font-semibold mt-3 hidden">
              ${t('signIn.invalidPin')}
            </div>
          </div>

          <!-- Instant Fingerprint Demo Button -->
          <button id="btn-demo-fingerprint" class="w-full h-12 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:bg-slate-950 transition flex items-center justify-center space-x-2 shadow-sm">
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11a7.96 7.96 0 001.246 4.303m2.754 4.869A17.933 17.933 0 0112 21c2.46 0 4.773-.497 6.87-1.393"/>
            </svg>
            <span>${t('signIn.useFingerprint')}</span>
          </button>
        </div>

        <!-- Inactivity Notice at bottom -->
        <div class="text-center text-xs text-slate-500 mt-6">
          <p>${t('signIn.autoLockNotice')}</p>
        </div>
      </div>
    `;
  }

  // Bind Sign-in Keypad and Customer Picker
  let enteredPin = "";
  function bindSignInEvents() {
    enteredPin = "";
    const updateDots = () => {
      const dots = document.querySelectorAll('.pin-dot');
      dots.forEach((dot, idx) => {
        if (idx < enteredPin.length) {
          dot.classList.add('bg-slate-900', 'border-slate-900');
        } else {
          dot.classList.remove('bg-slate-900', 'border-slate-900');
        }
      });
    };

    // Language Switcher on Sign In Screen
    document.querySelectorAll('.btn-set-lang').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.lang = btn.dataset.lang;
        saveAll();
        renderApp();
      });
    });

    document.querySelectorAll('.customer-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.dataset.guardian === 'true') {
          state.isGuardianMode = true;
          state.activeSubScreen = 'guardian';
        } else {
          state.isGuardianMode = false;
          state.currentCustomerId = card.dataset.customerId;
          const c = getCurrentCustomer();
          state.mode = c.defaultMode;
          state.lang = c.defaultLang;
        }
        renderApp();
      });
    });

    document.querySelectorAll('.keypad-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.val;
        const action = btn.dataset.action;
        const errorEl = document.getElementById('pin-error');
        if (errorEl) errorEl.classList.add('hidden');

        if (val !== undefined && enteredPin.length < 4) {
          enteredPin += val;
          updateDots();
          if (enteredPin.length === 4) {
            setTimeout(verifyPin, 150);
          }
        } else if (action === 'backspace') {
          enteredPin = enteredPin.slice(0, -1);
          updateDots();
        } else if (action === 'clear') {
          enteredPin = "";
          updateDots();
        }
      });
    });

    // Physical Keyboard support for PIN entry
    const handleSignInKeydown = (e) => {
      if (!document.getElementById('pin-dots')) {
        window.removeEventListener('keydown', handleSignInKeydown);
        return;
      }
      const errorEl = document.getElementById('pin-error');
      if (errorEl) errorEl.classList.add('hidden');

      if (/^[0-9]$/.test(e.key) && enteredPin.length < 4) {
        enteredPin += e.key;
        updateDots();
        if (enteredPin.length === 4) {
          setTimeout(verifyPin, 150);
        }
      } else if (e.key === 'Backspace') {
        enteredPin = enteredPin.slice(0, -1);
        updateDots();
      } else if (e.key === 'Escape' || e.key === 'Delete') {
        enteredPin = "";
        updateDots();
      }
    };
    window.addEventListener('keydown', handleSignInKeydown);

    const quickPinBtn = document.getElementById('btn-quick-fill-pin');
    if (quickPinBtn) {
      quickPinBtn.addEventListener('click', (e) => {
        e.preventDefault();
        enteredPin = "1234";
        updateDots();
        setTimeout(verifyPin, 100);
      });
    }

    function verifyPin() {
      // Compare SHA-256 hash of entered PIN with stored demo hash (never plaintext)
      const enteredHash = sha256(enteredPin);
      if (enteredHash === window.SaralConfig.demoCredentials.pinHash) {
        state.isAuthenticated = true;
        resetInactivityTimer();
        window.SaralAudio.playSound('success');
        if (state.isGuardianMode) {
          state.activeSubScreen = 'guardian';
        } else {
          state.activeTab = 'home';
          state.activeSubScreen = null;
        }
        renderApp();
      } else {
        window.SaralAudio.playSound('alert');
        const err = document.getElementById('pin-error');
        if (err) err.classList.remove('hidden');
        enteredPin = "";
        updateDots();
      }
    }

    const fpBtn = document.getElementById('btn-demo-fingerprint');
    if (fpBtn) {
      fpBtn.addEventListener('click', () => {
        state.isAuthenticated = true;
        resetInactivityTimer();
        window.SaralAudio.playSound('success');
        if (state.isGuardianMode) {
          state.activeSubScreen = 'guardian';
        } else {
          state.activeTab = 'home';
          state.activeSubScreen = null;
        }
        renderApp();
      });
    }
  }

  // ==========================================
  // SCREEN 2: HOME VIEW
  // ==========================================
  function renderHomeView(curCustomer, bank) {
    const balances = computeCustomerBalances(curCustomer.id);
    const customerName = getLocalized(curCustomer, 'name');
    const isSimple = state.mode === 'simple';
    const isYoungSaver = state.mode === 'young_saver';

    // Last 5 Transactions for Home
    const recentTxs = state.transactions
      .filter(t => t.customerId === curCustomer.id)
      .slice(0, 5);

    return `
      <div class="space-y-4">
        <!-- Mode Badge / Greeting -->
        <div class="flex items-center justify-between">
          <div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">
              ${t('home.greeting', { name: customerName.split(' ')[0] })}
            </h2>
            <p class="text-xs text-slate-500">
              ${isSimple ? 'सरल मोड (Simple Mode - आसान और स्पष्ट)' : (isYoungSaver ? 'Young Saver Account (Guardian Linked)' : 'Savings Standard Account')}
            </p>
          </div>
          ${isSimple ? `
            <span class="px-2.5 py-1 bg-amber-100 text-amber-900 font-bold text-xs rounded-full border border-amber-300">
              सरल मोड
            </span>
          ` : ''}
        </div>

        <!-- Microphone Button (The Standard: Hidden where browser does not support it) -->
        ${hasSpeechRecognition() ? `
          <button id="btn-open-voice" class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 font-bold text-xs hover:bg-teal-100 transition shadow-sm active:scale-[0.99]" aria-label="${t('voice.btnVoice')}">
            <div class="flex items-center space-x-2.5">
              <span class="w-7 h-7 rounded-full bg-teal-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
              </span>
              <span class="text-xs font-extrabold text-teal-900">${t('voice.btnVoice')}</span>
            </div>
            <span class="text-[11px] font-bold text-teal-700 bg-white px-2 py-0.5 rounded-md border border-teal-200 shadow-2xs">
              ${state.lang === 'hi' ? 'बोलकर कहें ➔' : 'Speak Command ➔'}
            </span>
          </button>
        ` : ''}

        <!-- ================= THE STANDARD: BALANCE AT TOP ================= -->
        <section class="balance-card rounded-2xl p-5 text-white shadow-md transition-all" style="background: linear-gradient(135deg, var(--brand-primary), var(--brand-hover));" aria-label="${t('home.availableBalance')}">
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-center space-x-1.5">
              <span class="text-xs tracking-wider uppercase font-semibold text-white/90">
                <span class="term-dotted cursor-pointer" data-glossary="Available Balance">${t('home.availableBalance')}</span>
              </span>
              ${hasVoiceForLang(state.lang) ? `
                <button id="btn-speak-balance" class="p-1 hover:bg-white/20 rounded-full transition" title="${t('common.readAloud')}">
                  <svg class="w-4 h-4 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.764l-4.502-3.602H2a1 1 0 01-1-1V7.838a1 1 0 011-1h1.881l4.502-3.602a1 1 0 011-.16zM14 6a1 1 0 011 1v6a1 1 0 11-2 0V7a1 1 0 011-1zm3-2a1 1 0 011 1v10a1 1 0 11-2 0V5a1 1 0 011-1z" clip-rule="evenodd"/>
                  </svg>
                </button>
              ` : ''}
            </div>
            <!-- Show / Hide Balance Toggle -->
            <button id="btn-toggle-balance" class="text-xs font-semibold bg-white/20 hover:bg-white/30 active:bg-white/40 px-3 py-1 rounded-full transition flex items-center space-x-1.5 shadow-2xs backdrop-blur-xs">
              ${state.balanceVisible ? `
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"/></svg>
              ` : `
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              `}
              <span>${state.balanceVisible ? t('home.hideBalance') : t('home.showBalance')}</span>
            </button>
          </div>

          <!-- Main Available Balance Display -->
          <div class="mb-2">
            <p class="text-3xl font-extrabold tracking-tight">
              ${state.balanceVisible ? formatINR(balances.availablePaise) : '₹ ••••••••'}
            </p>
            <p class="text-[11px] text-white/80 mt-0.5">
              ${t('home.availableHelp')}
            </p>
          </div>

          <!-- Total Balance vs Available Balance One-Line Explanation -->
          <div class="pt-3 mt-3 border-t border-white/20 flex items-center justify-between text-xs">
            <div>
              <span class="text-white/80"><span class="term-dotted cursor-pointer" data-glossary="Total Balance">${t('home.totalBalance')}</span>:</span>
              <span class="font-bold ml-1">${state.balanceVisible ? formatINR(balances.totalPaise) : '₹ ••••••'}</span>
            </div>
            ${balances.onHoldPaise > 0 ? `
              <div class="bg-black/25 px-2 py-0.5 rounded text-[11px]">
                <span class="term-dotted cursor-pointer text-amber-200" data-glossary="Balance on Hold">${t('home.onHold')}:</span>
                <span class="font-bold text-amber-200">${state.balanceVisible ? formatINR(balances.onHoldPaise) : '₹ ••••'}</span>
              </div>
            ` : ''}
          </div>
        </section>

        <!-- Young Saver Specific: Spending Limit & Goals -->
        ${isYoungSaver ? `
          <div class="bg-purple-50 border border-purple-200 rounded-xl p-3.5 space-y-3">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-purple-900">${t('home.dailyLimitRemaining')}</span>
              <span class="text-xs font-extrabold text-purple-800">${formatINR(curCustomer.dailyLimitPaise)} / day</span>
            </div>
            <div class="w-full bg-purple-200 rounded-full h-2">
              <div class="bg-purple-600 h-2 rounded-full" style="width: 75%"></div>
            </div>
            <p class="text-[11px] text-purple-700 leading-tight">
              ${t('home.guardianNotice')}
            </p>
          </div>

          <!-- Savings Goals -->
          <div class="bg-white border border-slate-200 rounded-xl p-3.5">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xs font-bold text-slate-800 uppercase tracking-wide">${t('home.savingsGoals')}</h3>
            </div>
            <div class="space-y-2.5">
              ${(curCustomer.savingsGoals || []).map(g => {
                const title = getLocalized(g, 'title');
                const pct = Math.min(100, Math.round((g.currentPaise / g.targetPaise) * 100));
                return `
                  <div class="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <div class="flex justify-between text-xs font-bold text-slate-800 mb-1">
                      <span>${title}</span>
                      <span>${formatINR(g.currentPaise)} / ${formatINR(g.targetPaise)}</span>
                    </div>
                    <div class="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div class="bg-emerald-600 h-2 rounded-full transition-all" style="width: ${pct}%"></div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        ` : ''}

        <!-- SIMPLE MODE 4 BIG ACTIONS (As Required for Shankar, 68) -->
        ${isSimple ? `
          <div class="grid grid-cols-1 gap-3 pt-1">
            <!-- 1. See My Money -->
            <button id="btn-simple-money" class="w-full h-16 rounded-2xl bg-teal-800 text-white font-extrabold text-lg flex items-center px-4 space-x-3 shadow hover:bg-teal-900 active:scale-[0.99] transition" style="background-color: var(--brand-primary);">
              <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">💰</div>
              <div class="text-left flex-1">
                <div class="text-base font-bold">${t('home.simpleSeeMoney')}</div>
                <div class="text-[11px] text-white/80 font-normal">${t('home.simpleSeeMoneySub')}</div>
              </div>
              <span class="text-white text-xl">➔</span>
            </button>

            <!-- 2. Send Money -->
            <button id="btn-simple-send" class="w-full h-16 rounded-2xl bg-emerald-600 text-white font-extrabold text-lg flex items-center px-4 space-x-3 shadow hover:bg-emerald-700 active:scale-[0.99] transition">
              <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">📤</div>
              <div class="text-left flex-1">
                <div class="text-base font-bold">${t('home.simpleSendMoney')}</div>
                <div class="text-[11px] text-white/80 font-normal">${t('home.simpleSendMoneySub')}</div>
              </div>
              <span class="text-white text-xl">➔</span>
            </button>

            <!-- 3. Recent Payments -->
            <button id="btn-simple-history" class="w-full h-16 rounded-2xl bg-slate-800 text-white font-extrabold text-lg flex items-center px-4 space-x-3 shadow hover:bg-slate-900 active:scale-[0.99] transition">
              <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">📋</div>
              <div class="text-left flex-1">
                <div class="text-base font-bold">${t('home.simpleRecentPayments')}</div>
                <div class="text-[11px] text-white/80 font-normal">${t('home.simpleRecentPaymentsSub')}</div>
              </div>
              <span class="text-white text-xl">➔</span>
            </button>

            <!-- 4. Help and Support -->
            <button id="btn-simple-help" class="w-full h-16 rounded-2xl bg-amber-600 text-white font-extrabold text-lg flex items-center px-4 space-x-3 shadow hover:bg-amber-700 active:scale-[0.99] transition">
              <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl">❓</div>
              <div class="text-left flex-1">
                <div class="text-base font-bold">${t('home.simpleHelp')}</div>
                <div class="text-[11px] text-white/80 font-normal">${t('home.simpleHelpSub')}</div>
              </div>
              <span class="text-white text-xl">➔</span>
            </button>
          </div>
        ` : `
          <!-- STANDARD QUICK ACTIONS -->
          <div class="grid grid-cols-3 gap-2">
            <button id="btn-quick-send" class="h-16 rounded-2xl border border-teal-100 bg-white hover:bg-teal-50/40 active:scale-[0.98] font-bold text-xs text-slate-800 flex flex-col items-center justify-center shadow-xs transition group">
              <span class="w-7 h-7 rounded-full bg-teal-100 group-hover:bg-teal-200 text-teal-800 flex items-center justify-center text-xs mb-1 transition">📤</span>
              <span class="font-extrabold text-slate-800">${t('pay.title')}</span>
            </button>
            <button id="btn-quick-payees" class="h-16 rounded-2xl border border-indigo-100 bg-white hover:bg-indigo-50/40 active:scale-[0.98] font-bold text-xs text-slate-800 flex flex-col items-center justify-center shadow-xs transition group">
              <span class="w-7 h-7 rounded-full bg-indigo-100 group-hover:bg-indigo-200 text-indigo-800 flex items-center justify-center text-xs mb-1 transition">👥</span>
              <span class="font-extrabold text-slate-800">${t('payees.title')}</span>
            </button>
            <button id="btn-quick-statement" class="h-16 rounded-2xl border border-amber-100 bg-white hover:bg-amber-50/40 active:scale-[0.98] font-bold text-xs text-slate-800 flex flex-col items-center justify-center shadow-xs transition group">
              <span class="w-7 h-7 rounded-full bg-amber-100 group-hover:bg-amber-200 text-amber-800 flex items-center justify-center text-xs mb-1 transition">📄</span>
              <span class="font-extrabold text-slate-800">${t('statements.title')}</span>
            </button>
          </div>
        `}

        <!-- Account Details Card (Masked Account, IFSC, Copy & Share) -->
        <section class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold text-slate-700 uppercase tracking-wide">${t('home.accountDetails')}</h3>
            <button id="btn-view-unmasked-account" class="text-xs font-semibold text-teal-700 hover:underline">
              ${t('home.viewDetails')} ➔
            </button>
          </div>

          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span class="text-slate-500 block text-[11px]">${t('home.accountNumber')}</span>
              <span class="font-mono font-bold text-slate-900">${curCustomer.accountNumberMasked}</span>
            </div>
            <div class="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <span class="text-slate-500 block text-[11px]"><span class="term-dotted cursor-pointer" data-glossary="IFSC">${t('home.ifsc')}</span></span>
              <span class="font-mono font-bold text-slate-900">${curCustomer.ifsc}</span>
            </div>
          </div>

          <!-- Copy and Share Account Details Buttons -->
          <div class="flex space-x-2">
            <button id="btn-copy-account" class="flex-1 h-11 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 active:scale-[0.99] font-bold text-xs text-slate-800 transition flex items-center justify-center space-x-2 shadow-2xs">
              <svg class="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
              </svg>
              <span>${t('common.copy')}</span>
            </button>
            <button id="btn-share-account" class="flex-1 h-11 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 active:scale-[0.99] font-bold text-xs text-slate-800 transition flex items-center justify-center space-x-2 shadow-2xs">
              <svg class="w-4 h-4 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
              <span>${t('common.share')}</span>
            </button>
          </div>
        </section>

        <!-- LAST 5 TRANSACTIONS IN PLAIN WORDS (With Arrow, Word & Colour) -->
        <section class="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between">
            <h3 class="text-xs font-bold text-slate-700 uppercase tracking-wide">${t('home.recentPayments')}</h3>
            <button id="btn-see-all-history" class="text-xs font-semibold text-teal-700 hover:underline">
              ${t('home.viewAllHistory')} ➔
            </button>
          </div>

          <div class="divide-y divide-slate-100">
            ${recentTxs.length === 0 ? `
              <p class="text-xs text-slate-400 py-3 text-center">${t('home.noTransactions')}</p>
            ` : recentTxs.map(tx => {
              const isCredit = tx.type === 'credit';
              const plainText = getLocalized(tx, 'plain');
              const dateObj = new Date(tx.timestamp);
              const dateStr = dateObj.toLocaleDateString(getLocale(), { month: 'short', day: 'numeric' });
              return `
                <div class="tx-item py-2.5 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition -mx-2 px-2 rounded-lg" data-tx-id="${tx.id}">
                  <!-- Direction Arrow + Plain Description -->
                  <div class="flex items-center space-x-3 min-w-0 pr-2">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${isCredit ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}">
                      ${isCredit ? '↓' : '↑'}
                    </div>
                    <div class="min-w-0">
                      <p class="text-xs font-bold text-slate-800 truncate">${plainText}</p>
                      <div class="flex items-center space-x-2 text-[10px] text-slate-400">
                        <span>${dateStr}</span>
                        <span>•</span>
                        <span class="font-semibold ${isCredit ? 'text-emerald-700' : 'text-rose-700'}">
                          ${isCredit ? t('common.moneyIn') : t('common.moneyOut')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <!-- Amount with colour and symbol -->
                  <div class="text-right flex-shrink-0">
                    <span class="text-xs font-extrabold ${isCredit ? 'text-emerald-700' : 'text-slate-900'}">
                      ${isCredit ? '+' : '-'}${formatINR(tx.amountPaise)}
                    </span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </section>
      </div>
    `;
  }

  // ==========================================
  // SCREEN 3: PAY VIEW (SEND MONEY SAFELY)
  // Implements The Standard 3 Steps:
  // Step 1: Fill In (Method, Who, Amount, Note)
  // Step 2: Review (Registered Name, Cooling Notice)
  // Step 3: PIN
  // Then Receipt.
  // ==========================================
  function renderPayView(curCustomer) {
    const pf = state.payFlow;
    const isSimple = state.mode === 'simple';

    // Check for incoming Payment Requests
    const customerRequests = state.paymentRequests.filter(r => r.forCustomerId === curCustomer.id);

    // ================= STEP 1: FILL IN METHOD & RECIPIENT =================
    if (pf.step === 1) {
      return `
        <div class="space-y-4">
          <div class="border-b border-slate-200 pb-2">
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('pay.title')}</h2>
            <p class="text-xs text-slate-500">${t('pay.chooseMethod')}</p>
          </div>

          <!-- Microphone Button on Pay Screen (Hidden where browser does not support it) -->
          ${hasSpeechRecognition() ? `
            <button id="btn-pay-voice" class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 font-bold text-xs hover:bg-indigo-100 transition shadow-sm active:scale-[0.99]" aria-label="${t('voice.btnVoicePay')}">
              <div class="flex items-center space-x-2.5">
                <span class="w-7 h-7 rounded-full bg-indigo-700 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/></svg>
                </span>
                <span class="text-xs font-extrabold text-indigo-900">${t('voice.btnVoicePay')}</span>
              </div>
              <span class="text-[11px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded-md border border-indigo-200 shadow-2xs">
                ${state.lang === 'hi' ? 'बोलकर भरें ➔' : 'Speak to Fill ➔'}
              </span>
            </button>
          ` : ''}

          <!-- Incoming Payment Requests (Prominently warned) -->
          ${customerRequests.length > 0 ? `
            <div class="bg-amber-50 border-2 border-amber-400 rounded-2xl p-4 shadow-sm space-y-3">
              <div class="flex items-center space-x-2 text-amber-900 font-bold text-xs uppercase tracking-wide">
                <span>⚠️</span>
                <span>${t('pay.incomingRequestsTitle')}</span>
              </div>
              ${customerRequests.map(req => {
                const note = getLocalized(req, 'note');
                return `
                  <div class="bg-white p-3.5 rounded-xl border border-amber-200 space-y-2">
                    <div class="flex justify-between items-start">
                      <div>
                        <p class="font-bold text-sm text-slate-900">${t('pay.requestAsking', { name: req.requesterName, amount: formatINR(req.amountPaise) })}</p>
                        <p class="text-xs text-slate-600 mt-0.5">${note}</p>
                      </div>
                    </div>
                    <!-- The Standard Mandatory Safety Warning -->
                    <div class="bg-rose-50 border-l-4 border-rose-500 p-2 text-[11px] text-rose-900 font-semibold leading-relaxed">
                      ${t('pay.requestWarning')}
                    </div>
                    <div class="flex space-x-2 pt-1">
                      <!-- Big Decline Button as requested -->
                      <button class="btn-decline-req flex-1 h-11 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition" data-req-id="${req.id}">
                        ${t('pay.declineRequest')}
                      </button>
                      <button class="btn-accept-req px-4 h-11 rounded-xl border border-rose-400 text-rose-700 font-bold text-xs hover:bg-rose-50 transition" data-req-id="${req.id}">
                        ${t('pay.acceptRequest')}
                      </button>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          ` : ''}

          <!-- Send Methods Tabs / Selector -->
          <div class="grid grid-cols-2 gap-2 text-xs font-bold">
            <button class="pay-method-btn h-13 rounded-2xl border-2 transition flex items-center px-3 space-x-2.5 ${pf.method === 'upi' ? 'border-teal-700 bg-teal-50 text-teal-950 shadow-xs' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}" data-method="upi">
              <span class="w-7 h-7 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-sm">📱</span>
              <span class="font-extrabold">${t('pay.toUpi')}</span>
            </button>
            <button class="pay-method-btn h-13 rounded-2xl border-2 transition flex items-center px-3 space-x-2.5 ${pf.method === 'mobile' ? 'border-teal-700 bg-teal-50 text-teal-950 shadow-xs' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}" data-method="mobile">
              <span class="w-7 h-7 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center text-sm">📞</span>
              <span class="font-extrabold">${t('pay.toMobile')}</span>
            </button>
            <button class="pay-method-btn h-13 rounded-2xl border-2 transition flex items-center px-3 space-x-2.5 ${pf.method === 'bank' ? 'border-teal-700 bg-teal-50 text-teal-950 shadow-xs' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}" data-method="bank">
              <span class="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-sm">🏦</span>
              <span class="font-extrabold">${t('pay.toBank')}</span>
            </button>
            <button class="pay-method-btn h-13 rounded-2xl border-2 transition flex items-center px-3 space-x-2.5 ${pf.method === 'payee' ? 'border-teal-700 bg-teal-50 text-teal-950 shadow-xs' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'}" data-method="payee">
              <span class="w-7 h-7 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-sm">👥</span>
              <span class="font-extrabold">${t('pay.toPayee')}</span>
            </button>
          </div>

          <!-- QR Scan Option (Displayed only where BarcodeDetector is supported by browser, hidden where it is not) -->
          ${(typeof window !== 'undefined' && 'BarcodeDetector' in window) ? `
            <button id="btn-scan-qr" class="w-full h-12 rounded-xl border-2 border-dashed border-teal-600 bg-teal-50/50 hover:bg-teal-50 text-teal-800 font-bold text-xs flex items-center justify-center space-x-2 transition">
              <svg class="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"/>
              </svg>
              <span>${t('pay.scanQr')}</span>
            </button>
          ` : ''}

          <!-- Input Fields according to chosen method -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            ${pf.method === 'upi' ? `
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('pay.enterUpi')}</label>
                <input id="input-pay-recipient" type="text" class="w-full h-12 px-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-600 font-mono text-sm" placeholder="e.g. suresh.kumar@sbi" value="${pf.recipientIdentifier}">
              </div>
            ` : pf.method === 'mobile' ? `
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('pay.enterMobile')}</label>
                <input id="input-pay-recipient" type="tel" maxlength="10" class="w-full h-12 px-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-600 font-mono text-sm" placeholder="9876543210" value="${pf.recipientIdentifier}">
              </div>
            ` : pf.method === 'bank' ? `
              <div class="space-y-2">
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">${t('pay.enterAccount')}</label>
                  <input id="input-pay-acc" type="text" class="w-full h-11 px-3 border border-slate-300 rounded-xl font-mono text-sm" placeholder="50100821920" value="${pf.recipientIdentifier}">
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 mb-1">${t('pay.enterIfsc')}</label>
                  <input id="input-pay-ifsc" type="text" maxlength="11" class="w-full h-11 px-3 border border-slate-300 rounded-xl font-mono text-sm uppercase" placeholder="SBIN0001089" value="${pf.recipientBank || ''}">
                </div>
              </div>
            ` : `
              <!-- Saved Payee Picker -->
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('pay.toPayee')}</label>
                <div class="space-y-2 max-h-48 overflow-y-auto pr-1">
                  ${state.payees.filter(p => p.customerId === curCustomer.id).map(p => `
                    <div class="payee-pick-card p-3 rounded-xl border border-slate-200 hover:border-teal-600 cursor-pointer transition flex items-center justify-between" data-payee-id="${p.id}">
                      <div>
                        <div class="font-bold text-xs text-slate-900">${p.name}</div>
                        <div class="text-[11px] text-slate-500 font-mono">${p.identifier}</div>
                        ${p.isNew ? `<span class="inline-block mt-0.5 text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.2 rounded">${t('payees.coolingBadge')}</span>` : ''}
                      </div>
                      <span class="text-xs text-teal-700 font-bold">Select ➔</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            `}

            <!-- Amount Input -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">${t('pay.enterAmount')}</label>
              <div class="relative">
                <span class="absolute left-3 top-3 text-lg font-bold text-slate-400">₹</span>
                <input id="input-pay-amount" type="number" step="1" min="1" class="w-full h-14 pl-8 pr-3 border-2 border-slate-300 rounded-xl font-extrabold text-2xl text-slate-900 focus:border-teal-700 focus:ring-0" placeholder="0" value="${pf.amountPaise ? pf.amountPaise / 100 : ''}">
              </div>
              <p id="amount-in-words" class="text-xs text-teal-800 font-semibold mt-1 min-h-[16px]"></p>
              <!-- Quick Amount Chips -->
              <div class="flex space-x-1.5 pt-1.5 overflow-x-auto no-scrollbar">
                <button type="button" class="btn-quick-amt px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition active:scale-95" data-amt="100">+₹100</button>
                <button type="button" class="btn-quick-amt px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition active:scale-95" data-amt="500">+₹500</button>
                <button type="button" class="btn-quick-amt px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition active:scale-95" data-amt="1000">+₹1,000</button>
                <button type="button" class="btn-quick-amt px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition active:scale-95" data-amt="2000">+₹2,000</button>
                <button type="button" class="btn-quick-amt px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition active:scale-95" data-amt="5000">+₹5,000</button>
              </div>
            </div>

            <!-- Note Input -->
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">${t('pay.enterNote')}</label>
              <input id="input-pay-note" type="text" class="w-full h-11 px-3 border border-slate-300 rounded-xl text-sm" placeholder="${t('pay.notePlaceholder')}" value="${pf.note}">
            </div>

            ${pf.errorMsg ? `
              <div class="p-3 bg-red-50 text-red-700 font-bold text-xs rounded-xl border border-red-200">
                ${pf.errorMsg}
              </div>
            ` : ''}
          </div>

          <!-- THE STANDARD: ONE BIG MAIN ACTION BUTTON AT BOTTOM -->
          <div class="pt-2">
            <button id="btn-pay-step1-continue" class="w-full ${isSimple ? 'h-16 text-lg' : 'h-14 text-base'} rounded-2xl bg-teal-700 text-white font-extrabold shadow-md hover:bg-teal-800 active:scale-[0.99] transition flex items-center justify-center space-x-2" style="background-color: var(--brand-primary);">
              <span>${t('common.continue')}</span>
              <span>➔</span>
            </button>
          </div>
        </div>
      `;
    }

    // ================= STEP 2: SAFETY CHECK OR ARE-YOU-SURE STEP =================
    if (pf.step === 2) {
      // Step 2 is the Calm Safety Check:
      // "Did someone call or message you asking you to send this?"
      return `
        <div class="space-y-4">
          <div class="border-b border-slate-200 pb-2">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">${t('common.stepOf', { step: 2, total: 4 })}</span>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">${t('safetyCheck.title')}</h2>
          </div>

          <div class="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 shadow-sm space-y-4">
            <div class="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-2xl mx-auto">
              🛡️
            </div>
            
            <p class="text-base font-extrabold text-slate-900 text-center leading-snug">
              ${t('safetyCheck.question')}
            </p>

            <p class="text-xs text-slate-600 text-center leading-relaxed">
              Scammers often pretend to be bank managers, electricity officers, or buyers to make you pay in a hurry.
            </p>

            <div class="space-y-3 pt-2">
              <!-- YES BUTTON -> STOPS PAYMENT -->
              <button id="btn-safety-yes" class="w-full h-14 rounded-xl bg-rose-600 text-white font-extrabold text-sm hover:bg-rose-700 active:scale-[0.99] transition flex items-center justify-center space-x-2">
                <span>⚠️</span>
                <span>${t('safetyCheck.yesScam')}</span>
              </button>

              <!-- NO BUTTON -> CONTINUES TO REVIEW -->
              <button id="btn-safety-no" class="w-full h-14 rounded-xl bg-teal-800 text-white font-extrabold text-sm hover:bg-teal-900 active:scale-[0.99] transition flex items-center justify-center space-x-2" style="background-color: var(--brand-primary);">
                <span>✓</span>
                <span>${t('safetyCheck.noSafe')}</span>
              </button>
            </div>
          </div>
        </div>
      `;
    }

    // ================= STEP 3: REVIEW EVERYTHING ON ONE SCREEN =================
    if (pf.step === 3) {
      return `
        <div class="space-y-4">
          <div class="border-b border-slate-200 pb-2">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">${t('common.stepOf', { step: 3, total: 4 })}</span>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">${t('pay.reviewTitle')}</h2>
            <p class="text-xs text-slate-500">${t('pay.reviewSubtitle')}</p>
          </div>

          <!-- Review Card -->
          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm space-y-4">
            <!-- Amount Display -->
            <div class="text-center py-2 bg-slate-50 rounded-xl border border-slate-100">
              <span class="text-xs text-slate-500 font-semibold block">${t('pay.amountToSend')}</span>
              <span class="text-3xl font-extrabold text-slate-900">${formatINR(pf.amountPaise)}</span>
              <p class="text-xs text-teal-800 font-semibold mt-0.5">
                ${inrToWords(pf.amountPaise)}
              </p>
            </div>

            <!-- Recipient Verification & Registered Name Check -->
            <div class="bg-teal-50 border border-teal-200 p-3.5 rounded-xl space-y-2">
              <div class="text-xs text-teal-900">
                <span class="text-teal-700 font-semibold block text-[11px]">${t('pay.registeredNameLabel')}</span>
                <span class="font-bold text-base text-teal-950">${pf.recipientRegisteredName || pf.recipientName || 'R*** Kumar'}</span>
              </div>
              <p class="text-xs font-bold text-teal-800 flex items-center space-x-1">
                <span>✓</span>
                <span>${t('pay.isThisRightPerson')}</span>
              </p>
            </div>

            <div class="text-xs space-y-2 pt-1 border-t border-slate-100">
              <div class="flex justify-between py-1">
                <span class="text-slate-500">${t('pay.payingTo')}</span>
                <span class="font-mono font-bold text-slate-800">${pf.recipientIdentifier}</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-slate-500">${t('pay.paidFrom')}</span>
                <span class="font-mono font-bold text-slate-800">${curCustomer.accountNumberMasked}</span>
              </div>
              ${pf.note ? `
                <div class="flex justify-between py-1">
                  <span class="text-slate-500">${t('pay.noteLabel')}</span>
                  <span class="font-semibold text-slate-800">${pf.note}</span>
                </div>
              ` : ''}
            </div>

            <!-- Cooling limit warning badge if applicable -->
            ${pf.isNewPayee ? `
              <div class="bg-amber-50 border border-amber-300 p-2.5 rounded-lg text-xs text-amber-900 leading-tight">
                <strong>${t('pay.coolingWarning')}</strong>
              </div>
            ` : ''}
          </div>

          <!-- The Standard: Big Button at bottom -->
          <div class="pt-2">
            <button id="btn-pay-review-confirm" class="w-full ${isSimple ? 'h-16 text-lg' : 'h-14 text-base'} rounded-2xl bg-teal-800 text-white font-extrabold shadow-md hover:bg-teal-900 active:scale-[0.99] transition" style="background-color: var(--brand-primary);">
              ${t('common.confirm')} ➔
            </button>
          </div>
        </div>
      `;
    }

    // ================= STEP 4: ENTER PIN =================
    if (pf.step === 4) {
      return `
        <div class="space-y-4">
          <div class="border-b border-slate-200 pb-2">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">${t('common.stepOf', { step: 4, total: 4 })}</span>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              ${t('pay.enterPinToPay', { amount: formatINR(pf.amountPaise) })}
            </h2>
          </div>

          <!-- Mandatory Safety Banner -->
          <div class="bg-emerald-50 border border-emerald-300 p-3 rounded-xl text-xs text-emerald-900 font-semibold text-center leading-relaxed">
            🛡️ ${t('pay.pinSubtext')}
          </div>

          <!-- PIN Pad -->
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div class="flex justify-center space-x-4 my-3" id="pay-pin-dots">
              <div class="pay-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
              <div class="pay-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
              <div class="pay-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
              <div class="pay-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
            </div>

            <div class="grid grid-cols-3 gap-2.5 max-w-[260px] mx-auto mt-4">
              ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => `
                <button class="pay-keypad-btn h-12 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xl text-slate-800 transition flex items-center justify-center" data-val="${num}">
                  ${num}
                </button>
              `).join('')}
              <button class="pay-keypad-btn h-12 rounded-xl bg-slate-100 font-bold text-xs text-slate-600 transition flex items-center justify-center" data-action="clear">
                ${t('common.clear')}
              </button>
              <button class="pay-keypad-btn h-12 rounded-xl bg-slate-100 font-bold text-xl text-slate-800 transition flex items-center justify-center" data-val="0">
                0
              </button>
              <button class="pay-keypad-btn h-12 rounded-xl bg-slate-100 font-bold text-xs text-red-600 transition flex items-center justify-center" data-action="backspace">
                ⌫
              </button>
            </div>

            <div id="pay-pin-error" class="text-center text-xs text-red-600 font-semibold mt-3 hidden">
              ${t('signIn.invalidPin')}
            </div>
          </div>
        </div>
      `;
    }

    // ================= STEP 5: RECEIPT =================
    if (pf.step === 5 && pf.completedTx) {
      const tx = pf.completedTx;
      const dateStr = new Date(tx.timestamp).toLocaleString(getLocale(), {
        dateStyle: 'medium',
        timeStyle: 'short'
      });

      return `
        <div class="space-y-4">
          <!-- Success Check Banner -->
          <div class="text-center py-4 bg-emerald-50 rounded-2xl border-2 border-emerald-400 space-y-2">
            <div class="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl mx-auto shadow-sm">
              ✓
            </div>
            <h2 class="text-xl font-extrabold text-emerald-950">${t('pay.paymentSuccess')}</h2>
            <p class="text-3xl font-extrabold text-slate-900">${formatINR(tx.amountPaise)}</p>
            <p class="text-xs text-emerald-800 font-semibold">
              ${inrToWords(tx.amountPaise)}
            </p>
          </div>

          <!-- Receipt Details Card -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-2.5">
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500"><span class="term-dotted cursor-pointer" data-glossary="Reference Number">${t('pay.referenceNumber')}</span></span>
              <span class="font-mono font-bold text-slate-900">${tx.referenceNumber}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('pay.paidTo')}</span>
              <span class="font-bold text-slate-900">${tx.counterpartyName}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('pay.paidFrom')}</span>
              <span class="font-mono text-slate-800">${curCustomer.accountNumberMasked}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('pay.dateAndTime')}</span>
              <span class="text-slate-800">${dateStr}</span>
            </div>
            ${tx.rawDescription ? `
              <div class="pt-1">
                <span class="text-slate-500 block text-[11px] mb-0.5">Raw Banking Reference:</span>
                <span class="font-mono text-[11px] bg-slate-100 p-1.5 rounded block text-slate-700 break-all">${tx.rawDescription}</span>
              </div>
            ` : ''}
          </div>

          <!-- Share & Actions -->
          <div class="space-y-2 pt-1">
            <button id="btn-share-receipt" class="w-full h-12 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 transition flex items-center justify-center space-x-2">
              <svg class="w-4 h-4 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
              </svg>
              <span>${t('pay.saveReceipt')}</span>
            </button>
            <button id="btn-pay-another" class="w-full h-14 rounded-2xl bg-teal-800 text-white font-extrabold text-sm hover:bg-teal-900 transition" style="background-color: var(--brand-primary);">
              ${t('pay.makeAnotherPayment')}
            </button>
          </div>
        </div>
      `;
    }

    // ================= STEP 6: YOUNG SAVER APPROVAL PENDING =================
    if (pf.step === 6 && pf.approvalPending) {
      return `
        <div class="space-y-4">
          <div class="text-center py-6 bg-purple-50 rounded-2xl border-2 border-purple-300 space-y-3">
            <div class="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl mx-auto shadow-sm">
              ⏳
            </div>
            <h2 class="text-xl font-extrabold text-purple-950">${t('pay.sentForApprovalTitle')}</h2>
            <p class="text-xs text-purple-800 leading-relaxed px-4">
              ${t('pay.sentForApprovalDesc', { amount: formatINR(pf.amountPaise), limit: formatINR(curCustomer.dailyLimitPaise) })}
            </p>
          </div>

          <div class="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2">
            <div class="flex justify-between">
              <span class="text-slate-500">Guardian:</span>
              <span class="font-bold text-slate-800">Meena Sharma (Mother)</span>
            </div>
            <div class="flex justify-between">
              <span class="text-slate-500">Status:</span>
              <span class="font-bold text-amber-600">${t('pay.approvalPendingBadge')}</span>
            </div>
          </div>

          <button id="btn-pay-another" class="w-full h-14 rounded-2xl bg-slate-900 text-white font-extrabold text-sm hover:bg-slate-800 transition">
            ${t('pay.backToHome')}
          </button>
        </div>
      `;
    }

    return '';
  }

  // ==========================================
  // SCREEN 4: PAYEES VIEW
  // ==========================================
  function renderPayeesView(curCustomer) {
    const custPayees = state.payees.filter(p => p.customerId === curCustomer.id);

    return `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-2">
          <div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('payees.title')}</h2>
            <p class="text-xs text-slate-500">${t('payees.coolingExplanation')}</p>
          </div>
          <button id="btn-open-add-payee" class="h-9 px-3 rounded-lg bg-teal-800 text-white font-bold text-xs hover:bg-teal-900 transition flex items-center space-x-1" style="background-color: var(--brand-primary);">
            <span>+</span>
            <span>${t('payees.addNew')}</span>
          </button>
        </div>

        <!-- 24-Hour Cooling Limit Rule Notice (Sample values in config.js) -->
        <div class="bg-amber-50 border border-amber-300 p-3 rounded-xl text-xs text-amber-950 flex items-start space-x-2">
          <span class="text-base flex-shrink-0">⏱️</span>
          <p class="leading-relaxed">
            <strong>${t('payees.coolingBadge')}:</strong> ${getLocalized(window.SaralConfig.newPayeeRules, 'reason')}
          </p>
        </div>

        <!-- Payee List -->
        <div class="space-y-2.5">
          ${custPayees.length === 0 ? `
            <p class="text-center text-xs text-slate-400 py-6">${t('payees.noPayees')}</p>
          ` : custPayees.map(p => `
            <div class="bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div class="space-y-1">
                <div class="flex items-center space-x-2">
                  <span class="font-bold text-sm text-slate-900">${p.name}</span>
                  ${p.isNew ? `
                    <span class="text-[10px] bg-amber-100 text-amber-900 font-extrabold px-2 py-0.5 rounded-full border border-amber-300">
                      ${t('payees.coolingBadge')}
                    </span>
                  ` : ''}
                </div>
                <p class="text-xs text-slate-500 font-mono">${p.identifier}</p>
                <p class="text-[11px] text-teal-800 font-semibold">${p.registeredName}</p>
              </div>
              <div class="flex items-center space-x-2">
                <button class="btn-payee-send-now px-3 py-1.5 rounded-lg bg-teal-50 text-teal-800 font-bold text-xs hover:bg-teal-100 transition" data-payee-id="${p.id}">
                  ${t('pay.title')} ➔
                </button>
                <button class="btn-delete-payee p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition" data-payee-id="${p.id}" title="${t('common.delete')}">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ==========================================
  // SCREEN 6: HISTORY VIEW
  // ==========================================
  let historySearch = "";
  let historyFilter = "all"; // 'all' | 'in' | 'out'
  let historyDateRange = "all"; // 'all' | '7d' | '30d' | '90d'
  let historyType = "all"; // 'all' | 'upi' | 'transfer' | 'pension' | 'bill'

  function renderHistoryView(curCustomer) {
    const custTxs = state.transactions.filter(t => t.customerId === curCustomer.id);
    
    // Filter with Direction, Date Range, Type and Search
    let filtered = custTxs.filter(tx => {
      if (historyFilter === 'in' && tx.type !== 'credit') return false;
      if (historyFilter === 'out' && tx.type !== 'debit') return false;
      if (historyDateRange !== 'all') {
        const txDate = new Date(tx.timestamp);
        const refDate = new Date('2026-10-23T18:00:00');
        const diffDays = (refDate - txDate) / (1000 * 60 * 60 * 24);
        if (historyDateRange === '7d' && diffDays > 7) return false;
        if (historyDateRange === '30d' && diffDays > 30) return false;
        if (historyDateRange === '90d' && diffDays > 90) return false;
      }
      if (historyType !== 'all') {
        const cat = (tx.category || '').toLowerCase();
        const mode = (tx.paymentMode || '').toLowerCase();
        if (historyType === 'upi' && mode !== 'upi') return false;
        if (historyType === 'transfer' && mode !== 'neft' && mode !== 'imps' && cat !== 'transfer') return false;
        if (historyType === 'pension' && cat !== 'pension' && cat !== 'salary') return false;
        if (historyType === 'bill' && cat !== 'utility' && cat !== 'bill' && cat !== 'recharge') return false;
      }
      if (historySearch) {
        const q = historySearch.toLowerCase();
        const text = ((tx.plainEn || '') + ' ' + (tx.plainHi || '') + ' ' + (tx.plainTa || '') + ' ' + (tx.counterpartyName || '') + ' ' + tx.amountPaise).toLowerCase();
        return text.includes(q);
      }
      return true;
    });

    // Compute Monthly Summary
    let totalIn = 0;
    let totalOut = 0;
    for (const t of custTxs) {
      if (t.type === 'credit') totalIn += t.amountPaise;
      else if (t.type === 'debit') totalOut += t.amountPaise;
    }

    // Group filtered by Date String
    const groups = {};
    for (const tx of filtered) {
      const d = new Date(tx.timestamp);
      const dayKey = d.toLocaleDateString(getLocale(), {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      if (!groups[dayKey]) groups[dayKey] = [];
      groups[dayKey].push(tx);
    }

    return `
      <div class="space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200 pb-2">
          <div>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('history.title')}</h2>
            <p class="text-xs text-slate-500">${t('history.tapToExplain')}</p>
          </div>
          <button id="btn-open-statement" class="h-9 px-3 rounded-lg border border-slate-300 bg-white font-bold text-xs text-slate-700 hover:bg-slate-50 transition">
            ${t('statements.title')}
          </button>
        </div>

        <!-- Monthly Summary Box -->
        <div class="grid grid-cols-2 gap-2 text-xs">
          <div class="bg-gradient-to-br from-emerald-50 to-teal-50/50 border border-emerald-200/80 p-3.5 rounded-2xl shadow-xs">
            <div class="flex items-center space-x-1.5 text-emerald-800 font-semibold mb-1">
              <span class="w-5 h-5 rounded-full bg-emerald-200/70 text-emerald-900 flex items-center justify-center text-[10px] font-extrabold">↓</span>
              <span class="text-[11px] uppercase tracking-wider">${t('history.totalReceived')}</span>
            </div>
            <span class="text-lg font-extrabold text-emerald-950">+${formatINR(totalIn)}</span>
          </div>
          <div class="bg-gradient-to-br from-rose-50 to-red-50/50 border border-rose-200/80 p-3.5 rounded-2xl shadow-xs">
            <div class="flex items-center space-x-1.5 text-rose-800 font-semibold mb-1">
              <span class="w-5 h-5 rounded-full bg-rose-200/70 text-rose-900 flex items-center justify-center text-[10px] font-extrabold">↑</span>
              <span class="text-[11px] uppercase tracking-wider">${t('history.totalSpent')}</span>
            </div>
            <span class="text-lg font-extrabold text-rose-950">-${formatINR(totalOut)}</span>
          </div>
        </div>

        <!-- Search & Filter Controls (Money In, Money Out, Date Range, Type) -->
        <div class="space-y-2.5">
          <input id="input-history-search" type="text" class="w-full h-11 px-3 border border-slate-300 rounded-xl text-xs placeholder:text-slate-400" placeholder="${t('history.searchPlaceholder')}" value="${historySearch}">
          
          <!-- Direction Filter Chips -->
          <div class="flex space-x-1.5 text-xs font-bold overflow-x-auto pb-0.5">
            <button class="filter-chip px-3 py-1.5 rounded-full transition flex-shrink-0 ${historyFilter === 'all' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}" data-filter="all">
              ${t('history.filterAll')}
            </button>
            <button class="filter-chip px-3 py-1.5 rounded-full transition flex-shrink-0 ${historyFilter === 'in' ? 'bg-emerald-700 text-white' : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'}" data-filter="in">
              ↓ ${t('history.filterIn')}
            </button>
            <button class="filter-chip px-3 py-1.5 rounded-full transition flex-shrink-0 ${historyFilter === 'out' ? 'bg-rose-700 text-white' : 'bg-rose-50 text-rose-800 hover:bg-rose-100'}" data-filter="out">
              ↑ ${t('history.filterOut')}
            </button>
          </div>

          <!-- Date Range & Type Selectors -->
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div>
              <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">${t('history.filterDateRange')}</label>
              <select id="select-history-range" class="w-full h-9 px-2 border border-slate-300 rounded-lg bg-white text-xs text-slate-800 font-medium">
                <option value="all" ${historyDateRange === 'all' ? 'selected' : ''}>${t('history.rangeAll')}</option>
                <option value="7d" ${historyDateRange === '7d' ? 'selected' : ''}>${t('history.rangeLast7')}</option>
                <option value="30d" ${historyDateRange === '30d' ? 'selected' : ''}>${t('history.rangeLast30')}</option>
                <option value="90d" ${historyDateRange === '90d' ? 'selected' : ''}>${t('history.rangeLast90')}</option>
              </select>
            </div>
            <div>
              <label class="block text-[10px] font-bold text-slate-500 uppercase mb-1">${t('history.filterType')}</label>
              <select id="select-history-type" class="w-full h-9 px-2 border border-slate-300 rounded-lg bg-white text-xs text-slate-800 font-medium">
                <option value="all" ${historyType === 'all' ? 'selected' : ''}>${t('history.typeAll')}</option>
                <option value="upi" ${historyType === 'upi' ? 'selected' : ''}>${t('history.typeUpi')}</option>
                <option value="transfer" ${historyType === 'transfer' ? 'selected' : ''}>${t('history.typeTransfer')}</option>
                <option value="pension" ${historyType === 'pension' ? 'selected' : ''}>${t('history.typePension')}</option>
                <option value="bill" ${historyType === 'bill' ? 'selected' : ''}>${t('history.typeBill')}</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Grouped Transaction Feed -->
        <div class="space-y-4">
          ${Object.keys(groups).length === 0 ? `
            <p class="text-center text-xs text-slate-400 py-8">${t('home.noTransactions')}</p>
          ` : Object.entries(groups).map(([dayLabel, dayTxs]) => `
            <div>
              <div class="text-xs font-extrabold text-slate-500 uppercase tracking-wider mb-1.5 px-1">${dayLabel}</div>
              <div class="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100 overflow-hidden">
                ${dayTxs.map(tx => {
                  const isCredit = tx.type === 'credit';
                  const plainText = getLocalized(tx, 'plain');
                  return `
                    <div class="tx-item p-3 flex items-center justify-between cursor-pointer hover:bg-slate-50 transition" data-tx-id="${tx.id}">
                      <div class="flex items-center space-x-3 min-w-0 pr-2">
                        <div class="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold ${isCredit ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}">
                          ${isCredit ? '↓' : '↑'}
                        </div>
                        <div class="min-w-0">
                          <p class="text-xs font-bold text-slate-800 truncate">${plainText}</p>
                          <p class="text-[10px] text-slate-400 font-mono truncate">${tx.rawDescription}</p>
                        </div>
                      </div>
                      <div class="text-right flex-shrink-0">
                        <span class="text-xs font-extrabold ${isCredit ? 'text-emerald-700' : 'text-slate-900'}">
                          ${isCredit ? '+' : '-'}${formatINR(tx.amountPaise)}
                        </span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // ==========================================
  // SCREEN 7: STATEMENTS VIEW
  // ==========================================
  let statementPeriod = '3months'; // 'lastMonth' | '3months' | '6months'

  function renderStatementsView(curCustomer, bank) {
    const custTxs = state.transactions.filter(t => t.customerId === curCustomer.id);
    const balances = computeCustomerBalances(curCustomer.id);

    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('statements.title')}</h2>
          <p class="text-xs text-slate-500">${t('statements.periodLabel')}</p>
        </div>

        <!-- Period Selector Chips -->
        <div class="grid grid-cols-3 gap-2 text-xs font-bold">
          <button class="statement-period-chip h-10 rounded-xl border transition ${statementPeriod === 'lastMonth' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-700'}" data-period="lastMonth">
            ${t('statements.lastMonth').split(' ')[0]}
          </button>
          <button class="statement-period-chip h-10 rounded-xl border transition ${statementPeriod === '3months' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-700'}" data-period="3months">
            ${t('statements.last3Months').split('(')[0]}
          </button>
          <button class="statement-period-chip h-10 rounded-xl border transition ${statementPeriod === '6months' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-700'}" data-period="6months">
            ${t('statements.last6Months')}
          </button>
        </div>

        <!-- Statement Preview Card -->
        <div id="printable-statement" class="bg-white p-5 rounded-2xl border-2 border-slate-300 shadow-sm space-y-4 text-xs">
          <!-- Statement Header -->
          <div class="flex justify-between items-start border-b border-slate-200 pb-3">
            <div>
              <h3 class="font-bold text-base text-slate-900">${getLocalized(bank, 'name')}</h3>
              <p class="text-[11px] text-slate-500">${t('statements.title')}</p>
            </div>
            <div class="text-right">
              <span class="font-mono font-bold text-slate-800">${curCustomer.accountNumberMasked}</span>
              <span class="block text-[10px] text-slate-400">IFSC: ${curCustomer.ifsc}</span>
            </div>
          </div>

          <!-- Balances Summary -->
          <div class="grid grid-cols-2 gap-2 text-xs py-1 bg-slate-50 p-2.5 rounded-xl">
            <div>
              <span class="text-slate-500 block text-[11px]">${t('statements.openingBalance')}</span>
              <span class="font-bold text-slate-900">${formatINR(balances.openingPaise)}</span>
            </div>
            <div class="text-right">
              <span class="text-slate-500 block text-[11px]">${t('statements.closingBalance')}</span>
              <span class="font-extrabold text-teal-900">${formatINR(balances.totalPaise)}</span>
            </div>
          </div>

          <!-- Transaction Table (Showing up to 15 in mobile preview) -->
          <div class="space-y-1.5 max-h-60 overflow-y-auto pr-1">
            ${custTxs.slice(0, 15).map(tx => {
              const isCredit = tx.type === 'credit';
              const dateStr = new Date(tx.timestamp).toLocaleDateString(getLocale(), { month: 'short', day: 'numeric' });
              return `
                <div class="flex justify-between py-1 border-b border-slate-100 text-[11px]">
                  <div class="truncate max-w-[200px]">
                    <span class="text-slate-400 mr-1">${dateStr}</span>
                    <span class="font-semibold text-slate-800">${getLocalized(tx, 'plain')}</span>
                  </div>
                  <span class="font-bold ${isCredit ? 'text-emerald-700' : 'text-slate-900'}">
                    ${isCredit ? '+' : '-'}${formatINR(tx.amountPaise)}
                  </span>
                </div>
              `;
            }).join('')}
          </div>

          <p class="text-[10px] text-slate-400 italic text-center pt-2 border-t border-slate-100">
            ${t('statements.statementDisclaimer')}
          </p>
        </div>

        <!-- Download & Print Actions -->
        <div class="space-y-2 pt-2">
          <button id="btn-download-csv" class="w-full h-12 rounded-xl border-2 border-teal-700 bg-teal-50 text-teal-900 font-bold text-xs hover:bg-teal-100 transition flex items-center justify-center space-x-2">
            <svg class="w-4 h-4 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
            </svg>
            <span>${t('statements.downloadCsv')}</span>
          </button>
          <button id="btn-print-pdf" class="w-full h-14 rounded-2xl bg-teal-800 text-white font-extrabold text-sm hover:bg-teal-900 transition flex items-center justify-center space-x-2 shadow-sm" style="background-color: var(--brand-primary);">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
            </svg>
            <span>${t('statements.printPdf')}</span>
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // THE STANDARD 3-STEP SERVICE & SETTINGS FLOW
  // (1. Fill Details -> 2. Review on One Screen -> 3. Confirm with PIN/OTP -> 4. Receipt)
  // ==========================================
  let servicePinEntered = "";

  function renderServiceFlowView(curCustomer, bank) {
    const flow = state.serviceFlow;
    if (!flow) return '';

    const isSimple = state.mode === 'simple';

    // STEP 1: FILL DETAILS
    if (flow.step === 1) {
      return `
        <div class="space-y-4">
          <div class="border-b border-slate-200 pb-2">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">${t('common.stepOf', { step: 1, total: 3 })}</span>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              ${flow.type === 'contact' ? t('services.updateProfile') :
                flow.type === 'cheque' ? t('services.chequeBook') :
                flow.type === 'limits' ? t('services.setLimits') :
                flow.type === 'nominee' ? t('services.nomineeDetails') :
                t('payees.addNew')}
            </h2>
          </div>

          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm space-y-4">
            ${flow.type === 'contact' ? `
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('services.newPhoneLabel')}</label>
                <input id="input-flow-phone" type="tel" class="w-full h-12 px-3 border border-slate-300 rounded-xl text-sm font-mono" value="${flow.phone || curCustomer.phone}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('services.newEmailLabel')}</label>
                <input id="input-flow-email" type="email" class="w-full h-12 px-3 border border-slate-300 rounded-xl text-sm" value="${flow.email || curCustomer.id + '@example.com'}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('services.newAddressLabel')}</label>
                <textarea id="input-flow-address" class="w-full p-3 border border-slate-300 rounded-xl text-sm leading-relaxed" rows="2">${flow.address || getLocalized(curCustomer, 'address')}</textarea>
              </div>
            ` : flow.type === 'cheque' ? `
              <div class="space-y-3">
                <div class="p-3 bg-teal-50 rounded-xl border border-teal-200">
                  <span class="font-extrabold text-teal-950 block text-sm">20 Cheque Leaves Book</span>
                  <span class="text-xs text-teal-800">Standard personalized CTS-2010 cheque book</span>
                </div>
                <div>
                  <span class="text-xs font-bold text-slate-700 block mb-1">${t('services.chequeDeliveryAddress')}</span>
                  <p class="text-xs text-slate-800 bg-slate-50 p-2.5 rounded-xl border border-slate-200">${getLocalized(curCustomer, 'address')}</p>
                </div>
              </div>
            ` : flow.type === 'limits' ? `
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('services.newLimitLabel')}</label>
                <input id="input-flow-limit" type="number" class="w-full h-12 px-3 border border-slate-300 rounded-xl text-base font-bold font-mono" value="${(flow.limitPaise || 5000000) / 100}">
                <p class="text-[11px] text-slate-500 mt-1">Current Limit: ${formatINR(curCustomer.dailyLimitPaise || 5000000)}</p>
              </div>
            ` : flow.type === 'nominee' ? `
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('services.nomineeNameLabel')}</label>
                <input id="input-flow-nominee-name" type="text" class="w-full h-12 px-3 border border-slate-300 rounded-xl text-sm" value="${flow.name || getLocalized(curCustomer, 'nominee').split('(')[0].trim()}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('services.nomineeRelationLabel')}</label>
                <input id="input-flow-nominee-relation" type="text" class="w-full h-12 px-3 border border-slate-300 rounded-xl text-sm" value="${flow.relation || 'Spouse'}">
              </div>
            ` : `
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('payees.payeeNameLabel')}</label>
                <input id="input-flow-payee-name" type="text" class="w-full h-12 px-3 border border-slate-300 rounded-xl text-sm" placeholder="e.g. Ramesh Kumar" value="${flow.name || ''}">
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-700 mb-1">${t('payees.payeeIdentifierLabel')}</label>
                <input id="input-flow-payee-id" type="text" class="w-full h-12 px-3 border border-slate-300 rounded-xl text-sm font-mono" placeholder="ramesh@upi or 9876543210" value="${flow.identifier || ''}">
              </div>
              <div class="bg-amber-50 p-2.5 rounded-xl border border-amber-300 text-xs text-amber-950 font-medium leading-relaxed">
                ℹ️ ${getLocalized(window.SaralConfig.newPayeeRules, 'reason')}
              </div>
            `}

            ${flow.errorMsg ? `<div class="p-2.5 bg-red-50 text-red-700 text-xs font-bold rounded-lg border border-red-200">${flow.errorMsg}</div>` : ''}

            <button id="btn-flow-step1-continue" class="w-full ${isSimple ? 'h-16 text-base' : 'h-14 text-sm'} rounded-2xl bg-teal-800 text-white font-extrabold shadow-md hover:bg-teal-900 active:scale-[0.99] transition" style="background-color: var(--brand-primary);">
              ${t('common.continue')} ➔
            </button>
          </div>
        </div>
      `;
    }

    // STEP 2: REVIEW ON ONE SCREEN
    if (flow.step === 2) {
      return `
        <div class="space-y-4">
          <div class="border-b border-slate-200 pb-2">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">${t('common.stepOf', { step: 2, total: 3 })}</span>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">${t('services.reviewSetting')}</h2>
          </div>

          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm space-y-4">
            <div class="space-y-3 text-xs">
              ${flow.type === 'contact' ? `
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div class="flex justify-between py-1 border-b border-slate-200/60">
                    <span class="text-slate-500">${t('services.newPhoneLabel')}</span>
                    <span class="font-mono font-bold text-slate-900">${flow.phone}</span>
                  </div>
                  <div class="flex justify-between py-1 border-b border-slate-200/60">
                    <span class="text-slate-500">${t('services.newEmailLabel')}</span>
                    <span class="font-bold text-slate-900">${flow.email}</span>
                  </div>
                  <div class="py-1">
                    <span class="text-slate-500 block mb-0.5">${t('services.newAddressLabel')}</span>
                    <span class="font-semibold text-slate-900 leading-snug block">${flow.address}</span>
                  </div>
                </div>
              ` : flow.type === 'cheque' ? `
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div class="flex justify-between py-1 border-b border-slate-200/60">
                    <span class="text-slate-500">Service</span>
                    <span class="font-bold text-slate-900">20 Cheque Leaves Book</span>
                  </div>
                  <div class="flex justify-between py-1 border-b border-slate-200/60">
                    <span class="text-slate-500">Charges</span>
                    <span class="font-bold text-emerald-700">₹0 (Free)</span>
                  </div>
                  <div class="py-1">
                    <span class="text-slate-500 block mb-0.5">${t('services.chequeDeliveryAddress')}</span>
                    <span class="font-semibold text-slate-900 block">${getLocalized(curCustomer, 'address')}</span>
                  </div>
                </div>
              ` : flow.type === 'limits' ? `
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div class="flex justify-between py-1 border-b border-slate-200/60">
                    <span class="text-slate-500">Previous Limit</span>
                    <span class="font-mono text-slate-500">${formatINR(curCustomer.dailyLimitPaise || 5000000)}</span>
                  </div>
                  <div class="flex justify-between py-1">
                    <span class="text-slate-700 font-bold">New Daily Limit</span>
                    <span class="font-mono font-extrabold text-teal-800 text-base">${formatINR(flow.limitPaise)}</span>
                  </div>
                </div>
              ` : flow.type === 'nominee' ? `
                <div class="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div class="flex justify-between py-1 border-b border-slate-200/60">
                    <span class="text-slate-500">Nominee Name</span>
                    <span class="font-bold text-slate-900">${flow.name}</span>
                  </div>
                  <div class="flex justify-between py-1">
                    <span class="text-slate-500">Relationship</span>
                    <span class="font-bold text-slate-900">${flow.relation}</span>
                  </div>
                </div>
              ` : `
                <div class="p-3.5 bg-teal-50 rounded-xl border border-teal-200 space-y-2">
                  <div>
                    <span class="text-[11px] text-teal-700 font-semibold block">${t('pay.registeredNameLabel')}</span>
                    <span class="font-bold text-base text-teal-950">${flow.registeredName || 'R*** Kumar'}</span>
                  </div>
                  <p class="text-xs font-bold text-teal-800">✓ ${t('pay.isThisRightPerson')}</p>
                </div>
                <div class="p-2.5 bg-amber-50 rounded-xl border border-amber-300 text-xs text-amber-950 font-medium">
                  ⏱️ ${t('payees.coolingBadge')}: ${getLocalized(window.SaralConfig.newPayeeRules, 'reason')}
                </div>
              `}
            </div>

            <button id="btn-flow-step2-continue" class="w-full ${isSimple ? 'h-16 text-base' : 'h-14 text-sm'} rounded-2xl bg-teal-800 text-white font-extrabold shadow-md hover:bg-teal-900 active:scale-[0.99] transition" style="background-color: var(--brand-primary);">
              ${flow.type === 'contact' || flow.type === 'cheque' ? 'Confirm with Demo OTP ➔' : 'Confirm with Demo PIN ➔'}
            </button>
          </div>
        </div>
      `;
    }

    // STEP 3: CONFIRMATION (OTP for Contact/Cheque, PIN for Limits/Nominee/Payee)
    if (flow.step === 3) {
      const isOtp = flow.type === 'contact' || flow.type === 'cheque';
      return `
        <div class="space-y-4">
          <div class="border-b border-slate-200 pb-2">
            <span class="text-xs font-bold text-teal-700 uppercase tracking-wider">${t('common.stepOf', { step: 3, total: 3 })}</span>
            <h2 class="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">
              ${isOtp ? t('services.enterOtpPrompt') : t('pay.enterPinToPay', { amount: 'Update' })}
            </h2>
          </div>

          <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm space-y-4 text-center">
            ${isOtp ? `
              <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 font-medium">
                <strong>Demo OTP: 123456</strong> (This is a prototype, never enter real OTPs anywhere)
              </div>
              <div>
                <input id="input-flow-otp" type="text" maxlength="6" class="w-48 h-12 text-center text-2xl font-mono font-bold tracking-widest border-2 border-slate-300 rounded-xl mx-auto block" value="123456">
              </div>
              ${flow.errorMsg ? `<p class="text-xs text-red-600 font-bold">${flow.errorMsg}</p>` : ''}
              <button id="btn-flow-confirm-otp" class="w-full h-14 rounded-2xl bg-teal-800 text-white font-extrabold text-base hover:bg-teal-900 active:scale-[0.99] transition" style="background-color: var(--brand-primary);">
                ${t('common.confirm')}
              </button>
            ` : `
              <p class="text-xs text-slate-500">${t('signIn.demoPinHelp')}</p>
              <div class="flex justify-center space-x-3 my-2" id="service-pin-dots">
                <div class="service-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
                <div class="service-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
                <div class="service-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
                <div class="service-pin-dot w-4 h-4 rounded-full border-2 border-slate-400"></div>
              </div>
              <div class="grid grid-cols-3 gap-2 max-w-[240px] mx-auto pt-2">
                ${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => `
                  <button class="service-keypad-btn h-11 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-lg text-slate-800 transition" data-val="${num}">
                    ${num}
                  </button>
                `).join('')}
                <button class="service-keypad-btn h-11 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-slate-600 transition" data-action="clear">
                  ${t('common.clear')}
                </button>
                <button class="service-keypad-btn h-11 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-lg text-slate-800 transition" data-val="0">
                  0
                </button>
                <button class="service-keypad-btn h-11 rounded-xl bg-slate-100 hover:bg-slate-200 font-bold text-xs text-red-600 transition" data-action="backspace">
                  ⌫
                </button>
              </div>
              <div id="service-pin-error" class="text-xs text-red-600 font-bold hidden">
                ${t('signIn.invalidPin')}
              </div>
            `}
          </div>
        </div>
      `;
    }

    // STEP 4: RECEIPT
    if (flow.step === 4) {
      return `
        <div class="space-y-4">
          <div class="text-center py-4 bg-emerald-50 rounded-2xl border-2 border-emerald-400 space-y-2">
            <div class="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl mx-auto shadow-sm">
              ✓
            </div>
            <h2 class="text-xl font-extrabold text-emerald-950">${t('services.settingReceiptTitle')}</h2>
            <p class="text-xs text-emerald-800 font-medium">Ref: ${flow.refNumber}</p>
          </div>

          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm text-xs space-y-2">
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">Service</span>
              <span class="font-bold text-slate-900">${flow.title}</span>
            </div>
            <div class="flex justify-between py-1 border-b border-slate-100">
              <span class="text-slate-500">${t('common.status')}</span>
              <span class="font-bold text-emerald-700 uppercase">Confirmed ✓</span>
            </div>
            <div class="flex justify-between py-1">
              <span class="text-slate-500">Date</span>
              <span class="font-medium text-slate-800">${new Date().toLocaleString(getLocale())}</span>
            </div>
          </div>

          <button id="btn-flow-done" class="w-full h-14 rounded-2xl bg-teal-800 text-white font-extrabold text-base hover:bg-teal-900 active:scale-[0.99] transition shadow-md" style="background-color: var(--brand-primary);">
            ${t('common.done')}
          </button>
        </div>
      `;
    }

    return '';
  }

  // ==========================================
  // SCREEN 8: SERVICES VIEW
  // ==========================================
  function renderServicesView(curCustomer) {
    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('services.title')}</h2>
        </div>

        <!-- Service Cards Grid -->
        <div class="space-y-3">
          <!-- Update Profile Details -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition">
            <div class="flex items-center space-x-3 pr-2 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-lg flex-shrink-0">
                👤
              </div>
              <div class="min-w-0">
                <h3 class="font-extrabold text-sm text-slate-900">${t('services.updateProfile')}</h3>
                <p class="text-xs text-slate-500 truncate">${t('services.updateProfileDesc')}</p>
              </div>
            </div>
            <button id="btn-service-profile" class="h-9 px-3.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs transition flex-shrink-0">
              ${t('common.edit')} ➔
            </button>
          </div>

          <!-- Request Cheque Book -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition">
            <div class="flex items-center space-x-3 pr-2 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-800 flex items-center justify-center text-lg flex-shrink-0">
                ✉️
              </div>
              <div class="min-w-0">
                <h3 class="font-extrabold text-sm text-slate-900"><span class="term-dotted cursor-pointer" data-glossary="Cheque Book">${t('services.chequeBook')}</span></h3>
                <p class="text-xs text-slate-500 truncate">${t('services.chequeBookDesc')}</p>
              </div>
            </div>
            <button id="btn-service-cheque" class="h-9 px-3.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-bold text-xs transition flex-shrink-0">
              ${t('services.chequeBook')} ➔
            </button>
          </div>

          <!-- Debit Card Safety Toggle -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition">
            <div class="flex items-center space-x-3 pr-2 min-w-0">
              <div class="w-10 h-10 rounded-xl ${curCustomer.cardBlocked ? 'bg-rose-50 text-rose-800' : 'bg-emerald-50 text-emerald-800'} flex items-center justify-center text-lg flex-shrink-0">
                💳
              </div>
              <div class="min-w-0">
                <h3 class="font-extrabold text-sm text-slate-900"><span class="term-dotted cursor-pointer" data-glossary="Debit Card">${t('services.cardSafety')}</span></h3>
                <p class="text-xs text-slate-500 truncate">${curCustomer.cardBlocked ? t('services.blockCard') : t('common.active')}</p>
              </div>
            </div>
            <button id="btn-toggle-card-block" class="h-9 px-3.5 rounded-xl font-bold text-xs transition shadow-2xs ${curCustomer.cardBlocked ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-red-50 hover:bg-red-100 text-red-700 border border-red-200'}">
              ${curCustomer.cardBlocked ? t('services.unblockCard') : t('services.blockCard')}
            </button>
          </div>

          <!-- Set UPI Spending Limits -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition">
            <div class="flex items-center space-x-3 pr-2 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center text-lg flex-shrink-0">
                ⏱️
              </div>
              <div class="min-w-0">
                <h3 class="font-extrabold text-sm text-slate-900">${t('services.setLimits')}</h3>
                <p class="text-xs text-slate-500 truncate">${formatINR(curCustomer.dailyLimitPaise || 5000000)} / ${t('guardian.perDay')}</p>
              </div>
            </div>
            <button id="btn-service-limits" class="h-9 px-3.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 font-bold text-xs transition flex-shrink-0">
              ${t('common.edit')} ➔
            </button>
          </div>

          <!-- Nominee Details -->
          <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-slate-300 transition">
            <div class="flex items-center space-x-3 pr-2 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center text-lg flex-shrink-0">
                🛡️
              </div>
              <div class="min-w-0">
                <h3 class="font-extrabold text-sm text-slate-900"><span class="term-dotted cursor-pointer" data-glossary="Nominee">${t('services.nomineeDetails')}</span></h3>
                <p class="text-xs text-slate-500 truncate">${getLocalized(curCustomer, 'nominee')}</p>
              </div>
            </div>
            <button id="btn-service-nominee" class="h-9 px-3.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs transition flex-shrink-0">
              ${t('common.edit')} ➔
            </button>
          </div>
        </div>
            <button id="btn-service-nominee" class="h-9 px-3 rounded-lg bg-teal-50 text-teal-800 font-bold text-xs hover:bg-teal-100 transition flex-shrink-0">
              ${t('common.edit')} ➔
            </button>
          </div>
        </div>

        <!-- Request Status Timeline (Requested -> In Progress -> Done) -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 class="text-xs font-bold text-slate-700 uppercase tracking-wide">${t('services.requestTimeline')}</h3>
          ${state.serviceRequests.length === 0 ? `
            <p class="text-xs text-slate-400 py-2">${t('common.noData')}</p>
          ` : state.serviceRequests.map(req => {
            const title = getLocalized(req, 'title');
            const eta = getLocalized(req, 'eta');
            return `
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                <div class="flex justify-between text-xs font-bold text-slate-900">
                  <span>${title}</span>
                  <span class="text-amber-700 uppercase text-[10px] bg-amber-100 px-2 py-0.5 rounded-full">${req.status.replace('_', ' ')}</span>
                </div>
                <!-- Timeline Steps -->
                <div class="flex items-center justify-between text-[10px] text-slate-500 pt-1">
                  <div class="flex items-center space-x-1 font-bold text-teal-700">
                    <span class="w-3 h-3 rounded-full bg-teal-600 inline-block"></span>
                    <span>${t('services.statusRequested')}</span>
                  </div>
                  <div class="h-0.5 flex-1 bg-teal-400 mx-2"></div>
                  <div class="flex items-center space-x-1 font-bold text-teal-700">
                    <span class="w-3 h-3 rounded-full bg-teal-600 inline-block"></span>
                    <span>${t('services.statusInProgress')}</span>
                  </div>
                  <div class="h-0.5 flex-1 bg-slate-200 mx-2"></div>
                  <div class="flex items-center space-x-1 text-slate-400">
                    <span class="w-3 h-3 rounded-full bg-slate-300 inline-block"></span>
                    <span>${t('services.statusCompleted')}</span>
                  </div>
                </div>
                <p class="text-[11px] text-slate-600 mt-1">${eta}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }

  // ==========================================
  // SCREEN 9: LEARN VIEW
  // ==========================================
  function renderLearnView() {
    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('learn.title')}</h2>
          <p class="text-xs text-slate-500">${t('learn.subtitle')}</p>
        </div>

        <!-- Lessons Cards (1-2 lines each, with Speak Button) -->
        <div class="space-y-3">
          <!-- Lesson 1: Savings Account -->
          <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-sm text-slate-900">${t('learn.lessonSavingsTitle')}</h3>
              ${hasVoiceForLang(state.lang) ? `
                <button class="btn-read-lesson p-1 rounded hover:bg-slate-100 text-teal-700" data-text="${t('learn.lessonSavingsText')}">
                  🔊
                </button>
              ` : ''}
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('learn.lessonSavingsText')}</p>
          </div>

          <!-- Lesson 2: Interest -->
          <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-sm text-slate-900">${t('learn.lessonInterestTitle')}</h3>
              ${hasVoiceForLang(state.lang) ? `
                <button class="btn-read-lesson p-1 rounded hover:bg-slate-100 text-teal-700" data-text="${t('learn.lessonInterestText')}">
                  🔊
                </button>
              ` : ''}
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('learn.lessonInterestText')}</p>
          </div>

          <!-- Lesson 3: Minimum Balance -->
          <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-sm text-slate-900">${t('learn.lessonMinBalanceTitle')}</h3>
              ${hasVoiceForLang(state.lang) ? `
                <button class="btn-read-lesson p-1 rounded hover:bg-slate-100 text-teal-700" data-text="${t('learn.lessonMinBalanceText')}">
                  🔊
                </button>
              ` : ''}
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('learn.lessonMinBalanceText')}</p>
          </div>

          <!-- Lesson 4: Sample Bank Charges -->
          <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h3 class="font-bold text-sm text-slate-900">${t('learn.lessonSampleChargesTitle')} (Sample)</h3>
            <div class="space-y-1.5 text-xs">
              ${window.SaralConfig.sampleCharges.map(sc => `
                <div class="flex justify-between py-1 border-b border-slate-100">
                  <div>
                    <span class="font-bold text-slate-800">${getLocalized(sc, 'name')}</span>
                    <span class="block text-[11px] text-slate-500">${getLocalized(sc, 'plainDesc')}</span>
                  </div>
                  <span class="font-extrabold text-teal-800 ml-2 whitespace-nowrap">${formatINR(sc.amountPaise)}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Lesson 5: UPI -->
          <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-1.5">
            <div class="flex items-center justify-between">
              <h3 class="font-bold text-sm text-slate-900">${t('learn.lessonUpiTitle')}</h3>
              ${hasVoiceForLang(state.lang) ? `
                <button class="btn-read-lesson p-1 rounded hover:bg-slate-100 text-teal-700" data-text="${t('learn.lessonUpiText')}">
                  🔊
                </button>
              ` : ''}
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('learn.lessonUpiText')}</p>
          </div>
        </div>

        <!-- Spot 6 Common Scams -->
        <div class="bg-rose-50 border border-rose-200 rounded-2xl p-4 space-y-3">
          <h3 class="font-extrabold text-sm text-rose-950 flex items-center space-x-1.5">
            <span>🛡️</span>
            <span>${t('learn.spotScamsTitle')}</span>
          </h3>
          <div class="space-y-2.5">
            ${window.SaralScams.map(scam => `
              <div class="bg-white p-3 rounded-xl border border-rose-200 space-y-1">
                <span class="font-bold text-xs text-rose-900 block">${getLocalized(scam, 'title')}</span>
                <p class="text-xs text-slate-600">${getLocalized(scam, 'explanation')}</p>
                <div class="bg-rose-100/60 p-1.5 rounded text-[11px] text-rose-950 font-bold">
                  ${state.lang === 'ta' ? 'விதி' : state.lang === 'hi' ? 'नियम' : 'Rule'}: ${getLocalized(scam, 'safetyRule')}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Glossary Explorer -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <h3 class="font-bold text-xs text-slate-700 uppercase tracking-wide">${state.lang === 'ta' ? 'வங்கி கலைச்சொல் விளக்கம் (Glossary)' : state.lang === 'hi' ? 'बैंकिंग शब्दकोश (Glossary)' : 'Banking Glossary'}</h3>
          <p class="text-xs text-slate-500">${t('learn.glossaryNotice')}</p>
          <div class="flex flex-wrap gap-1.5 pt-2">
            ${window.SaralGlossary.map(g => `
              <button class="term-dotted text-xs font-semibold px-2 py-1 rounded bg-slate-100 hover:bg-teal-50 hover:text-teal-900 transition" data-glossary="${g.term}">
                ${getLocalized(g, 'label')}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // ==========================================
  // HELPER: HTML ESCAPING
  // ==========================================
  function escapeHtml(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // ==========================================
  // CLIENT-SIDE SENSITIVE DATA MASKING
  // Masks card numbers, account numbers, OTP, PIN before leaving the browser
  // ==========================================
  function maskSensitiveData(text) {
    if (!text || typeof text !== 'string') return { maskedText: '', hadSensitiveData: false, detectedTypes: [] };
    
    let str = text;
    let hadSensitive = false;
    let detected = [];

    // 1. Credit / Debit Card Numbers (16 digits: 1234 5678 1234 5678 or 16 continuous)
    const cardRegex = /\b(?:\d{4}[ -]?){3}\d{4}\b/g;
    if (cardRegex.test(str)) {
      hadSensitive = true;
      detected.push('Card Number');
      str = str.replace(cardRegex, '[CARD NUMBER HIDDEN]');
    }

    // 2. Bank Account Numbers (9 to 18 continuous digits)
    const accountRegex = /\b\d{9,18}\b/g;
    if (accountRegex.test(str)) {
      hadSensitive = true;
      detected.push('Account Number');
      str = str.replace(accountRegex, '[ACCOUNT NUMBER HIDDEN]');
    }

    // 3. OTP (6 digits, standalone or in context)
    const otpContextRegex = /(?:\b(?:otp|code|one[- ]time[- ]password|passcode|ओटीपी|கடவுச்சொல்)\s*[:=]?\s*)(\d{6})\b/gi;
    if (otpContextRegex.test(str)) {
      hadSensitive = true;
      detected.push('OTP');
      str = str.replace(otpContextRegex, (m, g1) => m.replace(g1, '[OTP HIDDEN]'));
    }
    const standalone6Regex = /\b\d{6}\b/g;
    if (standalone6Regex.test(str)) {
      hadSensitive = true;
      if (!detected.includes('OTP')) detected.push('OTP');
      str = str.replace(standalone6Regex, '[OTP HIDDEN]');
    }

    // 4. PIN (4 digits in context of pin / mpin / password / secret, e.g. "pin 1234", "pin is 1234", "pin: 1234")
    const pinContextRegex = /(?:\b(?:pin|mpin|passcode|secret|password|पिन|ரகசிய எண்)\b[^0-9]{1,15})(\d{4})\b/gi;
    if (pinContextRegex.test(str)) {
      hadSensitive = true;
      detected.push('PIN');
      str = str.replace(pinContextRegex, (m, g1) => m.replace(g1, '[PIN HIDDEN]'));
    }
    const pinDirectRegex = /(?:\b(?:pin|mpin|passcode|secret|password|पिन|ரகசிய எண்)\s*[:=]?\s*)(\d{4})\b/gi;
    if (pinDirectRegex.test(str)) {
      hadSensitive = true;
      if (!detected.includes('PIN')) detected.push('PIN');
      str = str.replace(pinDirectRegex, (m, g1) => m.replace(g1, '[PIN HIDDEN]'));
    }

    return {
      maskedText: str,
      hadSensitiveData: hadSensitive,
      detectedTypes: detected
    };
  }

  // ==========================================
  // OFFLINE FAQ & SCAM KEYWORD FALLBACK ENGINE
  // ==========================================
  function getOfflineHelpAnswer(query) {
    const qLower = (query || '').toLowerCase();
    const lang = state.lang || 'hi';

    // 1. Sensitive Data Warning
    if (qLower.includes('[otp hidden]') || qLower.includes('[pin hidden]') || qLower.includes('[card number hidden]') || qLower.includes('[account number hidden]') || qLower.includes('otp') || (qLower.includes('pin') && (qLower.includes('मेरा पिन') || qLower.includes('my pin') || qLower.includes('my otp')))) {
      if (lang === 'hi') {
        return "⚠️ महत्वपूर्ण सुरक्षा नियम: अपना गोपनीय पिन (PIN), ओटीपी (OTP) या कार्ड विवरण किसी के साथ साझा न करें! बैंक कर्मचारी या पुलिस भी कभी आपका पिन या ओटीपी नहीं मांगते। हमने आपकी सुरक्षा के लिए इसे छुपा दिया है।";
      } else if (lang === 'ta') {
        return "⚠️ முக்கியமான பாதுகாப்பு எச்சரிக்கை: உங்கள் ரகசிய எண் (PIN), ஒருமுறை கடவுச்சொல் (OTP) அல்லது வங்கி அட்டை விவரங்களை யாரிடமும் ஒருபோதும் பகிராதீர்கள்! வங்கி ஊழியர்கள் கூட இதைக் கேட்க மாட்டார்கள். உங்கள் பாதுகாப்பிற்காக இது மறைக்கப்பட்டுள்ளது.";
      } else {
        return "⚠️ Important Security Warning: Never share your secret PIN, OTP, or Card details with anyone! Bank officials and police will NEVER ask for your PIN or OTP. We have masked sensitive details for your safety.";
      }
    }

    // 2. Caller claims account blocked today (Fake KYC Scam #1)
    if (qLower.includes('blocked today') || qLower.includes('account will be blocked') || qLower.includes('खाता बंद') || qLower.includes('ब्लॉक') || qLower.includes('முடக்கப்படும்') || qLower.includes('caller says')) {
      if (lang === 'hi') {
        return "🚨 सावधान! यह एक जाना-पहचाना बैंक फ्रॉड (धोखाधड़ी) है!\n\nबैंक कभी भी फ़ोन या एसएमएस पर यह नहीं कहते कि 'आपका खाता आज बंद हो जाएगा' और न ही लिंक भेजते हैं।\n\n• किसी भी अनजान लिंक पर क्लिक न करें।\n• किसी भी कॉलर को ओटीपी, पासवर्ड या पिन न बताएं।\n• तुरंत राष्ट्रीय साइबर हेल्पलाइन 1930 पर कॉल करें या ऊपर दिए गए 'आपातकालीन 1-टैप खाता सुरक्षा (फ्रीज)' बटन को दबाएं।";
      } else if (lang === 'ta') {
        return "🚨 எச்சரிக்கை! இது ஒரு வங்கி மோசடி (Scam)!\n\nவங்கிகள் ஒருபோதும் தொலைபேசியிலோ அல்லது குறுஞ்செய்தியிலோ 'உங்கள் கணக்கு இன்று முடக்கப்படும்' எனக் கூறி விவரங்களை கேட்காது.\n\n• எந்த லிங்க்கையும் தொடாதீர்கள்.\n• யாருக்கும் OTP அல்லது PIN பகிராதீர்கள்.\n• உடனடியாக தேசிய சைபர் உதவி எண் 1930-க்கு அழைக்கவும் அல்லது மேலே உள்ள 'அவசர கணக்கு முடக்கம்' பொத்தானைப் பயன்படுத்தவும்.";
      } else {
        return "🚨 SCAM ALERT: This is a common banking fraud!\n\nGenuine banks NEVER call or send SMS claiming 'your account will be blocked today' to force you to share details or click links.\n\n• Do not click any SMS links.\n• Never share any OTP or PIN with any caller.\n• Immediately call National Cyber Helpline 1930 or tap 'Emergency 1-Tap Freeze' above.";
      }
    }

    // 3. User requests assistant to move money
    if ((qLower.includes('send') || qLower.includes('transfer') || qLower.includes('pay') || qLower.includes('भेज') || qLower.includes('அனுப்ப')) && (qLower.includes('rupee') || qLower.includes('रुपये') || qLower.includes('ரூபாய்') || qLower.includes('₹') || qLower.includes('to '))) {
      if (lang === 'hi') {
        return "मैं केवल आपकी सहायता और जानकारी के लिए एक AI गाइड हूँ। सुरक्षा कारणों से मैं स्वयं पैसे नहीं भेज सकता।\n\nपैसे भेजने के लिए: कृपया स्क्रीन के नीचे दिए गए 'Pay (भुगतान)' टैब पर टैप करें।";
      } else if (lang === 'ta') {
        return "நான் ஒரு தகவல் வழிகாட்டி மட்டுமே. பாதுகாப்பு காரணங்களுக்காக என்னால் நேரடியாக பணம் அனுப்ப முடியாது.\n\nபணம் அனுப்ப: தயவுசெய்து திரையின் கீழே உள்ள 'Pay (பணம் செலுத்து)' பொத்தானைத் தொடவும்.";
      } else {
        return "I am an informational AI assistant and cannot move money or initiate transfers directly.\n\nTo send money safely: Please tap the 'Pay' tab at the bottom of your screen.";
      }
    }

    // 4. User asks to block card
    if ((qLower.includes('block') || qLower.includes('बंद')) && (qLower.includes('कार्ड') || qLower.includes('card') || qLower.includes('அட்டை'))) {
      if (lang === 'hi') {
        return "अपना डेबिट कार्ड तुरंत ब्लॉक करने के लिए:\n1. नीचे दिए गए 'Services (सेवाएं)' टैब पर जाएं और 'डेबिट कार्ड' विकल्प चुनें, या\n2. इसी स्क्रीन के ऊपर दिए गए 'आपातकालीन 1-टैप खाता सुरक्षा (फ्रीज)' बटन पर टैप करें।";
      } else if (lang === 'ta') {
        return "உங்கள் வங்கி அட்டையை உடனே முடக்க:\n1. கீழே உள்ள 'Services (சேவைகள்)' பகுதிக்குச் சென்று 'வங்கி அட்டை' என்பதைத் தேர்ந்தெடுக்கவும், அல்லது\n2. மேலே உள்ள 'அவசர கணக்கு முடக்கம்' பொத்தானைத் தொடவும்.";
      } else {
        return "To block your debit card immediately:\n1. Go to the 'Services' tab at the bottom and choose 'Debit Card', or\n2. Tap the red 'Emergency 1-Tap Freeze' button at the top of this Help screen.";
      }
    }

    // 5. Transaction Explanation (DR, CR, raw descriptions)
    if (qLower.includes('dr') || qLower.includes('cr') || qLower.includes('upi/dr') || qLower.includes('upi/cr') || qLower.includes('explain this transaction') || qLower.includes('लेन-देन') || qLower.includes('பரிவர்த்தனை')) {
      if (lang === 'hi') {
        return "लेन-देन विवरण का सरल अर्थ:\n• DR (डेबिट): आपके खाते से पैसे निकले या कटे हैं।\n• CR (क्रेडिट): आपके खाते में पैसे आए या जमा हुए हैं।\n• UPI/DR/... कोड में लेन-देन का प्रकार, 12 अंकों का संदर्भ संख्या (UTR), प्राप्तकर्ता का नाम और बैंक का नाम शामिल होता है।";
      } else if (lang === 'ta') {
        return "பரிவர்த்தனை விவரத்தின் எளிய விளக்கம்:\n• DR (பற்று): உங்கள் கணக்கிலிருந்து பணம் வெளியே சென்றது.\n• CR (வரவு): உங்கள் கணக்கில் பணம் வரவு வைக்கப்பட்டது.\n• UPI/DR/... குறியீட்டில் பணப் பரிமாற்ற வகை, 12 இலக்க UTR எண், பெறுபவரின் பெயர் மற்றும் வங்கியின் பெயர் இருக்கும்.";
      } else {
        return "Transaction codes explained:\n• DR (Debit): Money went OUT of your account (spent or transferred).\n• CR (Credit): Money came INTO your account (received or deposited).\n• Raw tags like 'UPI/DR/412345678901/RAMESH K/SBIN' contain the payment network (UPI), direction (DR), reference number, receiver name, and recipient bank.";
      }
    }

    // 6. Limits queries ("maximum amount", "daily limit", "how much can i send", "highest", etc.)
    if (qLower.includes('limit') || qLower.includes('maximum') || qLower.includes('max') || qLower.includes('how much') || qLower.includes('highest') || qLower.includes('daily cap') || qLower.includes('सीमा') || qLower.includes('अधिकतम') || qLower.includes('कितने पैसे') || qLower.includes('வரம்பு') || qLower.includes('அதிகபட்ச')) {
      if (lang === 'hi') {
        return "सरल बैंकिंग की दैनिक लेन-देन सीमाएं (Daily Limits):\n\n• सामान्य दैनिक सीमा: ₹50,000 प्रति दिन।\n• नया व्यक्ति जोड़ने पर सीमा: पहले 24 घंटे में अधिकतम ₹10,000 (कूलिंग पीरियड सुरक्षा नियम ताकि गलत भुगतान से बचा जा सके)।\n• यंग सेवर खाता (18 वर्ष से कम): अभिभावक द्वारा निर्धारित सीमा (अधिकतम ₹1,000 प्रति दिन)।";
      } else if (lang === 'ta') {
        return "சரள் வங்கியின் தினசரி பரிவர்த்தனை வரம்புகள் (Daily Limits):\n\n• வழக்கமான தினசரி வரம்பு: ஒரு நாளைக்கு அதிகபட்சம் ₹50,000 வரை.\n• புதிய நபரைச் சேர்த்தால்: முதல் 24 மணி நேரத்திற்கு அதிகபட்சம் ₹10,000 மட்டுமே (பாதுகாப்பு Cooling Period விதி).\n• இளம் சேமிப்பாளர் கணக்கு: பெற்றோர் நிர்ணயித்த வரம்பு (ஒரு நாளைக்கு அதிகபட்சம் ₹1,000).";
      } else {
        return "Saral Banking Daily Transaction Limits:\n\n• Default Daily Limit: Up to ₹50,000 per day.\n• Newly Added Payee Limit: Maximum ₹10,000 for the first 24 hours (Cooling Period safety rule to protect against scams and hasty mistakes).\n• Young Saver Accounts (Under 18): Guardian-set limit (up to ₹1,000 per day).";
      }
    }

    // 7. Search in FAQ, Scams, and Glossary
    let bestMatch = null;
    let maxScore = 0;
    const words = qLower.split(/[\s,?.!]+/).filter(w => w.length > 2);

    (window.SaralFAQ || []).forEach(f => {
      let score = 0;
      const kw = (f.keywords || []).join(' ').toLowerCase();
      const qText = ((f.questionEn || '') + ' ' + (f.questionHi || '') + ' ' + (f.questionTa || '')).toLowerCase();
      words.forEach(w => {
        if (kw.includes(w)) score += 3;
        if (qText.includes(w)) score += 2;
      });
      if (score > maxScore) {
        maxScore = score;
        bestMatch = getLocalized(f, 'answer');
      }
    });

    if (maxScore < 3) {
      (window.SaralScams || []).forEach(s => {
        let score = 0;
        const kw = (s.triggerKeywords || []).join(' ').toLowerCase();
        words.forEach(w => {
          if (kw.includes(w)) score += 3;
        });
        if (score > maxScore) {
          maxScore = score;
          bestMatch = getLocalized(s, 'explanation') + "\n\n💡 " + getLocalized(s, 'safetyRule');
        }
      });
    }

    if (maxScore < 3) {
      (window.SaralGlossary || []).forEach(g => {
        let score = 0;
        const term = (g.term || '').toLowerCase();
        if (qLower.includes(term)) score += 4;
        if (score > maxScore) {
          maxScore = score;
          bestMatch = getLocalized(g, 'plainMeaning');
        }
      });
    }

    if (bestMatch && maxScore >= 2) {
      return bestMatch;
    }

    // Honest uncertainty fallback
    if (lang === 'hi') {
      return "मुझे इस प्रश्न का पूरा उत्तर निश्चित रूप से नहीं पता। सुरक्षित बचत और स्पष्ट जानकारी के लिए कृपया अपनी बैंक शाखा में संपर्क करें या राष्ट्रीय साइबर हेल्पलाइन 1930 पर सहायता लें।";
    } else if (lang === 'ta') {
      return "இந்தக் கேள்விக்கான முழுமையான பதில் எனக்குத் தெளிவாகத் தெரியவில்லை. உங்கள் கணக்கின் பாதுகாப்பிற்கு உங்கள் வங்கிக் கிளையைத் தொடர்பு கொள்ளவும் அல்லது தேசிய சைபர் உதவி எண் 1930-ஐ அழைக்கவும்.";
    } else {
      return "I am not completely certain about this specific query. For your security and clear guidance, please contact your local bank branch or call the National Cyber Crime Helpline at 1930.";
    }
  }

  function initDefaultChatMessages() {
    if (!state.chatMessages || state.chatMessages.length === 0) {
      const lang = state.lang || 'hi';
      let greeting = "Hello! I am your Saral Sahayak (AI Banking Guide). Ask me any question about savings, payments, terms, or safety in plain words.";
      if (lang === 'hi') {
        greeting = "नमस्ते! मैं आपका सरल सहायक (AI बैंकिंग गाइड) हूँ। बैंकिंग, बचत, या सुरक्षा से जुड़ा कोई भी सवाल सरल भाषा में पूछें।";
      } else if (lang === 'ta') {
        greeting = "வணக்கம்! நான் உங்கள் சரள் உதவியாளர் (AI வங்கி வழிகாட்டி). வங்கி, சேமிப்பு அல்லது பாதுகாப்பு குறித்த எந்தக் கேள்வியையும் எளிய மொழியில் கேளுங்கள்.";
      }
      state.chatMessages = [
        {
          role: 'assistant',
          text: greeting,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
    }
  }

  // ==========================================
  // SEND CHAT QUERY TO SERVER / FALLBACK
  // ==========================================
  async function sendUserChatMessage(rawText) {
    const trimmed = (rawText || '').trim();
    if (!trimmed) return;

    // Enforce 500-char limit
    const limitedText = trimmed.slice(0, 500);

    // MASK SENSITIVE DATA BEFORE ANY NETWORK DISPATCH
    const { maskedText } = maskSensitiveData(limitedText);

    // Initial greeting if history was empty
    initDefaultChatMessages();

    const nowTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    state.chatMessages.push({
      role: 'user',
      text: maskedText,
      time: nowTime
    });

    state.chatInput = '';
    state.aiTyping = true;
    renderApp();

    setTimeout(() => {
      const el = document.getElementById('ai-chat-messages-container');
      if (el) el.scrollTop = el.scrollHeight;
    }, 40);

    // Send only the last 10 messages as context
    const contextMsgs = state.chatMessages.slice(-10).map(m => ({
      role: m.role === 'user' ? 'user' : 'assistant',
      content: m.text
    }));

    try {
      const resp = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: contextMsgs,
          userLanguage: state.lang || 'hi'
        })
      });

      if (!resp.ok) {
        throw new Error(`Server returned ${resp.status}`);
      }

      const data = await resp.json();

      if (data && data.reply && !data.fallback) {
        state.chatMessages.push({
          role: 'assistant',
          text: data.reply,
          provider: data.provider || 'Gemini AI',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
      } else {
        // Fallback to keyword matching
        const fallbackAnswer = getOfflineHelpAnswer(maskedText);
        state.chatMessages.push({
          role: 'assistant',
          text: fallbackAnswer,
          isOffline: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
      }
    } catch (err) {
      console.warn('[Saral AI] Network error, activating offline FAQ fallback:', err);
      const fallbackAnswer = getOfflineHelpAnswer(maskedText);
      state.chatMessages.push({
        role: 'assistant',
        text: fallbackAnswer,
        isOffline: true,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    } finally {
      state.aiTyping = false;
      renderApp();
      setTimeout(() => {
        const el = document.getElementById('ai-chat-messages-container');
        if (el) el.scrollTop = el.scrollHeight;
      }, 40);
    }
  }

  // ==========================================
  // SCREEN 10: HELP VIEW
  // ==========================================
  function renderHelpView() {
    const curCustomer = getCurrentCustomer();
    initDefaultChatMessages();

    const messagesHtml = state.chatMessages.map(msg => {
      const isUser = msg.role === 'user';
      const formattedText = escapeHtml(msg.text).replace(/\n/g, '<br>');
      return `
        <div class="flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1">
          <div class="max-w-[85%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
            isUser
              ? 'bg-teal-800 text-white rounded-br-none shadow-xs'
              : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none shadow-xs'
          }" ${isUser ? 'style="background-color: var(--brand-primary);"' : ''}>
            <div>${formattedText}</div>
            ${msg.isOffline ? `
              <div class="mt-1 text-[10px] text-amber-700 font-bold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 inline-block">
                ⚡ ${t('help.offlineNotice')}
              </div>
            ` : msg.provider ? `
              <div class="mt-1 text-[10px] text-teal-700 font-bold bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200 inline-block">
                ✨ ${msg.provider}
              </div>
            ` : ''}
          </div>
          <span class="text-[10px] text-slate-400 px-1">${msg.time || ''}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('help.title')}</h2>
        </div>

        <!-- EMERGENCY FRAUD REPORT CARD (1-Tap Freeze) -->
        <div class="bg-rose-50 border-2 border-rose-400 rounded-2xl p-4 shadow-sm space-y-3">
          <div class="flex items-center space-x-2 text-rose-900 font-extrabold text-sm">
            <span class="text-lg">🚨</span>
            <span>${t('help.reportFraudTitle')}</span>
          </div>
          <p class="text-xs text-rose-800 leading-relaxed">
            ${t('help.reportFraudDesc')}
          </p>

          ${curCustomer.cardBlocked && curCustomer.upiBlocked ? `
            <div class="bg-rose-200 text-rose-950 p-2.5 rounded-xl text-xs font-bold text-center">
              ${t('help.frozenNotice')}
            </div>
            <button id="btn-unfreeze-everything" class="w-full h-12 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition">
              ${t('help.unfreezeBtn')}
            </button>
          ` : `
            <button id="btn-emergency-freeze" class="w-full h-13 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-[0.99] text-white font-extrabold text-xs transition flex items-center justify-center space-x-2 shadow">
              <span>🛑</span>
              <span>${t('help.freezeEverythingBtn')}</span>
            </button>
          `}

          <!-- National Helplines -->
          <div class="pt-2 border-t border-rose-200 flex justify-between items-center text-xs">
            <div>
              <span class="text-rose-900 font-bold block">${t('help.nationalHelplines')}:</span>
              <a href="tel:1930" class="text-rose-700 font-extrabold text-sm underline">${t('help.cyberHelplineNumber')}</a>
            </div>
            <a href="https://cybercrime.gov.in" target="_blank" rel="noopener" class="text-xs font-bold text-rose-800 bg-white px-2.5 py-1.5 rounded-lg border border-rose-300 hover:bg-rose-100 transition">
              ${t('help.cyberPortalLink')} ↗
            </a>
          </div>
        </div>

        <!-- THE STANDARD SCREEN LINK -->
        <div class="bg-teal-50 border-2 border-teal-600 rounded-2xl p-4 shadow-sm flex items-center justify-between cursor-pointer hover:bg-teal-100/60 transition" id="btn-open-the-standard">
          <div>
            <h3 class="font-extrabold text-base text-teal-950">${t('help.theStandardTitle')}</h3>
            <p class="text-xs text-teal-800">${t('help.theStandardDesc')}</p>
          </div>
          <span class="text-teal-800 font-bold text-xl ml-2">➔</span>
        </div>

        <!-- SARAL SAHAYAK AI CHAT CARD -->
        <div class="bg-white rounded-2xl border-2 border-teal-700 shadow-sm overflow-hidden flex flex-col">
          <!-- Chat Header -->
          <div class="bg-teal-800 text-white p-3 flex items-center justify-between" style="background-color: var(--brand-primary);">
            <div class="flex items-center space-x-2">
              <div class="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-sm">
                🤖
              </div>
              <div>
                <h3 class="font-extrabold text-xs leading-tight">${t('help.chatTitle')}</h3>
                <p class="text-[10px] text-teal-100">${t('help.chatSubtitle')}</p>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              <span class="inline-flex items-center space-x-1 text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>${t('help.aiAssistantBadge')}</span>
              </span>
              <button id="btn-clear-chat" class="text-[11px] text-white/80 hover:text-white px-1.5 py-0.5 rounded hover:bg-white/10 transition" title="${t('help.clearChat')}">
                🗑️
              </button>
            </div>
          </div>

          <!-- Quick Suggestion Chips -->
          <div class="bg-slate-50 border-b border-slate-200 px-3 py-2 flex space-x-1.5 overflow-x-auto text-[11px] no-scrollbar">
            <button class="btn-quick-prompt shrink-0 bg-white border border-slate-300 hover:border-teal-600 px-2.5 py-1 rounded-full text-slate-700 hover:text-teal-900 transition flex items-center space-x-1" data-query="${t('help.quickQ1')}">
              <span>💸</span><span>${t('help.quickQ1')}</span>
            </button>
            <button class="btn-quick-prompt shrink-0 bg-white border border-slate-300 hover:border-teal-600 px-2.5 py-1 rounded-full text-slate-700 hover:text-teal-900 transition flex items-center space-x-1" data-query="${t('help.quickQ2')}">
              <span>📖</span><span>${t('help.quickQ2')}</span>
            </button>
            <button class="btn-quick-prompt shrink-0 bg-white border border-slate-300 hover:border-teal-600 px-2.5 py-1 rounded-full text-slate-700 hover:text-teal-900 transition flex items-center space-x-1" data-query="${t('help.quickQ3')}">
              <span>⚠️</span><span>${t('help.quickQ3')}</span>
            </button>
            <button class="btn-quick-prompt shrink-0 bg-white border border-slate-300 hover:border-teal-600 px-2.5 py-1 rounded-full text-slate-700 hover:text-teal-900 transition flex items-center space-x-1" data-query="${t('help.quickQ4')}">
              <span>🛑</span><span>${t('help.quickQ4')}</span>
            </button>
          </div>

          <!-- Messages Container -->
          <div id="ai-chat-messages-container" class="p-3.5 space-y-3 min-h-[200px] max-h-[340px] overflow-y-auto bg-slate-50/50">
            ${messagesHtml}
            ${state.aiTyping ? `
              <div class="flex items-center space-x-2 text-slate-500 text-xs py-1">
                <div class="w-6 h-6 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center text-xs font-bold">🤖</div>
                <div class="bg-white border border-slate-200 px-3 py-2 rounded-2xl rounded-tl-none shadow-xs flex items-center space-x-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.2s]"></span>
                  <span class="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce [animation-delay:0.4s]"></span>
                  <span class="text-[11px] text-slate-400 ml-1 font-medium">${t('help.aiTyping')}</span>
                </div>
              </div>
            ` : ''}
          </div>

          <!-- Chat Input Area (Max 500 characters & live counter) -->
          <div class="p-3 bg-white border-t border-slate-200 space-y-1.5">
            <div class="flex space-x-2 items-end">
              <textarea id="input-ai-chat" maxlength="500" rows="2" class="flex-1 p-2.5 border border-slate-300 rounded-xl text-xs resize-none focus:outline-teal-700" placeholder="${t('help.chatPlaceholder')}">${escapeHtml(state.chatInput || '')}</textarea>
              <button id="btn-ai-chat-send" class="h-11 px-4 rounded-xl bg-teal-800 text-white font-extrabold text-xs hover:bg-teal-900 active:scale-95 transition flex items-center justify-center space-x-1 shrink-0" style="background-color: var(--brand-primary);" ${state.aiTyping ? 'disabled' : ''}>
                <span>${t('help.chatSend')}</span>
                <span>➔</span>
              </button>
            </div>
            <div class="flex justify-between items-center text-[10px] text-slate-400 px-1">
              <span class="truncate pr-2">🛡️ ${t('help.securityWarning')}</span>
              <span id="char-counter" class="shrink-0 font-mono">${(state.chatInput || '').length}/500</span>
            </div>
          </div>
        </div>

        <!-- BROWSE ALL STANDARD FAQS ACCORDION -->
        <details class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4">
          <summary class="font-bold text-xs text-slate-700 uppercase tracking-wide cursor-pointer list-none flex justify-between items-center">
            <span>${t('help.popularQuestions')} (${(window.SaralFAQ || []).length})</span>
            <span class="text-slate-400 text-sm">▼</span>
          </summary>
          <div class="space-y-2 pt-3 max-h-72 overflow-y-auto pr-1">
            ${(window.SaralFAQ || []).map(faq => `
              <details class="group bg-slate-50 rounded-xl p-3 border border-slate-200 transition">
                <summary class="font-bold text-xs text-slate-900 cursor-pointer list-none flex justify-between items-center">
                  <span>${getLocalized(faq, 'question')}</span>
                  <span class="text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p class="text-xs text-slate-600 mt-2 leading-relaxed border-t border-slate-200 pt-2">
                  ${getLocalized(faq, 'answer')}
                </p>
              </details>
            `).join('')}
          </div>
        </details>
      </div>
    `;
  }

  // ==========================================
  // SCREEN: THE STANDARD
  // ==========================================
  function renderTheStandardView() {
    const bank = getActiveBank();
    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('standardRules.title')}</h2>
          <p class="text-xs text-slate-600 mt-1">${t('standardRules.subtitle')}</p>
        </div>

        <div class="space-y-4">
          <!-- Rule 1: The 5 Bottom Tabs Everywhere -->
          <div class="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm space-y-2">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs font-extrabold">1</span>
              <h3 class="font-extrabold text-sm text-slate-900">${t('standardRules.rule1Title')}</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('standardRules.rule1Desc')}</p>
            
            <!-- Live Example 1: Mini Tab Simulator -->
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5">
              <span class="text-[10px] font-bold text-teal-800 uppercase tracking-wide block">${t('standardRules.liveExampleBadge')}</span>
              <p class="text-[11px] text-slate-500">${t('standardRules.rule1Live')}</p>
              <div class="grid grid-cols-5 gap-1 pt-1 text-center text-[10px] font-bold">
                <div class="p-1 rounded bg-teal-800 text-white shadow-xs">1. ${t('tabs.home')}</div>
                <div class="p-1 rounded bg-white text-slate-700 border border-slate-200">2. ${t('tabs.pay')}</div>
                <div class="p-1 rounded bg-white text-slate-700 border border-slate-200">3. ${t('tabs.history')}</div>
                <div class="p-1 rounded bg-white text-slate-700 border border-slate-200">4. ${t('tabs.services')}</div>
                <div class="p-1 rounded bg-white text-slate-700 border border-slate-200">5. ${t('tabs.help')}</div>
              </div>
            </div>
          </div>

          <!-- Rule 2: The Same Place for the Same Thing -->
          <div class="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm space-y-2">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs font-extrabold">2</span>
              <h3 class="font-extrabold text-sm text-slate-900">${t('standardRules.rule2Title')}</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('standardRules.rule2Desc')}</p>

            <!-- Live Example 2: Screen Coordinate Mockup -->
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-1.5">
              <span class="text-[10px] font-bold text-teal-800 uppercase tracking-wide block">${t('standardRules.liveExampleBadge')}</span>
              <p class="text-[11px] text-slate-500">${t('standardRules.rule2Live')}</p>
              <div class="border border-slate-300 rounded-lg p-2 bg-white space-y-2 text-[10px]">
                <div class="flex justify-between items-center border-b border-slate-100 pb-1">
                  <span class="font-bold text-teal-800">⟵ Back (Top Left)</span>
                  <span class="font-bold text-slate-600">Logo & Title</span>
                </div>
                <div class="bg-teal-50 p-1.5 rounded text-center font-bold text-teal-950">
                  ₹ Balance Card (Always Top of Home)
                </div>
                <div class="p-1.5 rounded bg-slate-100 text-center text-slate-500">
                  Screen Content & Form Fields
                </div>
                <div class="p-2 rounded bg-teal-800 text-white text-center font-extrabold">
                  One Big Primary Action Button (Always at Bottom)
                </div>
              </div>
            </div>
          </div>

          <!-- Rule 3: One Plain Word Per Idea -->
          <div class="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm space-y-2">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs font-extrabold">3</span>
              <h3 class="font-extrabold text-sm text-slate-900">${t('standardRules.rule3Title')}</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('standardRules.rule3Desc')}</p>

            <!-- Live Example 3: Plain Words & Interactive Tap-to-Explain -->
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-2">
              <span class="text-[10px] font-bold text-teal-800 uppercase tracking-wide block">${t('standardRules.liveExampleBadge')}</span>
              <div class="flex items-center justify-between text-xs">
                <span class="text-slate-500 line-through">"Fund Transfer (NEFT/IMPS)"</span>
                <span class="font-extrabold text-emerald-800">➔ "${t('common.sendMoney')}"</span>
              </div>
              <div class="pt-1 border-t border-slate-200">
                <p class="text-[11px] text-slate-600 mb-1.5">${t('standardRules.rule3Live')}</p>
                <button class="term-dotted text-xs font-bold px-2.5 py-1 rounded bg-teal-100 text-teal-900 hover:bg-teal-200 transition" data-glossary="IFSC">
                  IFSC (Indian Financial System Code)
                </button>
              </div>
            </div>
          </div>

          <!-- Rule 4: The 3-Step Confirmation Rule -->
          <div class="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm space-y-2">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs font-extrabold">4</span>
              <h3 class="font-extrabold text-sm text-teal-900">${t('standardRules.rule4Title')}</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('standardRules.rule4Desc')}</p>

            <!-- Live Example 4: Interactive 3-Step Flow Diagram -->
            <div class="bg-slate-50 border border-slate-200 rounded-xl p-2.5 space-y-2">
              <span class="text-[10px] font-bold text-teal-800 uppercase tracking-wide block">${t('standardRules.liveExampleBadge')}</span>
              <div class="grid grid-cols-3 gap-1.5 text-center text-[10px]">
                <div class="p-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-800">
                  <span class="block text-sm mb-0.5">1️⃣</span>
                  <span>Fill In</span>
                </div>
                <div class="p-2 rounded-lg bg-white border border-slate-200 font-bold text-slate-800">
                  <span class="block text-sm mb-0.5">2️⃣</span>
                  <span>Review Screen</span>
                </div>
                <div class="p-2 rounded-lg bg-teal-800 text-white font-bold shadow-xs">
                  <span class="block text-sm mb-0.5">3️⃣</span>
                  <span>Enter PIN</span>
                </div>
              </div>
              <div class="p-2 rounded-lg bg-emerald-50 border border-emerald-300 text-center text-xs font-bold text-emerald-950">
                ✓ Receipt with UTR Reference Number & Share Action
              </div>
            </div>
          </div>

          <!-- Rule 5: Bank Switcher with Zero Layout Shift -->
          <div class="bg-white p-4 rounded-2xl border-2 border-slate-200 shadow-sm space-y-2">
            <div class="flex items-center space-x-2">
              <span class="w-6 h-6 rounded-full bg-teal-800 text-white flex items-center justify-center text-xs font-extrabold">5</span>
              <h3 class="font-extrabold text-sm text-slate-900">${t('standardRules.rule5Title')}</h3>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">${t('standardRules.rule5Desc')}</p>

            <!-- Live Example 5: Live Bank Switcher Demo -->
            <div class="bg-teal-50 border-2 border-teal-300 rounded-xl p-3 space-y-2">
              <span class="text-[10px] font-bold text-teal-950 uppercase tracking-wide block">${t('standardRules.liveExampleBadge')}</span>
              <p class="text-[11px] text-teal-900">${t('standardRules.rule5Live')}</p>
              <div class="grid grid-cols-3 gap-2 pt-1">
                ${window.SaralBanks.map(b => `
                  <button class="btn-demo-switch-bank p-2 rounded-xl font-bold text-xs text-white shadow-sm transition ${state.activeBankId === b.id ? 'ring-2 ring-slate-900 scale-[1.02]' : 'opacity-85 hover:opacity-100'}" style="background-color: ${b.primaryColor};" data-bank-id="${b.id}">
                    ${getLocalized(b, 'name').split(' ')[0]}
                  </button>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // SCREEN 11: SETTINGS VIEW
  // ==========================================
  function renderSettingsView(curCustomer) {
    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('settings.title')}</h2>
        </div>

        <!-- Language Switcher (Native script for each language) -->
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <label class="block text-xs font-bold text-slate-700">${t('settings.languageLabel')}</label>
          <div class="grid grid-cols-3 gap-2 text-xs font-bold">
            <button class="btn-set-lang h-11 rounded-xl border-2 transition px-1 ${state.lang === 'en' ? 'border-teal-700 bg-teal-50 text-teal-900 font-extrabold shadow-sm' : 'border-slate-200 bg-white text-slate-700'}" data-lang="en">
              English
            </button>
            <button class="btn-set-lang h-11 rounded-xl border-2 transition px-1 ${state.lang === 'hi' ? 'border-teal-700 bg-teal-50 text-teal-900 font-extrabold shadow-sm' : 'border-slate-200 bg-white text-slate-700'}" data-lang="hi">
              हिंदी
            </button>
            <button class="btn-set-lang h-11 rounded-xl border-2 transition px-1 ${state.lang === 'ta' ? 'border-teal-700 bg-teal-50 text-teal-900 font-extrabold shadow-sm' : 'border-slate-200 bg-white text-slate-700'}" data-lang="ta">
              தமிழ்
            </button>
          </div>
        </div>

        <!-- Bank Switcher (3 Fictional Banks) -->
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <label class="block text-xs font-bold text-slate-700">${t('settings.bankSwitcherLabel')}</label>
          <p class="text-[11px] text-slate-500">${t('settings.bankSwitcherDesc')}</p>
          <div class="space-y-2 pt-1">
            ${window.SaralBanks.map(b => {
              const isSelected = state.activeBankId === b.id;
              const name = getLocalized(b, 'name');
              const tagline = getLocalized(b, 'tagline');
              return `
                <div 
                  class="btn-switch-bank p-3 rounded-xl border-2 transition cursor-pointer flex items-center justify-between ${isSelected ? 'border-teal-600 bg-teal-50/50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'}"
                  data-bank-id="${b.id}"
                >
                  <div class="flex items-center space-x-3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center text-white" style="background-color: ${b.primaryColor};">
                      ${b.logoSvg}
                    </div>
                    <div>
                      <span class="font-bold text-xs text-slate-900">${name}</span>
                      <span class="text-[10px] text-slate-400 block">${tagline}</span>
                    </div>
                  </div>
                  ${isSelected ? `<span class="text-teal-700 font-extrabold text-xs">${t('common.active')} ✓</span>` : ''}
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Mode Switcher -->
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <label class="block text-xs font-bold text-slate-700">${t('settings.modeLabel')}</label>
          <div class="space-y-1.5 text-xs font-bold">
            <button class="btn-set-mode w-full h-11 px-3 rounded-xl border-2 text-left transition ${state.mode === 'standard' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-700'}" data-mode="standard">
              ${t('settings.modeStandard')}
            </button>
            <button class="btn-set-mode w-full h-11 px-3 rounded-xl border-2 text-left transition ${state.mode === 'simple' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-700'}" data-mode="simple">
              ${t('settings.modeSimple')}
            </button>
            <button class="btn-set-mode w-full h-11 px-3 rounded-xl border-2 text-left transition ${state.mode === 'young_saver' ? 'border-teal-700 bg-teal-50 text-teal-900' : 'border-slate-200 bg-white text-slate-700'}" data-mode="young_saver">
              ${t('settings.modeYoungSaver')}
            </button>
          </div>
        </div>

        <!-- Accessibility: Text Size & Contrast & Read Aloud -->
        <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">${t('settings.textSizeLabel')}</label>
            <div class="grid grid-cols-3 gap-1.5 text-xs font-bold">
              <button class="btn-set-text-size h-9 rounded-lg border transition ${state.textSize === 'normal' ? 'bg-slate-900 text-white font-extrabold' : 'bg-slate-100 text-slate-700'}" data-size="normal">
                ${t('settings.textSizeNormal').split(' ')[0]}
              </button>
              <button class="btn-set-text-size h-9 rounded-lg border transition ${state.textSize === 'large' ? 'bg-slate-900 text-white font-extrabold' : 'bg-slate-100 text-slate-700'}" data-size="large">
                ${t('settings.textSizeLarge').split(' ')[0]}
              </button>
              <button class="btn-set-text-size h-9 rounded-lg border transition ${state.textSize === 'xlarge' ? 'bg-slate-900 text-white font-extrabold' : 'bg-slate-100 text-slate-700'}" data-size="xlarge">
                ${t('settings.textSizeXLarge').split(' ')[0]}
              </button>
            </div>
          </div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-100">
            <div>
              <span class="font-bold text-xs text-slate-800">${t('settings.highContrastLabel')}</span>
              <span class="block text-[11px] text-slate-500">${t('settings.highContrastDesc')}</span>
            </div>
            <input type="checkbox" id="chk-high-contrast" class="w-5 h-5 accent-teal-600 rounded" ${state.highContrast ? 'checked' : ''}>
          </div>

          ${hasVoiceForLang(state.lang) ? `
            <div class="flex items-center justify-between pt-2 border-t border-slate-100">
              <div>
                <span class="font-bold text-xs text-slate-800">${t('settings.readAloudLabel')}</span>
                <span class="block text-[11px] text-slate-500">${t('settings.readAloudDesc')}</span>
              </div>
              <input type="checkbox" id="chk-read-aloud" class="w-5 h-5 accent-teal-600 rounded" ${state.readAloud ? 'checked' : ''}>
            </div>
          ` : ''}

          <div class="flex items-center justify-between pt-2 border-t border-slate-100">
            <div>
              <span class="font-bold text-xs text-slate-800">${t('settings.hideBalanceByDefault')}</span>
            </div>
            <input type="checkbox" id="chk-hide-balance-default" class="w-5 h-5 accent-teal-600 rounded" ${state.hideBalanceDefault ? 'checked' : ''}>
          </div>
        </div>

        <!-- Learn & Payees Shortcuts -->
        <div class="grid grid-cols-2 gap-2">
          <button id="btn-settings-open-learn" class="h-12 rounded-xl bg-teal-50 text-teal-900 font-bold text-xs hover:bg-teal-100 transition">
            📖 ${t('learn.title')}
          </button>
          <button id="btn-settings-open-payees" class="h-12 rounded-xl bg-teal-50 text-teal-900 font-bold text-xs hover:bg-teal-100 transition">
            👥 ${t('payees.title')}
          </button>
        </div>

        <!-- RESET DEMO BUTTON (As required) -->
        <div class="pt-3">
          <button id="btn-reset-demo" class="w-full h-14 rounded-2xl bg-red-600 hover:bg-red-700 active:scale-[0.99] text-white font-extrabold text-sm transition flex items-center justify-center space-x-2 shadow-sm">
            <span>🔄</span>
            <span>${t('settings.resetDemoBtn')}</span>
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // SCREEN 12: GUARDIAN VIEW (MEENA)
  // ==========================================
  function renderGuardianView() {
    const aarav = state.customers.find(c => c.id === 'aarav');
    const aaravBalances = computeCustomerBalances('aarav');
    const pendingList = state.pendingApprovals || [];

    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <span class="text-xs font-bold text-purple-700 uppercase tracking-wider">${t('guardian.dashboardBadge')}</span>
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight mt-0.5">${t('guardian.title')}</h2>
          <p class="text-xs text-slate-500">${t('guardian.guardianName')}</p>
        </div>

        <!-- Aarav Overview Card -->
        <div class="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 space-y-2">
          <div class="flex justify-between items-center">
            <span class="font-bold text-xs text-purple-900">${t('guardian.aaravBalance')}:</span>
            <span class="font-extrabold text-lg text-purple-950">${formatINR(aaravBalances.totalPaise)}</span>
          </div>
          <div class="flex justify-between items-center text-xs">
            <span class="text-purple-700">${t('guardian.dailyLimitSetting')}:</span>
            <span class="font-bold text-purple-900">${formatINR(aarav.dailyLimitPaise)} / ${t('guardian.perDay')}</span>
          </div>
        </div>

        <!-- Pending Approval Requests -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <h3 class="text-xs font-bold text-slate-700 uppercase tracking-wide">${t('guardian.pendingRequestsTitle')}</h3>
          ${pendingList.length === 0 ? `
            <p class="text-xs text-slate-400 py-3 text-center">${t('guardian.noPendingRequests')}</p>
          ` : pendingList.map(req => `
            <div class="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
              <div class="flex justify-between items-start">
                <div>
                  <p class="font-bold text-sm text-slate-900">${t('guardian.wantsToPay', { name: 'Aarav', amount: formatINR(req.amountPaise) })}</p>
                  <p class="text-xs text-slate-600">${t('pay.to')}: ${req.recipientName} (${req.recipientIdentifier})</p>
                  ${req.note ? `<p class="text-xs text-slate-500 italic">${t('pay.note')}: ${req.note}</p>` : ''}
                </div>
              </div>
              <div class="flex space-x-2 pt-1">
                <button class="btn-guardian-approve flex-1 h-11 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition" data-req-id="${req.id}">
                  ${t('guardian.approveBtn')}
                </button>
                <button class="btn-guardian-decline px-4 h-11 rounded-xl bg-rose-100 text-rose-800 font-bold text-xs hover:bg-rose-200 transition" data-req-id="${req.id}">
                  ${t('guardian.declineBtn')}
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Aarav's Recent Activity Feed -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <h3 class="text-xs font-bold text-slate-700 uppercase tracking-wide">${t('guardian.aaravActivityTitle')}</h3>
          <div class="divide-y divide-slate-100 text-xs">
            ${state.transactions.filter(t => t.customerId === 'aarav').slice(0, 6).map(tx => {
              const isCredit = tx.type === 'credit';
              return `
                <div class="py-2 flex justify-between items-center">
                  <div class="truncate max-w-[200px]">
                    <p class="font-semibold text-slate-800 truncate">${getLocalized(tx, 'plain')}</p>
                    <span class="text-[10px] text-slate-400">${new Date(tx.timestamp).toLocaleDateString(getLocale())}</span>
                  </div>
                  <span class="font-bold ${isCredit ? 'text-emerald-700' : 'text-slate-900'}">
                    ${isCredit ? '+' : '-'}${formatINR(tx.amountPaise)}
                  </span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // UNMASKED ACCOUNT DETAILS VIEW
  // ==========================================
  function renderAccountDetailsView(curCustomer, bank) {
    return `
      <div class="space-y-4">
        <div class="border-b border-slate-200 pb-2">
          <h2 class="text-xl font-extrabold text-slate-900 tracking-tight">${t('home.accountDetails')}</h2>
          <p class="text-xs text-slate-500">${t('home.officialPassbook')}</p>
        </div>

        <div class="bg-white p-5 rounded-2xl border-2 border-slate-200 shadow-sm space-y-3.5 text-xs">
          <div class="flex justify-between py-1 border-b border-slate-100">
            <span class="text-slate-500">${t('home.accountHolderName')}</span>
            <span class="font-bold text-slate-900">${getLocalized(curCustomer, 'name')}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-slate-100">
            <span class="text-slate-500">${t('home.unmaskedAcc')}</span>
            <span class="font-mono font-bold text-slate-900 text-sm">${curCustomer.accountNumberRaw}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-slate-100">
            <span class="text-slate-500">${t('home.ifsc')}</span>
            <span class="font-mono font-bold text-slate-900">${curCustomer.ifsc}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-slate-100">
            <span class="text-slate-500">${t('home.branch')}</span>
            <span class="font-semibold text-slate-900">${getLocalized(curCustomer, 'branch')}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-slate-100">
            <span class="text-slate-500">UPI ID</span>
            <span class="font-mono font-bold text-teal-800">${curCustomer.upiId}</span>
          </div>
          <div class="flex justify-between py-1 border-b border-slate-100">
            <span class="text-slate-500">${t('services.updateProfile')}</span>
            <span class="font-mono text-slate-800">${curCustomer.phone}</span>
          </div>
          <div class="flex justify-between py-1">
            <span class="text-slate-500">${t('services.nomineeDetails')}</span>
            <span class="font-semibold text-slate-800">${getLocalized(curCustomer, 'nominee')}</span>
          </div>
        </div>

        <button id="btn-copy-full-details" class="w-full h-12 rounded-xl bg-teal-800 text-white font-bold text-xs hover:bg-teal-900 transition flex items-center justify-center space-x-1.5" style="background-color: var(--brand-primary);">
          <span>📋</span>
          <span>${t('home.copyFullDetails')}</span>
        </button>
      </div>
    `;
  }

  // ==========================================
  // TRANSACTION DETAIL MODAL
  // ==========================================
  function renderTxDetailModal() {
    const tx = state.viewingTx;
    if (!tx) return '';
    const isCredit = tx.type === 'credit';
    const plainText = getLocalized(tx, 'plain');

    return `
      <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-sm w-full p-5 space-y-4 shadow-2xl relative select-none max-h-[90vh] overflow-y-auto">
          <div class="flex justify-between items-start border-b border-slate-200 pb-2">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-teal-800">${t('history.detailTitle')}</span>
              <h3 class="text-base font-extrabold text-slate-900">${plainText}</h3>
            </div>
            <button id="btn-close-tx-modal" class="p-1 rounded-full text-slate-400 hover:text-slate-700">✕</button>
          </div>

          <!-- Amount -->
          <div class="text-center py-2 bg-slate-50 rounded-xl">
            <span class="text-2xl font-extrabold ${isCredit ? 'text-emerald-700' : 'text-slate-900'}">
              ${isCredit ? '+' : '-'}${formatINR(tx.amountPaise)}
            </span>
          </div>

          <!-- Raw Bank Description Breakdown -->
          <div class="space-y-2">
            <span class="text-xs font-bold text-slate-700">${t('history.rawBankDescription')}</span>
            <p class="font-mono text-xs bg-slate-100 p-2 rounded-lg text-slate-800 break-all">${tx.rawDescription}</p>

            <span class="text-xs font-bold text-slate-700 block pt-1">${t('history.decodedParts')}</span>
            <div class="space-y-1.5 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              ${(tx.rawBreakdown || []).map(b => `
                <div class="border-b border-slate-200/60 pb-1 last:border-0 last:pb-0">
                  <span class="font-mono font-bold text-teal-800">${b.code}</span>
                  <span class="text-slate-600 ml-1">➔ ${getLocalized(b, 'meaning')}</span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Ask AI About This Transaction Button (Only plain + raw description, never account numbers) -->
          <button id="btn-ask-about-tx" class="w-full h-11 rounded-xl bg-teal-50 border border-teal-600 text-teal-900 font-extrabold text-xs hover:bg-teal-100 transition flex items-center justify-center space-x-1.5 shadow-xs" data-plain="${encodeURIComponent(plainText)}" data-raw="${encodeURIComponent(tx.rawDescription)}">
            <span>💬</span>
            <span>${t('history.askAboutTx')}</span>
          </button>

          <!-- Report Problem Button -->
          <button id="btn-report-tx-problem" class="w-full h-11 rounded-xl border border-rose-300 text-rose-700 font-bold text-xs hover:bg-rose-50 transition" data-ref="${tx.referenceNumber}">
            ${t('history.reportProblem')}
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // GLOSSARY MODAL
  // ==========================================
  function renderGlossaryModal() {
    const termObj = window.SaralGlossary.find(g => g.term.toLowerCase() === (state.activeGlossaryTerm || '').toLowerCase());
    if (!termObj) return '';

    return `
      <div class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-sm w-full p-5 space-y-3 shadow-2xl relative select-none">
          <div class="flex justify-between items-start border-b border-slate-200 pb-2">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-teal-700">${state.lang === 'ta' ? 'வங்கி கலைச்சொல் விளக்கம்' : state.lang === 'hi' ? 'बैंकिंग शब्दकोश' : 'Banking Glossary'}</span>
              <h3 class="text-lg font-extrabold text-slate-900">${getLocalized(termObj, 'label')}</h3>
            </div>
            <button id="btn-close-glossary-modal" class="p-1 rounded-full text-slate-400 hover:text-slate-700">✕</button>
          </div>

          <p class="text-xs text-slate-700 leading-relaxed font-normal">
            ${getLocalized(termObj, 'plainMeaning')}
          </p>

          <button id="btn-close-glossary-modal" class="w-full h-11 rounded-xl bg-teal-800 text-white font-bold text-xs hover:bg-teal-900 transition" style="background-color: var(--brand-primary);">
            ${t('common.done')}
          </button>
        </div>
      </div>
    `;
  }

  // ==========================================
  // SCAM WARNING MODAL
  // ==========================================
  function renderScamWarningModal() {
    return `
      <div class="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl max-w-sm w-full p-6 space-y-4 shadow-2xl relative select-none border-2 border-rose-500">
          <div class="text-center space-y-2">
            <div class="w-14 h-14 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-3xl mx-auto">
              🛑
            </div>
            <h3 class="text-lg font-extrabold text-rose-950">${t('safetyCheck.warningTitle')}</h3>
          </div>

          <p class="text-xs text-slate-700 leading-relaxed text-center">
            ${t('safetyCheck.warningBody')}
          </p>

          <div class="space-y-2 pt-2">
            <button id="btn-scam-cancel-payment" class="w-full h-12 rounded-xl bg-rose-600 text-white font-extrabold text-xs hover:bg-rose-700 transition">
              ${t('safetyCheck.stopPayment')}
            </button>
            <a href="tel:1930" class="w-full h-12 rounded-xl border border-rose-300 bg-rose-50 text-rose-800 font-bold text-xs hover:bg-rose-100 transition flex items-center justify-center space-x-1">
              <span>📞</span>
              <span>${t('safetyCheck.callHelpline')}</span>
            </a>
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================
  // EVENT HANDLERS & NAVIGATION BINDINGS
  // ==========================================
  function bindGlobalEvents() {
    // Tab Navigation
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeTab = btn.dataset.tab;
        state.activeSubScreen = null;
        state.payFlow.step = 1;
        state.payFlow.errorMsg = '';
        renderApp();
      });
    });

    // Top Header Events
    const backBtn = document.getElementById('btn-header-back');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        if (state.serviceFlow) {
          if (state.serviceFlow.step > 1 && state.serviceFlow.step < 4) {
            state.serviceFlow.step -= 1;
          } else {
            state.serviceFlow = null;
          }
          renderApp();
          return;
        }
        if (state.payFlow.step > 1 && state.payFlow.step < 5) {
          state.payFlow.step--;
        } else {
          state.activeSubScreen = null;
        }
        renderApp();
      });
    }

    const speakerBtn = document.getElementById('btn-toggle-speaker');
    if (speakerBtn) {
      speakerBtn.addEventListener('click', () => {
        state.readAloud = !state.readAloud;
        saveAll();
        if (state.readAloud) {
          const msg = state.lang === 'ta' ? "வாசித்துக்காட்டும் வசதி இயக்கப்பட்டது." : state.lang === 'hi' ? "बोलकर सुनाने की सुविधा चालू है।" : "Read aloud is active.";
          speak(msg);
        }
        renderApp();
      });
    }

    const profileBtn = document.getElementById('btn-header-profile');
    if (profileBtn) {
      profileBtn.addEventListener('click', () => {
        state.isAuthenticated = false;
        renderApp();
      });
    }

    const settingsBtn = document.getElementById('btn-header-settings');
    if (settingsBtn) {
      settingsBtn.addEventListener('click', () => {
        state.activeSubScreen = 'settings';
        renderApp();
      });
    }

    // Home Screen Actions
    const toggleBalBtn = document.getElementById('btn-toggle-balance');
    if (toggleBalBtn) {
      toggleBalBtn.addEventListener('click', () => {
        state.balanceVisible = !state.balanceVisible;
        renderApp();
      });
    }

    const speakBalBtn = document.getElementById('btn-speak-balance');
    if (speakBalBtn) {
      speakBalBtn.addEventListener('click', () => {
        const balances = computeCustomerBalances(state.currentCustomerId);
        speakMoney(balances.availablePaise, t('home.availableBalance'));
      });
    }

    // Simple Mode 4 Big Buttons
    const smMoney = document.getElementById('btn-simple-money');
    if (smMoney) smMoney.addEventListener('click', () => { state.activeSubScreen = 'account_details'; renderApp(); });
    const smSend = document.getElementById('btn-simple-send');
    if (smSend) smSend.addEventListener('click', () => { state.activeTab = 'pay'; state.activeSubScreen = null; state.payFlow.step = 1; renderApp(); });
    const smHistory = document.getElementById('btn-simple-history');
    if (smHistory) smHistory.addEventListener('click', () => { state.activeTab = 'history'; state.activeSubScreen = null; renderApp(); });
    const smHelp = document.getElementById('btn-simple-help');
    if (smHelp) smHelp.addEventListener('click', () => { state.activeTab = 'help'; state.activeSubScreen = null; renderApp(); });

    // Quick Home Buttons
    const qSend = document.getElementById('btn-quick-send');
    if (qSend) qSend.addEventListener('click', () => { state.activeTab = 'pay'; state.activeSubScreen = null; state.payFlow.step = 1; renderApp(); });
    const qPayees = document.getElementById('btn-quick-payees');
    if (qPayees) qPayees.addEventListener('click', () => { state.activeSubScreen = 'payees'; renderApp(); });
    const qStatement = document.getElementById('btn-quick-statement');
    if (qStatement) qStatement.addEventListener('click', () => { state.activeSubScreen = 'statements'; renderApp(); });

    // Copy Account Details
    const copyAccBtn = document.getElementById('btn-copy-account');
    if (copyAccBtn) {
      copyAccBtn.addEventListener('click', () => {
        const c = getCurrentCustomer();
        const text = `Account: ${c.accountNumberMasked}, IFSC: ${c.ifsc}, Bank: ${getLocalized(getActiveBank(), 'name')}`;
        navigator.clipboard?.writeText(text);
        showToast(t('common.copied') + ' ✓', 'success');
      });
    }

    const shareAccBtn = document.getElementById('btn-share-account');
    if (shareAccBtn) {
      shareAccBtn.addEventListener('click', () => {
        const c = getCurrentCustomer();
        const text = `Account: ${c.accountNumberMasked}, IFSC: ${c.ifsc}, Bank: ${getLocalized(getActiveBank(), 'name')}`;
        if (navigator.share) {
          navigator.share({ title: 'Saral Account Details', text: text }).catch(() => {});
        } else {
          navigator.clipboard?.writeText(text);
          showToast(t('common.shared') + ' ✓', 'success');
        }
      });
    }

    const viewUnmaskedBtn = document.getElementById('btn-view-unmasked-account');
    if (viewUnmaskedBtn) {
      viewUnmaskedBtn.addEventListener('click', () => {
        state.activeSubScreen = 'account_details';
        renderApp();
      });
    }

    const copyFullDetailsBtn = document.getElementById('btn-copy-full-details');
    if (copyFullDetailsBtn) {
      copyFullDetailsBtn.addEventListener('click', () => {
        const c = getCurrentCustomer();
        const text = `Name: ${getLocalized(c, 'name')}\nAccount: ${c.accountNumberRaw}\nIFSC: ${c.ifsc}\nBranch: ${getLocalized(c, 'branch')}\nUPI: ${c.upiId}`;
        navigator.clipboard?.writeText(text);
        showToast(t('common.copied'), 'success');
      });
    }

    const seeAllHistoryBtn = document.getElementById('btn-see-all-history');
    if (seeAllHistoryBtn) {
      seeAllHistoryBtn.addEventListener('click', () => {
        state.activeTab = 'history';
        state.activeSubScreen = null;
        renderApp();
      });
    }

    // Pay Flow Bindings
    bindPayFlowEvents();

    // Voice Assistant Bindings
    bindVoiceModalEvents();

    const openVoiceBtn = document.getElementById('btn-open-voice');
    if (openVoiceBtn) {
      openVoiceBtn.addEventListener('click', () => {
        startVoiceListening();
      });
    }

    const payVoiceBtn = document.getElementById('btn-pay-voice');
    if (payVoiceBtn) {
      payVoiceBtn.addEventListener('click', () => {
        startVoiceListening();
      });
    }

    const headerVoiceBtn = document.getElementById('btn-header-voice');
    if (headerVoiceBtn) {
      headerVoiceBtn.addEventListener('click', () => {
        startVoiceListening();
      });
    }
  // Event Handlers for the 3-Step Service Flow
  function bindServiceFlowEvents() {
    const flow = state.serviceFlow;
    if (!flow) return;

    // Step 1 -> Step 2
    const step1Btn = document.getElementById('btn-flow-step1-continue');
    if (step1Btn) {
      step1Btn.addEventListener('click', () => {
        if (flow.type === 'contact') {
          const p = document.getElementById('input-flow-phone');
          const e = document.getElementById('input-flow-email');
          const a = document.getElementById('input-flow-address');
          if (!p || !p.value.trim()) { flow.errorMsg = "Please enter a valid mobile number."; renderApp(); return; }
          flow.phone = p.value.trim();
          flow.email = e ? e.value.trim() : '';
          flow.address = a ? a.value.trim() : '';
        } else if (flow.type === 'limits') {
          const l = document.getElementById('input-flow-limit');
          const val = parseFloat(l ? l.value : 0) || 0;
          if (val <= 0) { flow.errorMsg = "Please enter a limit greater than ₹0."; renderApp(); return; }
          flow.limitPaise = Math.round(val * 100);
        } else if (flow.type === 'nominee') {
          const n = document.getElementById('input-flow-nominee-name');
          const r = document.getElementById('input-flow-nominee-relation');
          if (!n || !n.value.trim()) { flow.errorMsg = "Please enter nominee name."; renderApp(); return; }
          flow.name = n.value.trim();
          flow.relation = r ? r.value.trim() : 'Nominee';
        } else if (flow.type === 'payee') {
          const n = document.getElementById('input-flow-payee-name');
          const id = document.getElementById('input-flow-payee-id');
          if (!n || !n.value.trim() || !id || !id.value.trim()) { flow.errorMsg = "Please enter payee name and UPI/Mobile."; renderApp(); return; }
          flow.name = n.value.trim();
          flow.identifier = id.value.trim();
          flow.registeredName = flow.name.slice(0, 1) + "*** " + (flow.name.split(' ')[1] || 'Kumar');
        }
        flow.errorMsg = '';
        flow.step = 2;
        renderApp();
      });
    }

    // Step 2 -> Step 3
    const step2Btn = document.getElementById('btn-flow-step2-continue');
    if (step2Btn) {
      step2Btn.addEventListener('click', () => {
        servicePinEntered = "";
        flow.step = 3;
        renderApp();
      });
    }

    // Step 3 (OTP) -> Step 4
    const confirmOtpBtn = document.getElementById('btn-flow-confirm-otp');
    if (confirmOtpBtn) {
      confirmOtpBtn.addEventListener('click', () => {
        const otpInput = document.getElementById('input-flow-otp');
        const otp = otpInput ? otpInput.value.trim() : '';
        if (otp === window.SaralConfig.demoCredentials.otp) {
          executeServiceFlowSuccess();
        } else {
          flow.errorMsg = t('services.invalidOtp');
          renderApp();
        }
      });
    }

    // Step 3 (PIN Keypad) -> Step 4
    const updateServiceDots = () => {
      const dots = document.querySelectorAll('.service-pin-dot');
      dots.forEach((dot, idx) => {
        if (idx < servicePinEntered.length) {
          dot.classList.add('bg-slate-900', 'border-slate-900');
        } else {
          dot.classList.remove('bg-slate-900', 'border-slate-900');
        }
      });
    };

    document.querySelectorAll('.service-keypad-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.val;
        const action = btn.dataset.action;
        const err = document.getElementById('service-pin-error');
        if (err) err.classList.add('hidden');

        if (val !== undefined && servicePinEntered.length < 4) {
          servicePinEntered += val;
          updateServiceDots();
          if (servicePinEntered.length === 4) {
            setTimeout(() => {
              if (sha256(servicePinEntered) === window.SaralConfig.demoCredentials.pinHash) {
                executeServiceFlowSuccess();
              } else {
                window.SaralAudio.playSound('alert');
                if (err) err.classList.remove('hidden');
                servicePinEntered = "";
                updateServiceDots();
              }
            }, 150);
          }
        } else if (action === 'backspace') {
          servicePinEntered = servicePinEntered.slice(0, -1);
          updateServiceDots();
        } else if (action === 'clear') {
          servicePinEntered = "";
          updateServiceDots();
        }
      });
    });

    // Physical keyboard support for Service PIN
    const handleSrvKeydown = (e) => {
      const err = document.getElementById('service-pin-error');
      if (err) err.classList.add('hidden');

      if (/^[0-9]$/.test(e.key) && servicePinEntered.length < 4) {
        servicePinEntered += e.key;
        updateServiceDots();
        if (servicePinEntered.length === 4) {
          setTimeout(() => {
            if (sha256(servicePinEntered) === window.SaralConfig.demoCredentials.pinHash) {
              executeServiceFlowSuccess();
            } else {
              window.SaralAudio.playSound('alert');
              if (err) err.classList.remove('hidden');
              servicePinEntered = "";
              updateServiceDots();
            }
          }, 150);
        }
      } else if (e.key === 'Backspace') {
        servicePinEntered = servicePinEntered.slice(0, -1);
        updateServiceDots();
      } else if (e.key === 'Escape' || e.key === 'Delete') {
        servicePinEntered = "";
        updateServiceDots();
      }
    };
    window.addEventListener('keydown', handleSrvKeydown);

    // Step 4 Done
    const doneBtn = document.getElementById('btn-flow-done');
    if (doneBtn) {
      doneBtn.addEventListener('click', () => {
        state.serviceFlow = null;
        renderApp();
      });
    }

    function executeServiceFlowSuccess() {
      const c = getCurrentCustomer();
      const refNum = 'SR' + Date.now().toString().slice(-8);
      flow.refNumber = refNum;

      if (flow.type === 'contact') {
        c.phone = flow.phone;
        c.addressEn = flow.address;
        flow.title = t('services.updateProfile');
        state.serviceRequests.unshift({
          id: 'sr_' + Date.now(),
          type: 'contact_update',
          titleEn: 'Contact Details Update',
          titleHi: 'संपर्क विवरण अपडेट',
          titleTa: 'தொடர்பு விவரங்கள் புதுப்பிப்பு',
          status: 'completed',
          requestedAt: new Date().toISOString(),
          etaEn: 'Updated instantly',
          etaHi: 'तुरंत अपडेट हो गया',
          etaTa: 'உடனடியாக புதுப்பிக்கப்பட்டது'
        });
      } else if (flow.type === 'cheque') {
        flow.title = t('services.chequeBook');
        state.serviceRequests.unshift({
          id: 'sr_' + Date.now(),
          type: 'cheque_book',
          titleEn: 'Cheque Book (20 Leaves)',
          titleHi: 'चेक बुक (20 पत्ते)',
          titleTa: '20 பக்க காசோலை புத்தகம்',
          status: 'requested',
          requestedAt: new Date().toISOString(),
          etaEn: 'Delivering within 5 working days',
          etaHi: '5 कार्य दिवसों में डिलीवरी',
          etaTa: '5 வேலை நாட்களுக்குள் வழங்கப்படும்'
        });
      } else if (flow.type === 'limits') {
        c.dailyLimitPaise = flow.limitPaise;
        flow.title = t('services.setLimits');
        state.serviceRequests.unshift({
          id: 'sr_' + Date.now(),
          type: 'limits_update',
          titleEn: 'Daily Limit Update to ' + formatINR(flow.limitPaise),
          titleHi: 'दैनिक सीमा ' + formatINR(flow.limitPaise) + ' पर अपडेट',
          titleTa: 'தினசரி வரம்பு ' + formatINR(flow.limitPaise) + ' ஆக மாற்றப்பட்டது',
          status: 'completed',
          requestedAt: new Date().toISOString(),
          etaEn: 'Active immediately',
          etaHi: 'तुरंत सक्रिय',
          etaTa: 'உடனடியாக செயல்படுத்தப்பட்டது'
        });
      } else if (flow.type === 'nominee') {
        const fullNom = flow.name + ' (' + flow.relation + ')';
        c.nomineeEn = fullNom;
        c.nomineeHi = fullNom;
        c.nomineeTa = fullNom;
        flow.title = t('services.nomineeDetails');
        state.serviceRequests.unshift({
          id: 'sr_' + Date.now(),
          type: 'nominee_update',
          titleEn: 'Nominee Changed to ' + flow.name,
          titleHi: 'नॉमिनी ' + flow.name + ' को बनाया गया',
          titleTa: 'நாமினி ' + flow.name + ' ஆக மாற்றப்பட்டது',
          status: 'completed',
          requestedAt: new Date().toISOString(),
          etaEn: 'Recorded in bank records',
          etaHi: 'बैंक रिकॉर्ड में दर्ज',
          etaTa: 'வங்கி ஆவணங்களில் பதிவு செய்யப்பட்டது'
        });
      } else if (flow.type === 'payee') {
        flow.title = t('payees.addNew');
        state.payees.unshift({
          id: 'p_user_' + Date.now(),
          customerId: c.id,
          name: flow.name,
          registeredName: flow.registeredName,
          identifier: flow.identifier,
          isNew: true,
          addedAt: new Date().toISOString()
        });
      }

      window.SaralAudio.playSound('success');
      saveAll();
      flow.step = 4;
      renderApp();
    }
  }


    // History & Transaction Clicks
    document.querySelectorAll('.tx-item').forEach(item => {
      item.addEventListener('click', () => {
        const txId = item.dataset.txId;
        state.viewingTx = state.transactions.find(t => t.id === txId) || null;
        renderApp();
      });
    });

    const closeTxModalBtn = document.getElementById('btn-close-tx-modal');
    if (closeTxModalBtn) {
      closeTxModalBtn.addEventListener('click', () => {
        state.viewingTx = null;
        renderApp();
      });
    }

    const reportTxBtn = document.getElementById('btn-report-tx-problem');
    if (reportTxBtn) {
      reportTxBtn.addEventListener('click', () => {
        const ref = reportTxBtn.dataset.ref;
        showToast(t('history.problemReported', { ref: ref.slice(-4) }), 'success');
        state.viewingTx = null;
        renderApp();
      });
    }

    const askAboutTxBtn = document.getElementById('btn-ask-about-tx');
    if (askAboutTxBtn) {
      askAboutTxBtn.addEventListener('click', () => {
        const plain = decodeURIComponent(askAboutTxBtn.dataset.plain || '');
        const raw = decodeURIComponent(askAboutTxBtn.dataset.raw || '');
        state.viewingTx = null;
        state.activeTab = 'help';
        state.activeSubScreen = null;
        renderApp();
        const queryText = `${t('help.askTxPrompt')} "${plain}" (${raw})`;
        sendUserChatMessage(queryText);
      });
    }

    // History Filters
    const histSearchInput = document.getElementById('input-history-search');
    if (histSearchInput) {
      histSearchInput.addEventListener('input', (e) => {
        historySearch = e.target.value;
        renderApp();
      });
    }

    document.querySelectorAll('.filter-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        historyFilter = chip.dataset.filter;
        renderApp();
      });
    });

    const rangeSelect = document.getElementById('select-history-range');
    if (rangeSelect) {
      rangeSelect.addEventListener('change', (e) => {
        historyDateRange = e.target.value;
        renderApp();
      });
    }

    const typeSelect = document.getElementById('select-history-type');
    if (typeSelect) {
      typeSelect.addEventListener('change', (e) => {
        historyType = e.target.value;
        renderApp();
      });
    }

    const openStatementBtn = document.getElementById('btn-open-statement');
    if (openStatementBtn) {
      openStatementBtn.addEventListener('click', () => {
        state.activeSubScreen = 'statements';
        renderApp();
      });
    }

    // Statements Actions (CSV & Print PDF)
    const downloadCsvBtn = document.getElementById('btn-download-csv');
    if (downloadCsvBtn) {
      downloadCsvBtn.addEventListener('click', () => {
        exportStatementCSV();
      });
    }

    const printPdfBtn = document.getElementById('btn-print-pdf');
    if (printPdfBtn) {
      printPdfBtn.addEventListener('click', () => {
        window.print();
      });
    }

    document.querySelectorAll('.statement-period-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        statementPeriod = chip.dataset.period;
        renderApp();
      });
    });


    document.querySelectorAll('.btn-payee-send-now').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = state.payees.find(x => x.id === btn.dataset.payeeId);
        if (p) {
          state.activeTab = 'pay';
          state.activeSubScreen = null;
          state.payFlow.step = 1;
          state.payFlow.method = 'payee';
          state.payFlow.recipientIdentifier = p.identifier;
          state.payFlow.recipientName = p.name;
          state.payFlow.recipientRegisteredName = p.registeredName;
          state.payFlow.isNewPayee = !!p.isNew;
          renderApp();
        }
      });
    });

    document.querySelectorAll('.btn-delete-payee').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = state.payees.find(x => x.id === btn.dataset.payeeId);
        if (p && confirm(t('payees.deleteConfirm', { name: p.name }))) {
          state.payees = state.payees.filter(x => x.id !== p.id);
          saveAll();
          renderApp();
        }
      });
    });

    // Services Events
    // Open 3-Step Service Flows
    const sProfile = document.getElementById('btn-service-profile');
    if (sProfile) {
      sProfile.addEventListener('click', () => {
        const c = getCurrentCustomer();
        state.serviceFlow = {
          type: 'contact',
          step: 1,
          phone: c.phone,
          email: c.id + '@example.com',
          address: getLocalized(c, 'address'),
          errorMsg: ''
        };
        renderApp();
      });
    }

    const sCheque = document.getElementById('btn-service-cheque');
    if (sCheque) {
      sCheque.addEventListener('click', () => {
        state.serviceFlow = {
          type: 'cheque',
          step: 1,
          leaves: 20,
          errorMsg: ''
        };
        renderApp();
      });
    }

    const sLimits = document.getElementById('btn-service-limits');
    if (sLimits) {
      sLimits.addEventListener('click', () => {
        const c = getCurrentCustomer();
        state.serviceFlow = {
          type: 'limits',
          step: 1,
          limitPaise: c.dailyLimitPaise || 5000000,
          errorMsg: ''
        };
        renderApp();
      });
    }

    const sNominee = document.getElementById('btn-service-nominee');
    if (sNominee) {
      sNominee.addEventListener('click', () => {
        const c = getCurrentCustomer();
        state.serviceFlow = {
          type: 'nominee',
          step: 1,
          name: getLocalized(c, 'nominee').split('(')[0].trim(),
          relation: 'Spouse',
          errorMsg: ''
        };
        renderApp();
      });
    }

    const openAddPayeeBtn = document.getElementById('btn-open-add-payee');
    if (openAddPayeeBtn) {
      openAddPayeeBtn.addEventListener('click', () => {
        state.serviceFlow = {
          type: 'payee',
          step: 1,
          name: '',
          identifier: '',
          errorMsg: ''
        };
        renderApp();
      });
    }

    const toggleCardBtn = document.getElementById('btn-toggle-card-block');
    if (toggleCardBtn) {
      toggleCardBtn.addEventListener('click', () => {
        const c = getCurrentCustomer();
        c.cardBlocked = !c.cardBlocked;
        saveAll();
        renderApp();
      });
    }

    // Service Flow Step Bindings
    bindServiceFlowEvents();

    // Help Events
    const emergencyFreezeBtn = document.getElementById('btn-emergency-freeze');
    if (emergencyFreezeBtn) {
      emergencyFreezeBtn.addEventListener('click', () => {
        const c = getCurrentCustomer();
        c.cardBlocked = true;
        c.upiBlocked = true;
        window.SaralAudio.playSound('alert');
        saveAll();
        showToast(t('help.frozenNotice'), 'warning');
        renderApp();
      });
    }

    const unfreezeBtn = document.getElementById('btn-unfreeze-everything');
    if (unfreezeBtn) {
      unfreezeBtn.addEventListener('click', () => {
        const c = getCurrentCustomer();
        c.cardBlocked = false;
        c.upiBlocked = false;
        saveAll();
        renderApp();
      });
    }

    const openTheStandardBtn = document.getElementById('btn-open-the-standard');
    if (openTheStandardBtn) {
      openTheStandardBtn.addEventListener('click', () => {
        state.activeSubScreen = 'the_standard';
        renderApp();
      });
    }

    // AI Chat Input Events
    const aiChatInput = document.getElementById('input-ai-chat');
    const aiChatSendBtn = document.getElementById('btn-ai-chat-send');
    const charCounter = document.getElementById('char-counter');

    if (aiChatInput) {
      aiChatInput.addEventListener('input', () => {
        state.chatInput = aiChatInput.value;
        if (charCounter) {
          charCounter.textContent = `${aiChatInput.value.length}/500`;
        }
      });

      aiChatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          const query = aiChatInput.value;
          if (query.trim() && !state.aiTyping) {
            sendUserChatMessage(query);
          }
        }
      });
    }

    if (aiChatSendBtn) {
      aiChatSendBtn.addEventListener('click', () => {
        const query = (document.getElementById('input-ai-chat') || {}).value || '';
        if (query.trim() && !state.aiTyping) {
          sendUserChatMessage(query);
        }
      });
    }

    document.querySelectorAll('.btn-quick-prompt').forEach(btn => {
      btn.addEventListener('click', () => {
        const query = btn.dataset.query;
        if (query && !state.aiTyping) {
          sendUserChatMessage(query);
        }
      });
    });

    const clearChatBtn = document.getElementById('btn-clear-chat');
    if (clearChatBtn) {
      clearChatBtn.addEventListener('click', () => {
        state.chatMessages = [];
        initDefaultChatMessages();
        renderApp();
      });
    }

    // Settings Controls
    document.querySelectorAll('.btn-set-lang').forEach(btn => {
      btn.addEventListener('click', () => {
        state.lang = btn.dataset.lang;
        saveAll();
        renderApp();
      });
    });

    document.querySelectorAll('.btn-switch-bank').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeBankId = btn.dataset.bankId;
        saveAll();
        renderApp();
      });
    });

    document.querySelectorAll('.btn-demo-switch-bank').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeBankId = btn.dataset.bankId;
        saveAll();
        renderApp();
      });
    });

    document.querySelectorAll('.btn-set-mode').forEach(btn => {
      btn.addEventListener('click', () => {
        state.mode = btn.dataset.mode;
        saveAll();
        renderApp();
      });
    });

    document.querySelectorAll('.btn-set-text-size').forEach(btn => {
      btn.addEventListener('click', () => {
        state.textSize = btn.dataset.size;
        saveAll();
        renderApp();
      });
    });

    const chkContrast = document.getElementById('chk-high-contrast');
    if (chkContrast) {
      chkContrast.addEventListener('change', (e) => {
        state.highContrast = e.target.checked;
        saveAll();
        renderApp();
      });
    }

    const chkReadAloud = document.getElementById('chk-read-aloud');
    if (chkReadAloud) {
      chkReadAloud.addEventListener('change', (e) => {
        state.readAloud = e.target.checked;
        saveAll();
        renderApp();
      });
    }

    const chkHideBal = document.getElementById('chk-hide-balance-default');
    if (chkHideBal) {
      chkHideBal.addEventListener('change', (e) => {
        state.hideBalanceDefault = e.target.checked;
        saveAll();
        renderApp();
      });
    }

    const sLearn = document.getElementById('btn-settings-open-learn');
    if (sLearn) sLearn.addEventListener('click', () => { state.activeSubScreen = 'learn'; renderApp(); });

    const sPayees = document.getElementById('btn-settings-open-payees');
    if (sPayees) sPayees.addEventListener('click', () => { state.activeSubScreen = 'payees'; renderApp(); });

    const resetDemoBtn = document.getElementById('btn-reset-demo');
    if (resetDemoBtn) {
      resetDemoBtn.addEventListener('click', () => {
        if (confirm(t('settings.resetConfirm'))) {
          resetDemoData();
        }
      });
    }

    // Guardian Actions
    document.querySelectorAll('.btn-guardian-approve').forEach(btn => {
      btn.addEventListener('click', () => {
        const reqId = btn.dataset.reqId;
        const req = (state.pendingApprovals || []).find(r => r.id === reqId);
        if (req) {
          executePayment(req, 'aarav');
          state.pendingApprovals = state.pendingApprovals.filter(r => r.id !== reqId);
          saveAll();
          showToast(t('guardian.approvedMsg', { amount: formatINR(req.amountPaise) }), 'success');
          renderApp();
        }
      });
    });

    document.querySelectorAll('.btn-guardian-decline').forEach(btn => {
      btn.addEventListener('click', () => {
        const reqId = btn.dataset.reqId;
        state.pendingApprovals = state.pendingApprovals.filter(r => r.id !== reqId);
        saveAll();
        showToast(t('guardian.declinedMsg'), 'info');
        renderApp();
      });
    });

    // Glossary Clicks
    document.querySelectorAll('.term-dotted').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        state.activeGlossaryTerm = el.dataset.glossary;
        renderApp();
      });
    });

    const closeGlossaryBtn = document.getElementById('btn-close-glossary-modal');
    if (closeGlossaryBtn) {
      closeGlossaryBtn.addEventListener('click', () => {
        state.activeGlossaryTerm = null;
        renderApp();
      });
    }

    // Read Lesson Text
    document.querySelectorAll('.btn-read-lesson').forEach(btn => {
      btn.addEventListener('click', () => {
        speak(btn.dataset.text);
      });
    });
  }

  // ==========================================
  // PAY FLOW SPECIFIC EVENTS & ACTIONS
  // ==========================================
  let payPinEntered = "";
  function bindPayFlowEvents() {
    // Pay Method Chooser
    document.querySelectorAll('.pay-method-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.payFlow.method = btn.dataset.method;
        renderApp();
      });
    });

    // QR Scan / Demo QR
    const scanQrBtn = document.getElementById('btn-scan-qr');
    if (scanQrBtn) {
      scanQrBtn.addEventListener('click', () => {
        state.payFlow.method = 'upi';
        state.payFlow.recipientIdentifier = 'shankar.veg@sbi';
        state.payFlow.recipientName = 'Ramesh Organic Veg';
        state.payFlow.recipientRegisteredName = 'R*** Kumar';
        state.payFlow.amountPaise = 25000; // ₹250
        renderApp();
      });
    }

    // Payee Picker Item
    document.querySelectorAll('.payee-pick-card').forEach(card => {
      card.addEventListener('click', () => {
        const p = state.payees.find(x => x.id === card.dataset.payeeId);
        if (p) {
          state.payFlow.recipientIdentifier = p.identifier;
          state.payFlow.recipientName = p.name;
          state.payFlow.recipientRegisteredName = p.registeredName;
          state.payFlow.isNewPayee = !!p.isNew;
          renderApp();
        }
      });
    });

    // Amount Input Live Words
    const amtInput = document.getElementById('input-pay-amount');
    const amtWords = document.getElementById('amount-in-words');
    if (amtInput && amtWords) {
      const updateAmtWords = () => {
        const val = parseFloat(amtInput.value) || 0;
        if (val > 0) {
          const paise = Math.round(val * 100);
          amtWords.innerText = inrToWords(paise);
        } else {
          amtWords.innerText = "";
        }
      };
      amtInput.addEventListener('input', updateAmtWords);
      updateAmtWords();

      document.querySelectorAll('.btn-quick-amt').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const amt = parseInt(btn.dataset.amt, 10) || 0;
          const currentVal = parseFloat(amtInput.value) || 0;
          const newVal = currentVal + amt;
          amtInput.value = newVal;
          updateAmtWords();
        });
      });
    }

    // Step 1 -> Continue
    const step1ContinueBtn = document.getElementById('btn-pay-step1-continue');
    if (step1ContinueBtn) {
      step1ContinueBtn.addEventListener('click', () => {
        const pf = state.payFlow;
        const curCustomer = getCurrentCustomer();
        const balances = computeCustomerBalances(curCustomer.id);

        const amtInput = document.getElementById('input-pay-amount');
        const noteInput = document.getElementById('input-pay-note');
        const recipInput = document.getElementById('input-pay-recipient');
        const accInput = document.getElementById('input-pay-acc');

        const rupees = parseFloat(amtInput ? amtInput.value : 0) || 0;
        if (rupees <= 0) {
          pf.errorMsg = "Please enter a valid amount greater than ₹0.";
          renderApp();
          return;
        }

        const paise = Math.round(rupees * 100);
        if (paise > balances.availablePaise) {
          pf.errorMsg = `Insufficient balance. Your available balance is ${formatINR(balances.availablePaise)}.`;
          renderApp();
          return;
        }

        pf.amountPaise = paise;
        pf.note = noteInput ? noteInput.value.trim() : "";
        if (recipInput) pf.recipientIdentifier = recipInput.value.trim();
        if (accInput) pf.recipientIdentifier = accInput.value.trim();

        if (!pf.recipientIdentifier) {
          pf.errorMsg = "Please enter the receiver's details.";
          renderApp();
          return;
        }

        // Auto-assign registered name for verification display
        if (!pf.recipientRegisteredName) {
          pf.recipientRegisteredName = "R*** Kumar";
        }

        // Young Saver Daily Limit Rule
        if (state.mode === 'young_saver' && paise > curCustomer.dailyLimitPaise) {
          // Put in pending approvals for Meena!
          state.pendingApprovals = state.pendingApprovals || [];
          state.pendingApprovals.push({
            id: 'apr_' + Date.now(),
            customerId: 'aarav',
            recipientName: pf.recipientName || 'Store Payment',
            recipientIdentifier: pf.recipientIdentifier,
            recipientRegisteredName: pf.recipientRegisteredName,
            amountPaise: paise,
            note: pf.note,
            requestedAt: new Date().toISOString()
          });
          saveAll();
          pf.step = 6;
          pf.approvalPending = true;
          renderApp();
          return;
        }

        // New Payee 24h Limit Check (₹10,000)
        if (pf.isNewPayee && paise > window.SaralConfig.limits.newPayee24hLimitPaise) {
          pf.errorMsg = window.SaralConfig.newPayeeRules.reasonEn;
          renderApp();
          return;
        }

        // Safety Prompt Trigger Conditions:
        // 1. Payment > ₹10,000
        // 2. First payment to new payee
        // 3. Or if Simple Mode and > ₹5,000
        if (paise >= window.SaralConfig.limits.safetyCheckThresholdPaise || pf.isNewPayee || (state.mode === 'simple' && paise >= window.SaralConfig.limits.simpleModeConfirmThresholdPaise)) {
          pf.step = 2; // Safety Check question
        } else {
          pf.step = 3; // Review screen
        }
        pf.errorMsg = "";
        renderApp();
      });
    }

    // Safety Check Handlers
    const safetyYesBtn = document.getElementById('btn-safety-yes');
    if (safetyYesBtn) {
      safetyYesBtn.addEventListener('click', () => {
        state.scamWarningOpen = true;
        renderApp();
      });
    }

    const safetyNoBtn = document.getElementById('btn-safety-no');
    if (safetyNoBtn) {
      safetyNoBtn.addEventListener('click', () => {
        state.payFlow.step = 3; // Proceed to Review Screen
        renderApp();
      });
    }

    const scamCancelBtn = document.getElementById('btn-scam-cancel-payment');
    if (scamCancelBtn) {
      scamCancelBtn.addEventListener('click', () => {
        state.scamWarningOpen = false;
        state.payFlow.step = 1;
        renderApp();
      });
    }

    // Step 3 Review -> Go to PIN
    const reviewConfirmBtn = document.getElementById('btn-pay-review-confirm');
    if (reviewConfirmBtn) {
      reviewConfirmBtn.addEventListener('click', () => {
        state.payFlow.step = 4;
        payPinEntered = "";
        renderApp();
      });
    }

    // Step 4 PIN Keypad
    document.querySelectorAll('.pay-keypad-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const val = btn.dataset.val;
        const action = btn.dataset.action;
        const err = document.getElementById('pay-pin-error');
        if (err) err.classList.add('hidden');

        if (val !== undefined && payPinEntered.length < 4) {
          payPinEntered += val;
          updatePayPinDots();
          if (payPinEntered.length === 4) {
            setTimeout(verifyPayPinAndExecute, 150);
          }
        } else if (action === 'backspace') {
          payPinEntered = payPinEntered.slice(0, -1);
          updatePayPinDots();
        } else if (action === 'clear') {
          payPinEntered = "";
          updatePayPinDots();
        }
      });
    });

    // Physical keyboard support for Pay PIN
    const handlePayKeydown = (e) => {
      const err = document.getElementById('pay-pin-error');
      if (err) err.classList.add('hidden');

      if (/^[0-9]$/.test(e.key) && payPinEntered.length < 4) {
        payPinEntered += e.key;
        updatePayPinDots();
        if (payPinEntered.length === 4) {
          setTimeout(verifyPayPinAndExecute, 150);
        }
      } else if (e.key === 'Backspace') {
        payPinEntered = payPinEntered.slice(0, -1);
        updatePayPinDots();
      } else if (e.key === 'Escape' || e.key === 'Delete') {
        payPinEntered = "";
        updatePayPinDots();
      }
    };
    window.addEventListener('keydown', handlePayKeydown);

    function updatePayPinDots() {
      const dots = document.querySelectorAll('.pay-pin-dot');
      dots.forEach((dot, idx) => {
        if (idx < payPinEntered.length) {
          dot.classList.add('bg-slate-900', 'border-slate-900');
        } else {
          dot.classList.remove('bg-slate-900', 'border-slate-900');
        }
      });
    }

    function verifyPayPinAndExecute() {
      const enteredHash = sha256(payPinEntered);
      if (enteredHash === window.SaralConfig.demoCredentials.pinHash) {
        // Execute Payment
        const curCustomer = getCurrentCustomer();
        executePayment(state.payFlow, curCustomer.id);
        state.payFlow.step = 5; // Receipt
        window.SaralAudio.playSound('success');
        renderApp();
      } else {
        window.SaralAudio.playSound('alert');
        const err = document.getElementById('pay-pin-error');
        if (err) err.classList.remove('hidden');
        payPinEntered = "";
        updatePayPinDots();
      }
    }

    // Receipt Actions
    const payAnotherBtn = document.getElementById('btn-pay-another');
    if (payAnotherBtn) {
      payAnotherBtn.addEventListener('click', () => {
        state.payFlow.step = 1;
        state.payFlow.amountPaise = 0;
        state.payFlow.note = '';
        state.payFlow.recipientIdentifier = '';
        state.payFlow.completedTx = null;
        renderApp();
      });
    }

    const shareReceiptBtn = document.getElementById('btn-share-receipt');
    if (shareReceiptBtn) {
      shareReceiptBtn.addEventListener('click', () => {
        showToast(t('common.shared') + ' ✓', 'success');
      });
    }

    // Incoming Request Decline
    document.querySelectorAll('.btn-decline-req').forEach(btn => {
      btn.addEventListener('click', () => {
        const reqId = btn.dataset.reqId;
        state.paymentRequests = state.paymentRequests.filter(r => r.id !== reqId);
        saveAll();
        showToast(t('pay.declinedMessage'), 'info');
        renderApp();
      });
    });

    // Incoming Request Accept
    document.querySelectorAll('.btn-accept-req').forEach(btn => {
      btn.addEventListener('click', () => {
        const reqId = btn.dataset.reqId;
        const req = state.paymentRequests.find(r => r.id === reqId);
        if (req) {
          state.payFlow.recipientIdentifier = req.requesterUpi;
          state.payFlow.recipientName = req.requesterName;
          state.payFlow.recipientRegisteredName = req.registeredName;
          state.payFlow.amountPaise = req.amountPaise;
          state.payFlow.note = req.noteEn;
          state.payFlow.step = 2; // Always trigger safety check for payment requests!
          renderApp();
        }
      });
    });
  }

  // ==========================================
  // TRANSACTION EXECUTION LOGIC
  // Ensures customer balance strictly equals opening balance + sum(credits) - sum(debits)
  // ==========================================
  function executePayment(payDetails, customerId) {
    const refNum = (410000000000 + Math.floor(Math.random() * 89999999999)).toString();
    const party = payDetails.recipientRegisteredName || payDetails.recipientName || payDetails.recipientIdentifier;
    const mode = 'UPI';

    const rawDesc = `${mode}/DR/${refNum}/${party}/SBIN`;
    const plainEn = `You paid ${party} ${formatINR(payDetails.amountPaise)}`;
    const plainHi = `आपने ${party} को ${formatINR(payDetails.amountPaise)} दिए`;

    const newTx = {
      id: 'tx_dyn_' + Date.now(),
      customerId: customerId,
      timestamp: new Date().toISOString(),
      type: 'debit',
      category: 'transfer',
      amountPaise: payDetails.amountPaise,
      rawDescription: rawDesc,
      plainEn: plainEn,
      plainHi: plainHi,
      counterpartyName: party,
      referenceNumber: refNum,
      paymentMode: mode,
      rawBreakdown: [
        { code: mode, meaningEn: "Payment Mode: Instant UPI Transfer", meaningHi: "भुगतान माध्यम: यूपीआई" },
        { code: "DR", meaningEn: "Debit (Money went OUT of your account)", meaningHi: "डेबिट (खाते से राशि निकली)" },
        { code: refNum, meaningEn: "Official Bank Reference Number (UTR)", meaningHi: "बैंक लेनदेन संदर्भ संख्या" },
        { code: party, meaningEn: "Beneficiary: " + party, meaningHi: "प्राप्तकर्ता: " + party },
        { code: "SBIN", meaningEn: "Beneficiary Bank Code: State Bank of India", meaningHi: "बैंक कोड: स्टेट बैंक ऑफ़ इंडिया" }
      ]
    };

    // Prepend to transaction list
    state.transactions.unshift(newTx);
    state.payFlow.completedTx = newTx;
    saveAll();
  }

  // ==========================================
  // PROFILE UPDATE & CHEQUE BOOK PROMPTS
  // ==========================================
  function promptUpdateProfile() {
    const curCustomer = getCurrentCustomer();
    const newPhone = prompt("Enter new mobile number:", curCustomer.phone);
    if (!newPhone) return;

    const otp = prompt("Demo OTP Verification: Enter 123456", "123456");
    if (otp === window.SaralConfig.demoCredentials.otp) {
      curCustomer.phone = newPhone;
      saveAll();
      showToast(t('services.serviceSuccess'), 'success');
      renderApp();
    } else {
      showToast(t('services.invalidOtp'), 'error');
    }
  }

  function promptChequeRequest() {
    const curCustomer = getCurrentCustomer();
    const ok = confirm(`Confirm delivery of 20 cheque leaves to:\n${curCustomer.addressEn}`);
    if (!ok) return;

    const otp = prompt("Demo OTP Verification: Enter 123456", "123456");
    if (otp === window.SaralConfig.demoCredentials.otp) {
      state.serviceRequests.unshift({
        id: 'sr_' + Date.now(),
        type: 'cheque_book',
        titleEn: 'Cheque Book (20 Leaves)',
        titleHi: 'चेक बुक (20 पत्ते)',
        status: 'requested',
        requestedAt: new Date().toISOString(),
        etaEn: 'Delivering within 5 working days',
        etaHi: '5 कार्य दिवसों में डिलीवरी'
      });
      saveAll();
      showToast(t('services.serviceSuccess'), 'success');
      renderApp();
    } else {
      showToast(t('services.invalidOtp'), 'error');
    }
  }

  function promptAddPayee() {
    const name = prompt("Enter Payee Name (e.g. Ramesh Kumar):");
    if (!name) return;
    const identifier = prompt("Enter UPI ID or Mobile Number:");
    if (!identifier) return;

    const curCustomer = getCurrentCustomer();
    const newPayee = {
      id: 'p_user_' + Date.now(),
      customerId: curCustomer.id,
      name: name,
      registeredName: name.slice(0, 1) + "*** " + (name.split(' ')[1] || 'Kumar'),
      type: identifier.includes('@') ? 'upi' : 'mobile',
      identifier: identifier,
      bankName: "State Bank of India",
      isNew: true, // Triggers cooling limit
      addedAt: new Date().toISOString(),
      coolingUntil: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };

    state.payees.unshift(newPayee);
    saveAll();
    showToast(t('payees.payeeAdded') + ' • ' + t('payees.coolingExplanation'), 'success');
    renderApp();
  }

  // ==========================================
  // CSV STATEMENT EXPORT
  // ==========================================
  function exportStatementCSV() {
    const curCustomer = getCurrentCustomer();
    const custTxs = state.transactions.filter(t => t.customerId === curCustomer.id);
    const bank = getActiveBank();

    let csv = `Date,Type,Description,Amount (INR),Reference Number,Raw Description\n`;
    for (const tx of custTxs) {
      const date = tx.timestamp.split('T')[0];
      const desc = `"${(tx.plainEn || '').replace(/"/g, '""')}"`;
      const amt = (tx.type === 'credit' ? '+' : '-') + (tx.amountPaise / 100).toFixed(2);
      const raw = `"${(tx.rawDescription || '').replace(/"/g, '""')}"`;
      csv += `${date},${tx.type.toUpperCase()},${desc},${amt},${tx.referenceNumber},${raw}\n`;
    }

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Statement_${curCustomer.nameEn.replace(/\s+/g, '_')}_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  // Run on page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initData();
      renderApp();
    });
  } else {
    initData();
    renderApp();
  }

  // Export to window for debugging or manual testing if needed
  window.SaralApp = {
    state,
    resetDemoData,
    renderApp,
    formatINR,
    computeCustomerBalances
  };
})();
