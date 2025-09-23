
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useCompanyById } from "../hooks/useManageCompany";
import ManageCompany from "../components/CompanyDetails/ManageCompany";

const CompanyDetailsPage = () => {
  const [searchParams] = useSearchParams();
  const companyId = searchParams.get("id");

  const { data: companyInfo, isLoading, isError, error } = useCompanyById(companyId);

  if (isLoading)
    return (
      <div className="text-center py-24">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#782A99] mx-auto mb-3"></div>
        <p className="text-gray-500">Loading company details...</p>
      </div>
    );
  if (isError)
    return (
      <p className="text-center py-24 text-red-500 font-semibold">
        Error: {error?.message}
      </p>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7fa] to-[#e6e9f8] py-10 px-2 md:px-0">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-6 select-none ml-3">
        <span className="font-semibold text-[#782A99]">Manage Company</span>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Company Details</span>
      </div>

      <div className="px-4 w-full">
        <div className="bg-white rounded-3xl shadow-2xl border border-[#e6e8ef] px-7 py-9 md:p-12">
          {/* Header */}
          <h1 className="text-3xl text-[#3752fa] font-extrabold mb-7  tracking-tight">
            Company Details
          </h1>

          {/* Status pill, optional */}
          {companyInfo?.status && (
            <span
              className={`inline-block px-4 py-1 text-xs rounded-full font-bold mb-7 mx-auto text-center bg-blue-100 text-blue-700`}
            >
              {companyInfo.status}
            </span>
          )}

          {/* Main info grid */}
          <div >
            {/* Left panel */}
            <div className="flex flex-wrap gap-16">
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-6 bg-gradient-to-b from-[#782A99] to-[#3752fa] rounded-lg" />
                  <h2 className="text-lg font-bold text-[#782A99]">Basic Info</h2>
                </div>
                <div className="pl-4">
                  <InfoRow label="Company Name" value={companyInfo?.company_name} />

                  <InfoRow label="No. of Branches" value={companyInfo?.noOfBranch} />
                  <InfoRow label="Business Type" value={companyInfo?.selectedBusinessType} />
                  <InfoRow label="Employer Category" value={companyInfo?.employer_category} />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-6 bg-gradient-to-b from-[#3752fa] to-[#782A99] rounded-lg" />
                  <h2 className="text-lg font-bold text-[#6040ba]">Account Info</h2>
                </div>
                <div className="pl-4">
                  <InfoRow label="Username" value={companyInfo?.user_name} />
                  <InfoRow label="Email" value={companyInfo?.email} />
                  <InfoRow label="Mobile" value={companyInfo?.mobile} />
             
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
   <div className="flex gap-4 w-full">
       <ManageCompany companyId={companyId}/>
   </div>
    </div>
  );
};

// Helper for label:value
const InfoRow = ({ label, value }) => (
  <div className="mb-2 flex">
    <span className="w-40 text-gray-500 font-medium">{label}:</span>
    <span className="text-gray-700 font-semibold">{value || "-"}</span>
  </div>
);

export default CompanyDetailsPage;
