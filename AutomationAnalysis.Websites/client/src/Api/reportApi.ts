import requests from './axiosClient';

const reportApi = {
  getReportData: () => requests.get<any>({ url: '/request' }),
};

export default reportApi;
