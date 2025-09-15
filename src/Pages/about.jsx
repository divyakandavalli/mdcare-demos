import React , {useEffect} from "react";
import AboutUsBanner from "../Components/aboutusbanner";
import CircleIcon from "@mui/icons-material/Circle";
import VerifiedIcon from "@mui/icons-material/Verified";
import PieChart from "../Components/piechart";
import whychoose from "../assets/Images/ech-choose.png";
import checkIcon from "../assets/Images/checked.svg";
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
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[])
  return (
    <div className="bg-[#E1E6EB]">
      <AboutUsBanner />
      <div className="text-center mr-3 ml-3 flex justify-center items-center">
        <div className="w-[90%] lg:w-[100%] xl:w-[80%]">
          <div className="row flex justify-center mt-5 mb-5  flex-row p-2 2xl:p-10">
            <div className="col-lg-6 rounded-3xl text-left p-10 bg-white">
              <h1 className="mb-2 xl:text-7xl">About Us</h1>
              <p className="mt-2">


                
                <span className="font-semibold text-lg">
                  Vision Infonet Inc.
                </span>{" "}
                is an Illinois-based provider of cutting-edge technologies and
                services for the healthcare industry. Our medical transcription,
                medical coding, medical billing, Electronic Medical Records
                (EMR), Paperless Office System implementation, and other
                back-office services assure maximum profit for practices as
                small as one doctor to as large as a hospital group with four
                hundred or more physicians.
              </p>
              <p className="m-2 font-semibold text-xl">
                Serving over 2,000 clients across the U.S., the company
                specializes in:
              </p>
              <ul className="flex flex-col items-start mt-[1.5rem]">
                <li className=" sm:mt-4 flex flex-row font-medium">
                  <img src={checkIcon} className="mr-2" alt="checkino" />
                  <p>
                    Medical transcription, medical coding, and medical billing
                  </p>
                </li>
                <li className=" sm:mt-4 flex flex-row font-medium">
                  <img src={checkIcon} className="mr-2" alt="checkino" />
                  <p> Electronic Medical Records (EMR) management</p>
                </li>
                <li className=" sm:mt-4 flex flex-row font-medium">
                  <img src={checkIcon} className="mr-2" alt="checkino" />
                  <p> Paperless Office System implementation</p>
                </li>
                <li className=" sm:mt-4 flex flex-row font-medium">
                  <img src={checkIcon} className="mr-2" alt="checkino" />
                  <p>
                    {" "}
                    End-to-end back-office support for healthcare providers
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 rounded-xl relative text-left  ">
              <img
                className="w-full 2xl:h-[600px]"
                src={whychoose}
                alt="why choose us"
              />
              <div className="absolute  bottom-[.2rem] rounded-3xl  bg-[#D6D2F1]">
                <div className="border-2 rounded-2xl text-center w-20 h-20  text-sm md:w-[6rem] md:h-[6.5rem] sm:m-6 2xl:w-40 2xl:h-[6rem] m-6 xl:m-5 2xl:m-6 ">
                  <h1 className="from-neutral-950">22</h1>
                  <p className="text-[12px]">DIFFERENT</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex justify-center  mt-5 mb-5  sm:flex-row-reverse p-2 2xl:p-10">
            <div className="col-lg-6 rounded-3xl text-left xl:p-10 bg-white">
              <h1 className="mb-2 xl:text-7xl">Our Professionals</h1>
              <p className="mt-3">
                Founded in 1999 by a medical doctor, Vision Infonet Inc. has
                steadily grown over the past decade to serve over 2000 clients
                all over the United States. Our employee base spread out at our
                4 locations, consists of 750+ specialized staff and managers
                dedicated in providing exceptional quality end-to-end
                back-office services to the healthcare industry.
              </p>
              <ul>
                {ListData.map((item, index) => (
                  <li key={index} className=" sm:mt-2 flex flex-row">
                    <img src={checkIcon} className="mr-4" alt="checkino" />
                    <p> {item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6 rounded-xl relative text-left  ">
              <img
                className="w-full 2xl:h-[600px]"
                src={whychoose}
                alt="why choose us"
              />
              <div className="absolute  bottom-[.2rem] rounded-3xl  bg-[#D6D2F1]">
                <div className="border-2 rounded-2xl text-center w-20 h-20  text-sm md:w-[6rem] md:h-[6.5rem] sm:m-6 2xl:w-40 2xl:h-[6rem] m-6 xl:m-5 2xl:m-6 ">
                  <h1 className="from-neutral-950">22</h1>
                  <p className="text-[12px]">DIFFERENT</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 mb-5">
            <h1 className="mb-8 mt-8">
              The secret behind our strength lies in
            </h1>
            <div className="row ">
              <div className="col-lg-6 rounded-xl text-left flex flex-col">
                <div>
                  <p className="m-2 font-semibold">
                    At Vision Infonet Inc., our team is composed of highly
                    skilled professionals dedicated to delivering excellence in
                    healthcare support services. Our workforce includes
                  </p>
                  <ul className="flex flex-col items-start mt-[1.5rem]">
                    <li className="m-2">
                      <VerifiedIcon
                        sx={{
                          color: "#5DB996",
                          marginRight: "10px",
                          fontSize: "22px",
                        }}
                      />
                      <span> Medical Transcription Professionals</span> –
                      Experienced in transcription and proof-reading, led by
                      Medical and English experts.
                    </li>
                    <li className="m-2">
                      <VerifiedIcon
                        sx={{
                          color: "#5DB996",
                          marginRight: "10px",
                          fontSize: "22px",
                        }}
                      />
                      <span> EMR Software Professionals</span> – Specialists in
                      healthcare technology, guided by project heads and domain
                      experts.
                    </li>
                    <li className="m-2">
                      <VerifiedIcon
                        sx={{
                          color: "#5DB996",
                          marginRight: "10px",
                          fontSize: "22px",
                        }}
                      />
                      <span>
                        {" "}
                        Certified Medical Billing & Coding Specialists{" "}
                      </span>{" "}
                      – Specialists in healthcare technology, guided by project
                      heads and domain experts.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="m-2 font-semibold">
                    Our software team consists of Microsoft-certified
                    professionals who develop and maintain our cost-effective
                    and advanced EMR software. Certifications include:
                  </p>
                  <ul className="flex flex-col items-start mt-[1.5rem]">
                    <li className="m-2">
                      <VerifiedIcon
                        sx={{
                          color: "#5DB996",
                          marginRight: "10px",
                          fontSize: "22px",
                        }}
                      />
                      MCP (Microsoft Certified Professional)
                    </li>
                    <li className="m-2">
                      <VerifiedIcon
                        sx={{
                          color: "#5DB996",
                          marginRight: "10px",
                          fontSize: "22px",
                        }}
                      />
                      MCTS (Microsoft Certified Technology Specialist)
                    </li>
                    <li className="m-2">
                      <VerifiedIcon
                        sx={{
                          color: "#5DB996",
                          marginRight: "10px",
                          fontSize: "22px",
                        }}
                      />
                      MCPD (Microsoft Certified Professional Developer).
                    </li>
                    <li className="m-2">
                      <VerifiedIcon
                        sx={{
                          color: "#5DB996",
                          marginRight: "10px",
                          fontSize: "22px",
                        }}
                      />
                      MCITP (Microsoft Certified IT Professional).
                    </li>
                  </ul>
                </div>
                <p className="mt-3">
                  With a team of young, qualified graduates led by seasoned Team
                  Leaders with 7-15 years of experience, we are committed to
                  simplifying and streamlining healthcare practices through
                  innovation and expertise
                </p>
                <p className="mt-3">
                  With a team of young, qualified graduates led by seasoned Team
                  Leaders with 7-15 years of experience, we are committed to
                  simplifying and streamlining healthcare practices through
                  innovation and expertise
                </p>
              </div>
              <div className="col-lg-6 flex justify-center items-center flex-col ">
                <PieChart />
                <div className="row w-full sm:w-[75%]">
                  <div className="col-sm-6 col-lg-6 text-left">
                    <ul className="text-left">
                      <li>
                        <CircleIcon
                          sx={{
                            color: "#BE01EB",
                            fontSize: "18px",
                          }}
                        />{" "}
                        Software Graduates 15%
                      </li>
                      <li>
                        <CircleIcon
                          sx={{
                            color: "#35A853",

                            fontSize: "18px",
                          }}
                        />{" "}
                        Post Graduates 5%
                      </li>
                      <li>
                        <CircleIcon
                          sx={{
                            color: "#4187D6",
                            fontSize: "18px",
                          }}
                        />{" "}
                        Other Graduates 48%
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 col-lg-6 text-left">
                    <ul>
                      <li>
                        <CircleIcon
                          sx={{
                            color: "#F7AA01",
                            fontSize: "18px",
                          }}
                        />{" "}
                        Support Staff 10%
                      </li>
                      <li>
                        <CircleIcon
                          sx={{
                            color: "#DFF401",
                            fontSize: "18px",
                          }}
                        />{" "}
                        Certified Professionals 14%
                      </li>
                      <li>
                        <CircleIcon
                          sx={{
                            color: "#78a54d",
                            fontSize: "18px",
                          }}
                        />{" "}
                        Medical Graduates 8%
                      </li>
                    </ul>
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

export default AboutPage;
