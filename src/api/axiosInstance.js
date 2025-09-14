import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://wcfmvw9r-5500.inc1.devtunnels.ms/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
