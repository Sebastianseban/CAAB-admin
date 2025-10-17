import { create } from "zustand";

const useUIStore = create((set) => ({
  pageTitle: "Dashboard",
  setPageTitle: (title) => set({ pageTitle: title }),
}));

export default useUIStore;
