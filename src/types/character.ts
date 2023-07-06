export interface Character {
    id: number;
    gameId: number,
    userId: number,
    imageUrl: string,
    items: any,
    tallies: any,
    progressions: any,
    subscriptions: any,
    states: any
}

export interface CharacterGetParams {
    id?: number;
    userId?: number;
    gameId?: number;
}

export interface GetCharacterActivityCountTodayParams {
    characterId: number;
    activityId: number;
}