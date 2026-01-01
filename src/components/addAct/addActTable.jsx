

  // import React from "react";
  // import { useActs } from "../../hooks/useAct";

  // const AddActTable = () => {
  //   const { data, isLoading, isError } = useActs();

  //   if (isLoading) {
  //     return (
  //       <div className="w-full text-center py-6 text-gray-600">Loading acts...</div>
  //     );
  //   }

  //   if (isError) {
  //     return (
  //       <div className="w-full text-center py-6 text-red-500">Failed to load acts</div>
  //     );
  //   }

  //   const acts = Array.isArray(data?.law) ? data.law : [];

  //   if (acts.length === 0) {
  //     return (
  //       <div className="w-full text-center py-6 text-gray-500">No acts found</div>
  //     );
  //   }

  //   return (
  //     <div className="overflow-x-auto rounded-3xl shadow-lg bg-white border border-gray-200">
  //       <table className="min-w-full border-collapse text-sm">
  //         <thead className="bg-[#224167] text-white uppercase font-semibold tracking-wide select-none">
  //           <tr>
  //             <th className="px-4 py-3 border border-blue-300 text-left">Department</th>
  //             <th className="px-4 py-3 border border-blue-300 text-left">Law</th>
  //             <th className="px-4 py-3 border border-blue-300 text-left">Act / Rule</th>
  //             <th className="px-4 py-3 border border-blue-300 text-left">Section</th>
  //             <th className="px-4 py-3 border border-blue-300 text-right">Penalty</th>
  //             <th className="px-4 py-3 border border-blue-300 text-left">Due Date</th>
  //             <th className="px-4 py-3 border border-blue-300 text-left">Alert Date</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {acts.map((act) => (
  //             <tr key={act.id} className="hover:bg-blue-50 transition-colors">
  //               <td className="border border-gray-300 px-4 py-2">{act.department_name}</td>
  //               <td className="border border-gray-300 px-4 py-2">{act.law}</td>
  //               <td className="border border-gray-300 px-4 py-2">{act.act_rule}</td>
  //               <td className="border border-gray-300 px-4 py-2">{act.section}</td>
  //               <td className="border border-gray-300 px-4 py-2 text-right">₹{act.penalty_amount}</td>
  //               <td className="border border-gray-300 px-4 py-2">{new Date(act.due_date).toLocaleDateString()}</td>
  //               <td className="border border-gray-300 px-4 py-2">{new Date(act.alert_date).toLocaleDateString()}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
  // };

  // export default AddActTable;
import React, { useState } from "react";
import { useActs } from "../../hooks/useAct";

const AddActTable = () => {
  const { data, isLoading, isError } = useActs();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (isLoading) {
    return (
      <div className="w-full text-center py-6 text-gray-600 animate-pulse">
        Loading acts...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full text-center py-6 text-red-500">
        Failed to load acts
      </div>
    );
  }

  const acts = Array.isArray(data?.law) ? data.law : [];
  const totalPages = Math.ceil(acts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentActs = acts.slice(startIndex, startIndex + itemsPerPage);

  if (acts.length === 0) {
    return (
      <div className="w-full text-center py-6 text-gray-500">No acts found</div>
    );
  }

  // Safe date formatting
  const formatDate = (dateString) => {
    if (!dateString) return "—";
    const date = new Date(dateString);
    return isNaN(date) ? "—" : date.toLocaleDateString();
  };

  return (
    <div className="p-6 bg-white shadow-2xl rounded-3xl border border-gray-200 overflow-x-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-[#224167] text-white uppercase font-semibold tracking-wide select-none">
          <tr>
            <th className="px-4 py-3 border border-blue-400 text-left">
              Department
            </th>
            <th className="px-4 py-3 border border-blue-400 text-left">Law</th>
            <th className="px-4 py-3 border border-blue-400 text-left">
              Act / Rule
            </th>
            <th className="px-4 py-3 border border-blue-400 text-left">
              Section
            </th>
            <th className="px-4 py-3 border border-blue-400 text-right">
              Penalty
            </th>
            <th className="px-4 py-3 border border-blue-400 text-left">
              Due Date
            </th>
            <th className="px-4 py-3 border border-blue-400 text-left">
              Alert Date
            </th>
          </tr>
        </thead>
        <tbody>
          {currentActs.map((act, idx) => (
            <tr
              key={act.id || idx}
              className={`transition-colors ${
                idx % 2 === 0 ? "bg-white" : "bg-[#f3eaff]"
              } hover:bg-blue-50`}
            >
              <td className="border border-gray-200 px-4 py-2">
                {act.department_name || "—"}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {act.law || "—"}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {act.act_rule || "—"}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {act.section || "—"}
              </td>
              <td className="border border-gray-200 px-4 py-2 text-right">
                {act.penalty_amount
                  ? `₹${Number(act.penalty_amount).toLocaleString()}`
                  : "—"}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {formatDate(act.due_date)}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                {formatDate(act.alert_date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3 mt-6">
        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-lg text-sm font-medium ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AddActTable;
