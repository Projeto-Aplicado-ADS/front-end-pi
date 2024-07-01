import axios from "axios";
import Cookies from "js-cookie";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROUTER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response?.status) {
      case 404:
        window.location.assign("/not-found");
        break;
      case 500:
        Cookies.remove("token");
        window.location.assign("/login");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use((config) => {
  return config;
});
