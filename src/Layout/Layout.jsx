import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Pages/Footer'
import Navbar from '../Pages/Navbar'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">      
    <Navbar/>
    <main className="flex-grow py-0 md:py-2">
    {children}
      </main>
      
      <Footer/>
    </div>
  )
}