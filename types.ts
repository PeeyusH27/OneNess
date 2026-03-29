
export interface GameCard {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
}

export interface GamePhase {
  id: number;
  name: string;
  description: string;
  cards: GameCard[];
}

export interface Clan {
  name: string;
  description: string;
  strengths: string[];
  philosophy: string;
  image: string;
  theme: 'sun' | 'moon';
}

export interface Game {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  bannerImage: string;
  cardImage: string;
  clans?: Clan[];
  phases?: GamePhase[];
}
