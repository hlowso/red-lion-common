import { Delta } from "./delta";

export interface ActivityFieldOption {
  value: number;
  name: string;
}

export interface ActivityField {
  kind: "radio";
  key: string;
  description: string;
  options?: ActivityFieldOption[];
}

export interface ActivityRow {
  id: number;
  listId: number;
  name: string;
  description?: string;
  schedule?: string;
  count: number;
  fields?: ActivityField[];
  completionDelta: Delta;
}

export interface ActivityStatus {
  countToday?: number;
  done?: boolean;
  streak?: number;
}

export interface Activity extends ActivityRow {
  listName?: string;
  status: ActivityStatus;
}

export interface ActivityLogObjectRow {
  id: number;
  activityId: number;
  logId: number;
}
