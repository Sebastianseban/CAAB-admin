
// "use client";
// import { useState } from "react";
// import { useAddQuestions, useSections } from "../hooks/useQuestionnaire";
// import QuestionnaireTable from "../components/QuestionnaireTable/QuestionnaireTable";
// import AddQuestionPopup from "../components/QuestionnaireTable/AddQuestionPopup";

// function AddQuestionnairePage() {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [employeeCategory, setEmployeeCategory] = useState({
//     section: "",
//     questionsList: [{ questions: "", gravity: "" }],
//   });

//   const { mutate: addQuestions } = useAddQuestions();
//   const { data: sections = [] } = useSections();

//   // Handler functions
//   const handleSectionChange = (e) => {
//     const { value } = e.target;
//     setEmployeeCategory((prev) => ({ ...prev, section: value }));
//   };

//   const handleQuestionListChange = (index, field, value) => {
//     const updated = [...employeeCategory.questionsList];
//     updated[index][field] = value;
//     setEmployeeCategory((prev) => ({ ...prev, questionsList: updated }));
//   };

//   const addQuestionField = () => {
//     setEmployeeCategory((prev) => ({
//       ...prev,
//       questionsList: [...prev.questionsList, { questions: "", gravity: "" }],
//     }));
//   };

//   const removeQuestion = (index) => {
//     setEmployeeCategory((prev) => ({
//       ...prev,
//       questionsList: prev.questionsList.filter((_, i) => i !== index),
//     }));
//   };

//   const handleSubmit = () => {
//     const { section, questionsList } = employeeCategory;
//     if (!section) {
//       alert("Section is required.");
//       return;
//     }
//     if (questionsList.some((q) => !q.questions || !q.gravity)) {
//       alert("All questions must have text and gravity.");
//       return;
//     }

//     addQuestions(employeeCategory, {
//       onSuccess: () => {
//         alert("Questions added successfully.");
//         setEmployeeCategory({
//           section: "",
//           questionsList: [{ questions: "", gravity: "" }],
//         });
//         setIsPopupOpen(false);
//       },
//       onError: () => {
//         alert("Failed to add questions.");
//       },
//     });
//   };

//   return (
//     <div className="w-full flex flex-col gap-10 py-12 bg-gradient-to-b from-[#f7f7fa] to-[#e6e9f8] min-h-screen">
//       {/* Popup Button */}
//         <div className="flex justify-end pr-7">
//           <button
//             type="button"
//             className="w-56 h-12 bg-gradient-to-r from-[#782A99] to-[#631A78] hover:from-[#631A78] hover:to-[#4e1359] transition rounded-xl text-white font-bold shadow-xl"
//             onClick={() => setIsPopupOpen(true)}
//           >
//             + Add Questions
//           </button>
//         </div>

//       {isPopupOpen && (
//         <AddQuestionPopup
//           isOpen={isPopupOpen}
//           onClose={() => setIsPopupOpen(false)}
//           employeeCategory={employeeCategory}
//           setEmployeeCategory={setEmployeeCategory}
//           sections={sections}
//           handleQuestionListChange={handleQuestionListChange}
//           addQuestionField={addQuestionField}
//           removeQuestion={removeQuestion}
//           handleSectionChange={handleSectionChange}
//           handleSubmit={handleSubmit}
//         />
//       )}

//       {/* Table Section */}
//       <QuestionnaireTable />
//     </div>
//   );
// }

// export default AddQuestionnairePage;
import { useState } from "react";
import { useAddQuestions, useSections } from "../hooks/useQuestionnaire";
import QuestionnaireTable from "../components/QuestionnaireTable/QuestionnaireTable";
import AddQuestionPopup from "../components/QuestionnaireTable/AddQuestionPopup";

function AddQuestionnairePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [employeeCategory, setEmployeeCategory] = useState({
    act_rule: "",
    section: "",
    questionsList: [{ questions: "", gravity: "" }],
  });

  const { mutate: addQuestions } = useAddQuestions();
  const { data: sections = [] } = useSections();

  // Handler functions
  const handleActRuleChange = (e) => {
    const { value } = e.target;
    setEmployeeCategory((prev) => ({ ...prev, act_rule: value }));
  };

  const handleSectionChange = (e) => {
    const { value } = e.target;
    setEmployeeCategory((prev) => ({ ...prev, section: value }));
  };

  const handleQuestionListChange = (index, field, value) => {
    const updated = [...employeeCategory.questionsList];
    updated[index][field] = value;
    setEmployeeCategory((prev) => ({ ...prev, questionsList: updated }));
  };

  const addQuestionField = () => {
    setEmployeeCategory((prev) => ({
      ...prev,
      questionsList: [...prev.questionsList, { questions: "", gravity: "" }],
    }));
  };

  const removeQuestion = (index) => {
    setEmployeeCategory((prev) => ({
      ...prev,
      questionsList: prev.questionsList.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = () => {
    const { act_rule, section, questionsList } = employeeCategory;
    if (!act_rule) {
      alert("Act / Rule is required.");
      return;
    }
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
          act_rule: "",
          section: "",
          questionsList: [{ questions: "", gravity: "" }],
        });
        setIsPopupOpen(false);
      },
      onError: () => {
        alert("Failed to add questions.");
      },
    });
  };

  return (
    <div className="w-full flex flex-col gap-10 py-12 bg-gradient-to-b from-[#f7f7fa] to-[#e6e9f8] min-h-screen">
      {/* Popup Button */}
      <div className="flex justify-end pr-7">
        <button
          type="button"
          className="w-56 h-12 bg-gradient-to-r from-[#782A99] to-[#631A78] hover:from-[#631A78] hover:to-[#4e1359] transition rounded-xl text-white font-bold shadow-xl"
          onClick={() => setIsPopupOpen(true)}
        >
          + Add Questions
        </button>
      </div>

      {isPopupOpen && (
        <AddQuestionPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          employeeCategory={employeeCategory}
          setEmployeeCategory={setEmployeeCategory}
          sections={sections}
          handleQuestionListChange={handleQuestionListChange}
          addQuestionField={addQuestionField}
          removeQuestion={removeQuestion}
          handleSectionChange={handleSectionChange}
          handleActRuleChange={handleActRuleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {/* Table Section */}
      <QuestionnaireTable />
    </div>
  );
}

export default AddQuestionnairePage;