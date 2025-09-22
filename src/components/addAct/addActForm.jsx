
// import React from "react";

// const AddActForm = ({
//   formData,
//   onChange,
//   onSubmit,
//   isBtnDisabled,
//   departments = [],
// }) => {
//   return (
//     <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b border-[#C2C6D4]">
//       {/* Department */}
//       <div className="flex flex-col gap-1">
//         <span className="text-sm font-semibold">
//           Department Name <span className="text-red-500">*</span>
//         </span>
//         <select
//           className="w-[500px] h-10 px-4 text-sm border rounded-lg"
//           name="departmentName"
//           value={formData.departmentName}
//           onChange={onChange}
//         >
//           <option value="">Select Department</option>
//           {departments.map((dept) => (
//             <option key={dept.id} value={dept.department_name}>
//               {dept.department_name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Law */}
//       <div className="flex flex-col gap-1">
//         <span className="text-sm font-semibold">
//           Law <span className="text-red-500">*</span>
//         </span>
//         <input
//           type="text"
//           name="law"
//           value={formData.law}
//           onChange={onChange}
//           placeholder="Law"
//           className="w-[500px] h-10 px-4 text-sm border rounded-lg"
//         />
//       </div>

//       {/* Act / Rule */}
//       <div className="flex flex-col gap-1">
//         <span className="text-sm font-semibold">
//           Act / Rule <span className="text-red-500">*</span>
//         </span>
//         <textarea
//           name="actRule"
//           value={formData.actRule}
//           onChange={onChange}
//           placeholder="Act / Rule"
//           rows="5"
//           className="w-[500px] px-4 py-2 text-sm border rounded-lg"
//         />
//       </div>

//       {/* Section */}
//       <div className="flex flex-col gap-1">
//         <span className="text-sm font-semibold">
//           Section <span className="text-red-500">*</span>
//         </span>
//         <input
//           type="text"
//           name="section"
//           value={formData.section}
//           onChange={onChange}
//           placeholder="Section"
//           className="w-[500px] h-10 px-4 text-sm border rounded-lg"
//         />
//       </div>

//       {/* Penalty Amount */}
//       <div className="flex flex-col gap-1">
//         <span className="text-sm font-semibold">
//           Penalty Amount <span className="text-red-500">*</span>
//         </span>
//         <input
//           type="number"
//           name="penaltyAmount"
//           value={formData.penaltyAmount}
//           onChange={onChange}
//           placeholder="Penalty Amount"
//           className="w-[500px] h-10 px-4 text-sm border rounded-lg"
//         />
//       </div>

//       {/* Due Date */}
//       <div className="flex flex-col gap-1">
//         <span className="text-sm font-semibold">
//           Due Date <span className="text-red-500">*</span>
//         </span>
//         <input
//           type="date"
//           name="dueDate"
//           value={formData.dueDate}
//           onChange={onChange}
//           className="w-[500px] h-10 px-4 text-sm border rounded-lg"
//         />
//       </div>

//       {/* Alert Date */}
//       <div className="flex flex-col gap-1">
//         <span className="text-sm font-semibold">
//           Alert Date <span className="text-red-500">*</span>
//         </span>
//         <input
//           type="date"
//           name="alertDate"
//           value={formData.alertDate}
//           onChange={onChange}
//           className="w-[500px] h-10 px-4 text-sm border rounded-lg"
//         />
//       </div>

//       {/* Submit */}
//       <button
//         className="w-44 h-10 px-4 py-2 text-sm font-semibold text-white bg-[#782A99] rounded-lg disabled:opacity-50"
//         onClick={onSubmit}
//         disabled={isBtnDisabled}
//       >
//         {isBtnDisabled ? "Adding..." : "ADD ACT"}
//       </button>
//     </div>
//   );
// };

// export default AddActForm;





import React from "react";

const AddActForm = ({
  formData,
  onChange,
  onSubmit,
  isBtnDisabled,
  departments = [],
}) => {
  return (
    <form className="flex flex-col gap-6 border-b border-[#C2C6D4] pb-10" onSubmit={onSubmit}>
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
  );
};

export default AddActForm;
