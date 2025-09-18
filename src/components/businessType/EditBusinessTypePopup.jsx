
// import React, { useEffect, useState } from "react";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import {
//   fetchBusinessTypeById,
//   updateBusinessType,
// } from "../../api/businessTypeApi.js";
// import useBusinessTypeStore from "../../store/businessTypeStore";

// function EditBusinessTypePopup({ departments = [] }) {
//   console.log(departments);
//   const queryClient = useQueryClient();
//   const {
//     selectedBusinessTypeId,
//     isEditPopupOpen,
//     closeEditPopup,
//   } = useBusinessTypeStore();

//   const { data, isLoading } = useQuery({
//     queryKey: ["businessType", selectedBusinessTypeId],
//     queryFn: () => fetchBusinessTypeById(selectedBusinessTypeId),
//     enabled: isEditPopupOpen && !!selectedBusinessTypeId,
//   });

//   const [selectedDepartments, setSelectedDepartments] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);

//   useEffect(() => {
//     if (data) {
//       // Work with department_name array from API response
//       const depNames = Array.isArray(data.department_name)
//         ? data.department_name
//         : [];
      
//       console.log("API returned department_name:", depNames);
      
//       // Trim whitespace from department names to match exactly
//       const trimmedDepNames = depNames.map(name => name.trim());
//       setSelectedDepartments(trimmedDepNames);
//       setSelectAll(trimmedDepNames.length === departments.length);
//     }
//   }, [data, departments]);

//   const { mutate, isPending } = useMutation({
//     mutationFn: (newData) =>
//       updateBusinessType({ id: selectedBusinessTypeId, data: newData }),
//     onSuccess: (res) => {
//       alert(res.message);
//       queryClient.invalidateQueries({ queryKey: ["businessTypes"] });
//       closeEditPopup();
//     },
//   });

//   const handleSelectAll = () => {
//     if (selectAll) {
//       setSelectedDepartments([]);
//     } else {
//       // Select all department names (trimmed to match)
//       setSelectedDepartments(departments.map((d) => d.department_name.trim()));
//     }
//     setSelectAll(!selectAll);
//   };

//   const handleDepartmentChange = (depName) => {
//     const trimmedDepName = depName.trim();
//     const updated = selectedDepartments.includes(trimmedDepName)
//       ? selectedDepartments.filter((name) => name !== trimmedDepName)
//       : [...selectedDepartments, trimmedDepName];
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
//             {Array.isArray(departments) &&
//               departments.map((dep) => (
//                 <label key={dep.id} className="flex gap-2">
//                   <input
//                     type="checkbox"
//                     checked={selectedDepartments.includes(dep.department_name.trim())}
//                     onChange={() => handleDepartmentChange(dep.department_name)}
//                   />
//                   {dep.department_name}
//                 </label>
//               ))}
//           </div>

//           <button
//             className="w-full mt-6 py-3 bg-purple-700 text-white rounded-lg"
//             disabled={isPending}
//             onClick={() =>
//               mutate({
//                 business_type: data.business_type,
//                 department_name: selectedDepartments, // Send department_name array
//               })
//             }
//           >
//             {isPending ? "Updating..." : "Update"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditBusinessTypePopup;import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  fetchBusinessTypeById,
  updateBusinessType,
} from "../../api/businessTypeApi.js";
import useBusinessTypeStore from "../../store/businessTypeStore";
import { useEffect, useState } from "react";

function EditBusinessTypePopup({ departments = [] }) {
  console.log(departments);
  const queryClient = useQueryClient();
  const {
    selectedBusinessTypeId,
    isEditPopupOpen,
    closeEditPopup,
  } = useBusinessTypeStore();

  const { data, isLoading } = useQuery({
    queryKey: ["businessType", selectedBusinessTypeId],
    queryFn: () => fetchBusinessTypeById(selectedBusinessTypeId),
    enabled: isEditPopupOpen && !!selectedBusinessTypeId,
  });

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  useEffect(() => {
    if (data) {
      // Work with department_name array from API response
      const depNames = Array.isArray(data.department_name)
        ? data.department_name
        : [];
      
      console.log("API returned department_name:", depNames);
      
      // Trim whitespace from department names to match exactly
      const trimmedDepNames = depNames.map(name => name.trim());
      setSelectedDepartments(trimmedDepNames);
      setSelectAll(trimmedDepNames.length === departments.length);
    }
  }, [data, departments]);

  // Reset state when popup closes and opens again
  useEffect(() => {
    if (!isEditPopupOpen) {
      setSelectedDepartments([]);
      setSelectAll(false);
    }
  }, [isEditPopupOpen]);

  const { mutate, isPending } = useMutation({
    mutationFn: (newData) =>
      updateBusinessType({ id: selectedBusinessTypeId, data: newData }),
    onSuccess: (res) => {
      alert(res.message);
      // Invalidate both the list and the individual business type
      queryClient.invalidateQueries({ queryKey: ["businessTypes"] });
      queryClient.invalidateQueries({ queryKey: ["businessType", selectedBusinessTypeId] });
      closeEditPopup();
    },
  });

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedDepartments([]);
    } else {
      // Select all department names (trimmed to match)
      setSelectedDepartments(departments.map((d) => d.department_name.trim()));
    }
    setSelectAll(!selectAll);
  };

  const handleDepartmentChange = (depName) => {
    const trimmedDepName = depName.trim();
    const updated = selectedDepartments.includes(trimmedDepName)
      ? selectedDepartments.filter((name) => name !== trimmedDepName)
      : [...selectedDepartments, trimmedDepName];
    setSelectedDepartments(updated);
    setSelectAll(updated.length === departments.length);
  };

  if (!isEditPopupOpen) return null;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="w-[560px] bg-white rounded-lg">
        <div className="h-[72px] p-6 bg-blue-600 text-white flex justify-between">
          <span>Edit Business Type</span>
          <button onClick={closeEditPopup}>X</button>
        </div>

        <div className="p-6">
          <p className="text-xl font-semibold">{data?.business_type}</p>

          <div className="flex gap-2 mt-4">
            <input
              type="checkbox"
              checked={selectAll}
              onChange={handleSelectAll}
            />
            <label>Select All</label>
          </div>

          <div className="p-4 grid grid-cols-2 gap-4 border rounded-lg mt-4">
            {Array.isArray(departments) &&
              departments.map((dep) => (
                <label key={dep.id} className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDepartments.includes(dep.department_name.trim())}
                    onChange={() => handleDepartmentChange(dep.department_name)}
                  />
                  {dep.department_name}
                </label>
              ))}
          </div>

          <button
            className="w-full mt-6 py-3 bg-purple-700 text-white rounded-lg"
            disabled={isPending}
            onClick={() =>
              mutate({
                business_type: data.business_type,
                department_name: selectedDepartments, // Send department_name array
              })
            }
          >
            {isPending ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditBusinessTypePopup;