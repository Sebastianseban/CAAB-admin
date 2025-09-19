import axiosInstance from "../api/axiosInstance"; // ✅ re-use axiosInstance with baseURL & interceptors



// Add a new law/act
export const addLawApi = async (lawData) => {
  const { data } = await axiosInstance.post("/admin/addLaw", {
    department_name: lawData.departmentName,
    law: lawData.law,
    act_rule: lawData.actRule,
    section: lawData.section,
    penalty_amount: lawData.penaltyAmount,
    due_date: lawData.dueDate,
    alert_date: lawData.alertDate,
  });
  return data;
};


// Get list of all laws/acts
export const getActsApi = async () => {
  const { data } = await axiosInstance.get("/admin/listLaws"); 
  return data; 
};
