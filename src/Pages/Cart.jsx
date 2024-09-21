import React from 'react';
import { Link } from 'react-router-dom';


const Cart = ({ cartItems = [], updateQuantity, removeItem }) => {
  // Ensure cartItems is an array by default
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div class="bg-white p-6">
    <div class="container mx-auto">
        <h1 class="text-3xl font-bold mb-6">Cart</h1>

        <div class="bg-white shadow-sm rounded-lg overflow-x-auto">
            <table class="min-w-full w-full">
                <thead>
                    <tr class="bg-slate-100 text-left text-sm uppercase font-semibold text-gray-600">
                        <th class="px-6 py-4">Product</th>
                        <th class="px-6 py-4">Price</th>
                        <th class="px-6 py-4">Quantity</th>
                        <th class="px-6 py-4">Subtotal</th>
                        <th class="px-6 py-4"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b">
                        <td class="px-6 py-4 flex items-center space-x-4">
                            <img src="https://via.placeholder.com/50" alt="Product Image" class="w-12 h-12 rounded"/>
                        </td>
                        <td class="px-6 py-4">$13.25</td>
                        <td class="px-6 py-4">
                            <input type="number" value="1" class="w-16 p-1 border rounded text-center focus:outline-none"/>
                        </td>
                        <td class="px-6 py-4">$13.25</td>
                        <td class="px-6 py-4">
                            <button class="text-red-500 hover:text-red-700 focus:outline-none">×</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

/        <div class="mt-6 flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0">
            <div class="flex items-center space-x-4">
                <input type="text" placeholder="Coupon code" class="border rounded p-2 w-full sm:w-64 focus:outline-none"/>
                <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none">
                    Apply Coupon
                </button>
            </div>
            <button class="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 focus:outline-none">
                Update Cart
            </button>
        </div>

/        <div class="mt-6 bg-white shadow-md rounded-lg p-6 w-full sm:w-1/3 ml-auto">
            <h2 class="text-xl font-bold mb-4">Cart totals</h2>
            <div class="flex justify-between border-b py-2">
                <span>Subtotal</span>
                <span>$13.25</span>
            </div>
            <div class="flex justify-between border-b py-2">
                <span>Total</span>
                <span>$13.25</span>
            </div>
            <button class="bg-green-700 text-white w-full mt-4 py-2 rounded hover:bg-green-800 focus:outline-none">
                Proceed To Checkout
            </button>
        </div>
    </div>
</div>
  );
};

export default Cart;
