import React from 'react';

const ComingSoon = () => {
  const comingSoonProducts = [
    { id: 13, name: 'Upcoming Product 1', image: 'https://dummyimage.com/300x200/000/fff', releaseDate: '2023-08-15' },
    { id: 14, name: 'Upcoming Product 2', image: 'https://dummyimage.com/300x200/000/fff', releaseDate: '2023-09-01' },
    { id: 15, name: 'Upcoming Product 3', image: 'https://dummyimage.com/300x200/000/fff', releaseDate: '2023-09-15' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Coming Soon</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonProducts.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">{product.name}</h3>
                <p className="text-gray-600">Release Date: {product.releaseDate}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;