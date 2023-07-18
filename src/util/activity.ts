import { Activity, ActivityRow } from "../types";
import { isToday, sameDate } from "./date";
import { parseExpression } from "cron-parser";

export const complete = (activity: Activity) =>
  activity.status?.done ||
  (activity.count || 1) <= (activity.status?.countToday || 0);

export const dueToday = (activity?: ActivityRow) => {
  if (!activity?.schedule) return false;

  try {
    const interval = parseExpression(activity.schedule);
    const prev = interval.prev().toDate();
    const now = new Date();
    return sameDate(now, prev);
  } catch (e) {
    return isToday(new Date(activity.schedule));
  }
};
