import { ListRow, ActivityRow } from "../types";
import { unplannedList } from "./list";

export const unplannedActivites = (
  lists: ListRow[],
  activities: ActivityRow[]
) => activities.filter((a) => a.listId === unplannedList(lists)?.id);
