
import React from "react";
import { useBranches } from "../../hooks/useManageCompany";

function ManageCompany({ companyId }) {
  const { data: branches = [], isLoading, isError, error } = useBranches(companyId);

  // const handleBranchClick = (branchId) => {
  //   // navigate(`/manage-company/branch-details?id=${branchId}`);
  // };

  if (isLoading) {
    return (
      <div className="text-center py-24">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#782A99] mx-auto mb-3"></div>
        <p className="text-[#3752fa]">Loading branch details...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-red-500 font-semibold py-24">
        {error?.message || "Failed to load branches."}
      </p>
    );
  }

  return (
    <div className="px-4 w-full md:px-0 py-8 min-h-screen bg-gradient-to-b ">
      <div className="mx-4 max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {branches.length > 0 ? (
          branches.map((branch) => (
            <div
              key={branch.branch_id}
              // onClick={() => handleBranchClick(branch.branch_id)}
              className="relative bg-white rounded-3xl border border-gray-100 shadow-xl p-7 cursor-pointer hover:shadow-2xl group transition-all duration-200"
            >
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-[#3752fa] font-bold text-xl capitalize tracking-tight">
                  {branch.branch_name}
                </h3>
                <span className="bg-gradient-to-tr from-[#f26a91] to-[#d22c5e] shadow-md text-white rounded-full w-9 h-9 flex justify-center items-center text-sm font-extrabold border-2 border-white group-hover:border-[#d22c5e] transition">
                  {/* {negativeMarks[branch.branch_id] ?? 0} */}
                  {/* Example badge with a zero */}
                  {branch.branch_id}
                </span>
              </div>

              <div className="mb-3 text-[#556787] text-sm font-medium">
                <span className="inline-block px-2 bg-[#eaf1fe] rounded-full mr-2">
                  {branch.district}
                </span>
                /
                <span className="inline-block px-2 bg-[#eaf1fe] rounded-full ml-2">
                  {branch.city}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-xs font-semibold text-[#782A99] mb-2">Admin</div>
                <div className="space-y-0.5 text-[#374052] text-sm">
                  <p>
                    <span className="font-bold">Name:</span>{" "}
                    {branch.branch_admin_name}
                  </p>
                  <p>
                    <span className="font-bold">Email:</span>{" "}
                    {branch.branch_email}
                  </p>
                  <p>
                    <span className="font-bold">Mobile:</span>{" "}
                    {branch.branch_mobile_no}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 pb-1">
                <Stats label="Total" value={branch.total_employees} color="blue" />
                <Stats label="Female" value={branch.no_female} color="purple" />
                <Stats label="Contract" value={branch.no_contract} color="green" />
                <Stats label="Migrant" value={branch.no_migrant} color="rose" />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-[#3752fa] text-lg font-semibold">
            No branch details available.
          </div>
        )}
      </div>
    </div>
  );
}

// Helper component for stats badges
function Stats({ label, value, color }) {
  const colors = {
    blue: "bg-[#e3edfc] text-[#406be2]",
    purple: "bg-[#f2eafd] text-[#782A99]",
    green: "bg-[#e7fbe7] text-[#1bbc72]",
    rose: "bg-[#ffe4ec] text-[#d22c5e]"
  };
  return (
    <div className={`rounded-lg py-2 px-3 text-center text-xs font-bold ${colors[color]} shadow-sm`}>
      {label}: <span className="inline-block">{value ?? "-"}</span>
    </div>
  );
}

export default ManageCompany;
