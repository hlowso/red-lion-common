import { parseExpression } from "cron-parser";

export const isValid = (d: Date): d is Date =>
  d instanceof Date && !isNaN(d.getTime());

export const sameDate = (d1: Date, d2: Date) => {
  return (
    isValid(d1) &&
    isValid(d2) &&
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear()
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

export const isCron = (str: string) => {
  if (!str) return false;
  try {
    parseExpression(str);
    return true;
  } catch (e) {
    return false;
  }
};

export const daysUntil = (date: Date) =>
  Math.ceil((date.getTime() - new Date().getTime()) / (24 * 60 * 60 * 1000));

export const duration = (ms: number) => {
  const hours = Math.floor(ms / (1000 * 60 * 60));
  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((ms % (1000 * 60)) / 1000);
  const format = (n: number) => (n < 10 ? `0${n}` : String(n));

  return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
};

export const hoursBefore = (n: number, time = new Date()) =>
  new Date(time.getTime() - 1000 * 60 * 60 * n);
