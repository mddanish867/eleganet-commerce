import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Search, ShoppingCart } from 'lucide-react'

const Navbar = ({ onSearchClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img className="h-8 w-auto" src="https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link to="/productslist" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Products</Link>
              <Link to="/about" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link to="/contact" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={onSearchClick}
                className="p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <Search className="h-6 w-6" />
              </button>
              <Link to="/login" className="ml-4 px-3 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-200">
                Login
              </Link>
              <Link to="/cart" className="ml-4 p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/products" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Products</Link>
            <Link to="/about" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <button
                onClick={onSearchClick}
                className="p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <Search className="h-6 w-6" />
              </button>
              <Link to="/login" className="ml-auto px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">
                Login
              </Link>
              <Link to="/cart" className="ml-4 p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
