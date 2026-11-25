import type { VercelRequest, VercelResponse } from '@vercel/node';
import { firebaseAdmin } from '../server/firebaseAdmin.js';
import { randomBytes } from 'node:crypto';

function normalizePhone(value: unknown) {
  const digits = String(value || '').replace(/\D/g, '');
  if (digits.startsWith('0') && digits.length === 10) return '254' + digits.slice(1);
  if (digits.startsWith('7') && digits.length === 9) return '254' + digits;
  return digits;
}
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { fullName, phoneNumber, willAttend, adultsCount, dietaryRequirements, notes } = req.body || {};
    const name = String(fullName || '').trim().replace(/\s+/g, ' ');
    const phone = normalizePhone(phoneNumber);
    if (name.length < 2 || name.length > 120) return res.status(400).json({ error: 'Please provide a valid full name.' });
    if (!/^254[17]\d{8}$/.test(phone)) return res.status(400).json({ error: 'Enter a valid Kenyan phone number.' });
    if (!['yes', 'no'].includes(willAttend)) return res.status(400).json({ error: 'Invalid attendance response.' });
    const { db } = firebaseAdmin();
    const rsvps = db.collection('rsvps');
    const phoneRef = db.collection('rsvpPhones').doc(phone);
    const ref = rsvps.doc();
    const token = randomBytes(24).toString('hex');
    const guest = {
      id: ref.id, fullName: name, phoneNumber: phone, willAttend,
      adultsCount: willAttend === 'yes' ? Math.min(Math.max(Number(adultsCount) || 1, 1), 10) : 0,
      dietaryRequirements: String(dietaryRequirements || 'None').slice(0, 300),
      notes: String(notes || '').slice(0, 1000), submittedAt: new Date().toISOString(),
      eCardCode: token, checkedIn: false,
    };
    await db.runTransaction(async tx => {
      const existing = await tx.get(phoneRef);
      if (existing.exists) throw new Error('PHONE_ALREADY_USED');
      tx.create(ref, guest);
      tx.create(phoneRef, { rsvpId: ref.id, createdAt: guest.submittedAt });
    });
    return res.status(201).json({ ok: true, guest });
  } catch (error: any) {
    if (error?.message === 'PHONE_ALREADY_USED') return res.status(409).json({ error: 'This phone number has already been used to submit an RSVP. Each phone number can RSVP once.' });
    console.error('RSVP API error:', error);
    return res.status(500).json({ error: 'We could not save your RSVP. Please try again.' });
  }
}
