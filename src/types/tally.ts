export interface TallyGetParams {
  id?: number;
  gameId?: number;
}

export type Tallies = {
  [tallyKey: string]: number;
};
