import { Reducer } from 'redux';
import { ReportState, initialReportState } from './ReportState';
import { ReportActions, ReportActionTypes } from './ReportActions';

const reportReducer: Reducer<ReportState, ReportActions> = (state = initialReportState, action): ReportState => {
  switch (action.type) {
    case ReportActionTypes.SELECT_REPORT:
      return {
        ...initialReportState,
        reportOption: action.reportOption,
      };
    case ReportActionTypes.SELECT_GOAL:
      return {
        ...state,
        goalOption: action.goalOption,
        scoreHome: action.goalOption === 'Home' ? 1 : 0,
        scoreAway: action.goalOption === 'Away' ? 1 : 0,
      };
    case ReportActionTypes.SELECT_SCORE_HOME:
      return {
        ...state,
        scoreHome: action.scoreHome,
      };
    case ReportActionTypes.SELECT_SCORE_AWAY:
      return {
        ...state,
        scoreAway: action.scoreAway,
      };
    case ReportActionTypes.SELECT_REDCARD_HOME:
      return {
        ...state,
        redcardHome: action.redcardHome,
      };
    case ReportActionTypes.SELECT_REDCARD_AWAY:
      return {
        ...state,
        redcardAway: action.redcardAway,
      };
    case ReportActionTypes.SELECT_VIEW:
      return {
        ...state,
        viewOption: action.viewOption,
      };
    case ReportActionTypes.SELECT_TIME_INTERVAL:
      return {
        ...state,
        timeInterval: action.timeInterval,
      };
    case ReportActionTypes.CHANGE_LEAGUE:
      return {
        ...state,
        league: action.league,
      };
    case ReportActionTypes.CHANGE_FROM_HDP:
      return {
        ...state,
        fromHDP: action.fromHDP,
      };
    case ReportActionTypes.CHANGE_TO_HDP:
      return {
        ...state,
        toHDP: action.toHDP,
      };
    case ReportActionTypes.CHANGE_FROM_OU:
      return {
        ...state,
        fromOU: action.fromOU,
      };
    case ReportActionTypes.CHANGE_TO_OU:
      return {
        ...state,
        toOU: action.toOU,
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
    default:
      return state;
  }
};

export default reportReducer;
