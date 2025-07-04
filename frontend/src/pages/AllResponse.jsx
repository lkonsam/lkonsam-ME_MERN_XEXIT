import { useEffect, useState } from "react";
import { allResponse } from "../services";

export default function AllResponses() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await allResponse(token);
      setData(response.data || []);
    } catch (error) {
      alert("Failed to fetch responses", error.message || "Please try again");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-left">Employee ID</th>
            <th className="px-6 py-3 text-left">Responses</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan="2" className="px-6 py-4 text-center">
                No responses found.
              </td>
            </tr>
          )}
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4">{item.employeeId}</td>
              <td className="px-6 py-4">
                {item.responses.map((q, i) => (
                  <div key={i} className="mb-4 w-full max-w-md">
                    <label className="block mb-1 font-medium">
                      {q.questionText}
                    </label>
                    <p className="mb-2">{q.response}</p>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
