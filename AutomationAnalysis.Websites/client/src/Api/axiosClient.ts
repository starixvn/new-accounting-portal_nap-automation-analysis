import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

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

const axiosIntance = axios.create(requestConfig);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>({ url, params }: Options) =>
    axiosIntance.get<T>(url, { params }).then(responseBody),

  post: <T>({ url, params, body }: Options) =>
    axiosIntance.post<T>(url, body, { params }).then(responseBody),
};

export default requests;
