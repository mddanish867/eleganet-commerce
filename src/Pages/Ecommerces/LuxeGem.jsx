import React, { useState } from 'react'
import { ShoppingBag, Search, User, ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'

export default function HomePage() {
  const [currentProduct, setCurrentProduct] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    { name: 'Diamond Necklace', price: 4999.99, image: '/placeholder.svg?height=800&width=1200&text=Diamond Necklace' },
    { name: 'Sapphire Ring', price: 3499.99, image: '/placeholder.svg?height=800&width=1200&text=Sapphire Ring' },
    { name: 'Pearl Earrings', price: 1999.99, image: '/placeholder.svg?height=800&width=1200&text=Pearl Earrings' },
    { name: 'Gold Bracelet', price: 2499.99, image: '/placeholder.svg?height=800&width=1200&text=Gold Bracelet' },
  ]

  const nextProduct = () => setCurrentProduct((prev) => (prev + 1) % products.length)
  const prevProduct = () => setCurrentProduct((prev) => (prev - 1 + products.length) % products.length)

  return (
    <div className="min-h-screen bg-black text-white font-serif">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">Luxe Gems</a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-gold transition duration-300">Collections</a>
              <a href="#" className="hover:text-gold transition duration-300">About</a>
              <a href="#" className="hover:text-gold transition duration-300">Bespoke</a>
              <a href="#" className="hover:text-gold transition duration-300">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hover:text-gold transition duration-300">
                <Search size={20} />
              </button>
              <button className="hover:text-gold transition duration-300">
                <User size={20} />
              </button>
              <button className="hover:text-gold transition duration-300">
                <ShoppingBag size={20} />
              </button>
              <button className="md:hidden hover:text-gold transition duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center">
          <nav className="text-center">
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">Collections</a>
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">About</a>
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">Bespoke</a>
            <a href="#" className="block text-2xl mb-6 hover:text-gold transition duration-300">Contact</a>
          </nav>
        </div>
      )}

      <main className="pt-16">
        <section className="relative h-screen">
          <img src={products[currentProduct].image} alt={products[currentProduct].name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{products[currentProduct].name}</h1>
              <p className="text-2xl mb-8">${products[currentProduct].price.toFixed(2)}</p>
              <a href="#" className="bg-gold text-black px-8 py-3 rounded-full hover:bg-opacity-80 transition duration-300">View Details</a>
            </div>
          </div>
          <button onClick={prevProduct} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300">
            <ChevronLeft size={24} />
          </button>
          <button onClick={nextProduct} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 p-2 rounded-full hover:bg-opacity-30 transition duration-300">
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProduct(index)}
                className={`w-3 h-3 rounded-full ${index === currentProduct ? 'bg-gold' : 'bg-white bg-opacity-50'}`}
              />
            ))}
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {['Necklaces', 'Rings', 'Earrings', 'Bracelets'].map((category, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <img src={`/placeholder.svg?height=400&width=300&text=${category}`} alt={category} className="w-full h-96 object-cover transition duration-300 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a href="#" className="text-2xl font-semibold hover:text-gold transition duration-300">{category}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">The Art of Luxury</h2>
              <p className="text-lg mb-12">Each piece in our collection is meticulously crafted by master artisans, using only the finest materials and gemstones. Experience the pinnacle of luxury and elegance with our timeless designs.</p>
              <a href="#" className="text-gold border border-gold px-8 py-3 rounded-full hover:bg-gold hover:text-black transition duration-300">Discover Our Craftsmanship</a>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured in</h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {['Vogue', 'Elle', 'Harper\'s Bazaar', 'GQ'].map((magazine, index) => (
                <div key={index} className="text-2xl font-bold text-gray-500">{magazine}</div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Join Our Exclusive Circle</h2>
              <p className="mb-8">Be the first to know about new collections, special events, and exclusive offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-full focus:outline-none focus:ring-2 focus:ring-gold" />
                <button type="submit" className="bg-gold text-black px-6 py-2 rounded-r-full hover:bg-opacity-80 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Collections</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition duration-300">Necklaces</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Rings</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Earrings</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Bracelets</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition duration-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Care Guide</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About Luxe Gems</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gold transition duration-300">Our Story</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Craftsmanship</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-gold transition duration-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-gold transition duration-300">Facebook</a>
                <a href="#" className="hover:text-gold transition duration-300">Instagram</a>
                <a href="#" className="hover:text-gold transition duration-300">Pinterest</a>
              </div>
              <p>Follow us for exclusive previews and behind-the-scenes content.</p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p>&copy; `{Date.now()}` Luxe Gems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}