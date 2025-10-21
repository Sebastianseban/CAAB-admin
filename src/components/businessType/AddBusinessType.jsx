
import React, { useState } from "react";
import { useListDepartments } from "../../hooks/useDepartment.js";
import { useAddBusinessType } from "../../hooks/useBusinessType.js";
import toast from "react-hot-toast";

const AddBusinessType = () => {
  const [businessTypeName, setBusinessTypeName] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const { data, isLoading, error } = useListDepartments();

  const departments = Array.isArray(data?.departments) ? data.departments : [];

  const { mutate, isPending } = useAddBusinessType();

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedDepartments([]);
    } else {
      setSelectedDepartments(departments.map((dep) => dep.department_name));
    }
    setSelectAll(!selectAll);
  };

  const handleDepartmentChange = (departmentName) => {
    const updated = selectedDepartments.includes(departmentName)
      ? selectedDepartments.filter((name) => name !== departmentName)
      : [...selectedDepartments, departmentName];
    setSelectedDepartments(updated);
    setSelectAll(updated.length === departments.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!businessTypeName || selectedDepartments.length === 0) {
      toast.error(
        "Please enter business type name and select at least one department"
      );
      return;
    }
    mutate({
      business_type: businessTypeName,
      department_name: selectedDepartments,
    });
  };

  if (isLoading) {
    return <div>Loading departments...</div>;
  }

  if (error) {
    return <div>Error loading departments: {error.message}</div>;
  }

  if (departments.length === 0) {
    return <div>No departments available</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full  bg-white rounded-3xl shadow-xl p-8">
      <input
        type="text"
        placeholder="Business Type"
        className="w-full h-12 px-4 text-sm font-semibold rounded-xl border border-gray-300 bg-[#F0F3FF] focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] transition placeholder-gray-400"
        value={businessTypeName}
        onChange={(e) => setBusinessTypeName(e.target.value)}
        required
      />
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="selectAll"
          checked={selectAll}
          onChange={handleSelectAll}
          className="w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-purple-500"
        />
        <label htmlFor="selectAll" className="text-gray-700 font-semibold cursor-pointer select-none">
          Select All
        </label>
      </div>
      <div className="max-h-44 overflow-y-auto grid grid-cols-2 gap-4 border border-gray-300 rounded-xl p-4 bg-[#f9faff]">
        {departments.map((dep) => (
          <label key={dep.id} className="flex items-center gap-3 cursor-pointer select-none text-gray-700 font-medium">
            <input
              type="checkbox"
              checked={selectedDepartments.includes(dep.department_name)}
              onChange={() => handleDepartmentChange(dep.department_name)}
              className="w-5 h-5 rounded border-gray-300 focus:ring-2 focus:ring-purple-500"
            />
            {dep.department_name}
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full h-12 rounded-xl bg-gradient-to-r from-[#782A99] to-[#631A78] text-white font-bold shadow-lg hover:from-[#631A78] hover:to-[#4e1359] focus:outline-none focus:ring-4 focus:ring-[#DCC6F7] disabled:opacity-60 disabled:cursor-not-allowed transition"
      >
        {isPending ? "Adding..." : "Add Business Type"}
      </button>
    </form>
  );
};

export default AddBusinessType;
