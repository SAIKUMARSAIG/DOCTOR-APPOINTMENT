// import React from 'react'
// import { doctors } from '../../assets/assets_frontend/assets'
// import { useNavigate } from 'react-router-dom'

// const TopDoctors = () => {

//     const naviagate = useNavigate();



//   return (
//     <div>
//       <h1 className='text-3xl font-medium text-center'>Top Doctors to Book</h1>
//       <p className='text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
//       <div className='w-full grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3  gap-4 pt-5 gap-y-6 px-3 sm:px-0 '>
//         {
//             doctors.slice(0,10).map((item,index)=>(
//                 <div key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 '>
//                     <img src={item.image} alt="" className='bg-blue-50' />    
//                     <div className='p-4 '>
//                         <div className='flex flex-row gap-2 items-center text-green-500'>
//                             <p className='h-2 w-2 rounded-full bg-green-500'></p><p>Available</p>
//                         </div>

//                             <div className='flex flex-col items-start text-left'>
//                                 <p className='font-bold text-gray-800'>{item.name}</p>
//                                 <p className=''>{item.speciality}</p>
//                             </div>
                    
//                     </div>
//                 </div>
//             ))
//         }
//       </div>
//         <div className='flex justify-center items-center my-10'>
//                   <button onClick={()=>{naviagate('/doctors'); window.scrollTo=(0,0)}} className='bg-blue-50 py-3 text-gray-600 cursor-pointer px-10 rounded-full' >More</button>
//         </div>
//     </div>
//   )
// }

// export default TopDoctors










import React, { useContext } from "react";
// import { doctors } from "../../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();

    const {doctors} = useContext(AppContext)

  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <h1 className="text-2xl sm:text-3xl my-3 font-semibold text-center">
        Top Doctors to Book
      </h1>
      <p className="text-center text-sm text-gray-500">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={()=>navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
                       hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-cover bg-blue-50"
            />
            <div className="p-4">
              <div className="flex flex-row gap-2 items-center text-green-500 text-sm">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <p>Available</p>
              </div>
              <div className="mt-2 flex flex-col items-start text-left">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <p className="text-gray-500 text-sm">{item.speciality}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      
      <div className="flex justify-center items-center my-10">
        <button
          onClick={() => {
            navigate("/doctors");
            window.scrollTo(0, 0);
          }}
          className="bg-blue-50 text-gray-600 py-3 px-12 sm:px-10 rounded-full 
                    cursor-pointer hover:bg-blue-200 hover:text-white transition-all duration-300"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;
