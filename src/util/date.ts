export const isValid = (d: Date): d is Date =>
  d instanceof Date && !isNaN(d.getTime());

export const sameDate = (d1: Date, d2: Date) =>
  isValid(d1) &&
  isValid(d2) &&
  d1.getUTCDate() === d2.getUTCDate() &&
  d1.getUTCMonth() === d2.getUTCMonth() &&
  d1.getUTCFullYear() === d2.getUTCFullYear();

export const isLate = (date: Date) =>
  date.getTime() < new Date().getTime() && !sameDate(date, new Date());

export const isToday = (d: Date) => sameDate(d, new Date());

export const dateString = (d: Date) => d.toISOString().split("T")[0];
