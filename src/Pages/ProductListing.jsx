import React, { useState } from 'react'
import { Star, Filter, X, Heart } from 'lucide-react'

const ProductListing = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 99.99, rating: 4.5, image: '/placeholder.svg?height=300&width=300' },
    { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.8, image: '/placeholder.svg?height=300&width=300' },
    { id: 3, name: 'Laptop Backpack', price: 79.99, rating: 4.2, image: '/placeholder.svg?height=300&width=300' },
    { id: 4, name: 'Bluetooth Speaker', price: 129.99, rating: 4.7, image: '/placeholder.svg?height=300&width=300' },
    { id: 5, name: 'Fitness Tracker', price: 89.99, rating: 4.4, image: '/placeholder.svg?height=300&width=300' },
    { id: 6, name: 'Portable Charger', price: 49.99, rating: 4.6, image: '/placeholder.svg?height=300&width=300' },
    { id: 7, name: 'Wireless Mouse', price: 39.99, rating: 4.3, image: '/placeholder.svg?height=300&width=300' },
    { id: 8, name: 'Noise-Canceling Headphones', price: 249.99, rating: 4.9, image: '/placeholder.svg?height=300&width=300' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Our Products</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className={`md:w-1/4 bg-white p-6 rounded-lg shadow-sm ${isFilterOpen ? 'fixed inset-0 z-50 overflow-auto' : 'hidden md:block'}`}>
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="text-xl font-semibold text-gray-800">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Price Range</h3>
                <input type="range" min="0" max="500" className="w-full" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>$0</span>
                  <span>$500</span>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Categories</h3>
                <div className="space-y-2">
                  {['Electronics', 'Accessories', 'Audio', 'Wearables'].map((category) => (
                    <label key={category} className="flex items-center text-gray-600">
                      <input type="checkbox" className="mr-2 form-checkbox text-blue-500" />
                      {category}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-gray-500'].map((color) => (
                    <button key={color} className={`w-6 h-6 rounded-full ${color} focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`} />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                    <button key={size} className="px-3 py-1 border border-gray-300 rounded-md text-sm text-gray-600 hover:bg-gray-100">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-gray-700">Rating</h3>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <Star key={rating} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">& Up</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setIsFilterOpen(true)}
                className="md:hidden flex items-center text-gray-600 hover:text-gray-900"
              >
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </button>
              <select className="p-2 border rounded-md text-gray-600 bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden transition duration-300 hover:shadow-md">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                    <button className="absolute top-2 right-2 p-1 rounded-full bg-white text-gray-600 hover:text-red-500 transition duration-300">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 font-medium">${product.price.toFixed(2)}</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Previous</button>
                <button className="px-3 py-1 rounded-md bg-blue-500 text-white">1</button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">2</button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">3</button>
                <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">Next</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListing