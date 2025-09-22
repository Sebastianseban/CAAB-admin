
// import React from "react";
// import useBusinessTypeStore from "../../store/businessTypeStore";
// import { useDeleteBusinessType } from "../../hooks/useBusinessType";

// const DeleteBusinessTypePopup = () => {
//   const { selectedBusinessTypeId, isDeletePopupOpen, closeDeletePopup } =
//     useBusinessTypeStore();

//   const { mutate, isPending } = useDeleteBusinessType();

//   if (!isDeletePopupOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
//       <div className="w-[480px] bg-white rounded-lg">
//         <div className="h-[72px] bg-red-600 text-white flex justify-between p-6">
//           <span>Delete Business Type</span>
//           <button onClick={closeDeletePopup}>X</button>
//         </div>

//         <div className="p-6">
//           <p className="mb-6">
//             Do you really want to delete this business type?
//           </p>
//           <div className="flex gap-4">
//             <button
//               className="w-full py-2 border border-red-600 text-red-600 rounded"
//               disabled={isPending}
//               onClick={() =>
//                 mutate(selectedBusinessTypeId, {
//                   onSuccess: () => closeDeletePopup(),
//                 })
//               }
//             >
//               {isPending ? "Deleting..." : "Delete"}
//             </button>
//             <button
//               className="w-full py-2 bg-red-600 text-white rounded"
//               onClick={closeDeletePopup}
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DeleteBusinessTypePopup;
import React from "react";
import useBusinessTypeStore from "../../store/businessTypeStore";
import { useDeleteBusinessType } from "../../hooks/useBusinessType";

const DeleteBusinessTypePopup = () => {
  const { selectedBusinessTypeId, isDeletePopupOpen, closeDeletePopup } =
    useBusinessTypeStore();

  const { mutate, isPending } = useDeleteBusinessType();

  if (!isDeletePopupOpen) return null;

  const handleDelete = () => {
    mutate(selectedBusinessTypeId, {
      onSuccess: () => closeDeletePopup(),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="w-[480px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 bg-gradient-to-r from-[#d32f2f] to-[#b71c1c] rounded-t-3xl">
          <h2 className="text-white font-bold text-lg select-none">
            Delete Business Type
          </h2>
          <button
            onClick={closeDeletePopup}
            aria-label="Close delete popup"
            className="text-white text-3xl font-bold rounded-full hover:bg-white/20 w-8 h-8 flex items-center justify-center transition"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-center text-gray-800 text-base font-semibold">
          <p className="mb-6">
            Do you really want to delete this business type?
          </p>

          {/* Actions */}
          <div className="flex gap-6 justify-center">
            <button
              onClick={handleDelete}
              disabled={isPending}
              className="w-40 py-2 rounded-xl bg-gradient-to-r from-[#b71c1c] to-[#7f0000] text-white font-semibold shadow-md hover:from-[#7f0000] hover:to-[#4a0000] transition disabled:opacity-60"
            >
              {isPending ? "Deleting..." : "Delete"}
            </button>
            <button
              onClick={closeDeletePopup}
              className="w-40 py-2 rounded-xl border border-red-700 text-red-700 font-semibold hover:bg-red-50 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBusinessTypePopup;
