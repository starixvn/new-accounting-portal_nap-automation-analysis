export interface ReportDetail {
  leagueName: string;
  matchName: string;
  minute: number;
  second: number;
  onlySecond: number;
  beforeHDP: number;
  beforeOU: number;
  afterHDP: number;
  afterOU: number;
  diffHDP: number;
  diffOU: number;
}
