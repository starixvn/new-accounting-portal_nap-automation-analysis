import reportApi from './reportApi';
import axiosClient from './axiosClient';
import { ReportFilter } from '../Feature/ISNOdds/Models/ISNOddsFilter';
jest.mock('./axiosClient');

describe('reportApi', () => {
  it('get report', async () => {
    const filter: ReportFilter = {
      fromDate: new Date('2021-07-24'),
      toDate: new Date('2021-07-25'),
      teamType: 0,
      league: 'All',
      view: false,
      interval: 5,
      fromInitialHDP: -5,
      toInitialHDP: 5,
      fromInitialOU: -5,
      toInitialOU: 5,
      homeScore: 1,
      awayScore: 0,
      homeRedCard: 0,
      awayRedCard: 0,
      mode: 1,
    };
    await reportApi.getReports(filter);
    await reportApi.getReportDetails(filter);
    await reportApi.getReportExcel(filter);
    expect(axiosClient.get).toBeCalledTimes(2);
    expect(axiosClient.post).toBeCalledTimes(1);
  });
});
