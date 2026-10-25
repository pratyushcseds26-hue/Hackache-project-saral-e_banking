#!/usr/bin/env python3
"""
Saral Banking - Local Development Server with AI Chat Endpoint (/api/chat)
Serves static frontend files and proxies AI requests securely without exposing API keys.
Requires zero external pip dependencies (uses Python standard library).
"""

import os
import sys
import json
import urllib.request
import urllib.error
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Load .env or .env.example files manually if they exist
def load_env():
    for filename in ['.env', '.env.example']:
        env_path = os.path.join(os.path.dirname(__file__), filename)
        if os.path.exists(env_path):
            try:
                with open(env_path, 'r', encoding='utf-8') as f:
                    for line in f:
                        line = line.strip()
                        if not line or line.startswith('#') or '=' not in line:
                            continue
                        key, val = line.split('=', 1)
                        key = key.strip()
                        val = val.strip().strip('"').strip("'")
                        # Don't overwrite if valid key already present or if value is placeholder
                        if key and val and val != "your_gemini_api_key_here" and val != "your_openai_api_key_here":
                            current_val = os.environ.get(key, "")
                            if not current_val or current_val.startswith("your_"):
                                os.environ[key] = val
            except Exception as e:
                print(f"[Saral Server] Notice: Could not read {filename}: {e}")

load_env()

SYSTEM_PROMPT = """You are "Saral Sahayak", a polite, trustworthy, and simple AI banking assistant embedded inside the Saral Banking web application for savings account customers in India.

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
   - If you do not know the answer or the query falls outside savings banking rules, say honestly that you do not know and advise them to speak to a representative at their local bank branch or call the national cybercrime helpline at 1930 for suspicious activities.
"""

def call_gemini(api_key, messages):
    contents = []
    for msg in messages:
        role = "user" if msg.get("role") in ["user", "human"] else "model"
        text = msg.get("content") or msg.get("text") or ""
        if text:
            contents.append({
                "role": role,
                "parts": [{"text": text}]
            })

    payload = {
        "systemInstruction": {
            "parts": [{"text": SYSTEM_PROMPT}]
        },
        "contents": contents,
        "generationConfig": {
            "temperature": 0.3,
            "maxOutputTokens": 600
        }
    }

    # Available models in priority order
    MODELS_TO_TRY = [
        'gemini-3.5-flash',
        'gemini-3.8-flash',
        'gemini-3.1-flash-lite',
        'gemma-4-26b-a4b-it',
        'gemini-flash-latest',
        'gemini-2.5-flash',
        'gemini-1.5-flash'
    ]

    last_err = None
    for model_name in MODELS_TO_TRY:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model_name}:generateContent?key={api_key}"
        try:
            req = urllib.request.Request(
                url,
                data=json.dumps(payload).encode("utf-8"),
                headers={"Content-Type": "application/json"},
                method="POST"
            )
            with urllib.request.urlopen(req, timeout=15) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                candidates = data.get("candidates", [])
                if candidates and "content" in candidates[0] and "parts" in candidates[0]["content"]:
                    return candidates[0]["content"]["parts"][0].get("text", "")
        except urllib.error.HTTPError as e:
            err_body = e.read().decode('utf-8', errors='replace')
            print(f"[Saral Server] Gemini model {model_name} HTTP {e.code}: {err_body[:120]}")
            last_err = e
            continue
        except Exception as e:
            print(f"[Saral Server] Gemini model {model_name} error: {e}")
            last_err = e
            continue

    if last_err:
        raise last_err
    return "I am sorry, I could not generate an answer at this moment."

def call_openai(api_key, messages):
    url = "https://api.openai.com/v1/chat/completions"

    formatted_msgs = [{"role": "system", "content": SYSTEM_PROMPT}]
    for msg in messages:
        role = "user" if msg.get("role") in ["user", "human"] else "assistant"
        formatted_msgs.append({
            "role": role,
            "content": msg.get("content") or msg.get("text") or ""
        })

    payload = {
        "model": "gpt-4o-mini",
        "messages": formatted_msgs,
        "temperature": 0.3,
        "max_tokens": 600
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}"
        },
        method="POST"
    )

    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read().decode("utf-8"))
        return data["choices"][0]["message"]["content"]

class SaralHTTPHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        # Prevent browser caching of development code
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        if self.path == '/api/chat':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)

            try:
                data = json.loads(body.decode('utf-8'))
                raw_messages = data.get('messages', [])
                # Enforce last 10 messages context limit
                messages = raw_messages[-10:] if len(raw_messages) > 10 else raw_messages

                gemini_key = os.environ.get("GEMINI_API_KEY")
                openai_key = os.environ.get("OPENAI_API_KEY")

                # Check for configured AI keys
                reply = None
                provider = None

                if gemini_key and gemini_key != "your_gemini_api_key_here":
                    try:
                        reply = call_gemini(gemini_key, messages)
                        provider = "gemini"
                    except Exception as e:
                        print(f"[Saral Server] Gemini API error: {e}")

                if not reply and openai_key and openai_key != "your_openai_api_key_here":
                    try:
                        reply = call_openai(openai_key, messages)
                        provider = "openai"
                    except Exception as e:
                        print(f"[Saral Server] OpenAI API error: {e}")

                if reply:
                    response_data = {
                        "reply": reply,
                        "provider": provider,
                        "status": "success"
                    }
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps(response_data).encode('utf-8'))
                else:
                    # No API key configured or external API call failed - signal client to use offline fallback
                    response_data = {
                        "error": "NO_API_KEY",
                        "fallback": True,
                        "message": "AI key not configured or unreachable. Activating offline standard answer."
                    }
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json; charset=utf-8')
                    self.end_headers()
                    self.wfile.write(json.dumps(response_data).encode('utf-8'))

            except Exception as e:
                print(f"[Saral Server] Error handling /api/chat: {e}")
                self.send_response(500)
                self.send_header('Content-Type', 'application/json; charset=utf-8')
                self.end_headers()
                self.wfile.write(json.dumps({"error": str(e), "fallback": True}).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()

def run(port=8000):
    env_port = os.environ.get("PORT")
    if env_port:
        try:
            port = int(env_port)
        except ValueError:
            pass

    # Changed from '' to '0.0.0.0' to explicitly accept all external network connections
    server_address = ('0.0.0.0', port)
    httpd = HTTPServer(server_address, SaralHTTPHandler)

    gemini_ready = bool(os.environ.get("GEMINI_API_KEY") and os.environ.get("GEMINI_API_KEY") != "your_gemini_api_key_here")
    openai_ready = bool(os.environ.get("OPENAI_API_KEY") and os.environ.get("OPENAI_API_KEY") != "your_openai_api_key_here")

    print("=" * 60)
    print("  Saral Banking Web Server with AI Endpoint")
    print(f"  Local URL:       http://0.0.0.0:{port}")
    print(f"  AI Endpoint:     http://0.0.0.0:{port}/api/chat")
    if gemini_ready:
        print("  AI Provider:     Google Gemini (Key Detected)")
    elif openai_ready:
        print("  AI Provider:     OpenAI (Key Detected)")
    else:
        print("  AI Provider:     Offline Standard FAQ Fallback (Add key in .env for Gemini)")
    print("=" * 60)

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n[Saral Server] Server stopped gracefully.")
        httpd.server_close()

if __name__ == '__main__':
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            pass
    run(port)
