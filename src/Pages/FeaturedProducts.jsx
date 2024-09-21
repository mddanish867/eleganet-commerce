import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const featuredProducts = [
    { id: 1, name: 'Featured Product 1', description: 'Description 1', price: 99.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.5 },
    { id: 2, name: 'Featured Product 2', description: 'Description 2', price: 149.99, image: 'https://dummyimage.com/400x300/00ff00/000', rating: 4.8 },
    { id: 3, name: 'Featured Product 3', description: 'Description 3', price: 79.99, image: 'https://dummyimage.com/600x400/0000ff/fff', rating: 4.2 },
    { id: 4, name: 'Featured Product 4', description: 'Description 4', price: 199.99, image: 'https://dummyimage.com/800x600/ff0000/fff', rating: 4.7 },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;