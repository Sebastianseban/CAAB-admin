import axiosInstance from "./axiosInstance";




export const getCompaniesApi = async ({ page = 1, pageSize = 5 }) => {
  const response = await axiosInstance.get("/admin/listCompanies", {
    params: { page, pageSize },
  });
  return response.data;
};
