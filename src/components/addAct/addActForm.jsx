
import React from "react";

const AddActForm = ({
  formData,
  onChange,
  onSubmit,
  isBtnDisabled,
  departments = [],
  onClose
}) => {
  return (
  <div className="inset-0 fixed flex justify-center items-center backdrop-blur-sm">
      <form className="max-w-2xl w-full h-[650px] overflow-y-scroll bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-7 relative animate-fadeIn" onSubmit={onSubmit}>

               <button
          className="absolute top-4 right-4 w-9 h-9 rounded-full text-lg font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition flex items-center justify-center shadow-sm"
          onClick={onClose}
        >
          ✕
        </button>
      {/* Department */}
      <div className="flex flex-col gap-1 max-w-[520px]">
        <label className="text-sm font-semibold" htmlFor="departmentName">
          Department Name <span className="text-red-500">*</span>
        </label>
        <select
          id="departmentName"
          name="departmentName"
          value={formData.departmentName}
          onChange={onChange}
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] bg-white transition"
          required
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept.id} value={dept.department_name}>
              {dept.department_name}
            </option>
          ))}
        </select>
      </div>

      {/* Law */}
      <div className="flex flex-col gap-1 max-w-[520px]">
        <label className="text-sm font-semibold" htmlFor="law">
          Law <span className="text-red-500">*</span>
        </label>
        <input
          id="law"
          type="text"
          name="law"
          value={formData.law}
          onChange={onChange}
          placeholder="Law"
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] bg-white transition"
          required
        />
      </div>

      {/* Act / Rule */}
      <div className="flex flex-col gap-1 max-w-[520px]">
        <label className="text-sm font-semibold" htmlFor="actRule">
          Act / Rule <span className="text-red-500">*</span>
        </label>
        <textarea
          id="actRule"
          name="actRule"
          value={formData.actRule}
          onChange={onChange}
          placeholder="Act / Rule"
          rows="5"
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] bg-white transition resize-none"
          required
        />
      </div>

      {/* Section */}
      <div className="flex flex-col gap-1 max-w-[520px]">
        <label className="text-sm font-semibold" htmlFor="section">
          Section <span className="text-red-500">*</span>
        </label>
        <input
          id="section"
          type="text"
          name="section"
          value={formData.section}
          onChange={onChange}
          placeholder="Section"
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] bg-white transition"
          required
        />
      </div>

      {/* Penalty Amount */}
      <div className="flex flex-col gap-1 max-w-[520px]">
        <label className="text-sm font-semibold" htmlFor="penaltyAmount">
          Penalty Amount <span className="text-red-500">*</span>
        </label>
        <input
          id="penaltyAmount"
          type="number"
          name="penaltyAmount"
          value={formData.penaltyAmount}
          onChange={onChange}
          placeholder="Penalty Amount"
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] bg-white transition"
          required
        />
      </div>

      {/* Due Date */}
      <div className="flex flex-col gap-1 max-w-[520px]">
        <label className="text-sm font-semibold" htmlFor="dueDate">
          Due Date <span className="text-red-500">*</span>
        </label>
        <input
          id="dueDate"
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={onChange}
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] bg-white transition"
          required
        />
      </div>

      {/* Alert Date */}
      <div className="flex flex-col gap-1 max-w-[520px]">
        <label className="text-sm font-semibold" htmlFor="alertDate">
          Alert Date <span className="text-red-500">*</span>
        </label>
        <input
          id="alertDate"
          type="date"
          name="alertDate"
          value={formData.alertDate}
          onChange={onChange}
          className="w-full h-10 px-4 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] bg-white transition"
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-44 h-10 px-4 py-2 mt-6 text-sm font-semibold text-white bg-gradient-to-r from-[#782A99] to-[#631A78] rounded-lg shadow-lg transition hover:from-[#631A78] hover:to-[#4e1359] focus:outline-none focus:ring-4 focus:ring-[#DCC6F7] disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isBtnDisabled}
      >
        {isBtnDisabled ? "Adding..." : "ADD ACT"}
      </button>
    </form>
  </div>
  );
};

export default AddActForm;
