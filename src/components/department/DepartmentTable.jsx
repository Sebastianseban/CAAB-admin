// // "use client";
// // import React from "react";

// // function DepartmentTable({
// //   setSelectedDepartmentId,
// //   setIsEditDepartmentPopupOpen,
// //   setIsDeleteDepartmentPopupOpen,
// // }) {
// //   // Dummy data
// //   const deptData = [
// //     { id: 1, department_name: "HR", department_type: "EMP", appropriate_govt: "Central" },
// //     { id: 2, department_name: "Finance", department_type: "NON EMP", appropriate_govt: "State" },
// //     { id: 3, department_name: "IT", department_type: "EMP", appropriate_govt: "Central" },
// //   ];

// //   return (
// //     <div className="w-full overflow-x-auto">
// //       <table className="w-full border border-gray-300">
// //         <thead className="h-10 text-sm font-semibold text-white bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
// //           <tr>
// //             <th className="px-4 py-2 border border-gray-300">ID</th>
// //             <th className="px-4 py-2 border border-gray-300">Department Name</th>
// //             <th className="px-4 py-2 border border-gray-300">Department Type</th>
// //             <th className="px-4 py-2 border border-gray-300">Government Type</th>
// //             <th className="px-4 py-2 border border-gray-300">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody className="text-sm text-[#181C22]">
// //           {deptData.map((dept, index) => (
// //             <tr key={dept.id} className="bg-white border-b border-gray-300">
// //               <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
// //               <td className="px-4 py-2 border border-gray-300">{dept.department_name}</td>
// //               <td className="px-4 py-2 border border-gray-300">{dept.department_type}</td>
// //               <td className="px-4 py-2 border border-gray-300">{dept.appropriate_govt}</td>
// //               <td className="px-4 py-2 flex gap-4 border border-gray-300">
// //                 <button
// //                   className="text-red-600 font-bold hover:underline"
// //                   onClick={() => {
// //                     setSelectedDepartmentId(dept.id);
// //                     setIsDeleteDepartmentPopupOpen(true);
// //                   }}
// //                 >
// //                   Delete
// //                 </button>
// //                 <button
// //                   className="text-blue-600 font-bold hover:underline"
// //                   onClick={() => {
// //                     setSelectedDepartmentId(dept.id);
// //                     setIsEditDepartmentPopupOpen(true);
// //                   }}
// //                 >
// //                   Edit
// //                 </button>
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }

// // export default DepartmentTable;

// import React from "react";
// import { useListDepartments } from "../../hooks/useDepartment";
// import { useDepartmentStore } from "../../store/departmentStore";


// const DepartmentTable = () => {
//   const { data, isLoading, isError } = useListDepartments();


//  const setSelectedDepartmentId = useDepartmentStore(
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
//     return <p className="text-center text-red-600 py-6">Failed to load departments</p>;
//   }

//   const deptData = data || [];

//   return (
//     <div className="w-full overflow-x-auto">
//       <table className="w-full border border-gray-300">
//         <thead className="h-10 text-sm font-semibold text-white bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
//           <tr>
//             <th className="px-4 py-2 border border-gray-300">ID</th>
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
//                 <td className="px-4 py-2 border border-gray-300">{dept.department_name}</td>
//                 <td className="px-4 py-2 border border-gray-300">{dept.department_type}</td>
//                 <td className="px-4 py-2 border border-gray-300">{dept.appropriate_govt}</td>
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
    return <p className="text-center py-6">Loading departments...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-red-600 py-6">
        Failed to load departments
      </p>
    );
  }

  // ✅ data is already the array
  const deptData = data.departments || [];

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border border-gray-300">
        <thead className="h-10 text-sm font-semibold text-white bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
          <tr>
            <th className="px-4 py-2 border border-gray-300">#</th>
            <th className="px-4 py-2 border border-gray-300">Department Name</th>
            <th className="px-4 py-2 border border-gray-300">Department Type</th>
            <th className="px-4 py-2 border border-gray-300">Government Type</th>
            <th className="px-4 py-2 border border-gray-300">Actions</th>
          </tr>
        </thead>
        <tbody className="text-sm text-[#181C22]">
          {deptData.length > 0 ? (
            deptData.map((dept, index) => (
              <tr key={dept.id} className="bg-white border-b border-gray-300">
                <td className="px-4 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {dept.department_name}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {dept.department_type}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {dept.appropriate_govt}
                </td>
                <td className="px-4 py-2 flex gap-4 border border-gray-300">
                  <button
                    className="text-red-600 font-bold hover:underline"
                    onClick={() => {
                      setSelectedDepartmentId(dept.id);
                      setIsDeleteDepartmentPopupOpen(true);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="text-blue-600 font-bold hover:underline"
                    onClick={() => {
                      setSelectedDepartmentId(dept.id);
                      setIsEditDepartmentPopupOpen(true);
                    }}
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
                className="text-center py-6 text-gray-500 border border-gray-300"
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
