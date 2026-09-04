# Shue — Landing Page

A simple, static marketing/description page for the **Shue** sneaker marketplace.
Built as plain HTML/CSS (no build step) so it deploys anywhere instantly. Intended to
satisfy Twilio A2P/10DLC (or similar) verification requirements that ask for a public
website with a project description, SMS messaging/consent disclosure, contact info, and
a privacy policy.

## Files
- `index.html` — landing page: hero, features, SMS/messaging consent, contact.
- `privacy.html` — privacy policy (includes mobile opt-in data handling).

## Preview locally
Just open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy to Vercel (its own project)

**Option A — Vercel dashboard (recommended):**
1. Push this folder to a new GitHub repo.
2. In the Vercel dashboard: **Add New… → Project → Import** the repo.
3. Framework preset: **Other**. No build command, output directory: `.` (root).
4. Deploy.

**Option B — Vercel CLI:**
```bash
npm i -g vercel
vercel        # from inside this folder; accept defaults, framework = Other
vercel --prod
```

## Business details (already filled in)
- Business name: **ShueApp**
- Support / contact email: **nexinocs@gmail.com**
- Location: **Oakland, CA**

Confirm the SMS section in `index.html` matches how you actually collect consent and what
messages you send before submitting for verification.
