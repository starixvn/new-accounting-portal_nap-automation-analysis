import { Report } from '../Models/ISNOdds';
import { ReportDetail } from '../Models/ISNOddsDetail';
import { TeamOption, ReportOption, ViewOption } from './ISNOddsState';

export enum ReportActionTypes {
  SELECT_REPORT = 'SELECT_REPORT',
  SELECT_TEAM = 'SELECT_TEAM',
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
  GET_REPORTS = 'GET_REPORTS',
  GET_REPORT_DETAILS = 'GET_REPORT_DETAILS',
  SHOW_MAIN_REPORT = 'SHOW_MAIN_REPORT',
  GETTING_DATA = 'GETTING_DATA',
  END_LOADING_DATA = 'END_LOADING_DATA',
}

export const selectReportOption = (reportOption: ReportOption) =>
  ({
    type: ReportActionTypes.SELECT_REPORT,
    reportOption,
  } as const);

export const selectTeamOption = (teamType: TeamOption) =>
  ({
    type: ReportActionTypes.SELECT_TEAM,
    teamType,
  } as const);

export const selectHomeScore = (homeScore: number) =>
  ({
    type: ReportActionTypes.SELECT_SCORE_HOME,
    homeScore,
  } as const);

export const selectAwayScore = (awayScore: number) =>
  ({
    type: ReportActionTypes.SELECT_SCORE_AWAY,
    awayScore,
  } as const);

export const selectHomeRedcard = (homeRedCard: number) =>
  ({
    type: ReportActionTypes.SELECT_REDCARD_HOME,
    homeRedCard,
  } as const);

export const selectAwayRedcard = (awayRedCard: number) =>
  ({
    type: ReportActionTypes.SELECT_REDCARD_AWAY,
    awayRedCard,
  } as const);

export const selectView = (view: ViewOption) =>
  ({
    type: ReportActionTypes.SELECT_VIEW,
    view,
  } as const);

export const selectTimeInterval = (interval: number) =>
  ({
    type: ReportActionTypes.SELECT_TIME_INTERVAL,
    interval,
  } as const);

export const changeLeague = (league: string) =>
  ({
    type: ReportActionTypes.CHANGE_LEAGUE,
    league,
  } as const);

export const changeFromHDP = (fromInitialHDP: string) =>
  ({
    type: ReportActionTypes.CHANGE_FROM_HDP,
    fromInitialHDP,
  } as const);

export const changeToHDP = (toInitialHDP: string) =>
  ({
    type: ReportActionTypes.CHANGE_TO_HDP,
    toInitialHDP,
  } as const);

export const changeFromOU = (fromInitialOU: string) =>
  ({
    type: ReportActionTypes.CHANGE_FROM_OU,
    fromInitialOU,
  } as const);

export const changeToOU = (toInitialOU: string) =>
  ({
    type: ReportActionTypes.CHANGE_TO_OU,
    toInitialOU,
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

export const getReports = (reports: Report[] | undefined) =>
  ({
    type: ReportActionTypes.GET_REPORTS,
    reports,
    isLoading: false,
  } as const);

export const getReportDetails = (fromMinute: string, toMinute: string | null, reportDetails: ReportDetail[]) =>
  ({
    type: ReportActionTypes.GET_REPORT_DETAILS,
    fromMinute,
    toMinute,
    reportDetails,
    isLoading: false,
  } as const);

export const showMainReport = () =>
  ({
    type: ReportActionTypes.SHOW_MAIN_REPORT,
  } as const);

export const gettingData = () =>
  ({
    type: ReportActionTypes.GETTING_DATA,
    isLoading: true,
  } as const);
export const endLoadingData = () =>
  ({
    type: ReportActionTypes.END_LOADING_DATA,
    isLoading: false,
  } as const);
export type ReportActions =
  | ReturnType<typeof selectTeamOption>
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
  | ReturnType<typeof selectReportOption>
  | ReturnType<typeof getReports>
  | ReturnType<typeof getReportDetails>
  | ReturnType<typeof showMainReport>
  | ReturnType<typeof gettingData>
  | ReturnType<typeof endLoadingData>;
