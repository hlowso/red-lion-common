import { Activity, CharacterGoal } from "../types";
import { serveGoal } from "./activities";

export const complete = (goals: CharacterGoal[], activities: Activity[]) =>
  goals.filter(({ goalId }) =>
    serveGoal(activities, goalId).every((a) => !!a.status?.done)
  );

export const incomplete = (goals: CharacterGoal[], activities: Activity[]) =>
  goals.filter(({ goalId }) =>
    serveGoal(activities, goalId).some((a) => !a.status?.done)
  );
