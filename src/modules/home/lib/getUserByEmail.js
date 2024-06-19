import { axiosInstance } from "@/lib/api";

export const getMe = async (token) => {
  const response = await axiosInstance.get("/users/me", {
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};
