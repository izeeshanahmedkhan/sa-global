import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../assets/content';
import { flagImages, guidanceImages, universityImages, universityLogos, coloredUniversityLogos, destinationImages, partnerCompanyLogos } from '../assets/imageLinks';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  // Refs for carousel control
  const universityCarouselRef = useRef(null);
  const partnersUniCarouselRef = useRef(null);
  const partnersCarouselRef = useRef(null);

  // State for controlling carousel animations (used in pauseCarousel function)
  const [, setUniversityCarouselPaused] = useState(false);
  const [, setPartnersUniCarouselPaused] = useState(false);
  const [, setPartnersCarouselPaused] = useState(false);

  // Function to pause and resume carousel
  const pauseCarousel = (ref, setPaused, duration = 1000) => {
    if (ref.current) {
      ref.current.style.animationPlayState = 'paused';
      setPaused(true);
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.animationPlayState = 'running';
          setPaused(false);
        }
      }, duration);
    }
  };

  // Touch/swipe handlers
  const handleTouchStart = (e, ref, setPaused) => {
    pauseCarousel(ref, setPaused, 500);
  };
  





  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
            {content.home.stats.items.map((stat, index) => (
              <div key={index} className="space-y-2 animate-fade-in-up stagger-1 hover-lift">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg font-medium text-navy-900">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Abroad Consultants Section - Responsive Grid */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-12 px-4 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">
              {content.home.studyAbroadConsultants.subtitle}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.studyAbroadConsultants.title}
            </h2>
            <div className="w-24 h-1 bg-navy-900 mx-auto"></div>
          </div>
          
          {/* Responsive Country Cards Grid - Joined Together - Full Width */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
            {content.home.studyAbroadConsultants.countries.map((country, index) => (
              <div 
                key={index} 
                className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] relative group overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Container with strict overflow control */}
                <div className="absolute inset-0 overflow-hidden" style={{ clipPath: 'inset(0)' }}>
                  <img
                    src={destinationImages[country.image]}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                    style={{ 
                      objectPosition: 'center center',
                      objectFit: 'cover',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 group-hover:via-black/60 group-hover:to-transparent transition-all duration-500 rounded-lg"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 xl:p-8 text-white z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-2 sm:mb-3 lg:mb-4 drop-shadow-lg">{country.name}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-gray-200 mb-3 sm:mb-4 lg:mb-6 leading-relaxed line-clamp-2 sm:line-clamp-3 drop-shadow-md">
                    {country.description}
                  </p>
                  <Link 
                    to={`/universities#${country.name === 'USA' ? 'united-states' : country.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white text-black px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-block shadow-lg text-xs sm:text-sm lg:text-base"
                  >
                    Learn More
                  </Link>
                </div>
                
                {/* Subtle border highlight on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Top University Recommendations Section - New Endless Carousel */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.topUniversityRecommendations.title}
            </h2>
            <div className="w-24 h-1 bg-navy-900 mx-auto"></div>
          </div>
          
          {/* New Endless University Recommendations Carousel */}
          <div className="relative overflow-hidden group">
            {/* Swipe Controls */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={() => pauseCarousel(universityCarouselRef, setUniversityCarouselPaused)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={() => pauseCarousel(universityCarouselRef, setUniversityCarouselPaused)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div 
              ref={universityCarouselRef} 
              className="flex animate-scroll-universities"
              onTouchStart={(e) => handleTouchStart(e, universityCarouselRef, setUniversityCarouselPaused)}
            >
              {/* First set of universities */}
              {content.home.topUniversityRecommendations.universities.map((university, index) => (
                <div key={`uni-set1-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-2 sm:mx-3">
                  <div className="relative h-80 sm:h-96 lg:h-[28rem] rounded-lg overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={universityImages[university.image]} 
                      alt={university.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-black/90 group-hover:via-black/60 group-hover:to-transparent transition-all duration-500"></div>
                    
                    {/* University Logo */}
                    <div className="absolute top-4 left-4 flex justify-start">
                      <div className="p-1">
                        <img 
                          src={universityLogos[university.logo] || universityLogos['cardiff-logo']} 
                          alt={`${university.name} Logo`}
                          className="h-28 w-auto object-contain filter brightness-0 invert"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2 leading-tight drop-shadow-lg">{university.name}</h3>
                        {university.welshName && (
                          <p className="text-sm text-gray-200 mb-2 drop-shadow-md">{university.welshName}</p>
                        )}
                        {university.shortName && (
                          <p className="text-lg font-semibold text-gray-200 mb-4 drop-shadow-md">{university.shortName}</p>
                        )}
                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-3 drop-shadow-md">
                          {university.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover border effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-500"></div>
                  </div>
                </div>
              ))}
              
              {/* Second set of universities (duplicate) */}
              {content.home.topUniversityRecommendations.universities.map((university, index) => (
                <div key={`uni-set2-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-2 sm:mx-3">
                  <div className="relative h-80 sm:h-96 lg:h-[28rem] rounded-lg overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={universityImages[university.image]} 
                      alt={university.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-black/90 group-hover:via-black/60 group-hover:to-transparent transition-all duration-500"></div>
                    
                    {/* University Logo */}
                    <div className="absolute top-4 left-4 flex justify-start">
                      <div className="p-1">
                        <img 
                          src={universityLogos[university.logo] || universityLogos['cardiff-logo']} 
                          alt={`${university.name} Logo`}
                          className="h-28 w-auto object-contain filter brightness-0 invert"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2 leading-tight drop-shadow-lg">{university.name}</h3>
                        {university.welshName && (
                          <p className="text-sm text-gray-200 mb-2 drop-shadow-md">{university.welshName}</p>
                        )}
                        {university.shortName && (
                          <p className="text-lg font-semibold text-gray-200 mb-4 drop-shadow-md">{university.shortName}</p>
                        )}
                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-3 drop-shadow-md">
                          {university.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover border effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-500"></div>
                  </div>
                </div>
              ))}
              
              {/* Third set of universities (duplicate) */}
              {content.home.topUniversityRecommendations.universities.map((university, index) => (
                <div key={`uni-set3-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-2 sm:mx-3">
                  <div className="relative h-80 sm:h-96 lg:h-[28rem] rounded-lg overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500">
                    <img 
                      src={universityImages[university.image]} 
                      alt={university.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent group-hover:from-black/90 group-hover:via-black/60 group-hover:to-transparent transition-all duration-500"></div>
                    
                    {/* University Logo */}
                    <div className="absolute top-4 left-4 flex justify-start">
                      <div className="p-1">
                        <img 
                          src={universityLogos[university.logo] || universityLogos['cardiff-logo']} 
                          alt={`${university.name} Logo`}
                          className="h-28 w-auto object-contain filter brightness-0 invert"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2 leading-tight drop-shadow-lg">{university.name}</h3>
                        {university.welshName && (
                          <p className="text-sm text-gray-200 mb-2 drop-shadow-md">{university.welshName}</p>
                        )}
                        {university.shortName && (
                          <p className="text-lg font-semibold text-gray-200 mb-4 drop-shadow-md">{university.shortName}</p>
                        )}
                        <p className="text-sm text-gray-200 leading-relaxed line-clamp-3 drop-shadow-md">
                          {university.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Hover border effect */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-lg transition-all duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Universities Section - New Endless Carousel */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.partnersUniversities.title}
            </h2>
            <div className="w-24 h-1 bg-navy-900 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              {content.home.partnersUniversities.description}
            </p>
          </div>
          
          {/* New Endless Carousel with Swipe Controls */}
          <div className="relative overflow-hidden group">
            {/* Swipe Controls */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={() => pauseCarousel(partnersUniCarouselRef, setPartnersUniCarouselPaused)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={() => pauseCarousel(partnersUniCarouselRef, setPartnersUniCarouselPaused)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div 
              ref={partnersUniCarouselRef} 
              className="flex animate-scroll"
              onTouchStart={(e) => handleTouchStart(e, partnersUniCarouselRef, setPartnersUniCarouselPaused)}
            >
              {/* First set of universities */}
              {content.home.partnersUniversities.universities.map((university, index) => (
                <div key={`set1-${index}`} className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-3">
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 p-4 sm:p-6">
                    {/* University Logo at top */}
                    <div className="flex justify-center mb-6">
                      <img 
                        src={coloredUniversityLogos[university.logo] || universityLogos['cardiff-logo']} 
                        alt={`${university.name} Logo`}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    
                    {/* University Name */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight">{university.name}</h3>
                      {university.locations && (
                        <p className="text-sm text-primary-600 font-medium">{university.locations}</p>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm text-center">
                      {university.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Second set of universities (duplicate for seamless loop) */}
              {content.home.partnersUniversities.universities.map((university, index) => (
                <div key={`set2-${index}`} className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-3">
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 p-4 sm:p-6">
                    {/* University Logo at top */}
                    <div className="flex justify-center mb-6">
                      <img 
                        src={coloredUniversityLogos[university.logo] || universityLogos['cardiff-logo']} 
                        alt={`${university.name} Logo`}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    
                    {/* University Name */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight">{university.name}</h3>
                      {university.locations && (
                        <p className="text-sm text-primary-600 font-medium">{university.locations}</p>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm text-center">
                      {university.description}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Third set of universities (duplicate for seamless loop) */}
              {content.home.partnersUniversities.universities.map((university, index) => (
                <div key={`set3-${index}`} className="flex-shrink-0 w-72 sm:w-80 mx-2 sm:mx-3">
                  <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 p-4 sm:p-6">
                    {/* University Logo at top */}
                    <div className="flex justify-center mb-6">
                      <img 
                        src={coloredUniversityLogos[university.logo] || universityLogos['cardiff-logo']} 
                        alt={`${university.name} Logo`}
                        className="h-16 w-auto object-contain"
                      />
                    </div>
                    
                    {/* University Name */}
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-bold text-navy-900 mb-2 leading-tight">{university.name}</h3>
                      {university.locations && (
                        <p className="text-sm text-primary-600 font-medium">{university.locations}</p>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm text-center">
                      {university.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section - New Endless Carousel */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
            {content.home.partners.title}
          </h2>
          <div className="w-24 h-1 bg-navy-900 mx-auto mb-12"></div>
          
          {/* New Endless Partners Carousel */}
          <div className="relative overflow-hidden group">
            {/* Swipe Controls */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={() => pauseCarousel(partnersCarouselRef, setPartnersCarouselPaused)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center text-navy-900 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
              onClick={() => pauseCarousel(partnersCarouselRef, setPartnersCarouselPaused)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div 
              ref={partnersCarouselRef} 
              className="flex animate-scroll-partners"
              onTouchStart={(e) => handleTouchStart(e, partnersCarouselRef, setPartnersCarouselPaused)}
            >
              {/* First set of partners */}
              {content.home.partners.logos.map((logo, index) => (
                <div key={`partners-set1-${index}`} className="flex-shrink-0 mx-4 sm:mx-6">
                  <div className="h-16 sm:h-20 w-32 sm:w-40 flex items-center justify-center bg-white rounded-lg shadow-lg px-4 sm:px-6">
                    <img 
                      src={partnerCompanyLogos[logo.image]} 
                      alt={logo.name}
                      className="h-12 sm:h-16 w-auto object-contain transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
              
              {/* Second set of partners (duplicate) */}
              {content.home.partners.logos.map((logo, index) => (
                <div key={`partners-set2-${index}`} className="flex-shrink-0 mx-4 sm:mx-6">
                  <div className="h-16 sm:h-20 w-32 sm:w-40 flex items-center justify-center bg-white rounded-lg shadow-lg px-4 sm:px-6">
                    <img 
                      src={partnerCompanyLogos[logo.image]} 
                      alt={logo.name}
                      className="h-12 sm:h-16 w-auto object-contain transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
              
              {/* Third set of partners (duplicate) */}
              {content.home.partners.logos.map((logo, index) => (
                <div key={`partners-set3-${index}`} className="flex-shrink-0 mx-4 sm:mx-6">
                  <div className="h-16 sm:h-20 w-32 sm:w-40 flex items-center justify-center bg-white rounded-lg shadow-lg px-4 sm:px-6">
                    <img 
                      src={partnerCompanyLogos[logo.image]} 
                      alt={logo.name}
                      className="h-12 sm:h-16 w-auto object-contain transition-all duration-300 hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.aboutOverview.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
              {content.home.aboutOverview.description}
            </p>
            <Link to="/contact" className="btn btn-primary btn-large hover-glow">
              {content.home.aboutOverview.button}
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.howItWorks.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.home.howItWorks.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {content.home.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center animate-fade-in-up stagger-2">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.destinations.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.home.destinations.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {content.home.destinations.items.map((destination, index) => (
              <div key={index} className="card p-6 lg:p-8 text-center hover-lift animate-fade-in-up stagger-2">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-12 rounded-lg overflow-hidden shadow-md mr-3">
                    <img 
                      src={flagImages[destination.flag]} 
                      alt={`${destination.name} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-2xl font-bold text-primary-600 bg-primary-100 px-3 py-1 rounded-lg">
                    {destination.shortName}
                  </div>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-navy-900 mb-4">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                  {destination.description}
                </p>
                <Link to={`/universities#${destination.name === 'USA' ? 'united-states' : destination.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn btn-primary btn-small hover-glow">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.testimonials.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.home.testimonials.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.home.testimonials.items.map((testimonial, index) => (
              <div key={index} className="card p-6 lg:p-8 text-center hover-lift animate-fade-in-up stagger-2">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-bold text-navy-900 mb-1">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.university}</div>
                  <div className="text-sm text-primary-600">{testimonial.country}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 lg:py-20">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
              {content.home.blogPreview.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              {content.home.blogPreview.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.home.blogPreview.items.map((post, index) => (
              <div key={index} className="card p-6 lg:p-8 hover-lift animate-fade-in-up stagger-2">
                <h3 className="text-xl font-bold text-navy-900 mb-4">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.summary}
                </p>
                <Link to="/blog" className="text-primary-600 hover:text-primary-700 font-semibold">
                  {post.readMore} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6">
                  {content.home.whyChooseUs.title}
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 mb-6">
                  {content.home.whyChooseUs.subtitle}
                </p>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  {content.home.whyChooseUs.description}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content.home.whyChooseUs.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-2xl">{benefit.icon}</span>
                    <span className="text-gray-700 text-sm lg:text-base">{benefit.text}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4">
                <Link to="/services" className="btn btn-primary btn-large hover-glow">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
              <img 
                src={guidanceImages[content.home.whyChooseUs.image]} 
                alt={content.home.whyChooseUs.imageText}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-900 bg-opacity-60"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🎓</div>
                  <div className="text-2xl font-bold mb-2">Why Choose Us</div>
                  <div className="text-gray-200">{content.home.whyChooseUs.imageText}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-primary-600 to-accent-600 text-white py-16 lg:py-20">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {content.home.callToAction.title}
            </h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              {content.home.callToAction.subtitle}
            </p>
            <Link to="/contact" className="btn btn-white btn-large hover-glow">
              {content.home.callToAction.button}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;