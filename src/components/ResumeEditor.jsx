import React, { useState } from 'react';
import { 
  PencilIcon, 
  ArrowDownTrayIcon, 
  DocumentTextIcon, 
  Squares2X2Icon, 
  MinusIcon, 
  PlusIcon,
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  EllipsisHorizontalIcon,
  EyeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const tabs = [
  { id: 'personal', name: 'Personal Info', icon: UserIcon },
  { id: 'experience', name: 'Experience', icon: BriefcaseIcon },
  { id: 'education', name: 'Education', icon: AcademicCapIcon },
  { id: 'skills', name: 'Skills', icon: WrenchScrewdriverIcon },
  { id: 'others', name: 'Others', icon: EllipsisHorizontalIcon },
];

const ResumeEditor = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    summary: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation */}
        <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-semibold">Resume Builder</h1>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => setShowPreview(true)}
                className="text-gray-700 hover:text-gray-900 flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100"
              >
                <EyeIcon className="h-5 w-5" />
                <span>Preview</span>
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <ArrowDownTrayIcon className="h-5 w-5" />
                <span>Download</span>
              </button>
            </div>
          </div>
          <div className="flex px-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="h-5 w-5" />
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 max-w-4xl mx-auto">
          {activeTab === 'personal' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Frontend Developer"
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="e.g., John"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="e.g., Doe"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g., john@example.com"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., +1 234 567 8900"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="e.g., New York"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="e.g., United States"
                    className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Professional Summary</label>
                <textarea
                  name="summary"
                  value={formData.summary}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Write 2-4 short, energetic sentences about your experience and skills..."
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab === 'experience' && (
            <div className="p-4 text-center text-gray-500">
              Experience section coming soon...
            </div>
          )}
          {activeTab === 'education' && (
            <div className="p-4 text-center text-gray-500">
              Education section coming soon...
            </div>
          )}
          {activeTab === 'skills' && (
            <div className="p-4 text-center text-gray-500">
              Skills section coming soon...
            </div>
          )}
          {activeTab === 'others' && (
            <div className="p-4 text-center text-gray-500">
              Additional sections coming soon...
            </div>
          )}
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-gray-600 w-full max-w-4xl h-[90vh] rounded-lg shadow-xl overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-500">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded text-sm">
                  <Squares2X2Icon className="h-5 w-5" />
                  <span>Select template</span>
                </button>
                <div className="flex items-center space-x-2 text-white">
                  <MinusIcon className="h-5 w-5 cursor-pointer" />
                  <span>Aa</span>
                  <PlusIcon className="h-5 w-5 cursor-pointer" />
                </div>
              </div>
              <button 
                onClick={() => setShowPreview(false)}
                className="text-white hover:text-gray-200"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6 h-[calc(90vh-5rem)] overflow-y-auto">
              <div className="bg-white rounded-lg shadow-lg h-full">
                <div className="bg-yellow-300 h-32 flex items-center justify-center">
                  <h1 className="text-3xl font-bold">
                    {formData.firstName || 'SHRIRAM'} {formData.lastName || 'TIWARI'}
                  </h1>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 text-sm">{formData.email}</p>
                  <p className="text-gray-600 text-sm">{formData.phone}</p>
                  <p className="text-gray-600 text-sm">
                    {formData.city}{formData.city && formData.country && ', '}{formData.country}
                  </p>
                  
                  {formData.summary && (
                    <>
                      <h2 className="text-xl font-semibold mt-6 mb-2">Professional Summary</h2>
                      <p className="text-gray-700">{formData.summary}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResumeEditor;