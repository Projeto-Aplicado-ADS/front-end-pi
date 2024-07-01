import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const postNewReserva = (pathname, data) => {
  return axiosInstance.post(pathname, data, {
    headers: {
      Authorization: `${Cookies.get("token")}`,
    },
  });
};
