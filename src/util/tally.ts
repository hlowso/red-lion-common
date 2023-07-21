import { TallyRow } from "../types/tally";

export const byKey = (tallies: TallyRow[], key: string) =>
  tallies.find((t) => t.key === key);
