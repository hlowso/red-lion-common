import { ActivityRow, ActivityField } from "./activity";
import { FormulaContextValue } from "./formula";

export interface ActivityGetParams {
  id?: number;
  gameId?: number;
  listId?: number;
  characterId?: number;
}

export interface ActivityPostParams extends Required<Omit<ActivityRow, "id">> {
  schedule: string | null;
  count: number | null;
  fields: ActivityField[] | null;
  fieldValues: FormulaContextValue[] | null;
  logCompletionOnCreate?: {
    subjectId: number;
    subjectType: "character";
    fieldValues?: FormulaContextValue[];
  };
}
