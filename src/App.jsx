import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Cart from "./Pages/Cart";
import SearchDrawer from "./Pages/SearchDrawer";
import ProductFilter from "./Pages/ProductFilter";
import HomePage2 from "./Pages/HomePage2";
import ProductListing from "./Pages/ProductListing";
import Checkout from "./Pages/Checkout";
import OrderConfirmation from "./Pages/OrderConfirmation";
import OrderHistory from "./Pages/OrderHistory";
import ProductDetails from "./Pages/ProductDetails";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ForgotPassword from "./Pages/Auth/ForgotPassword";
import ResetPassword from "./Pages/Auth/ResetPassword";
import MobileLogin from "./Pages/Auth/MobileLogin";
import OTPVerification from "./Pages/Auth/OTPVerification";
import AdventureOutdoor from "./Pages/Ecommerces/AdventureOutdoor";
import ArtistnalFood from "./Pages/Ecommerces/ArtistnalFood";
import ArtistnalHeaven from "./Pages/Ecommerces/ArtistnalHeaven";
import EcoHeaven from "./Pages/Ecommerces/EcoHeaven";
import EcoHome from "./Pages/Ecommerces/EcoHome";
import Fashionista from "./Pages/Ecommerces/Fashionista";
import LuxBotique from "./Pages/Ecommerces/LuxBotique";
import LuxeGem from "./Pages/Ecommerces/LuxeGem";
import LuxeGems from "./Pages/Ecommerces/LuxeGems";
import ManimalShop from "./Pages/Ecommerces/ManimalShop";
import RetroChic from "./Pages/Ecommerces/RetroChic";
import TechNova from "./Pages/Ecommerces/TechNova";
import TechZone from "./Pages/Ecommerces/TechZone";

export default function App() {
  return (
    <Router>
      {/* Routes within the Layout */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage2 />} />
          <Route path="/productslist" element={<ProductListing />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/filters" element={<ProductFilter />} />
          <Route path="/search" element={<SearchDrawer />} />
        </Route>

        {/* Routes outside the Layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/mobile-login" element={<MobileLogin />} />
        <Route path="/otp-verification" element={<OTPVerification />} />
        <Route path="/adventureoutdoor" element={<AdventureOutdoor />} />
        <Route path="/artistnalfood" element={<ArtistnalFood />} />
        <Route path="/artistnalhevean" element={<ArtistnalHeaven />} />
        <Route path="/ecoheaven" element={<EcoHeaven />} />
        <Route path="/ecohome" element={<EcoHome />} />
        <Route path="/fashionista" element={<Fashionista />} />
        <Route path="/techzone" element={<TechZone />} />
        <Route path="/luxbotique" element={<LuxBotique />} />
        <Route path="/luxgem" element={<LuxeGem />} />
        <Route path="/luxgems" element={<LuxeGems />} />
        <Route path="/manimalshop" element={<ManimalShop />} />
        <Route path="/retrochic" element={<RetroChic />} />
        <Route path="/technova" element={<TechNova />} />
      </Routes>
    </Router>
  );
}
