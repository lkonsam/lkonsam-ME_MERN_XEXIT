import { useState } from "react";
import { submitQuestionnaireApi } from "../services";

const defaultQuestions = [
  { questionText: "Why are you leaving?", response: "" },
  { questionText: "What can be improved?", response: "" },
];

// Create fresh copy
const getFreshQuestions = () => defaultQuestions.map((q) => ({ ...q }));

export default function ExitQuestionnaire() {
  const [questionnaire, setQuestionnaire] = useState(getFreshQuestions());

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    await submitQuestionnaireApi(token, questionnaire);

    // Reset questionnaire
    setQuestionnaire(getFreshQuestions());

    alert("Responses submitted");
  };

  const handleChange = (index, value) => {
    const updated = [...questionnaire];
    updated[index].response = value;
    setQuestionnaire(updated);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {questionnaire.map((q, i) => (
        <div key={i} className="mb-4 w-full max-w-md">
          <label className="block mb-1 font-medium">{q.questionText}</label>
          <input
            type="text"
            value={q.response}
            onChange={(e) => handleChange(i, e.target.value)}
            className="w-full border p-2"
          />
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-purple-500 text-white px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
}
