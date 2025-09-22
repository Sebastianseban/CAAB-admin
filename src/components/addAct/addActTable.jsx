
// import React from "react";
// import { useActs } from "../../hooks/useAct";

// const AddActTable = () => {
//   // Remove tableRenderToggle - React Query handles cache automatically
//   const { data, isLoading, isError } = useActs();

//   if (isLoading) {
//     return (
//       <div className="w-full text-center py-6 text-gray-600">
//         Loading acts...
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="w-full text-center py-6 text-red-500">
//         Failed to load acts
//       </div>
//     );
//   }

//   // Extract acts array from API response structure
//   const acts = Array.isArray(data?.law) ? data.law : [];

//   if (acts.length === 0) {
//     return (
//       <div className="w-full text-center py-6 text-gray-500">
//         No acts found
//       </div>
//     );
//   }

//   return (
//     <div className="overflow-x-auto rounded-lg shadow bg-white">
//       <table className="min-w-full border border-gray-200 text-sm">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="px-4 py-2 border text-left">Department</th>
//             <th className="px-4 py-2 border text-left">Law</th>
//             <th className="px-4 py-2 border text-left">Act / Rule</th>
//             <th className="px-4 py-2 border text-left">Section</th>
//             <th className="px-4 py-2 border text-left">Penalty</th>
//             <th className="px-4 py-2 border text-left">Due Date</th>
//             <th className="px-4 py-2 border text-left">Alert Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {acts.map((act) => (
//             <tr key={act.id} className="hover:bg-gray-50">
//               <td className="px-4 py-2 border">{act.department_name}</td>
//               <td className="px-4 py-2 border">{act.law}</td>
//               <td className="px-4 py-2 border">{act.act_rule}</td>
//               <td className="px-4 py-2 border">{act.section}</td>
//               <td className="px-4 py-2 border">₹{act.penalty_amount}</td>
//               <td className="px-4 py-2 border">
//                 {new Date(act.due_date).toLocaleDateString()}
//               </td>
//               <td className="px-4 py-2 border">
//                 {new Date(act.alert_date).toLocaleDateString()}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AddActTable;




import React from "react";
import { useActs } from "../../hooks/useAct";

const AddActTable = () => {
  const { data, isLoading, isError } = useActs();

  if (isLoading) {
    return (
      <div className="w-full text-center py-6 text-gray-600">Loading acts...</div>
    );
  }

  if (isError) {
    return (
      <div className="w-full text-center py-6 text-red-500">Failed to load acts</div>
    );
  }

  const acts = Array.isArray(data?.law) ? data.law : [];

  if (acts.length === 0) {
    return (
      <div className="w-full text-center py-6 text-gray-500">No acts found</div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-3xl shadow-lg bg-white border border-gray-200">
      <table className="min-w-full border-collapse text-sm">
        <thead className="bg-gradient-to-r from-[#3752fa] to-[#6040ba] text-white uppercase font-semibold tracking-wide select-none">
          <tr>
            <th className="px-4 py-3 border border-blue-300 text-left">Department</th>
            <th className="px-4 py-3 border border-blue-300 text-left">Law</th>
            <th className="px-4 py-3 border border-blue-300 text-left">Act / Rule</th>
            <th className="px-4 py-3 border border-blue-300 text-left">Section</th>
            <th className="px-4 py-3 border border-blue-300 text-right">Penalty</th>
            <th className="px-4 py-3 border border-blue-300 text-left">Due Date</th>
            <th className="px-4 py-3 border border-blue-300 text-left">Alert Date</th>
          </tr>
        </thead>
        <tbody>
          {acts.map((act) => (
            <tr key={act.id} className="hover:bg-blue-50 transition-colors">
              <td className="border border-gray-300 px-4 py-2">{act.department_name}</td>
              <td className="border border-gray-300 px-4 py-2">{act.law}</td>
              <td className="border border-gray-300 px-4 py-2">{act.act_rule}</td>
              <td className="border border-gray-300 px-4 py-2">{act.section}</td>
              <td className="border border-gray-300 px-4 py-2 text-right">₹{act.penalty_amount}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(act.due_date).toLocaleDateString()}</td>
              <td className="border border-gray-300 px-4 py-2">{new Date(act.alert_date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddActTable;
