// // import React from "react";
// // import { assets } from "../../assets/assets_frontend/assets";

// // function H1() {
// //   return (
// //     <>
// //       <div className="bg-[#5f5FFF] rounded-md flex flex-col md:flex-row justify-between items-center gap-10 px-10 pt-12">
// //         <div className="flex flex-col gap-3">
// //           <h1 className="text-4xl text-white font-bold">Book Appointment <br /> With Trusted Doctors</h1>
// //           <div className="flex gap-2">
// //             <img src={assets.group_profiles} className="w-28" alt="" />
// //             <p className="text-sm text-white max-w-[400px]">
// //               Simply browse through our extensive list of trusted doctors,
// //               schedule your appointment hassle-free.
// //             </p>
// //           </div>
// //           <div>
// //             <button className="bg-white py-2 px-4 rounded-full text-gray-500 text-[12px]">
// //             Book Appointment <span>&rarr;</span> 
// //           </button>
// //           </div>
// //         </div>

// //         <div>
// //             <img src={assets.header_img} className="w-9/12" alt="" />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default H1;
















// import React from "react";
// import { assets } from "../../assets/assets_frontend/assets";

// function H1() {
//   return (
//     <>
//       <div className="bg-[#5f5FFF] rounded-md flex flex-col md:flex-row justify-between items-center px-6 pt-24 md:px-10 md:pt-12 gap-8">
//         <div className="flex flex-col gap-4 text-center md:text-left items-center md:items-start">
//           <h1 className="text-3xl sm:text-4xl text-white font-bold">
//             Book Appointment <br /> With Trusted Doctors
//           </h1>

//           <div className="flex flex-col sm:flex-row items-center gap-3">
//             <img
//               src={assets.group_profiles}
//               className="w-28 flex-shrink-0"
//               alt="User profiles"
//             />
//             <p className="text-sm text-white max-w-[400px]">
//               Simply browse through our extensive list of trusted doctors,
//               schedule your appointment hassle-free.
//             </p>
//           </div>

//           <div>
//             <button className="bg-white py-2 px-5 rounded-full text-gray-600 text-sm font-semibold hover:bg-gray-100 transition-colors hover:transition hover:scale-105 transition-transform duration-300">
//               Book Appointment <span className="ml-1">&rarr;</span>
//             </button>
//           </div>
//         </div>

//         <div className="w-full md:w-auto flex justify-center">
//           <img
//             src={assets.header_img}
//             className="w-10/12 max-w-sm md:max-w-md"
//             alt="Doctor illustration"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default H1;














import React from "react";
import { assets } from "../../assets/assets_frontend/assets";

function H1() {
  return (
    <>
      <div className="bg-[#5f5FFF] rounded-md flex flex-col md:flex-row justify-between items-center px-6 md:px-10 pt-12 md:pt-12 gap-8 md:gap-10 my-10">
        {/* Left Content - Text Section */}
        <div className="flex flex-col gap-3 md:gap-3 w-full md:w-auto">
          <h1 className="text-3xl md:text-4xl text-white font-bold text-center md:text-left">
            Book Appointment <br /> With Trusted Doctors
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-2">
            <img 
              src={assets.group_profiles} 
              className="w-28 md:w-28 flex-shrink-0" 
              alt="User profiles" 
            />
            <p className="text-sm text-white max-w-[400px] text-center sm:text-left">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <a href="#speciality" className="bg-white py-2 px-4 rounded-full text-gray-500 text-[12px] md:text-[12px] hover:bg-gray-100 transition-colors">
              Book Appointment <span>&rarr;</span> 
            </a>
          </div>
        </div>

        {/* Right Content - Image Section */}
        <div className="w-full md:w-auto flex justify-center">
          <img 
            src={assets.header_img} 
            className="w-9/12 md:w-9/12 max-w-xs md:max-w-none" 
            alt="Doctor illustration" 
          />
        </div>
      </div>
    </>
  );
}

export default H1;