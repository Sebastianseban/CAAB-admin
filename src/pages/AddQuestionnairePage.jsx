
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
        // ⚡ No need to toggle renderTable, React Query handles refetch
      },
      onError: () => {
        alert("Failed to add questions.");
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-10">
      <div className="pb-10 flex flex-col gap-3 xl:gap-6 border-b border-[#C2C6D4]">
        {/* Section Selector */}
        <select
          className="w-[300px] h-10 px-4 text-sm border rounded-lg"
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

        {/* Questions */}
        {employeeCategory.questionsList.map((q, index) => (
          <div key={index} className="flex flex-col gap-2 border-b pb-4">
            <textarea
              className="w-[300px] px-4 py-2 border rounded-lg"
              placeholder="Type your question"
              value={q.questions}
              onChange={(e) =>
                handleQuestionListChange(index, "questions", e.target.value)
              }
              rows="3"
            ></textarea>

            <select
              className="w-[300px] h-10 px-4 border rounded-lg"
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
              className="w-32 h-8 text-xs bg-red-500 text-white rounded-lg"
              onClick={() => removeQuestion(index)}
            >
              Remove
            </button>
          </div>
        ))}

        {/* Add Question Button */}
        <button
          className="w-44 h-10 bg-green-600 text-white rounded-lg"
          onClick={addQuestion}
        >
          Add Question
        </button>

        {/* Submit Button */}
        <button
          className="w-44 h-10 bg-[#782A99] text-white rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <QuestionnaireTable/>

    </div>
  );
}

export default AddQuestionnairePage;
