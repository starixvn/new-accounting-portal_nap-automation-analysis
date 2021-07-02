import axios from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
  headers: { "content-type": "application/json" },
  paramsSerializer: function (params) {
    return queryString.stringify(params);
  },
});
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    alert(`Please contact for Admin with ${error}`);
    throw error;
  }
);

export default axiosClient;
