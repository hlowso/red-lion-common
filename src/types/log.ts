export type LogVerb = "completed";
export type SubjectType = "character";
export type ObjectType = "activity";

export interface Log {
    id: number,
    gameId: number,
    verb: LogVerb,
    loggedAt: Date,
    eventDate: Date,
    subjectType: SubjectType,
    subjectId: number,
    objectType: ObjectType,
    objectId: number
    details: any
}