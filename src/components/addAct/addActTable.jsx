import React from "react";
import { useActs } from "../../hooks/useAct";

const AddActTable = ({ tableRenderToggle }) => {
  const { data: acts, isLoading, isError } = useActs(tableRenderToggle);

  if (isLoading) {
    return (
      <div className="w-full text-center py-6 text-gray-600">
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

  if (!acts || acts.length === 0) {
    return (
      <div className="w-full text-center py-6 text-gray-500">
        No acts found
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white">
      <table className="min-w-full border border-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Department</th>
            <th className="px-4 py-2 border">Law</th>
            <th className="px-4 py-2 border">Act / Rule</th>
            <th className="px-4 py-2 border">Section</th>
            <th className="px-4 py-2 border">Penalty</th>
            <th className="px-4 py-2 border">Due Date</th>
            <th className="px-4 py-2 border">Alert Date</th>
          </tr>
        </thead>
        <tbody>
          {acts.map((act) => (
            <tr key={act._id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border">{act.department_name}</td>
              <td className="px-4 py-2 border">{act.law}</td>
              <td className="px-4 py-2 border">{act.act_rule}</td>
              <td className="px-4 py-2 border">{act.section}</td>
              <td className="px-4 py-2 border">{act.penalty_amount}</td>
              <td className="px-4 py-2 border">
                {new Date(act.due_date).toLocaleDateString()}
              </td>
              <td className="px-4 py-2 border">
                {new Date(act.alert_date).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddActTable;
