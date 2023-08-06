import { Activity, ActivityRow } from "../types";
import { isToday, scheduleResetToday } from "./date";

export const bonus = (streak?: number) => {
  if (typeof streak === "undefined") return 1;
  if (streak < 7) return 1;
  if (streak < 14) return 1.25;
  if (streak < 30) return 1.5;
  return 1.75;
};

export const complete = (activity: Activity) =>
  activity.status?.done ||
  (activity.count || 1) <= (activity.status?.countToday || 0);

export const dueToday = (activity?: ActivityRow) => {
  if (!activity?.schedule) return false;

  try {
    return scheduleResetToday(activity.schedule);
  } catch (e) {
    return isToday(new Date(activity.schedule));
  }
};

export const sort = (order: string) => (a: Activity, b: Activity) => {
  const ids = order.split(",").map(Number);
  return (
    ids.findIndex((id) => id === a.id) - ids.findIndex((id) => id === b.id)
  );
};
