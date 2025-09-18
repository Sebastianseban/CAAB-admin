import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBusinessTypes } from "../../api/businessTypeApi.js.js";
import useBusinessTypeStore from "../../store/businessTypeStore.js";

function BusinessTypeTable() {
  const { openEditPopup, openDeletePopup } = useBusinessTypeStore();

  const { data: businessTypes = [] } = useQuery({
    queryKey: ["businessTypes"],
    queryFn: fetchBusinessTypes,
  });

  // return (
  //   <table className="w-full border">
  //     <thead className="bg-gray-700 text-white">
  //       <tr>
  //         <th className="px-4 py-2">ID</th>
  //         <th className="px-4 py-2">Business Type</th>
  //         <th className="px-4 py-2">Departments</th>
  //         <th className="px-4 py-2">Actions</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {businessTypes.length > 0 ? (
  //         businessTypes.map((bt, idx) => (
  //           <tr key={bt.id} className="border-b">
  //             <td className="px-4 py-2">{idx + 1}</td>
  //             <td className="px-4 py-2">{bt.business_type}</td>
  //             <td className="px-4 py-2">
  //               {bt.department_name.map((d, i) => (
  //                 <div key={i}>{d}</div>
  //               ))}
  //             </td>
  //             <td className="px-4 py-2 flex gap-4">
  //               <button
  //                 className="text-blue-600"
  //                 onClick={() => openEditPopup(bt.id)}
  //               >
  //                 Edit
  //               </button>
  //               <button
  //                 className="text-red-600"
  //                 onClick={() => openDeletePopup(bt.id)}
  //               >
  //                 Delete
  //               </button>
  //             </td>
  //           </tr>
  //         ))
  //       ) : (
  //         <tr>
  //           <td colSpan={4} className="text-center py-4">
  //             No Business Types Found
  //           </td>
  //         </tr>
  //       )}
  //     </tbody>
  //   </table>
  // );
  return (
 <div className="overflow-x-auto rounded-xl shadow-lg mt-6">
  <table className="min-w-full table-auto rounded-xl">
    <thead>
      <tr className="bg-[#9463d1] text-white">
        <th className="px-6 py-4 text-left font-semibold tracking-wide">ID</th>
        <th className="px-6 py-4 text-left font-semibold tracking-wide">Business Type</th>
        <th className="px-6 py-4 text-left font-semibold tracking-wide">Departments</th>
        <th className="px-6 py-4 text-left font-semibold tracking-wide">Actions</th>
      </tr>
    </thead>
    <tbody>
      {businessTypes.length > 0 ? (
        businessTypes.map((bt, idx) => (
          <tr key={bt.id} className={idx % 2 === 0 ? "bg-white" : "bg-[#f4edfa]"}>
            <td className="px-6 py-3">{idx + 1}</td>
            <td className="px-6 py-3">{bt.business_type}</td>
            <td className="px-6 py-3">
              {bt.department_name.map((d, i) => (
                <div
                  key={i}
                  className="inline-block px-2 py-1 bg-[#f26a91] text-white rounded mr-1 text-xs"
                >
                  {d}
                </div>
              ))}
            </td>
            <td className="px-6 py-3 flex gap-2">
              <button
                className="px-3 py-1 bg-[#5c73e6] text-white rounded hover:bg-[#4053af] transition"
                onClick={() => openEditPopup(bt.id)}
              >
                Edit
              </button>
              <button
                className="px-3 py-1 bg-[#f26a91] text-white rounded hover:bg-[#c94c71] transition"
                onClick={() => openDeletePopup(bt.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4} className="text-center py-8 text-slate-600">
            No Business Types Found
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>

);

}

export default BusinessTypeTable;