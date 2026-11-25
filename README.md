# Claris & Allan Wedding Invitation

Vite + React wedding invitation for Claris Bongo & Allan Wesonga, prepared for Vercel deployment. The site includes the invitation, countdown, venue information, programme, dress guidance, monetary gifting details, RSVP form, guest photo gallery and password-protected admin panel.

## Local development

1. Install Node.js 20 or newer.
2. Copy `.env.example` to `.env.local` and fill in the values from a **new Firebase project** and your Cloudinary account.
3. Add the server-only Firebase Admin values to `.env.local` for local API testing.
4. Run `npm install`, then `npm run dev`.

## Vercel deployment

1. Push this project to a new private GitHub repository and import it into Vercel.
2. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
3. Create a **separate Firebase project for Claris & Allan**. Do not reuse the previous couple's Firebase project, Firestore database, admin credentials or Cloudinary folder. Create the default `(default)` Firestore database and deploy `firestore.rules`.
4. Register a Firebase web app and copy its web configuration into the `VITE_FIREBASE_*` variables. Create a Firebase service account with Firestore access and add its project ID, client email and private key to Vercel as `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL` and `FIREBASE_PRIVATE_KEY`. Keep the private key server-side only.
5. Create a new Cloudinary unsigned upload preset, restrict it to image uploads and set a sensible maximum file size. Add the cloud name and preset to Vercel.
6. Set a strong `ADMIN_PASSWORD` and a strong random `SESSION_SECRET`. Admin access is password-only; successful sign-ins receive an eight-hour, HttpOnly, Secure (production), SameSite=Strict session cookie.
7. Add every variable in `.env.example` to Vercel Project Settings → Environment Variables. Never expose server-only variables with a `VITE_` prefix.
8. Redeploy after changing environment variables. Test a real RSVP, admin sign-in, export, gallery upload and gallery like from a phone.

## Important launch checks

- Confirm the couple's date, venues, programme and gift instructions before publishing.
- The gift section is configured as M-Pesa Send Money to **0729806117**, recipient **Allan Wesonga**.
- Confirm the final public domain and configure it in Vercel. The QR code is generated from the current deployed domain.
- Update the RSVP deadline if the couple requests a different date.
- Add an appropriate privacy notice and obtain consent for guest photo uploads.
- Consider adding an anti-abuse challenge/rate limit to public RSVP and photo upload endpoints before a large public launch.

## Security

The Firebase web API key is browser configuration, not an admin credential. The service-account private key must remain server-only. Do not commit `.env.local` or service-account JSON. Use a new Firebase project and Cloudinary folder so the previous couple's RSVP and gallery data remain separate.
