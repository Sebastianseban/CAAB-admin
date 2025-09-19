// import { useQuestionnaires, useDeleteQuestion } from "../../hooks/useQuestionnaire";

import { useDeleteQuestion, useQuestionnaires } from "../../hooks/useQuestionnaire";

// export default function QuestionnaireTable() {
//   const { data, isLoading, isError } = useQuestionnaires();
//   const { mutate: deleteQuestion } = useDeleteQuestion();

//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Failed to load questions</p>;

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this question?")) {
//       deleteQuestion(id, {
//         onSuccess: () => alert("Deleted successfully"),
//         onError: () => alert("Failed to delete"),
//       });
//     }
//   };

//   return (
//     <table className="w-full">
//       <thead>
//         <tr>
//           <th>Section</th>
//           <th>Question</th>
//           <th>Gravity</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data?.questions?.length ? (
//           data.questions.map((q) => (
//             <tr key={q.id}>
//               <td>{q.section}</td>
//               <td>{q.questions}</td>
//               <td>{q.gravity}</td>
//               <td>
//                 <button
//                   className="text-red-600"
//                   onClick={() => handleDelete(q.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))
//         ) : (
//           <tr>
//             <td colSpan="4" className="text-center">
//               No questions found
//             </td>
//           </tr>
//         )}
//       </tbody>
//     </table>
//   );
// }


export default function QuestionnaireTable() {
  const { data, isLoading, isError } = useQuestionnaires();
  const { mutate: deleteQuestion } = useDeleteQuestion();

  if (isLoading) return <p className="text-gray-500">Loading...</p>;
  if (isError) return <p className="text-red-500">Failed to load questions</p>;

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      deleteQuestion(id, {
        onSuccess: () => alert("Deleted successfully"),
        onError: () => alert("Failed to delete"),
      });
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-md p-4">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tl-xl">Section</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Question</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gravity</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider rounded-tr-xl">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100">
          {data?.questions?.length ? (
            data.questions.map((q, idx) => (
              <tr
                key={q.id}
                className={idx % 2 === 0 ? "bg-gray-50" : ""}
              >
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{q.section}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{q.questions}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={
                      q.gravity === "High"
                        ? "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700"
                        : q.gravity === "Medium"
                        ? "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700"
                        : "inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700"
                    }>
                    {q.gravity}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-center">
                  <button
                    className="px-3 py-1 rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-shadow shadow-sm"
                    onClick={() => handleDelete(q.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-5 text-center text-gray-400 rounded-b-xl">
                No questions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
