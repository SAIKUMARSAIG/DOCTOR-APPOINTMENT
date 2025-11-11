import React from 'react'

import { specialityData } from '../../assets/assets_frontend/assets'
import { Link } from 'react-router-dom'

function SpecialityMenu() {
  return (
    <div id='speciality' className='flex flex-col items-center gap-4 text-gray-800 py-16 '>
        <h1 className='text-3xl font-medium'>Find by Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>

        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {
                specialityData.map((data,index)=>(
                    <Link onClick={()=>scrollTo(0,0)} to={`/doctors/${data.speciality}`} key={index} className='flex flex-col items-center cursor-pointer hover:translate-y-[-10px] transi duration-500' >
                        <img src={data.image} className='w-16 sm:w-24 mb-2 ' alt="" />
                        <p>{data.speciality}</p>
                    </Link>
                ))
            }
        </div>

    </div>
  )
}

export default SpecialityMenu
