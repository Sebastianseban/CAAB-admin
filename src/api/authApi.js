import axiosInstance from "./axiosInstance";

export const loginApi = async (credentials) => {
  try {
    const res = await axiosInstance.post("/adminLogin", credentials);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
