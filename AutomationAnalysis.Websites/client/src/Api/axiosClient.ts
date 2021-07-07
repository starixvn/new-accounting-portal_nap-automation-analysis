import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";

interface Params {
  [key: string]: any;
}

interface Options {
  url: string;
  params?: Params;
  body?: any;
}

const requestConfig: AxiosRequestConfig = {
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosInstance = axios.create(requestConfig);

axiosInstance.interceptors.response.use(
  async (response) => response,
  (error: AxiosError) => {
    toast.error("Network Error");

    return Promise.reject(error);
  }
);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>({ url, params }: Options) =>
    axiosInstance.get<T>(url, { params }).then(responseBody),

  post: <T>({ url, params, body }: Options) =>
    axiosInstance.post<T>(url, body, { params }).then(responseBody),
};

export default requests;
