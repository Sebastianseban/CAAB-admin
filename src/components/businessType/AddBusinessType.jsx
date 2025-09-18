

import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addBusinessType,
} from "../../api/businessTypeApi.js.js";
import { useListDepartments } from "../../hooks/useDepartment.js";

function AddBusinessType() {
  const queryClient = useQueryClient();
  const [businessTypeName, setBusinessTypeName] = useState("");
  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Fetch departments - properly destructure the data
  const { data, isLoading, error } = useListDepartments();
  
  // Extract departments array from the API response
  const departments = Array.isArray(data?.departments) ? data.departments : [];

  // Add business type
  const { mutate, isPending } = useMutation({
    mutationFn: addBusinessType,
    onSuccess: (data) => {
      alert(data.message);
      setBusinessTypeName("");
      setSelectedDepartments([]);
      setSelectAll(false);
      queryClient.invalidateQueries({ queryKey: ["businessTypes"] });
    },
  });

  // handle select all
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedDepartments([]);
    } else {
      // Select all department names
      setSelectedDepartments(departments.map(dep => dep.department_name));
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
      alert("Please enter business type name and select at least one department");
      return;
    }
    
    // Send department names as required by your API
    mutate({
      business_type: businessTypeName,
      department_name: selectedDepartments, // Send array of department names
    });
  };

  // Show loading state
  if (isLoading) {
    return <div>Loading departments...</div>;
  }

  // Show error state
  if (error) {
    return <div>Error loading departments: {error.message}</div>;
  }

  // Don't render if no departments
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