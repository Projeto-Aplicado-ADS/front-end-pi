import { axiosInstance } from "@/lib/axios/api";

export const handleLoginByEmailAndPassword = (data) => {
  return axiosInstance.post("/users/login", data);
};
