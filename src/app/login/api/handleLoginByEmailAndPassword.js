import { axiosInstance } from "@/lib/api";

export const handleLoginByEmailAndPassword = (data) => {
  return axiosInstance.post('/users/login', data);
};
