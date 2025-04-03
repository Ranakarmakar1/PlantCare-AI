import React from 'react';
import { Database, Brain, LineChart, Book, FlaskRound as Flask, Award } from 'lucide-react';

function Research() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">Research & Development</h1>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Advancing Agricultural AI</h2>
          <p className="text-gray-600">
            Our research combines deep learning with agricultural science to create
            an accurate and accessible plant disease detection system.
          </p>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Database className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">87,000+</h3>
          <p className="text-gray-600">Training Images</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">88.2%</h3>
          <p className="text-gray-600">Model Accuracy</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <Flask className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">20,000+</h3>
          <p className="text-gray-600">Validation Images</p>
        </div>
      </div>

      {/* Dataset Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-start space-x-4">
          <Database className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Dataset Selection</h2>
            <p className="text-gray-600 mb-4">
              Our model is trained on the comprehensive "New Plant Diseases Dataset" from Kaggle,
              featuring over 87,000 high-quality images of both healthy and diseased crop leaves.
              This dataset has been validated by the agricultural research community and used by
              more than 100,000 researchers worldwide.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <img
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?fit=crop&w=800&h=400"
                alt="Dataset visualization"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-sm text-gray-500 text-center">
                Visual representation of our diverse plant disease dataset
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Model Architecture Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-start space-x-4">
          <Brain className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Model Architecture</h2>
            <p className="text-gray-600 mb-6">
              We implemented a sophisticated Convolutional Neural Network (CNN) architecture,
              specifically designed for high-accuracy plant disease detection. The model
              incorporates multiple convolutional layers, max-pooling layers, and fully
              connected layers to extract meaningful features from plant images.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Training Split</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>80% Training Set (70,000+ images)</li>
                  <li>20% Validation Set (20,000+ images)</li>
                  <li>Independent Test Set for Final Evaluation</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Technologies Used</h3>
                <ul className="list-disc list-inside text-gray-600">
                  <li>TensorFlow & Keras</li>
                  <li>GPU Acceleration</li>
                  <li>Data Augmentation Techniques</li>
                </ul>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?fit=crop&w=800&h=400"
              alt="AI visualization"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
          </div>
        </div>
      </div>

      {/* Testing & Results Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-start space-x-4">
          <LineChart className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Testing & Performance</h2>
            <p className="text-gray-600 mb-6">
              Our model achieved an impressive 88.2% accuracy on real-world test cases,
              demonstrating its practical applicability in agricultural settings. The testing
              phase included various environmental conditions and disease types to ensure
              robust performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-green-700">88.2%</h4>
                <p className="text-sm text-green-600">Overall Accuracy</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-blue-700">92.5%</h4>
                <p className="text-sm text-blue-600">Precision Rate</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center">
                <h4 className="font-semibold text-purple-700">90.1%</h4>
                <p className="text-sm text-purple-600">Recall Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Publication Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-start space-x-4">
          <Book className="w-8 h-8 text-green-600 flex-shrink-0" />
          <div>
            <h2 className="text-2xl font-semibold mb-4">Research Publication</h2>
            <p className="text-gray-600 mb-6">
              Our research findings have been published in the IEMRE Journal, contributing to
              the growing field of AI-driven agricultural technology. The paper details our
              methodology, results, and potential applications in real-world farming scenarios.
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold mb-2">Publication Details</h3>
              <ul className="space-y-2 text-gray-600">
                <li><strong>Title:</strong> "Deep Learning-Based Plant Disease Detection: A Novel Approach to Agricultural Automation"</li>
                <li><strong>Journal:</strong> IEMRE Journal of Agricultural Technology</li>
                <li><strong>Publication Date:</strong> March 2024</li>
                <li><strong>Authors:</strong> Prof. Somnath Hazra, Rana Karmakar, Souvik Chatterjee, Rishita Rani</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;