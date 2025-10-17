
import React from "react";

const DepartmentForm = ({
  formData,
  onChange,
  onSubmit,
  isLoading,
  buttonLabel,
}) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(e);
      }}
      // className="flex flex-wrap gap-6 items-center bg-white rounded-3xl shadow-lg border border-gray-100 px-8 py-8"
      className="flex gap-5 flex-wrap"
    >
      {/* Department Name */}
      <input
        type="text"
        name="departmentName"
        placeholder="Name of Department"
        value={formData.departmentName}
        onChange={onChange}
        className="w-[160px] md:w-[200px] xl:w-[280px] h-12 px-5 text-sm font-semibold text-gray-700 
                   bg-[#F0F3FF] rounded-xl border border-gray-300 outline-none 
                   focus:border-[#782A99] focus:ring-2 focus:ring-[#DCC6F7] transition placeholder-gray-400"
        required
      />

      {/* Department Type */}
      <select
        name="departmentType"
        value={formData.departmentType}
        onChange={onChange}
        className="w-[160px] md:w-[200px] xl:w-[280px] h-12 px-5 text-sm font-semibold text-gray-700 
                   bg-[#F0F3FF] rounded-xl border border-gray-300 outline-none 
                   focus:border-[#782A99] focus:ring-2 focus:ring-[#DCC6F7] transition"
        required
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
        className="w-[160px] md:w-[200px] xl:w-[280px] h-12 px-5 text-sm font-semibold text-gray-700 
                   bg-[#F0F3FF] rounded-xl border border-gray-300 outline-none 
                   focus:border-[#782A99] focus:ring-2 focus:ring-[#DCC6F7] transition"
        required
      >
        <option value="" disabled>
          Government Type
        </option>
        <option value="Central">Central Government</option>
        <option value="State">State Government</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-48 h-12 px-6 py-3 text-sm font-bold text-white 
                   bg-gradient-to-r from-[#782A99] to-[#631A78] rounded-xl shadow-lg 
                   transition hover:from-[#631A78] hover:to-[#4e1359] focus:outline-none 
                   focus:ring-4 focus:ring-[#DCC6F7] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? "Processing..." : buttonLabel}
      </button>
    </form>
  );
};

export default DepartmentForm;
