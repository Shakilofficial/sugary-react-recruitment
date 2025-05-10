import axios from "axios";
import Cookies from "js-cookie";

const baseApi = 'https://sugarytestapi.azurewebsites.net'

export const axiosInstance = axios.create({
  baseURL: baseApi,
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
