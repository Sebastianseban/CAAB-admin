import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {  addLawApi, getActsApi,  } from "../api/actApi";

// Fetch departments


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