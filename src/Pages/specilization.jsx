import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import banner from "../assets/Images/bg20.jpg";
import CallIcon from "@mui/icons-material/Call";
import SpecsDetails from "../Components/specificationParagraph";
const Specialization = () => {
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Endocrinology",
    "ENT/Otolaryngology",
    "Family Practice",
    "Gastroenterology",
    "General Surgery",
    "Internal Medicine",
    "Neurology",
    "OB-GYN",
    "Ophthalmology",
    "Orthopedics",
    "Pain Management",
    "Pediatric",
    "Podiatry",
    "Psychiatry",
    "RIS (Radiology Information System)",
    "Pulmonology",
    "Urology",
    "Urgent Care",
  ];
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);
  return (
    <section className="bg-[#E9EEF2]">
      <div className="relative flex justify-center items-center h-80 z-2">
        <img alt="aboutus" className="rounded-xl" src={banner} />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between h-36 sm:h-44 relative w-[95%] left-0 xl:left-[6.5rem] sm:w-[85%]  mt-[-6rem] sm:mt-[-5rem] z-50  rounded-xl ml-2 sm:ml-10 bg-[#ffffff] sm:items-center">
        <div className="ml-10">
          <h1 className="mt-2 sm:mt-0">Our Speciality</h1>
          <p>
            <Link className="no-underline" to="/">
              Home
            </Link>{" "}
            / Our Speciality
          </p>
        </div>
        <div className=" mr-5 ms-3 sm:mr-10 mt-1 sm:mt-0">
          <p className="bg-[#E9EEF2] text-xl text-[#3f856a] sm:ps-2 sm:pe-5 py-2 rounded-2xl">
            <CallIcon
              sx={{
                color: "#fff",
                backgroundColor: "#5DB996",
                fontSize: "35px",
                borderRadius: "50%",
                padding: "5px 5px",
                margin: "0 5px",
              }}
            />
            Call :{" "}
            <a
              href="tel:+91987984794"
              className="font-medium no-underline text-[#2C7559]"
            >
              {" "}
              1-877-377-8999
            </a>
          </p>
        </div>
      </div>
      <div className="services-area bg-[#E9EEF2] py-[100px]">
        <SpecsDetails />
        <Container className="text-center">
          <h1 className="my-3">Comprehensive Specialty-Specific Customization</h1>
          <p className="text-lg py-3">
            Our advanced, customer-driven EMR solution offers specialized
            features tailored to over 30 medical specialties. Fully customizable
            to meet the unique needs and workflows of each practice, it evolves
            with the healthcare industry, ensuring continuous improvement and
            innovation. This flexible system is designed to adapt quickly to
            industry changes, keeping your practice ahead of the curve.
          </p>
          <Row className="justify-content-center text-left">
            {specialties.map((specialty, index) => (
              <Col xl={3} md={6}>
                <div className="services-card">
                  <div className="icon">
                    <img
                      decoding="async"
                      alt="Food &amp; Nutrition"
                      data-cfsrc="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png"
                      src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/03/health-care.png"
                    />
                  </div>
                  <h3>
                    <Link to="">{specialty}</Link>
                  </h3>
                  <p>
                    20+ Doctors are available under this department who serve.
                  </p>
                  {/* <Link class="services-btn text-decoration-none" to="">
                        <FontAwesomeIcon icon={faArrowRight} />
                        Read More{" "}
                      </Link> */}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Specialization;
