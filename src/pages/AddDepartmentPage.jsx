
// import React, { useState } from "react";

// import DepartmentTable from "../components/department/DepartmentTable";
// import { useAddDepartment } from "../hooks/useDepartment";
// import EditDepartmentPopup from "../components/department/EditDepartmentPopup";
// import DeleteDepartmentPopup from "../components/department/DeleteDepartmentPopup";

// const AddDepartmentPage = () => {
//   const [departmentData, setDepartmentData] = useState({
//     departmentName: "",
//     departmentType: "",
//     governmentType: "",
//   });

//   // React Query mutation hook
//   const { mutate: addDepartment, isLoading } = useAddDepartment();

//   // Handle input/select changes
//   const handleOnChange = (event) => {
//     const { name, value } = event.target;
//     setDepartmentData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Handle form submit
//   const handleSubmit = () => {
//     const { departmentName, departmentType, governmentType } = departmentData;

//     if (!departmentName || !departmentType || !governmentType) {
//       alert("Please fill all fields");
//       return;
//     }

//     addDepartment(departmentData, {
//       onSuccess: () => {
//         // Reset form after success
//         setDepartmentData({
//           departmentName: "",
//           departmentType: "",
//           governmentType: "",
//         });
//       },
//       onError: (err) => {
//         console.error("Add Department failed:", err);
//         alert("Failed to add department");
//       },
//     });
//   };

//   return (
//     <div className="w-full flex flex-col gap-10 p-6 md:p-12 bg-[#F7F8FA] min-h-screen">
//       {/* Department Entry Bar */}
//       <div className="flex gap-4 xl:gap-8 pb-10 border-b border-gray-200 bg-white rounded-2xl shadow-sm px-6 py-6 items-center">
//         {/* Department Name */}
//         <input
//           type="text"
//           placeholder="Name of Department"
//           className="w-[160px] lg:w-[200px] xl:w-[261px] h-11 px-4 text-sm font-medium text-[#404753] shadow-sm bg-[#F7F8FA] rounded-xl outline-none border border-gray-300 focus:border-[#782A99] focus:ring-2 focus:ring-[#ebe4f4] transition placeholder:text-gray-400"
//           name="departmentName"
//           value={departmentData.departmentName}
//           onChange={handleOnChange}
//         />

//         {/* Department Type */}
//         <select
//           className="w-[160px] lg:w-[200px] xl:w-[261px] h-11 px-4 text-sm font-medium text-[#404753] bg-[#F7F8FA] rounded-xl outline-none border border-gray-300 focus:border-[#782A99] focus:ring-2 focus:ring-[#ebe4f4] transition"
//           name="departmentType"
//           value={departmentData.departmentType}
//           onChange={handleOnChange}
//         >
//           <option value="" disabled>
//             Department Type
//           </option>
//           <option value="EMP">EMP</option>
//           <option value="NON EMP">NON EMP</option>
//         </select>

//         {/* Government Type */}
//         <select
//           className="w-[160px] lg:w-[200px] xl:w-[261px] h-11 px-4 text-sm font-medium text-[#404753] bg-[#F7F8FA] rounded-xl outline-none border border-gray-300 focus:border-[#782A99] focus:ring-2 focus:ring-[#ebe4f4] transition"
//           name="governmentType"
//           value={departmentData.governmentType}
//           onChange={handleOnChange}
//         >
//           <option value="" disabled>
//             Government Type
//           </option>
//           <option value="Central">Central Government</option>
//           <option value="State">State Government</option>
//         </select>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           disabled={isLoading}
//           className="w-48 h-11 px-6 py-2 text-sm font-bold text-white bg-gradient-to-r from-[#782A99] to-[#631A78] rounded-xl shadow transition hover:bg-[#631A78] focus:ring-2 focus:ring-[#ebe4f4] disabled:opacity-60 disabled:cursor-not-allowed"
//         >
//           {isLoading ? "Adding..." : "ADD DEPARTMENT"}
//         </button>
//       </div>

//       {/* Department Table */}
//       <div className="border bg-white rounded-2xl shadow p-6 text-sm text-gray-700 text-center">
//         <DepartmentTable />
     
//       </div>

//       <EditDepartmentPopup/>
//       <DeleteDepartmentPopup/>


    
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

  const handleSubmit = () => {
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
      {/* Reusable Department Form */}
      <DepartmentForm
        formData={departmentData}
        onChange={handleOnChange}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        buttonLabel="Add Department"
      />

      {/* Department Table */}
      <div className="border bg-white rounded-2xl shadow p-6 text-sm text-gray-700 text-center">
        <DepartmentTable />
      </div>

      {/* Popups */}
      <EditDepartmentPopup />
      <DeleteDepartmentPopup />
    </div>
  );
};

export default AddDepartmentPage;