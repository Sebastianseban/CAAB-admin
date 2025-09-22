import React from "react";
import { useNavigate } from "react-router-dom";


import CompanyPagination from "./CompanyPagination.jsx";
import manageCompanyStore from "../../store/manageCompanyStore.js";
import { useCompanies } from "../../hooks/useManageCompany.js";

function MangeCompaniesTable() {
  const router = useNavigate();
  const { data, isLoading, isError, error } = useCompanies();
  const { setSelectedCompanyId } = manageCompanyStore();

  // Handle View Details Click
  const handleViewDetails = (companyId) => {
    setSelectedCompanyId(companyId);
    router.push(`/admin-dashboard/manage-company/company-details?id=${companyId}`);
  };

  if (isLoading) {
    return (
      <div className="w-full text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#782A99] mx-auto"></div>
        <p className="mt-2 text-gray-600">Loading companies...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full text-center py-8">
        <p className="text-red-500">Error loading companies: {error?.message}</p>
        <button
          className="mt-2 px-4 py-2 bg-[#782A99] text-white rounded-lg"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  const companies = data?.companies || [];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-[#454545b9]">Companies List</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="h-10 text-sm font-semibold text-[#EEF0FA] bg-gradient-to-b from-[#808C9D] to-[#2D3137]">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Company Name</th>
              <th className="px-4 py-2 text-left">UserName</th>
              <th className="px-4 py-2 text-left">Mobile Number</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-[#181C22]">
            {companies.length > 0 ? (
              companies.map((company) => (
                <tr 
                  key={company.caab_id} 
                  className="h-10 bg-white border-[#C0C7D5] border-b-[1px] hover:bg-gray-50"
                >
                  <td className="px-4 py-2">{company.caab_id}</td>
                  <td className="px-4 py-2">{company.company_name}</td>
                  <td className="px-4 py-2">{company.user_name}</td>
                  <td className="px-4 py-2">{company.mobile}</td>
                  <td className="px-4 py-2">{company.email}</td>
                  <td className="px-4 py-2">
                    <button
                      className="text-[#782A99] border-[#782A99] border-2 rounded-lg px-3 py-2 hover:bg-[#782a9982] hover:text-white transition-colors duration-200"
                      onClick={() => handleViewDetails(company.caab_id)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-8 text-gray-500">
                  No companies available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <CompanyPagination />
    </div>
  );
}


export default MangeCompaniesTable