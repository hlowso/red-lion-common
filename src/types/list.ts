import { CharacterListRow } from "./character-list";

export interface ListRow {
  id: number;
  gameId: number;
  name: string;
  description: string;
  hidden: boolean;
}

export interface List
  extends ListRow,
    Omit<CharacterListRow, "id" | "characterId" | "listId"> {}

export interface ListGetParams {
  id?: number;
  gameId?: number;
  characterId?: number;
  hidden?: boolean;
}
