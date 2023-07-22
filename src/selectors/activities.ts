import { ListRow } from "../types";
import { Activity, ActivityRow } from "../types/activity";
import { unplannedList } from "../util/list";
import {
  dueToday as activityDueToday,
  complete as activityComplete,
} from "../util/activity";

export const dueToday = (activities: Activity[]) =>
  activities.filter(activityDueToday);

export const complete = (activities: Activity[]) =>
  activities.filter(activityComplete);

export const incomplete = (activities: Activity[]) =>
  activities.filter(
    (a) => !a.status?.done && (a.count || 1) > (a.status?.countToday || 0)
  );

export const unplanned = (lists: ListRow[], activities: ActivityRow[]) =>
  activities.filter(
    (a) => a.listId === unplannedList(lists)?.id || !!a.abstinenceDelta
  );
