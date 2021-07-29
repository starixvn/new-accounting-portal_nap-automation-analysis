import { Reducer } from 'redux';
import { ReportState, initialReportState } from './ISNOddsState';
import { ReportActions, ReportActionTypes } from './ISNOddsActions';

const reportReducer: Reducer<ReportState, ReportActions> = (state = initialReportState, action): ReportState => {
  switch (action.type) {
    case ReportActionTypes.SELECT_REPORT:
      return {
        ...initialReportState,
        reportOption: action.reportOption,
      };
    case ReportActionTypes.SELECT_TEAM:
      return {
        ...state,
        teamType: action.teamType,
        homeScore: action.teamType === 'Home' ? 1 : 0,
        awayScore: action.teamType === 'Away' ? 1 : 0,
      };
    case ReportActionTypes.SELECT_SCORE_HOME:
      return {
        ...state,
        homeScore: action.homeScore,
      };
    case ReportActionTypes.SELECT_SCORE_AWAY:
      return {
        ...state,
        awayScore: action.awayScore,
      };
    case ReportActionTypes.SELECT_REDCARD_HOME:
      return {
        ...state,
        homeRedCard: action.homeRedCard,
      };
    case ReportActionTypes.SELECT_REDCARD_AWAY:
      return {
        ...state,
        awayRedCard: action.awayRedCard,
      };
    case ReportActionTypes.SELECT_VIEW:
      return {
        ...state,
        view: action.view,
      };
    case ReportActionTypes.SELECT_TIME_INTERVAL:
      return {
        ...state,
        interval: action.interval,
      };
    case ReportActionTypes.CHANGE_LEAGUE:
      return {
        ...state,
        league: action.league,
      };
    case ReportActionTypes.CHANGE_FROM_HDP:
      return {
        ...state,
        fromInitialHDP: action.fromInitialHDP,
      };
    case ReportActionTypes.CHANGE_TO_HDP:
      return {
        ...state,
        toInitialHDP: action.toInitialHDP,
      };
    case ReportActionTypes.CHANGE_FROM_OU:
      return {
        ...state,
        fromInitialOU: action.fromInitialOU,
      };
    case ReportActionTypes.CHANGE_TO_OU:
      return {
        ...state,
        toInitialOU: action.toInitialOU,
      };
    case ReportActionTypes.SELECT_FROM_DATE:
      return {
        ...state,
        fromDate: action.fromDate,
      };
    case ReportActionTypes.SELECT_TO_DATE:
      return {
        ...state,
        toDate: action.toDate,
      };
    case ReportActionTypes.GET_REPORTS:
      return {
        ...state,
        reports: action.reports,
      };
    case ReportActionTypes.GET_REPORT_DETAILS:
      return {
        ...state,
        reportDetails: action.reportDetails,
        fromMinute: action.fromMinute,
        toMinute: action.toMinute,
      };
    case ReportActionTypes.SHOW_MAIN_REPORT:
      return {
        ...state,
        reportDetails: [],
      };
    default:
      return state;
  }
};

export default reportReducer;
