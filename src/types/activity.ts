import { ActivityRow } from "./db"

export interface Activity extends ActivityRow {
    listName: string;
    countToday?: number;
}

export interface ActivityGetParams {
    id?: number;
    gameId?: number;
    listId?: number;
    characterId?: number;
}