import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

interface Params {
  [key: string]: any;
}

interface Options {
  url: string;
  params?: Params;
  body?: any;
  config?: AxiosRequestConfig;
}

const requestConfig: AxiosRequestConfig = {
  headers: {
    'Content-Type': 'application/json',
  },
};

function setInterceptors(instance: AxiosInstance) {
  return instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      toast.error(`Network Error <br/> ${JSON.stringify(error.message)}`);
      return Promise.reject(error);
    },
  );
}

const axiosInstance = axios.create(requestConfig);
setInterceptors(axiosInstance);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>({ url, params, config }: Options) => axiosInstance.get<T>(url, { params, ...config }).then(responseBody),
  post: <T>({ url, body, config }: Options) => axiosInstance.post<T>(url, body, config).then(responseBody),
};

export { setInterceptors, axiosInstance };

export default requests;
