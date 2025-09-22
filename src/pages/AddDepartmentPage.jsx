
// import React, { useState } from "react";
// import DepartmentTable from "../components/department/DepartmentTable";
// import { useAddDepartment } from "../hooks/useDepartment";
// import EditDepartmentPopup from "../components/department/EditDepartmentPopup";
// import DeleteDepartmentPopup from "../components/department/DeleteDepartmentPopup";
// import DepartmentForm from "../components/department/DepartmentForm";
// import toast from "react-hot-toast";

// const AddDepartmentPage = () => {
//   const [departmentData, setDepartmentData] = useState({
//     departmentName: "",
//     departmentType: "",
//     governmentType: "",
//   });

//   const { mutate: addDepartment, isLoading } = useAddDepartment();

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setDepartmentData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { departmentName, departmentType, governmentType } = departmentData;
//     if (!departmentName || !departmentType || !governmentType) {
//       toast.error("Please fill all fields");
//       return;
//     }

//     addDepartment(departmentData, {
//       onSuccess: () => {
//         toast.success("Department added successfully!");
//         setDepartmentData({
//           departmentName: "",
//           departmentType: "",
//           governmentType: "",
//         });
//       },
//       onError: (err) => {
//         console.error("Add Department failed:", err);
//         toast.error("Failed to add department");
//       },
//     });
//   };

//   return (
//     <div className="w-full flex flex-col gap-10 p-6 md:p-12 bg-[#F7F8FA] min-h-screen">
//       <DepartmentForm
//         formData={departmentData}
//         onChange={handleOnChange}
//         onSubmit={handleSubmit}
//         isLoading={isLoading}
//         buttonLabel="Add Department"
//       />

//       <div className="border bg-white rounded-2xl shadow p-6 text-sm text-gray-700 text-center">
//         <DepartmentTable />
//       </div>

//       <EditDepartmentPopup />
//       <DeleteDepartmentPopup />
//     </div>
//   );
// };

// export default AddDepartmentPage;
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
    <main className=" w-full bg-gradient-to-b from-[#f0f2f7] to-[#d6dbf7] p-8 md:p-12">
      <div className=" mx-auto">
        {/* Page Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold text-[#3752fa] drop-shadow-sm">Add Department</h1>
          <p className="text-gray-600 mt-1">Manage your departments efficiently with caab</p>
        </header>

        {/* Form Container */}
        <section className="bg-white rounded-3xl shadow-xl p-8 mb-14">
          <DepartmentForm
            formData={departmentData}
            onChange={handleOnChange}
            onSubmit={handleSubmit}
            isLoading={isLoading}
            buttonLabel="Add Department"
          />
        </section>

        {/* Department Table Container */}
        <section className="bg-white rounded-3xl shadow-xl p-6">
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
