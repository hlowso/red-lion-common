export interface CharacterGetParams {
  id?: number;
  userId?: number;
  gameId?: number;
}

export interface CharacterActivityRequestParams {
  characterId: number;
  activityId: number;
}

export interface CharacterItemRequestParams {
  characterId: number;
  itemId: number;
}

export interface PurchaseItemAsCharacterRequestBody {
  quantity: number;
}
