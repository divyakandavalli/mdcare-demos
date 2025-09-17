import React, { useEffect } from "react";
import AboutUsBanner from "../Components/aboutusbanner";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import CountUp from "../Components/CountUp";
import { Link } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CaduceusIcon from "../assets/Images/caduceus-symbol.png";
import CircleIcon from "@mui/icons-material/Circle";
import VerifiedIcon from "@mui/icons-material/Verified";
import PieChart from "../Components/piechart";
import {
  faArrowLeft,
  faArrowRight,
  faCalculator,
  faCircleArrowRight,
  faCircleExclamation,
  faFile,
  faGaugeHigh,
  faStar,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS JavaScript
import { Image } from "react-bootstrap/Image";
import AboutSection from "../Components/AboutSection";
const AboutPage = () => {
  const ListData = [
    "Rapid changes in IT demand speed, quality, and adaptability.",
    "Vision Infonet Inc. specializes in healthcare services.",
    "Proactively understands and fulfills healthcare industry needs.",
    "Combines advanced technology with skilled professionals.",
    "Simplifies the healthcare documentation process.",
    "Functions as a bridge between the government and healthcare providers.",
    "Provides an automated, compliant, and transparent technology backbone.",
    "Ensures secure processes for medical facilities.",
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <AboutUsBanner />
      <section>
        <div className="about-area py-[100px] font-roboto">
          <div className="w-[90%] lg:w-[80%] xl:w-[70%] mx-auto">
            <div className="justify-content-center align-items-center block xl:flex gap-32">
              <Col xl={6} md={12}>
                <div className="about-image">
                  <img
                    decoding="async"
                    src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/about.png"
                    alt="image"
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
              <Col xl={6} md={12}>
                <div className="about-content mt-5 xl:mt-0">
                  <span className="sub">ABOUT MDCARE</span>
                  <h2>Smarter Solutions for Better Healthcare</h2>
                  <p>
                    <b> Vision Infonet Inc.</b> is an Illinois-based provider of
                    cutting-edge technologies and services for the healthcare
                    industry. Our medical transcription, medical coding, medical
                    billing, Electronic Medical Records (EMR), Paperless Office
                    System implementation, and other back-office services assure
                    maximum profit for practices as small as one doctor to as
                    large as a hospital group with four hundred or more
                    physicians.
                  </p>
                  <p>
                    Founded in 1999 by a medical doctor, Vision Infonet Inc. has
                    steadily grown over the past decade to serve over 2000
                    clients all over the United States. Our employee base spread
                    out at our 4 locations, consists of 750+ specialized staff
                    and managers dedicated in providing exceptional quality
                    end-to-end back-office services to the healthcare industry.
                  </p>
                </div>
              </Col>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="testimonial-area xl:py-[100px] py-[50px] font-roboto">
          <Container>
            <div className="testimonial-top-content">
              <span className="sub">YOUR HEALTH IS OUR TOP PRIORITY</span>
              <h2>
                Our track record speaks for itself. Many individuals have chosen{" "}
                <span>
                  our medical center and have had positive, transformative
                  experiences.
                </span>
              </h2>
            </div>
            <Row className="justify-content-center align-items-center">
              <Col lg={6} md={12}>
                <div className="testimonial-lft-content">
                  <div class="image">
                    <img
                      decoding="async"
                      src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/testimonial1.jpg"
                      alt=" Image"
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
                      disableOnInteraction: false,
                    }}
                    pagination={false}
                    navigation={{
                      nextEl: ".testimonial-button-next",
                      prevEl: ".testimonial-button-prev",
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="testimonial-card">
                        <div class="quote">
                          <img
                            src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/quote.svg"
                            alt="Quote Image"
                          />
                        </div>
                        <p>
                          {" "}
                          “I received my incentive money” MDCARE EMR is very
                          easy to work with. I could successfully learn using
                          it, and also got my incentive money for 2011.
                        </p>
                        <div class="info">
                          <img
                            decoding="async"
                            src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/user2.jpg"
                            class="rounded-circle"
                            alt="user Image"
                          />

                          <div class="title">
                            <h3> Gene Turner MD</h3>
                            <span>Head of Cardiology Department</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial-card">
                        <div class="quote">
                          <img
                            src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/quote.svg"
                            alt="Quote Image"
                          />
                        </div>
                        <p>
                          {" "}
                          “I received my incentive money” MDCARE EMR is very
                          easy to work with. I could successfully learn using
                          it, and also got my incentive money for 2011.
                        </p>
                        <div class="info">
                          <img
                            decoding="async"
                            src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/user2.jpg"
                            class="rounded-circle"
                            alt="user Image"
                          />

                          <div class="title">
                            <h3> Dr. Goyal</h3>
                            <span>Head of Cardiology Department</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="testimonial-card">
                        <div class="quote">
                          <img
                            src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/quote.svg"
                            alt="Quote Image"
                          />
                        </div>
                        <p>
                          {" "}
                          “I received my incentive money” MDCARE EMR is very
                          easy to work with. I could successfully learn using
                          it, and also got my incentive money for 2011.
                        </p>
                        <div class="info">
                          <img
                            decoding="async"
                            src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/user2.jpg"
                            class="rounded-circle"
                            alt="user Image"
                          />

                          <div class="title">
                            <h3>Dr. Pradeep</h3>
                            <span>Head of Cardiology Department</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <ul className="testimonial-button">
                      <li>
                        <div
                          className="testimonial-button-prev"
                          tabindex="0"
                          role="button"
                          aria-label="Previous slide"
                          aria-controls="swiper-wrapper-f5e6b30ec4e18e2a"
                        >
                          <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                      </li>
                      <li>
                        <div
                          className="testimonial-button-next"
                          tabindex="0"
                          role="button"
                          aria-label="Next slide"
                          aria-controls="swiper-wrapper-f5e6b30ec4e18e2a"
                        >
                          <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                      </li>
                    </ul>
                  </Swiper>
                </div>
              </Col>
              <Col lg={6} md={12}>
                <div className="testimonial-rght-content">
                  <div className="rating-box">
                    <span>AVERAGE GOOGLE RATINGS</span>
                    <div className="rating">
                      <FontAwesomeIcon icon={faStar} />
                      <b>4.9</b>
                    </div>
                  </div>
                  <div className="image">
                    <img
                      decoding="async"
                      src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/testimonial2.jpg"
                      alt=" image 2"
                    />
                  </div>
                  <div className="info-box">
                    <div className="icon">
                      <img src={CaduceusIcon} />
                    </div>

                    <div className="title">
                      <span>HIPAA COMPLIANT</span>
                      <h3>
                        Health Insurance Portability and Accountability Act
                      </h3>
                      <Link
                        to="https://themes.hibootstrap.com/hospa/about-overview/"
                        className="link-btn"
                      >
                        <FontAwesomeIcon icon={faArrowRight} />
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <div class="testimonial-shape">
              <img
                decoding="async"
                src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/shape.png"
                alt=" Shape"
              />
            </div>
          </Container>
        </div>
      </section>
      <AboutSection />
      <div className="mt-5 mb-5 font-roboto lg:py-[60px] py-[50px] w-[90%] lg:w-[80%] xl:w-[70%] mx-auto ">
        <div className="block xl:flex items-center gap-10 ">
          {/* LEFT SIDE CONTENT */}
          <div className=" text-left">
            <h2 className="mb-8 mt-8">
              The secret behind our strength lies in :
            </h2>
            <div>
              <p className="m-2 ">
                OUR TEAM consisting of medical transcription professionals with
                relevant experience in transcription and proof-reading led by
                Medical and English professionals; certified medical billing &
                coding professionals with strong expertise in claims processing
                and AR calling led by dedicated account managers; EMR software
                professionals with strong expertise in the Healthcare space led
                by project heads and domain experts.
              </p>
            </div>
            <div>
              <p className="m-2 ">
                Our software professionals, certified as MCP (Microsoft
                Certified Professional), MCTS (Microsoft Certified Technology
                Specialist), MCPD (Microsoft Certified Professional Developer),
                MCITP (Microsoft Certified IT Professional), develop and
                maintain our cutting-edge EMR software which is one of the most
                economical options in the market.
              </p>
            </div>
            <p className="mt-3">
              Our workforce as depicted in the graph is mainly composed of a
              team of young, qualified graduates, led by Team Leaders with 7-15
              years of experience in their relevant fields, collectively working
              towards simplifying & streamlining your practice.
            </p>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className=" items-center justify-center text-center">
            {/* PIE CHART CENTERED VERTICALLY */}
            <div className="flex justify-center items-center w-full">
              <PieChart />
            </div>

            {/* LEGEND BELOW */}
            <div className="row w-full sm:w-[75%] mx-auto ">
              <div className="col-sm-6 col-lg-6 text-left">
                <ul className="text-left">
                  <li>
                    <CircleIcon sx={{ color: "#BE01EB", fontSize: "18px" }} />{" "}
                    Software Graduates 15%
                  </li>
                  <li>
                    <CircleIcon sx={{ color: "#35A853", fontSize: "18px" }} />{" "}
                    Post Graduates 5%
                  </li>
                  <li>
                    <CircleIcon sx={{ color: "#4187D6", fontSize: "18px" }} />{" "}
                    Other Graduates 48%
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-lg-6 text-left">
                <ul>
                  <li>
                    <CircleIcon sx={{ color: "#F7AA01", fontSize: "18px" }} />{" "}
                    Support Staff 10%
                  </li>
                  <li>
                    <CircleIcon sx={{ color: "#DFF401", fontSize: "18px" }} />{" "}
                    Certified Professionals 14%
                  </li>
                  <li>
                    <CircleIcon sx={{ color: "#78a54d", fontSize: "18px" }} />{" "}
                    Medical Graduates 8%
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
