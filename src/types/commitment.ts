export interface CommitmentRow {
  id: number;
  characterId: number;
  committedAt: Date;
  activityIds: string;
}

export interface Commitment
  extends Partial<Omit<CommitmentRow, "activityIds">> {
  activityIds: number[];
  committed: boolean;
}
