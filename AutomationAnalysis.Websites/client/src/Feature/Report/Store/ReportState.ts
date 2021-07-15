export type GoalOption = "Home" | "Away";

export interface ReportState {
  readonly goalOption: GoalOption;
  readonly scoreHome: number;
  readonly scoreAway: number;
  readonly redcardHome: number;
  readonly redcardAway: number;
}

export const initialReportState: ReportState = {
  goalOption: "Home",
  scoreHome: 0,
  scoreAway: 0,
  redcardAway: 0,
  redcardHome: 0,
};
