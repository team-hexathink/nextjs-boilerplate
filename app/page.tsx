export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">🌍 Skillora</h1>
      <p className="mb-6 text-lg text-center px-4">
        Connecting Skilled Workers with Global Opportunities
      </p>

      <div className="flex gap-4">
        <a href="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Signup
        </a>
        <a href="/login" className="bg-gray-800 text-white px-4 py-2 rounded-md">
          Login
        </a>
      </div>
    </main>
  );
}

             
