import { ListRow } from "../types";
import { Activity, ActivityRow } from "../types/activity";
import { unplannedList } from "../util/list";
import { dueToday as activityDueToday } from "../util/activity";

export const dueToday = (activities: ActivityRow[]) =>
  activities.filter(activityDueToday);

export const todayComplete = (activities: Activity[]) =>
  activities.filter((a) => (a.count || 1) <= (a.countToday || 0));

export const todayIncomplete = (activities: Activity[]) =>
  activities.filter((a) => (a.count || 1) > (a.countToday || 0));

export const unplanned = (lists: ListRow[], activities: ActivityRow[]) =>
  activities.filter((a) => a.listId === unplannedList(lists)?.id);
