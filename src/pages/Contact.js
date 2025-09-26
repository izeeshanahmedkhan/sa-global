import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../assets/content';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    city: '',
    phoneNumber: '',
    nationality: '',
    qualification: '',
    gradeCgpaPercentage: '',
    englishLanguageTest: '',
    countryPreference: '',
    preferredCourse: '',
    query: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('Y6ZeHuxrzkxYGjCm3YTX');
  }, []);

  const validate = () => {
    let newErrors = {};
    
    // Required fields validation
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    
    // Email validation
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Phone number validation
    if (formData.phoneNumber && !/^[+]?[0-9\s\-()]{10,}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'radio' ? (checked ? value : '') : value,
    });
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // EmailJS configuration
      const serviceId = 'service_gmail'; // Replace with your EmailJS service ID
      const templateId = 'template_saglobal'; // Replace with your EmailJS template ID
      const publicKey = 'Y6ZeHuxrzkxYGjCm3YTX'; // Your EmailJS public key

      // Prepare email template parameters
      const templateParams = {
        to_email: 'info@saglobal.org',
        from_name: formData.name,
        from_email: formData.email || 'noreply@saglobal.org',
        phone: formData.phoneNumber,
        dob: formData.dob,
        city: formData.city,
        nationality: formData.nationality,
        qualification: formData.qualification,
        grade_cgpa: formData.gradeCgpaPercentage,
        english_test: formData.englishLanguageTest,
        country_preference: formData.countryPreference,
        preferred_course: formData.preferredCourse,
        query: formData.query,
        subject: `New Student Inquiry - ${formData.name}`,
        message: `
New Student Inquiry from SA Global Website

Personal Information:
- Name: ${formData.name}
- Date of Birth: ${formData.dob}
- Email: ${formData.email}
- Phone: ${formData.phoneNumber}
- City: ${formData.city}
- Nationality: ${formData.nationality}

Academic Information:
- Qualification: ${formData.qualification}
- Grade/CGPA/Percentage: ${formData.gradeCgpaPercentage}
- English Language Test: ${formData.englishLanguageTest}

Study Preferences:
- Country Preference: ${formData.countryPreference}
- Preferred Course: ${formData.preferredCourse}

Additional Query:
${formData.query}

---
This inquiry was submitted through the SA Global website contact form.
        `
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: '', dob: '', email: '',
        city: '', phoneNumber: '', nationality: '',
        qualification: '', gradeCgpaPercentage: '', englishLanguageTest: '',
        countryPreference: '', preferredCourse: '', query: '',
      });
      setErrors({});
      
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',
    'Bangladesh', 'Belarus', 'Belgium', 'Brazil', 'Bulgaria', 'Cambodia', 'Canada', 'Chile', 'China',
    'Colombia', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Egypt', 'Estonia', 'Finland',
    'France', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Hungary', 'Iceland', 'India', 'Indonesia',
    'Ireland', 'Israel', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Latvia',
    'Lebanon', 'Lithuania', 'Luxembourg', 'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand',
    'Nigeria', 'Norway', 'Pakistan', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania',
    'Russia', 'Saudi Arabia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea',
    'Spain', 'Sri Lanka', 'Sweden', 'Switzerland', 'Thailand', 'Turkey', 'Ukraine', 'United Arab Emirates',
    'United Kingdom', 'United States', 'Vietnam', 'Other'
  ];

  const countryPreferences = [
    'Australia', 'United Kingdom', 'USA', 'Dubai', 'Canada', 'Ireland', 'New Zealand', 'Singapore'
  ];

  return (
    <div>
      {/* Breadcrumbs */}
      <section className="bg-gradient-to-br from-[#0A1E3E] to-[#1E3A8A] py-4">
        <div className="container-custom">
          <nav className="flex space-x-2 text-sm">
            <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</Link>
            <span className="text-blue-200">/</span>
            <span className="text-white font-medium">Contact</span>
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
              {content.contact.hero.title}
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              {content.contact.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="card p-8 h-fit sticky top-24 animate-fade-in-left">
                <h3 className="text-2xl font-bold text-navy-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  {/* Phone section commented out - will be updated later */}
                  {/* <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Phone</h4>
                      <p className="text-gray-600">{content.contactInfo.phone}</p>
                      <p className="text-gray-600">{content.contactInfo.phone2}</p>
                    </div>
                  </div> */}

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Email</h4>
                      <p className="text-gray-600">{content.contactInfo.email}</p>
                      <p className="text-gray-600">{content.contactInfo.email2}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Address</h4>
                      <p className="text-gray-600">{content.contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-600 text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-900 mb-1">Hours</h4>
                      <p className="text-gray-600">{content.contactInfo.hours}</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold text-navy-900 mb-4">Follow Us</h4>
                    <div className="flex space-x-3">
                      <a href="https://facebook.com" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <span className="text-white text-sm font-bold">f</span>
                      </a>
                      <a href="https://twitter.com" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <span className="text-white text-sm font-bold">t</span>
                      </a>
                      <a href="https://linkedin.com" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <span className="text-white text-xs font-bold">in</span>
                      </a>
                      <a href="https://instagram.com" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <span className="text-white text-xs font-bold">ig</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card p-8 animate-fade-in-right">
                <h2 className="text-3xl font-bold text-navy-900 mb-8 text-center">
                  {content.contact.form.title}
                </h2>
                
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center">
              <span className="text-green-600 text-xl mr-3">✅</span>
              <div>
                <h3 className="text-green-800 font-semibold">Inquiry Submitted Successfully!</h3>
                <p className="text-green-700 text-sm">Thank you for your interest. We'll get back to you within 24 hours.</p>
                <p className="text-green-600 text-xs mt-1">A confirmation email has been sent to info@saglobal.org</p>
              </div>
            </div>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center">
              <span className="text-red-600 text-xl mr-3">❌</span>
              <div>
                <h3 className="text-red-800 font-semibold">Submission Failed</h3>
                <p className="text-red-700 text-sm">Please check your information and try again, or contact us directly.</p>
                {errors.general && (
                  <p className="text-red-600 text-xs mt-1 font-medium">Error: {errors.general}</p>
                )}
              </div>
            </div>
          </div>
        )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* 1. Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                        errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                      }`} 
                      required 
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* 2. Date of birth (DOB) & 3. Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                      <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                        }`} 
                        required 
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>


                  {/* 5. City (required) & 6. Phone Number (required) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                      <input type="text" name="city" value={formData.city} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.city ? 'border-red-500' : 'border-gray-300'}`} required />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`} required />
                      {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
                    </div>
                  </div>

                  {/* 7. Nationality & 8. Qualification */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nationality *</label>
                      <select name="nationality" value={formData.nationality} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                        <option value="">Select Nationality</option>
                        {countries.map((country) => (
                          <option key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Qualification *</label>
                      <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
                    </div>
                  </div>


                  {/* 9. Grade/CGPA/Percentage & 10. English Language Test */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Grade/CGPA/Percentage *</label>
                      <input type="text" name="gradeCgpaPercentage" value={formData.gradeCgpaPercentage} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">Have you taken any English Language Test? *</label>
                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input type="radio" name="englishLanguageTest" value="yes" checked={formData.englishLanguageTest === 'yes'} onChange={handleChange} className="mr-2" required />
                          <span className="text-gray-700">Yes</span>
                        </label>
                        <label className="flex items-center">
                          <input type="radio" name="englishLanguageTest" value="no" checked={formData.englishLanguageTest === 'no'} onChange={handleChange} className="mr-2" required />
                          <span className="text-gray-700">No</span>
                        </label>
                      </div>
                    </div>
                  </div>


                  {/* 11. Country Preference & 12. Preferred Course */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country Preference *</label>
                      <select name="countryPreference" value={formData.countryPreference} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required>
                        <option value="">Select Country Preference</option>
                        {countryPreferences.map((country) => (
                          <option key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                            {country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Course *</label>
                      <input type="text" name="preferredCourse" value={formData.preferredCourse} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" required />
                    </div>
                  </div>

                  {/* 20. Any Query (textarea) */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Any Query</label>
                    <textarea name="query" value={formData.query} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent" placeholder="Please share any additional questions or information..."></textarea>
                  </div>

                  {/* 21. Submit button */}
                  <div className="pt-6">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`btn btn-primary btn-large w-full hover-glow ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        'Submit Inquiry'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;