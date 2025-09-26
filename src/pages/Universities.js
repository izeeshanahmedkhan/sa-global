import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../assets/content';
import { flagImages } from '../assets/imageLinks';

const Universities = () => {
  // Handle anchor scrolling when component mounts
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        // Calculate the position to center the element in the viewport
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({
          top: Math.max(0, middle),
          behavior: 'smooth'
        });
      }
    }
  }, []);
  return (
    <div>
      {/* Breadcrumbs */}
      <section className="bg-gradient-to-br from-[#0A1E3E] to-[#4A90E2] py-4 rounded-b-lg shadow-sm">
        <div className="container-custom">
          <nav className="flex space-x-2 text-sm">
            <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</Link>
            <span className="text-blue-200">/</span>
            <span className="text-white font-medium">Universities & Countries</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#1a365d] via-[#4a90e2] to-white py-24 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center max-w-5xl mx-auto px-4">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
              {content.universities.hero.title}
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              {content.universities.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="section-padding">
        <div className="container-custom">
          {content.universities.countries.map((region, regionIndex) => (
            <div key={regionIndex} className="mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-navy-900 mb-8 text-center animate-fade-in-up">
                {region.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {region.countries.map((country, countryIndex) => (
                  <div key={countryIndex} id={country.name.toLowerCase().replace(/\s+/g, '-')} className="card p-8 hover-lift animate-fade-in-up stagger-2">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                        <img 
                          src={flagImages[country.flag]} 
                          alt={`${country.name} flag`}
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-navy-900 mb-4">
                          {country.name}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {country.description}
                        </p>
                        {country.universities && (
                          <div className="mt-4 mb-6">
                            <h4 className="text-lg font-semibold text-navy-900 mb-3">Notable Universities:</h4>
                            <ul className="space-y-1">
                              {country.universities.map((university, uniIndex) => {
                                const isMoreEntry = university.startsWith('and ');
                                return (
                                  <li key={uniIndex} className={`flex items-center ${isMoreEntry ? 'text-primary-600 font-medium italic' : 'text-gray-700'}`}>
                                    <span className={`mr-2 ${isMoreEntry ? 'text-primary-500' : 'text-primary-600'}`}>
                                      {isMoreEntry ? '→' : '•'}
                                    </span>
                                    {isMoreEntry ? (
                                      <Link 
                                        to="/contact" 
                                        className="text-primary-600 font-medium italic hover:text-primary-700 hover:underline transition-colors duration-200 cursor-pointer"
                                      >
                                        {university}
                                      </Link>
                                    ) : (
                                      <span>{university}</span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                        <Link 
                          to="/contact" 
                          className="btn btn-primary btn-small hover-glow inline-block"
                        >
                          Apply Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Universities;
