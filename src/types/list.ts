export interface ListRow {
    id: number;
    gameId: number;
    name: string;
    description: string;
    hidden: boolean;
}

export interface ListGetParams {
    id?: number;
    gameId?: number;
    characterId?: number;
    hidden?: boolean;
};