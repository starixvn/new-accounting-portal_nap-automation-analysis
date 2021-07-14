export interface ReportState {
  count: number;
  goalOption: "Home" | "Away";
}

export const initialReportState: ReportState = {
  count: 0,
  goalOption: "Home",
};
