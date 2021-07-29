import {
  changeFromHDP,
  changeFromOU,
  changeLeague,
  changeToHDP,
  changeToOU,
  getReports,
  ReportActionTypes,
  selectAwayRedcard,
  selectAwayScore,
  selectFromDate,
  selectTeamOption,
  selectHomeRedcard,
  selectHomeScore,
  selectReportOption,
  selectTimeInterval,
  selectToDate,
  selectView,
} from './ISNOddsActions';
import configureStore from '../../../configureStore';

describe('report action', () => {
  const mockStore = configureStore();

  it('dispatches selectReportOption', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_REPORT,
      reportOption: 'Goal',
    };

    expect(mockStore.dispatch(selectReportOption('Goal'))).toEqual(expectedAction);
  });

  it('dispatches selectGoalOption', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_TEAM,
      teamType: 'Home',
    };

    expect(mockStore.dispatch(selectTeamOption('Home'))).toEqual(expectedAction);
  });

  it('dispatches selectHomeScore', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_SCORE_HOME,
      homeScore: 1,
    };

    expect(mockStore.dispatch(selectHomeScore(1))).toEqual(expectedAction);
  });

  it('dispatches selectAwayScore', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_SCORE_AWAY,
      awayScore: 1,
    };

    expect(mockStore.dispatch(selectAwayScore(1))).toEqual(expectedAction);
  });

  it('dispatches selectHomeRedcard', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_REDCARD_HOME,
      homeRedCard: 1,
    };

    expect(mockStore.dispatch(selectHomeRedcard(1))).toEqual(expectedAction);
  });

  it('dispatches selectAwayRedcard', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_REDCARD_AWAY,
      awayRedCard: 1,
    };

    expect(mockStore.dispatch(selectAwayRedcard(1))).toEqual(expectedAction);
  });

  it('dispatches selectView', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_VIEW,
      view: 'Full Time',
    };

    expect(mockStore.dispatch(selectView('Full Time'))).toEqual(expectedAction);
  });

  it('dispatches selectTimeInterval', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_TIME_INTERVAL,
      interval: 5,
    };

    expect(mockStore.dispatch(selectTimeInterval(5))).toEqual(expectedAction);
  });

  it('dispatches changeLeague', () => {
    const expectedAction = {
      type: ReportActionTypes.CHANGE_LEAGUE,
      league: 'C1',
    };

    expect(mockStore.dispatch(changeLeague('C1'))).toEqual(expectedAction);
  });

  it('dispatches changeFromHDP', () => {
    const expectedAction = {
      type: ReportActionTypes.CHANGE_FROM_HDP,
      fromInitialHDP: '1',
    };

    expect(mockStore.dispatch(changeFromHDP('1'))).toEqual(expectedAction);
  });

  it('dispatches changeToHDP', () => {
    const expectedAction = {
      type: ReportActionTypes.CHANGE_TO_HDP,
      toInitialHDP: '1',
    };

    expect(mockStore.dispatch(changeToHDP('1'))).toEqual(expectedAction);
  });

  it('dispatches changeFromOU', () => {
    const expectedAction = {
      type: ReportActionTypes.CHANGE_FROM_OU,
      fromInitialOU: '1',
    };

    expect(mockStore.dispatch(changeFromOU('1'))).toEqual(expectedAction);
  });

  it('dispatches changeToOU', () => {
    const expectedAction = {
      type: ReportActionTypes.CHANGE_TO_OU,
      toInitialOU: '1',
    };

    expect(mockStore.dispatch(changeToOU('1'))).toEqual(expectedAction);
  });

  it('dispatches selectFromDate', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_FROM_DATE,
      fromDate: new Date(),
    };

    expect(mockStore.dispatch(selectFromDate(new Date()))).toEqual(expectedAction);
  });

  it('dispatches selectToDate', () => {
    const expectedAction = {
      type: ReportActionTypes.SELECT_TO_DATE,
      toDate: new Date(),
    };

    expect(mockStore.dispatch(selectToDate(new Date()))).toEqual(expectedAction);
  });

  it('dispatches getReport', () => {
    const expectedAction = {
      type: ReportActionTypes.GET_REPORTS,
      reports: [],
    };

    expect(mockStore.dispatch(getReports([]))).toEqual(expectedAction);
  });
});
