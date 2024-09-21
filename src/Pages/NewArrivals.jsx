import React from 'react';
import ProductCard from './ProductCard';

const NewArrivals = () => {
  const newArrivals = [
    { id: 5, name: 'New Arrival 1', description: 'Description 5', price: 89.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.3 },
    { id: 6, name: 'New Arrival 2', description: 'Description 6', price: 129.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.6 },
    { id: 7, name: 'New Arrival 3', description: 'Description 7', price: 69.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.1 },
    { id: 8, name: 'New Arrival 4', description: 'Description 8', price: 159.99, image: 'https://dummyimage.com/300x200/000/fff', rating: 4.9 },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;