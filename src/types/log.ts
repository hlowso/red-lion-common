export type LogVerb = "completed" | "purchased" | "used" | "targeted";
export type SubjectType = "character";
export type ObjectType = "activity" | "item" | "tally-target";

export interface LogRow {
  id: number;
  gameId: number;
  verb: LogVerb;
  loggedAt: Date;
  eventDate: Date;
  details: any;
}

export interface Log extends LogRow {
  subjectType: SubjectType;
  subjectId: number;
  objectType: ObjectType;
  objectId: number;
}

export interface LogGetParams {
  id?: number;
  gameId?: number;
  verb?: LogVerb;
  subjectType?: SubjectType;
  subjectId?: number;
  objectType?: ObjectType;
  objectId?: number;
  since?: Date;
}
