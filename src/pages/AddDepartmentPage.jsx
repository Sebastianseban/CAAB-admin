import React, { useState } from "react";
import DepartmentTable from "../components/department/DepartmentTable";
import { useAddDepartment } from "../hooks/useDepartment";
import EditDepartmentPopup from "../components/department/EditDepartmentPopup";
import DeleteDepartmentPopup from "../components/department/DeleteDepartmentPopup";
import DepartmentForm from "../components/department/DepartmentForm";
import toast from "react-hot-toast";

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
      toast.error("Please fill all fields");
      return;
    }

    addDepartment(departmentData, {
      onSuccess: () => {
        toast.success("Department added successfully!");
        setDepartmentData({
          departmentName: "",
          departmentType: "",
          governmentType: "",
        });
      },
      onError: (err) => {
        console.error("Add Department failed:", err);
        toast.error("Failed to add department");
      },
    });
  };

  return (
    <main className=" w-full min-h-screen bg-white p-8 md:p-10">
      <div className=" mx-auto">
        {/* Page Header */}

        {/* Form Container */}
        <section className="mb-8" >
          <DepartmentForm
            formData={departmentData}
            onChange={handleOnChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            buttonLabel="Add Department"
          />
        </section>

        {/* Department Table Container */}
        <section>
          <DepartmentTable />
        </section>

        {/* Popups */}
        <EditDepartmentPopup />
        <DeleteDepartmentPopup />
      </div>
    </main>
  );
};

export default AddDepartmentPage;
