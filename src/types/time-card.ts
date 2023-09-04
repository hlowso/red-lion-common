export type TimeCardPunchDirection = "in" | "out";

export interface TimeCardRow {
  id: number;
  gameId: number;
  name: string;
  description: string;
}

export interface TimeCard {
  characterId: number;
  date: Date;
  clockedTime: number;
  status: TimeCardPunchDirection;
  lastPunch?: Date;
}

export interface TimeCardPunchRow {
  id: number;
  timeCardId: number;
  characterId: number;
  direction: TimeCardPunchDirection;
  punchedAt: Date;
}
