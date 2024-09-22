import React, { useState } from 'react'
import { Star, Heart, ShoppingCart, Truck, Camera, ChevronRight } from 'lucide-react'

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const product = {
    name: 'Premium Wireless Headphones',
    description: 'Experience crystal-clear audio with our premium wireless headphones. Featuring advanced noise-cancellation technology and long-lasting battery life.',
    price: 299.99,
    rating: 4.8,
    reviews: 420,
    images: [
      'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg',
      'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg',
      'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg',
      'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue', 'Red'],
    seller: 'AudioTech Inc.',
    sellerRating: 4.9,
  }

  const reviewSummary = [
    { stars: 5, percentage: 70 },
    { stars: 4, percentage: 20 },
    { stars: 3, percentage: 5 },
    { stars: 2, percentage: 3 },
    { stars: 1, percentage: 2 },
  ]

  const customerPhotos = [
    '/placeholder.svg?height=100&width=100&text=User+Photo+1',
    '/placeholder.svg?height=100&width=100&text=User+Photo+2',
    '/placeholder.svg?height=100&width=100&text=User+Photo+3',
    '/placeholder.svg?height=100&width=100&text=User+Photo+4',
  ]

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row -mx-4">
          {/* Image Gallery */}
          <div className="lg:w-1/2 px-4 mb-8 lg:mb-0">
            <div className="sticky top-8">
              <div className="relative mb-4 group">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-300">
                    <Heart className="w-6 h-6 text-red-500" />
                  </button>
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-semibold">Hover to zoom</span>
                </div>
              </div>
              <div className="flex space-x-4 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-blue-500' : ''
                    }`}
                  >
                    <img src={image} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2 px-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>

            {/* Size Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                      selectedSize === size
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-gray-900' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  >
                    <span className="sr-only">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart and Buy Now buttons */}
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 bg-white text-blue-700 border border-blue-700 py-3 px-6 rounded-md  transition duration-300">
                Add to Cart
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
                Buy Now
              </button>
            </div>

            {/* Shipping Info */}
            <div className="flex items-center text-gray-600 mb-8">
              <Truck className="w-5 h-5 mr-2" />
              <span>Free shipping on orders over $100</span>
            </div>

            {/* Seller Info */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Seller Information</h3>
              <p className="text-gray-600 mb-2">{product.seller}</p>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.sellerRating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{product.sellerRating} Seller Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Description and Reviews */}
        <div className="mt-16 flex flex-col lg:flex-row">
          {/* Product Description */}
          <div className="lg:w-1/2 pr-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h2>
            <div className="prose max-w-none">
              <p>
                Our Premium Wireless Headphones offer an unparalleled audio experience. Featuring advanced
                noise-cancellation technology, you can immerse yourself in your favorite music without any distractions.
                The long-lasting battery life ensures that you can enjoy your audio for extended periods without
                interruption.
              </p>
              <p>
                Key Features:
              </p>
              <ul>
                <li>Advanced noise-cancellation technology</li>
                <li>High-quality audio drivers for crystal-clear sound</li>
                <li>Comfortable over-ear design for extended wear</li>
                <li>Up to 30 hours of battery life</li>
                <li>Quick charge capability - 5 minutes charge for 1 hour of playback</li>
                <li>Bluetooth 5.0 for stable wireless connection</li>
                <li>Built-in microphone for hands-free calls</li>
                <li>Compatible with voice assistants</li>
              </ul>
              <p>
                Whether you're a music enthusiast, a frequent traveler, or someone who appreciates high-quality audio,
                these headphones are designed to meet your needs. Experience music like never before with our Premium
                Wireless Headphones.
              </p>
            </div>
          </div>

          {/* Reviews and Ratings */}
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Customer Reviews</h2>
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                  />
                ))}
              </div>
              <span className="ml-2 text-xl font-semibold">{product.rating} out of 5</span>
            </div>
            <p className="text-gray-600 mb-4">{product.reviews} global ratings</p>

            {/* Review Summary */}
            <div className="space-y-2 mb-6">
              {reviewSummary.map((review) => (
                <div key={review.stars} className="flex items-center">
                  <span className="text-sm text-gray-600 w-12">{review.stars} star</span>
                  <div className="flex-1 h-4 mx-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${review.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-600 w-12">{review.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Customer Photos */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Photos</h3>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {customerPhotos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Customer photo ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-md"
                  />
                ))}
              </div>
            </div>

            {/* View All Reviews Link */}
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View all reviews
              <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Sticky Add to Cart for mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md lg:hidden">
        <div className="flex space-x-4">
          <button className="flex-1 bg-white text-blue-700 border border-blue-700 py-3 px-6 rounded-md transition duration-300">
            Add to Cart
          </button>
          <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails