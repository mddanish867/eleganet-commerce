import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = ({ order }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order Confirmation</h1>
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8" role="alert">
        <p className="font-bold">Thank you for your order!</p>
        <p>Your order has been successfully placed and is being processed.</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
        <p><strong>Order Number:</strong> {order.id}</p>
        <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
        <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Items Ordered</h2>
        <ul className="space-y-2">
          {order.items.map(item => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
        <p>{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
        <p>{order.shippingAddress.address}</p>
        <p>{order.shippingAddress.city}, {order.shippingAddress.country} {order.shippingAddress.zipCode}</p>
      </div>
      <div className="flex space-x-4">
        <Link to="/" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Continue Shopping
        </Link>
        <Link to="/orders" className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300">
          View All Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;