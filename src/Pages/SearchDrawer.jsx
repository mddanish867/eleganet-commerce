import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchDrawer = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      // Simulated API call for suggestions
      const fakeSuggestions = [
        { id: 1, name: 'Summer T-Shirt' },
        { id: 2, name: 'Running Shoes' },
        { id: 3, name: 'Wireless Headphones' },
        { id: 4, name: 'Smartwatch' },
      ].filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setSuggestions(fakeSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm]);

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={onClose}
    >
      <div
        className="bg-orange-100 p-4 w-full max-w-lg rounded-lg shadow-lg mt-64"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center justify-center">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={onClose}
            className="bg-gray-300 p-2 rounded-r-lg text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul className="mt-4 space-y-2">
            {suggestions.map(suggestion => (
              <li key={suggestion.id}>
                <Link
                  to={`/search?q=${encodeURIComponent(suggestion.name)}`}
                  className="block p-2 hover:bg-gray-100 rounded"
                  onClick={onClose}
                >
                  {suggestion.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchDrawer;
