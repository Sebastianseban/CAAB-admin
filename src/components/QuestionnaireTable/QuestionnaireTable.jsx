

import { useDeleteQuestion, useQuestionnaires } from "../../hooks/useQuestionnaire";

export default function QuestionnaireTable() {
  const { data, isLoading, isError } = useQuestionnaires();
  const { mutate: deleteQuestion } = useDeleteQuestion();

  if (isLoading)
    return <p className="text-gray-500 py-8 text-center">Loading...</p>;
  if (isError)
    return <p className="text-red-500 py-8 text-center">Failed to load questions</p>;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      deleteQuestion(id, {
        onSuccess: () => alert("Deleted successfully"),
        onError: () => alert("Failed to delete"),
      });
    }
  };

  return (
    <div className="p-4">
      <table className="min-w-full divide-y divide-gray-200 text-sm rounded-3xl overflow-hidden">
        <thead>
          <tr className="bg-[#224167] text-white select-none">
            <th className="px-6 py-3 text-left font-bold uppercase tracking-wide rounded-tl-3xl">Section</th>
            <th className="px-6 py-3 text-left font-bold uppercase tracking-wide">Question</th>
            <th className="px-6 py-3 text-left font-bold uppercase tracking-wide">Gravity</th>
            <th className="px-6 py-3 text-center font-bold uppercase tracking-wide rounded-tr-3xl">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.questions?.length ? (
            data.questions.map((q, idx) => (
              <tr
                key={q.id}
                className={idx % 2 === 0 ? "bg-[#f6f4fa]" : "bg-white"}
              >
                <td className="px-6 py-4 text-gray-800">{q.section}</td>
                <td className="px-6 py-4 text-gray-900">{q.questions}</td>
                <td className="px-6 py-4">
                  <span
                    className={
                      q.gravity === "High"
                        ? "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700"
                        : q.gravity === "Medium"
                        ? "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700"
                        : "inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700"
                    }
                  >
                    {q.gravity}
                  </span>
                </td>
                <td className="px-6 py-4 text-center">
                  <button
                    className="px-4 py-1 rounded-lg bg-red-100 text-red-700 font-semibold hover:bg-red-200 transition"
                    onClick={() => handleDelete(q.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-8 text-center text-gray-400 rounded-b-3xl font-semibold bg-[#fafbfc]">
                No questions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
