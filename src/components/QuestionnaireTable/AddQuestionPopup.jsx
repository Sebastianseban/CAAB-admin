
const AddQuestionPopup = ({
  isOpen,
  onClose,
  employeeCategory,
  sections,
  handleQuestionListChange,
  addQuestionField,
  removeQuestion,
  handleSectionChange,
  handleActRuleChange,
  handleSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col gap-7 relative animate-fadeIn">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 w-9 h-9 rounded-full text-lg font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 transition flex items-center justify-center shadow-sm"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-800">Add Questionnaire</h2>

        {/* Act / Rule Input */}
        <input
          type="text"
          className="w-full h-12 px-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white font-medium shadow-sm"
          placeholder="Enter Act / Rule"
          value={employeeCategory.act_rule}
          onChange={handleActRuleChange}
        />

        {/* Section Selector */}
        <select
          className="w-full h-12 px-4 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white font-medium shadow-sm"
          name="section"
          value={employeeCategory.section}
          onChange={handleSectionChange}
        >
          <option value="">Select Section</option>
          {sections.map((s, i) => (
            <option key={i} value={s.section}>
              {s.section}
            </option>
          ))}
        </select>

        {/* Scrollable Question Block List */}
        <div className="max-h-[320px] overflow-y-auto pr-2 flex flex-col gap-6">
          {employeeCategory.questionsList.map((q, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 border-b border-slate-200 pb-6 last:border-none"
            >
              <textarea
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-none font-medium bg-slate-50"
                placeholder="Type your question"
                value={q.questions}
                onChange={(e) =>
                  handleQuestionListChange(index, "questions", e.target.value)
                }
                rows="3"
              />
              <select
                className="w-full h-12 px-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition bg-white font-medium shadow-sm"
                value={q.gravity}
                onChange={(e) =>
                  handleQuestionListChange(index, "gravity", e.target.value)
                }
              >
                <option value="">Select Gravity</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
              <button
                type="button"
                className="w-32 h-9 self-start text-sm bg-red-100 text-red-700 hover:bg-red-200 active:scale-95 transition rounded-lg font-semibold shadow-md"
                onClick={() => removeQuestion(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="flex-1 h-12 bg-emerald-500 hover:bg-emerald-600 active:scale-95 transition rounded-xl text-white font-bold shadow-lg"
            onClick={addQuestionField}
          >
            + Add Question
          </button>
          <button
            type="button"
            className="flex-1 h-12 bg-indigo-500 hover:bg-indigo-700 active:scale-95 transition rounded-xl text-white font-bold shadow-lg"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestionPopup;