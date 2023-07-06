import { ListRow } from "../types/list";

export const interfaceLists = (lists: ListRow[]) =>
    lists.filter(list => !list.hidden)