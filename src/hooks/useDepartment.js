import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addDepartmentApi,
  updateDepartmentApi,
  deleteDepartmentApi,
  getListDepartmentsApi,
} from "../api/departmentApi";

// Fetch all departments
export const useListDepartments = () => {
  return useQuery({
    queryKey: ["departments"],
    queryFn: getListDepartmentsApi,
  });
};

// Add department
export const useAddDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addDepartmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["departments"]);
    },
  });
};

// Update department
export const useUpdateDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateDepartmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["departments"]);
    },
  });
};

// Delete department
export const useDeleteDepartment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteDepartmentApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["departments"]);
    },
  });
};
