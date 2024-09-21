import React, { useState } from 'react';

const UserProfile = ({ user, updateUser }) => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileInfo user={user} updateUser={updateUser} />;
      case 'orders':
        return <OrderHistory orders={user.orders} />;
      case 'payments':
        return <PaymentHistory payments={user.payments} />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 ${activeTab === 'profile' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 ${activeTab === 'orders' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Order History
        </button>
        <button
          onClick={() => setActiveTab('payments')}
          className={`px-4 py-2 ${activeTab === 'payments' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Payment History
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

const ProfileInfo = ({ user, updateUser }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    phone: user.phone,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Profile Information</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="w-full p-2 border rounded"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="Phone"
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

const OrderHistory = ({ orders }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <div className="space-y-4">
        {orders.map(order => (
          <div key={order.id} className="border p-4 rounded">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {new Date(order.date).toLocaleDateString()}</p>
            <p><strong>Total:</strong> ${order.total.toFixed(2)}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PaymentHistory = ({ payments }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      <div className="space-y-4">
        {payments.map(payment => (
          <div key={payment.id} className="border p-4 rounded">
            <p><strong>Payment ID:</strong> {payment.id}</p>
            <p><strong>Date:</strong> {new Date(payment.date).toLocaleDateString()}</p>
            <p><strong>Amount:</strong> ${payment.amount.toFixed(2)}</p>
            <p><strong>Method:</strong> {payment.method}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;