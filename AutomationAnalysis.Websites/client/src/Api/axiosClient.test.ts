import { AxiosError, AxiosResponse } from 'axios';
import requests, { axiosInstance, setInterceptors } from './axiosClient';
import { toast } from 'react-toastify';

describe('axiosInstance', () => {
  const json = {};
  const axiosError: AxiosError = {
    name: 'error',
    message: 'error',
    isAxiosError: true,
    toJSON: () => json,
    config: {},
  };
  const axiosResponse: AxiosResponse<any> = {
    data: 'OK',
    status: 200,
    statusText: '200',
    headers: {},
    config: {},
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('interceptors - shows error message with toast when AxiosError is thrown', () => {
    axiosInstance.interceptors.response.use = jest.fn(
      (successCallback, failCallback) => failCallback && failCallback(axiosError)
    );
    const spy = jest.spyOn(toast, 'error');
    expect(setInterceptors(axiosInstance)).rejects.toBe(axiosError);
    expect(spy).toHaveBeenCalled();
  });

  it('interceptors - dooes not show error message with toast when there is no axios error', () => {
    axiosInstance.interceptors.response.use = jest.fn(successCallback => {
      successCallback && successCallback(axiosResponse);
      return 0;
    });
    const spy = jest.spyOn(toast, 'error');
    setInterceptors(axiosInstance);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('requests - get - returns value from axiosInstance.get', async () => {
    jest.spyOn(axiosInstance, 'get').mockImplementation(() => Promise.resolve(axiosResponse));
    const actual = await requests.get<string>({ url: '/any-url' });
    expect(actual).toBe('OK');
  });

  it('requests - get - returns value from axiosInstance.get', async () => {
    jest.spyOn(axiosInstance, 'post').mockImplementation(() => Promise.resolve(axiosResponse));
    const actual = await requests.post({ url: '/any-url' });
    expect(actual).toBe('OK');
  });
});
