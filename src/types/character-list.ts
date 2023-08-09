import { Archiveable } from "./archiveable";
import { ListRow } from "./list";

export interface CharacterListRow extends Archiveable {
  id: number;
  characterId: number;
  listId?: number;
  pseudoListId?: number;
  order?: string;
}

export interface CharacterList extends ListRow, CharacterListRow {}
