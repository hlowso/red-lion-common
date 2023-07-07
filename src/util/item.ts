import { Item } from "../types/item";

export const byKey = (items: Item[], key: string) =>
  items.find((t) => t.key === key);
