import React from 'react';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const bestSellers = [
    { id: 9, name: 'Best Seller 1', description: 'Description 9', price: 109.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.7 },
    { id: 10, name: 'Best Seller 2', description: 'Description 10', price: 139.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.9 },
    { id: 11, name: 'Best Seller 3', description: 'Description 11', price: 79.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.5 },
    { id: 12, name: 'Best Seller 4', description: 'Description 12', price: 189.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.8 },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;