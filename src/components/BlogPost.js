import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostBySlug } from '../assets/content';

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div>
        {/* Breadcrumbs */}
        <section className="bg-gradient-to-br from-[#0A1E3E] to-[#4A90E2] py-4 rounded-b-lg shadow-sm">
          <div className="container-custom">
            <nav className="flex space-x-2 text-sm">
              <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</Link>
              <span className="text-blue-200">/</span>
              <Link to="/blog" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Blog</Link>
              <span className="text-blue-200">/</span>
              <span className="text-white font-medium">Post Not Found</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#1a365d] via-[#4a90e2] to-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="container-custom relative z-10">
            <div className="text-center max-w-5xl mx-auto px-4">
              <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
                Post Not Found
              </h1>
              <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md mb-8">
                The blog post you're looking for doesn't exist.
              </p>
              <Link 
                to="/blog" 
                className="inline-flex items-center px-8 py-4 bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300"
              >
                Back to Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div>
      {/* Breadcrumbs */}
      <section className="bg-gradient-to-br from-[#0A1E3E] to-[#4A90E2] py-4 rounded-b-lg shadow-sm">
        <div className="container-custom">
          <nav className="flex space-x-2 text-sm">
            <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</Link>
            <span className="text-blue-200">/</span>
            <Link to="/blog" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Blog</Link>
            <span className="text-blue-200">/</span>
            <span className="text-white font-medium">{post.title}</span>
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
            <div className="mb-6">
              <span className="bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full border border-white border-opacity-30">
                {post.category}
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-100 text-xl font-light drop-shadow-md">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">Key Highlights</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-600 text-lg">•</span>
                      <span>Comprehensive guide to international education</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-600 text-lg">•</span>
                      <span>Expert insights and practical advice</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-600 text-lg">•</span>
                      <span>Real-world examples and case studies</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-navy-900">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    {post.content}
                  </p>
                  
                  <h2 className="text-3xl font-bold text-navy-900">Main Content</h2>
                  <p className="text-gray-700 leading-relaxed">
                    This is where the full blog post content would go. The content would be dynamically loaded based on the blog post slug. For now, this is placeholder content that demonstrates the layout and styling of the blog post page.
                  </p>
                  
                  <h2 className="text-3xl font-bold text-navy-900">Conclusion</h2>
                  <p className="text-gray-700 leading-relaxed">
                    In conclusion, this blog post provides valuable insights and guidance for students considering international education. We hope this information helps you make informed decisions about your academic future.
                  </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">👤</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-900">{post.author}</h4>
                        <p className="text-sm text-gray-600">Education Consultant</p>
                      </div>
                    </div>
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <span className="text-white text-sm font-bold">f</span>
                      </button>
                      <button className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <span className="text-white text-sm font-bold">t</span>
                      </button>
                      <button className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                        <span className="text-white text-xs font-bold">in</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
