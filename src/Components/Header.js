import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Logo from "../assets/Images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="bg-[#8ec0ee] d-flex justify-between align-items-center lg:px-24 text-[#292966] top-nav">
          <p className="m-0 text-center">
            Learn what to expect when visiting the Emergency Department. Learn
            More
          </p>
          <button>Request an appointment</button>
        </div>
        <Navbar expand="lg" className={`navbar ${isSticky ? "is-sticky" : ""}`}>
          <Container fluid>
            <Navbar.Brand href="#home">
              <Image src={Logo} alt="MDCare" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="d-block mx-auto">
                <Nav className="ms-auto first-nav justify-content-end">
                  <Nav.Link href="#link" className="mr-10">
                    Meaningful Use
                  </Nav.Link>
                  <Nav.Link href="#home" className="mr-10">
                    Resources
                  </Nav.Link>
                  <Nav.Link href="#link" className="mr-10">
                    Contact Us
                  </Nav.Link>
                </Nav>
                <div className="nav-border"></div>
                <Nav className="second-nav">
                  <Link to="/" className="nav-link sm:mx-4">
                    Home
                  </Link>

                  <Link to="/about" className="nav-link sm:mx-4">
                    About Us
                  </Link>

                  <Link to="/features" className="sm:mx-4 nav-link">
                    Features
                  </Link>

                  <Link to="/specificatins" className="sm:mx-4 nav-link">
                    Specialities
                  </Link>

                  <Link to="/roi" className="nav-link sm:mx-4">
                    ROI
                  </Link>

                  <Link to="/portal" className="nav-link sm:mx-4">
                    Portal
                  </Link>
                  <button>Live Demo</button>
                </Nav>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
