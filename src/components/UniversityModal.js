import React from 'react';
import { flagImages } from '../assets/imageLinks';

const UniversityModal = ({ isOpen, onClose, country, universities }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity"
          onClick={onClose}
        ></div>

        {/* Modal content */}
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-br from-[#0A1E3E] to-[#4A90E2] px-6 py-8">
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-5">
                {/* Country Flag */}
                <div className="w-32 h-20 rounded-2xl flex-shrink-0 overflow-hidden border-3 border-blue-300 shadow-xl">
                  <img 
                    src={flagImages[country.flag]} 
                    alt={`${country.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {country.name} Universities
                  </h2>
                  <p className="text-blue-100 text-sm">
                    Complete list of partner universities in {country.name}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:text-gray-200 transition-colors duration-200 ml-4"
                aria-label="Close modal"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-6 max-h-[60vh] overflow-y-auto">
            <div className="mb-4">
              <p className="text-gray-600 mb-6">
                {country.description}
              </p>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                <h3 className="text-xl font-bold text-navy-900">
                  All Universities
                </h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {universities.length} {universities.length === 1 ? 'university' : 'universities'}
                </span>
              </div>
            </div>

            {/* Universities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {universities.map((university, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-primary-600 font-bold text-lg flex-shrink-0">
                    {index + 1}.
                  </span>
                  <span className="text-gray-800 leading-relaxed">
                    {university}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
            <p className="text-sm text-gray-600 text-center sm:text-left">
              Interested in applying? Contact us for more information.
            </p>
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
              >
                Close
              </button>
              <a
                href="/contact"
                className="px-6 py-2 btn btn-primary hover-glow text-center"
                onClick={onClose}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityModal;

