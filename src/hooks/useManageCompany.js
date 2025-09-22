import { useQuery } from "@tanstack/react-query";
import { getCompaniesApi } from "../api/manageCompanyApi";
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
