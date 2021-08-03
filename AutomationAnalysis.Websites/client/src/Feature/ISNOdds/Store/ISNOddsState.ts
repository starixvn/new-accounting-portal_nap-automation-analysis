import { Report } from '../Models/ISNOdds';
import { ReportDetail } from '../Models/ISNOddsDetail';

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
  readonly reports: Report[] | undefined;
  readonly reportDetails: ReportDetail[] | undefined;
  readonly isLoading: boolean;
  readonly fromMinute: string;
  readonly toMinute: string;
}

const curr = new Date(Date.now());
const toDay = new Date(curr.setDate(curr.getDate() - curr.getDay() - 1));
const fromDay = new Date(curr.setDate(curr.getDate() - curr.getDay() - 21));

export const initialReportState: ReportState = {
  reportOption: 'Goal',
  teamType: 'Home',
  homeScore: 1,
  awayScore: 1,
  awayRedCard: 1,
  homeRedCard: 1,
  league: '',
  interval: 5,
  view: 'Full Time',
  fromInitialHDP: '0.00',
  toInitialHDP: '0.00',
  fromInitialOU: '0.00',
  toInitialOU: '0.00',
  fromDate: fromDay,
  toDate: toDay,
  reports: undefined,
  reportDetails: undefined,
  isLoading: false,
  fromMinute: '',
  toMinute: '',
};

// export const initialReportState: ReportState = {
//   reportOption: 'Goal',
//   teamType: 'Home',
//   homeScore: 1,
//   awayScore: 0,
//   awayRedCard: 0,
//   homeRedCard: 0,
//   league: '',
//   interval: 5,
//   view: 'Full Time',
//   fromInitialHDP: '-5.00',
//   toInitialHDP: '5.00',
//   fromInitialOU: '-5.00',
//   toInitialOU: '5.00',
//   fromDate: new Date('2019-03-10'),
//   toDate: new Date('2021-07-07'),
//   reports: undefined,
//   reportDetails: undefined,
//   isLoading: false,
//   fromMinute: '',
//   toMinute: '',
// };
