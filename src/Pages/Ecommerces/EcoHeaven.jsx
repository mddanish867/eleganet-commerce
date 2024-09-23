import React from 'react'
import { ShoppingBag, Search, User, Leaf, Sun, Wind, Droplets } from 'lucide-react'

export default function HomePage() {
  const products = [
    { name: 'Bamboo Utensil Set', price: 24.99, image: '/placeholder.svg?height=300&width=300&text=Bamboo Utensils', tall: false },
    { name: 'Recycled Glass Vase', price: 39.99, image: '/placeholder.svg?height=400&width=300&text=Glass Vase', tall: true },
    { name: 'Organic Cotton Throw', price: 59.99, image: '/placeholder.svg?height=300&width=300&text=Cotton Throw', tall: false },
    { name: 'Reclaimed Wood Shelf', price: 89.99, image: '/placeholder.svg?height=400&width=300&text=Wood Shelf', tall: true },
    { name: 'Natural Fiber Rug', price: 129.99, image: '/placeholder.svg?height=300&width=300&text=Fiber Rug', tall: false },
    { name: 'Beeswax Candles', price: 19.99, image: '/placeholder.svg?height=300&width=300&text=Beeswax Candles', tall: false },
  ]

  return (
    <div className="min-h-screen bg-green-50 text-green-900 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="flex items-center space-x-2">
              <Leaf className="text-green-600" size={24} />
              <span className="text-2xl font-semibold">EcoHaven</span>
            </a>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="hover:text-green-600">Shop</a>
              <a href="#" className="hover:text-green-600">About</a>
              <a href="#" className="hover:text-green-600">Sustainability</a>
              <a href="#" className="hover:text-green-600">Blog</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hover:text-green-600">
                <Search size={20} />
              </button>
              <button className="hover:text-green-600">
                <User size={20} />
              </button>
              <button className="hover:text-green-600">
                <ShoppingBag size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Sustainable Living, Beautiful Home</h1>
              <p className="text-xl mb-8">Discover eco-friendly products that make a difference.</p>
              <a href="#" className="bg-white text-green-600 px-8 py-3 rounded-full hover:bg-green-100 transition duration-300">Shop Now</a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className={`bg-white rounded-lg shadow-md overflow-hidden ${product.tall ? 'row-span-2' : ''}`}>
                  <img src={product.image} alt={product.name} className={`w-full ${product.tall ? 'h-96' : 'h-64'} object-cover`} />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-green-600 font-bold mb-4">${product.price.toFixed(2)}</p>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full hover:bg-green-700 transition duration-300">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose EcoHaven?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Sun className="text-green-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
                <p>We use eco-friendly and renewable resources in all our products.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Wind className="text-green-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Carbon Neutral</h3>
                <p>Our operations are 100% carbon neutral, minimizing our environmental impact.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Droplets className="text-green-600 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Water Conservation</h3>
                <p>We implement water-saving techniques in our production processes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">Our Commitment to the Planet</h2>
                <p className="text-lg mb-6">At EcoHaven, we believe in creating beautiful homes without compromising our planet's future. Every product we offer is carefully selected for its sustainability and eco-friendly properties.</p>
                <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition duration-300">Learn More About Our Mission</a>
              </div>
              <div className="md:w-1/2">
                <img src="/placeholder.svg?height=400&width=600&text=Eco-Friendly Production" alt="Eco-Friendly Production" className="rounded-lg shadow-xl" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Green Community</h2>
              <p className="mb-8">Subscribe to our newsletter for eco-living tips, new product announcements, and exclusive offers.</p>
              <form className="flex">
                <input type="email" placeholder="Enter your email" className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-green-400 text-green-900" />
                <button type="submit" className="bg-green-800 px-6 py-2 rounded-r-full hover:bg-green-700 transition duration-300">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">All Products</a></li>
                <li><a href="#" className="hover:text-green-300">New Arrivals</a></li>
                <li><a href="#" className="hover:text-green-300">Best Sellers</a></li>
                <li><a href="#" className="hover:text-green-300">Sale</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">Our Story</a></li>
                <li><a href="#" className="hover:text-green-300">Sustainability</a></li>
                <li><a href="#" className="hover:text-green-300">Blog</a></li>
                <li><a href="#" className="hover:text-green-300">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-green-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-green-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-green-300">FAQ</a></li>
                <li><a href="#" className="hover:text-green-300">Care Instructions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-green-300">Facebook</a>
                <a href="#" className="hover:text-green-300">Instagram</a>
                <a href="#" className="hover:text-green-300">Twitter</a>
                <a href="#" className="hover:text-green-300">Pinterest</a>
              </div>
              <p>Follow us for eco-living inspiration and updates.</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-green-700 text-center">
            <p>&copy; `{Date.now()}` EcoHaven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}