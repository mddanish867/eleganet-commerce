import React, { useState } from "react";
import {
  ShoppingBag,
  Search,
  User,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    {
      name: "Artisan Cheeses",
      products: [
        {
          name: "Aged Cheddar",
          price: 12.99,
          image: "/placeholder.svg?height=200&width=200&text=Aged Cheddar",
        },
        {
          name: "Blue Cheese",
          price: 14.99,
          image: "/placeholder.svg?height=200&width=200&text=Blue Cheese",
        },
        {
          name: "Goat Cheese",
          price: 11.99,
          image: "/placeholder.svg?height=200&width=200&text=Goat Cheese",
        },
      ],
    },
    {
      name: "Cured Meats",
      products: [
        {
          name: "Prosciutto",
          price: 18.99,
          image: "/placeholder.svg?height=200&width=200&text=Prosciutto",
        },
        {
          name: "Salami",
          price: 15.99,
          image: "/placeholder.svg?height=200&width=200&text=Salami",
        },
        {
          name: "Chorizo",
          price: 16.99,
          image: "/placeholder.svg?height=200&width=200&text=Chorizo",
        },
      ],
    },
    {
      name: "Gourmet Preserves",
      products: [
        {
          name: "Fig Jam",
          price: 8.99,
          image: "/placeholder.svg?height=200&width=200&text=Fig Jam",
        },
        {
          name: "Truffle Honey",
          price: 22.99,
          image: "/placeholder.svg?height=200&width=200&text=Truffle Honey",
        },
        {
          name: "Olive Tapenade",
          price: 9.99,
          image: "/placeholder.svg?height=200&width=200&text=Olive Tapenade",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-amber-50 text-amber-900 font-sans">
      <header className="bg-amber-800 text-amber-50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              Gourmet Delights
            </a>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#"
                className="hover:text-amber-300 transition duration-300"
              >
                Shop
              </a>
              <a
                href="#"
                className="hover:text-amber-300 transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="hover:text-amber-300 transition duration-300"
              >
                Recipes
              </a>
              <a
                href="#"
                className="hover:text-amber-300 transition duration-300"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="hover:text-amber-300 transition duration-300">
                <Search size={20} />
              </button>
              <button className="hover:text-amber-300 transition duration-300">
                <User size={20} />
              </button>
              <button className="hover:text-amber-300 transition duration-300">
                <ShoppingBag size={20} />
              </button>
              <button
                className="md:hidden hover:text-amber-300 transition duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-amber-800 text-amber-50">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#"
              className="hover:text-amber-300 transition duration-300"
            >
              Shop
            </a>
            <a
              href="#"
              className="hover:text-amber-300 transition duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-amber-300 transition duration-300"
            >
              Recipes
            </a>
            <a
              href="#"
              className="hover:text-amber-300 transition duration-300"
            >
              Contact
            </a>
          </nav>
        </div>
      )}

      <main>
        <section className="py-20 bg-amber-700 text-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Savor the Artistry of Flavor
              </h1>
              <p className="text-xl mb-8">
                Discover our curated selection of artisanal foods from around
                the world.
              </p>
              <a
                href="#"
                className="bg-amber-50 text-amber-900 px-8 py-3 rounded-full hover:bg-amber-100 transition duration-300"
              >
                Explore Our Collection
              </a>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Gourmet Selection
            </h2>
            {categories.map((category, index) => (
              <div key={index} className="mb-8">
                <button
                  className="w-full flex justify-between items-center bg-amber-100 p-4 rounded-lg hover:bg-amber-200 transition duration-300"
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === index ? null : index
                    )
                  }
                >
                  <span className="text-xl font-semibold">{category.name}</span>
                  {expandedCategory === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </button>
                {expandedCategory === index && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {category.products.map((product, productIndex) => (
                      <div
                        key={productIndex}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {product.name}
                          </h3>
                          <p className="text-amber-600 font-bold mb-4">
                            ${product.price.toFixed(2)}
                          </p>
                          <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition duration-300">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-amber-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4">
                  Our Artisanal Process
                </h2>
                <p className="text-lg mb-6">
                  We partner with small-batch producers who are passionate about
                  their craft. Each product in our collection is carefully
                  selected for its exceptional quality and unique flavor
                  profile.
                </p>
                <a
                  href="#"
                  className="text-amber-700 font-semibold hover:text-amber-800 transition duration-300"
                >
                  Learn More About Our Producers
                </a>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/placeholder.svg?height=400&width=600&text=Artisanal Process"
                  alt="Artisanal Process"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Customer Favorites
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={`/placeholder.svg?height=200&width=200&text=Popular Item ${item}`}
                    alt={`Popular Item ${item}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      Popular Item {item}
                    </h3>
                    <p className="text-amber-600 font-bold mb-4">$24.99</p>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-amber-700 text-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Gourmet Community
              </h2>
              <p className="mb-8">
                Subscribe to our newsletter for recipes, pairing suggestions,
                and exclusive offers.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-amber-400 text-amber-900"
                />
                <button
                  type="submit"
                  className="bg-amber-900 px-6 py-2 rounded-r-full hover:bg-amber-800 transition duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
