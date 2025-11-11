import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

const RelatedDoctors = ({docId,speciality}) => {

    const {doctors} = useContext(AppContext);

    const navigate = useNavigate()

    const [relDoc,setRelDoc] = useState([]);

    const filter = () =>{
    }

    useEffect(()=>{
        if(doctors.length>0 && speciality){
            const doctorsData = doctors.filter(doc=>doc.speciality === speciality && doc._id !== docId)
            setRelDoc(doctorsData)
        }
        
    },[doctors,docId,speciality])



  return (
    <div>
        <div className='flex flex-col justify-center items-center gap-2 mt-8'>
            <h1 className='text-gray-600 font-bold text-2xl'>Related Doctors</h1>
            <div className='h-[3px] rounded-full w-36 bg-[#5f5FFF]'></div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-6">
        {relDoc.map((item, index) => (
          <div
            onClick={()=>{navigate(`/appointment/${item._id}`);window.scrollTo(0,0)}}
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
    </div>
  )
}

export default RelatedDoctors
