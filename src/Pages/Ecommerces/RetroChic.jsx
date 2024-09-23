import React, { useRef } from 'react'
import { ShoppingBag, Search, User, ChevronLeft, ChevronRight } from 'lucide-react'

export default function HomePage() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef
      if (direction === 'left') {
        current.scrollBy({ left: -200, behavior: 'smooth' })
      } else {
        current.scrollBy({ left: 200, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-screen bg-sepia-100 text-sepia-800 font-serif">
      <header className="bg-sepia-200 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-3xl font-bold italic">Retro Chic</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-sepia-600">Women</a>
              <a href="#" className="hover:text-sepia-600">Men</a>
              <a href="#" className="hover:text-sepia-600">Accessories</a>
              <a href="#" className="hover:text-sepia-600">Vintage Finds</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hover:text-sepia-600">
                <Search size={20} />
              </button>
              <button className="hover:text-sepia-600">
                <User size={20} />
              </button>
              <button className="hover:text-sepia-600">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 bg-sepia-300">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-4">Timeless Elegance</h1>
              <p className="text-xl mb-8">Discover our curated collection of vintage-inspired fashion.</p>
              <a href="#" className="bg-sepia-800 text-sepia-100 px-8 py-3 rounded-full hover:bg-sepia-700 transition duration-300">Shop Now</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Collection</h2>
            <div className="relative">
              <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-sepia-200 p-2 rounded-full hover:bg-sepia-300 transition duration-300">
                <ChevronLeft size={24} />
              </button>
              <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide space-x-6 py-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="flex-none w-64">
                    <div className="bg-sepia-200 rounded-lg overflow-hidden shadow-md">
                      <img src={`/placeholder.svg?height=300&width=300&text=Vintage ${item}`} alt={`Vintage ${item}`} className="w-full h-64 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Vintage Item {item}</h3>
                        <p className="text-sepia-600 mb-4">A timeless piece for your wardrobe.</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold">$79.99</span>
                          <button className="bg-sepia-800 text-sepia-100 px-4 py-2 rounded-full hover:bg-sepia-700 transition duration-300">Add to Bag</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-sepia-200 p-2 rounded-full hover:bg-sepia-300 transition duration-300">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-sepia-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-lg mb-6">Retro Chic brings you the best of vintage-inspired fashion. We curate timeless pieces that blend classic elegance with modern sensibilities.</p>
                <a href="#" className="text-sepia-800 border-b-2 border-sepia-800 hover:text-sepia-600 hover:border-sepia-600 transition duration-300">Learn More</a>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=400&width=600&text=Vintage Store" alt="Vintage Store" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Style Inspiration</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-sepia-200 rounded-lg overflow-hidden shadow-md">
                  <img src={`/placeholder.svg?height=400&width=400&text=Style ${item}`} alt={`Style ${item}`} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Vintage Look {item}</h3>
                    <p className="text-sepia-600 mb-4">Get inspired by our curated vintage looks.</p>
                    <a href="#" className="text-sepia-800 hover:text-sepia-600 transition duration-300">See More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-sepia-300">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Retro Revolution</h2>
              <p className="mb-8">Subscribe to our newsletter for vintage fashion tips, exclusive deals, and new arrivals.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-sepia-400" />
                <button type="submit" className="bg-sepia-800 text-sepia-100 px-6 py-2 rounded-r-full hover:bg-sepia-700 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sepia-800 text-sepia-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-sepia-300">Women</a></li>
                <li><a href="#" className="hover:text-sepia-300">Men</a></li>
                <li><a href="#" className="hover:text-sepia-300">Accessories</a></li>
                <li><a href="#" className="hover:text-sepia-300">Vintage Finds</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-sepia-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-sepia-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-sepia-300">Size Guide</a></li>
                <li><a href="#" className="hover:text-sepia-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-sepia-300">Our Story</a></li>
                <li><a href="#" className="hover:text-sepia-300">Blog</a></li>
                <li><a href="#" className="hover:text-sepia-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-sepia-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-sepia-300">Facebook</a>
                <a href="#" className="hover:text-sepia-300">Instagram</a>
                <a href="#" className="hover:text-sepia-300">Pinterest</a>
              </div>
              <p>Follow us for vintage style inspiration.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-sepia-700 text-center">
            <p>&copy; `{Date.now()}` Retro Chic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}