import { TallyRow } from "../types/db";

export const byKey = (tallies: TallyRow[], key: string) =>
  tallies.find((t) => t.key === key);
