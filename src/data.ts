import { ProgramItem, ColorSwatch, GalleryPhoto } from './types';

export const WEDDING_DATE = new Date('2026-12-05T09:00:00+03:00');

export const WEDDING_DETAILS = {
  couple: {
    bride: 'Claris',
    groom: 'Allan',
    brideShort: 'Claris',
    groomShort: 'Allan',
    brideFull: 'Claris Bongo',
    groomFull: 'Allan Wesonga',
    nickname: 'ClarisAndAllan2026',
    hashtag: '#ClarisAndAllan2026',
    featureHeadline: 'Celebration of Holy Matrimony',
    loveStory: 'Some stories are beautifully written by God, unfolding in His perfect time. Ours has been a journey of friendship, love, growth and grace. Through every season, we have been reminded that His plans are always beautiful. We are grateful for the gift of finding each other and excited to begin forever together',
  },
  families: {
    brideFamily: 'The Bongo Family',
    groomFamily: 'The Wesonga Family',
    invitationMessage: 'Together with our families, we joyfully invite you to celebrate the wedding of Claris Bongo & Allan Wesonga.',
  },
  complimentsNote: {
    title: 'With Our Compliments',
    line1: 'This is a private invitation, personally prepared for you.',
    line2Prefix: 'We would be grateful if you would kindly ',
    line2Bold: 'keep the invitation link confidential and refrain from sharing or forwarding it',
    line2Suffix: '.',
    line3: 'With appreciation for helping us preserve the intimacy of our celebration.',
    signature: 'Claris & Allan',
  },
  parents: {
    bride: { label: 'Bongo Family', names: 'Family of Claris Bongo' },
    groom: { label: 'Wesonga Family', names: 'Family of Allan Wesonga' },
  },
  ceremony: {
    time: '9:00 AM – 11:30 AM',
    venue: 'Redeemed Gospel Church, Tiwi',
    address: 'Redeemed Gospel Church, Tiwi, Kwale County, Kenya',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Redeemed+Gospel+Church+Tiwi+Kenya&z=15&output=embed',
  },
  reception: {
    time: '1:30 PM – 5:30 PM',
    venue: 'Sunset Villas, Diani',
    address: 'Sunset Villas, Diani, Kwale County, Kenya',
    mapEmbedUrl: 'https://maps.google.com/maps?q=Sunset+Villas+Diani+Kenya&z=15&output=embed',
  },
  contacts: [],
  registry: {
    message: 'Your presence and prayers are the greatest gifts. Should you wish to bless our new journey with a monetary gift, you may do so using the M-Pesa details below. Thank you for your love and generosity.',
    tillNumber: '0729806117',
    accountName: 'Allan Wesonga',
    physicalGiftNote: 'Physical gifts are warmly welcomed and gratefully accepted. Your thoughtfulness means so much to us.',
    envelopeNote: 'With love and gratitude, we welcome your blessings in any form.',
  },
  dressCode: {
    formalTheme: 'A Touch of Blush Pink',
    ladies: 'Elegant formal dresses in butter yellow, beige, sage green or blush pink accents.',
    gentlemen: 'Smart formal suits or elegant traditional wear in complementary neutral and nature-inspired tones.',
    guideline: 'Butter yellow, beige and sage green, with a touch of blush pink.',
    kidsNote: 'We look forward to celebrating this special day with you.',
  },
  bibleVerses: [
    { text: 'I have found the one whom my soul loves.', reference: 'Song of Solomon 3:4' },
    { text: 'What therefore God hath joined together, let not man put asunder.', reference: 'Mark 10:9' },
    { text: 'Love is patient, love is kind.', reference: '1 Corinthians 13:4' },
  ],
};

export const PROGRAM_ITEMS: ProgramItem[] = [
  { time: '9:00 AM', duration: '30 mins', title: 'Groom’s Entrance & Bridal Procession', description: 'Groom’s entrance, bridal party procession and bride’s entrance at Redeemed Gospel Church, Tiwi.', isChurch: true },
  { time: '9:30 AM', duration: '1 hr 30 mins', title: 'Wedding Service', description: 'The wedding service and exchange of vows.', isChurch: true },
  { time: '11:30 AM', duration: '1 hr 15 mins', title: 'Recessional & Family Photos', description: 'Recessional and family photographs, followed by the transition to the reception.', isChurch: true },
  { time: '12:45–1:30 PM', duration: '45 mins', title: 'Convoy & Arrival at Sunset Villas', description: 'Convoy and guest arrival at Sunset Villas, Diani.', isChurch: false },
  { time: '1:30 PM', duration: '45 mins', title: 'Guests’ Arrival & Lunch', description: 'Guests arrive at the reception and enjoy lunch.', isChurch: false },
  { time: '2:15 PM', duration: '30 mins', title: 'Grand Entrance & Dancing', description: 'Grand entrance of the bridal party, followed by dancing.', isChurch: false },
  { time: '2:45 PM', duration: '45 mins', title: 'Speeches', description: 'Family and friends share their words and wishes.', isChurch: false },
  { time: '3:30 PM', duration: '1 hr', title: 'Cake Cutting', description: 'The couple’s wedding cake-cutting moment.', isChurch: false },
  { time: '4:30 PM', duration: '30 mins', title: 'Couple’s First Dance', description: 'A special first dance for the newlyweds.', isChurch: false },
  { time: '5:00 PM', duration: '30 mins', title: 'Presentation of Gifts by Family', description: 'Presentation of gifts by family.', isChurch: false },
  { time: '5:30 PM', duration: 'Closing', title: 'Vote of Thanks', description: 'Vote of thanks. Guests may leave at their own pleasure.', isChurch: false },
];

export const COLOR_SWATCHES: ColorSwatch[] = [
  { name: 'Butter Yellow', hex: '#F3E7A5', textColor: '#3F3B27', description: 'A warm, joyful yellow.' },
  { name: 'Soft Beige', hex: '#E8DDC9', textColor: '#40382D', description: 'A soft neutral foundation.' },
  { name: 'Sage Green', hex: '#A8B69A', textColor: '#263326', description: 'A calm botanical green.' },
  { name: 'Blush Pink', hex: '#F2B8C6', textColor: '#653B49', description: 'A romantic blush accent.' },
  { name: 'Pale Blush', hex: '#FDE9EF', textColor: '#653B49', description: 'A soft blush foundation.' },
  { name: 'Blush Pink', hex: '#F2B8C6', textColor: '#653B49', description: 'A romantic blush accent.' },
  { name: 'Rose Pink', hex: '#E88CA4', textColor: '#653B49', description: 'A warm floral pink.' },
  { name: 'Berry Rose', hex: '#C23D6B', textColor: '#FFFFFF', description: 'A richer rose accent.' },
  { name: 'Deep Berry', hex: '#8A1F4B', textColor: '#FFFFFF', description: 'A deep contrasting accent.' },
];

export const INITIAL_GALLERY: GalleryPhoto[] = [];
