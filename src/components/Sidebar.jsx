import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  HomeIcon, 
  DocumentIcon, 
  BriefcaseIcon, 
  ClipboardDocumentListIcon,
  AcademicCapIcon,
  BanknotesIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: HomeIcon, path: '/' },
    { name: 'Documents', icon: DocumentIcon, path: '/documents' },
    { name: 'Jobs', icon: BriefcaseIcon, path: '/jobs' },
    { name: 'Job Tracker', icon: ClipboardDocumentListIcon, path: '/job-tracker' },
    { name: 'Interview Prep', icon: AcademicCapIcon, path: '/interview-prep' },
    { name: 'Salary Analyzer', icon: BanknotesIcon, path: '/salary' },
    { name: 'Job Search Method', icon: MagnifyingGlassIcon, path: '/search' },
    { name: 'Coaching', icon: UserGroupIcon, path: '/coaching' },
    { name: 'Other', icon: EllipsisHorizontalIcon, path: '/other' },
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200">
      <div className="p-4">
        <div className="flex items-center space-x-2 mb-6">
          <img src="/logo.svg" alt="Resume.io" className="h-8 w-8" />
          <span className="text-xl font-bold">resume.io</span>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <div>
              <h3 className="font-medium">John Doe</h3>
              <p className="text-sm text-gray-500">Set your target role</p>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;