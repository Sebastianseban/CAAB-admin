
import React from "react";
import useBusinessTypeStore from "../../store/businessTypeStore";
import { useDeleteBusinessType } from "../../hooks/useBusinessType";

const DeleteBusinessTypePopup = () => {
  const { selectedBusinessTypeId, isDeletePopupOpen, closeDeletePopup } =
    useBusinessTypeStore();

  const { mutate, isPending } = useDeleteBusinessType();

  if (!isDeletePopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="w-[480px] bg-white rounded-lg">
        <div className="h-[72px] bg-red-600 text-white flex justify-between p-6">
          <span>Delete Business Type</span>
          <button onClick={closeDeletePopup}>X</button>
        </div>

        <div className="p-6">
          <p className="mb-6">
            Do you really want to delete this business type?
          </p>
          <div className="flex gap-4">
            <button
              className="w-full py-2 border border-red-600 text-red-600 rounded"
              disabled={isPending}
              onClick={() =>
                mutate(selectedBusinessTypeId, {
                  onSuccess: () => closeDeletePopup(),
                })
              }
            >
              {isPending ? "Deleting..." : "Delete"}
            </button>
            <button
              className="w-full py-2 bg-red-600 text-white rounded"
              onClick={closeDeletePopup}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteBusinessTypePopup;
