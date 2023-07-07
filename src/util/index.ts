export * as Character from "./character";
export * as Delta from "./delta";
export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
