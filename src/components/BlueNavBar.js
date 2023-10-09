import React from 'react';
import '../style/blueNav.css'

import 'font-awesome/css/font-awesome.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function BlueNavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-primary">
        <Container fluid>
          <Navbar.Brand href="#" >
          <h1 id='logo'>HIGH<span>TECH</span></h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '400px' }}
              navbarScroll
            >
              <Nav.Link href="#action1" id='a'>Home</Nav.Link>
              <Nav.Link href="#action2" id='a'>About</Nav.Link>
              <Nav.Link href="#action2" id='a'>Services</Nav.Link>
              <Nav.Link href="#action2" id='a'>Projects</Nav.Link>
              <NavDropdown title="Pages" id="navbarScrollingDropdown" class='a'>
                <NavDropdown.Item href="#action3">Our Blog</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action3">Testimonial</NavDropdown.Item>
                <NavDropdown.Item href="#action3">404 Page</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#action2" id='a'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="right">
            <div className="query">
              <div className="callIcon">
                <i class="fa fa-phone"></i>
              </div>
            </div>
            <div className="text">
              <span className='question'>Have any question</span>
              <span className='call'>Call: + 0123 456 7890</span>
            </div>
            <div className="line"></div>
            <div className="searchIcon">
              <i id='searchIcon' class="fa fa-search"></i>
            </div>

          </div>
        </Container>
      </Navbar>




    </>

  )
}
