import { Report } from '../Models/Report';
import requests from './axiosClient';

const reportApi = {
  getReports: () => requests.get<Report[]>({ url: '/request' }),
};

export default reportApi;
