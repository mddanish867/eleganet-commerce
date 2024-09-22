import React from 'react'
import { Link } from 'react-router-dom'


function FeaturedCategories() {
  return (
    <div className="overflow-hidden w-full py-4">
    <div className="flex animate-scroll">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Clothing', 'Home & Garden', 'Sports','Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((category) => (
              <Link key={category} to={`/category/${category.toLowerCase()}`} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
                <h3 className="font-semibold text-lg mb-2">{category}</h3>
                <p className="text-gray-600">Explore {category}</p>
              </Link>
            ))}
          </div>
    </div>
    <style jsx>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scroll 40s linear infinite;
      }
    `}</style>
  </div>
  )
}

export default FeaturedCategories
