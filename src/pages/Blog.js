import React from 'react';
import { Link } from 'react-router-dom';
import { content, getAllBlogPosts } from '../assets/content';
import { blogImages } from '../assets/imageLinks';

const Blog = () => {
  const posts = getAllBlogPosts();

  return (
    <div>
      {/* Breadcrumbs */}
      <section className="bg-gradient-to-br from-[#0A1E3E] to-[#1E3A8A] py-4">
        <div className="container-custom">
          <nav className="flex space-x-2 text-sm">
            <Link to="/" className="text-white hover:text-blue-200 font-medium transition-colors duration-200">Home</Link>
            <span className="text-blue-200">/</span>
            <span className="text-white font-medium">Blog</span>
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
              {content.blog.hero.title}
            </h1>
            <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              {content.blog.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="card overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 bg-cover bg-center bg-no-repeat relative overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${blogImages.posts[post.slug] || '/src/assets/images/blog-posts/engineering-universities.jpg'})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2 opacity-90">📚</div>
                      <div className="text-sm font-medium">Education Blog</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-primary-100 text-primary-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="btn btn-primary w-full hover-glow"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
