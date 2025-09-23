import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../api/axiosInstance";
import { useBranches } from "../../hooks/useManageCompany";

function ManageCompany({ companyId }) {
//   const navigate = useNavigate();
  const { data: branches = [], isLoading, isError, error } = useBranches(companyId);
//   const [negativeMarks, setNegativeMarks] = useState({});

  // Fetch negative marks for each branch after branches are loaded
//   useEffect(() => {
//     const fetchNegativeMarks = async () => {
//       if (!branches.length) return;

//       const token = localStorage.getItem("token");
//       const newNegativeMarks = {};

//       await Promise.all(
//         branches.map(async (branch) => {
//           try {
//             const response = await axiosInstance.get(
//               `/admin/gradingDetails/${branch.branch_id}`,
//               {
//                 headers: { Authorization: `Bearer ${token}` },
//               }
//             );
//             newNegativeMarks[branch.branch_id] = response.data?.NegativeCount ?? 0;
//           } catch (err) {
//             console.error(`Error fetching negative mark for ${branch.branch_id}:`, err);
//             newNegativeMarks[branch.branch_id] = 0; // fallback
//           }
//         })
//       );

//       setNegativeMarks(newNegativeMarks);
//     };

//     fetchNegativeMarks();
//   }, [branches]);

  const handleBranchClick = (branchId) => {
    // navigate(`/manage-company/branch-details?id=${branchId}`);
  };

  if (isLoading) {
    return <p className="text-[#224167] text-center">Loading branch details...</p>;
  }

  if (isError) {
    return <p className="text-red-500 text-center">{error?.message || "Failed to load branches."}</p>;
  }

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {branches.length > 0 ? (
        branches.map((branch) => (
          <div
            key={branch.branch_id}
            onClick={() => handleBranchClick(branch.branch_id)}
            className="bg-[#BED7FF] rounded-xl p-6 cursor-pointer hover:shadow-xl transition"
          >
            {/* Header with branch name + negative count */}
            <div className="flex justify-between items-center">
              <h3 className="text-[#224167] font-bold text-lg capitalize">
                {branch.branch_name}
              </h3>
              <span className="bg-[#BA1A1A] text-white rounded-full w-8 h-8 flex justify-center items-center text-sm font-semibold">
                {/* {negativeMarks[branch.branch_id] ?? 0} */}
              </span>
            </div>

            {/* Location */}
            <p className="mt-2 text-sm text-[#224167]">
              {branch.district}/{branch.city}
            </p>

            {/* Admin Info */}
            <div className="mt-4 space-y-1 text-sm text-[#224167]">
              <p><span className="font-semibold">Admin:</span> {branch.branch_admin_name}</p>
              <p><span className="font-semibold">Email:</span> {branch.branch_email}</p>
              <p><span className="font-semibold">Mobile:</span> {branch.branch_mobile_no}</p>
            </div>

            {/* Employee Stats */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-[#224167]">
              <p><span className="font-semibold">Total:</span> {branch.total_employees}</p>
              <p><span className="font-semibold">Female:</span> {branch.no_female}</p>
              <p><span className="font-semibold">Contract:</span> {branch.no_contract}</p>
              <p><span className="font-semibold">Migrant:</span> {branch.no_migrant}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-[#224167] text-center">No branch details available.</p>
      )}
    </div>
    </>
  );
}

export default ManageCompany;
