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
  function mockFailedAxios(method: string) {
    axiosInstance.interceptors.response.use = jest.fn(
      (successCallback, failCallback) => failCallback && failCallback(axiosError)
    );

    method === 'get' && jest.spyOn(axiosInstance, 'get').mockImplementation(() => Promise.reject(axiosError));

    method === 'post' && jest.spyOn(axiosInstance, 'post').mockImplementation(() => Promise.reject(axiosError));
  }

  function mockSuccessfulAxios() {
    axiosInstance.interceptors.response.use = jest.fn(
      successCallback => { 
        successCallback && successCallback(axiosResponse);
        return 0;
      }
    );
    jest.spyOn(axiosInstance, 'get').mockImplementation(() => Promise.resolve({}));
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('get - show error message with toast when AxiosError is thrown', () => {
    mockFailedAxios('get');
    const spy = jest.spyOn(toast, 'error');
    setInterceptors(axiosInstance);
    requests.get({ url: '/any-url' }).catch(e => e);
    expect(spy).toHaveBeenCalled();
  });

  it('post - show error message with toast when AxiosError is thrown', () => {
    mockFailedAxios('post');
    const spy = jest.spyOn(toast, 'error');
    setInterceptors(axiosInstance);
    requests.post({ url: '/any-url' }).catch(e => e);
    expect(spy).toHaveBeenCalled();
  });

  it('get - do not show error message with toast when there is no axios error', () => {
    mockSuccessfulAxios();
    const spy = jest.spyOn(toast, 'error');
    setInterceptors(axiosInstance);
    requests.get({ url: '/any-url' }).catch(e => e);
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
