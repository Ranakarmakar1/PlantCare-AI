import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-600' : 'text-gray-600 hover:text-green-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-800">PlantCare AI</span>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/detection" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/detection')}`}>
              Disease Detection
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/contributors" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contributors')}`}>
              Contributors
            </Link>
            <Link to="/research" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/research')}`}>
              Research
            </Link>
            <Link to="/feedback" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/feedback')}`}>
              Feedback
            </Link>
            <Link to="/blog" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/blog')}`}>
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
