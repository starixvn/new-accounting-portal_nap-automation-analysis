import { Reducer } from "redux";
import { ReportState, initialReportState } from "./ReportState";
import { ReportActions, ReportActionTypes } from "./ReportActions";

const reportReducer: Reducer<ReportState, ReportActions> = (
  state = initialReportState,
  action
): ReportState => {
  console.log({ action });
  switch (action.type) {
    case ReportActionTypes.SELECT_GOAL:
      return {
        ...state,
        goalOption: action.selectedGoal,
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
        scoreAway: action.redcardAway,
      };
    default:
      return state;
  }
};

export default reportReducer;
