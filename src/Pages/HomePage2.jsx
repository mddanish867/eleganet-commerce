import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import FeaturedBrands from './FeaturedBrands'
import Slider from './Slider'

const HomePage2 = () => {
  const featuredProducts = [
    { id: 1, name: 'Wireless Earbuds', price: 99.99, rating: 4.5, image: 'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg' },
    { id: 2, name: 'Smart Watch', price: 199.99, rating: 4.8, image: 'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg' },
    { id: 3, name: 'Laptop Backpack', price: 79.99, rating: 4.2, image: 'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg' },
    { id: 4, name: 'Bluetooth Speaker', price: 129.99, rating: 4.7, image: 'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
     <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to Our E-commerce Store</h1>
            <p className="text-xl md:text-2xl mb-8">Discover amazing products at unbeatable prices!</p>
            <Link to="/productslist" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300">
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* Slider*/}
      <div className='mt-1 mb-1'>
     {/* <Slider/>*/}

      </div>
      {/* Featured Products Section */}
      <section className="py-16">
        <div className="px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                <Link to="/product-details">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                </Link>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">${product.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/productslist" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800">
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <FeaturedBrands/>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Electronics', 'Clothing', 'Home & Garden', 'Sports'].map((category) => (
              <Link key={category} to={`/category/${category.toLowerCase()}`} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition duration-300">
                <h3 className="font-semibold text-lg mb-2">{category}</h3>
                <p className="text-gray-600">Explore {category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">Stay updated with our latest products and exclusive offers!</p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 rounded-full text-gray-900"
              />
              <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage2