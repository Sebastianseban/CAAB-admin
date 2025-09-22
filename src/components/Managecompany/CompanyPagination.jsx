import React from "react";
import manageCompanyStore from "../../store/manageCompanyStore";

function CompanyPagination() {
  const {
    currentPage,
    totalPages,
    totalCount,
    pageSize,
    nextPage,
    prevPage,
    setCurrentPage,
    setPageSize,
  } = manageCompanyStore();

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  const handlePageSizeChange = (newSize) => {
    setPageSize(parseInt(newSize));
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`px-3 py-2 mx-1 rounded ${
            i === currentPage
              ? "bg-[#782A99] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
      {/* Results info */}
      <div className="flex items-center gap-4">
        <p className="text-sm text-[#454545b9]">
          Showing {startItem} to {endItem} of {totalCount} companies
        </p>
        
        {/* Page size selector */}
        <select
          value={pageSize}
          onChange={(e) => handlePageSizeChange(e.target.value)}
          className="px-3 py-1 border rounded text-sm"
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
          <option value={50}>50 per page</option>
        </select>
      </div>

      {/* Pagination controls */}
      <div className="flex items-center gap-2">
        <button
          className={`px-4 py-2 rounded bg-gray-300 text-gray-700 ${
            currentPage === 1 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-gray-400"
          }`}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page numbers */}
        <div className="hidden sm:flex">
          {renderPageNumbers()}
        </div>

        {/* Mobile page info */}
        <div className="sm:hidden">
          <span className="px-3 py-2 text-sm text-[#454545b9]">
            Page {currentPage} of {totalPages}
          </span>
        </div>

        <button
          className={`px-4 py-2 rounded bg-gray-300 text-gray-700 ${
            currentPage === totalPages 
              ? "opacity-50 cursor-not-allowed" 
              : "hover:bg-gray-400"
          }`}
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CompanyPagination;
