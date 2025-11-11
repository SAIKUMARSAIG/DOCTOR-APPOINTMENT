// import React from 'react'
// import { assets } from '../assets/assets_frontend/assets'

// function Footer() {
//   return (
//     <>
//         <div className='flex flex-col md:flex-row justify-between items-center'>
//             <div className='max-w-1/3'>
//                 <img src={assets.logo} alt="" className='w-36' />
//                 <div>
//                     <p className='text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                 </div>
//             </div>
//             <div className='max-w-1/3'>
//                 <h1 className='text-lg font-bold'>COMPANY</h1>
//                 <ul className='text-gray-500 text-sm'>
//                     <li>Home</li>
//                     <li>About Us</li>
//                     <li>Delivery</li>
//                     <li>Privacy policy</li>
//                 </ul>
//             </div>
//             <div className='max-w-1/3'>
//                 <h1 className='text-lg font-bold'>GET IN TOUCH</h1>
//                 <div className='text-gray-500'>
//                     <p>+91-9014090842</p>
//                     <p>saigudipati9000@gmail.com</p>
//                 </div>
//             </div>    
//         </div> 
//         <div className='w-full h-[1px] bg-gray-300 my-8'></div>
//         <h1 className='text-center text-gray-500'>Copyright 2024  - All Right Reserved.</h1>
//     </>
//   )
// }

// export default Footer













import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-12">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 mb-4">
            <img src={assets.logo} alt="Logo" className="w-36" />
          </div>
          <p className="text-sm  text-gray-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Home</li>
            <li className="hover:text-gray-900 cursor-pointer">About Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Delivery</li>
            <li className="hover:text-gray-900 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
          <p className="text-sm text-gray-600">+91-9014090842</p>
          <p className="text-sm text-gray-600">saigudipati9000@gmail.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gray-300 my-8"></div>

      {/* Copyright */}
      <p className="text-center text-sm text-gray-500">
        Copyright 2024 - All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
