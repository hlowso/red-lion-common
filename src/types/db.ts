import { Delta } from "./delta";

export interface UserRow {
    id: number;
    username: string;
    email: string;
}

export interface GameRow {
    id: number;
    name: string;
}

export interface CharacterRow {
    id: number;
    gameId: number;
    userId: number;
    imageId: number;
    items: any;
    tallies: any;
    progressions: any;
    subscriptions: any;
    states: any;
}

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

export interface CharacterLogSubjectRow {
    id: number;
    characterId: number;
    logId: number;
}

export interface ActivityLogObjectRow {
    id: number;
    activityId: number;
    logId: number;
}

export interface TallyRow {
    id: number;
    gameId: number;
    name: string;
    key: string;
    description: string;
    icon: string;
}