import { create } from "zustand";

const useBusinessTypeStore = create((set) => ({
  selectedBusinessTypeId: null,
  isEditPopupOpen: false,
  isDeletePopupOpen: false,

  setSelectedBusinessTypeId: (id) => set({ selectedBusinessTypeId: id }),
  openEditPopup: (id) =>
    set({ selectedBusinessTypeId: id, isEditPopupOpen: true }),
  closeEditPopup: () => set({ isEditPopupOpen: false, selectedBusinessTypeId: null }),

  openDeletePopup: (id) =>
    set({ selectedBusinessTypeId: id, isDeletePopupOpen: true }),
  closeDeletePopup: () =>
    set({ isDeletePopupOpen: false, selectedBusinessTypeId: null }),
}));

export default useBusinessTypeStore;