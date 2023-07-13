export type VariableKind =
  | "activity:field"
  | "character:tally"
  | "character:item";
// | "global";

export interface FormulaContextValue {
  kind: VariableKind;
  key: string;
  value: number;
}

export interface Variable {
  kind: VariableKind;
  key: string;
  letter: string;
}

export interface Formula {
  expression: string;
  variables: Variable[];
}
