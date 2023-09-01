export type TimeCardPunchDirection = "in" | "out";

export interface TimeCard {
  characterId: number;
  date: Date;
  clockedTime: number;
  status: TimeCardPunchDirection;
}

export interface TimeCardPunchRow {
  id: number;
  characterId: number;
  direction: TimeCardPunchDirection;
  punchedAt: Date;
}
