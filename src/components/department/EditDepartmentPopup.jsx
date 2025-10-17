
import React, { useState, useEffect } from "react";
import { useUpdateDepartment, useListDepartments } from "../../hooks/useDepartment";
import { useDepartmentStore } from "../../store/departmentStore";
import DepartmentForm from "./DepartmentForm";

const EditDepartmentPopup = () => {
  const {
    selectedDepartmentId,
    isEditDepartmentPopupOpen,
    setIsEditDepartmentPopupOpen,
  } = useDepartmentStore();

  const { data } = useListDepartments();
  const { mutate: updateDepartment, isLoading } = useUpdateDepartment();

  const [formData, setFormData] = useState({
    departmentName: "",
    departmentType: "",
    governmentType: "",
  });

  const deptData = data?.departments || [];

  useEffect(() => {
    if (isEditDepartmentPopupOpen && selectedDepartmentId && deptData.length > 0) {
      const dept = deptData.find(
        (d) => d.id === selectedDepartmentId || d.Id === selectedDepartmentId
      );
      if (dept) {
        setFormData({
          departmentName: dept.department_name || "",
          departmentType: dept.department_type || "",
          governmentType: dept.appropriate_govt || "",
        });
      }
    }
  }, [isEditDepartmentPopupOpen, selectedDepartmentId, deptData]);

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
        updatedData: {
          departmentName,
          departmentType,
          governmentType,
        },
      },
      {
        onSuccess: () => {
          setIsEditDepartmentPopupOpen(false);
        },
        onError: (err) => {
          console.error("Update failed:", err);
          alert("Failed to update department");
        },
      }
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity">
      <div className="w-[560px] bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="relative h-[72px] bg-[#224167] px-6 flex items-center rounded-t-3xl">
          <h2 className="text-white font-semibold text-xl flex-1 select-none">Edit Department</h2>
          <button
            onClick={() => setIsEditDepartmentPopupOpen(false)}
            aria-label="Close edit popup"
            className="w-8 h-8 text-white text-3xl rotate-45 leading-none font-bold cursor-pointer flex justify-center items-center rounded-full hover:bg-white/20 transition"
          >
            +
          </button>
        </div>

        {/* Form */}
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
