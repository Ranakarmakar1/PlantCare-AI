import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-600' : 'text-gray-600 hover:text-green-600';
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">PlantCare AI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center">
            <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}>Home</Link>
            <Link to="/detection" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/detection')}`}>Disease Detection</Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}>About</Link>
            <Link to="/contributors" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contributors')}`}>Contributors</Link>
            <Link to="/research" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/research')}`}>Research</Link>
            <Link to="/feedback" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/feedback')}`}>Feedback</Link>
            <Link to="/blog" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/blog')}`}>Blog</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="sm:hidden bg-white shadow-md py-2">
            <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/detection" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Disease Detection</Link>
            <Link to="/about" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contributors" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contributors</Link>
            <Link to="/research" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Research</Link>
            <Link to="/feedback" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Feedback</Link>
            <Link to="/blog" className="block px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={() => setIsOpen(false)}>Blog</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
