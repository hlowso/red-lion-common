import { Activity, CharacterGoal } from "../types";
import { serveGoal } from "./activities";

export const complete = (goals: CharacterGoal[], activities: Activity[]) =>
  goals.filter(({ goalId }) => {
    const A = serveGoal(activities, goalId);
    return A.length > 0 && A.every((a) => !!a.status?.done);
  });

export const incomplete = (goals: CharacterGoal[], activities: Activity[]) =>
  goals.filter(({ goalId }) =>
    serveGoal(activities, goalId).some((a) => !a.status?.done)
  );
