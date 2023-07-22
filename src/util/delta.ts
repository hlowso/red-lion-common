import { Tallies } from "../types/tally";
import { Items } from "../types/item";
import {
  Delta,
  ProgressionChanges,
  StateChanges,
  SubscriptionChanges,
} from "../types/delta";
import { Formula } from "../types";

const reducer =
  (factor: number) =>
  (result: { [key: string]: number | Formula }, [key, change]) => {
    if (typeof change === "number")
      return {
        ...result,
        [key]: factor * change,
      };
    return {
      ...result,
      [key]: {
        expression: `${factor} * (${change.expression})`,
        variables: change.variables,
      },
    };
  };

export const applyFactorToTallies = (factor: number, tallies: Tallies) =>
  Object.entries(tallies).reduce(reducer(factor), {});

// TODO: Apply factor to remaining possessions...
export const applyFactorToItems = (factor: number, items: Items) =>
  Object.entries(items).reduce(reducer(factor), {});

export const applyFactorToDelta = (
  factor: number,
  delta: Delta
): {
  progressions?: ProgressionChanges;
  subscriptions?: SubscriptionChanges;
  states?: StateChanges;
  tallies: Tallies;
  items: Items;
} => ({
  ...delta,
  tallies: applyFactorToTallies(factor, (delta.tallies as Tallies) || {}),
  items: applyFactorToItems(factor, (delta.items as Items) || {}),
});
