import React, { useState } from 'react'
import { ShoppingCart, Search, User, Menu, X, ChevronDown } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-2 text-sm text-gray-600">
            <p>Free shipping on orders over $100</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-600">Track Order</a>
              <a href="#" className="hover:text-blue-600">Support</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-blue-600">TechNova</a>
              <nav className="hidden md:flex space-x-8">
                <div className="group relative">
                  <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                    Products <ChevronDown size={16} className="ml-1" />
                  </a>
                  <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg py-2 hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Laptops</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Smartphones</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Accessories</a>
                  </div>
                </div>
                <a href="#" className="text-gray-700 hover:text-blue-600">Deals</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
              </nav>
              <div className="flex items-center space-x-4">
                <button className="text-gray-700 hover:text-blue-600">
                  <Search size={20} />
                </button>
                <button className="text-gray-700 hover:text-blue-600">
                  <User size={20} />
                </button>
                <button className="text-gray-700 hover:text-blue-600">
                  <ShoppingCart size={20} />
                </button>
                <button className="md:hidden text-gray-700 hover:text-blue-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Deals</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      )}

      <main>
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Discover the Future of Tech</h1>
                <p className="text-xl mb-8">Explore our cutting-edge devices and accessories.</p>
                <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition duration-300">Shop Now</a>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=400&width=600" alt="Latest Tech Gadget" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden group">
                  <div className="relative">
                    <img src={`/placeholder.svg?height=300&width=400&text=Product ${item}`} alt={`Product ${item}`} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                      <button className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition duration-300">Quick View</button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-bold">$299.99</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Why Choose TechNova?</h2>
              <p className="text-gray-600 mb-8">We offer the latest technology, exceptional customer service, and unbeatable prices.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
                  <p className="text-gray-600">We stand behind every product we sell.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
                  <p className="text-gray-600">Get your products delivered in no time.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-blue-600 mb-4">
                    <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Our team is always here to help you.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={`/placeholder.svg?height=200&width=400&text=News ${item}`} alt={`News ${item}`} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Tech News Title {item}</h3>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="text-blue-600 hover:underline">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="mb-8">Subscribe to our newsletter for the latest tech news and exclusive deals.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-300" />
                <button type="submit" className="bg-white text-blue-600 px-6 py-2 rounded-r-full hover:bg-blue-50 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Laptops</a></li>
                <li><a href="#" className="hover:text-blue-400">Smartphones</a></li>
                <li><a href="#" className="hover:text-blue-400">Accessories</a></li>
                <li><a href="#" className="hover:text-blue-400">Deals</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                <li><a href="#" className="hover:text-blue-400">FAQs</a></li>
                <li><a href="#" className="hover:text-blue-400">Shipping</a></li>
                <li><a href="#" className="hover:text-blue-400">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
                <li><a href="#" className="hover:text-blue-400">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-blue-400">Facebook</a>
                <a href="#" className="hover:text-blue-400">Twitter</a>
                <a href="#" className="hover:text-blue-400">Instagram</a>
                <a href="#" className="hover:text-blue-400">LinkedIn</a>
              </div>
              <p>Follow us for tech tips and exclusive offers.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; `{Date.now()}` TechNova. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}