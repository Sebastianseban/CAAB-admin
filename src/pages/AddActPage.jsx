"use client";
import React, { useState } from "react";
import AddActForm from "../components/addAct/addActForm";
import { useAddLaw, useDepartments } from "../hooks/useAct";
import AddActTable from "../components/addAct/addActTable";

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

  const [tableRenderToggle, setTableRenderToggle] = useState(false);

  // Fetch departments
  const { data: departments, isLoading: depLoading } = useDepartments();

  // Add law mutation
  const { mutate: addLaw, isPending } = useAddLaw();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { departmentName, law, actRule, section, penaltyAmount, dueDate, alertDate } =
      formData;

    if (!departmentName || !law || !actRule || !section || !penaltyAmount || !dueDate || !alertDate) {
      alert("Enter all required fields");
      return;
    }

    addLaw(formData, {
      onSuccess: (res) => {
        alert(res.message || "Law added successfully");
        setFormData({
          departmentName: "",
          law: "",
          actRule: "",
          section: "",
          penaltyAmount: "",
          dueDate: "",
          alertDate: "",
        });
        setTableRenderToggle((prev) => !prev);
      },
      onError: () => {
        alert("Failed to add law");
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-10 p-6">
      <AddActForm
        formData={formData}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
        isBtnDisabled={isPending}
        departments={departments || []}
      />

      <div>
        <AddActTable tableRenderToggle={tableRenderToggle} />
      </div>
    </div>
  );
}

export default AddActPage;
