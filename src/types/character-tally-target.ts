export interface CharacterTallyTargetRow {
  id: number;
  characterId: number;
  tallyId: number;
  schedule: string;
  value: number;
  color?: string;
}

export interface CharacterTallyTargetWithKey extends CharacterTallyTargetRow {
  tallyKey: string;
}

export interface CharacterTallyTarget extends CharacterTallyTargetRow {
  currentValue?: number;
  tallyKey?: string;
  tallyIcon?: string;
}

export interface TallyTargetLogObjectRow {
  id: number;
  characterTallyTargetId: number;
  logId: number;
}
