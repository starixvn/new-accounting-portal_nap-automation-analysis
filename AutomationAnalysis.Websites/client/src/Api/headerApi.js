import axiosClient from "./axiosClient";

const headerApi = {
  getMenu: () => {
    const url = "/api/header";
    return axiosClient.get(url);
  },
};

export default headerApi;
