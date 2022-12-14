import axios, { AxiosRequestConfig } from "axios";

const baseURL = process.env.REACT_APP_BASE_URL_API;

const instance = axios.create({
  baseURL,
});

export async function addPrivateKey(configs: AxiosRequestConfig) {
  let newConfigs = configs;

  newConfigs = {
    ...configs,
  };

  return newConfigs;
}
instance.interceptors.request.use(addPrivateKey);

export default instance;
