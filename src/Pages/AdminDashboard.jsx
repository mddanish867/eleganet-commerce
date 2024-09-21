import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');

  const renderContent = () => {
    switch (activeTab) {
      case 'products':
        return <ProductManagement />;
      case 'categories':
        return <CategoryManagement />;
      case 'users':
        return <UserManagement />;
      case 'orders':
        return <OrderManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="flex mb-8">
        <button
          onClick={() => setActiveTab('products')}
          className={`px-4 py-2 ${activeTab === 'products' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab('categories')}
          className={`px-4 py-2 ${activeTab === 'categories' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Categories
        </button>
        <button
          onClick={() => setActiveTab('users')}
          className={`px-4 py-2 ${activeTab === 'users' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Users
        </button>
        <button
          onClick={() => setActiveTab('orders')}
          className={`px-4 py-2 ${activeTab === 'orders' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Orders
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

const ProductManagement = () => {
  // Implement product management functionality
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Product Management</h2>
      {/* Add product list, add/edit/delete functionality */}
    </div>
  );
};

const CategoryManagement = () => {
  // Implement category management functionality
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Category Management</h2>
      {/* Add category list, add/edit/delete functionality */}
    </div>
  );
};

const UserManagement = () => {
  // Implement user management functionality
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      {/* Add user list, edit roles, disable/enable accounts */}
    </div>
  );
};

const OrderManagement = () => {
  // Implement order management functionality
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Order Management</h2>
      {/* Add order list, update order status, view order details */}
    </div>
  );
};

export default AdminDashboard;