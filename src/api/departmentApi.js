import axiosInstance from "./axiosInstance";

export const addDepartmentApi = async (departmentData) => {
  const res = await axiosInstance.post("admin/newDepartment", {
    department_name: departmentData.departmentName,
    department_type: departmentData.departmentType,
    appropriate_govt: departmentData.governmentType,
  });

  return res.data;
};

export const getListDepartmentsApi = async () => {
  const res = await axiosInstance.get("admin/listDepartment");
  return res.data;
};


// Update department
export const updateDepartmentApi = async ({ id, updatedData }) => {
  const res = await axiosInstance.put(`/admin/updateDepartment/${id}`, {
    department_name: updatedData.departmentName,
    department_type: updatedData.departmentType,
    appropriate_govt: updatedData.governmentType,
  });
  return res.data;
};

// Delete department
export const deleteDepartmentApi = async (id) => {
  const { data } = await axiosInstance.delete(`/admin/deleteDepartment/${id}`);
  return data;
};