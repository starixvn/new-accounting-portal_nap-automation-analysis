import { Report } from '../Feature/Report/Models/Report';
import { ReportDetail } from '../Feature/Report/Models/ReportDetail';
import requests from './axiosClient';
import { apiKey } from '../Utils/ConstantsUtil';
import { ReportFilter } from '../Feature/Report/Models/ReportFilter';

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
