import type { VercelRequest, VercelResponse } from '@vercel/node';
import { firebaseAdmin, requireAdmin } from '../../server/firebaseAdmin.js';
export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try { await requireAdmin(req); } catch { return res.status(401).json({ error: 'Admin sign-in required.' }); }
  const token = String(req.body?.token || '').trim();
  if (!token || token.length > 100) return res.status(400).json({ error: 'Invalid QR token.' });
  try {
    const { db } = firebaseAdmin();
    const q = await db.collection('rsvps').where('eCardCode', '==', token).limit(1).get();
    if (q.empty) return res.status(404).json({ status: 'invalid', error: 'QR token not found.' });
    const ref = q.docs[0].ref;
    const result = await db.runTransaction(async tx => {
      const snap = await tx.get(ref);
      const guest = snap.data();
      if (!guest) return { status: 'invalid' };
      if (guest.willAttend !== 'yes') return { status: 'declined', guest: { fullName: guest.fullName } };
      if (guest.checkedIn) return { status: 'already_used', guest: { fullName: guest.fullName, checkedInAt: guest.checkedInAt } };
      const checkedInAt = new Date().toISOString();
      tx.update(ref, { checkedIn: true, checkedInAt });
      return { status: 'success', guest: { fullName: guest.fullName, checkedInAt } };
    });
    return res.status(200).json(result);
  } catch (error) { console.error('Gate check-in error:', error); return res.status(500).json({ error: 'Could not validate QR token.' }); }
}
