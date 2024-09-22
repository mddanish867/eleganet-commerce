import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight, Package, Truck, CheckCircle } from 'lucide-react'

const OrderHistory = () => {
  const orders = [
    {
      id: '12345',
      date: 'May 15, 2023',
      total: 539.96,
      status: 'Delivered',
      items: [
        { id: 1, name: 'Wireless Earbuds', quantity: 2, price: 99.99 },
        { id: 2, name: 'Smart Watch', quantity: 1, price: 199.99 },
        { id: 3, name: 'Bluetooth Speaker', quantity: 1, price: 129.99 },
      ],
    },
    {
      id: '12346',
      date: 'April 28, 2023',
      total: 299.97,
      status: 'Shipped',
      items: [
        { id: 4, name: 'Fitness Tracker', quantity: 1, price: 89.99 },
        { id: 5, name: 'Portable Charger', quantity: 2, price: 49.99 },
        { id: 6, name: 'Wireless Mouse', quantity: 1, price: 39.99 },
      ],
    },
    {
      id: '12347',
      date: 'April 10, 2023',
      total: 449.99,
      status: 'Processing',
      items: [
        { id: 7, name: 'Noise-Canceling Headphones', quantity: 1, price: 249.99 },
        { id: 8, name: 'Tablet Stand', quantity: 1, price: 29.99 },
        { id: 9, name: 'Wireless Keyboard', quantity: 1, price: 79.99 },
      ],
    },
  ]

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'Shipped':
        return <Truck className="w-6 h-6 text-blue-500" />
      default:
        return <Package className="w-6 h-6 text-yellow-500" />
    }
  }

  return (
    <div className=" min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">Order History</h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">Order #{order.id}</h2>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 flex items-center">
                    {getStatusIcon(order.status)}
                    <span className="ml-2 text-sm font-medium text-gray-700">{order.status}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Items</h3>
                  <ul className="divide-y divide-gray-200">
                    {order.items.map((item) => (
                      <li key={item.id} className="py-2 flex justify-between">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-800">{item.name}</span>
                          <span className="ml-2 text-sm text-gray-600">x{item.quantity}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div className="mb-2 sm:mb-0">
                    <span className="text-sm font-medium text-gray-700">Total:</span>
                    <span className="ml-2 text-lg font-semibold text-gray-800">${order.total.toFixed(2)}</span>
                  </div>
                  <Link
                    to={`/account/orders/${order.id}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    View Details
                    <ChevronRight className="ml-2 -mr-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrderHistory