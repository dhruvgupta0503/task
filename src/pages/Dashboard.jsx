import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="bg-white shadow p-4 mb-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Sign Out
          </button>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="container mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Summary Section */}
        <section className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Summary</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800">25</p>
              <p className="text-sm text-gray-600">Total Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">40%</p>
              <p className="text-sm text-gray-600">Tasks Completed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">60%</p>
              <p className="text-sm text-gray-600">Tasks Pending</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">3.5 hrs</p>
              <p className="text-sm text-gray-600">Avg Time/Task</p>
            </div>
          </div>
        </section>

        {/* Pending Task Summary Section */}
        <section>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Pending Task Summary
          </h2>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">15</p>
              <p className="text-sm text-gray-600">Pending Tasks</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-yellow-600">56 hrs</p>
              <p className="text-sm text-gray-600">Total Time Lapsed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-600">24 hrs</p>
              <p className="text-sm text-gray-600">Time to Finish</p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Task Priority
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Pending Tasks
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Time Lapsed (hrs)
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-600">
                    Time to Finish (hrs)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">1</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">12</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">8</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">2</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">5</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">6</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">7</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">3</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">0</td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
