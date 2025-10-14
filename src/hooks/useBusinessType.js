import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import {
  addBusinessType,
  deleteBusinessType,
  fetchBusinessTypeById,
  fetchBusinessTypes,
  updateBusinessType,
} from "../api/businessTypeApi.js";
import toast from "react-hot-toast";

export const useAddBusinessType = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addBusinessType,
    onSuccess: (data) => {
     toast.success("Business type added successfully");
      queryClient.invalidateQueries({ queryKey: ["businessTypes"] });
    },
  });
};


export const useBusinessTypes = (page = 1, limit = 10) => {
  return useQuery({
    queryKey: ["businessTypes", page],
    queryFn: () => fetchBusinessTypes(page, limit),
    keepPreviousData: true, // keeps old data while fetching new page
  });
};

export const useBusinessTypeById = (id, enabled = true) =>
  useQuery({
    queryKey: ["businessType", id],
    queryFn: () => fetchBusinessTypeById(id),
    enabled: !!id && enabled,
  });

export const useUpdateBusinessType = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => updateBusinessType({ id, data }),
    onSuccess: (res) => {
      alert(res.message);
      queryClient.invalidateQueries({ queryKey: ["businessTypes"] });
      queryClient.invalidateQueries({ queryKey: ["businessType", id] });
    },
  });
};

export const useDeleteBusinessType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteBusinessType(id),
    onSuccess: (res) => {
      alert(res.message);
      queryClient.invalidateQueries({ queryKey: ["businessTypes"] });
    },
  });
};
