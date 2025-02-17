import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const MainContent = () => {
  return (
    <div className="flex-1 overflow-auto">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Resumes & Cover Letters</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            + Create New
          </button>
        </div>
        <div className="mt-4 flex space-x-8">
          <button className="text-blue-600 border-b-2 border-blue-600 pb-2">
            Resumes
          </button>
          <button className="text-gray-500 pb-2">
            Cover Letters
          </button>
        </div>
      </header>
      
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
    </div>
  );
};

export default MainContent;