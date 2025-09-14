import { create } from "zustand";

export const useDepartmentStore = create((set) => ({
  selectedDepartmentId: null,
  isDeleteDepartmentPopupOpen: false,
  isEditDepartmentPopupOpen: true,

  setSelectedDepartmentId: (id) => set({ selectedDepartmentId: id }),
  setIsDeleteDepartmentPopupOpen: (isOpen) =>
    set({ isDeleteDepartmentPopupOpen: isOpen }),
  setIsEditDepartmentPopupOpen: (isOpen) =>
    set({ isEditDepartmentPopupOpen: isOpen }),
}));
