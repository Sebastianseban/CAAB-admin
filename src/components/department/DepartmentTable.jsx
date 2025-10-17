
// import React from "react";
// import { useListDepartments } from "../../hooks/useDepartment";
// import { useDepartmentStore } from "../../store/departmentStore";

// const DepartmentTable = () => {
//   const { data, isLoading, isError } = useListDepartments();

//   const setSelectedDepartmentId = useDepartmentStore(
//     (state) => state.setSelectedDepartmentId
//   );
//   const setIsDeleteDepartmentPopupOpen = useDepartmentStore(
//     (state) => state.setIsDeleteDepartmentPopupOpen
//   );
//   const setIsEditDepartmentPopupOpen = useDepartmentStore(
//     (state) => state.setIsEditDepartmentPopupOpen
//   );

//   if (isLoading) {
//     return <p className="text-center py-6">Loading departments...</p>;
//   }

//   if (isError) {
//     return (
//       <p className="text-center text-red-600 py-6">
//         Failed to load departments
//       </p>
//     );
//   }

//   // ✅ data is already the array
//   const deptData = data.departments || [];

//   return (
//     <div className="w-full overflow-x-auto">
//       <table className="w-full border border-gray-300">
//         <thead className="h-10 text-sm font-semibold text-white bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//           <tr>
//             <th className="px-4 py-2 border border-gray-300">#</th>
//             <th className="px-4 py-2 border border-gray-300">Department Name</th>
//             <th className="px-4 py-2 border border-gray-300">Department Type</th>
//             <th className="px-4 py-2 border border-gray-300">Government Type</th>
//             <th className="px-4 py-2 border border-gray-300">Actions</th>
//           </tr>
//         </thead>
//         <tbody className="text-sm text-[#181C22]">
//           {deptData.length > 0 ? (
//             deptData.map((dept, index) => (
//               <tr key={dept.id} className="bg-white border-b border-gray-300">
//                 <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {dept.department_name}
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {dept.department_type}
//                 </td>
//                 <td className="px-4 py-2 border border-gray-300">
//                   {dept.appropriate_govt}
//                 </td>
//                 <td className="px-4 py-2 flex gap-4 border border-gray-300">
//                   <button
//                     className="text-red-600 font-bold hover:underline"
//                     onClick={() => {
//                       setSelectedDepartmentId(dept.id);
//                       setIsDeleteDepartmentPopupOpen(true);
//                     }}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="text-blue-600 font-bold hover:underline"
//                     onClick={() => {
//                       setSelectedDepartmentId(dept.id);
//                       setIsEditDepartmentPopupOpen(true);
//                     }}
//                   >
//                     Edit
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td
//                 colSpan={5}
//                 className="text-center py-6 text-gray-500 border border-gray-300"
//               >
//                 No departments found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DepartmentTable;
import React from "react";
import { useListDepartments } from "../../hooks/useDepartment";
import { useDepartmentStore } from "../../store/departmentStore";

const DepartmentTable = () => {
  const { data, isLoading, isError } = useListDepartments();

  const setSelectedDepartmentId = useDepartmentStore(
    (state) => state.setSelectedDepartmentId
  );
  const setIsDeleteDepartmentPopupOpen = useDepartmentStore(
    (state) => state.setIsDeleteDepartmentPopupOpen
  );
  const setIsEditDepartmentPopupOpen = useDepartmentStore(
    (state) => state.setIsEditDepartmentPopupOpen
  );

  if (isLoading) {
    return <p className="text-center py-6 text-gray-500">Loading departments...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-600 py-6">
        Failed to load departments
      </p>
    );
  }

  const deptData = data.departments || [];

  return (
    <div className="w-full overflow-x-auto rounded-2xl shadow-lg border border-gray-200 bg-white">
      <table className="min-w-full border-collapse rounded-2xl overflow-hidden">
        <thead className="bg-[#224167] text-white">
          <tr>
            <th className="text-left px-6 py-3 uppercase font-semibold text-sm border-b border-blue-300">#</th>
            <th className="text-left px-6 py-3 uppercase font-semibold text-sm border-b border-blue-300">Department Name</th>
            <th className="text-left px-6 py-3 uppercase font-semibold text-sm border-b border-blue-300">Department Type</th>
            <th className="text-left px-6 py-3 uppercase font-semibold text-sm border-b border-blue-300">Government Type</th>
            <th className="text-center px-6 py-3 uppercase font-semibold text-sm border-b border-blue-300">Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-800">
          {deptData.length > 0 ? (
            deptData.map((dept, index) => (
              <tr
                key={dept.id}
                className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
              >
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dept.department_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dept.department_type}</td>
                <td className="px-6 py-4 whitespace-nowrap">{dept.appropriate_govt}</td>
                <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-6">
                  <button
                    onClick={() => {
                      setSelectedDepartmentId(dept.id);
                      setIsDeleteDepartmentPopupOpen(true);
                    }}
                    className="text-red-600 hover:text-red-800 font-semibold rounded-lg transition"
                    aria-label={`Delete ${dept.department_name}`}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setSelectedDepartmentId(dept.id);
                      setIsEditDepartmentPopupOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-semibold rounded-lg transition"
                    aria-label={`Edit ${dept.department_name}`}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={5}
                className="text-center py-10 text-gray-400 font-semibold"
              >
                No departments found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
