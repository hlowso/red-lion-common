import { WEEKDAYS } from "../constants";
import { Activity, ActivityRow } from "../types/activity";

export const dueToday = (activities: ActivityRow[]) =>
  activities
    .filter((a) => !!a.schedule)
    .filter(
      ({ schedule }) =>
        schedule === "D" ||
        (schedule!.startsWith("W") &&
          schedule!.includes(WEEKDAYS[new Date().getDay()]))
    );

export const todayComplete = (activities: Activity[]) =>
  activities.filter((a) => (a.count || 1) <= (a.countToday || 0));

export const todayIncomplete = (activities: Activity[]) =>
  activities.filter((a) => (a.count || 1) > (a.countToday || 0));
