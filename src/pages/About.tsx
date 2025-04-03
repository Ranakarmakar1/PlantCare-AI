import React from 'react';
import { Leaf, Shield, Globe, Target } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden mb-16">
        <img
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?fit=crop&w=2000&h=500"
          alt="Agriculture technology"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/50 flex items-center">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Revolutionizing Agriculture with AI
            </h1>
            <p className="text-xl text-green-50">
              Empowering farmers with cutting-edge technology for early disease detection and crop protection
            </p>
          </div>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-6">About PlantCare AI</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              PlantCare AI is an innovative final year project that combines artificial intelligence 
              with agricultural science to address one of farming's most critical challenges: early 
              disease detection in crops. Our system provides farmers with an accessible, efficient 
              tool for identifying plant diseases through simple image uploads, enabling timely 
              intervention and crop protection.
            </p>
          </div>
          <div className="mt-8">
            <img
              src="https://images.unsplash.com/photo-1592150621744-aca64f48394a?fit=crop&w=1200&h=400"
              alt="Smart farming"
              className="w-full rounded-lg shadow-md mb-8"
            />
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            At PlantCare AI, we're committed to transforming agricultural practices through 
            innovative AI technology. Our mission is to make advanced plant disease detection 
            accessible to farmers worldwide, promoting sustainable farming and ensuring food security 
            for future generations.
          </p>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <Shield className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Early Detection</h3>
          <p className="text-gray-600">
            Identify plant diseases at early stages, preventing crop loss and reducing pesticide usage
            through timely intervention.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Globe className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
          <p className="text-gray-600">
            Supporting farmers across different regions with a technology that adapts to various
            crop types and farming conditions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <Target className="w-10 h-10 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-3">Precision Agriculture</h3>
          <p className="text-gray-600">
            Enabling data-driven decisions in farming through accurate disease identification
            and treatment recommendations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;