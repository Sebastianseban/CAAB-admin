
"use client";
import { useState } from "react";
import { useAddQuestions, useSections } from "../hooks/useQuestionnaire";
import QuestionnaireTable from "../components/QuestionnaireTable/QuestionnaireTable";

function AddQuestionnairePage() {
  const [employeeCategory, setEmployeeCategory] = useState({
    section: "",
    questionsList: [{ questions: "", gravity: "" }],
  });

  const { mutate: addQuestions } = useAddQuestions();
  const { data: sections = [] } = useSections();

  // Handle Section change
  const handleSectionChange = (e) => {
    const { value } = e.target;
    setEmployeeCategory((prev) => ({ ...prev, section: value }));
  };

  // Handle Question List updates
  const handleQuestionListChange = (index, field, value) => {
    const updated = [...employeeCategory.questionsList];
    updated[index][field] = value;
    setEmployeeCategory((prev) => ({ ...prev, questionsList: updated }));
  };

  // Add Question
  const addQuestion = () => {
    setEmployeeCategory((prev) => ({
      ...prev,
      questionsList: [...prev.questionsList, { questions: "", gravity: "" }],
    }));
  };

  // Remove Question
  const removeQuestion = (index) => {
    setEmployeeCategory((prev) => ({
      ...prev,
      questionsList: prev.questionsList.filter((_, i) => i !== index),
    }));
  };

  // Submit
  const handleSubmit = () => {
    const { section, questionsList } = employeeCategory;
    if (!section) {
      alert("Section is required.");
      return;
    }
    if (questionsList.some((q) => !q.questions || !q.gravity)) {
      alert("All questions must have text and gravity.");
      return;
    }

    addQuestions(employeeCategory, {
      onSuccess: () => {
        alert("Questions added successfully.");
        setEmployeeCategory({
          section: "",
          questionsList: [{ questions: "", gravity: "" }],
        });
      },
      onError: () => {
        alert("Failed to add questions.");
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-10 py-12 bg-gradient-to-b from-[#f7f7fa] to-[#e6e9f8] min-h-screen">
      {/* Form container */}
      <div className="ms-4 max-w-lg w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col gap-7">
        {/* Section Selector */}
        <select
          className="w-full h-12 px-4 text-sm border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] transition bg-white font-semibold"
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

        {/* Question Blocks */}
        {employeeCategory.questionsList.map((q, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 border-b border-gray-200 pb-6 last:border-none"
          >
            <textarea
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] transition resize-none font-medium bg-[#F7F8FA]"
              placeholder="Type your question"
              value={q.questions}
              onChange={(e) =>
                handleQuestionListChange(index, "questions", e.target.value)
              }
              rows="3"
            />
            <select
              className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#782A99] focus:border-[#782A99] transition bg-white font-medium"
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
              className="w-32 h-9 self-start text-xs bg-red-600 hover:bg-red-700 transition rounded-xl text-white font-semibold shadow"
              onClick={() => removeQuestion(index)}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Add Question Button */}
        <button
          type="button"
          className="w-44 h-12 bg-green-600 hover:bg-green-700 transition rounded-xl text-white font-bold shadow-lg"
          onClick={addQuestion}
        >
          Add Question
        </button>

        {/* Submit Button */}
        <button
          type="button"
          className="w-44 h-12 bg-gradient-to-r from-[#782A99] to-[#631A78] hover:from-[#631A78] hover:to-[#4e1359] transition rounded-xl text-white font-bold shadow-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {/* Table Section */}
      <QuestionnaireTable />
    </div>
  );
}

export default AddQuestionnairePage;
