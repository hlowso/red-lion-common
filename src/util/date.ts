import { parseExpression } from "cron-parser";

export const isValid = (d: Date): d is Date =>
  d instanceof Date && !isNaN(d.getTime());

export const sameDate = (d1: Date, d2: Date) => {
  const l1 = localDate(d1);
  const l2 = localDate(d2);

  return (
    isValid(l1) &&
    isValid(l2) &&
    l1.getUTCDate() === l2.getUTCDate() &&
    l1.getUTCMonth() === l2.getUTCMonth() &&
    l1.getUTCFullYear() === l2.getUTCFullYear()
  );
};

export const isLate = (date: Date) =>
  date.getTime() < new Date().getTime() && !sameDate(date, new Date());

export const isToday = (d: Date) => sameDate(d, new Date());

export const dateString = (d: Date) => d.toISOString().split("T")[0];

export const localDate = (d: Date) =>
  new Date(d.getTime() - d.getTimezoneOffset() * 60000);

export const scheduleResetToday = (schedule: string) => {
  const interval = parseExpression(schedule);
  const prev = new Date(interval.prev().getTime());
  const now = new Date();

  return sameDate(now, prev);
};
