import React from 'react';
import { Link } from 'react-router-dom';
import { Plane as Plant, Brain, Users } from 'lucide-react';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              AI-Powered Plant Disease Detection
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Revolutionizing agriculture through deep learning technology
            </p>
            <Link
              to="/detection"
              className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Plant className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Detection</h3>
              <p className="text-gray-600">
                Upload a photo and get immediate results about plant diseases
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Brain className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deep Learning</h3>
              <p className="text-gray-600">
                Powered by advanced AI models trained on extensive datasets
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                  Developed by engineering students with guidance from faculty.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;