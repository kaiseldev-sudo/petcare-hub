import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center text-center'>
        <Header />
        <main className='bg-gradient-to-br from-pink-100 to-blue-100'>
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default MainLayout
