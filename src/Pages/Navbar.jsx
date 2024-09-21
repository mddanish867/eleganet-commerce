import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-500 shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-yellow-500">
          {/* Replace with your logo */}
          Logo
        </Link>
        
        <div className="hidden md:flex items-center space-x-6 ml-8">
          <div className="relative group">
            <button 
              onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
              className="flex items-center hover:text-orange-400"
            >
              Menu <ChevronDown className="ml-1" size={16} />
            </button>
            {isMegaMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg p-4">
                {/* Mega menu content */}
                <div className="space-y-2">
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 1</Link>
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 2</Link>
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 1</Link>
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 2</Link>
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 1</Link>
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 2</Link>
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 1</Link>
                  <Link to="/" className="block hover:text-yellow-500">Subcategory 2</Link>
                </div>
                
              </div>
              
            )}
          </div>
          
          <button 
            onClick={() => setIsSearchOpen(true)} 
            className="hover:text-orange-400"
          >
            Search
          </button>
          
          <Link to="/login" className="hover:text-orange-400">
            <User className="inline-block mr-1" /> Account
          </Link>
          
          <Link to="/cart" className="relative hover:text-orange-400">
            <ShoppingCart className="inline-block mr-1" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-yellow-500 text-black text-xs rounded-full flex items-center justify-center">
              2 {/* Replace with your cart count */}
            </span>
          </Link>
        </div>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-orange-100 z-40 p-4 justify-center">
          <div className="container mx-auto">
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full p-2 border rounded focus:outline-none focus:border-yellow-500"
            />
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="mt-2 p-2 bg-gray-200 rounded hover:bg-yellow-500 hover:text-white transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
