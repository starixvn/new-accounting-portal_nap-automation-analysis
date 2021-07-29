import { Report } from '../Feature/Isn-odds/Models/Isn-odds';
import { ReportDetail } from '../Feature/Isn-odds/Models/Isn-odds-Detail';
import requests from './axiosClient';
import { apiKey } from '../Utils/ConstantsUtility';
import { ReportFilter } from '../Feature/Isn-odds/Models/Isn-odds-Filter';

const reportApi = {
  getReports: (filter: ReportFilter) =>
    requests.get<Report[]>({ url: '/simple-api/query', params: { ...filter, apiKey: apiKey.REPORT_QUERY } }),
  getReportDetails: (filter: ReportFilter) =>
    requests.get<ReportDetail[]>({
      url: '/simple-api/query',
      params: { ...filter, apiKey: apiKey.REPORT_DETAILS_QUERY },
    }),
};

export default reportApi;
