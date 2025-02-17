import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ResumeEditor from './components/ResumeEditor';

function App() {
  return (
    <Router>
      <div className='flex justify-between px-[50px]  py-[30px] shadow-sm'> 
        <div className='text-3xl capitalize font-bold'>resume builder</div>
        <div className='text-3xl capitalize font-semibold'>
         
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-medium">John Doe</h3>
                <p className="text-sm text-gray-500">Set your target role</p>
              </div>
       
          </div>
        </div>
      </div>
      <div className="flex h-screen bg-gray-50">
       
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/editor" element={<ResumeEditor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;