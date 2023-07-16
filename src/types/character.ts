import { Items } from "./item";
import { Progressions } from "./progression";
import { States } from "./state";
import { Subscriptions } from "./subscription";
import { Tallies } from "./tally";

export interface Possessions {
  items: Items;
  tallies: Tallies;
  progressions: Progressions;
  subscriptions: Subscriptions;
  states: States;
}

export interface CharacterRow extends Possessions {
  id: number;
  gameId: number;
  userId: number;
  imageId: number;
}

export interface Character extends CharacterRow {
  imageUrl: string;
}

export interface CharacterLogSubjectRow {
  id: number;
  characterId: number;
  logId: number;
}
