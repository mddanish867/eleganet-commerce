import React from 'react';
import ProductCard from './ProductCard';

const Favorites = ({ favoriteItems, removeFavorite }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Favorites</h1>
      {favoriteItems.length === 0 ? (
        <p>You haven't added any items to your favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {favoriteItems.map(item => (
            <div key={item.id} className="relative">
              <ProductCard product={item} />
              <button
                onClick={() => removeFavorite(item.id)}
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-red-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;