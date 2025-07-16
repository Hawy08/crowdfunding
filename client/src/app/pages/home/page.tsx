"use client";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center max-w-lg w-full">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Pamoja</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Crowdfunding for Social Impact
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Welcome to{" "}
          <span className="font-semibold text-indigo-600">Pamoja</span> — a new
          era of crowdfunding powered by blockchain technology.
          <br />
          Empowering communities. Enabling transparency. Creating impact.
        </p>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-2 mb-4">
          <span className="text-indigo-700 font-medium">Coming Soon!</span>
        </div>
        <p className="text-sm text-gray-400">
          Stay tuned for updates and be part of the change.
        </p>
      </div>
    </main>
  );
}
