import { ReportActionTypes } from './ReportActions';
import reportReducer from './reportReducer';
import { initialReportState } from './ReportState';

describe('report reducer', () => {
  it('return state selected report', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_REPORT, reportOption: 'Goal' })).toEqual({
      ...initialReportState,
      reportOption: 'Goal',
    });
    expect(
      reportReducer(initialReportState, { type: ReportActionTypes.SELECT_REPORT, reportOption: 'Redcard' }),
    ).toEqual({ ...initialReportState, reportOption: 'Redcard' });
  });

  it('return state selected goal', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_TEAM, teamType: 'Home' })).toEqual({
      ...initialReportState,
      teamType: 'Home',
      homeScore: 1,
      awayScore: 0,
    });
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_TEAM, teamType: 'Away' })).toEqual({
      ...initialReportState,
      teamType: 'Away',
      homeScore: 0,
      awayScore: 1,
    });
  });

  it('return state selected score home', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_SCORE_HOME, homeScore: 5 })).toEqual({
      ...initialReportState,
      homeScore: 5,
    });
  });

  it('return state selected score away', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_SCORE_AWAY, awayScore: 5 })).toEqual({
      ...initialReportState,
      awayScore: 5,
    });
  });

  it('return selected redcard home', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_REDCARD_HOME, homeRedCard: 4 })).toEqual({
      ...initialReportState,
      homeRedCard: 4,
    });
  });

  it('return selected redcard away', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_REDCARD_AWAY, awayRedCard: 4 })).toEqual({
      ...initialReportState,
      awayRedCard: 4,
    });
  });

  it('return state selected viewOption', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_VIEW, view: 'Full Time' })).toEqual({
      ...initialReportState,
      view: 'Full Time',
    });
  });

  it('return selected timeinterval', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_TIME_INTERVAL, interval: 5 })).toEqual({
      ...initialReportState,
      interval: 5,
    });
  });

  it('return state changed league', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_LEAGUE, league: 'C1' })).toEqual({
      ...initialReportState,
      league: 'C1',
    });
  });

  it('return state changed fromHDP', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_FROM_HDP, fromInitialHDP: '1' })).toEqual(
      {
        ...initialReportState,
        fromInitialHDP: '1',
      },
    );
  });

  it('return state changed toHDP', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_TO_HDP, toInitialHDP: '1' })).toEqual({
      ...initialReportState,
      toInitialHDP: '1',
    });
  });

  it('return state changed fromOU', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_FROM_OU, fromInitialOU: '1' })).toEqual({
      ...initialReportState,
      fromInitialOU: '1',
    });
  });

  it('return state changed toOU', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_TO_OU, toInitialOU: '1' })).toEqual({
      ...initialReportState,
      toInitialOU: '1',
    });
  });

  it('return state selected fromdate', () => {
    expect(
      reportReducer(initialReportState, { type: ReportActionTypes.SELECT_FROM_DATE, fromDate: new Date('2020-12-20') }),
    ).toEqual({
      ...initialReportState,
      fromDate: new Date('2020-12-20'),
    });
  });

  it('return state selected todate', () => {
    expect(
      reportReducer(initialReportState, { type: ReportActionTypes.SELECT_TO_DATE, toDate: new Date('2020-12-20') }),
    ).toEqual({
      ...initialReportState,
      toDate: new Date('2020-12-20'),
    });
  });

  it('return state get report', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.GET_REPORTS, reports: [] })).toEqual({
      ...initialReportState,
      reports: [],
    });
  });
});
