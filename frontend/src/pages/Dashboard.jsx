export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to Dashboard</h1>
      <a href="/resignation" className="mb-2 text-blue-600 underline">Submit Resignation</a>
      <a href="/questionnaire" className="text-blue-600 underline">Exit Questionnaire</a>
    </div>
  );
}