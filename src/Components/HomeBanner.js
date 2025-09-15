import React, { useEffect } from "react";
import BlurText from "./BlurText";
import SplitText from "./SplitText";
import CountUp from "./CountUp";
import "./HomeBanner.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CaduceusIcon from "../assets/Images/caduceus-symbol.png";
import {
  faArrowLeft,
  faArrowRight,
  faCalculator,
  faCircleArrowRight,
  faCircleExclamation,
  faFile,
  faGaugeHigh,
  faStar,
  faThumbsUp
} from '@fortawesome/free-solid-svg-icons'
import './HomebannerMediaQuery.css'
import DoneAllIcon from '@mui/icons-material/DoneAll'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS JavaScript
export default function HomeBanner () {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      offset: 200,    // Start animation after scrolling 200px
    });
  }, []);
  return (
    <>
      <section className="banner-backgeound">
        <section className="medical-center-banner-area">
          <Container fluid>
            <div className="medical-center-banner-content">
              <h1 className="title text-4xl lg:text-[60px] mb-4 leading-normal text-[#020D2B] font-[500]">
                <BlurText
                  text="Secure, Smarter"
                  delay={80}
                  animateBy="chars"
                  direction="top"
                  className="font-[800] whitespace-nowrap"
                />
                <SplitText
                  text=" And Fully Integrated Care"
                  className="block text-2xl lg:text-4xl font-[500]"
                  delay={80}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
              </h1>
              <p data-aos="fade-up-right">
                With the ongoing trends in Information Technology, where change
                is an obsession, time a limited commodity, and quality the
                hallmark of every business, Vision Infonet Inc has created its
                niche in the industry by providing healthcare providers the
                best.
              </p>

                <div className='banner-btn'>
                  <Link
                    to=''
                    className='default-btn'
                    sx={{ color: 'white', textDecoration: 'none' }}
                  >
                    <FontAwesomeIcon icon={faCircleArrowRight} />
                    Learn More{' '}
                  </Link>
                </div>

              <div className="banner-bottom" data-aos="fade-right">
                <div className="info">
                  <div className="icon">
                    <FontAwesomeIcon icon={faCircleExclamation} />
                  </div>

                    <div className='title'>
                      <h5>Request Free Trial</h5>
                      <span>
                        Use MDCare EMR for 6 months absolutely free! for more
                        information.
                      </span>
                    </div>
                  </div>

                  <div className='arrow-btn'>
                    <Link to='' sx={{ color: 'white', textDecoration: 'none' }}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className='medical-center-banner-image'>
                <img
                  decoding='async'
                  src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/banner.png'
                  alt='images 1'
                />
              </div>
              <div className='plus-one'>
                <img
                  decoding='async'
                  src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/plus.png'
                  alt='images 2'
                />
              </div>
              <div className='plus-two'>
                <img
                  decoding='async'
                  src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/plus2.png'
                  alt='images 3'
                />
              </div>
            </Col>
          </Row>
        </section>
      </section>
      <section className='features-area'>
        <Container fluid>
          <div className='features-inner-area' data-aos="fade-up">
            <Row className='justify-center'>
              <Col xl={3} sm={6}>
                <div className='features-card '>
                  <div className='title'>
                    <FontAwesomeIcon icon={faFile} />
                    <h3>DOCUMENTATION SIMPLIFIED</h3>
                  </div>

                  <p>
                    Book appointments per physician schedule, resources, and/or
                    location.
                  </p>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className='features-card bg-D7ECE4'>
                  <div className='title'>
                    <FontAwesomeIcon icon={faCalculator} />
                    <h3>INTEGRATED BILLING</h3>
                  </div>

                  <p>
                    As Per the traditional way, the provider spends about 15
                    minutes and 5 minutes.
                  </p>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className='features-card bg-D6D2F1'>
                  <div className='title'>
                    <FontAwesomeIcon icon={faGaugeHigh} />
                    <h3>CUSTOMIZED REPORTING</h3>
                  </div>

                  <p>
                    As Per the traditional way, the provider spends about 15
                    minutes and 5 minutes.
                  </p>
                </div>
              </Col>
              <Col xl={3} sm={6}>
                <div className='features-card bg-F2DDD9'>
                  <div className='title'>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <h3>ICD-10 READY</h3>
                  </div>
                  <p>
                    Integrated drug database, medical calculators and clinical
                    decision criteria.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
      <section>
        <div className='about-area py-[100px]'>
          <Container>
            <Row className='justify-content-center align-items-center'>
              <Col xl={6} md={12}>
                <div className='about-content' data-aos="fade-right">
                  <span className='sub'>ABOUT MDCARE</span>
                  <h2>
                    MDCare's <b>superiority &amp; strengths</b> are
                  </h2>
                  <p>
                    Vision Infonet proactively understands the current needs of
                    the healthcare industry and successfully fulfilling them by
                    combining high-end technology with highly skilled
                    professionals to make the documentation process simple.
                  </p>
                  <div>
                    <ul className='list'>
                      <li>
                        <DoneAllIcon
                          sx={{
                            color: '#5DB996',
                            marginRight: '10px',
                            fontSize: '22px'
                          }}
                        />
                        <b>The Team:</b>
                        <span className='description'>
                          consisting of Physicians, Software professionals,
                          Medical Transcriptionists, and Certified Medical
                          Billers, headed by a physician.
                        </span>
                      </li>
                      <li>
                        <DoneAllIcon
                          sx={{
                            color: '#5DB996',
                            marginRight: '10px',
                            fontSize: '22px'
                          }}
                        />
                        <b>The Experience:</b>
                        <span className='description'>
                          30 years of medical practice, 12 years of software
                          development, 18 years of transcription, and 15 years
                          of medical billing and AR processing.
                        </span>
                      </li>
                      <li>
                        <DoneAllIcon
                          sx={{
                            color: '#5DB996',
                            marginRight: '10px',
                            fontSize: '22px'
                          }}
                        />
                        <b>The Product:</b>
                        <span className='description'>
                          One of the most advanced, flexible, customizable,
                          robust, user-friendly EMR that will revolutionize your
                          practice and streamline your processes.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xl={6} md={12}>
                <div className='about-image'>
                  <img
                    decoding='async'
                    src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/about.png'
                    alt='images'
                  />
                  <div className="counter-wrap">
                    <div className="item">
                      <div className="d-flex align-items-center justify-content-center">
                        {/* <h3 className="counter">22</h3> */}
                        <CountUp
                          from={0}
                          to={22}
                          separator=","
                          direction="up"
                          duration={1}
                          className="count-up-text text-[35px] font-bold text-[#0f0f52] counter"
                        />
                      </div>
                      <p>
                        DIFFERENT <span>SECTIONS</span>
                      </p>
                    </div>
                  </div>
                  <div className="counter-wrap wrap-two">
                    <div className="item">
                      <div className="d-flex align-items-center justify-content-center">
                        <CountUp
                          from={0}
                          to={5}
                          separator=","
                          direction="up"
                          duration={1}
                          className="count-up-text text-[35px] font-black text-[#0f0f52]"
                        />
                        <h3 className="sub">K+</h3>
                      </div>
                      <p>
                        PATIENT'S <span>REVIEWS</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <div className='services-area py-[100px]'>
          <Container>
            <div className='section-title'>
              <span className='sub'>our Specialities</span>
              <h2>
                We Serve In Different <b>Areas For Our Patients</b>
              </h2>
            </div>
            <Row className='justify-content-center'>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>Cardiology</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>Dermatology</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>Endocrinology</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>ENT/Otolaryngology</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>Family Practice</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>Gastroenterology</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>General Surgery</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col xl={3} md={6}>
                <div className='services-card'>
                  <div className='icon'>
                    <img
                      decoding='async'
                      alt='Food &amp; Nutrition'
                      data-cfsrc='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png'
                    />
                  </div>
                  <h3>
                    <Link to=''>Internal Medicine</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  <Link class='services-btn text-decoration-none' to=''>
                    <FontAwesomeIcon icon={faArrowRight} />
                    Read More{' '}
                  </Link>
                </div>
              </Col>
              <Col lg={12}>
                <div className='services-bottom-text'>
                  <p>
                    We have 12+ more Care Service including Emergency
                    Department.{' '}
                    <Link to=''>
                      View All <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section>
        <div className='testimonial-area py-[100px]'>
          <Container>
            <div className='testimonial-top-content'>
              <span className='sub'>YOUR HEALTH IS OUR TOP PRIORITY</span>
              <h2>
                Our track record speaks for itself. Many individuals have chosen{' '}
                <span>
                  our medical center and have had positive, transformative
                  experiences.
                </span>
              </h2>
            </div>
            <Row className='justify-content-center align-items-center'>
              <Col lg={6} md={12}>
                <div className='testimonial-lft-content'>
                  <div class='image'>
                    <img
                      decoding='async'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/testimonial1.jpg'
                      alt=' Images'
                    />
                  </div>
                  <Swiper
                    spaceBetween={25}
                    centeredSlides={true}
                    autoHeight={true}
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false
                    }}
                    pagination={false}
                    navigation={{
                      nextEl: '.testimonial-button-next',
                      prevEl: '.testimonial-button-prev'
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className='mySwiper'
                  >
                    <SwiperSlide>
                      <div className='testimonial-card'>
                        <div class='quote'>
                          <img
                            src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/quote.svg'
                            alt='Quote Images'
                          />
                        </div>
                        <p>
                          {' '}
                          “I received my incentive money” MDCARE EMR is very
                          easy to work with. I could successfully learn using
                          it, and also got my incentive money for 2011.
                        </p>
                        <div class='info'>
                          <img
                            decoding='async'
                            src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/user2.jpg'
                            class='rounded-circle'
                            alt='user Images'
                          />

                          <div class='title'>
                            <h3> Gene Turner MD</h3>
                            <span>Head of Cardiology Department</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='testimonial-card'>
                        <div class='quote'>
                          <img
                            src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/quote.svg'
                            alt='Quote Images'
                          />
                        </div>
                        <p>
                          {' '}
                          “I received my incentive money” MDCARE EMR is very
                          easy to work with. I could successfully learn using
                          it, and also got my incentive money for 2011.
                        </p>
                        <div class='info'>
                          <img
                            decoding='async'
                            src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/user2.jpg'
                            class='rounded-circle'
                            alt='user Images'
                          />

                          <div class='title'>
                            <h3> Dr. Goyal</h3>
                            <span>Head of Cardiology Department</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className='testimonial-card'>
                        <div class='quote'>
                          <img
                            src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/quote.svg'
                            alt='Quote Images'
                          />
                        </div>
                        <p>
                          {' '}
                          “I received my incentive money” MDCARE EMR is very
                          easy to work with. I could successfully learn using
                          it, and also got my incentive money for 2011.
                        </p>
                        <div class='info'>
                          <img
                            decoding='async'
                            src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/user2.jpg'
                            class='rounded-circle'
                            alt='user Images'
                          />

                          <div class='title'>
                            <h3>Dr. Pradeep</h3>
                            <span>Head of Cardiology Department</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <ul className='testimonial-button'>
                      <li>
                        <div
                          className='testimonial-button-prev'
                          tabindex='0'
                          role='button'
                          aria-label='Previous slide'
                          aria-controls='swiper-wrapper-f5e6b30ec4e18e2a'
                        >
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                      </li>
                      <li>
                        <div
                          className='testimonial-button-next'
                          tabindex='0'
                          role='button'
                          aria-label='Next slide'
                          aria-controls='swiper-wrapper-f5e6b30ec4e18e2a'
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      </li>
                    </ul>
                  </Swiper>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className='testimonial-rght-content'>
                  <div className='rating-box'>
                    <span>AVERAGE GOOGLE RATINGS</span>
                    <div className='rating'>
                      <FontAwesomeIcon icon={faStar} />
                      <b>4.9</b>
                    </div>
                  </div>
                  <div className='image'>
                    <img
                      decoding='async'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/testimonial2.jpg'
                      alt=' images 2'
                    />
                  </div>
                  <div className='info-box'>
                    <div className='icon'>
                      <i className='flaticon-caduceus'></i>
                    </div>

                    <div className='title'>
                      <span>HIPAA COMPLIANT</span>
                      <h3>
                        Health Insurance Portability and Accountability Act
                      </h3>
                      <Link
                        to='https://themes.hibootstrap.com/hospa/about-overview/'
                        className='link-btn'
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div class='testimonial-shape'>
              <img
                decoding='async'
                src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/shape.png'
                alt=' Shape'
              />
            </div>
          </Container>
        </div>
      </section>
      <section>
        <div className='why-choose-us-area py-[75px]'>
          <Container>
            <div className='section-title'>
              <span class='sub'>WHY CHOOSE MDCARE </span>
              <h2>
                What Sets Us Apart <b> MDCare Leads the Way</b>
              </h2>
            </div>
            <Row className='justify-content-center'>
              <Col lg={4} sm={6}>
                <div className='why-choose-us-card'>
                  <img
                    decoding='async'
                    src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/img1.png'
                    alt='images'
                  />
                  <h3>Web-based</h3>
                  <p>
                    Access securely from any computer, iPad, desktop, tablet or
                    pocket PC.
                  </p>
                </div>
              </Col>
              <Col lg={4} sm={6}>
                <div className='why-choose-us-card'>
                  <img
                    decoding='async'
                    src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/img2.png'
                    alt='images'
                  />
                  <h3>Ease of use</h3>
                  <p>
                  Very easy and accurate documentation, easy implementation of EMR
                  </p>
                </div>
              </Col>
              <Col lg={4} sm={6}>
                <div className='why-choose-us-card'>
                  <img
                    decoding='async'
                    src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/img1.png'
                    alt='images'
                  />
                  <h3>Tailor made</h3>
                  <p>
                  Customized to fit the specific requirements of each practice.
                  </p>
                </div>
              </Col>
              </Row>
              <Row className='mt-5 justify-content-center'>
                <Col lg={4} sm={6}>
                  <div className='why-choose-us-card'>
                    <img
                      decoding='async'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/img2.png'
                      alt='images'
                    />
                    <h3>Customizable</h3>
                    <p>
                    Can be customized by the user anytime in the future, to suit the changing scenarios and trends.
                    </p>
                  </div>
                </Col>
                <Col lg={4} sm={6}>
                  <div className='why-choose-us-card'>
                    <img
                      decoding='async'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/img1.png'
                      alt='images'
                    />
                    <h3>Text recognition</h3>
                    <p>
                    scribble or type. DICOM, HL7, Lab and Fax interfacing
                    </p>
                  </div>
                </Col>
                <Col lg={4} sm={6}>
                  <div className='why-choose-us-card'>
                    <img
                      decoding='async'
                      src='https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/img2.png'
                      alt='images'
                    />
                    <h3>Flexible and Efficient</h3>
                    <p>
                    Prescription (eRx), Integrated Billing, and AR Modules for Seamless Operations.
                    </p>
                  </div>
                </Col>
              </Row>
          </Container>
        </div>
      </section>
    </>
  )
}
