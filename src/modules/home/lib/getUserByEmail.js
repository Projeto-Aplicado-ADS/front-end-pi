export const getUserByEmail = async (email) => {
  try {
    const response = await axiosInstance.get(`/users/${email}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}