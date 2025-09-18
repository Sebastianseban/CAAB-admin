
import React from "react";

const AddActForm = ({
  formData,
  onChange,
  onSubmit,
  isBtnDisabled,
  departments = [],
}) => {
  return (
    <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b border-[#C2C6D4]">
      {/* Department */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Department Name <span className="text-red-500">*</span>
        </span>
        <select
          className="w-[500px] h-10 px-4 text-sm border rounded-lg"
          name="departmentName"
          value={formData.departmentName}
          onChange={onChange}
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
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Law <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          name="law"
          value={formData.law}
          onChange={onChange}
          placeholder="Law"
          className="w-[500px] h-10 px-4 text-sm border rounded-lg"
        />
      </div>

      {/* Act / Rule */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Act / Rule <span className="text-red-500">*</span>
        </span>
        <textarea
          name="actRule"
          value={formData.actRule}
          onChange={onChange}
          placeholder="Act / Rule"
          rows="5"
          className="w-[500px] px-4 py-2 text-sm border rounded-lg"
        />
      </div>

      {/* Section */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Section <span className="text-red-500">*</span>
        </span>
        <input
          type="text"
          name="section"
          value={formData.section}
          onChange={onChange}
          placeholder="Section"
          className="w-[500px] h-10 px-4 text-sm border rounded-lg"
        />
      </div>

      {/* Penalty Amount */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Penalty Amount <span className="text-red-500">*</span>
        </span>
        <input
          type="number"
          name="penaltyAmount"
          value={formData.penaltyAmount}
          onChange={onChange}
          placeholder="Penalty Amount"
          className="w-[500px] h-10 px-4 text-sm border rounded-lg"
        />
      </div>

      {/* Due Date */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Due Date <span className="text-red-500">*</span>
        </span>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={onChange}
          className="w-[500px] h-10 px-4 text-sm border rounded-lg"
        />
      </div>

      {/* Alert Date */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold">
          Alert Date <span className="text-red-500">*</span>
        </span>
        <input
          type="date"
          name="alertDate"
          value={formData.alertDate}
          onChange={onChange}
          className="w-[500px] h-10 px-4 text-sm border rounded-lg"
        />
      </div>

      {/* Submit */}
      <button
        className="w-44 h-10 px-4 py-2 text-sm font-semibold text-white bg-[#782A99] rounded-lg disabled:opacity-50"
        onClick={onSubmit}
        disabled={isBtnDisabled}
      >
        {isBtnDisabled ? "Adding..." : "ADD ACT"}
      </button>
    </div>
  );
};

export default AddActForm;
