import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import CustomNavbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Notfound from './Components/Notfound/Notfound';

let x=createBrowserRouter([
  {path:'',element:<Layout />,
    children:[
    {index:true , element:<Home />},
    {path:'contact',element:<Contact />},
    {path:'portofilo',element:<Portfolio />},
    {path:'about',element:<About />},
    {path:'*' ,element:<Notfound />}
  ]},
])
function App() {

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
