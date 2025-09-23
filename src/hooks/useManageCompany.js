import { useQuery } from "@tanstack/react-query";
import { getBranchesApi, getCompaniesApi, getCompanyByIdApi } from "../api/manageCompanyApi";
import manageCompanyStore from "../store/manageCompanyStore";

export const useCompanies = () => {
  const { currentPage, pageSize, setPaginationData } = manageCompanyStore();

  return useQuery({
    queryKey: ["companies", currentPage, pageSize],
    queryFn: () => getCompaniesApi({ page: currentPage, pageSize }),
    onSuccess: (data) => {
      setPaginationData(data);
    },
    keepPreviousData: true, // Keep previous data while loading new page
  });
};

export const useCompanyById = (id) => {
  return useQuery({
    queryKey: ["company", id],
    queryFn: () => getCompanyByIdApi(id),
    enabled: !!id, // Only run if id exists
  });
};

export const useBranches = (companyId) => {
  return useQuery({
    queryKey: ["branches", companyId],
    queryFn: () => getBranchesApi(companyId),
    enabled: !!companyId,
    select: (data) => data.branches || [],
  });
};

