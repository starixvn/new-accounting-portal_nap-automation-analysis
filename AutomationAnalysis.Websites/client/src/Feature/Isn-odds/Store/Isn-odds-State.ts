import { Report } from '../Models/Isn-odds';
import { ReportDetail } from '../Models/Isn-odds-Detail';

export type TeamOption = 'Home' | 'Away';
export type ViewOption = 'Full Time' | 'Half Time';
export type ReportOption = 'Goal' | 'Redcard';

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
  readonly reportDetails: ReportDetail[];
  readonly isLoading: boolean;
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
  fromInitialHDP: '-5',
  toInitialHDP: '5',
  fromInitialOU: '-5',
  toInitialOU: '5',
  fromDate: new Date('2019-03-10'),
  toDate: new Date('2021-06-10'),
  reports: [],
  reportDetails: [],
  isLoading: false,
};
