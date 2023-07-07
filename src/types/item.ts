import { Delta } from "./delta";
import { Formula } from "./formula";

export interface ItemRow {
  id: number;
  gameId: number;
  key: string;
  name: string;
  description: string;
  imageId: number;
  expirationFormula: Formula;
  costDelta: Delta;
  useDelta: Delta;
}

export interface Item extends ItemRow {
  imageUrl: string;
}

export interface ItemGetQuery {
  id?: number;
  gameId?: number;
}

export type Items = {
  [itemKey: string]: number;
};

export interface ItemLogObjectRow {
  id: number;
  itemId: number;
  logId: number;
}
