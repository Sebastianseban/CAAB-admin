import axiosInstance from "./axiosInstance";




export const getCompaniesApi = async ({ page = 1, pageSize = 5 }) => {
  const response = await axiosInstance.get("/admin/listCompanies", {
    params: { page, pageSize },
  });
  return response.data;
};

export const getCompanyByIdApi = async (id) => {
  const response = await axiosInstance.get(`/admin/companyInfo/${id}`);
  return response.data.companyInfo;
};

export const getBranchesApi = async (companyId) => {
  const response = await axiosInstance.get(`/admin/listBranches/${companyId}`);
  return response.data;
};