import { Delta } from "./delta";

export interface ActivityRow {
  id: number;
  listId: number;
  name: string;
  description?: string;
  schedule?: string;
  count?: number;
  fields?: any;
  completionDelta: Delta;
}

export interface Activity extends ActivityRow {
  listName: string;
  countToday?: number;
}
