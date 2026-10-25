# Saral Banking - Safe & Clear Savings Account Prototype

An open standard web app prototype designed for a hackathon. **Saral Banking** removes digital financial exclusion by introducing universal design standards that any commercial bank can adopt. It eliminates confusion for senior citizens, first-time teen savers, and everyday working adults alike.

---

## How to Run

You can run the web app in either of two instant ways:

### Method 1: Local HTTP Server (Recommended)
1. Open PowerShell or Command Prompt in this folder (`C:\Users\Sahil Pal\.gemini\antigravity\scratch\saral-banking`).
2. Run:
   ```bash
   python -m http.server 8000
   ```
   *(Or double-click `start.bat`)*
3. Open your browser at:
   **[http://localhost:8000](http://localhost:8000)**

### Method 2: Direct File Open (Zero Dependencies, Offline)
Simply double-click [`index.html`](file:///C:/Users/Sahil%20Pal/.gemini/antigravity/scratch/saral-banking/index.html) in Windows File Explorer. All modules use universal UMD architecture to work without CORS errors.

---

## Demo Credentials & Safety Guarantees
* **Demo PIN:** `1234`
* **Demo OTP:** `123456`
* **Instant Fingerprint:** Tap the "Use Fingerprint (Demo)" button on the sign-in screen.
* **Auto-Lock:** The app automatically locks itself after **2 minutes** (120 seconds) of no user touch.
* **Never Collects Real Details:** Account numbers are masked (`XXXX XXXX 4821`), no real banking APIs are queried, and no analytics/tracking scripts exist.

---

## The Saral Standard (The 5 Core Rules)
1. **The 5 Bottom Tabs Everywhere:** `Home`, `Pay`, `History`, `Services`, and `Help` are fixed at the bottom of the screen.
2. **The Same Place for the Same Thing:** Available & Total Balance at the top of Home, main action as one large button at the bottom, and Back at the top-left.
3. **One Plain Word Per Idea:** Plain language everywhere ("Send money", never "Fund transfer", "IMPS" or "NEFT" on action buttons). Official banking terms have a dotted underline with an interactive tap-to-explain glossary.
4. **The 3-Step Confirmation Rule:** Every transaction follows: 1. Fill In -> 2. Review everything on one screen -> 3. Confirm with PIN. Then an instant receipt.
5. **Brand Switcher with Zero Layout Shift:** In Settings, switch between 3 fictional banks (*Janata Saral Bank*, *Suraksha Standard Bank*, *Pragati Sahyog Bank*). Only brand colors and SVG logos change—nothing moves.

---

## Multilingual Support: English, Hindi (हिंदी), and Tamil (தமிழ்)
* **Native Script Language Picker:** Displayed with their names in their own script (`English`, `हिंदी`, `தமிழ்`) available directly on the Sign-In screen and Settings.
* **Everyday Colloquial Vocabulary:** Uses simple spoken terms (e.g. `பணம் அனுப்பு`, `வரவு செலவுப் பட்டியல்`) rather than intimidating formal jargon, while preserving official acronyms like `(UPI)`, `(IFSC)`, `(OTP)`, `(PIN)` in brackets.
* **Indian Currency Pronunciation:** Amounts are expressed the Indian way across all three languages (e.g., `ஒரு லட்சம் ரூபாய்` for ₹1,00,000, `கோடி`, `ஆயிரம்`).
* **Adaptive Voice Detection for Read Aloud:** Uses browser SpeechSynthesis with language detection (`ta`, `hi`, `en`). If the user's browser lacks a voice pack for the chosen language, Read Aloud buttons gracefully hide.
* **Responsive 360px Layout:** Designed with word-wrapping and flexible touch layouts to guarantee long Tamil compound words never overflow or break UI alignment.

---

## Customer Personas & Modes
* **Shankar (68, Retired Pensioner):** Designed as the primary persona. Starts in **Simple Mode** in **Hindi** with larger text (18px+), 56px touch targets, audio read aloud, 4 big action tiles on Home, and an extra confirmation step for any payment over ₹5,000.
* **Priya (32, Working Professional):** Operates in **Standard Mode** in English. Regular payments, rent, bills, family support, and full transaction filtering.
* **Aarav (15, Young Saver):** Under-18 account linked to guardian **Meena Sharma**. Features daily spending limits (₹1,000/day), savings goal progress bars, and approval workflows. No credit or loans.
* **Guardian View (Meena):** Switch to Meena from the sign-in screen to review, approve, or decline Aarav's high-value payment requests and adjust his daily limit.

---

## AI Banking Guide (Saral Sahayak) & Local Server

Saral Banking features a real conversational AI assistant (**Saral Sahayak**) integrated directly into the **Help** tab. It replaces static keyword matching with dynamic, context-aware answers powered by **Google Gemini** (with OpenAI fallback support).

### 🔑 Setting Up Your API Key (Zero Frontend Exposure)
The browser frontend **never** touches or stores the API key. All AI queries proxy through the `/api/chat` server endpoint.

1. Copy `.env.example` to create a `.env` file in the root folder:
   ```powershell
   copy .env.example .env
   ```
2. Open `.env` and add your free Google Gemini API key:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *(Get a free Gemini API key at [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey))*
3. Run `start.bat` or execute:
   ```bash
   python server.py 8000
   ```
4. Open **http://localhost:8000** in your browser.

> **Offline / No-Key Fallback:** If no API key is configured or the server cannot be reached, the assistant automatically falls back to the client-side keyword FAQ and scam detection engine without errors or interruptions.

### 🛡️ Built-in Security & Safety Rules
- **Client-Side Data Masking:** Any card number (16 digits), account number (9–18 digits), OTP (6 digits), or PIN (4 digits in context) is automatically masked as `[CARD NUMBER HIDDEN]`, `[ACCOUNT NUMBER HIDDEN]`, `[OTP HIDDEN]`, or `[PIN HIDDEN]` **before** the message leaves the browser.
- **Strict Money Movement & Settings Restriction:** The AI cannot move funds or change settings. It explicitly tells the user where to perform actions in the app (e.g. *"Tap the Pay tab at the bottom"*).
- **Credential Hygiene:** The assistant sternly warns users if they share credentials and refuses to ask for or repeat back PINs, OTPs, or passwords.
- **Transaction Explanation ("Ask about this"):** Tap any transaction in the History tab, then tap **"Ask AI to explain this payment"**. The app passes only plain and raw bank tags (NEVER account numbers) to explain the codes.
- **10-Message Rolling Memory:** Maintains conversational context for the last 10 messages.
- **500-Character Counter & Typing Indicator:** Enforces 500-character max limit and shows animated bouncing dots while formulating answers.

---

## Directory Structure
```
saral-banking/
├── index.html                  # Accessible mobile-first HTML shell
├── server.py                   # Python server with static serving & /api/chat endpoint
├── start.bat                   # 1-click Windows launcher (launches server.py 8000)
├── .env.example                # Template for GEMINI_API_KEY / OPENAI_API_KEY
├── .env                        # Local environment file (ignored by version control)
├── api/
│   └── chat.js                 # Vercel / Netlify serverless function for /api/chat
├── README.md                   # Complete documentation & test questions
└── src/
    ├── app.js                  # Complete application logic, AI chat & screens
    ├── audio.js                # Indian currency words converter & audio chimes
    ├── data/
    │   ├── config.js           # Limits, sample charges, cooling rules
    │   ├── banks.js            # 3 fictional banks (colors & inline SVG logos)
    │   ├── customers.js        # Shankar, Priya, Aarav profiles
    │   ├── transactions.js     # 195 transactions (65/customer over 3 months)
    │   ├── payees.js           # Saved payees & sample payment requests
    │   ├── glossary.js         # Tap-to-explain banking definitions
    │   ├── faq.js              # 26 keyword-matched Q&As in EN, HI & TA
    │   └── scams.js            # 6 common scam guides
    └── i18n/
        ├── en.js               # Full English translations
        ├── hi.js               # Full Hindi translations
        └── ta.js               # Full Tamil translations (தமிழ்)
```
