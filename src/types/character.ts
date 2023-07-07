import { Items } from "./item";
import { Progressions } from "./progression";
import { States } from "./state";
import { Subscriptions } from "./subscription";
import { Tallies } from "./tally";

export interface Character {
  id: number;
  gameId: number;
  userId: number;
  imageUrl: string;
  items: Items;
  tallies: any;
  progressions: any;
  subscriptions: any;
  states: any;
}

export interface CharacterGetParams {
  id?: number;
  userId?: number;
  gameId?: number;
}

export interface CharacterActivityRequestParams {
  characterId: number;
  activityId: number;
}

export interface CharacterItemRequestParams {
  characterId: number;
  itemId: number;
}

export interface PurchaseItemAsCharacterRequestBody {
  quantity: number;
}

export interface Possessions {
  items: Items;
  tallies: Tallies;
  progressions: Progressions;
  subscriptions: Subscriptions;
  states: States;
}
