import { Report } from '../Models/Report';
import requests from './axiosClient';

const reportApi = {
  getReports: (filter?: any) => requests.get<Report[]>({ url: '/report', params: filter }),
};

export default reportApi;
