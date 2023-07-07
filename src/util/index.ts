export * as Character from "./character";

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
