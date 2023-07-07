import { Formula } from "./formula";

export type TallyChanges = {
  [tallyKey: string]: number | Formula;
};

export type ItemChanges = {
  [itemKey: string]: number | Formula;
};

export type ProgressionChanges = {
  [progressionKey: string]: boolean;
};

export type SubscriptionChanges = {
  [subscriptionKey: string]: "subscribe" | "unsubscribe";
};

export type StateChanges = {
  [stateKey: string]: "enter" | "exit";
};

export interface Delta {
  tallies?: TallyChanges;
  items?: ItemChanges;
  progressions?: ProgressionChanges;
  subscriptions?: SubscriptionChanges;
  states?: StateChanges;
}
