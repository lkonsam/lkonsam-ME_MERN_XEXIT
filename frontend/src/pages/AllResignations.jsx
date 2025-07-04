import { useEffect, useState } from "react";
import { allResign, conclude_resignation } from "../services";

export default function AllResignations() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await allResign(token);
      setData(response.data || []);
    } catch (error) {
      alert(
        "Failed to fetch resignations",
        error.message || "Please try again"
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleConcludeResignation = async (resignationId, approved, lwd) => {
    try {
      const token = localStorage.getItem("token");
      await conclude_resignation(token, resignationId, approved, lwd);
      fetchData();
    } catch (error) {
      alert(
        "Failed to conclude resignation",
        error.message || "Please try again"
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-6 py-3 text-left">Employee ID</th>
            <th className="px-6 py-3 text-left">Last Working Days</th>
            <th className="px-6 py-3 text-left">Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center">
                No resignations found.
              </td>
            </tr>
          )}
          {data.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="px-6 py-4">{item.employeeId}</td>
              <td className="px-6 py-4">{item.lwd}</td>
              <td className="px-6 py-4">{item.status}</td>
              <td className="px-6 py-4 flex space-x-4 justify-center">
                <button
                  className="bg-blue-500 hover:bg-blue-100 px-3 py-1 rounded"
                  onClick={() =>
                    handleConcludeResignation(item._id, true, item.lwd)
                  }
                >
                  Approved
                </button>
                <button
                  className="bg-red-500 hover:bg-red-100 px-3 py-1 rounded"
                  onClick={() =>
                    handleConcludeResignation(item._id, false, item.lwd)
                  }
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
