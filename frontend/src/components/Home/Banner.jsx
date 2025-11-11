import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';

function Banner() {

  const navigate = useNavigate();


  return (
    <>
      <div className='relative bg-[#5f5fff] rounded-lg flex justify-start items-center p-8 md:p-12 my-16 mx-auto  overflow-hidden min-h-[250px] md:min-h-[350px]'> 
        <div className='text-left md:w-3/5 lg:w-1/2 z-10'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6'>
            Book Appointment <br /> With 100+ Trusted Doctors
          </h1>
          <button onClick={()=> {navigate('/login'); scrollTo(0,0);}} className='cursor-pointer  bg-white text-[#5f5fff] font-bold py-3 px-8 rounded-full text-md hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105 shadow'>
            Create account
          </button>
        </div>

       
        <div className='hidden md:block absolute right-0 bottom-0 top-0 h-full'>
          <img
            src={assets.appointment_img} className='h-full w-auto object-cover' alt=''
          />
        </div>

      </div>
    </>
  )
}

export default Banner;