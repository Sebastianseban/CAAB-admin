import axiosInstance from "./axiosInstance";


export const fetchBusinessTypes = async () => {
  const res = await axiosInstance.get("/admin/listBusinessType",);
  return res.data.businessType;
};

export const fetchBusinessTypeById = async (id) => {
  const res = await axiosInstance.get(`/admin/getBusinessTypeById/${id}`);
  return res.data;
};

export const addBusinessType = async (data) => {
  const res = await axiosInstance.post("/admin/addBusinessType", data);
  return res.data;
};

export const updateBusinessType = async ({ id, data }) => {
  const res = await axiosInstance.put(`/admin/updateBusinessType/${id}`, data,);
  return res.data;
};

export const deleteBusinessType = async (id) => {
  const res = await axiosInstance.delete(`/admin/deleteBusinessType/${id}`);
  return res.data;
};