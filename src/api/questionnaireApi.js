// src/api/questionnaireApi.js
import axiosInstance from "./axiosInstance";

// Add Questions
export const addQuestionsApi = async (data) => {
  const res = await axiosInstance.post("/admin/addQuestions", data);
  return res.data;
};

// List Sections
export const listSectionsApi = async () => {
  const res = await axiosInstance.get("/admin/listSections");
  return res.data;
};


// List All Questionnaires
export const listQuestionnairesApi = async () => {
  const res = await axiosInstance.get("/admin/listQuestions");
  return res.data;
};


export const deleteQuestionApi  = async (id) => {
  const res = await axiosInstance.delete(`/admin/removeQuestions/${id}`)
  return res.data
}