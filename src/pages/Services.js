import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../assets/content';

const Services = () => {
  return (
    <div>
      {/* Breadcrumbs */}
      <section className="bg-gradient-to-br from-[#0A1E3E] to-[#4A90E2] py-4 rounded-b-lg shadow-sm">
        <div className="container-custom">
          <nav className="flex space-x-2 text-sm">
            <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</Link>
            <span className="text-blue-200">/</span>
            <span className="text-white font-medium">Services</span>
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
              {content.services.hero.title}
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              {content.services.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.services.items.map((service, index) => (
              <div key={index} className="card p-8 hover-lift animate-fade-in-up stagger-2">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-navy-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
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
      </section>
    </div>
  );
};

export default Services;
