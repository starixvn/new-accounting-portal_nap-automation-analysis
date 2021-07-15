export type GoalOption = "Home" | "Away";
export type ViewOption = "Full Time" | "Half Time";
export type ReportOption = "Score" | "Redcard";

export interface ReportState {
  readonly reportOption: ReportOption;
  readonly goalOption: GoalOption;
  readonly scoreHome: number;
  readonly scoreAway: number;
  readonly redcardHome: number;
  readonly redcardAway: number;
  readonly league: string;
  readonly timeInterval: number;
  readonly viewOption: ViewOption;
  readonly fromHDP: number;
  readonly toHDP: number;
  readonly fromOU: number;
  readonly toOU: number;
  readonly fromDate: Date;
  readonly toDate: Date;
}

export const initialReportState: ReportState = {
  reportOption: "Score",
  goalOption: "Home",
  scoreHome: 1,
  scoreAway: 0,
  redcardAway: 0,
  redcardHome: 0,
  league: "",
  timeInterval: 5,
  viewOption: "Full Time",
  fromHDP: 0,
  toHDP: 0,
  fromOU: 0,
  toOU: 0,
  fromDate: new Date(),
  toDate: new Date(),
};
