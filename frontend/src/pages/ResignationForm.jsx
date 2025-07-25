import { useState } from "react";
import { submitResignationApi } from "../services";

export default function ResignationForm() {
  const [lwd, setLwd] = useState("");

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      await submitResignationApi(token, lwd);
      // Reset the lwd after submission
      setLwd("");
      alert("Resignation submitted");
    } catch (error) {
      alert(
        "Failed to submit resignation",
        error.message || "Please try again"
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="date"
        value={lwd}
        onChange={(e) => setLwd(e.target.value)}
        className="mb-2 border p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white px-4 py-2"
      >
        Submit Resignation
      </button>
    </div>
  );
}
