import requests from './axiosClient';
import { MenuHeader } from '../Models/MenuHeader';

const headerApi = {
  getMenu: () => requests.get<MenuHeader>({ url: '/api/header' }),
};

export default headerApi;
