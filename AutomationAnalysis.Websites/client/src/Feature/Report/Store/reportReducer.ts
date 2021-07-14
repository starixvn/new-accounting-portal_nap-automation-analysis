import { Reducer } from "redux";
import { ReportState, initialReportState } from "./ReportState";
import { ReportActions } from "./ReportActions";

const reportReducer: Reducer<ReportState, ReportActions> = (
  state = initialReportState,
  action
): ReportState => {
  switch (action.type) {
    case "TYPE_ACTION":
      return {
        ...state,
      };
    case "SELECT_GOAL":
      return {
        ...state,
        goalOption: action.selectedGoal,
      };
    default:
      return state;
  }
};

export default reportReducer;
