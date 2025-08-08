import type { AxiosResponse } from "axios";
import Axios, { AxiosHeaders } from "axios";
import camelcaseKeys from "camelcase-keys";

Axios.interceptors.request.use(
  async (config) => {
    const headers = new AxiosHeaders(config.headers);

    config.headers = headers;
    return config;
  },
  (error) => {
    console.error(error);
    Promise.reject(error);
  },
);

Axios.interceptors.response.use((response: AxiosResponse) => {
  /**
   * This is where we can do some response
   * transformation before it gets to the component level
   */
  return camelcaseKeys(response.data, { deep: true });
  // return response?.data;
});
