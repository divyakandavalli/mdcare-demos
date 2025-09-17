import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from '@mui/material';
import Logo from '../assets/Images/MD CARE FINAL LOGO-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll event listener to toggle 'back to top' button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <section>
        <footer className='footer-area pt-[100px] font-roboto'>
          <Container>
            <Row className='justify-content-center'>
              <Col xl={3} md={12}>
                <div className='single-footer-widget pe-3'>
                  <div className='widget-logo'>
                    <Link to='' className='text-decoration-none'>
                      <img src={Logo} alt='MDCARE' />
                    </Link>
                  </div>
                  <div className='locations'>
                    <p>
                      <span>Locations: </span> Vision Infonet Inc. 1717 Park
                      Street, Suite 110 Naperville, IL 60563
                    </p>
                  </div>
                  <ul className='hour-info'>
                    <li>
                      <span>Visiting Hours: </span>
                    </li>
                    <li>Sunday: 08:00 AM - 10:00 PM</li>
                    <li>Monday - Friday: 06:00 AM - 12:00 AM</li>
                  </ul>
                </div>
              </Col>
              <Col xl={9} md={12}>
                <Row className='justify-content-center'>
                  <Col lg={3} sm={6}>
                    <div className='single-footer-widget ps-5'>
                      <h3>Community</h3>
                      <ul className='custom-links'>
                        <li>
                          <Link to=''>Doctors</Link>
                        </li>
                        <li>
                          <Link to=''>Testimonials</Link>
                        </li>
                        <li>
                          <Link to=''>FAQs</Link>
                        </li>
                        <li>
                          <Link to=''>Blog</Link>
                        </li>
                        <li>
                          <Link to=''>Site Map</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={3} sm={6}>
                    <div className='single-footer-widget ps-5'>
                      <h3>About</h3>
                      <ul className='custom-links'>
                        <li>
                          <Link to=''>Careers</Link>
                        </li>
                        <li>
                          <Link to=''>Education</Link>
                        </li>
                        <li>
                          <Link to=''>About Us</Link>
                        </li>
                        <li>
                          <Link to=''>Areas Of Care</Link>
                        </li>
                        <li>
                          <Link to=''>Volunteers</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={3} sm={6}>
                    <div className='single-footer-widget ps-5'>
                      <h3>Support</h3>
                      <ul className='custom-links'>
                        <li>
                          <Link to=''>Visitor Information</Link>
                        </li>
                        <li>
                          <Link to=''>Emergency Care</Link>
                        </li>
                        <li>
                          <Link to=''>Donate</Link>
                        </li>
                        <li>
                          <Link to=''>Online Services</Link>
                        </li>
                        <li>
                          <Link to=''>Pay Your Bills</Link>
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col lg={3} sm={6}>
                    <div className='single-footer-widget ps-5'>
                      <h3>Trust & Legal</h3>
                      <ul className='custom-links'>
                        <li>
                          <Link to=''>Terms & Conditions</Link>
                        </li>
                        <li>
                          <Link to=''>Privacy Policy</Link>
                        </li>
                        <li>
                          <Link to=''>Hospital Stay</Link>
                        </li>
                      </ul>

                      <div className='social-info'>
                        <span>Social Media</span>
                        <ul className='social'>
                          <li>
                            <Link to='' target='_blank'>
                              <FontAwesomeIcon icon={faFacebookF} />
                            </Link>
                          </li>
                          <li>
                            <Link to='' target='_blank'>
                              <FontAwesomeIcon icon={faXTwitter} />
                            </Link>
                          </li>
                          <li>
                            <Link to='' target='_blank'>
                              <FontAwesomeIcon icon={faInstagram} />
                            </Link>
                          </li>
                          <li>
                            <Link to='' target='_blank'>
                              <FontAwesomeIcon icon={faLinkedinIn} />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
          <div className='copyright-area'>
            <p>
              <span>© MDCare</span> All Rights Reserved by{' '}
              <Link to='' target='_blank'>
                Novatales Media
              </Link>{' '}
            </p>
          </div>
        </footer>
        <button
          type='button'
          id='backtotop'
          className={`position-fixed font-roboto text-center border-0 p-0 ${showBackToTop ? 'active' : ''}`}
          onClick={scrollToTop}
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </section>
    </div>
  );
}
