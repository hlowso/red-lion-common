import { ListRow } from "../types";

export const unplannedList = (lists: ListRow[]) =>
  lists.find((l) => l.name === "Unplanned");
