import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="border rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="mt-2 font-bold">${product.price}</p>
        <div className="flex items-center mt-2">
          {/* Implement star rating component */}
          <span className="ml-2 text-sm text-gray-600">{product.rating} stars</span>
        </div>
      </div>
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <button className="bg-white text-black px-4 py-2 rounded mr-2">Add to Cart</button>
          <button className="bg-white text-black px-4 py-2 rounded">Favorite</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;