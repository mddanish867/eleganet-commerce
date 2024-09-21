import React, { useState } from 'react';

const OrderTracking = ({ orderId }) => {
  // This would typically come from an API call
  const [orderStatus, setOrderStatus] = useState({
    id: orderId,
    status: 'In Transit',
    estimatedDelivery: '2023-07-15',
    trackingNumber: '1Z999AA1123456784',
    currentLocation: 'Distribution Center, New York',
    statusHistory: [
      { date: '2023-07-10', status: 'Order Placed' },
      { date: '2023-07-11', status: 'Processing' },
      { date: '2023-07-12', status: 'Shipped' },
      { date: '2023-07-13', status: 'In Transit' },
    ],
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Order Tracking</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Order #{orderStatus.id}</h2>
          <p className="text-lg font-medium text-blue-600">{orderStatus.status}</p>
          <p className="text-gray-600">Estimated Delivery: {orderStatus.estimatedDelivery}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Tracking Information</h3>
          <p><strong>Tracking Number:</strong> {orderStatus.trackingNumber}</p>
          <p><strong>Current Location:</strong> {orderStatus.currentLocation}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Status History</h3>
          <ul className="space-y-2">
            {orderStatus.statusHistory.map((status, index) => (
              <li key={index} className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                <span className="font-medium">{status.date}:</span>
                <span className="ml-2">{status.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;