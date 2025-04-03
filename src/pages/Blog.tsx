import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "AI in Agriculture: A Strategic Guide for Industry Leaders [2025-2030]",
    date: "March 28, 2025",
    excerpt: "Explore how artificial intelligence is transforming modern farming practices through innovative disease detection methods.",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?fit=crop&w=800&h=400",
    url: "https://www.startus-insights.com/innovators-guide/ai-in-agriculture-strategic-guide/"
  },
  {
    id: 2,
    title: "A compact deep learning approach integrating depthwise convolutions and spatial attention for plant disease classification",
    date: "April 2, 2025",
    excerpt: "Deep learning models are revolutionizing how we identify and treat plant diseases. Learn about the latest developments.",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?fit=crop&w=800&h=400",
    url: "https://plantmethods.biomedcentral.com/articles/10.1186/s13007-025-01325-4"
  },
  {
    id: 3,
    title: "Regenerative Agriculture: A New Era for Sustainable Farming",
    date: "March 5, 2024",
    excerpt: "How Regenerative agriculture goes beyond sustainability, actively restoring soil health and enhancing ecosystem resilience for a greener future.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?fit=crop&w=800&h=400",
    url: "https://www.nicheagriculture.com/regenerative-agriculture-sustainable-farming/"
  }
];

function Blog() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Latest Updates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map(post => (
          <a
            key={post.id}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-green-600 mb-2">{post.date}</p>
              <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <span className="text-green-600 font-medium hover:text-green-700">
                Read More →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blog;
