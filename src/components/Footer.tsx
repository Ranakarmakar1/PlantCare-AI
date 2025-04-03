import React from 'react';
import {  Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-lg font-semibold">PlantCare AI</h3>
        <p className="text-gray-300 text-sm">
          Revolutionizing agriculture with AI-powered plant disease detection.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:contact@plantcareai.com" className="text-gray-300 hover:text-white">
            <Mail className="h-6 w-6" />
          </a>
          
        </div>
        <p className="text-gray-400 text-xs mt-4">&copy; {new Date().getFullYear()} PlantCare AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
