import { Possessions } from "../types/character";
import { Delta } from "../types/delta";

export const canAffordItem = (
  possessions: Possessions,
  costDelta: Delta,
  quantity: number
) => {
  // Check tallies
  return !Object.entries(costDelta.tallies || {}).some(([key, change]) => {
    if (possessions.tallies[key] === undefined) return true;

    if (typeof change === "number" && change < 0)
      return 0 > possessions.tallies[key] + quantity * change;

    if (typeof change === "object") {
      // TODO: deal with case of formula...
    }

    return false;
  });
};
