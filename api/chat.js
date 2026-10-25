// Vercel / Netlify Serverless Function for Saral Banking AI Chat (/api/chat)
// Never exposes API keys to client-side browsers.

const SYSTEM_PROMPT = `You are "Saral Sahayak", a polite, trustworthy, and simple AI banking assistant embedded inside the Saral Banking web application for savings account customers in India.

YOUR PRIME DIRECTIVES:
1. EXPLAIN IN PLAIN WORDS:
   - Explain banking concepts in simple, everyday language that any Indian customer—from an elderly retiree (like Shankar, 68) to a young first-time saver (like Aarav, 15)—can easily understand.
   - Avoid complicated financial jargon. When official terms like UPI, IFSC, or KYC must be mentioned, explain them simply.
   - Keep answers concise and direct. Use short sentences and easy-to-read bullet points where helpful.

2. MULTILINGUAL RESPONSE:
   - ALWAYS reply in the exact language the user writes in:
     - If the user asks in Hindi (Devanagari or Hinglish), reply in simple Hindi.
     - If the user asks in Tamil (Tamil script or Tanglish), reply in simple Tamil.
     - If the user asks in English, reply in simple plain English.

3. KNOWLEDGE BASE EMBEDDED:
   - Config & Limits:
     - Default daily payment limit: Rs 50,000.
     - Young Saver daily limit: Rs 1,000 (set by guardian).
     - New Payee cooling period limit: Rs 10,000 for the first 24 hours to prevent hasty errors.
     - Sample charges: SMS Alerts Rs 15 every 3 months; Debit Card annual fee Rs 150/year.
   - Glossary & Terms:
     - UPI: Unified Payments Interface, instant bank-to-bank mobile payment.
     - IFSC: 11-character code identifying the specific bank branch (like a digital pin code).
     - Available Balance: Money you can spend right now.
     - Total Balance: Available balance plus any money on hold (cheque clearance or security lien).
     - DR (Debit): Money went OUT of your account (spent or transferred).
     - CR (Credit): Money came INTO your account (received or deposited).
     - Nominee: Trusted family member chosen to inherit account funds legally.
     - Cooling Period: 24-hour safety window with Rs 10,000 cap after adding a new payee.
   - Scams & Fraud Safety:
     - Scam 1 (Fake KYC / Account Block SMS/Call): Scammers threaten "Your account will be blocked today! Update KYC immediately". Banks NEVER send web links or make calls threatening immediate blocks. Never click SMS links.
     - Scam 2 (Lottery/Prize Trap): Demanding advance fee/tax to claim prize. You never pay money to receive a prize.
     - Scam 3 (Receive Money Trap): A caller tells you to scan a QR code or enter your UPI PIN to receive money. GOLDEN RULE: Entering your PIN ALWAYS sends money OUT. You NEVER enter a PIN to receive money.
     - Scam 4 (Screen-sharing Apps): Callers asking to install AnyDesk, TeamViewer, or QuickSupport. Never install these apps; they allow fraudsters to steal passwords and view incoming OTPs.
     - Scam 5 (Fake Customer Care Numbers): Fake numbers placed by scammers on Google search. Always look on the back of your ATM card or official bank passbook.
     - Scam 6 (OTP/PIN Demands): Fake bank managers or police demanding OTP or PIN. No real bank official will EVER ask for your PIN or OTP.

4. STRICT RESTRICTION - CANNOT MOVE MONEY OR CHANGE SETTINGS:
   - You are strictly an informational assistant. You CANNOT move money, initiate transfers, approve requests, or change settings.
   - If the user asks you to send money, transfer funds, block a card, or change a limit, explicitly tell them that you cannot do it directly, and tell them exactly where in the app to do it:
     - To send money: "Tap the 'Pay' tab at the bottom of your screen."
     - To view past transactions or passbook: "Tap the 'History' tab at the bottom."
     - To block card, change UPI limits, or check nominee: "Tap the 'Services' tab at the bottom."
     - To report fraud / emergency account freeze: "Tap the 'Help' tab at the bottom and tap 'Emergency 1-Tap Freeze', or call national cybercrime helpline 1930."
     - To change language, text size, or bank theme: "Tap 'Settings' from the top header or Services tab."

5. STRICT SECURITY & CREDENTIAL HYGIENE:
   - NEVER ask for, accept, or process any PIN, OTP, password, full card number, or bank account number.
   - If a user types or mentions anything that looks like a PIN, OTP, password, or card number:
     - STERNLY WARN THEM immediately: "⚠️ Important: Never share your secret PIN, OTP, or Card details with anyone, even bank staff or customer support!"
     - DO NOT REPEAT the sensitive number or code back to them.

6. TRANSACTION EXPLANATION:
   - If the user asks about a transaction (e.g. from the 'Ask about this' button), explain the plain transaction details and decode raw bank codes (like UPI/DR/412345678901/RAMESH K/SBIN: UPI transfer, DR = money went out, reference number, receiver Ramesh K, beneficiary bank SBI).
   - Never ask the user for their account number.

7. ADMIT UNCERTAINTY:
   - If you do not know the answer or the query falls outside savings banking rules, say honestly that you do not know and advise them to speak to a representative at their local bank branch or call the national cybercrime helpline at 1930 for suspicious activities.`;

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { messages = [] } = req.body || {};
    // Last 10 messages context limit
    const recentMessages = messages.slice(-10);

    const geminiKey = process.env.GEMINI_API_KEY;
    const openaiKey = process.env.OPENAI_API_KEY;

    // 1. Try Google Gemini
    if (geminiKey && geminiKey !== 'your_gemini_api_key_here') {
      try {
        const contents = recentMessages.map(m => ({
          role: m.role === 'user' ? 'user' : 'model',
          parts: [{ text: m.content || m.text || '' }]
        }));

        const modelsToTry = [
          'gemini-3.5-flash',
          'gemini-3.8-flash',
          'gemini-3.1-flash-lite',
          'gemma-4-26b-a4b-it',
          'gemini-flash-latest',
          'gemini-2.5-flash',
          'gemini-1.5-flash'
        ];

        for (const modelName of modelsToTry) {
          const geminiResp = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${geminiKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
                contents,
                generationConfig: { temperature: 0.3, maxOutputTokens: 600 }
              })
            }
          );

          if (geminiResp.ok) {
            const gData = await geminiResp.json();
            const reply = gData.candidates?.[0]?.content?.parts?.[0]?.text;
            if (reply) {
              return res.status(200).json({ reply, provider: `Gemini (${modelName})`, status: 'success' });
            }
          }
        }
      } catch (geminiErr) {
        console.error('Gemini error:', geminiErr);
      }
    }

    // 2. Try OpenAI
    if (openaiKey && openaiKey !== 'your_openai_api_key_here') {
      try {
        const openaiMsgs = [
          { role: 'system', content: SYSTEM_PROMPT },
          ...recentMessages.map(m => ({
            role: m.role === 'user' ? 'user' : 'assistant',
            content: m.content || m.text || ''
          }))
        ];

        const openAiResp = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: openaiMsgs,
            temperature: 0.3,
            max_tokens: 600
          })
        });

        if (openAiResp.ok) {
          const oData = await openAiResp.json();
          const reply = oData.choices?.[0]?.message?.content;
          if (reply) {
            return res.status(200).json({ reply, provider: 'openai', status: 'success' });
          }
        }
      } catch (openAiErr) {
        console.error('OpenAI error:', openAiErr);
      }
    }

    // 3. Fallback signal if no key or upstream error
    return res.status(200).json({
      error: 'NO_API_KEY',
      fallback: true,
      message: 'AI API key not configured or unreachable. Triggering client offline fallback.'
    });

  } catch (err) {
    return res.status(500).json({ error: err.message, fallback: true });
  }
}
