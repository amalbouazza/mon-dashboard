export default function MainContent() {
    return (
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Sales Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">March 2023</h2>
            <p className="text-gray-600">$36,358</p>
            <p className="text-green-500">+9% last year</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Monthly Earnings</h2>
            <p className="text-gray-600">$6,820</p>
            <p className="text-green-500">+9% last year</p>
          </div>
        </div>
      </div>
    );
  }