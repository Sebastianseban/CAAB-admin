//     import React from "react";
// import AddBusinessType from "../components/businessType/AddBusinessType";
// import BusinessTypeTable from "../components/businessType/BusinessTypeTable";
// import EditBusinessTypePopup from "../components/businessType/EditBusinessTypePopup";
// import DeleteBusinessTypePopup from "../components/businessType/DeleteBusinessTypePopup";
// // import { useQuery } from "@tanstack/react-query";

// import { useListDepartments } from "../hooks/useDepartment";

// const  AddBusinessTypePage = () => {
//    const { data } = useListDepartments();

//  const departments = Array.isArray(data?.departments) ? data.departments : [];
//   return (
//     <div className="w-full flex flex-col gap-10 p-6 md:p-12  min-h-screen">
//       <AddBusinessType departments={departments} />
//       <BusinessTypeTable />
//       <EditBusinessTypePopup departments={departments} />
//       <DeleteBusinessTypePopup />
//     </div>
//   );
// }

// export default AddBusinessTypePage;

import React from "react";
import AddBusinessType from "../components/businessType/AddBusinessType";
import BusinessTypeTable from "../components/businessType/BusinessTypeTable";
import EditBusinessTypePopup from "../components/businessType/EditBusinessTypePopup";
import DeleteBusinessTypePopup from "../components/businessType/DeleteBusinessTypePopup";
import { useListDepartments } from "../hooks/useDepartment";

const AddBusinessTypePage = () => {
  const { data } = useListDepartments();
  const departments = Array.isArray(data?.departments) ? data.departments : [];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0f2f7] to-[#d6dbf7] p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Add Business Type Form Container */}
      
          <AddBusinessType departments={departments} />
       

        {/* Business Type Table Container */}
        <section className="bg-white rounded-3xl shadow-xl p-6">
          <BusinessTypeTable />
        </section>

        {/* Edit and Delete Popups (overlay and modals) */}
        <EditBusinessTypePopup departments={departments} />
        <DeleteBusinessTypePopup />
      </div>
    </main>
  );
};

export default AddBusinessTypePage;
