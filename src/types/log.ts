export type LogVerb = "completed" | "purchased";
export type SubjectType = "character";
export type ObjectType = "activity" | "item";

export interface Log {
  id: number;
  gameId: number;
  verb: LogVerb;
  loggedAt: Date;
  eventDate: Date;
  subjectType: SubjectType;
  subjectId: number;
  objectType: ObjectType;
  objectId: number;
  details: any;
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
