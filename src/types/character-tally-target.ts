export interface CharacterTallyTargetRow {
  id: number;
  characterId: number;
  tallyId: number;
  schedule: string;
  value: number;
}

export interface CharacterTallyTarget extends CharacterTallyTargetRow {
  tallyKey?: string;
  currentValue?: number;
}
