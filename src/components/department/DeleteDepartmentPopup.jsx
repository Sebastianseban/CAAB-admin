

import { useDeleteDepartment } from "../../hooks/useDepartment";
import { useDepartmentStore } from "../../store/departmentStore";

const DeleteDepartmentPopup = () => {
  
  const {
    selectedDepartmentId,
    isDeleteDepartmentPopupOpen,
    setIsDeleteDepartmentPopupOpen,
  } = useDepartmentStore();

  const { mutate: deleteDepartment, isLoading } = useDeleteDepartment();

  if (!isDeleteDepartmentPopupOpen) return null;

  const handleDeleteDepartment = () => {
    deleteDepartment(selectedDepartmentId, {
      onSuccess: () => setIsDeleteDepartmentPopupOpen(false),
      onError: () => alert("Delete failed"),
    });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center bg-blue-900/40">
      <div className="w-[420px] bg-white rounded-2xl shadow-xl p-0">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 rounded-t-2xl bg-blue-600">
          <span className="font-semibold text-lg text-white">
            Department Deletion
          </span>
          <button
            className="w-8 h-8 flex justify-center items-center text-xl text-white rounded-full hover:bg-white/20 transition-colors"
            onClick={() => setIsDeleteDepartmentPopupOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
        {/* Body */}
        <div className="px-8 py-10 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-base">
              Do you want to delete department
              <span className="inline-block px-2 py-1 text-sm font-bold text-white bg-blue-500 rounded-full ml-1">
                #{selectedDepartmentId}
              </span>
              ?
            </span>
          </div>
          {/* Actions */}
          <div className="flex gap-x-4 justify-center">
            <button
              className="w-40 py-2 font-medium text-white bg-blue-600 rounded-xl shadow-sm hover:bg-blue-700 transition-colors border border-blue-600 disabled:opacity-60"
              onClick={handleDeleteDepartment}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Delete"}
            </button>
            <button
              className="w-40 py-2 font-medium text-blue-600 border border-blue-600 rounded-xl shadow-sm hover:bg-blue-50 transition-colors"
              onClick={() => setIsDeleteDepartmentPopupOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDepartmentPopup;
