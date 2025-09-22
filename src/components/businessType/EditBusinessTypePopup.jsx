

// import { useEffect, useState } from "react";
// import useBusinessTypeStore from "../../store/businessTypeStore";
// import {
//   useBusinessTypeById,
//   useUpdateBusinessType,
// } from "../../hooks/useBusinessType";

// const  EditBusinessTypePopup = ({ departments = [] }) => {
//   const { selectedBusinessTypeId, isEditPopupOpen, closeEditPopup } =
//     useBusinessTypeStore();

//   const { data, isLoading } = useBusinessTypeById(
//     selectedBusinessTypeId,
//     isEditPopupOpen
//   );

//   const { mutate, isPending } = useUpdateBusinessType(selectedBusinessTypeId);

//   const [selectedDepartments, setSelectedDepartments] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);

//   useEffect(() => {
//     if (data) {
//       const depNames = Array.isArray(data.department_name)
//         ? data.department_name.map((name) => name.trim())
//         : [];

//       setSelectedDepartments(depNames);
//       setSelectAll(depNames.length === departments.length);
//     }
//   }, [data, departments]);

//   useEffect(() => {
//     if (!isEditPopupOpen) {
//       setSelectedDepartments([]);
//       setSelectAll(false);
//     }
//   }, [isEditPopupOpen]);

//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedDepartments([]);
//     } else {
//       setSelectedDepartments(departments.map((d) => d.department_name.trim()));
//     }
//     setSelectAll(!selectAll);
//   };

//   const handleDepartmentChange = (depName) => {
//     const trimmed = depName.trim();
//     const updated = selectedDepartments.includes(trimmed)
//       ? selectedDepartments.filter((name) => name !== trimmed)
//       : [...selectedDepartments, trimmed];

//     setSelectedDepartments(updated);
//     setSelectAll(updated.length === departments.length);
//   };

//   if (!isEditPopupOpen) return null;
//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
//       <div className="w-[560px] bg-white rounded-lg">
//         <div className="h-[72px] p-6 bg-blue-600 text-white flex justify-between">
//           <span>Edit Business Type</span>
//           <button onClick={closeEditPopup}>X</button>
//         </div>

//         <div className="p-6">
//           <p className="text-xl font-semibold">{data?.business_type}</p>

//           <div className="flex gap-2 mt-4">
//             <input
//               type="checkbox"
//               checked={selectAll}
//               onChange={handleSelectAll}
//             />
//             <label>Select All</label>
//           </div>

//           <div className="p-4 grid grid-cols-2 gap-4 border rounded-lg mt-4">
//             {departments.map((dep) => (
//               <label key={dep.id} className="flex gap-2">
//                 <input
//                   type="checkbox"
//                   checked={selectedDepartments.includes(dep.department_name.trim())}
//                   onChange={() => handleDepartmentChange(dep.department_name)}
//                 />
//                 {dep.department_name}
//               </label>
//             ))}
//           </div>

//           <button
//             className="w-full mt-6 py-3 bg-purple-700 text-white rounded-lg"
//             disabled={isPending}
//             onClick={() =>
//               mutate(
//                 {
//                   business_type: data.business_type,
//                   department_name: selectedDepartments,
//                 },
//                 { onSuccess: () => closeEditPopup() }
//               )
//             }
//           >
//             {isPending ? "Updating..." : "Update"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditBusinessTypePopup;
import { useEffect, useState } from "react";
import useBusinessTypeStore from "../../store/businessTypeStore";
import {
  useBusinessTypeById,
  useUpdateBusinessType,
} from "../../hooks/useBusinessType";

const EditBusinessTypePopup = ({ departments = [] }) => {
  const { selectedBusinessTypeId, isEditPopupOpen, closeEditPopup } =
    useBusinessTypeStore();

  const { data, isLoading } = useBusinessTypeById(
    selectedBusinessTypeId,
    isEditPopupOpen
  );

  const { mutate, isPending } = useUpdateBusinessType(selectedBusinessTypeId);

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (data) {
      const depNames = Array.isArray(data.department_name)
        ? data.department_name.map((name) => name.trim())
        : [];
      setSelectedDepartments(depNames);
      setSelectAll(depNames.length === departments.length);
    }
  }, [data, departments]);

  useEffect(() => {
    if (!isEditPopupOpen) {
      setSelectedDepartments([]);
      setSelectAll(false);
    }
  }, [isEditPopupOpen]);

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedDepartments([]);
    } else {
      setSelectedDepartments(departments.map((d) => d.department_name.trim()));
    }
    setSelectAll(!selectAll);
  };

  const handleDepartmentChange = (depName) => {
    const trimmed = depName.trim();
    const updated = selectedDepartments.includes(trimmed)
      ? selectedDepartments.filter((name) => name !== trimmed)
      : [...selectedDepartments, trimmed];
    setSelectedDepartments(updated);
    setSelectAll(updated.length === departments.length);
  };

  if (!isEditPopupOpen) return null;
  if (isLoading) return <div className="text-center py-10 text-gray-700">Loading...</div>;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="w-[560px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center h-[72px] px-6 bg-gradient-to-r from-[#3752fa] to-[#6040ba] rounded-t-3xl">
          <h2 className="text-white text-lg font-semibold select-none">
            Edit Business Type
          </h2>
          <button
            onClick={closeEditPopup}
            aria-label="Close edit popup"
            className="text-white text-3xl font-bold rounded-full hover:bg-white/20 w-8 h-8 flex items-center justify-center transition-colors"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-xl font-bold text-gray-800 mb-6 select-text">{data?.business_type}</p>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
              className="w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-purple-500 cursor-pointer"
            />
            <label className="font-medium text-gray-700 select-none cursor-pointer">
              Select All
            </label>
          </div>

          <div className="grid grid-cols-2 gap-4 p-5 border border-gray-300 rounded-xl mt-5 max-h-56 overflow-y-auto bg-[#f9faff]">
            {departments.map((dep) => (
              <label
                key={dep.id}
                className="flex items-center gap-3 cursor-pointer text-gray-700 font-medium select-none"
              >
                <input
                  type="checkbox"
                  checked={selectedDepartments.includes(dep.department_name.trim())}
                  onChange={() => handleDepartmentChange(dep.department_name)}
                  className="w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-purple-500"
                />
                {dep.department_name}
              </label>
            ))}
          </div>

          <button
            onClick={() =>
              mutate(
                {
                  business_type: data.business_type,
                  department_name: selectedDepartments,
                },
                { onSuccess: () => closeEditPopup() }
              )
            }
            disabled={isPending}
            className="mt-8 w-full h-12 rounded-xl bg-gradient-to-r from-[#782A99] to-[#631A78] text-white font-semibold shadow-lg hover:from-[#631A78] hover:to-[#4E1359] transition disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-[#DCC6F7]"
          >
            {isPending ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBusinessTypePopup;
