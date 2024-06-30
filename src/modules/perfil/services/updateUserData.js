import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export  function updateUserName(userId) {
  return axiosInstance.put(`/users/fullName/${userId}`, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
}

export  function updateUserEmail(userId) {
  return axiosInstance.put(`/users/email/${userId}`, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
}

export  function updateUserPhone(userId) {
  return axiosInstance.put(`/users/phone/${userId}`, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
}