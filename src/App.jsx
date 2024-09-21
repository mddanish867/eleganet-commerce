import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import SearchDrawer from './Pages/SearchDrawer'

import ProductFilter from './Pages/ProductFilter'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/filters" element={<ProductFilter/>} />
          <Route path="/search" element={<SearchDrawer/>} />


        </Routes>
      </Layout>
    </Router>
  )
}