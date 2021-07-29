import { ReportState } from '../Store/Isn-odds-State';

export interface ReportFilter {
  fromDate: Date;
  toDate: Date;
  league: string;
  view: boolean;
  interval: number;
  fromInitialHDP: number | string;
  toInitialHDP: number | string;
  fromInitialOU: number | string;
  toInitialOU: number | string;
  homeScore: number;
  awayScore: number;
  homeRedCard: number;
  awayRedCard: number;
  mode: number;
  teamType: number;
  fromMinute?: number | string;
  toMinute?: number | string;
}

export const mapStateToFilter = (state: ReportState): ReportFilter => ({
  fromDate: state.fromDate,
  toDate: state.toDate,
  teamType: state.teamType === 'Home' ? 0 : 1,
  league: state.league,
  view: state.view === 'Full Time',
  interval: state.interval,
  fromInitialHDP: +state.fromInitialOU,
  toInitialHDP: +state.toInitialHDP,
  fromInitialOU: +state.fromInitialOU,
  toInitialOU: +state.toInitialOU,
  homeScore: state.homeScore,
  awayScore: state.awayScore,
  homeRedCard: state.homeRedCard,
  awayRedCard: state.awayRedCard,
  mode: state.reportOption === 'Goal' ? 0 : 1,
});
