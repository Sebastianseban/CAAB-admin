

import React from "react";
import { useNavigate } from "react-router-dom";

import CompanyPagination from "./CompanyPagination.jsx";
import manageCompanyStore from "../../store/manageCompanyStore.js";
import { useCompanies } from "../../hooks/useManageCompany.js";

function MangeCompaniesTable() {
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useCompanies();
  const { setSelectedCompanyId } = manageCompanyStore();

  // Handle View Details Click
  const handleViewDetails = (companyId) => {
    setSelectedCompanyId(companyId);
   navigate(`/admin/company-details?id=${companyId}`);
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
          className="mt-2 px-4 py-2 bg-gradient-to-r from-[#782A99] to-[#631A78] hover:from-[#631A78] hover:to-[#4e1359] rounded-xl text-white transition"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  const companies = data?.companies || [];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded-3xl shadow-2xl">
      <h1 className="text-3xl font-extrabold mb-6 text-[#3752fa] drop-shadow-lg select-none">
        Companies List
      </h1>

      <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
        <table className="min-w-full text-sm border-collapse rounded-2xl overflow-hidden">
          <thead className="bg-gradient-to-r from-[#3752fa] via-[#6040ba] to-[#4d78d0] text-white select-none">
            <tr>
              <th className="text-left px-6 py-3 uppercase font-semibold tracking-wide rounded-tl-2xl border-r border-blue-300">ID</th>
              <th className="text-left px-6 py-3 uppercase font-semibold tracking-wide border-r border-blue-300">Company Name</th>
              <th className="text-left px-6 py-3 uppercase font-semibold tracking-wide border-r border-blue-300">UserName</th>
              <th className="text-left px-6 py-3 uppercase font-semibold tracking-wide border-r border-blue-300">Mobile Number</th>
              <th className="text-left px-6 py-3 uppercase font-semibold tracking-wide border-r border-blue-300">Email</th>
              <th className="text-left px-6 py-3 uppercase font-semibold tracking-wide rounded-tr-2xl">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-800 font-normal">
            {companies.length > 0 ? (
              companies.map((company) => (
                <tr
                  key={company.caab_id}
                  className="h-12 bg-white border-b border-gray-300 hover:bg-blue-50 transition"
                >
                  <td className="px-6 py-3">{company.caab_id}</td>
                  <td className="px-6 py-3">{company.company_name}</td>
                  <td className="px-6 py-3">{company.user_name}</td>
                  <td className="px-6 py-3">{company.mobile}</td>
                  <td className="px-6 py-3">{company.email}</td>
                  <td className="px-6 py-3">
                    <button
                      className="text-[#3752fa] border border-[#3752fa] rounded-lg px-4 py-2 font-semibold hover:bg-[#3752faaa] hover:text-white transition"
                      onClick={() => handleViewDetails(company.caab_id)}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-12 text-gray-400 font-semibold select-none">
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

export default MangeCompaniesTable;
