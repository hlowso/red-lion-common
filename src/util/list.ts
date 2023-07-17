import { ListRow } from "../types";
import { interfaceLists } from "../selectors";

export const unplannedList = (lists: ListRow[]) =>
  lists.find((l) => l.name === "Unplanned");

export const listNavItems = (lists: ListRow[]) => [
  { id: -1, name: "Today", icon: "BrightnessLowFill" },
  ...interfaceLists(lists || []).map(({ id, name }) => ({
    id,
    name,
    icon: "ListCheck",
  })),
];
