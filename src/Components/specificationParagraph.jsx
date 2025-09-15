import React from "react";
import strategy1 from "../assets/Images/strategy1.jpg";
import strategy2 from "../assets/Images/strategy2.jpg";
import strategy3 from "../assets/Images/strategy3.jpg";
import strategy6 from "../assets/Images/testimonial3.jpg";
import EmergencyIcon from "@mui/icons-material/Emergency";
import AddTaskIcon from "@mui/icons-material/AddTask";
const SpecsDetails = () => {
  const emrFeatures = [
    "Client/Server or Web-based EMR options",
    "HIPAA Technical Security Compliant",
    "Drag & Drop to Reschedule Appointments",
    "Custom Specialty-Specific Templates",
    "Automatic Refill Requests",
    "E-Faxing",
    "Interoffice Communication",
    "Electronic Billing / CMS-1500 Claims Filing",
    "PDR-Based Prescription Writing",
    "Custom Decision Support (ADE, Coding)",
    "HL7 Custom Interfacing",
    "Medical Calculator",
    "Multi Provider and Resource Appointment Scheduler/Scheduling",
    "Insurance Authorization",
    "Point & Click SOAP Note Templates",
    "Electronic Prescribing",
    "Tablet PC Enabled",
    "Drug & Allergy Alerts",
    "Online Patient Portal",
    "Built-in Reports",
    "E&M Coding Assistance for Specific Specialty",
    "Lab Interface (Quest, LabCorp, etc.)",
    "Document/Image Management",
    "Reminders and many more additional features",
  ];

  return (
    <div>
      <div className="section-title">
        <span className="sub">our Specialities</span>
        <h2>
          We Serve In Different <b>Areas For Our Patients</b>
        </h2>
      </div>
      <div className="flex justify-center mb-5">
      <div className="w-[90%] xl:w-[80%]">
  <div className="row text-center flex flex-wrap justify-between p-1 xl:p-5">
    <div className="col-xl-6 mb-3">
      <div className="row flex flex-wrap">
        <div className="col-md-6 flex flex-col gap-3">
          <img
            className="rounded-3xl w-full h-auto object-cover aspect-w-16 aspect-h-9"
            src={strategy1}
            alt="specs"
          />
          <img
            className="rounded-3xl w-full h-auto object-cover aspect-w-16 aspect-h-9"
            src={strategy2}
            alt="specs"
          />
        </div>
        <div className="col-md-6 mt-2 xl:mt-0">
          <img
            className="rounded-3xl w-full h-auto object-cover aspect-w-16 aspect-h-9"
            src={strategy3}
            alt="specs"
          />
        </div>
      </div>
    </div>
    <div className="col-xl-6 text-justify bg-white rounded-3xl">
      <p className="text-2xl 2xl:text-3xl p-1 2xl:p-5 2xl:m-5 text-blue-950 font-semibold">
        MDCare Electronic Medical Records System
      </p>
      <p className="text-lg 2xl:p-3">
        MDCare EMR offers a user-friendly, specialty-specific, and fully customizable electronic medical records system. Instead of enforcing rigid charting rules, it allows physicians to tailor data-sets and workflows to match their documentation style and thought process, ensuring a more intuitive and efficient experience across multiple medical specialties.
      </p>
      <ul className="2xl:flex 2xl:flex-col gap-0 2xl:gap-1">
        <li className="flex flex-row gap-3 my-2">
          <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} /> MDCare EMR/PMS is an innovative Electronic Medical Records and Practice Management platform.
        </li>
        <li className="flex flex-row gap-3 my-2">
          <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} /> Developed by physicians from multiple specialties and a senior development team.
        </li>
        <li className="flex flex-row gap-3 my-2">
          <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} /> Built with years of healthcare domain expertise.
        </li>
        <li className="flex flex-row gap-3 my-2">
          <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} /> Offers unparalleled reliability and comprehensive support.
        </li>
        <li className="flex flex-row gap-3 my-2">
          <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} /> Ensures security, ease of use, and efficiency.
        </li>
        <li className="flex flex-row gap-3 my-2">
          <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} /> Provides high customizability to meet diverse medical needs.
        </li>
      </ul>
    </div>
  </div>
</div>

      </div>
      <div className="flex justify-center mb-5 mt-5">
        <div className="w-[90%] xl:w-[80%]">
          <div className="row text-center flex flex-row-reverse justify-between p-1 xl:p-5">
            {/* Image Container */}
            <div className="col-xl-6 mb-3 flex">
              <img
                className="rounded-3xl w-full h-full object-cover"
                src={strategy6}
                alt="specs"
              />
            </div>

            {/* Text Content */}
            <div className="col-xl-6 text-left bg-white rounded-3xl">
              <p className="text-2xl 2xl:text-3xl p-1 2xl:p-5 2xl:m-5 text-blue-950 font-semibold">
                MDCare EMR – A Tailored & Streamlined Healthcare Solution
              </p>
              <p className="text-lg 2xl:p-3">
                MDCare EMR is a reliable, specialty-specific, and customizable
                electronic medical records solution designed to enhance
                efficiency, accuracy, and patient care. We provide a proven
                technology platform tailored to meet the unique needs of each
                medical specialty, ensuring a seamless experience for healthcare
                professionals.
              </p>
              <ul className="2xl:flex 2xl:flex-col gap-0 2xl:gap-1">
                <li className="flex flex-row gap-3 my-2">
                  <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} />
                  Customizable Encounter Forms – Physicians can personalize
                  chart layouts, menu lists, and data fields.
                </li>
                <li className="flex flex-row gap-3 my-2">
                  <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} />
                  Efficient Workflow Management – Streamlines scheduling,
                  documentation, claims, and billing.
                </li>
                <li className="flex flex-row gap-3 my-2">
                  <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} />
                  Intuitive & User-Friendly Interface – Reduces charting time
                  and enhances usability.
                </li>
                <li className="flex flex-row gap-3 my-2">
                  <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} />
                  Automated Claims & Billing – Minimizes errors, speeds up
                  reimbursements, and improves revenue management.
                </li>
                <li className="flex flex-row gap-3 my-2">
                  <EmergencyIcon sx={{ color: "#292966", fontSize: "18px" }} />
                  HIPAA-Compliant & Secure – Ensures data protection with
                  encryption and role-based access.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-5">
        <div className="row w-[90%] xl:w-[80%] bg-white rounded-3xl text-center">
          <h3 className="mb-5 mt-5">
            MDCare EMR: A Fully Customizable & Specialty-Specific Solution
          </h3>
          <div className="col-md-6 col-lg-4 text-left">
            <ul>
              {emrFeatures.slice(0, 8).map((item, index) => (
                <li
                  key={index}
                  className="xl:my-2 2xl:my-4 flex flex-row gap-3 my-2 items-center hover:text-[#546e91] hover:cursor-crosshair transition-all hover:duration-200"
                >
                  <AddTaskIcon
                    sx={{
                      color: "#292966",
                      fontSize: "18px",
                    }}
                  />{" "}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 text-left">
            <ul>
              {emrFeatures.slice(8, 16).map((item, index) => (
                <li
                  key={index}
                  className="xl:my-2 2xl:my-4 flex flex-row gap-3 my-2 items-center hover:text-[#546e91] hover:cursor-crosshair transition-all hover:duration-200"
                >
                  <AddTaskIcon
                    sx={{
                      color: "#292966",
                      fontSize: "18px",
                    }}
                  />{" "}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-12 col-lg-4 text-left">
            <ul>
              {emrFeatures.slice(16).map((item, index) => (
                <li
                  key={index}
                  className="xl:my-2 2xl:my-4 flex flex-row gap-3 my-2 items-center hover:text-[#546e91] hover:cursor-crosshair transition-all hover:duration-200"
                >
                  <AddTaskIcon
                    sx={{
                      color: "#292966",
                      fontSize: "18px",
                    }}
                  />{" "}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecsDetails;
