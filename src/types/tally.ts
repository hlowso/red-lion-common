export interface TallyRow {
  id: number;
  gameId: number;
  name: string;
  key: string;
  description: string;
  icon: string;
  color?: string;
}
export interface TallyGetParams {
  id?: number;
  gameId?: number;
}

export type Tallies = {
  [tallyKey: string]: number;
};
