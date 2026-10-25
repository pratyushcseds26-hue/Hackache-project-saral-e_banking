# Hackache-project-saral-e_banking
Saral Banking: The Standard for Accessible Digital Finance
Digital banking shouldn't require a glossary to navigate. Currently, every bank uses disparate layouts, confusing jargon (like IMPS, NEFT, DR/CR), and varying confirmation flows. This disjointed experience leaves vulnerable users—especially the elderly and tech-novices—susceptible to confusion and targeted financial scams.

Saral Banking is a zero-backend, client-side prototype proposing a unified, accessible standard for savings accounts. It demonstrates how any bank could adopt a standardized layout, plain-language terminology, and universal safety checks to protect users of all ages and tech-literacy levels. The app runs entirely in the browser using localStorage, utilizing mock data to safely demonstrate complex financial flows without ever collecting real user credentials.

Core Features
Adaptive Accessibility Modes:

Standard: A clean, modern interface for everyday users.

Simple: Designed for elderly users (like Shankar, 68), featuring larger touch targets, read-aloud functionality, reduced cognitive load (only four main actions), and secondary confirmation steps for large payments.

Young Saver: Designed for teenagers (like Aarav, 15), featuring guardian-defined daily limits, savings goals, and a Guardian View for approving or declining flagged transactions.

Built-In Scam Friction: Implements psychological friction before high-risk actions. Includes contextual scam warnings for payments over ₹10,000, 24-hour cooling periods (₹10,000 limit) for new payees, and explicit warnings on payment requests that reinforce the rule: You never need a PIN to receive money.

Plain-Language Translation: Replaces technical banking jargon with everyday words. Complex transaction hashes (e.g., UPI/DR/412345/RAMESH/SBIN) are visually decoded into simple explanations. A tap-to-reveal glossary is available globally.

True Multilingual Support: Seamless toggling between English and Hindi, updating everything from navigation to transaction receipts and the offline help chat.

White-Label Architecture: A built-in "Bank Switcher" proves the UI standard works universally by swapping brand colors and logos without shifting a single button or layout element.

Tech Stack & Architecture
Framework: React + Vite

Styling: Tailwind CSS (Mobile-first, 360px optimized, WCAG AA compliant)

Routing: React Router

Data Persistence: Browser localStorage (Zero backend)

Assets: Inline SVG icons (No external image requests)

Localization: Custom i18n implementation (English/Hindi)
