import { ListRow } from "../types";
import { interfaceLists } from "../selectors";

export const unplannedList = (lists: ListRow[]) =>
  lists.find((l) => l.name === "Unplanned");

export const listNavItems = (lists: ListRow[]) =>
  interfaceLists(lists || []).map(({ id, name }) => ({
    id,
    name,
    icon: "ListCheck",
  }));
