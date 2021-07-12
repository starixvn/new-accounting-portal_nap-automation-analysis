import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";
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

function setInterceptors(instance: AxiosInstance) {
  return instance.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      toast.error("Network Error <br/>" + JSON.stringify(error));
      return Promise.reject(error);
    }
  );
}

const axiosInstance = axios.create(requestConfig);
setInterceptors(axiosInstance);

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>({ url, params }: Options) =>
    axiosInstance.get<T>(url, { params }).then(responseBody),
  post: <T>({ url, params, body }: Options) =>
    axiosInstance.post<T>(url, body, { params }).then(responseBody),
};

export { setInterceptors, axiosInstance };

export default requests;
