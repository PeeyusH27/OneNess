
import { Game } from './types';

export const FEATURED_GAME: Game = {
  id: 'order-of-dharma',
  title: 'Order of Dharma',
  subtitle: 'The Eternal Balance of Sun and Moon',
  description: 'Order of Dharma is a battle between two CLANS to establish their spiritual path. You must outwit the opposing Clan members and eliminate them. The catch? You don’t know who your allies or enemies are.',
  tags: ['Strategy', 'Social Deduction', 'Competitive', 'Ability-Based'],
  bannerImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1920',
  cardImage: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=800',
  clans: [
    {
      name: 'Surya (Sun)',
      description: 'Harbingers of clarity and absolute truth. Their rank determines the flow of the Game Tracker.',
      strengths: ['Direct Power', 'Rank Authority', 'Radiant Vision'],
      philosophy: 'Through light, we find the absolute truth.',
      image: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800',
      theme: 'sun'
    },
    {
      name: 'Chandra (Moon)',
      description: 'Masters of mystery and the shifting tides. They strike from the silences between heartbeats.',
      strengths: ['Control', 'Strategic Stealth', 'Shifting Allegiance'],
      philosophy: 'Shadows reveal what the sun blinds us to.',
      image: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&q=80&w=800',
      theme: 'moon'
    }
  ],
  phases: [
    {
      id: 1,
      name: 'Drishti',
      description: 'The awakening of spiritual vision. Players play ability cards to reveal intentions or scout the deck.',
      cards: Array.from({ length: 6 }, (_, j) => ({
        id: `drishti-${j}`,
        name: ['Third Eye', 'Gaze of Truth', 'Clouded Path', 'Future Sight', 'Soul Mirror', 'Echo'][j % 6],
        type: 'Drishti Ability',
        description: 'Allows a player to peek at a discarded card or another player\'s phase status.',
        image: `https://picsum.photos/seed/drishti-${j}/200/300`
      }))
    },
    {
      id: 2,
      name: 'Dyut',
      description: 'The cosmic game of chance and skill. Resolve high-ranking cards to influence the Ability Card distribution.',
      cards: Array.from({ length: 6 }, (_, j) => ({
        id: `dyut-${j}`,
        name: ['Gambler\'s Hand', 'Fate Swap', 'Rigged Roll', 'Double Stakes', 'Silent Bid', 'The Trickster'][j % 6],
        type: 'Dyut Ability',
        description: 'Manipulate card ranks or force a redraw for the adjacent player.',
        image: `https://picsum.photos/seed/dyut-${j}/200/300`
      }))
    },
    {
      id: 3,
      name: 'Tantra',
      description: 'The weaving of ancient magic. Passive abilities activate here to protect or curse certain players.',
      cards: Array.from({ length: 6 }, (_, j) => ({
        id: `tantra-${j}`,
        name: ['Web of Lies', 'Binding Spell', 'Mantra of Shielding', 'Shadow Stitch', 'Karmic Loop', 'Sacred Ritual'][j % 6],
        type: 'Tantra Ability',
        description: 'Creates a protection layer that lasts until the Vadh phase.',
        image: `https://picsum.photos/seed/tantra-${j}/200/300`
      }))
    },
    {
      id: 4,
      name: 'Vadh',
      description: 'The shadow strike of elimination. Targeted cards are played to remove rivals from the current round.',
      cards: Array.from({ length: 6 }, (_, j) => ({
        id: `vadh-${j}`,
        name: ['Executioner', 'Assassination', 'Sacrificial Lamb', 'Betrayal', 'Lethal Stroke', 'Silent End'][j % 6],
        type: 'Vadh Ability',
        description: 'Target a player. If they have no protection, they are eliminated for the round.',
        image: `https://picsum.photos/seed/vadh-${j}/200/300`
      }))
    },
    {
      id: 5,
      name: 'Yudh',
      description: 'The final clash of titans. Direct battle cards determine the strength of surviving members.',
      cards: Array.from({ length: 6 }, (_, j) => ({
        id: `yudh-${j}`,
        name: ['Total War', 'Clash of Clans', 'Uprising', 'Dharma Shield', 'Final Stand', 'Heroic Charge'][j % 6],
        type: 'Yudh Ability',
        description: 'Boosts your Rank power by +1 for the Nirnay phase.',
        image: `https://picsum.photos/seed/yudh-${j}/200/300`
      }))
    },
    {
      id: 6,
      name: 'Nirnay',
      description: 'The moment of ultimate judgment. All surviving players reveal their CLAN Cards. The highest rank wins.',
      cards: Array.from({ length: 6 }, (_, j) => ({
        id: `nirnay-${j}`,
        name: ['The Verdict', 'Soul Reveal', 'Final Breath', 'Justice', 'Cosmic Order', 'Rebirth'][j % 6],
        type: 'Nirnay Ability',
        description: 'Forces a specific player to reveal their card first or breaks a rank tie.',
        image: `https://picsum.photos/seed/nirnay-${j}/200/300`
      }))
    }
  ]
};

export const GAMES_LIST: Game[] = [
  FEATURED_GAME,
  {
    id: 'cyber-titans',
    title: 'Cyber Titans',
    subtitle: 'Reign of the Neon Warlords',
    description: 'High-stakes tactical combat in a dystopian future where metal meets magic.',
    tags: ['Cyberpunk', 'Tactical', 'Miniatures'],
    bannerImage: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1920',
    cardImage: 'https://images.unsplash.com/photo-1538370910029-0d88e27ff3f2?auto=format&fit=crop&q=80&w=800'
  }
];
