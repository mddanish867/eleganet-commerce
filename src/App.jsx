import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import SearchDrawer from './Pages/SearchDrawer'

import ProductFilter from './Pages/ProductFilter'
import HomePage2 from './Pages/HomePage2'
import ProductListing from './Pages/ProductListing'
import Checkout from './Pages/Checkout'
import OrderConfirmation from './Pages/OrderConfirmation'
import OrderHistory from './Pages/OrderHistory'
import ProductDetails from './Pages/ProductDetails'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import ForgotPassword from './Pages/Auth/ForgotPassword'
import ResetPassword from './Pages/Auth/ResetPassword'
import MobileLogin from './Pages/Auth/MobileLogin'
import OTPVerification from './Pages/Auth/OTPVerification'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
        <Route path="/" element={<HomePage2/>} />
        <Route path="/productslist" element={<ProductListing/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/order-confirmation" element={<OrderConfirmation/>} />
        <Route path="/order-history" element={<OrderHistory/>} />
        <Route path="/product-details" element={<ProductDetails/>} />

        
          <Route path="/cart" element={<Cart/>} />
          <Route path="/filters" element={<ProductFilter/>} />
          <Route path="/search" element={<SearchDrawer/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/reset-password" element={<ResetPassword/>} />
          <Route path="/mobile-login" element={<MobileLogin/>} />
          <Route path="/otp-verification" element={<OTPVerification/>} />


        </Routes>
      </Layout>
    </Router>
  )
}