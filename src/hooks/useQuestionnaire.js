// src/hooks/useQuestionnaire.js
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addQuestionsApi,
  listSectionsApi,
  listQuestionnairesApi,
} from "../api/questionnaireApi";

// Add Questions Hook
export const useAddQuestions = () => {
  return useMutation({
    mutationFn: addQuestionsApi,
  });
};

// Get Sections Hook
export const useSections = () => {
  return useQuery({
    queryKey: ["sections"],
    queryFn: listSectionsApi,
  });
};

// Get Questionnaires Hook
export const useQuestionnaires = () => {
  return useQuery({
    queryKey: ["questionnaires"],
    queryFn: listQuestionnairesApi,
  });
};
