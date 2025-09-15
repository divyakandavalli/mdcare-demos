import React from "react";
import banner from "../assets/Images/bg20.jpg";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import ehcabout from "../assets/Images/ehc-about.png";
import quote from "../assets/Images/ech-abt-quote.svg";
import ceo from "../assets/Images/ecg-user.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DoneAllIcon from "@mui/icons-material/DoneAll";
const AboutUsBanner = () => {
  return (
    <div className="flex justify-center items-center w-full ">
      <div>
        <div className="relative flex justify-center items-center h-80 z-2">
          <img alt="aboutus" className="rounded-xl" src={banner} />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between h-36 sm:h-44 relative w-[95%] left-0 xl:left-[6.5rem] sm:w-[85%]  mt-[-6rem] sm:mt-[-5rem] z-50  rounded-xl ml-2 sm:ml-10 bg-[#ffffff] sm:items-center">
          <div className="ml-10">
            <h1 className="mt-2 sm:mt-0">About Us</h1>
            <p>
              <Link className="no-underline" to="/">
                Home
              </Link>{" "}
              / About Us
            </p>
          </div>
          <div className=" mr-5 ms-3 sm:mr-10 mt-1 sm:mt-0">
            <p className="bg-white text-xl text-[#3f856a] sm:ps-2 sm:pe-5 py-2 rounded-2xl">
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
        <div className="flex justify-center w-full">
          <div className="row w-[90%] mt-8 sm:w-[80%] lg:w-[95%] xl:w-[80%] ">
            <div className="col-lg-6 p-5 relative">
              <img src={ehcabout} alt={ehcabout} />
              <div className="absolute  top-[3.5rem] rounded-3xl  bg-[#D6D2F1]">
                <div className="border-2 rounded-2xl text-center w-20 h-20  text-sm md:w-[6rem] md:h-[6.5rem] sm:m-6 2xl:w-36 2xl:h-36 m-6 xl:m-5 2xl:m-6 ">
                  <h1 className="from-neutral-950">22</h1>
                  <p className="text-[12px]">
                    DIFFERENT <br></br>SECTIONS
                  </p>
                </div>
              </div>
              <div className="bg-[#D7ECE4] rounded-xl p-4 relative top-2 sm:top-[-3rem] sm:left-8">
                <p className="text-[12px] sm:text-[14px] font-medium">
                  “I had a great experience at this healthcare clinic. I was
                  seen quickly, and the doctor was able to diagnose and treat my
                  condition very patiently.
                </p>
                <div className="flex  justify-between items-center">
                  <div className="flex flex-row gap-3">
                    <div>
                      <img src={ceo} alt={ceo} />
                    </div>
                    <div>
                      <p className="text-[12px] sm:text-sm">
                        Venneta <br></br>CEO , Sugar
                      </p>
                    </div>
                  </div>
                  <div>
                    <img className="w-12" src={quote} alt="quite" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6  rounded-3xl">
              <div className="bg-[#ffffff] rounded-3xl mt-5 p-[1.5rem]">
              <p className=" font-medium text-blue-600">
                About MD Care
              </p>
              <h2 className="text-xl 2xl:text-5xl">
                We Provide Finnest Patient's{" "}
                <span className="from-neutral-950">Care & Amenities</span>
              </h2>
              <p className="text-gray-500 text-xl lg:text-[15px] xl:text-xl mt-3">
                Embrace a world of comprehensive healthcare where your
                well-being takes center stage. At Meca, we’re dedicated to
                providing you with personalized and compassionate medical
                services.
              </p>
              <div className="flex justify-center items-center">
                <div className="row 2xl:mt-5">
                  <div className="col-12 col-sm-6">
                    <ul className="text-left 2xl:text-xl">
                      <li className="xl:my-2 2xl:my-4">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">
                          24/7 Emergency Eye Care
                        </span>
                      </li>
                      <li className="xl:my-2 2xl:my-4 ">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">Dry Eye Solutions</span>
                      </li>
                      <li className="xl:my-2 2xl:my-4">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">
                          Comprehensive Eye Health
                        </span>
                      </li>
                      <li className="xl:my-2 2xl:my-4">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">
                          Warm and Welcoming Environment
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-sm-6">
                    <ul className="text-left 2xl:text-xl">
                      <li className="xl:my-2 2xl:my-4 ">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">
                          Sunglasses Collection
                        </span>
                      </li>
                      <li className="xl:my-2 2xl:my-4">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">
                          Prescription Lenses
                        </span>
                      </li>
                      <li className="xl:my-2 2xl:my-4">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">Vision Testing</span>
                      </li>
                      <li className="xl:my-2 2xl:my-4">
                        <DoneAllIcon
                          sx={{
                            color: "blue",
                            fontSize: "18px",
                          }}
                        />{" "}
                        <span className="font-semibold">Positive Reviews</span>
                      </li>
                    </ul>
                  </div>
                  <p className="px-5 py-2">
                    Ut wisi enim ad minim veniam, quis laore nostrud exerci
                    tation ulm hedi sed a corper turet suscipit lobortis aliquip
                    erat volutpat autem vel eum.
                  </p>
                  <p className="bg-[#9588E8] text-xl text-[#ffffff] w-52 mx-5 cursor-pointer hover:bg-[blue] transition-all duration-400 sm:ps-2 sm:pe-5 py-1 rounded-full">
                    <ArrowForwardIcon
                      sx={{
                        color: "#5DB996",
                        backgroundColor: "#fff",
                        fontSize: "20px",
                        borderRadius: "50%",
                        padding: "2px 2px",
                        margin: "0 2px 5px",
                      }}
                    />
                    More About Us
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
