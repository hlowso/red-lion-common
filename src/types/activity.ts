import { ActivityRow } from "./db"

export interface Activity extends ActivityRow {
    listName: string;
    countToday?: number;
}