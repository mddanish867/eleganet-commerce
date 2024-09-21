import React from 'react';
import { Link } from 'react-router-dom';

const RecentSearches = () => {
  const recentSearches = [
    { id: 16, name: 'Summer T-Shirt', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 17, name: 'Running Shoes', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 18, name: 'Wireless Headphones', image: 'https://dummyimage.com/300x200/000/fff' },
    { id: 19, name: 'Smartwatch', image: 'https://dummyimage.com/300x200/000/fff' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Recent Searches</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {recentSearches.map(item => (
            <Link key={item.id} to={`/search?q=${encodeURIComponent(item.name)}`} className="flex items-center bg-white p-2 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-3" />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentSearches;