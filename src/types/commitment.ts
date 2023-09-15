export interface CommitmentRow {
  id: number;
  characterId: number;
  committedAt: Date;
  activityIds: string;
}

export interface Commitment extends Omit<CommitmentRow, "activityIds"> {
  activityIds: number[];
  committed: boolean;
}
