
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addQuestionsApi,
  listSectionsApi,
  listQuestionnairesApi,
  deleteQuestionApi,
  // deleteQuestionApi,
} from "../api/questionnaireApi";

// Add Questions Hook
export const useAddQuestions = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addQuestionsApi,
    onSuccess: () => {
      // Invalidate questions list when new questions are added
      queryClient.invalidateQueries(["questionnaires"]);
    },
  });
};

// Delete Question Hook
export const useDeleteQuestion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteQuestionApi,
    onSuccess: () => {
      // Refresh after delete
      queryClient.invalidateQueries(["questionnaires"]);
    },
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
    keepPreviousData: true, // prevents flicker on refetch
  });
};
