export * as Character from "./character";
export * as Tally from "./tally";
export * as Item from "./item";
export * as Delta from "./delta";
export * as List from "./list";
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
