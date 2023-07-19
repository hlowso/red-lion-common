import { Activity, ActivityRow } from "../types";
import { isToday, scheduleResetToday } from "./date";

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
