import React from "react";
import Footer from "../components/Footer";
import { assets } from "../assets/assets_frontend/assets";

function About() {
  return (
    <>
      <h1 className="text-xl text-center font-semibold text-gray-500">
        ABOUT <span className="text-black">US</span>
      </h1>

      {/* <div className="p-8 flex flex-col md:flex-row justify-between items-center">
        <div className="w-1/2">
          <img src={assets.about_image} className="w-92" alt="" />
        </div>
        <div className="w-1/2">
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>


          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>

          <h3>Our Vision</h3>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
        
      </div> */}

      <div className="px-8 py-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={assets.about_image}
            alt="About Prescripto"
            className="w-80 md:w-[22rem]  shadow-md"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-2/3 flex flex-col gap-6 text-gray-600 font-sans">
          <p className="text-sm leading-relaxed">
            Welcome to{" "}
            <span className="font-semibold text-[#5f5FFF]">Prescripto</span>,
            your trusted partner in managing your healthcare needs conveniently
            and efficiently. At Prescripto, we understand the challenges
            individuals face when it comes to scheduling doctor appointments and
            managing their health records.
          </p>

          <p className="text-sm leading-relaxed">
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Vision</h3>
            <p className="text-sm leading-relaxed">
              Our vision at Prescripto is to create a seamless healthcare
              experience for every user. We aim to bridge the gap between
              patients and healthcare providers, making it easier for you to
              access the care you need, when you need it.
            </p>
          </div>
        </div>
      </div>

      <h1 className="font-semibold text-xl text-gray-600">
        WHY <span className="font-bold">CHOOSE US</span>
      </h1>

      {/* <div className="flex flex-col md:flex-row items-center">
          <div className="border-1 border-gray-400 p-16 hover:bg-[#5f5FFF] hover:text-white transition-transform duration-300">
            <h1 className="text-gray-600 font-extrabold">EFFICIENCY:</h1>
            <p className="text-gray-500">Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
         

          <div className="border-1 border-gray-400 p-16 hover:bg-[#5f5FFF] hover:text-white transition-transform duration-300">
            <h1>EFFICIENCY:</h1>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>



          <div className="border-1 border-gray-400 p-16 hover:bg-[#5f5FFF] hover:text-white transition-transform duration-300">
            <h1>EFFICIENCY:</h1>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>


        </div> */}














      <div className="flex flex-col md:flex-row  items-center my-16">
  {/* Card 1 */}
  <div className="flex-1 border border-gray-300  p-10 py-16 text-center hover:bg-[#5f5FFF] hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg">
    <h1 className="text-lg font-extrabold  mb-3 transition-colors duration-300">
      EFFICIENCY
    </h1>
    <p className="text-sm  transition-colors duration-300">
      Streamlined appointment scheduling that fits into your busy lifestyle.
    </p>
  </div>

  {/* Card 2 */}
  <div className="flex-1 border border-gray-300 p-10 py-16 text-center hover:bg-[#5f5FFF] hover:text-white transition-all duration-300 cursor-pointer hover:shadow-lg">
    <h1 className="text-lg font-extrabold  mb-3 transition-colors duration-300">
      CONVENIENCE
    </h1>
    <p className="text-sm  transition-colors duration-300">
      Access to a network of trusted healthcare professionals in your area.
    </p>
  </div>

  
  <div className="flex-1 border border-gray-300 p-10 py-16 text-center hover:bg-[#5f5FFF] hover:text-white transition-all duration-300 cursor-pointer  hover:shadow-lg hover:text-white">
    <h1 className="text-lg font-extrabold  mb-3 transition-colors duration-300">
      PERSONALIZATION
    </h1>
    <p className="text-sm  transition-colors duration-300">
      Tailored recommendations and reminders to help you stay on top of your
      health.
    </p>
  </div>
</div>

    </>
  );
}

export default About;
