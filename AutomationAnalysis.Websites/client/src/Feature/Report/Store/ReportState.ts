import { Report } from '../../../Models/Report';

export type GoalOption = 'Home' | 'Away';
export type ViewOption = 'Full Time' | 'Half Time';
export type ReportOption = 'Goal' | 'Redcard';

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
  readonly fromHDP: string;
  readonly toHDP: string;
  readonly fromOU: string;
  readonly toOU: string;
  readonly fromDate: Date;
  readonly toDate: Date;
  readonly reports: Report[];
}

export const initialReportState: ReportState = {
  reportOption: 'Goal',
  goalOption: 'Home',
  scoreHome: 1,
  scoreAway: 0,
  redcardAway: 0,
  redcardHome: 0,
  league: '',
  timeInterval: 5,
  viewOption: 'Full Time',
  fromHDP: '0',
  toHDP: '0',
  fromOU: '0',
  toOU: '0',
  fromDate: new Date(),
  toDate: new Date(),
  reports: [],
};
