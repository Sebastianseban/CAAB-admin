import { create } from "zustand";

const manageCompanyStore = create((set, get) => ({
  // Pagination state
  currentPage: 1,
  pageSize: 5,
  totalPages: 1,
  totalCount: 0,

  // Selected company for details view
  selectedCompanyId: null,

  // Actions
  setCurrentPage: (page) => set({ currentPage: page }),
  
  setPageSize: (size) => set({ 
    pageSize: size,
    currentPage: 1 // Reset to first page when changing page size
  }),
  
  setPaginationData: (data) => set({
    totalPages: data.totalPages || 1,
    totalCount: data.totalCount || 0,
  }),
  
  setSelectedCompanyId: (id) => set({ selectedCompanyId: id }),
  
  // Helper actions
  nextPage: () => {
    const { currentPage, totalPages } = get();
    if (currentPage < totalPages) {
      set({ currentPage: currentPage + 1 });
    }
  },
  
  prevPage: () => {
    const { currentPage } = get();
    if (currentPage > 1) {
      set({ currentPage: currentPage - 1 });
    }
  },
  
  resetPagination: () => set({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
  }),
}));

export default manageCompanyStore;
