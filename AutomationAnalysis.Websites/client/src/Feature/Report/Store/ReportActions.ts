import { GoalOption, ReportOption, ViewOption } from './ReportState';

export enum ReportActionTypes {
  SELECT_REPORT = 'SELECT_REPORT',
  SELECT_GOAL = 'SELECT_GOAL',
  SELECT_SCORE_HOME = 'SELECT_SCORE_HOME',
  SELECT_SCORE_AWAY = 'SELECT_SCORE_AWAY',
  SELECT_REDCARD_HOME = 'SELECT_REDCARD_HOME',
  SELECT_REDCARD_AWAY = 'SELECT_REDCARD_AWAY',
  CHANGE_LEAGUE = 'CHANGE_LEAGUE',
  SELECT_VIEW = 'SELECT_VIEW',
  SELECT_TIME_INTERVAL = 'SELECT_TIME_INTERVAL',
  CHANGE_FROM_HDP = 'CHANGE_FROM_HDP',
  CHANGE_TO_HDP = 'CHANGE_TO_HDP',
  CHANGE_FROM_OU = 'CHANGE_FROM_OU',
  CHANGE_TO_OU = 'CHANGE_TO_OU',
  SELECT_FROM_DATE = 'SELECT_FROM_DATE',
  SELECT_TO_DATE = 'SELECT_TO_DATE',
}

export const selectReportOption = (reportOption: ReportOption) =>
  ({
    type: ReportActionTypes.SELECT_REPORT,
    reportOption,
  } as const);

export const selectGoalOption = (goalOption: GoalOption) =>
  ({
    type: ReportActionTypes.SELECT_GOAL,
    goalOption,
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

export const selectView = (viewOption: ViewOption) =>
  ({
    type: ReportActionTypes.SELECT_VIEW,
    viewOption,
  } as const);

export const selectTimeInterval = (timeInterval: number) =>
  ({
    type: ReportActionTypes.SELECT_TIME_INTERVAL,
    timeInterval,
  } as const);

export const changeLeague = (league: string) =>
  ({
    type: ReportActionTypes.CHANGE_LEAGUE,
    league,
  } as const);

export const changeFromHDP = (fromHDP: number) =>
  ({
    type: ReportActionTypes.CHANGE_FROM_HDP,
    fromHDP,
  } as const);

export const changeToHDP = (toHDP: number) =>
  ({
    type: ReportActionTypes.CHANGE_TO_HDP,
    toHDP,
  } as const);

export const changeFromOU = (fromOU: number) =>
  ({
    type: ReportActionTypes.CHANGE_FROM_OU,
    fromOU,
  } as const);

export const changeToOU = (toOU: number) =>
  ({
    type: ReportActionTypes.CHANGE_TO_OU,
    toOU,
  } as const);

export const selectFromDate = (fromDate: Date) =>
  ({
    type: ReportActionTypes.SELECT_FROM_DATE,
    fromDate,
  } as const);

export const selectToDate = (toDate: Date) =>
  ({
    type: ReportActionTypes.SELECT_TO_DATE,
    toDate,
  } as const);

export type ReportActions =
  | ReturnType<typeof selectGoalOption>
  | ReturnType<typeof selectHomeScore>
  | ReturnType<typeof selectAwayScore>
  | ReturnType<typeof selectHomeRedcard>
  | ReturnType<typeof selectAwayRedcard>
  | ReturnType<typeof selectView>
  | ReturnType<typeof selectTimeInterval>
  | ReturnType<typeof changeLeague>
  | ReturnType<typeof changeFromHDP>
  | ReturnType<typeof changeToHDP>
  | ReturnType<typeof changeFromOU>
  | ReturnType<typeof changeToOU>
  | ReturnType<typeof selectFromDate>
  | ReturnType<typeof selectToDate>
  | ReturnType<typeof selectReportOption>;
