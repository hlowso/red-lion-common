export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const plural = (word: string, count: number) =>
  `${count} ${word}${count === 1 ? "" : "s"}`;
