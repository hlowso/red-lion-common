import { Delta } from "./delta";

export interface SubscriptionRow {
  id: number;
  gameId: number;
  key: string;
  name: string;
  delta: Delta;
  schedule: string;
}

export type Subscriptions = string[];
