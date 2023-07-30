import { GoalRow } from "./goal";

export interface CharacterGoalRow {
  id: number;
  characterId: number;
  goalId: number;
}

export interface CharacterGoal extends CharacterGoalRow, Omit<GoalRow, "id"> {}
