
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
  const [showAddActFrom,setShowAddActForm] = useState(false)

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

          <div className="flex justify-end pr-7">
        <button
          type="button"
          className="w-56 h-12 bg-gradient-to-r from-[#782A99] to-[#631A78] hover:from-[#631A78] hover:to-[#4e1359] transition rounded-xl text-white font-bold shadow-xl"
          onClick={() => setShowAddActForm(true)}
        >
          + Add Acts
        </button>
      </div>
  { showAddActFrom && (  <AddActForm
        formData={formData}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
        isBtnDisabled={isPending}
        departments={departments}
        onClose={() => setShowAddActForm(false)}
      />)
}
      <div>
        <AddActTable />
      </div>
    </div>
  );
}

export default AddActPage;
