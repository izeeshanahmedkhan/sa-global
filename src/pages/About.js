import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../assets/content';
import { aboutImages, teamImages } from '../assets/imageLinks';

const About = () => {
  return (
    <div>
      {/* Updated About page with new sections */}
      {/* Breadcrumbs */}
      <section className="bg-gradient-to-br from-[#0A1E3E] to-[#4A90E2] py-4 rounded-b-lg shadow-sm">
        <div className="container-custom">
          <nav className="flex space-x-2 text-sm">
            <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</Link>
            <span className="text-blue-200">/</span>
            <span className="text-white font-medium">About</span>
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
              {content.about.hero.title}
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              {content.about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                  {content.about.mission.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
                  {content.about.mission.description}
                </p>
              </div>
              <ul className="space-y-4">
                {content.about.mission.points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary-600 text-xl mt-1">✓</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <img 
                src={aboutImages.mission} 
                alt="Our Mission" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎯</div>
                  <div className="text-2xl font-bold mb-2">Our Mission</div>
                  <div className="text-gray-200">Empowering students worldwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-100 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.about.vision.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              {content.about.vision.description}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.about.values.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.about.values.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.about.values.items.map((value, index) => (
              <div key={index} className="card p-8 text-center hover-lift animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
                  <div className="text-2xl">💎</div>
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-100 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.about.history.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.about.history.subtitle}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {content.about.history.timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-6 animate-fade-in-up stagger-2">
                  <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.about.team.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.about.team.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.about.team.members.map((member, index) => (
              <div key={index} className="card p-6 text-center hover-lift animate-fade-in-up stagger-2">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={teamImages[member.image]} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
