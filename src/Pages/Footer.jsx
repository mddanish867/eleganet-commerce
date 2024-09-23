import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p>Short description about the company</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Customer Service</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping</Link></li>
              <li><Link to="/returns">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">My Account</h3>
            <ul>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/orders">Order History</Link></li>
              <li><Link to="/wishlist">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Modern Templates</h3>
            <ul>
              <li><Link to="/adventureoutdoor" target='_blank'>Adventure Outdoor</Link></li>
              <li><Link to="/artistnalfood" target='_blank'>Artistnal food</Link></li>
              <li><Link to="/artistnalhevean" target='_blank'>Artstnal Hevean</Link></li>
              <li><Link to="/ecoheaven" target='_blank'>Eco Hevean</Link></li>
              <li><Link to="/ecohome" target='_blank'>Eco Home</Link></li>
              <li><Link to="/fashionista" target='_blank'>Fashionista</Link></li>
              <li><Link to="/techzone" target='_blank'>Tech Zone</Link></li>

            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Manimal Templates</h3>
            <ul>
              <li><Link to="/luxbotique" target='_blank'>Lux Botique</Link></li>
              <li><Link to="/luxgem" target='_blank'>Lux Gem</Link></li>
              <li><Link to="/luxgems" target='_blank'>Lux Gems</Link></li>
              <li><Link to="/manimalshop" target='_blank'>Manimal Shop</Link></li>
              <li><Link to="/retrochic" target='_blank'>Retro Chic</Link></li>
              <li><Link to="/technova" target='_blank'>Tech Nova</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p>Subscribe to our newsletter for updates</p>
            <form className="mt-4">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full p-2 text-black rounded"
              />
              <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; `{Date.now()}` Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;