import { Report } from '../Models/Report';
import { ReportDetails } from '../Models/ReportDetails';
import requests from './axiosClient';
import { apiKey } from '../Utils/ConstantsUtil';

const reportApi = {
  getReports: (filter?: any) =>
    requests.get<Report[]>({ url: '/simple-api/query', params: { ...filter, apiKey: apiKey.REPORT_QUERY } }),
  getReportDetails: (filter?: any) =>
    requests.get<ReportDetails[]>({
      url: '/simple-api/query',
      params: { ...filter, apiKey: apiKey.REPORT_DETAILS_QUERY },
    }),
};

export default reportApi;
