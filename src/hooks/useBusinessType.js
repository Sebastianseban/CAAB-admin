// src/hooks/useBusinessType.js
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchDepartmentsApi,
  fetchBusinessTypesApi,
  fetchBusinessTypeByIdApi,
  addBusinessTypeApi,
  updateBusinessTypeApi,
  deleteBusinessTypeApi,
} from "../api/businessTypeApi.js";

// Get all departments
export const useDepartments = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: fetchDepartmentsApi,
  });
};

// Get all business types
export const useBusinessTypes = () => {
  return useQuery({
    queryKey: ["businessTypes"],
    queryFn: fetchBusinessTypesApi,
  });
};

// Get business type by ID
export const useBusinessTypeById = (id) => {
  return useQuery({
    queryKey: ["businessType", id],
    queryFn: () => fetchBusinessTypeByIdApi(id),
    enabled: !!id,
  });
};

// Add business type
export const useAddBusinessType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addBusinessTypeApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["businessTypes"]);
    },
  });
};

// Update business type
export const useUpdateBusinessType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateBusinessTypeApi,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(["businessTypes"]);
      queryClient.invalidateQueries(["businessType", variables.id]);
    },
  });
};

// Delete business type
export const useDeleteBusinessType = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteBusinessTypeApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["businessTypes"]);
    },
  });
};
