export default function Sidebar() {
    return (
      <div className="w-64 bg-gray-800 text-white h-screen p-4">
        <h1 className="text-2xl font-bold mb-6">Modemize</h1>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/dashboard" className="block p-2 hover:bg-gray-700">Dashboard</a>
            </li>
            <li className="mb-2">
              <a href="/utilities" className="block p-2 hover:bg-gray-700">Utilities</a>
            </li>
            <li className="mb-2">
              <a href="/auth/login" className="block p-2 hover:bg-gray-700">Login</a>
            </li>
            <li className="mb-2">
              <a href="/auth/register" className="block p-2 hover:bg-gray-700">Register</a>
            </li>
            <li className="mb-2">
              <a href="/icons" className="block p-2 hover:bg-gray-700">Icons</a>
            </li>
            <li className="mb-2">
              <a href="/sample-page" className="block p-2 hover:bg-gray-700">Sample Page</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }