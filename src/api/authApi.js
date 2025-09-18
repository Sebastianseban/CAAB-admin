import axiosInstance from "./axiosInstance";

export const loginApi = async (credentials) => {
  try {
    const res = await axiosInstance.post("/auth/adminLogin", credentials);
    return res.data; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};
