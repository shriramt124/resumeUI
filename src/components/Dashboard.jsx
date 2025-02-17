import React from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon, ArrowDownTrayIcon, DocumentIcon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  return (
    <div className="p-6">
      <header className="bg-white border-b border-gray-200 px-6 py-4 -mx-6 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Resumes & Cover Letters</h1>
          <Link
            to="/editor"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            + Create New
          </Link>
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Existing Resume Card */}
        <Link to="/editor" className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-40 bg-yellow-200 relative">
            <div className="absolute inset-0 flex items-center justify-center text-lg font-bold">
              JOHN DOE
            </div>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium flex items-center">
                Untitled
                <PencilIcon className="h-4 w-4 ml-2 text-gray-400" />
              </h3>
              <span className="text-sm text-gray-500">Updated 4 Dec 2022</span>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-600">
                <div className="bg-pink-100 text-pink-600 px-2 py-1 rounded">
                  15%
                </div>
                <span className="ml-2">Your resume score</span>
              </div>
              
              <button className="w-full flex items-center justify-center space-x-2 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded">
                <ArrowDownTrayIcon className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
              
              <button className="w-full flex items-center justify-center space-x-2 text-sm text-gray-600 hover:bg-gray-50 p-2 rounded">
                <DocumentIcon className="h-4 w-4" />
                <span>Export to DOCX</span>
              </button>
            </div>
          </div>
        </Link>

        {/* Create New Resume Card */}
        <Link to="/editor" className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-medium mb-2">New Resume</h3>
          <p className="text-gray-500 text-sm mb-4">
            Create a tailored resume for each job application. Double your chances of getting hired!
          </p>
          <div className="h-40 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 hover:text-blue-700">
              + Create New
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;