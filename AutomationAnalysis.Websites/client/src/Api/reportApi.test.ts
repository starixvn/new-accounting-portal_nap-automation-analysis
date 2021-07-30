import request from './axiosClient';
import reportApi from './reportApi';

jest.mock('./axiosClient');

describe('reportApi', () => {
  beforeAll(() => {
    request.get = jest.fn();
  });
  it('get report', async () => {
    const resultGetReports = await reportApi.getReports();
    const resultGetReportDetails = await reportApi.getReportDetails();

    expect(resultGetReports).toEqual(undefined);
    expect(resultGetReportDetails).toEqual(undefined);
  });
});
