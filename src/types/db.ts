export interface UserRow {
    id: number;
    username: string;
    email: string;
}

export interface CharacterRow {
    id: number;
    gameId: number,
    userId: number,
    imageId: number,
    items: any,
    tallies: any,
    progressions: any,
    subscriptions: any,
    states: any
}

export interface ActivityRow {
    id: number,
    listId: number,
    name: string,
    description?: string,
    schedule?: string,
    count?: number,
    fields?: any,
    completionDelta, any
}