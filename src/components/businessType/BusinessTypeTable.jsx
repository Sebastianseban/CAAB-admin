
// import React, { useState } from "react";
// import useBusinessTypeStore from "../../store/businessTypeStore.js";
// import { useBusinessTypes } from "../../hooks/useBusinessType.js";

// const BusinessTypeTable = () => {
//   const { openEditPopup, openDeletePopup } = useBusinessTypeStore();
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const { data, isLoading, error } = useBusinessTypes(currentPage, itemsPerPage);
//   const businessTypes = data?.businessType || [];
//   const totalPages = data?.totalPages || 1;

//   const parseDepartments = (str) => {
//     if (!str) return [];
//     return str.replace(/^\[|\]$/g, "").split(",").map(d => d.trim());
//   };

//   if (isLoading) {
//     return <div className="text-gray-600 py-6 text-center">Loading business types...</div>;
//   }

//   if (error) {
//     return <div className="text-red-500 py-6 text-center">Error loading business types: {error.message}</div>;
//   }

//   return (
//     <div className="overflow-x-auto rounded-3xl shadow-2xl bg-white mt-6 border border-gray-200">
//       <table className="min-w-full table-auto rounded-3xl overflow-hidden">
//         <thead>
//           <tr className="bg-gradient-to-r from-[#3752fa] via-[#6040ba] to-[#4d78d0] text-white select-none">
//             <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm border-r border-blue-500">ID</th>
//             <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm border-r border-blue-500">Business Type</th>
//             <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm border-r border-blue-500">Departments</th>
//             <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {businessTypes.length > 0 ? (
//             businessTypes.map((bt, idx) => {
//               const departments = parseDepartments(bt.department_name);
//               return (
//                 <tr key={bt.id} className={idx % 2 === 0 ? "bg-white" : "bg-[#f3eaff]"}>
//                   <td className="px-6 py-3 border-r border-gray-100">{(currentPage - 1) * itemsPerPage + idx + 1}</td>
//                   <td className="px-6 py-3 border-r border-gray-100">{bt.business_type}</td>
//                   <td className="px-6 py-3 border-r border-gray-100">
//                     {departments.map((d, i) => (
//                       <span
//                         key={i}
//                         className="inline-block px-3 py-1 bg-[#f26a91] text-white rounded-full mr-2 text-xs font-semibold"
//                       >
//                         {d}
//                       </span>
//                     ))}
//                   </td>
//                   <td className="px-6 py-3 flex gap-3">
//                     <button
//                       className="px-4 py-1 bg-[#5c73e6] text-white rounded-lg hover:bg-[#4053af] transition-shadow shadow-md"
//                       onClick={() => openEditPopup(bt.id)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="px-4 py-1 bg-[#f26a91] text-white rounded-lg hover:bg-[#c94c71] transition-shadow shadow-md"
//                       onClick={() => openDeletePopup(bt.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })
//           ) : (
//             <tr>
//               <td colSpan={4} className="text-center py-12 text-gray-500 font-semibold">
//                 No Business Types Found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* Pagination Controls */}
//       <div className="flex justify-center gap-2 mt-4">
//         <button
//           className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//           onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//         >
//           Prev
//         </button>
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             className={`px-3 py-1 rounded ${currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
//             onClick={() => setCurrentPage(i + 1)}
//           >
//             {i + 1}
//           </button>
//         ))}
//         <button
//           className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
//           onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BusinessTypeTable;
"use client";
import React, { useState } from "react";
import useBusinessTypeStore from "../../store/businessTypeStore.js";
import { useBusinessTypes } from "../../hooks/useBusinessType.js";

const BusinessTypeTable = () => {
  const { openEditPopup, openDeletePopup } = useBusinessTypeStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data, isLoading, error } = useBusinessTypes(currentPage, itemsPerPage);
  const businessTypes = data?.businessType || [];
  const totalPages = data?.totalPages || 1;

  // ✅ Handles both array and string department_name formats safely
  const parseDepartments = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;
    if (typeof value === "string") {
      return value
        .replace(/^\[|\]$/g, "")
        .split(",")
        .map((d) => d.trim())
        .filter(Boolean);
    }
    return [];
  };

  if (isLoading) {
    return (
      <div className="text-gray-600 py-6 text-center animate-pulse">
        Loading business types...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 py-6 text-center">
        Error loading business types: {error.message}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl shadow-2xl bg-white mt-6 border border-gray-200 transition-all duration-300 hover:shadow-3xl">
      <table className="min-w-full table-auto rounded-3xl overflow-hidden">
        <thead>
          <tr className="bg-[#224167] text-white select-none">
            <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm border-r border-blue-500">
              ID
            </th>
            <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm border-r border-blue-500">
              Business Type
            </th>
            <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm border-r border-blue-500">
              Departments
            </th>
            <th className="px-6 py-4 text-left font-semibold tracking-wide uppercase text-sm">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {businessTypes.length > 0 ? (
            businessTypes.map((bt, idx) => {
              const departments = parseDepartments(bt.department_name);
              return (
                <tr
                  key={bt.id}
                  className={`transition-all duration-200 hover:bg-[#eef2ff] ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#f9f6ff]"
                  }`}
                >
                  <td className="px-6 py-3 border-r border-gray-100 text-gray-700 font-medium">
                    {(currentPage - 1) * itemsPerPage + idx + 1}
                  </td>
                  <td className="px-6 py-3 border-r border-gray-100 text-gray-800 font-semibold">
                    {bt.business_type}
                  </td>
                  <td className="px-6 py-3 border-r border-gray-100">
                    {departments.map((d, i) => (
                      <span
                        key={i}
                        className="inline-block px-3 py-1 bg-[#5c73e6] text-white rounded-full mr-2 mb-2 text-xs font-semibold shadow-sm"
                      >
                        {d}
                      </span>
                    ))}
                  </td>
                  <td className="px-6 py-3 flex flex-wrap gap-3">
                    <button
                      className="px-4 py-1 bg-[#5c73e6] text-white rounded-lg hover:bg-[#4053af] transition-all shadow-md hover:scale-105"
                      onClick={() => openEditPopup(bt.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="px-4 py-1 bg-[#f26a91] text-white rounded-lg hover:bg-[#c94c71] transition-all shadow-md hover:scale-105"
                      onClick={() => openDeletePopup(bt.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td
                colSpan={4}
                className="text-center py-12 text-gray-500 font-semibold"
              >
                No Business Types Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center gap-2 mt-4 pb-4">
        <button
          className={`px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded font-medium ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className={`px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessTypeTable;
