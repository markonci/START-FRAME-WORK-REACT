import React from 'react'
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import CustomNavbar from './../Navbar/Navbar';

export default function Layout() {
  return (
    <>
    <CustomNavbar />
      <Outlet />
    <Footer />
    </>
  )
}
