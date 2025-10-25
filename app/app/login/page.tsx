export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="flex flex-col gap-3 w-72">
        <input className="border p-2 rounded" placeholder="Email / Phone" />
        <button className="bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}
