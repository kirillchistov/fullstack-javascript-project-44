export interface GameMeta {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Round {
  question: string;
  answer: string; // Expected correct answer (string form for unified comparison)
}

export type GenerateRound = () => Round;
