import { ActivityRow } from "./activity";

export interface ActivityGetParams {
  id?: number;
  gameId?: number;
  listId?: number;
  characterId?: number;
}

export interface ActivityPostParams extends Required<Omit<ActivityRow, "id">> {
  schedule: string | null;
  count: number | null;
  fields: any | null;
  logCompletionOnCreate?: {
    subjectId: number;
    subjectType: "character";
  };
}
