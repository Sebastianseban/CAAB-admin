    import React from "react";
import AddBusinessType from "../components/businessType/AddBusinessType";
import BusinessTypeTable from "../components/businessType/BusinessTypeTable";
import EditBusinessTypePopup from "../components/businessType/EditBusinessTypePopup";
import DeleteBusinessTypePopup from "../components/businessType/DeleteBusinessTypePopup";
// import { useQuery } from "@tanstack/react-query";

import { useListDepartments } from "../hooks/useDepartment";

const  AddBusinessTypePage = () => {
   const { data } = useListDepartments();

 const departments = Array.isArray(data?.departments) ? data.departments : [];
  return (
    <div className="w-full flex flex-col gap-10 p-6 md:p-12  min-h-screen">
      <AddBusinessType departments={departments} />
      <BusinessTypeTable />
      <EditBusinessTypePopup departments={departments} />
      <DeleteBusinessTypePopup />
    </div>
  );
}

export default AddBusinessTypePage;