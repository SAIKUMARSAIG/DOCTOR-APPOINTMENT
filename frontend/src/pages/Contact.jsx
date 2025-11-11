


import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Contact() {
  return (
    <div className="mx-auto mb-24 px-4 sm:px-8 lg:px-20">
      <h1 className="text-center text-2xl font-bold text-gray-500 my-12 sm:my-16">
        CONTACT <span className="text-gray-700">US</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
        {/* Image */}
        <img 
          src={assets.contact_image} 
          alt="Contact" 
          className="w-72 sm:w-96 object-contain" 
        />

        {/* Content */}
        <div className="flex-1">
          <h1 className="text-gray-600 font-bold text-xl">OUR OFFICE</h1>
          <div className="my-5 text-gray-500 text-sm space-y-1">
            <p>00000 Willms Station</p>
            <p>Suite 000, Washington, USA</p>
            <div className="my-2"></div>
            <p>Tel: (000) 000-0000</p>
            <p>Email: sai@gmail.com</p>
          </div>

          <h1 className="text-gray-600 font-bold text-xl mt-6">CAREERS AT PRESCRIPTO</h1>
          <p className="text-sm mt-2 text-gray-500">
            Learn more about our teams and job openings.
          </p>

          <button className="mt-8 px-5 py-3 text-sm border border-gray-500 transition-all duration-500 cursor-pointer hover:bg-black hover:text-white">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
