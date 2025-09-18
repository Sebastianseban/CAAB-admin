import React, { useState } from "react";

import { useListDepartments } from "../../hooks/useDepartment.js";
import { useAddBusinessType } from "../../hooks/useBusinessType.js";
import toast from "react-hot-toast";

const AddBusinessType = () =>  {
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
      // Select all department names
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

    // Send department names as required by your API
    mutate({
      business_type: businessTypeName,
      department_name: selectedDepartments, // Send array of department names
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
    <div className="flex flex-col gap-6 w-full">
      <input
        type="text"
        placeholder="Business Type"
        className="w-[450px] h-10 px-4 py-2 text-sm border rounded-lg"
        value={businessTypeName}
        onChange={(e) => setBusinessTypeName(e.target.value)}
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id="selectAll"
          checked={selectAll}
          onChange={handleSelectAll}
        />
        <label htmlFor="selectAll">Select All</label>
      </div>

      <div className="p-6 grid grid-cols-2 gap-4 border rounded-lg">
        {departments.map((dep) => (
          <label key={dep.id} className="flex gap-2 items-center">
            <input
              type="checkbox"
              checked={selectedDepartments.includes(dep.department_name)}
              onChange={() => handleDepartmentChange(dep.department_name)}
            />
            {dep.department_name}
          </label>
        ))}
      </div>

      <button
        className="w-72 h-10 bg-purple-700 text-white rounded-lg"
        disabled={isPending}
        onClick={handleSubmit}
      >
        {isPending ? "Adding..." : "Add Business Type"}
      </button>
    </div>
  );
}

export default AddBusinessType;
