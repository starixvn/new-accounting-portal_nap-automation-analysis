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
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_GOAL, goalOption: 'Home' })).toEqual({
      ...initialReportState,
      goalOption: 'Home',
      scoreHome: 1,
      scoreAway: 0,
    });
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_GOAL, goalOption: 'Away' })).toEqual({
      ...initialReportState,
      goalOption: 'Away',
      scoreHome: 0,
      scoreAway: 1,
    });
  });

  it('return state selected score home', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_SCORE_HOME, scoreHome: 5 })).toEqual({
      ...initialReportState,
      scoreHome: 5,
    });
  });

  it('return state selected score away', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_SCORE_AWAY, scoreAway: 5 })).toEqual({
      ...initialReportState,
      scoreAway: 5,
    });
  });

  it('return selected redcard home', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_REDCARD_HOME, redcardHome: 4 })).toEqual({
      ...initialReportState,
      redcardHome: 4,
    });
  });

  it('return selected redcard away', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_REDCARD_AWAY, redcardAway: 4 })).toEqual({
      ...initialReportState,
      redcardAway: 4,
    });
  });

  it('return state selected viewOption', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_VIEW, viewOption: 'Full Time' })).toEqual(
      { ...initialReportState, viewOption: 'Full Time' },
    );
  });

  it('return selected timeinterval', () => {
    expect(
      reportReducer(initialReportState, { type: ReportActionTypes.SELECT_TIME_INTERVAL, timeInterval: 5 }),
    ).toEqual({
      ...initialReportState,
      timeInterval: 5,
    });
  });

  it('return state changed league', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_LEAGUE, league: 'C1' })).toEqual({
      ...initialReportState,
      league: 'C1',
    });
  });

  it('return state changed fromHDP', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_FROM_HDP, fromHDP: '1' })).toEqual({
      ...initialReportState,
      fromHDP: 1,
    });
  });

  it('return state changed toHDP', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_TO_HDP, toHDP: '1' })).toEqual({
      ...initialReportState,
      toHDP: 1,
    });
  });

  it('return state changed fromOU', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_FROM_OU, fromOU: '1' })).toEqual({
      ...initialReportState,
      fromOU: 1,
    });
  });

  it('return state changed toOU', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.CHANGE_TO_OU, toOU: '1' })).toEqual({
      ...initialReportState,
      toOU: 1,
    });
  });

  it('return state selected fromdate', () => {
    expect(
      reportReducer(initialReportState, { type: ReportActionTypes.SELECT_FROM_DATE, fromDate: new Date() }),
    ).toEqual({
      ...initialReportState,
      fromDate: new Date(),
    });
  });

  it('return state selected todate', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.SELECT_TO_DATE, toDate: new Date() })).toEqual({
      ...initialReportState,
      toDate: new Date(),
    });
  });

  it('return state get report', () => {
    expect(reportReducer(initialReportState, { type: ReportActionTypes.GET_REPORTS, reports: [] })).toEqual({
      ...initialReportState,
      reports: [],
    });
  });
});
