
import React, { useState, useEffect } from "react";
import { useUpdateDepartment, useListDepartments } from "../../hooks/useDepartment";
import { useDepartmentStore } from "../../store/departmentStore";
import DepartmentForm from "./DepartmentForm"; // ✅ import reusable form

const EditDepartmentPopup = () => {
  const {
    selectedDepartmentId,
    isEditDepartmentPopupOpen,
    setIsEditDepartmentPopupOpen,
  } = useDepartmentStore();

  const { data: departments } = useListDepartments();
  const { mutate: updateDepartment, isLoading } = useUpdateDepartment();

  const [formData, setFormData] = useState({
    departmentName: "",
    departmentType: "",
    governmentType: "",
  });

  // Prefill form
  useEffect(() => {
    if (isEditDepartmentPopupOpen && selectedDepartmentId && departments) {
      const dept = departments.find((d) => d.id === selectedDepartmentId);
      if (dept) {
        setFormData({
          departmentName: dept.department_name || "",
          departmentType: dept.department_type || "",
          governmentType: dept.appropriate_govt || "",
        });
      }
    }
  }, [isEditDepartmentPopupOpen, selectedDepartmentId, departments]);

  if (!isEditDepartmentPopupOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    const { departmentName, departmentType, governmentType } = formData;

    if (!departmentName || !departmentType || !governmentType) {
      alert("Please fill all fields");
      return;
    }

    updateDepartment(
      {
        id: selectedDepartmentId,
        updatedData: { departmentName, departmentType, governmentType },
      },
      {
        onSuccess: () => setIsEditDepartmentPopupOpen(false),
        onError: (err) => {
          console.error("Update failed:", err);
          alert("Failed to update department");
        },
      }
    );
  };

  return (
    <div className="w-screen min-h-screen bg-black/40 absolute top-0 left-0 flex justify-center items-center z-50">
      <div className="w-[560px] bg-white rounded-lg">
        {/* Header */}
        <div className="h-[72px] p-6 bg-[#0076D2] rounded-t-lg relative">
          <span className="text-white font-semibold text-xl">Edit Department</span>
          <span
            className="w-5 h-5 rotate-45 flex justify-center items-center text-4xl text-white absolute -top-5 -right-5 cursor-pointer"
            onClick={() => setIsEditDepartmentPopupOpen(false)}
          >
            +
          </span>
        </div>

        {/* Reusable Form */}
        <div className="p-10">
          <DepartmentForm
            formData={formData}
            onChange={handleChange}
            onSubmit={handleUpdate}
            isLoading={isLoading}
            buttonLabel="Update"
          />
        </div>
      </div>
    </div>
  );
};

export default EditDepartmentPopup;
