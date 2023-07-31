import { GoalRow } from "./goal";

export interface CharacterGoalRow {
  id: number;
  characterId: number;
  goalId: number;
  targetDate?: Date;
}

export interface CharacterGoal extends CharacterGoalRow, Omit<GoalRow, "id"> {}
