import { ReportState } from '../Store/ISNOddsState';
import { ReportFilter, mapStateToFilter } from './ISNOddsFilter';

describe('ISNOddsFilter ', () => {
  it('check map to filter', () => {
    const state: ReportState = {
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
      fromDate: new Date('2020-02-11'),
      toDate: new Date('2020-02-11'),
      reports: [],
      reportDetails: [],
      isLoading: false,
      fromMinute: '',
      toMinute: '',
    };
    const otherState: ReportState = { ...state, teamType: 'Away' };
    const expectFilter: ReportFilter = {
      fromDate: new Date('2020-02-11'),
      toDate: new Date('2020-02-11'),
      teamType: 0,
      league: '',
      view: true,
      interval: 5,
      fromInitialHDP: 0,
      toInitialHDP: 0,
      fromInitialOU: 0,
      toInitialOU: 0,
      homeScore: 1,
      awayScore: 1,
      homeRedCard: 1,
      awayRedCard: 1,
      mode: 0,
    };
    const expectOtherFilter: ReportFilter = { ...expectFilter, teamType: 1 };

    const resultAct = mapStateToFilter(state);
    const resultOtherAct = mapStateToFilter(otherState);

    expect(resultAct).toEqual(expectFilter);
    expect(resultOtherAct).toEqual(expectOtherFilter);
  });
});
