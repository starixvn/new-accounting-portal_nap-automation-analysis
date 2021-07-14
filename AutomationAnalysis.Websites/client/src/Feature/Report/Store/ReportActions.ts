export interface ReportTypeAction {
  type: "TYPE_ACTION";
}

export interface SelectGoalOptionAction {
  type: "SELECT_GOAL";
  selectedGoal: "Home" | "Away";
}

export type ReportActions = ReportTypeAction | SelectGoalOptionAction;
