import { Formula } from "./formula";

export type TallyChanges = {
    [tallyKey: string]: number | Formula
};

export interface Delta {
    tallies: TallyChanges;
    items: any;
    progressions: any;
    subscriptions: any;
    states: any;
};