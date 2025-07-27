import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

export default function CustomNavbar() {

  return (
     <Navbar expand="lg" className='p-4' >
      <Container>
        <Link to=""><h3 className='text-white'>START FRAMEWORK</h3></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="about" className='text-white ms-4'>ABOUT</NavLink>
            <NavLink to="portofilo" className='text-white ms-4'>PORTFOLIO</NavLink>
            <NavLink to="contact" className='text-white ms-4'>CONTACT</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
