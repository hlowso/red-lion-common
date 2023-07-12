import { WEEKDAYS } from "../constants";
import { ActivityRow } from "../types/activity";

export const dueToday = (activities: ActivityRow[]) =>
  activities
    .filter((a) => !!a.schedule)
    .filter(
      ({ schedule }) =>
        schedule === "D" ||
        (schedule!.startsWith("W") &&
          schedule!.includes(WEEKDAYS[new Date().getDay()]))
    );
