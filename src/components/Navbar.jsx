import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-600" : "text-gray-600";
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/todo', label: 'Todo' },
  ];

  return (
    <nav className="bg-gradient-to-b from-black via-gray-900 to-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-white">
              Todo
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-red-800">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`hover:text-red-900 ${isActive(path)}`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 hover:text-gray-900 ${isActive(path)}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;