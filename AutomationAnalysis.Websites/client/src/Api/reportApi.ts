import { Report } from '../Feature/ISNOdds/Models/ISNOdds';
import { ReportDetail } from '../Feature/ISNOdds/Models/ISNOddsDetail';
import requests from './axiosClient';
import { apiKey } from '../Utils/ConstantsUtility';
import { ReportFilter } from '../Feature/ISNOdds/Models/ISNOddsFilter';

const reportApi = {
  getReports: (filter?: ReportFilter) =>
    requests.get<Report[]>({ url: '/simple-api/query', params: { ...filter, apiKey: apiKey.REPORT_QUERY } }),
  getReportDetails: (filter?: ReportFilter) =>
    requests.get<ReportDetail[]>({
      url: '/simple-api/query',
      params: { ...filter, apiKey: apiKey.REPORT_DETAILS_QUERY },
    }),
  getReportExcel: (model: any) =>
    requests.post<Blob>({ url: '/api/isn-odds/excel', body: model, config: { responseType: 'blob' } }),
};

export default reportApi;
