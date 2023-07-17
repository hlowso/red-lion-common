import { ActivityRow } from "../types";
import { WEEKDAYS } from "../constants";
import { isToday } from "./date";

export const dueToday = (activity?: ActivityRow) =>
  !!activity?.schedule &&
  (activity.schedule === "D" ||
    (activity.schedule!.startsWith("W") &&
      activity.schedule!.includes(WEEKDAYS[new Date().getDay()])) ||
    isToday(new Date(activity.schedule)));
