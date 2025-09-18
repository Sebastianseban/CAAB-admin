
import React, { useState } from "react";
import DepartmentTable from "../components/department/DepartmentTable";
import { useAddDepartment } from "../hooks/useDepartment";
import EditDepartmentPopup from "../components/department/EditDepartmentPopup";
import DeleteDepartmentPopup from "../components/department/DeleteDepartmentPopup";
import DepartmentForm from "../components/department/DepartmentForm";

const AddDepartmentPage = () => {
  const [departmentData, setDepartmentData] = useState({
    departmentName: "",
    departmentType: "",
    governmentType: "",
  });

  const { mutate: addDepartment, isLoading } = useAddDepartment();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setDepartmentData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const { departmentName, departmentType, governmentType } = departmentData;
    if (!departmentName || !departmentType || !governmentType) {
      alert("Please fill all fields");
      return;
    }

    addDepartment(departmentData, {
      onSuccess: () =>
        setDepartmentData({
          departmentName: "",
          departmentType: "",
          governmentType: "",
        }),
      onError: (err) => {
        console.error("Add Department failed:", err);
        alert("Failed to add department");
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-10 p-6 md:p-12 bg-[#F7F8FA] min-h-screen">
    
      <DepartmentForm
        formData={departmentData}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        buttonLabel="Add Department"
      />


      <div className="border bg-white rounded-2xl shadow p-6 text-sm text-gray-700 text-center">
        <DepartmentTable />
      </div>

   
      <EditDepartmentPopup />
      <DeleteDepartmentPopup />
    </div>
  );
};

export default AddDepartmentPage;