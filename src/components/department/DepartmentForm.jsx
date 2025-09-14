import React from "react";

const DepartmentForm = ({
  formData,
  onChange,
  onSubmit,
  isLoading,
  buttonLabel,
}) => {
  return (
    <div className="flex flex-wrap gap-4 xl:gap-8 pb-10 border-b border-gray-200 bg-white rounded-2xl shadow-sm px-6 py-6 items-center">
      {/* Department Name */}
      <input
        type="text"
        name="departmentName"
        placeholder="Name of Department"
        value={formData.departmentName}
        onChange={onChange}
        className="w-[160px] lg:w-[200px] xl:w-[261px] h-11 px-4 text-sm font-medium text-[#404753] 
                   shadow-sm bg-[#F7F8FA] rounded-xl outline-none border border-gray-300 
                   focus:border-[#782A99] focus:ring-2 focus:ring-[#ebe4f4] transition 
                   placeholder:text-gray-400"
      />

      {/* Department Type */}
      <select
        name="departmentType"
        value={formData.departmentType}
        onChange={onChange}
        className="w-[160px] lg:w-[200px] xl:w-[261px] h-11 px-4 text-sm font-medium text-[#404753] 
                   bg-[#F7F8FA] rounded-xl outline-none border border-gray-300 
                   focus:border-[#782A99] focus:ring-2 focus:ring-[#ebe4f4] transition"
      >
        <option value="" disabled>
          Department Type
        </option>
        <option value="EMP">EMP</option>
        <option value="NON EMP">NON EMP</option>
      </select>

      {/* Government Type */}
      <select
        name="governmentType"
        value={formData.governmentType}
        onChange={onChange}
        className="w-[160px] lg:w-[200px] xl:w-[261px] h-11 px-4 text-sm font-medium text-[#404753] 
                   bg-[#F7F8FA] rounded-xl outline-none border border-gray-300 
                   focus:border-[#782A99] focus:ring-2 focus:ring-[#ebe4f4] transition"
      >
        <option value="" disabled>
          Government Type
        </option>
        <option value="Central">Central Government</option>
        <option value="State">State Government</option>
      </select>

      {/* Submit Button */}
      <button
        onClick={onSubmit}
        disabled={isLoading}
        className="w-48 h-11 px-6 py-2 text-sm font-bold text-white 
                   bg-gradient-to-r from-[#782A99] to-[#631A78] rounded-xl shadow 
                   transition hover:bg-[#631A78] focus:ring-2 focus:ring-[#ebe4f4] 
                   disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : buttonLabel}
      </button>
    </div>
  );
};

export default DepartmentForm;
