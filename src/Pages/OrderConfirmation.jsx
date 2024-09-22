import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle, Truck, Calendar, Package, ArrowRight } from 'lucide-react'

const OrderConfirmation = () => {
  const orderDetails = {
    orderNumber: '12345',
    orderDate: 'May 15, 2023',
    estimatedDelivery: 'May 20, 2023',
    items: [
      { id: 1, name: 'Wireless Earbuds', price: 99.99, quantity: 2, image: 'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg' },
      { id: 2, name: 'Smart Watch', price: 199.99, quantity: 1, image: 'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg' },
      { id: 3, name: 'Bluetooth Speaker', price: 129.99, quantity: 1, image: 'https://farm7.staticflickr.com/6089/6115759179_86316c08ff_z_d.jpg' },
    ],
    subtotal: 529.96,
    shipping: 10.00,
    total: 539.96,
  }

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-green-500 text-white px-6 py-4">
              <div className="flex items-center">
                <CheckCircle className="h-8 w-8 mr-3" />
                <h1 className="text-2xl font-bold">Order Confirmed</h1>
              </div>
              <p className="mt-1 text-green-100">Thank you for your purchase!</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Information</h2>
                  <p className="text-gray-600"><span className="font-medium">Order Number:</span> {orderDetails.orderNumber}</p>
                  <p className="text-gray-600"><span className="font-medium">Order Date:</span> {orderDetails.orderDate}</p>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-2">Shipping Information</h2>
                  <p className="text-gray-600">John Doe</p>
                  <p className="text-gray-600">123 Main St, Apt 4B</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {orderDetails.items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">${orderDetails.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-800">${orderDetails.shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span className="text-gray-700">Total</span>
                  <span className="text-gray-800">${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h2 className="text-lg font-semibold text-gray-700 mb-4">What's Next?</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Truck className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Preparing for Shipment</p>
                      <p className="text-sm text-gray-600">We're getting your order ready to be shipped.</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Estimated Delivery Date</p>
                      <p className="text-sm text-gray-600">{orderDetails.estimatedDelivery}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Package className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <p className="font-medium text-gray-700">Track Your Order</p>
                      <p className="text-sm text-gray-600">We'll send you tracking information once your order ships.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-center">
                <Link to="/products" className="bg-blue-500 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300 mb-4 sm:mb-0">
                  Continue Shopping
                </Link>
                <Link to="/order-history" className="text-blue-500 hover:text-blue-700 font-medium flex items-center">
                  View Order History
                  <ArrowRight className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation