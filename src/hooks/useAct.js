import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getDepartmentsApi, addLawApi, getActsApi } from "../api/actApi";

// Fetch departments
export const useDepartments = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: getDepartmentsApi,
  });
};

// Add new law
export const useAddLaw = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addLawApi,
    onSuccess: () => {
      // refetch acts table or departments if needed
      queryClient.invalidateQueries(["acts"]);
    },
  });
};


export const useActs = (toggle) => {
  return useQuery({
    queryKey: ["acts", toggle], // toggle ensures refetch after add/delete
    queryFn: getActsApi,
  });
};