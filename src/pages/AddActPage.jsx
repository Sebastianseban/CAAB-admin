
"use client";
import React, { useState } from "react";
import AddActForm from "../components/addAct/addActForm";
import { useAddLaw } from "../hooks/useAct";
import { useListDepartments } from "../hooks/useDepartment";
import AddActTable from "../components/addAct/addActTable";
import toast from "react-hot-toast";

function AddActPage() {
  const [formData, setFormData] = useState({
    departmentName: "",
    law: "",
    actRule: "",
    section: "",
    penaltyAmount: "",
    dueDate: "",
    alertDate: "",
  });

  // Fetch departments with proper error handling
  const { data: departmentData, isLoading: depLoading } = useListDepartments();
  const departments = Array.isArray(departmentData?.departments) ? departmentData.departments : [];

  // Add law mutation
  const { mutate: addLaw, isPending } = useAddLaw();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { departmentName, law, actRule, section, penaltyAmount, dueDate, alertDate } = formData;

    if (!departmentName || !law || !actRule || !section || !penaltyAmount || !dueDate || !alertDate) {
      toast.error("Enter all required fields");
      return;
    }

    addLaw(formData, {
      onSuccess: (res) => {
        toast.success(res.message || "Law added successfully");
        setFormData({
          departmentName: "",
          law: "",
          actRule: "",
          section: "",
          penaltyAmount: "",
          dueDate: "",
          alertDate: "",
        });
        // No need for tableRenderToggle - React Query will handle cache invalidation
      },
      onError: () => {
        toast.error("Failed to add law");
      },
    });
  };

  if (depLoading) {
    return <div>Loading departments...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-10 p-6">
      <AddActForm
        formData={formData}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
        isBtnDisabled={isPending}
        departments={departments}
      />

      <div>
        <AddActTable />
      </div>
    </div>
  );
}

export default AddActPage;
