export interface ReportDetails {
  leagueName: string;
  matchName: string;
  minute: number;
  second: number;
  // eslint-disable-next-line camelcase
  only_second: number;
  beforeHDP: number;
  beforeOU: number;
  afterHDP: number;
  afterOU: number;
  diffHDP: number;
  diffOU: number;
}
