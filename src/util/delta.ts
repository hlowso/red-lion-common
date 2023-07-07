import { Tallies } from "../types/tally";
import { Items } from "../types/item";
import { Delta } from "../types/delta";

// TODO: It will probably be necessary to move these to backend
// when you're handling formula cases

const reducer =
  (factor: number) =>
  (result: { [key: string]: number }, [key, count]) => ({
    ...result,
    [key]: factor * count,
  });

// TODO: Handle formula case...
export const applyFactorToTallies = (factor: number, tallies: Tallies) =>
  Object.entries(tallies).reduce(reducer(factor), {});

// TODO: Apply factor to remaining possessions...
export const applyFactorToItems = (factor: number, items: Items) =>
  Object.entries(items).reduce(reducer(factor), {});

export const applyFactorToDelta = (factor: number, delta: Delta): Delta => ({
  ...delta,
  tallies: applyFactorToTallies(factor, (delta.tallies as Tallies) || {}),
  items: applyFactorToItems(factor, (delta.items as Items) || {}),
});
