import React from 'react';
import ProductCard from './ProductCard';

const SimilarProducts = ({ currentProductId, category }) => {
  // This would typically come from an API call
  const similarProducts = [
    { id: 101, name: 'Similar Product 1', description: 'Description 1', price: 89.99, image: '/placeholder.svg?height=300&width=300', rating: 4.3 },
    { id: 102, name: 'Similar Product 2', description: 'Description 2', price: 99.99, image: '/placeholder.svg?height=300&width=300', rating: 4.5 },
    { id: 103, name: 'Similar Product 3', description: 'Description 3', price: 79.99, image: '/placeholder.svg?height=300&width=300', rating: 4.2 },
    { id: 104, name: 'Similar Product 4', description: 'Description 4', price: 109.99, image: '/placeholder.svg?height=300&width=300', rating: 4.7 },
  ].filter(product => product.id !== currentProductId);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Similar Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {similarProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;