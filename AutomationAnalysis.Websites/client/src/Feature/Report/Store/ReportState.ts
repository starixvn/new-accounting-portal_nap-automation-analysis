import { Report } from '../../../Models/Report';

export type TeamOption = 'Home' | 'Away';
export type ViewOption = 'Full Time' | 'Half Time';
export type ReportOption = 'Goal' | 'Redcard';

export type SelectItem = {
  value: number | string;
  label: string;
};

export interface ReportState {
  readonly reportOption: ReportOption;
  readonly teamType: TeamOption;
  readonly homeScore: number;
  readonly awayScore: number;
  readonly homeRedCard: number;
  readonly awayRedCard: number;
  readonly league: string;
  readonly interval: number;
  readonly view: ViewOption;
  readonly fromInitialHDP: string;
  readonly toInitialHDP: string;
  readonly fromInitialOU: string;
  readonly toInitialOU: string;
  readonly fromDate: Date;
  readonly toDate: Date;
  readonly reports: Report[];
}

export const initialReportState: ReportState = {
  reportOption: 'Goal',
  teamType: 'Home',
  homeScore: 1,
  awayScore: 0,
  awayRedCard: 0,
  homeRedCard: 0,
  league: '',
  interval: 5,
  view: 'Full Time',
  fromInitialHDP: '0',
  toInitialHDP: '0',
  fromInitialOU: '0',
  toInitialOU: '0',
  fromDate: new Date(),
  toDate: new Date(),
  reports: [],
};
