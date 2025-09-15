import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from '../assets/Images/logo.png';
import './Header.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import RequestDemoModal from "./RequestDemoModal";
function Header() {
  const [isSticky, setIsSticky] = useState(false);

  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="bg-[#8ec0ee] d-flex justify-between align-items-center lg:px-24 text-[#292966] top-nav">
          <p className="m-0 text-center">
           Next-Gen EHR and Billing — Built for Healthcare Providers.
          </p>
          <button onClick={() => setShowModal(true)}>Request Free Trial</button>
        </div>
        <Navbar expand="xl" className={`navbar ${isSticky ? 'is-sticky' : ''}`}>
          <Container fluid>
            <Navbar.Brand as={Link} to="/">
              <Image src={Logo} alt="MDCare" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-block mx-auto">
                <Nav className="ms-auto first-nav justify-content-end">
                  <Nav.Link as={Link} to="/meaningful-use" className="mr-10">
                    Meaningful Use
                  </Nav.Link>
                  <Nav.Link as={Link} to="/resources" className="mr-10">
                    Resources
                  </Nav.Link>
                  <Nav.Link as={Link} to="/contact" className="mr-10">
                    Contact Us
                  </Nav.Link>
                </Nav>
                <div className="nav-border"></div>
                <Nav className="second-nav">
                  <Nav.Link as={Link} to="/" className="mx-4">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about" className="mx-4">
                    About Us
                  </Nav.Link>
                  <Nav.Link as={Link} to="/features" className="mx-4">
                    Features
                  </Nav.Link>
                  <Nav.Link as={Link} to="/specialities" className="mx-4">
                    Specialities
                  </Nav.Link>
                  <Nav.Link as={Link} to="/roi" className="mx-4">
                    ROI
                  </Nav.Link>
                  <Nav.Link as={Link} to="/portal" className="mx-4">
                    Portal
                  </Nav.Link>
                  <button onClick={() => setShowModal(true)}>Live Demo</button>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
       <RequestDemoModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}

export default Header;
