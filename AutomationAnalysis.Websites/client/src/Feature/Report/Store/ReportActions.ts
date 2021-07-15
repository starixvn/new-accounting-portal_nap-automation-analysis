/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import { GoalOption } from "./ReportState";

export enum ReportActionTypes {
  SELECT_GOAL = "SELECT_GOAL",
  SELECT_SCORE_HOME = "SELECT_SCORE_HOME",
  SELECT_SCORE_AWAY = "SELECT_SCORE_AWAY",
  SELECT_REDCARD_HOME = "SELECT_REDCARD_HOME",
  SELECT_REDCARD_AWAY = "SELECT_REDCARD_AWAY",
}

export const selectGoalOption = (selectedGoal: GoalOption) =>
  ({
    type: ReportActionTypes.SELECT_GOAL,
    selectedGoal,
  } as const);

export const selectHomeScore = (scoreHome: number) =>
  ({
    type: ReportActionTypes.SELECT_SCORE_HOME,
    scoreHome,
  } as const);

export const selectAwayScore = (scoreAway: number) =>
  ({
    type: ReportActionTypes.SELECT_SCORE_AWAY,
    scoreAway,
  } as const);

export const selectHomeRedcard = (redcardHome: number) =>
  ({
    type: ReportActionTypes.SELECT_REDCARD_HOME,
    redcardHome,
  } as const);

export const selectAwayRedcard = (redcardAway: number) =>
  ({
    type: ReportActionTypes.SELECT_REDCARD_AWAY,
    redcardAway,
  } as const);

export type ReportActions =
  | ReturnType<typeof selectGoalOption>
  | ReturnType<typeof selectHomeScore>
  | ReturnType<typeof selectAwayScore>
  | ReturnType<typeof selectHomeRedcard>
  | ReturnType<typeof selectAwayRedcard>;
