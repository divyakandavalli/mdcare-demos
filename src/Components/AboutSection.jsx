import React from "react";

export default function AboutUs() {
  return (
    <section className="font-roboto xl:py-16">
      <div className="container mx-auto px-6 2xl:px-20">
        {/* Custom column sizes: left 40%, right 60% */}
        <div className="grid xl:grid-cols-[50%_50%] 2xl:grid-cols-[40%_60%] gap-10 xl:gap-40 items-center">
          {/* Left Section - Images */}
          <div className="relative">
            <img
              src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/about4.jpg"
              alt="Clinic Hall"
              className="rounded-2xl shadow-lg w-full h-full object-cover"
            />
            <img
              src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/about5.jpg"
              alt="Waiting Area"
              className="xl:absolute mt-10 xl:mt-0 xl:bottom-10 xl:-right-32 w-full h-full xl:w-80 xl:h-72 rounded-2xl shadow-lg "
            />
          </div>

          {/* Right Section - Text */}
          <div>
            <h4 className="text-sm font-semibold text-[#00aeef] tracking-wide uppercase mb-2 ">
              More About Us
            </h4>
            <h2 className="text-3xl xl:text-4xl  text-[#0f0f52] leading-snug">
              Transforming Healthcare with <b>Secure and Transparent</b>{" "}
              Solutions
            </h2>
            <p className="text-gray-600 mt-4 border-l-[3px] border-[#00aeef] pl-12">
           With the ongoing trends in information technology where change is an obsession, time a limited commodity, and quality the hallmark of every business, Vision Infonet Inc. has created its niche in the service of healthcare providers by proactively understanding the current needs of the healthcare industry.
            </p>

            {/* Doctor Image + Text Side by Side */}
            <div className="mt-5 xl:mt-12 block xl:flex xl:gap-6  items-center">
              <img
                src="https://themes.hibootstrap.com/hospa/wp-content/uploads/2024/04/about6.jpg"
                alt="Doctor"
                className="w-full h-full xl:w-80 xl:h-72 rounded-2xl object-cover shadow-md flex-shrink-0 "
              />
              <div>
                <p className="text-gray-600 leading-relaxed mt-5 xl:mt-0">
                The company has successfully fulfilled these needs by combining high-end technology with highly skilled professionals to make the documentation process simple.
                </p>
                <p className="text-gray-600 leading-relaxed mb-5 xl:mb-0">
                 Vision Infonet Inc. functions as an intelligent electronic platform between Government on one side and healthcare providers on the other. We provide a complete technology backbone that delivers automated, compliant, transparent and secure processes to the medical facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
