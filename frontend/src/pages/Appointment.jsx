// // // // // // // // // // // // import React, { useContext, useEffect, useState } from 'react'
// // // // // // // // // // // // import { useParams } from 'react-router-dom'
// // // // // // // // // // // // import { AppContext } from '../context/AppContext';
// // // // // // // // // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // // // // // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // // // // // // // // function Appointment() {
// // // // // // // // // // // //   const {docId} = useParams();

// // // // // // // // // // // //   const {doctors} = useContext(AppContext);
// // // // // // // // // // // //   const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

// // // // // // // // // // // //   const [docInfo,setDocInfo] = useState(null);
// // // // // // // // // // // //   const [docSlots,setDocSlots] = useState([]);
// // // // // // // // // // // //   const [slotIndex,setSlotIndex] = useState(0);
// // // // // // // // // // // //   const [slotTime,setSlotTime] = useState('');

// // // // // // // // // // // //   console.log(docId);
// // // // // // // // // // // //   console.log(docInfo);

// // // // // // // // // // // //   const fetchDocInfo = async () =>{
// // // // // // // // // // // //     const docInfo = doctors.find(doc => doc._id === docId)
// // // // // // // // // // // //     setDocInfo(docInfo);
// // // // // // // // // // // //   }

// // // // // // // // // // // //   const getAvailableSlots = async () =>{
// // // // // // // // // // // //     setDocSlots([])
// // // // // // // // // // // //     let today = new Date()

// // // // // // // // // // // //     for(let i=0;i<7;i++){

// // // // // // // // // // // //       let currentDate = new Date(today);
// // // // // // // // // // // //       currentDate.setDate(today.getDate()+i)

// // // // // // // // // // // //       //setting end date
// // // // // // // // // // // //       let endTime = new Date()
// // // // // // // // // // // //       endTime.setDate(today.getDate()+i);
// // // // // // // // // // // //       endTime.setHours(21,0,0,0);

// // // // // // // // // // // //       //setting hours
// // // // // // // // // // // //       if(today.getDate()===currentDate.getDate){
// // // // // // // // // // // //         currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+i : 10)
// // // // // // // // // // // //         currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 : 0)
// // // // // // // // // // // //       }else{
// // // // // // // // // // // //         currentDate.setHours(10);
// // // // // // // // // // // //         currentDate.setMinutes(0)
// // // // // // // // // // // //       }

// // // // // // // // // // // //       let timeSlots = []

// // // // // // // // // // // //       while(currentDate < endTime){
// // // // // // // // // // // //          let formatter = currentDate.toLocaleTimeString([],{hour: '2-digit', minute: '2-digit'})
// // // // // // // // // // // //          timeSlots.push({
// // // // // // // // // // // //           datetime : new Date(currentDate),
// // // // // // // // // // // //           time: formatter
// // // // // // // // // // // //          })

// // // // // // // // // // // //          //increment time by 30 min
// // // // // // // // // // // //          currentDate.setMinutes(currentDate.getMinutes()+30)
// // // // // // // // // // // //       }

// // // // // // // // // // // //       setDocSlots(prev => ([...prev,timeSlots]))
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }

// // // // // // // // // // // //   useEffect(()=>{
// // // // // // // // // // // //     fetchDocInfo()
// // // // // // // // // // // //   },[doctors, docId])

// // // // // // // // // // // //   useEffect(()=>{
// // // // // // // // // // // //     getAvailableSlots()
// // // // // // // // // // // //   },[docInfo])

// // // // // // // // // // // //   useEffect(()=>{

// // // // // // // // // // // //     fetchDocInfo()
// // // // // // // // // // // //   },[doctors, docId])

// // // // // // // // // // // //   return docInfo && (
// // // // // // // // // // // //     <div>
// // // // // // // // // // // //         {/* Doctor details */}
// // // // // // // // // // // //         <div className='flex flex-col md:flex-row gap-4'>
// // // // // // // // // // // //           <div>
// // // // // // // // // // // //             <img src={docInfo?.image} className='bg-[#5f5FFF] w-full sm:max-w-72 rounded-lg ' alt="" />
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           <div className='border border-gray-400 rounded-lg px-8 py-7 bg-white mx-2 sm:mx-. mt-[-80px] sm:mt-0'>
// // // // // // // // // // // //             <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
// // // // // // // // // // // //               {docInfo?.name}
// // // // // // // // // // // //               <img src={assets.verified_icon} className='w-5' alt="" />
// // // // // // // // // // // //             </p>

// // // // // // // // // // // //             <div className='flex items-center gap-2 text-sm text-gray-600'>
// // // // // // // // // // // //               <p>{docInfo?.degree} - {docInfo?.speciality}</p>
// // // // // // // // // // // //               <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo?.experience}</button>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* About of Doctor */}

// // // // // // // // // // // //             <div>
// // // // // // // // // // // //               <p className='flex items-center gap-1 text-sm font-bold text-gray-900 mt-3 '>About <img src={assets.info_icon} alt="" /></p>
// // // // // // // // // // // //               <p className='text-sm text-gray-600 max-w-[700px] mt-1 '>{docInfo?.about}</p>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             <p className='text-gray-500 font-medium mt-4'>Appointment Fee :
// // // // // // // // // // // //               <span className='text-gray-800'>{docInfo?.fees}</span></p>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>

// // // // // // // // // // // //       {/* Booking Slots */}
// // // // // // // // // // // //       <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 '>
// // // // // // // // // // // //           <p className=''>Booking Slots</p>
// // // // // // // // // // // //           <div className='flex gap-4 font-black'>
// // // // // // // // // // // //             {
// // // // // // // // // // // //               docSlots.length && docSlots.map((item,index)=>(
// // // // // // // // // // // //                 <div onClick={()=>{setSlotIndex(index)}} className={`text-center px-2 py-6 min-2-16 rounded-full cursor-pointer ${slotIndex===index ? 'bg-[#5f5FFF] text-white' : 'border border-gray-200'}`} key={index}>
// // // // // // // // // // // //                   <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
// // // // // // // // // // // //                   <p>{item[0] && item[0].datetime.getDate()}</p>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               ))
// // // // // // // // // // // //             }
// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           <div className='flex items-center gap-3 w-full overflow-x-scroll mt-5'>
// // // // // // // // // // // //             {
// // // // // // // // // // // //               docSlots.length && docSlots[slotIndex].map((item,index)=>(
// // // // // // // // // // // //                 <p onClick={()=>{setSlotTime(item.time)}} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border border-gr ${item.time === slotTime ? 'bg-[#5f5FFF] text-white':'text-gray-500 border-gray-300'}`} key={index}>
// // // // // // // // // // // //                   {
// // // // // // // // // // // //                     item.time.toLowerCase()
// // // // // // // // // // // //                   }
// // // // // // // // // // // //                 </p>
// // // // // // // // // // // //               ))
// // // // // // // // // // // //             }

// // // // // // // // // // // //           </div>

// // // // // // // // // // // //           <button className='px-12 py-3 bg-[#5f5FFF] my-5 text-white cursor-pointer rounded-full'>Book An Appointment</button>

// // // // // // // // // // // //       </div>

// // // // // // // // // // // //             {/* Listing Related Doctors */}
// // // // // // // // // // // //             <RelatedDoctors docId={docId} speciality = {docInfo.speciality} />

// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   )
// // // // // // // // // // // // }

// // // // // // // // // // // // export default Appointment

// // // // // // // // // // // import React, { useContext, useEffect, useState } from 'react';
// // // // // // // // // // // import { useParams } from 'react-router-dom';
// // // // // // // // // // // import { AppContext } from '../context/AppContext';
// // // // // // // // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // // // // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // // // // // // // function Appointment() {
// // // // // // // // // // //   const { docId } = useParams();
// // // // // // // // // // //   const { fetchDoctorById, bookAppointment } = useContext(AppContext);

// // // // // // // // // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// // // // // // // // // // //   const [docInfo, setDocInfo] = useState(null);
// // // // // // // // // // //   const [docSlots, setDocSlots] = useState([]);
// // // // // // // // // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // // // // // // // // //   const [slotTime, setSlotTime] = useState('');

// // // // // // // // // // //   // Fetch doctor info by ID
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const doctor = fetchDoctorById(docId);
// // // // // // // // // // //     setDocInfo(doctor);
// // // // // // // // // // //   }, [docId, fetchDoctorById]);

// // // // // // // // // // //   // Generate booking slots
// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (!docInfo) return;

// // // // // // // // // // //     const generateSlots = () => {
// // // // // // // // // // //       const slots = [];
// // // // // // // // // // //       const today = new Date();

// // // // // // // // // // //       for (let i = 0; i < 7; i++) {
// // // // // // // // // // //         let currentDate = new Date(today);
// // // // // // // // // // //         currentDate.setDate(today.getDate() + i);

// // // // // // // // // // //         // Set start time 10 AM
// // // // // // // // // // //         currentDate.setHours(10, 0, 0, 0);

// // // // // // // // // // //         // Set end time 9 PM
// // // // // // // // // // //         let endTime = new Date(today);
// // // // // // // // // // //         endTime.setDate(today.getDate() + i);
// // // // // // // // // // //         endTime.setHours(21, 0, 0, 0);

// // // // // // // // // // //         const daySlots = [];
// // // // // // // // // // //         while (currentDate < endTime) {
// // // // // // // // // // //           daySlots.push({
// // // // // // // // // // //             datetime: new Date(currentDate),
// // // // // // // // // // //             time: currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
// // // // // // // // // // //           });
// // // // // // // // // // //           currentDate.setMinutes(currentDate.getMinutes() + 30);
// // // // // // // // // // //         }

// // // // // // // // // // //         slots.push(daySlots);
// // // // // // // // // // //       }

// // // // // // // // // // //       setDocSlots(slots);
// // // // // // // // // // //     };

// // // // // // // // // // //     generateSlots();
// // // // // // // // // // //   }, [docInfo]);

// // // // // // // // // // //   // Handle booking appointment
// // // // // // // // // // //   const handleBooking = async () => {
// // // // // // // // // // //     if (!slotTime) {
// // // // // // // // // // //       alert('Please select a time slot');
// // // // // // // // // // //       return;
// // // // // // // // // // //     }

// // // // // // // // // // //     const selectedDate = docSlots[slotIndex][0].datetime;
// // // // // // // // // // //     selectedDate.setHours(Number(slotTime.split(':')[0]));
// // // // // // // // // // //     selectedDate.setMinutes(Number(slotTime.split(':')[1]));

// // // // // // // // // // //     const res = await bookAppointment(docId, selectedDate);
// // // // // // // // // // //     if (res.success) {
// // // // // // // // // // //       alert('Appointment booked successfully!');
// // // // // // // // // // //     } else {
// // // // // // // // // // //       alert(`Booking failed: ${res.error}`);
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   if (!docInfo) return <p className="text-center mt-10">Loading doctor information...</p>;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div className="p-4">
// // // // // // // // // // //       {/* Doctor Details */}
// // // // // // // // // // //       <div className="flex flex-col md:flex-row gap-4">
// // // // // // // // // // //         <div>
// // // // // // // // // // //           <img src={docInfo.image} className="bg-[#5f5FFF] w-full sm:max-w-72 rounded-lg" alt={docInfo.name} />
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="border border-gray-400 rounded-lg px-8 py-7 bg-white mx-2 mt-[-80px] sm:mt-0">
// // // // // // // // // // //           <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
// // // // // // // // // // //             {docInfo.name}
// // // // // // // // // // //             <img src={assets.verified_icon} className="w-5" alt="Verified" />
// // // // // // // // // // //           </p>

// // // // // // // // // // //           <div className="flex items-center gap-2 text-sm text-gray-600">
// // // // // // // // // // //             <p>{docInfo.degree} - {docInfo.speciality}</p>
// // // // // // // // // // //             <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <div className="mt-3">
// // // // // // // // // // //             <p className="flex items-center gap-1 text-sm font-bold text-gray-900">
// // // // // // // // // // //               About <img src={assets.info_icon} alt="Info" />
// // // // // // // // // // //             </p>
// // // // // // // // // // //             <p className="text-sm text-gray-600 max-w-[700px] mt-1">{docInfo.about}</p>
// // // // // // // // // // //           </div>

// // // // // // // // // // //           <p className="text-gray-500 font-medium mt-4">
// // // // // // // // // // //             Appointment Fee: <span className="text-gray-800">{docInfo.fees}</span>
// // // // // // // // // // //           </p>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Booking Slots */}
// // // // // // // // // // //       <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
// // // // // // // // // // //         <p className="mb-2">Booking Slots</p>

// // // // // // // // // // //         <div className="flex gap-4 font-black">
// // // // // // // // // // //           {docSlots.map((daySlots, index) => (
// // // // // // // // // // //             <div
// // // // // // // // // // //               key={index}
// // // // // // // // // // //               onClick={() => setSlotIndex(index)}
// // // // // // // // // // //               className={`text-center px-2 py-6 min-w-[64px] rounded-full cursor-pointer ${
// // // // // // // // // // //                 slotIndex === index ? 'bg-[#5f5FFF] text-white' : 'border border-gray-200'
// // // // // // // // // // //               }`}
// // // // // // // // // // //             >
// // // // // // // // // // //               <p>{daysOfWeek[daySlots[0].datetime.getDay()]}</p>
// // // // // // // // // // //               <p>{daySlots[0].datetime.getDate()}</p>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="flex items-center gap-3 w-full overflow-x-scroll mt-5">
// // // // // // // // // // //           {docSlots[slotIndex]?.map((slot, idx) => (
// // // // // // // // // // //             <p
// // // // // // // // // // //               key={idx}
// // // // // // // // // // //               onClick={() => setSlotTime(slot.time)}
// // // // // // // // // // //               className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer border ${
// // // // // // // // // // //                 slot.time === slotTime ? 'bg-[#5f5FFF] text-white' : 'text-gray-500 border-gray-300'
// // // // // // // // // // //               }`}
// // // // // // // // // // //             >
// // // // // // // // // // //               {slot.time.toLowerCase()}
// // // // // // // // // // //             </p>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <button
// // // // // // // // // // //           onClick={handleBooking}
// // // // // // // // // // //           className="px-12 py-3 bg-[#5f5FFF] my-5 text-white cursor-pointer rounded-full"
// // // // // // // // // // //         >
// // // // // // // // // // //           Book An Appointment
// // // // // // // // // // //         </button>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Related Doctors */}
// // // // // // // // // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default Appointment;

// // // // // // // // // // import React, { useContext, useEffect, useState } from 'react'
// // // // // // // // // // import { useParams } from 'react-router-dom'
// // // // // // // // // // import { AppContext } from '../context/AppContext';
// // // // // // // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // // // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // // // // // // function Appointment() {
// // // // // // // // // //   const { docId } = useParams();
// // // // // // // // // //   const { doctors } = useContext(AppContext);

// // // // // // // // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // // // // // // // // //   const [docInfo, setDocInfo] = useState(null);
// // // // // // // // // //   const [docSlots, setDocSlots] = useState([]);
// // // // // // // // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // // // // // // // //   const [slotTime, setSlotTime] = useState('');

// // // // // // // // // //   const fetchDocInfo = async () => {
// // // // // // // // // //     const doctor = doctors.find(doc => doc._id === docId);
// // // // // // // // // //     setDocInfo(doctor);
// // // // // // // // // //   }

// // // // // // // // // //   const getAvailableSlots = () => {
// // // // // // // // // //     setDocSlots([]);
// // // // // // // // // //     let today = new Date();

// // // // // // // // // //     for (let i = 0; i < 7; i++) {
// // // // // // // // // //       let currentDate = new Date(today);
// // // // // // // // // //       currentDate.setDate(today.getDate() + i);

// // // // // // // // // //       // Set start time to 10:00 AM
// // // // // // // // // //       let startTime = new Date(currentDate);
// // // // // // // // // //       startTime.setHours(10, 0, 0, 0);

// // // // // // // // // //       // Set end time to 9:00 PM
// // // // // // // // // //       let endTime = new Date(currentDate);
// // // // // // // // // //       endTime.setHours(21, 0, 0, 0);

// // // // // // // // // //       let timeSlots = [];
// // // // // // // // // //       let currentSlot = new Date(startTime);

// // // // // // // // // //       while (currentSlot < endTime) {
// // // // // // // // // //         let formatter = currentSlot.toLocaleTimeString([], {
// // // // // // // // // //           hour: '2-digit',
// // // // // // // // // //           minute: '2-digit',
// // // // // // // // // //           hour12: true
// // // // // // // // // //         }).toLowerCase();

// // // // // // // // // //         timeSlots.push({
// // // // // // // // // //           datetime: new Date(currentSlot),
// // // // // // // // // //           time: formatter
// // // // // // // // // //         });

// // // // // // // // // //         // Increment by 30 minutes
// // // // // // // // // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // // // // // // // // //       }

// // // // // // // // // //       setDocSlots(prev => [...prev, timeSlots]);
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (doctors.length > 0 && docId) {
// // // // // // // // // //       fetchDocInfo();
// // // // // // // // // //     }
// // // // // // // // // //   }, [doctors, docId]);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     if (docInfo) {
// // // // // // // // // //       getAvailableSlots();
// // // // // // // // // //     }
// // // // // // // // // //   }, [docInfo]);

// // // // // // // // // //   if (!docInfo) {
// // // // // // // // // //     return (
// // // // // // // // // //       <div className="flex justify-center items-center min-h-64">
// // // // // // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// // // // // // // // // //       </div>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <div className="max-w-6xl mx-auto p-4">
// // // // // // // // // //       {/* Doctor details - Matching your image layout */}
// // // // // // // // // //       <div className='flex flex-col lg:flex-row gap-8'>
// // // // // // // // // //         {/* Doctor Image */}
// // // // // // // // // //         <div className='lg:w-1/3'>
// // // // // // // // // //           <img
// // // // // // // // // //             src={docInfo.image}
// // // // // // // // // //             className='w-full max-w-sm rounded-lg bg-gray-100'
// // // // // // // // // //             alt={docInfo.name}
// // // // // // // // // //           />
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Doctor Information */}
// // // // // // // // // //         <div className='lg:w-2/3 bg-white rounded-lg p-6 border border-gray-200'>
// // // // // // // // // //           {/* Name and Verification */}
// // // // // // // // // //           <div className='flex items-center gap-2 mb-3'>
// // // // // // // // // //             <p className='text-2xl font-medium text-gray-900'>{docInfo.name}</p>
// // // // // // // // // //             <img src={assets.verified_icon} className='w-5 h-5' alt="Verified" />
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Degree and Speciality */}
// // // // // // // // // //           <div className='flex items-center gap-2 text-gray-600 mb-4'>
// // // // // // // // // //             <p>{docInfo.degree} - {docInfo.speciality}</p>
// // // // // // // // // //             <span className='px-2 py-1 border border-gray-300 rounded-full text-xs'>
// // // // // // // // // //               {docInfo.experience}
// // // // // // // // // //             </span>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* About Section */}
// // // // // // // // // //           <div className='mb-4'>
// // // // // // // // // //             <p className='flex items-center gap-1 text-sm font-bold text-gray-900 mb-2'>
// // // // // // // // // //               About <img src={assets.info_icon} className='w-4 h-4' alt="Info" />
// // // // // // // // // //             </p>
// // // // // // // // // //             <p className='text-gray-600 text-sm leading-relaxed'>
// // // // // // // // // //               {docInfo.about}
// // // // // // // // // //             </p>
// // // // // // // // // //           </div>

// // // // // // // // // //           {/* Appointment Fee */}
// // // // // // // // // //           <p className='text-gray-500 font-medium'>
// // // // // // // // // //             Appointment Fee: <span className='text-gray-800 ml-2'>₹{docInfo.fees}</span>
// // // // // // // // // //           </p>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Booking Slots Section */}
// // // // // // // // // //       <div className='mt-8 bg-white rounded-lg p-6 border border-gray-200'>
// // // // // // // // // //         <p className='font-medium text-gray-700 mb-6 text-lg'>Booking Slots</p>

// // // // // // // // // //         {/* Date Selection */}
// // // // // // // // // //         <div className='flex gap-3 mb-6 overflow-x-auto pb-2'>
// // // // // // // // // //           {docSlots.map((item, index) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={index}
// // // // // // // // // //               onClick={() => setSlotIndex(index)}
// // // // // // // // // //               className={`flex flex-col items-center justify-center px-4 py-3 min-w-16 rounded-full cursor-pointer transition-colors ${
// // // // // // // // // //                 slotIndex === index
// // // // // // // // // //                   ? 'bg-[#5f5FFF] text-white'
// // // // // // // // // //                   : 'border border-gray-300 hover:border-[#5f5FFF]'
// // // // // // // // // //               }`}
// // // // // // // // // //             >
// // // // // // // // // //               <p className='text-sm font-medium'>
// // // // // // // // // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // // // // // // // // //               </p>
// // // // // // // // // //               <p className='text-sm'>
// // // // // // // // // //                 {item[0] && item[0].datetime.getDate()}
// // // // // // // // // //               </p>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Time Slots */}
// // // // // // // // // //         <div className='flex flex-wrap gap-3 mb-6'>
// // // // // // // // // //           {docSlots[slotIndex]?.map((item, index) => (
// // // // // // // // // //             <div
// // // // // // // // // //               key={index}
// // // // // // // // // //               onClick={() => setSlotTime(item.time)}
// // // // // // // // // //               className={`px-4 py-2 rounded-full cursor-pointer transition-colors border ${
// // // // // // // // // //                 item.time === slotTime
// // // // // // // // // //                   ? 'bg-[#5f5FFF] text-white border-[#5f5FFF]'
// // // // // // // // // //                   : 'border-gray-300 text-gray-500 hover:border-[#5f5FFF]'
// // // // // // // // // //               }`}
// // // // // // // // // //             >
// // // // // // // // // //               <p className='text-sm'>{item.time}</p>
// // // // // // // // // //             </div>
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Book Appointment Button */}
// // // // // // // // // //         <button
// // // // // // // // // //           className='px-12 py-3 bg-[#5f5FFF] text-white cursor-pointer rounded-full hover:bg-[#4a4aff] transition-colors font-medium'
// // // // // // // // // //           disabled={!slotTime}
// // // // // // // // // //         >
// // // // // // // // // //           Book An Appointment
// // // // // // // // // //         </button>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Related Doctors */}
// // // // // // // // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // // // // // // // //     </div>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default Appointment

// // // // // // // // // import React, { useContext, useEffect, useState } from 'react'
// // // // // // // // // import { useParams } from 'react-router-dom'
// // // // // // // // // import { AppContext } from '../context/AppContext';
// // // // // // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // // // // // function Appointment() {
// // // // // // // // //   const { docId } = useParams();
// // // // // // // // //   const { doctors } = useContext(AppContext);

// // // // // // // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // // // // // // // //   const [docInfo, setDocInfo] = useState(null);
// // // // // // // // //   const [docSlots, setDocSlots] = useState([]);
// // // // // // // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // // // // // // //   const [slotTime, setSlotTime] = useState('');
// // // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // // //   console.log('Current docId:', docId);
// // // // // // // // //   console.log('All doctors:', doctors);

// // // // // // // // //   // Fix the doctor fetching
// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (doctors && doctors.length > 0 && docId) {
// // // // // // // // //       console.log('Looking for doctor with ID:', docId);
// // // // // // // // //       const foundDoctor = doctors.find(doc => doc._id === docId);
// // // // // // // // //       console.log('Found doctor:', foundDoctor);

// // // // // // // // //       if (foundDoctor) {
// // // // // // // // //         setDocInfo(foundDoctor);
// // // // // // // // //       } else {
// // // // // // // // //         console.error('Doctor not found with ID:', docId);
// // // // // // // // //       }
// // // // // // // // //       setLoading(false);
// // // // // // // // //     }
// // // // // // // // //   }, [doctors, docId]);

// // // // // // // // //   // Fix the time slots generation
// // // // // // // // //   const getAvailableSlots = () => {
// // // // // // // // //     if (!docInfo) return;

// // // // // // // // //     setDocSlots([]);
// // // // // // // // //     let today = new Date();
// // // // // // // // //     let slots = [];

// // // // // // // // //     for (let i = 0; i < 7; i++) {
// // // // // // // // //       let currentDate = new Date(today);
// // // // // // // // //       currentDate.setDate(today.getDate() + i);

// // // // // // // // //       // Always start at 10:00 AM
// // // // // // // // //       let startTime = new Date(currentDate);
// // // // // // // // //       startTime.setHours(10, 0, 0, 0);

// // // // // // // // //       // End at 9:00 PM
// // // // // // // // //       let endTime = new Date(currentDate);
// // // // // // // // //       endTime.setHours(21, 0, 0, 0);

// // // // // // // // //       let timeSlots = [];
// // // // // // // // //       let currentSlot = new Date(startTime);

// // // // // // // // //       while (currentSlot < endTime) {
// // // // // // // // //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// // // // // // // // //           hour: '2-digit',
// // // // // // // // //           minute: '2-digit',
// // // // // // // // //           hour12: true
// // // // // // // // //         });

// // // // // // // // //         timeSlots.push({
// // // // // // // // //           datetime: new Date(currentSlot),
// // // // // // // // //           time: timeString
// // // // // // // // //         });

// // // // // // // // //         // Increment by 30 minutes
// // // // // // // // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // // // // // // // //       }

// // // // // // // // //       slots.push(timeSlots);
// // // // // // // // //     }

// // // // // // // // //     setDocSlots(slots);
// // // // // // // // //   };

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     if (docInfo) {
// // // // // // // // //       getAvailableSlots();
// // // // // // // // //     }
// // // // // // // // //   }, [docInfo]);

// // // // // // // // //   if (loading) {
// // // // // // // // //     return (
// // // // // // // // //       <div className="max-w-6xl mx-auto p-6">
// // // // // // // // //         <div className="flex justify-center items-center min-h-64">
// // // // // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   if (!docInfo) {
// // // // // // // // //     return (
// // // // // // // // //       <div className="max-w-6xl mx-auto p-6 text-center">
// // // // // // // // //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// // // // // // // // //         <p className="text-gray-600">The requested doctor is not available.</p>
// // // // // // // // //       </div>
// // // // // // // // //     );
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// // // // // // // // //       {/* Doctor Details Section */}
// // // // // // // // //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// // // // // // // // //         {/* Doctor Image */}
// // // // // // // // //         <div className='lg:w-1/3'>
// // // // // // // // //           <img
// // // // // // // // //             src={docInfo.image}
// // // // // // // // //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// // // // // // // // //             alt={docInfo.name}
// // // // // // // // //           />
// // // // // // // // //         </div>

// // // // // // // // //         {/* Doctor Information */}
// // // // // // // // //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// // // // // // // // //           {/* Name and Verification */}
// // // // // // // // //           <div className='flex items-center gap-3 mb-4'>
// // // // // // // // //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// // // // // // // // //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// // // // // // // // //           </div>

// // // // // // // // //           {/* Degree and Speciality */}
// // // // // // // // //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// // // // // // // // //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// // // // // // // // //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// // // // // // // // //               {docInfo.experience}
// // // // // // // // //             </span>
// // // // // // // // //           </div>

// // // // // // // // //           {/* About Section */}
// // // // // // // // //           <div className='mb-6'>
// // // // // // // // //             <div className='flex items-center gap-2 mb-3'>
// // // // // // // // //               <span className='text-lg font-bold text-gray-900'>About</span>
// // // // // // // // //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// // // // // // // // //             </div>
// // // // // // // // //             <p className='text-gray-600 leading-relaxed'>
// // // // // // // // //               {docInfo.about}
// // // // // // // // //             </p>
// // // // // // // // //           </div>

// // // // // // // // //           {/* Appointment Fee */}
// // // // // // // // //           <div className='pt-4 border-t border-gray-200'>
// // // // // // // // //             <p className='text-gray-700 font-medium'>
// // // // // // // // //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// // // // // // // // //             </p>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Booking Slots Section */}
// // // // // // // // //       <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12'>
// // // // // // // // //         <h2 className='text-2xl font-bold text-gray-900 mb-8'>Booking Slots</h2>

// // // // // // // // //         {/* Date Selection */}
// // // // // // // // //         <div className='flex gap-4 mb-8 overflow-x-auto pb-4'>
// // // // // // // // //           {docSlots.map((item, index) => (
// // // // // // // // //             <div
// // // // // // // // //               key={index}
// // // // // // // // //               onClick={() => setSlotIndex(index)}
// // // // // // // // //               className={`flex flex-col items-center justify-center px-6 py-4 min-w-20 rounded-2xl cursor-pointer transition-all ${
// // // // // // // // //                 slotIndex === index
// // // // // // // // //                   ? 'bg-[#5f5FFF] text-white shadow-lg'
// // // // // // // // //                   : 'border-2 border-gray-200 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // // // // //               }`}
// // // // // // // // //             >
// // // // // // // // //               <p className='font-semibold text-sm'>
// // // // // // // // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // // // // // // // //               </p>
// // // // // // // // //               <p className='text-lg font-bold'>
// // // // // // // // //                 {item[0] && item[0].datetime.getDate()}
// // // // // // // // //               </p>
// // // // // // // // //             </div>
// // // // // // // // //           ))}
// // // // // // // // //         </div>

// // // // // // // // //         {/* Time Slots */}
// // // // // // // // //         <div className='mb-8'>
// // // // // // // // //           <p className='text-gray-700 font-medium mb-4'>Available Time Slots:</p>
// // // // // // // // //           <div className='flex flex-wrap gap-3'>
// // // // // // // // //             {docSlots[slotIndex]?.map((item, index) => (
// // // // // // // // //               <div
// // // // // // // // //                 key={index}
// // // // // // // // //                 onClick={() => setSlotTime(item.time)}
// // // // // // // // //                 className={`px-6 py-3 rounded-xl cursor-pointer transition-all border-2 ${
// // // // // // // // //                   item.time === slotTime
// // // // // // // // //                     ? 'bg-[#5f5FFF] text-white border-[#5f5FFF] shadow-lg'
// // // // // // // // //                     : 'border-gray-200 text-gray-700 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // // // // //                 }`}
// // // // // // // // //               >
// // // // // // // // //                 <p className='font-medium'>{item.time.toLowerCase()}</p>
// // // // // // // // //               </div>
// // // // // // // // //             ))}
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Book Appointment Button */}
// // // // // // // // //         <button
// // // // // // // // //           className={`px-16 py-4 text-white cursor-pointer rounded-xl font-bold text-lg transition-all ${
// // // // // // // // //             slotTime
// // // // // // // // //               ? 'bg-[#5f5FFF] hover:bg-[#4a4aff] shadow-lg hover:shadow-xl'
// // // // // // // // //               : 'bg-gray-400 cursor-not-allowed'
// // // // // // // // //           }`}
// // // // // // // // //           disabled={!slotTime}
// // // // // // // // //         >
// // // // // // // // //           Book An Appointment
// // // // // // // // //         </button>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Related Doctors */}
// // // // // // // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // // // // // // //     </div>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default Appointment;

// // // // // // // // import React, { useContext, useEffect, useState } from 'react'
// // // // // // // // import { useParams } from 'react-router-dom'
// // // // // // // // import { AppContext } from '../context/AppContext';
// // // // // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // // // // function Appointment() {
// // // // // // // //   const { docId } = useParams();
// // // // // // // //   const { doctors } = useContext(AppContext);

// // // // // // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // // // // // // //   const [docInfo, setDocInfo] = useState(null);
// // // // // // // //   const [docSlots, setDocSlots] = useState([]);
// // // // // // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // // // // // //   const [slotTime, setSlotTime] = useState('');
// // // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // // //   console.log('=== DEBUG INFO ===');
// // // // // // // //   console.log('docId from URL:', docId);
// // // // // // // //   console.log('All doctors:', doctors);
// // // // // // // //   console.log('Available doctor IDs:', doctors.map(d => d._id));

// // // // // // // //   // Fix the doctor fetching
// // // // // // // //   useEffect(() => {
// // // // // // // //     if (doctors && doctors.length > 0 && docId) {
// // // // // // // //       console.log('Searching for doctor with ID:', docId);

// // // // // // // //       // Find the doctor by ID
// // // // // // // //       const foundDoctor = doctors.find(doc => doc._id === docId);

// // // // // // // //       console.log('Found doctor:', foundDoctor);

// // // // // // // //       if (foundDoctor) {
// // // // // // // //         setDocInfo(foundDoctor);
// // // // // // // //       } else {
// // // // // // // //         console.error('Doctor not found! Available IDs:', doctors.map(d => d._id));
// // // // // // // //       }
// // // // // // // //       setLoading(false);
// // // // // // // //     }
// // // // // // // //   }, [doctors, docId]);

// // // // // // // //   // Fix the time slots generation
// // // // // // // //   const getAvailableSlots = () => {
// // // // // // // //     if (!docInfo) return;

// // // // // // // //     setDocSlots([]);
// // // // // // // //     let today = new Date();
// // // // // // // //     let slots = [];

// // // // // // // //     for (let i = 0; i < 7; i++) {
// // // // // // // //       let currentDate = new Date(today);
// // // // // // // //       currentDate.setDate(today.getDate() + i);

// // // // // // // //       // Always start at 10:00 AM
// // // // // // // //       let startTime = new Date(currentDate);
// // // // // // // //       startTime.setHours(10, 0, 0, 0);

// // // // // // // //       // End at 9:00 PM
// // // // // // // //       let endTime = new Date(currentDate);
// // // // // // // //       endTime.setHours(21, 0, 0, 0);

// // // // // // // //       let timeSlots = [];
// // // // // // // //       let currentSlot = new Date(startTime);

// // // // // // // //       while (currentSlot < endTime) {
// // // // // // // //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// // // // // // // //           hour: '2-digit',
// // // // // // // //           minute: '2-digit',
// // // // // // // //           hour12: true
// // // // // // // //         });

// // // // // // // //         timeSlots.push({
// // // // // // // //           datetime: new Date(currentSlot),
// // // // // // // //           time: timeString
// // // // // // // //         });

// // // // // // // //         // Increment by 30 minutes
// // // // // // // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // // // // // // //       }

// // // // // // // //       slots.push(timeSlots);
// // // // // // // //     }

// // // // // // // //     setDocSlots(slots);
// // // // // // // //   };

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (docInfo) {
// // // // // // // //       getAvailableSlots();
// // // // // // // //     }
// // // // // // // //   }, [docInfo]);

// // // // // // // //   if (loading) {
// // // // // // // //     return (
// // // // // // // //       <div className="max-w-6xl mx-auto p-6">
// // // // // // // //         <div className="flex justify-center items-center min-h-64">
// // // // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   if (!docInfo) {
// // // // // // // //     return (
// // // // // // // //       <div className="max-w-6xl mx-auto p-6 text-center">
// // // // // // // //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// // // // // // // //         <p className="text-gray-600 mb-4">The requested doctor is not available.</p>
// // // // // // // //         <p className="text-sm text-gray-500">Requested ID: {docId}</p>
// // // // // // // //         <p className="text-sm text-gray-500">Available IDs: {doctors.map(d => d._id).join(', ')}</p>
// // // // // // // //       </div>
// // // // // // // //     );
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// // // // // // // //       {/* Doctor Details Section */}
// // // // // // // //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// // // // // // // //         {/* Doctor Image */}
// // // // // // // //         <div className='lg:w-1/3'>
// // // // // // // //           <img
// // // // // // // //             src={docInfo.image}
// // // // // // // //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// // // // // // // //             alt={docInfo.name}
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //         {/* Doctor Information */}
// // // // // // // //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// // // // // // // //           {/* Name and Verification */}
// // // // // // // //           <div className='flex items-center gap-3 mb-4'>
// // // // // // // //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// // // // // // // //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// // // // // // // //           </div>

// // // // // // // //           {/* Degree and Speciality */}
// // // // // // // //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// // // // // // // //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// // // // // // // //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// // // // // // // //               {docInfo.experience}
// // // // // // // //             </span>
// // // // // // // //           </div>

// // // // // // // //           {/* About Section */}
// // // // // // // //           <div className='mb-6'>
// // // // // // // //             <div className='flex items-center gap-2 mb-3'>
// // // // // // // //               <span className='text-lg font-bold text-gray-900'>About</span>
// // // // // // // //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// // // // // // // //             </div>
// // // // // // // //             <p className='text-gray-600 leading-relaxed'>
// // // // // // // //               {docInfo.about}
// // // // // // // //             </p>
// // // // // // // //           </div>

// // // // // // // //           {/* Appointment Fee */}
// // // // // // // //           <div className='pt-4 border-t border-gray-200'>
// // // // // // // //             <p className='text-gray-700 font-medium'>
// // // // // // // //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// // // // // // // //             </p>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Booking Slots Section */}
// // // // // // // //       <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12'>
// // // // // // // //         <h2 className='text-2xl font-bold text-gray-900 mb-8'>Booking Slots</h2>

// // // // // // // //         {/* Date Selection */}
// // // // // // // //         <div className='flex gap-4 mb-8 overflow-x-auto pb-4'>
// // // // // // // //           {docSlots.map((item, index) => (
// // // // // // // //             <div
// // // // // // // //               key={index}
// // // // // // // //               onClick={() => setSlotIndex(index)}
// // // // // // // //               className={`flex flex-col items-center justify-center px-6 py-4 min-w-20 rounded-2xl cursor-pointer transition-all ${
// // // // // // // //                 slotIndex === index
// // // // // // // //                   ? 'bg-[#5f5FFF] text-white shadow-lg'
// // // // // // // //                   : 'border-2 border-gray-200 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // // // //               }`}
// // // // // // // //             >
// // // // // // // //               <p className='font-semibold text-sm'>
// // // // // // // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // // // // // // //               </p>
// // // // // // // //               <p className='text-lg font-bold'>
// // // // // // // //                 {item[0] && item[0].datetime.getDate()}
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>

// // // // // // // //         {/* Time Slots */}
// // // // // // // //         <div className='mb-8'>
// // // // // // // //           <p className='text-gray-700 font-medium mb-4'>Available Time Slots:</p>
// // // // // // // //           <div className='flex flex-wrap gap-3'>
// // // // // // // //             {docSlots[slotIndex]?.map((item, index) => (
// // // // // // // //               <div
// // // // // // // //                 key={index}
// // // // // // // //                 onClick={() => setSlotTime(item.time)}
// // // // // // // //                 className={`px-6 py-3 rounded-xl cursor-pointer transition-all border-2 ${
// // // // // // // //                   item.time === slotTime
// // // // // // // //                     ? 'bg-[#5f5FFF] text-white border-[#5f5FFF] shadow-lg'
// // // // // // // //                     : 'border-gray-200 text-gray-700 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // // // //                 }`}
// // // // // // // //               >
// // // // // // // //                 <p className='font-medium'>{item.time.toLowerCase()}</p>
// // // // // // // //               </div>
// // // // // // // //             ))}
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Book Appointment Button */}
// // // // // // // //         <button
// // // // // // // //           className={`px-16 py-4 text-white cursor-pointer rounded-xl font-bold text-lg transition-all ${
// // // // // // // //             slotTime
// // // // // // // //               ? 'bg-[#5f5FFF] hover:bg-[#4a4aff] shadow-lg hover:shadow-xl'
// // // // // // // //               : 'bg-gray-400 cursor-not-allowed'
// // // // // // // //           }`}
// // // // // // // //           disabled={!slotTime}
// // // // // // // //         >
// // // // // // // //           Book An Appointment
// // // // // // // //         </button>
// // // // // // // //       </div>

// // // // // // // //       {/* Related Doctors */}
// // // // // // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default Appointment;

// // // // // // // import React, { useContext, useEffect, useState } from 'react'
// // // // // // // import { useParams } from 'react-router-dom'
// // // // // // // import { AppContext } from '../context/AppContext';
// // // // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // // // function Appointment() {
// // // // // // //   const { docId } = useParams();
// // // // // // //   const { doctors, loading: contextLoading } = useContext(AppContext);

// // // // // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // // // // // //   const [docInfo, setDocInfo] = useState(null);
// // // // // // //   const [docSlots, setDocSlots] = useState([]);
// // // // // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // // // // //   const [slotTime, setSlotTime] = useState('');
// // // // // // //   const [localLoading, setLocalLoading] = useState(true);

// // // // // // //   console.log('=== APPOINTMENT DEBUG ===');
// // // // // // //   console.log('📌 docId from URL:', docId);
// // // // // // //   console.log('👨‍⚕️ Doctors from context:', doctors);
// // // // // // //   console.log('🔢 Doctors count:', doctors.length);
// // // // // // //   console.log('⏳ Context loading:', contextLoading);

// // // // // // //   // Fix the doctor fetching
// // // // // // //   useEffect(() => {
// // // // // // //     console.log('🔄 Appointment useEffect triggered');
// // // // // // //     console.log('📌 docId:', docId);
// // // // // // //     console.log('👨‍⚕️ doctors length:', doctors.length);
// // // // // // //     console.log('⏳ contextLoading:', contextLoading);

// // // // // // //     // Wait for context to load doctors
// // // // // // //     if (contextLoading) {
// // // // // // //       console.log('⏳ Still loading doctors from context...');
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     if (doctors && doctors.length > 0 && docId) {
// // // // // // //       console.log('🔍 Searching for doctor with ID:', docId);
// // // // // // //       console.log('📋 Available doctor IDs:', doctors.map(d => d._id));

// // // // // // //       // Find the doctor by ID
// // // // // // //       const foundDoctor = doctors.find(doc => {
// // // // // // //         const match = doc._id === docId;
// // // // // // //         console.log(`🔍 Comparing: "${doc._id}" with "${docId}" -> ${match ? 'MATCH' : 'NO MATCH'}`);
// // // // // // //         return match;
// // // // // // //       });

// // // // // // //       console.log('✅ Found doctor:', foundDoctor);

// // // // // // //       if (foundDoctor) {
// // // // // // //         setDocInfo(foundDoctor);
// // // // // // //         setLocalLoading(false);
// // // // // // //       } else {
// // // // // // //         console.error('❌ Doctor not found!');
// // // // // // //         console.error('📋 Available IDs:', doctors.map(d => `"${d._id}"`));
// // // // // // //         setLocalLoading(false);
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       console.error('❌ Missing data:');
// // // // // // //       console.error('- doctors:', doctors);
// // // // // // //       console.error('- doctors length:', doctors?.length);
// // // // // // //       console.error('- docId:', docId);
// // // // // // //       setLocalLoading(false);
// // // // // // //     }
// // // // // // //   }, [doctors, docId, contextLoading]);

// // // // // // //   // Fix the time slots generation
// // // // // // //   const getAvailableSlots = () => {
// // // // // // //     if (!docInfo) return;

// // // // // // //     console.log('🕒 Generating time slots for:', docInfo.name);
// // // // // // //     setDocSlots([]);
// // // // // // //     let today = new Date();
// // // // // // //     let slots = [];

// // // // // // //     for (let i = 0; i < 7; i++) {
// // // // // // //       let currentDate = new Date(today);
// // // // // // //       currentDate.setDate(today.getDate() + i);

// // // // // // //       // Always start at 10:00 AM
// // // // // // //       let startTime = new Date(currentDate);
// // // // // // //       startTime.setHours(10, 0, 0, 0);

// // // // // // //       // End at 9:00 PM
// // // // // // //       let endTime = new Date(currentDate);
// // // // // // //       endTime.setHours(21, 0, 0, 0);

// // // // // // //       let timeSlots = [];
// // // // // // //       let currentSlot = new Date(startTime);

// // // // // // //       while (currentSlot < endTime) {
// // // // // // //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// // // // // // //           hour: '2-digit',
// // // // // // //           minute: '2-digit',
// // // // // // //           hour12: true
// // // // // // //         });

// // // // // // //         timeSlots.push({
// // // // // // //           datetime: new Date(currentSlot),
// // // // // // //           time: timeString
// // // // // // //         });

// // // // // // //         // Increment by 30 minutes
// // // // // // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // // // // // //       }

// // // // // // //       slots.push(timeSlots);
// // // // // // //     }

// // // // // // //     setDocSlots(slots);
// // // // // // //     console.log('✅ Time slots generated:', slots.length, 'days');
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     if (docInfo) {
// // // // // // //       getAvailableSlots();
// // // // // // //     }
// // // // // // //   }, [docInfo]);

// // // // // // //   if (contextLoading || localLoading) {
// // // // // // //     return (
// // // // // // //       <div className="max-w-6xl mx-auto p-6">
// // // // // // //         <div className="flex justify-center items-center min-h-64 flex-col">
// // // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
// // // // // // //           <p className="text-gray-600">Loading doctor information...</p>
// // // // // // //           <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   if (!docInfo) {
// // // // // // //     return (
// // // // // // //       <div className="max-w-6xl mx-auto p-6 text-center">
// // // // // // //         <div className="text-6xl mb-4">😕</div>
// // // // // // //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// // // // // // //         <p className="text-gray-600 mb-2">The requested doctor is not available.</p>
// // // // // // //         <p className="text-sm text-gray-500 mb-1">Requested ID: <strong>{docId}</strong></p>
// // // // // // //         <p className="text-sm text-gray-500">
// // // // // // //           Available IDs: {doctors.map(d => d._id).join(', ') || 'None'}
// // // // // // //         </p>
// // // // // // //         <button
// // // // // // //           onClick={() => window.history.back()}
// // // // // // //           className="mt-4 bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // // // // // //         >
// // // // // // //           Go Back
// // // // // // //         </button>
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// // // // // // //       {/* Doctor Details Section */}
// // // // // // //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// // // // // // //         {/* Doctor Image */}
// // // // // // //         <div className='lg:w-1/3'>
// // // // // // //           <img
// // // // // // //             src={docInfo.image}
// // // // // // //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// // // // // // //             alt={docInfo.name}
// // // // // // //           />
// // // // // // //         </div>

// // // // // // //         {/* Doctor Information */}
// // // // // // //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// // // // // // //           {/* Name and Verification */}
// // // // // // //           <div className='flex items-center gap-3 mb-4'>
// // // // // // //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// // // // // // //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// // // // // // //           </div>

// // // // // // //           {/* Degree and Speciality */}
// // // // // // //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// // // // // // //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// // // // // // //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// // // // // // //               {docInfo.experience}
// // // // // // //             </span>
// // // // // // //           </div>

// // // // // // //           {/* About Section */}
// // // // // // //           <div className='mb-6'>
// // // // // // //             <div className='flex items-center gap-2 mb-3'>
// // // // // // //               <span className='text-lg font-bold text-gray-900'>About</span>
// // // // // // //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// // // // // // //             </div>
// // // // // // //             <p className='text-gray-600 leading-relaxed'>
// // // // // // //               {docInfo.about}
// // // // // // //             </p>
// // // // // // //           </div>

// // // // // // //           {/* Appointment Fee */}
// // // // // // //           <div className='pt-4 border-t border-gray-200'>
// // // // // // //             <p className='text-gray-700 font-medium'>
// // // // // // //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Booking Slots Section */}
// // // // // // //       <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12'>
// // // // // // //         <h2 className='text-2xl font-bold text-gray-900 mb-8'>Booking Slots</h2>

// // // // // // //         {/* Date Selection */}
// // // // // // //         <div className='flex gap-4 mb-8 overflow-x-auto pb-4'>
// // // // // // //           {docSlots.map((item, index) => (
// // // // // // //             <div
// // // // // // //               key={index}
// // // // // // //               onClick={() => setSlotIndex(index)}
// // // // // // //               className={`flex flex-col items-center justify-center px-6 py-4 min-w-20 rounded-2xl cursor-pointer transition-all ${
// // // // // // //                 slotIndex === index
// // // // // // //                   ? 'bg-[#5f5FFF] text-white shadow-lg'
// // // // // // //                   : 'border-2 border-gray-200 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // // //               }`}
// // // // // // //             >
// // // // // // //               <p className='font-semibold text-sm'>
// // // // // // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // // // // // //               </p>
// // // // // // //               <p className='text-lg font-bold'>
// // // // // // //                 {item[0] && item[0].datetime.getDate()}
// // // // // // //               </p>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>

// // // // // // //         {/* Time Slots */}
// // // // // // //         <div className='mb-8'>
// // // // // // //           <p className='text-gray-700 font-medium mb-4'>Available Time Slots:</p>
// // // // // // //           <div className='flex flex-wrap gap-3'>
// // // // // // //             {docSlots[slotIndex]?.map((item, index) => (
// // // // // // //               <div
// // // // // // //                 key={index}
// // // // // // //                 onClick={() => setSlotTime(item.time)}
// // // // // // //                 className={`px-6 py-3 rounded-xl cursor-pointer transition-all border-2 ${
// // // // // // //                   item.time === slotTime
// // // // // // //                     ? 'bg-[#5f5FFF] text-white border-[#5f5FFF] shadow-lg'
// // // // // // //                     : 'border-gray-200 text-gray-700 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // // //                 }`}
// // // // // // //               >
// // // // // // //                 <p className='font-medium'>{item.time.toLowerCase()}</p>
// // // // // // //               </div>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Book Appointment Button */}
// // // // // // //         <button
// // // // // // //           className={`px-16 py-4 text-white cursor-pointer rounded-xl font-bold text-lg transition-all ${
// // // // // // //             slotTime
// // // // // // //               ? 'bg-[#5f5FFF] hover:bg-[#4a4aff] shadow-lg hover:shadow-xl'
// // // // // // //               : 'bg-gray-400 cursor-not-allowed'
// // // // // // //           }`}
// // // // // // //           disabled={!slotTime}
// // // // // // //         >
// // // // // // //           Book An Appointment
// // // // // // //         </button>
// // // // // // //       </div>

// // // // // // //       {/* Related Doctors */}
// // // // // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default Appointment;

// // // // // // import React, { useContext, useEffect, useState } from 'react'
// // // // // // import { useParams } from 'react-router-dom'
// // // // // // import { AppContext } from '../context/AppContext';
// // // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // // function Appointment() {
// // // // // //   const { docId } = useParams();
// // // // // //   const { doctors, loading: contextLoading } = useContext(AppContext);

// // // // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // // // // //   const [docInfo, setDocInfo] = useState(null);
// // // // // //   const [docSlots, setDocSlots] = useState([]);
// // // // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // // // //   const [slotTime, setSlotTime] = useState('');
// // // // // //   const [localLoading, setLocalLoading] = useState(true);

// // // // // //   console.log('=== APPOINTMENT DEBUG ===');
// // // // // //   console.log('📌 docId from URL:', docId);
// // // // // //   console.log('👨‍⚕️ Doctors count:', doctors.length);
// // // // // //   console.log('🔢 Available IDs:', doctors.map(d => d._id));
// // // // // //   console.log('⏳ Context loading:', contextLoading);

// // // // // //   // Fix the doctor fetching
// // // // // //   useEffect(() => {
// // // // // //     console.log('🔄 Appointment useEffect triggered');

// // // // // //     if (contextLoading) {
// // // // // //       console.log('⏳ Waiting for context to load...');
// // // // // //       return;
// // // // // //     }

// // // // // //     if (doctors && doctors.length > 0 && docId) {
// // // // // //       console.log('🔍 Searching for doctor with ID:', docId);

// // // // // //       // Find the doctor by ID
// // // // // //       const foundDoctor = doctors.find(doc => {
// // // // // //         const match = doc._id === docId;
// // // // // //         console.log(`🔍 Comparing: "${doc._id}" (${typeof doc._id}) with "${docId}" (${typeof docId}) -> ${match ? '✅ MATCH' : '❌ NO MATCH'}`);
// // // // // //         return match;
// // // // // //       });

// // // // // //       console.log('🎯 Found doctor:', foundDoctor);

// // // // // //       if (foundDoctor) {
// // // // // //         setDocInfo(foundDoctor);
// // // // // //         setLocalLoading(false);
// // // // // //       } else {
// // // // // //         console.error('❌ Doctor not found!');
// // // // // //         console.error('📋 Available IDs:', doctors.map(d => `"${d._id}"`));
// // // // // //         setLocalLoading(false);
// // // // // //       }
// // // // // //     } else {
// // // // // //       console.error('❌ Missing data:');
// // // // // //       console.error('- doctors length:', doctors?.length);
// // // // // //       console.error('- docId:', docId);
// // // // // //       setLocalLoading(false);
// // // // // //     }
// // // // // //   }, [doctors, docId, contextLoading]);

// // // // // //   // Fix the time slots generation
// // // // // //   const getAvailableSlots = () => {
// // // // // //     if (!docInfo) return;

// // // // // //     console.log('🕒 Generating time slots for:', docInfo.name);
// // // // // //     setDocSlots([]);
// // // // // //     let today = new Date();
// // // // // //     let slots = [];

// // // // // //     for (let i = 0; i < 7; i++) {
// // // // // //       let currentDate = new Date(today);
// // // // // //       currentDate.setDate(today.getDate() + i);

// // // // // //       // Always start at 10:00 AM
// // // // // //       let startTime = new Date(currentDate);
// // // // // //       startTime.setHours(10, 0, 0, 0);

// // // // // //       // End at 9:00 PM
// // // // // //       let endTime = new Date(currentDate);
// // // // // //       endTime.setHours(21, 0, 0, 0);

// // // // // //       let timeSlots = [];
// // // // // //       let currentSlot = new Date(startTime);

// // // // // //       while (currentSlot < endTime) {
// // // // // //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// // // // // //           hour: '2-digit',
// // // // // //           minute: '2-digit',
// // // // // //           hour12: true
// // // // // //         });

// // // // // //         timeSlots.push({
// // // // // //           datetime: new Date(currentSlot),
// // // // // //           time: timeString
// // // // // //         });

// // // // // //         // Increment by 30 minutes
// // // // // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // // // // //       }

// // // // // //       slots.push(timeSlots);
// // // // // //     }

// // // // // //     setDocSlots(slots);
// // // // // //     console.log('✅ Time slots generated:', slots.length, 'days');
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     if (docInfo) {
// // // // // //       getAvailableSlots();
// // // // // //     }
// // // // // //   }, [docInfo]);

// // // // // //   if (contextLoading || localLoading) {
// // // // // //     return (
// // // // // //       <div className="max-w-6xl mx-auto p-6">
// // // // // //         <div className="flex justify-center items-center min-h-64 flex-col">
// // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
// // // // // //           <p className="text-gray-600">Loading doctor information...</p>
// // // // // //           <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   if (!docInfo) {
// // // // // //     return (
// // // // // //       <div className="max-w-6xl mx-auto p-6 text-center">
// // // // // //         <div className="text-6xl mb-4">😕</div>
// // // // // //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// // // // // //         <p className="text-gray-600 mb-2">The requested doctor is not available.</p>
// // // // // //         <p className="text-sm text-gray-500 mb-1">Requested ID: <strong>{docId}</strong></p>
// // // // // //         <p className="text-sm text-gray-500">
// // // // // //           Available IDs: {doctors.map(d => d._id).join(', ') || 'None'}
// // // // // //         </p>
// // // // // //         <button
// // // // // //           onClick={() => window.history.back()}
// // // // // //           className="mt-4 bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // // // // //         >
// // // // // //           Go Back to Doctors
// // // // // //         </button>
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// // // // // //       {/* Doctor Details Section */}
// // // // // //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// // // // // //         {/* Doctor Image */}
// // // // // //         <div className='lg:w-1/3'>
// // // // // //           <img
// // // // // //             src={docInfo.image}
// // // // // //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// // // // // //             alt={docInfo.name}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Doctor Information */}
// // // // // //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// // // // // //           {/* Name and Verification */}
// // // // // //           <div className='flex items-center gap-3 mb-4'>
// // // // // //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// // // // // //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// // // // // //           </div>

// // // // // //           {/* Degree and Speciality */}
// // // // // //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// // // // // //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// // // // // //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// // // // // //               {docInfo.experience}
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {/* About Section */}
// // // // // //           <div className='mb-6'>
// // // // // //             <div className='flex items-center gap-2 mb-3'>
// // // // // //               <span className='text-lg font-bold text-gray-900'>About</span>
// // // // // //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// // // // // //             </div>
// // // // // //             <p className='text-gray-600 leading-relaxed'>
// // // // // //               {docInfo.about}
// // // // // //             </p>
// // // // // //           </div>

// // // // // //           {/* Appointment Fee */}
// // // // // //           <div className='pt-4 border-t border-gray-200'>
// // // // // //             <p className='text-gray-700 font-medium'>
// // // // // //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Booking Slots Section */}
// // // // // //       <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12'>
// // // // // //         <h2 className='text-2xl font-bold text-gray-900 mb-8'>Booking Slots</h2>

// // // // // //         {/* Date Selection */}
// // // // // //         <div className='flex gap-4 mb-8 overflow-x-auto pb-4'>
// // // // // //           {docSlots.map((item, index) => (
// // // // // //             <div
// // // // // //               key={index}
// // // // // //               onClick={() => setSlotIndex(index)}
// // // // // //               className={`flex flex-col items-center justify-center px-6 py-4 min-w-20 rounded-2xl cursor-pointer transition-all ${
// // // // // //                 slotIndex === index
// // // // // //                   ? 'bg-[#5f5FFF] text-white shadow-lg'
// // // // // //                   : 'border-2 border-gray-200 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // //               }`}
// // // // // //             >
// // // // // //               <p className='font-semibold text-sm'>
// // // // // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // // // // //               </p>
// // // // // //               <p className='text-lg font-bold'>
// // // // // //                 {item[0] && item[0].datetime.getDate()}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>

// // // // // //         {/* Time Slots */}
// // // // // //         <div className='mb-8'>
// // // // // //           <p className='text-gray-700 font-medium mb-4'>Available Time Slots:</p>
// // // // // //           <div className='flex flex-wrap gap-3'>
// // // // // //             {docSlots[slotIndex]?.map((item, index) => (
// // // // // //               <div
// // // // // //                 key={index}
// // // // // //                 onClick={() => setSlotTime(item.time)}
// // // // // //                 className={`px-6 py-3 rounded-xl cursor-pointer transition-all border-2 ${
// // // // // //                   item.time === slotTime
// // // // // //                     ? 'bg-[#5f5FFF] text-white border-[#5f5FFF] shadow-lg'
// // // // // //                     : 'border-gray-200 text-gray-700 hover:border-[#5f5FFF] hover:shadow-md'
// // // // // //                 }`}
// // // // // //               >
// // // // // //                 <p className='font-medium'>{item.time.toLowerCase()}</p>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Book Appointment Button */}
// // // // // //         <button
// // // // // //           className={`px-16 py-4 text-white cursor-pointer rounded-xl font-bold text-lg transition-all ${
// // // // // //             slotTime
// // // // // //               ? 'bg-[#5f5FFF] hover:bg-[#4a4aff] shadow-lg hover:shadow-xl'
// // // // // //               : 'bg-gray-400 cursor-not-allowed'
// // // // // //           }`}
// // // // // //           disabled={!slotTime}
// // // // // //         >
// // // // // //           Book An Appointment
// // // // // //         </button>
// // // // // //       </div>

// // // // // //       {/* Related Doctors */}
// // // // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Appointment;

// // // // // import React, { useContext, useEffect, useState } from 'react'
// // // // // import { useParams } from 'react-router-dom'
// // // // // import { AppContext } from '../context/AppContext';
// // // // // import { assets } from '../assets/assets_frontend/assets';
// // // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // // function Appointment() {
// // // // //   const { docId } = useParams();
// // // // //   const { doctors } = useContext(AppContext);

// // // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // // // //   const [docInfo, setDocInfo] = useState(null);
// // // // //   const [docSlots, setDocSlots] = useState([]);
// // // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // // //   const [slotTime, setSlotTime] = useState('');
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   console.log("=== APPOINTMENT COMPONENT ===");
// // // // //   console.log("📌 docId from URL:", docId);
// // // // //   console.log("👨‍⚕️ Doctors array:", doctors);
// // // // //   console.log("🔢 Number of doctors:", doctors.length);
// // // // //   console.log("🎯 Available IDs:", doctors.map(d => d._id));

// // // // //   // Find the doctor
// // // // //   useEffect(() => {
// // // // //     console.log("🔄 Searching for doctor...");

// // // // //     if (doctors && doctors.length > 0) {
// // // // //       console.log("🔍 Looking for doctor with ID:", docId);

// // // // //       const foundDoctor = doctors.find(doc => doc._id === docId);

// // // // //       if (foundDoctor) {
// // // // //         console.log("✅ Doctor found:", foundDoctor.name);
// // // // //         setDocInfo(foundDoctor);
// // // // //       } else {
// // // // //         console.log("❌ Doctor not found!");
// // // // //         console.log("📋 Available doctors:", doctors.map(d => ({ id: d._id, name: d.name })));
// // // // //       }

// // // // //       setLoading(false);
// // // // //     } else {
// // // // //       console.log("❌ No doctors data available");
// // // // //       setLoading(false);
// // // // //     }
// // // // //   }, [doctors, docId]);

// // // // //   // Generate time slots
// // // // //   const getAvailableSlots = () => {
// // // // //     if (!docInfo) return;

// // // // //     console.log("🕒 Generating time slots for:", docInfo.name);

// // // // //     let today = new Date();
// // // // //     let slots = [];

// // // // //     for (let i = 0; i < 7; i++) {
// // // // //       let currentDate = new Date(today);
// // // // //       currentDate.setDate(today.getDate() + i);

// // // // //       // Start at 10:00 AM
// // // // //       let startTime = new Date(currentDate);
// // // // //       startTime.setHours(10, 0, 0, 0);

// // // // //       // End at 9:00 PM
// // // // //       let endTime = new Date(currentDate);
// // // // //       endTime.setHours(21, 0, 0, 0);

// // // // //       let timeSlots = [];
// // // // //       let currentSlot = new Date(startTime);

// // // // //       while (currentSlot < endTime) {
// // // // //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// // // // //           hour: '2-digit',
// // // // //           minute: '2-digit',
// // // // //           hour12: true
// // // // //         });

// // // // //         timeSlots.push({
// // // // //           datetime: new Date(currentSlot),
// // // // //           time: timeString
// // // // //         });

// // // // //         // Increment by 30 minutes
// // // // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // // // //       }

// // // // //       slots.push(timeSlots);
// // // // //     }

// // // // //     setDocSlots(slots);
// // // // //     console.log("✅ Generated", slots.length, "days of time slots");
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     if (docInfo) {
// // // // //       getAvailableSlots();
// // // // //     }
// // // // //   }, [docInfo]);

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="max-w-6xl mx-auto p-6">
// // // // //         <div className="flex justify-center items-center min-h-64 flex-col">
// // // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
// // // // //           <p className="text-gray-600">Loading doctor information...</p>
// // // // //           <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   if (!docInfo) {
// // // // //     return (
// // // // //       <div className="max-w-6xl mx-auto p-6 text-center">
// // // // //         <div className="text-6xl mb-4">😕</div>
// // // // //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// // // // //         <p className="text-gray-600 mb-2">The doctor you're looking for is not available.</p>
// // // // //         <p className="text-sm text-gray-500 mb-1">Requested ID: <strong>{docId}</strong></p>
// // // // //         <p className="text-sm text-gray-500 mb-4">
// // // // //           Available IDs: {doctors.map(d => d._id).join(', ')}
// // // // //         </p>
// // // // //         <button
// // // // //           onClick={() => window.history.back()}
// // // // //           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // // // //         >
// // // // //           Go Back to Doctors
// // // // //         </button>
// // // // //       </div>
// // // // //     );
// // // // //   }

// // // // //   return (
// // // // //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// // // // //       {/* Debug Info - Remove in production */}
// // // // //       <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
// // // // //         <p className="text-sm text-green-800">
// // // // //           <strong>✅ Success!</strong> Loaded doctor: {docInfo.name} (ID: {docInfo._id})
// // // // //         </p>
// // // // //       </div>

// // // // //       {/* Doctor Details Section */}
// // // // //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// // // // //         {/* Doctor Image */}
// // // // //         <div className='lg:w-1/3'>
// // // // //           <img
// // // // //             src={docInfo.image}
// // // // //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// // // // //             alt={docInfo.name}
// // // // //           />
// // // // //         </div>

// // // // //         {/* Doctor Information */}
// // // // //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// // // // //           {/* Name and Verification */}
// // // // //           <div className='flex items-center gap-3 mb-4'>
// // // // //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// // // // //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// // // // //           </div>

// // // // //           {/* Degree and Speciality */}
// // // // //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// // // // //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// // // // //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// // // // //               {docInfo.experience}
// // // // //             </span>
// // // // //           </div>

// // // // //           {/* About Section */}
// // // // //           <div className='mb-6'>
// // // // //             <div className='flex items-center gap-2 mb-3'>
// // // // //               <span className='text-lg font-bold text-gray-900'>About</span>
// // // // //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// // // // //             </div>
// // // // //             <p className='text-gray-600 leading-relaxed'>
// // // // //               {docInfo.about}
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Appointment Fee */}
// // // // //           <div className='pt-4 border-t border-gray-200'>
// // // // //             <p className='text-gray-700 font-medium'>
// // // // //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Booking Slots Section */}
// // // // //       <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12'>
// // // // //         <h2 className='text-2xl font-bold text-gray-900 mb-8'>Booking Slots</h2>

// // // // //         {/* Date Selection */}
// // // // //         <div className='flex gap-4 mb-8 overflow-x-auto pb-4'>
// // // // //           {docSlots.map((item, index) => (
// // // // //             <div
// // // // //               key={index}
// // // // //               onClick={() => setSlotIndex(index)}
// // // // //               className={`flex flex-col items-center justify-center px-6 py-4 min-w-20 rounded-2xl cursor-pointer transition-all ${
// // // // //                 slotIndex === index
// // // // //                   ? 'bg-[#5f5FFF] text-white shadow-lg'
// // // // //                   : 'border-2 border-gray-200 hover:border-[#5f5FFF] hover:shadow-md'
// // // // //               }`}
// // // // //             >
// // // // //               <p className='font-semibold text-sm'>
// // // // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // // // //               </p>
// // // // //               <p className='text-lg font-bold'>
// // // // //                 {item[0] && item[0].datetime.getDate()}
// // // // //               </p>
// // // // //             </div>
// // // // //           ))}
// // // // //         </div>

// // // // //         {/* Time Slots */}
// // // // //         <div className='mb-8'>
// // // // //           <p className='text-gray-700 font-medium mb-4'>Available Time Slots:</p>
// // // // //           <div className='flex flex-wrap gap-3'>
// // // // //             {docSlots[slotIndex]?.map((item, index) => (
// // // // //               <div
// // // // //                 key={index}
// // // // //                 onClick={() => setSlotTime(item.time)}
// // // // //                 className={`px-6 py-3 rounded-xl cursor-pointer transition-all border-2 ${
// // // // //                   item.time === slotTime
// // // // //                     ? 'bg-[#5f5FFF] text-white border-[#5f5FFF] shadow-lg'
// // // // //                     : 'border-gray-200 text-gray-700 hover:border-[#5f5FFF] hover:shadow-md'
// // // // //                 }`}
// // // // //               >
// // // // //                 <p className='font-medium'>{item.time.toLowerCase()}</p>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Book Appointment Button */}
// // // // //         <button
// // // // //           className={`px-16 py-4 text-white cursor-pointer rounded-xl font-bold text-lg transition-all ${
// // // // //             slotTime
// // // // //               ? 'bg-[#5f5FFF] hover:bg-[#4a4aff] shadow-lg hover:shadow-xl'
// // // // //               : 'bg-gray-400 cursor-not-allowed'
// // // // //           }`}
// // // // //           disabled={!slotTime}
// // // // //         >
// // // // //           Book An Appointment
// // // // //         </button>
// // // // //       </div>

// // // // //       {/* Related Doctors */}
// // // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default Appointment;

// // // // import React, { useContext, useEffect, useState } from 'react'
// // // // import { useParams } from 'react-router-dom'
// // // // import { AppContext } from '../context/AppContext';
// // // // import { assets } from '../assets/assets_frontend/assets';
// // // // import RelatedDoctors from '../components/RelatedDoctors';

// // // // function Appointment() {
// // // //   const { docId } = useParams();
// // // //   const { doctors, backendStatus } = useContext(AppContext);

// // // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // // //   const [docInfo, setDocInfo] = useState(null);
// // // //   const [docSlots, setDocSlots] = useState([]);
// // // //   const [slotIndex, setSlotIndex] = useState(0);
// // // //   const [slotTime, setSlotTime] = useState('');
// // // //   const [loading, setLoading] = useState(true);

// // // //   console.log("=== APPOINTMENT COMPONENT ===");
// // // //   console.log("📌 docId from URL:", docId);
// // // //   console.log("👨‍⚕️ Doctors array:", doctors);
// // // //   console.log("🔢 Number of doctors:", doctors.length);
// // // //   console.log("🌐 Backend Status:", backendStatus);
// // // //   console.log("🎯 Available IDs:", doctors.map(d => d._id));

// // // //   // Find the doctor
// // // //   useEffect(() => {
// // // //     console.log("🔄 Searching for doctor...");

// // // //     if (doctors && doctors.length > 0) {
// // // //       console.log("🔍 Looking for doctor with ID:", docId);

// // // //       // Try to find doctor by ID (works for both string and number IDs)
// // // //       const foundDoctor = doctors.find(doc => {
// // // //         // Convert both to string for comparison
// // // //         const docIdStr = doc._id?.toString();
// // // //         const searchIdStr = docId?.toString();
// // // //         return docIdStr === searchIdStr;
// // // //       });

// // // //       if (foundDoctor) {
// // // //         console.log("✅ Doctor found:", foundDoctor.name);
// // // //         console.log("📊 Doctor details:", foundDoctor);
// // // //         setDocInfo(foundDoctor);
// // // //       } else {
// // // //         console.log("❌ Doctor not found!");
// // // //         console.log("📋 Available doctors:", doctors.map(d => ({ id: d._id, name: d.name })));
// // // //       }

// // // //       setLoading(false);
// // // //     } else {
// // // //       console.log("❌ No doctors data available");
// // // //       setLoading(false);
// // // //     }
// // // //   }, [doctors, docId]);

// // // //   // Generate time slots
// // // //   const getAvailableSlots = () => {
// // // //     if (!docInfo) return;

// // // //     console.log("🕒 Generating time slots for:", docInfo.name);

// // // //     let today = new Date();
// // // //     let slots = [];

// // // //     for (let i = 0; i < 7; i++) {
// // // //       let currentDate = new Date(today);
// // // //       currentDate.setDate(today.getDate() + i);

// // // //       // Start at 10:00 AM
// // // //       let startTime = new Date(currentDate);
// // // //       startTime.setHours(10, 0, 0, 0);

// // // //       // End at 9:00 PM
// // // //       let endTime = new Date(currentDate);
// // // //       endTime.setHours(21, 0, 0, 0);

// // // //       let timeSlots = [];
// // // //       let currentSlot = new Date(startTime);

// // // //       while (currentSlot < endTime) {
// // // //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// // // //           hour: '2-digit',
// // // //           minute: '2-digit',
// // // //           hour12: true
// // // //         });

// // // //         timeSlots.push({
// // // //           datetime: new Date(currentSlot),
// // // //           time: timeString
// // // //         });

// // // //         // Increment by 30 minutes
// // // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // // //       }

// // // //       slots.push(timeSlots);
// // // //     }

// // // //     setDocSlots(slots);
// // // //     console.log("✅ Generated", slots.length, "days of time slots");
// // // //   };

// // // //   useEffect(() => {
// // // //     if (docInfo) {
// // // //       getAvailableSlots();
// // // //     }
// // // //   }, [docInfo]);

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="max-w-6xl mx-auto p-6">
// // // //         <div className="flex justify-center items-center min-h-64 flex-col">
// // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
// // // //           <p className="text-gray-600">Loading doctor information...</p>
// // // //           <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (!docInfo) {
// // // //     return (
// // // //       <div className="max-w-6xl mx-auto p-6 text-center">
// // // //         <div className="text-6xl mb-4">😕</div>
// // // //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// // // //         <p className="text-gray-600 mb-2">The doctor you're looking for is not available.</p>
// // // //         <p className="text-sm text-gray-500 mb-1">Requested ID: <strong>{docId}</strong></p>
// // // //         <p className="text-sm text-gray-500 mb-4">
// // // //           Available IDs: {doctors.map(d => d._id).join(', ')}
// // // //         </p>
// // // //         <button
// // // //           onClick={() => window.history.back()}
// // // //           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // // //         >
// // // //           Go Back to Doctors
// // // //         </button>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// // // //       {/* Backend Status */}
// // // //       <div className={`mb-4 p-4 rounded-lg border ${
// // // //         backendStatus === 'connected'
// // // //           ? 'bg-green-50 border-green-200 text-green-800'
// // // //           : 'bg-yellow-50 border-yellow-200 text-yellow-800'
// // // //       }`}>
// // // //         <p className="font-medium">
// // // //           {backendStatus === 'connected' ? '✅ Live data from backend' : '⚠️ Using local data'}
// // // //         </p>
// // // //       </div>

// // // //       {/* Doctor Details Section */}
// // // //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// // // //         {/* Doctor Image */}
// // // //         <div className='lg:w-1/3'>
// // // //           <img
// // // //             src={docInfo.image}
// // // //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// // // //             alt={docInfo.name}
// // // //           />
// // // //         </div>

// // // //         {/* Doctor Information */}
// // // //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// // // //           {/* Name and Verification */}
// // // //           <div className='flex items-center gap-3 mb-4'>
// // // //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// // // //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// // // //             {backendStatus === 'connected' && (
// // // //               <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
// // // //                 Live
// // // //               </span>
// // // //             )}
// // // //           </div>

// // // //           {/* Degree and Speciality */}
// // // //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// // // //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// // // //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// // // //               {docInfo.experience}
// // // //             </span>
// // // //           </div>

// // // //           {/* About Section */}
// // // //           <div className='mb-6'>
// // // //             <div className='flex items-center gap-2 mb-3'>
// // // //               <span className='text-lg font-bold text-gray-900'>About</span>
// // // //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// // // //             </div>
// // // //             <p className='text-gray-600 leading-relaxed'>
// // // //               {docInfo.about}
// // // //             </p>
// // // //           </div>

// // // //           {/* Appointment Fee */}
// // // //           <div className='pt-4 border-t border-gray-200'>
// // // //             <p className='text-gray-700 font-medium'>
// // // //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Booking Slots Section */}
// // // //       <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12'>
// // // //         <h2 className='text-2xl font-bold text-gray-900 mb-8'>Booking Slots</h2>

// // // //         {/* Date Selection */}
// // // //         <div className='flex gap-4 mb-8 overflow-x-auto pb-4'>
// // // //           {docSlots.map((item, index) => (
// // // //             <div
// // // //               key={index}
// // // //               onClick={() => setSlotIndex(index)}
// // // //               className={`flex flex-col items-center justify-center px-6 py-4 min-w-20 rounded-2xl cursor-pointer transition-all ${
// // // //                 slotIndex === index
// // // //                   ? 'bg-[#5f5FFF] text-white shadow-lg'
// // // //                   : 'border-2 border-gray-200 hover:border-[#5f5FFF] hover:shadow-md'
// // // //               }`}
// // // //             >
// // // //               <p className='font-semibold text-sm'>
// // // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // // //               </p>
// // // //               <p className='text-lg font-bold'>
// // // //                 {item[0] && item[0].datetime.getDate()}
// // // //               </p>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //         {/* Time Slots */}
// // // //         <div className='mb-8'>
// // // //           <p className='text-gray-700 font-medium mb-4'>Available Time Slots:</p>
// // // //           <div className='flex flex-wrap gap-3'>
// // // //             {docSlots[slotIndex]?.map((item, index) => (
// // // //               <div
// // // //                 key={index}
// // // //                 onClick={() => setSlotTime(item.time)}
// // // //                 className={`px-6 py-3 rounded-xl cursor-pointer transition-all border-2 ${
// // // //                   item.time === slotTime
// // // //                     ? 'bg-[#5f5FFF] text-white border-[#5f5FFF] shadow-lg'
// // // //                     : 'border-gray-200 text-gray-700 hover:border-[#5f5FFF] hover:shadow-md'
// // // //                 }`}
// // // //               >
// // // //                 <p className='font-medium'>{item.time.toLowerCase()}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Book Appointment Button */}
// // // //         <button
// // // //           className={`px-16 py-4 text-white cursor-pointer rounded-xl font-bold text-lg transition-all ${
// // // //             slotTime
// // // //               ? 'bg-[#5f5FFF] hover:bg-[#4a4aff] shadow-lg hover:shadow-xl'
// // // //               : 'bg-gray-400 cursor-not-allowed'
// // // //           }`}
// // // //           disabled={!slotTime}
// // // //         >
// // // //           Book An Appointment
// // // //         </button>
// // // //       </div>

// // // //       {/* Related Doctors */}
// // // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // // //     </div>
// // // //   )
// // // // }

// // // // export default Appointment;

// // // import React, { useContext, useEffect, useState } from 'react'
// // // import { useParams, useNavigate } from 'react-router-dom'
// // // import { AppContext } from '../context/AppContext';
// // // import { assets } from '../assets/assets_frontend/assets';
// // // import RelatedDoctors from '../components/RelatedDoctors';

// // // function Appointment() {
// // //   const { docId } = useParams();
// // //   const navigate = useNavigate();
// // //   const { doctors, backendStatus, bookAppointment, isAuthenticated, user } = useContext(AppContext);

// // //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// // //   const [docInfo, setDocInfo] = useState(null);
// // //   const [docSlots, setDocSlots] = useState([]);
// // //   const [slotIndex, setSlotIndex] = useState(0);
// // //   const [slotTime, setSlotTime] = useState('');
// // //   const [loading, setLoading] = useState(true);
// // //   const [bookingLoading, setBookingLoading] = useState(false);
// // //   const [bookingMessage, setBookingMessage] = useState('');
// // //   const [notes, setNotes] = useState('');

// // //   console.log("=== APPOINTMENT COMPONENT ===");
// // //   console.log("📌 docId from URL:", docId);
// // //   console.log("👨‍⚕️ Doctors array:", doctors);
// // //   console.log("🔢 Number of doctors:", doctors.length);
// // //   console.log("🌐 Backend Status:", backendStatus);
// // //   console.log("🎯 Available IDs:", doctors.map(d => d._id));
// // //   console.log("🔐 User authenticated:", isAuthenticated());
// // //   console.log("👤 Current user:", user);

// // //   // Find the doctor
// // //   useEffect(() => {
// // //     console.log("🔄 Searching for doctor...");

// // //     if (doctors && doctors.length > 0) {
// // //       console.log("🔍 Looking for doctor with ID:", docId);

// // //       // Try to find doctor by ID (works for both string and number IDs)
// // //       const foundDoctor = doctors.find(doc => {
// // //         // Convert both to string for comparison
// // //         const docIdStr = doc._id?.toString();
// // //         const searchIdStr = docId?.toString();
// // //         return docIdStr === searchIdStr;
// // //       });

// // //       if (foundDoctor) {
// // //         console.log("✅ Doctor found:", foundDoctor.name);
// // //         console.log("📊 Doctor details:", foundDoctor);
// // //         setDocInfo(foundDoctor);
// // //       } else {
// // //         console.log("❌ Doctor not found!");
// // //         console.log("📋 Available doctors:", doctors.map(d => ({ id: d._id, name: d.name })));
// // //       }

// // //       setLoading(false);
// // //     } else {
// // //       console.log("❌ No doctors data available");
// // //       setLoading(false);
// // //     }
// // //   }, [doctors, docId]);

// // //   // Generate time slots
// // //   const getAvailableSlots = () => {
// // //     if (!docInfo) return;

// // //     console.log("🕒 Generating time slots for:", docInfo.name);

// // //     let today = new Date();
// // //     let slots = [];

// // //     for (let i = 0; i < 7; i++) {
// // //       let currentDate = new Date(today);
// // //       currentDate.setDate(today.getDate() + i);

// // //       // Start at 10:00 AM
// // //       let startTime = new Date(currentDate);
// // //       startTime.setHours(10, 0, 0, 0);

// // //       // End at 9:00 PM
// // //       let endTime = new Date(currentDate);
// // //       endTime.setHours(21, 0, 0, 0);

// // //       let timeSlots = [];
// // //       let currentSlot = new Date(startTime);

// // //       while (currentSlot < endTime) {
// // //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// // //           hour: '2-digit',
// // //           minute: '2-digit',
// // //           hour12: true
// // //         });

// // //         timeSlots.push({
// // //           datetime: new Date(currentSlot),
// // //           time: timeString
// // //         });

// // //         // Increment by 30 minutes
// // //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// // //       }

// // //       slots.push(timeSlots);
// // //     }

// // //     setDocSlots(slots);
// // //     console.log("✅ Generated", slots.length, "days of time slots");
// // //   };

// // //   useEffect(() => {
// // //     if (docInfo) {
// // //       getAvailableSlots();
// // //     }
// // //   }, [docInfo]);

// // //   // // Handle booking appointment
// // //   // const handleBookAppointment = async () => {
// // //   //   if (!slotTime || !docInfo) {
// // //   //     setBookingMessage('❌ Please select a time slot');
// // //   //     return;
// // //   //   }

// // //   //   if (!isAuthenticated()) {
// // //   //     setBookingMessage('❌ Please login to book an appointment');
// // //   //     setTimeout(() => {
// // //   //       navigate('/login');
// // //   //     }, 2000);
// // //   //     return;
// // //   //   }

// // //   //   setBookingLoading(true);
// // //   //   setBookingMessage('');

// // //   //   try {
// // //   //     console.log("📅 Booking appointment...");

// // //   //     // Get the selected date and time
// // //   //     const selectedDate = docSlots[slotIndex][0].datetime;
// // //   //     const [time, period] = slotTime.split(' ');
// // //   //     const [hours, minutes] = time.split(':');

// // //   //     // Convert to 24-hour format
// // //   //     let hour24 = parseInt(hours);
// // //   //     if (period === 'PM' && hour24 !== 12) {
// // //   //       hour24 += 12;
// // //   //     } else if (period === 'AM' && hour24 === 12) {
// // //   //       hour24 = 0;
// // //   //     }

// // //   //     // Create appointment datetime
// // //   //     const appointmentDateTime = new Date(selectedDate);
// // //   //     appointmentDateTime.setHours(hour24, parseInt(minutes), 0, 0);

// // //   //     console.log("📅 Appointment datetime:", appointmentDateTime);
// // //   //     console.log("👨‍⚕️ Doctor ID:", docInfo._id);
// // //   //     console.log("📝 Notes:", notes);

// // //   //     // Call the bookAppointment function from context
// // //   //     const result = await bookAppointment(
// // //   //       docInfo._id,
// // //   //       appointmentDateTime.toISOString(),
// // //   //       notes
// // //   //     );

// // //   //     if (result.success) {
// // //   //       setBookingMessage('✅ Appointment booked successfully!');
// // //   //       console.log("✅ Appointment booked:", result.data);

// // //   //       // Redirect to my appointments page after 2 seconds
// // //   //       setTimeout(() => {
// // //   //         navigate('/my-appointments');
// // //   //       }, 2000);
// // //   //     } else {
// // //   //       setBookingMessage(`❌ ${result.error}`);
// // //   //       console.error("❌ Booking failed:", result.error);
// // //   //     }
// // //   //   } catch (error) {
// // //   //     console.error("❌ Booking error:", error);
// // //   //     setBookingMessage('❌ Failed to book appointment. Please try again.');
// // //   //   } finally {
// // //   //     setBookingLoading(false);
// // //   //   }
// // //   // };

// // //     // In the handleBookAppointment function, add ID validation:
// // // const handleBookAppointment = async () => {
// // //   if (!slotTime || !docInfo) {
// // //     setBookingMessage('❌ Please select a time slot');
// // //     return;
// // //   }

// // //   if (!isAuthenticated()) {
// // //     setBookingMessage('❌ Please login to book an appointment');
// // //     setTimeout(() => {
// // //       navigate('/login');
// // //     }, 2000);
// // //     return;
// // //   }

// // //   setBookingLoading(true);
// // //   setBookingMessage('');

// // //   try {
// // //     console.log("📅 Booking appointment...");

// // //     // Get the selected date and time
// // //     const selectedDate = docSlots[slotIndex][0].datetime;
// // //     const [time, period] = slotTime.split(' ');
// // //     const [hours, minutes] = time.split(':');

// // //     // Convert to 24-hour format
// // //     let hour24 = parseInt(hours);
// // //     if (period === 'PM' && hour24 !== 12) {
// // //       hour24 += 12;
// // //     } else if (period === 'AM' && hour24 === 12) {
// // //       hour24 = 0;
// // //     }

// // //     // Create appointment datetime
// // //     const appointmentDateTime = new Date(selectedDate);
// // //     appointmentDateTime.setHours(hour24, parseInt(minutes), 0, 0);

// // //     console.log("📅 Appointment datetime:", appointmentDateTime.toISOString());
// // //     console.log("👨‍⚕️ Doctor ID:", docInfo._id);
// // //     console.log("🔢 Doctor ID type:", typeof docInfo._id);
// // //     console.log("📝 Notes:", notes);

// // //     // Ensure doctor ID is properly formatted
// // //     const doctorId = docInfo._id.toString();
// // //     console.log("🎯 Formatted Doctor ID:", doctorId);

// // //     // Call the bookAppointment function from context
// // //     const result = await bookAppointment(
// // //       doctorId,
// // //       appointmentDateTime.toISOString(),
// // //       notes
// // //     );

// // //     if (result.success) {
// // //       setBookingMessage('✅ Appointment booked successfully!');
// // //       console.log("✅ Appointment booked:", result.data);

// // //       // Redirect to my appointments page after 2 seconds
// // //       setTimeout(() => {
// // //         navigate('/my-appointments');
// // //       }, 2000);
// // //     } else {
// // //       setBookingMessage(`❌ ${result.error}`);
// // //       console.error("❌ Booking failed:", result.error);
// // //     }
// // //   } catch (error) {
// // //     console.error("❌ Booking error:", error);
// // //     setBookingMessage('❌ Failed to book appointment. Please try again.');
// // //   } finally {
// // //     setBookingLoading(false);
// // //   }
// // // };

// // //   if (loading) {
// // //     return (
// // //       <div className="max-w-6xl mx-auto p-6">
// // //         <div className="flex justify-center items-center min-h-64 flex-col">
// // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
// // //           <p className="text-gray-600">Loading doctor information...</p>
// // //           <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   if (!docInfo) {
// // //     return (
// // //       <div className="max-w-6xl mx-auto p-6 text-center">
// // //         <div className="text-6xl mb-4">😕</div>
// // //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// // //         <p className="text-gray-600 mb-2">The doctor you're looking for is not available.</p>
// // //         <p className="text-sm text-gray-500 mb-1">Requested ID: <strong>{docId}</strong></p>
// // //         <p className="text-sm text-gray-500 mb-4">
// // //           Available IDs: {doctors.map(d => d._id).join(', ')}
// // //         </p>
// // //         <button
// // //           onClick={() => window.history.back()}
// // //           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // //         >
// // //           Go Back to Doctors
// // //         </button>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// // //       {/* Backend Status */}
// // //       <div className={`mb-4 p-4 rounded-lg border ${
// // //         backendStatus === 'connected'
// // //           ? 'bg-green-50 border-green-200 text-green-800'
// // //           : 'bg-yellow-50 border-yellow-200 text-yellow-800'
// // //       }`}>
// // //         <p className="font-medium">
// // //           {backendStatus === 'connected' ? '✅ Live data from backend' : '⚠️ Using local data'}
// // //         </p>
// // //       </div>

// // //       {/* Booking Message */}
// // //       {bookingMessage && (
// // //         <div className={`mb-4 p-4 rounded-lg border ${
// // //           bookingMessage.includes('✅')
// // //             ? 'bg-green-50 border-green-200 text-green-800'
// // //             : 'bg-red-50 border-red-200 text-red-800'
// // //         }`}>
// // //           <p className="font-medium">{bookingMessage}</p>
// // //         </div>
// // //       )}

// // //       {/* Doctor Details Section */}
// // //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// // //         {/* Doctor Image */}
// // //         <div className='lg:w-1/3'>
// // //           <img
// // //             src={docInfo.image}
// // //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// // //             alt={docInfo.name}
// // //           />
// // //         </div>

// // //         {/* Doctor Information */}
// // //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// // //           {/* Name and Verification */}
// // //           <div className='flex items-center gap-3 mb-4'>
// // //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// // //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// // //             {backendStatus === 'connected' && (
// // //               <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
// // //                 Live
// // //               </span>
// // //             )}
// // //           </div>

// // //           {/* Degree and Speciality */}
// // //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// // //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// // //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// // //               {docInfo.experience}
// // //             </span>
// // //           </div>

// // //           {/* About Section */}
// // //           <div className='mb-6'>
// // //             <div className='flex items-center gap-2 mb-3'>
// // //               <span className='text-lg font-bold text-gray-900'>About</span>
// // //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// // //             </div>
// // //             <p className='text-gray-600 leading-relaxed'>
// // //               {docInfo.about}
// // //             </p>
// // //           </div>

// // //           {/* Appointment Fee */}
// // //           <div className='pt-4 border-t border-gray-200'>
// // //             <p className='text-gray-700 font-medium'>
// // //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Booking Slots Section */}
// // //       <div className='bg-white rounded-2xl p-8 border border-gray-200 shadow-sm mb-12'>
// // //         <h2 className='text-2xl font-bold text-gray-900 mb-8'>Booking Slots</h2>

// // //         {/* Date Selection */}
// // //         <div className='flex gap-4 mb-8 overflow-x-auto pb-4'>
// // //           {docSlots.map((item, index) => (
// // //             <div
// // //               key={index}
// // //               onClick={() => {
// // //                 setSlotIndex(index);
// // //                 setSlotTime('');
// // //               }}
// // //               className={`flex flex-col items-center justify-center px-6 py-4 min-w-20 rounded-2xl cursor-pointer transition-all ${
// // //                 slotIndex === index
// // //                   ? 'bg-[#5f5FFF] text-white shadow-lg'
// // //                   : 'border-2 border-gray-200 hover:border-[#5f5FFF] hover:shadow-md'
// // //               }`}
// // //             >
// // //               <p className='font-semibold text-sm'>
// // //                 {item[0] && daysOfWeek[item[0].datetime.getDay()]}
// // //               </p>
// // //               <p className='text-lg font-bold'>
// // //                 {item[0] && item[0].datetime.getDate()}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>

// // //         {/* Time Slots */}
// // //         <div className='mb-8'>
// // //           <p className='text-gray-700 font-medium mb-4'>Available Time Slots:</p>
// // //           <div className='flex flex-wrap gap-3'>
// // //             {docSlots[slotIndex]?.map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 onClick={() => setSlotTime(item.time)}
// // //                 className={`px-6 py-3 rounded-xl cursor-pointer transition-all border-2 ${
// // //                   item.time === slotTime
// // //                     ? 'bg-[#5f5FFF] text-white border-[#5f5FFF] shadow-lg'
// // //                     : 'border-gray-200 text-gray-700 hover:border-[#5f5FFF] hover:shadow-md'
// // //                 }`}
// // //               >
// // //                 <p className='font-medium'>{item.time.toLowerCase()}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Additional Notes */}
// // //         <div className='mb-8'>
// // //           <label className='text-gray-700 font-medium mb-2 block'>
// // //             Additional Notes (Optional):
// // //           </label>
// // //           <textarea
// // //             value={notes}
// // //             onChange={(e) => setNotes(e.target.value)}
// // //             placeholder="Any specific concerns or notes for the doctor..."
// // //             className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF] resize-none"
// // //             rows="3"
// // //           />
// // //         </div>

// // //         {/* Selected Appointment Summary */}
// // //         {slotTime && (
// // //           <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
// // //             <h3 className="font-semibold text-blue-800 mb-2">Appointment Summary</h3>
// // //             <p className="text-blue-700">
// // //               <strong>Date:</strong> {docSlots[slotIndex]?.[0]?.datetime.toDateString()} |{' '}
// // //               <strong>Time:</strong> {slotTime} |{' '}
// // //               <strong>Doctor:</strong> {docInfo.name} |{' '}
// // //               <strong>Fee:</strong> ₹{docInfo.fees}
// // //             </p>
// // //           </div>
// // //         )}

// // //         {/* Book Appointment Button */}
// // //         <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
// // //           <button
// // //             onClick={handleBookAppointment}
// // //             disabled={!slotTime || bookingLoading}
// // //             className={`px-16 py-4 text-white cursor-pointer rounded-xl font-bold text-lg transition-all flex items-center gap-2 ${
// // //               slotTime && !bookingLoading
// // //                 ? 'bg-[#5f5FFF] hover:bg-[#4a4aff] shadow-lg hover:shadow-xl'
// // //                 : 'bg-gray-400 cursor-not-allowed'
// // //             }`}
// // //           >
// // //             {bookingLoading ? (
// // //               <>
// // //                 <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
// // //                 Booking...
// // //               </>
// // //             ) : (
// // //               'Book An Appointment'
// // //             )}
// // //           </button>

// // //           {!isAuthenticated() && (
// // //             <p className="text-sm text-orange-600">
// // //               🔐 Please login to book an appointment
// // //             </p>
// // //           )}
// // //         </div>
// // //       </div>

// // //       {/* Related Doctors */}
// // //       <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
// // //     </div>
// // //   )
// // // }

// // // export default Appointment;

// // import React, { useContext, useEffect, useState } from 'react'
// // import { useParams, useNavigate } from 'react-router-dom'
// // import { AppContext } from '../context/AppContext';
// // import { assets } from '../assets/assets_frontend/assets';
// // import RelatedDoctors from '../components/RelatedDoctors';

// // function Appointment() {
// //   const { docId } = useParams();
// //   const navigate = useNavigate();
// //   const { doctors, backendStatus, bookAppointment, isAuthenticated, user } = useContext(AppContext);

// //   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// //   const [docInfo, setDocInfo] = useState(null);
// //   const [docSlots, setDocSlots] = useState([]);
// //   const [slotIndex, setSlotIndex] = useState(0);
// //   const [slotTime, setSlotTime] = useState('');
// //   const [loading, setLoading] = useState(true);
// //   const [bookingLoading, setBookingLoading] = useState(false);
// //   const [bookingMessage, setBookingMessage] = useState('');
// //   const [notes, setNotes] = useState('');

// //   console.log("=== APPOINTMENT COMPONENT DEBUG ===");
// //   console.log("📌 docId from URL:", docId);
// //   console.log("📌 docId type:", typeof docId);
// //   console.log("👨‍⚕️ Doctors array length:", doctors?.length);
// //   console.log("🌐 Backend Status:", backendStatus);
// //   console.log("🔐 User authenticated:", isAuthenticated?.());

// //   // Enhanced doctor finding with multiple ID field checks
// //   useEffect(() => {
// //     console.log("🔄 SEARCHING FOR DOCTOR - ENHANCED DEBUG");

// //     if (doctors && doctors.length > 0) {
// //       console.log("🔍 Looking for doctor with URL ID:", docId);

// //       // Check all possible ID fields
// //       const foundDoctor = doctors.find(doc => {
// //         const possibleIdFields = ['_id', 'id', 'doctorId', 'doctor_id'];

// //         for (let field of possibleIdFields) {
// //           if (doc[field]) {
// //             const docIdValue = doc[field]?.toString();
// //             const searchId = docId?.toString();
// //             console.log(`   Checking field "${field}": ${docIdValue} vs ${searchId}`);

// //             if (docIdValue === searchId) {
// //               console.log(`   ✅ MATCH FOUND in field: ${field}`);
// //               return true;
// //             }
// //           }
// //         }
// //         return false;
// //       });

// //       if (foundDoctor) {
// //         console.log("🎉 DOCTOR FOUND:", foundDoctor.name);
// //         console.log("📊 Full doctor object:", foundDoctor);
// //         setDocInfo(foundDoctor);
// //       } else {
// //         console.log("❌ DOCTOR NOT FOUND!");
// //         console.log("📋 Available doctors with their IDs:");
// //         doctors.forEach((doc, index) => {
// //           console.log(`   ${index + 1}. ${doc.name} - ID fields:`, {
// //             _id: doc._id,
// //             id: doc.id,
// //             doctorId: doc.doctorId,
// //             doctor_id: doc.doctor_id
// //           });
// //         });
// //       }

// //       setLoading(false);
// //     } else {
// //       console.log("❌ No doctors data available or empty array");
// //       setLoading(false);
// //     }
// //   }, [doctors, docId]);

// //   // Rest of your component remains the same...
// //   const getAvailableSlots = () => {
// //     if (!docInfo) return;

// //     console.log("🕒 Generating time slots for:", docInfo.name);

// //     let today = new Date();
// //     let slots = [];

// //     for (let i = 0; i < 7; i++) {
// //       let currentDate = new Date(today);
// //       currentDate.setDate(today.getDate() + i);

// //       let startTime = new Date(currentDate);
// //       startTime.setHours(10, 0, 0, 0);

// //       let endTime = new Date(currentDate);
// //       endTime.setHours(21, 0, 0, 0);

// //       let timeSlots = [];
// //       let currentSlot = new Date(startTime);

// //       while (currentSlot < endTime) {
// //         let timeString = currentSlot.toLocaleTimeString('en-US', {
// //           hour: '2-digit',
// //           minute: '2-digit',
// //           hour12: true
// //         });

// //         timeSlots.push({
// //           datetime: new Date(currentSlot),
// //           time: timeString
// //         });

// //         currentSlot.setMinutes(currentSlot.getMinutes() + 30);
// //       }

// //       slots.push(timeSlots);
// //     }

// //     setDocSlots(slots);
// //     console.log("✅ Generated", slots.length, "days of time slots");
// //   };

// //   useEffect(() => {
// //     if (docInfo) {
// //       getAvailableSlots();
// //     }
// //   }, [docInfo]);

// //   const handleBookAppointment = async () => {
// //     if (!slotTime || !docInfo) {
// //       setBookingMessage('❌ Please select a time slot');
// //       return;
// //     }

// //     if (!isAuthenticated()) {
// //       setBookingMessage('❌ Please login to book an appointment');
// //       setTimeout(() => {
// //         navigate('/login');
// //       }, 2000);
// //       return;
// //     }

// //     setBookingLoading(true);
// //     setBookingMessage('');

// //     try {
// //       console.log("📅 Booking appointment...");

// //       const selectedDate = docSlots[slotIndex][0].datetime;
// //       const [time, period] = slotTime.split(' ');
// //       const [hours, minutes] = time.split(':');

// //       let hour24 = parseInt(hours);
// //       if (period === 'PM' && hour24 !== 12) {
// //         hour24 += 12;
// //       } else if (period === 'AM' && hour24 === 12) {
// //         hour24 = 0;
// //       }

// //       const appointmentDateTime = new Date(selectedDate);
// //       appointmentDateTime.setHours(hour24, parseInt(minutes), 0, 0);

// //       console.log("📅 Appointment datetime:", appointmentDateTime.toISOString());
// //       console.log("👨‍⚕️ Doctor ID:", docInfo._id || docInfo.id);
// //       console.log("📝 Notes:", notes);

// //       const doctorId = (docInfo._id || docInfo.id).toString();
// //       console.log("🎯 Formatted Doctor ID:", doctorId);

// //       const result = await bookAppointment(
// //         doctorId,
// //         appointmentDateTime.toISOString(),
// //         notes
// //       );

// //       if (result.success) {
// //         setBookingMessage('✅ Appointment booked successfully!');
// //         console.log("✅ Appointment booked:", result.data);

// //         setTimeout(() => {
// //           navigate('/my-appointments');
// //         }, 2000);
// //       } else {
// //         setBookingMessage(`❌ ${result.error}`);
// //         console.error("❌ Booking failed:", result.error);
// //       }
// //     } catch (error) {
// //       console.error("❌ Booking error:", error);
// //       setBookingMessage('❌ Failed to book appointment. Please try again.');
// //     } finally {
// //       setBookingLoading(false);
// //     }
// //   };

// //   if (loading) {
// //     return (
// //       <div className="max-w-6xl mx-auto p-6">
// //         <div className="flex justify-center items-center min-h-64 flex-col">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
// //           <p className="text-gray-600">Loading doctor information...</p>
// //           <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (!docInfo) {
// //     return (
// //       <div className="max-w-6xl mx-auto p-6 text-center">
// //         <div className="text-6xl mb-4">😕</div>
// //         <h2 className="text-2xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
// //         <p className="text-gray-600 mb-2">The doctor you're looking for is not available.</p>
// //         <p className="text-sm text-gray-500 mb-1">Requested ID: <strong>{docId}</strong></p>
// //         <p className="text-sm text-gray-500 mb-4">
// //           Available IDs: {doctors.map(d => d._id || d.id).join(', ')}
// //         </p>
// //         <button
// //           onClick={() => window.history.back()}
// //           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// //         >
// //           Go Back to Doctors
// //         </button>
// //       </div>
// //     );
// //   }

// //   // Rest of your JSX remains the same...
// //   return (
// //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// //       {/* Backend Status */}
// //       <div className={`mb-4 p-4 rounded-lg border ${
// //         backendStatus === 'connected'
// //           ? 'bg-green-50 border-green-200 text-green-800'
// //           : 'bg-yellow-50 border-yellow-200 text-yellow-800'
// //       }`}>
// //         <p className="font-medium">
// //           {backendStatus === 'connected' ? '✅ Live data from backend' : '⚠️ Using local data'}
// //         </p>
// //       </div>

// //       {/* Rest of your JSX... */}
// //       <div className='flex flex-col lg:flex-row gap-8 mb-12'>
// //         <div className='lg:w-1/3'>
// //           <img
// //             src={docInfo.image}
// //             className='w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg'
// //             alt={docInfo.name}
// //           />
// //         </div>

// //         <div className='lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm'>
// //           <div className='flex items-center gap-3 mb-4'>
// //             <h1 className='text-3xl font-bold text-gray-900'>{docInfo.name}</h1>
// //             <img src={assets.verified_icon} className='w-6 h-6' alt="Verified" />
// //             {backendStatus === 'connected' && (
// //               <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
// //                 Live
// //               </span>
// //             )}
// //           </div>

// //           <div className='flex items-center gap-3 text-gray-600 mb-6'>
// //             <p className='text-lg'>{docInfo.degree} - {docInfo.speciality}</p>
// //             <span className='px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50'>
// //               {docInfo.experience}
// //             </span>
// //           </div>

// //           <div className='mb-6'>
// //             <div className='flex items-center gap-2 mb-3'>
// //               <span className='text-lg font-bold text-gray-900'>About</span>
// //               <img src={assets.info_icon} className='w-5 h-5' alt="Info" />
// //             </div>
// //             <p className='text-gray-600 leading-relaxed'>
// //               {docInfo.about}
// //             </p>
// //           </div>

// //           <div className='pt-4 border-t border-gray-200'>
// //             <p className='text-gray-700 font-medium'>
// //               Appointment Fee: <span className='text-2xl font-bold text-gray-900 ml-2'>₹{docInfo.fees}</span>
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Rest of your booking slots JSX... */}
// //     </div>
// //   );
// // }

// // export default Appointment;











// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets_frontend/assets";


// function Appointment() {
//    const { docId } = useParams();
//   const navigate = useNavigate();
//   const { doctors, backendStatus, bookAppointment, isAuthenticated, user, login } = useContext(AppContext);

//   const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [bookingLoading, setBookingLoading] = useState(false);
//   const [bookingMessage, setBookingMessage] = useState("");
//   const [notes, setNotes] = useState("");

//   console.log("=== APPOINTMENT COMPONENT DEBUG ===");
//   console.log("📌 docId from URL:", docId);
//   console.log("👨‍⚕️ Doctors array length:", doctors?.length);
//   console.log("🌐 Backend Status:", backendStatus);
//   console.log("🔐 User authenticated:", isAuthenticated());
//   console.log("👤 Current User:", user);

//   // Find doctor by ID
//   useEffect(() => {
//     console.log("🔄 SEARCHING FOR DOCTOR...");

//     if (doctors && doctors.length > 0) {
//       console.log("🔍 Looking for doctor with ID:", docId);

//       const foundDoctor = doctors.find(
//         (doc) =>
//           doc.id?.toString() === docId ||
//           doc._id?.toString() === docId ||
//           doc.doctorId?.toString() === docId
//       );

//       if (foundDoctor) {
//         console.log("🎉 DOCTOR FOUND:", foundDoctor.name);
//         setDocInfo(foundDoctor);
//       } else {
//         console.log("❌ DOCTOR NOT FOUND!");
//       }

//       setLoading(false);
//     } else {
//       console.log("❌ No doctors data available");
//       setLoading(false);
//     }
//   }, [doctors, docId]);

//   // Generate time slots
//   useEffect(() => {
//     if (docInfo) {
//       console.log("🕒 Generating time slots for:", docInfo.name);

//       let today = new Date();
//       let slots = [];

//       for (let i = 0; i < 7; i++) {
//         let currentDate = new Date(today);
//         currentDate.setDate(today.getDate() + i);

//         let startTime = new Date(currentDate);
//         startTime.setHours(9, 0, 0, 0);

//         let endTime = new Date(currentDate);
//         endTime.setHours(18, 0, 0, 0);

//         let timeSlots = [];
//         let currentSlot = new Date(startTime);

//         while (currentSlot < endTime) {
//           let timeString = currentSlot.toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit",
//             hour12: true,
//           });

//           timeSlots.push({
//             datetime: new Date(currentSlot),
//             time: timeString,
//           });

//           currentSlot.setMinutes(currentSlot.getMinutes() + 30);
//         }

//         slots.push(timeSlots);
//       }

//       setDocSlots(slots);
//     }
//   }, [docInfo]);

//   // Check authentication on component mount
//   useEffect(() => {
//     console.log("🔐 Checking authentication status on mount...");
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");
    
//     console.log("  - LocalStorage Token:", token ? "Exists" : "Missing");
//     console.log("  - LocalStorage User:", userData ? "Exists" : "Missing");
//     console.log("  - Context isAuthenticated:", isAuthenticated());
    
//     if (!isAuthenticated() && token && userData) {
//       console.log("🔄 Token exists but context not updated. User might need to refresh.");
//     }
//   }, []);

//   const handleBookAppointment = async () => {
//     console.log("🔐 AUTH CHECK BEFORE BOOKING:");
//     console.log("  - isAuthenticated():", isAuthenticated());
//     console.log("  - localStorage token:", localStorage.getItem("token") ? "Exists" : "Missing");
//     console.log("  - localStorage user:", localStorage.getItem("user") ? "Exists" : "Missing");
//     console.log("  - Context user:", user);

//     if (!slotTime || !docInfo) {
//       setBookingMessage("❌ Please select a time slot");
//       return;
//     }

//     // Enhanced authentication check
//     const token = localStorage.getItem("token");
//     const userData = localStorage.getItem("user");
    
//     if (!token || !userData) {
//       console.log("❌ No token or user data in localStorage");
//       setBookingMessage("❌ Please login to book an appointment");
//       setTimeout(() => {
//         navigate('/login', { 
//           state: { 
//             redirectTo: `/appointment/${docId}`,
//             message: "Please login to book your appointment"
//           }
//         });
//       }, 2000);
//       return;
//     }

//     if (!isAuthenticated()) {
//       console.log("❌ Context authentication failed but localStorage has data");
//       setBookingMessage("🔄 Session expired. Please wait...");
      
//       // Try to restore session from localStorage
//       try {
//         const parsedUser = JSON.parse(userData);
//         console.log("🔄 Attempting to restore session from localStorage...");
        
//         // You might need to update your context state here
//         // This is a temporary fix - the proper solution is in the context
//         setTimeout(() => {
//           if (isAuthenticated()) {
//             console.log("✅ Session restored, retrying booking...");
//             handleBookAppointment(); // Retry
//           } else {
//             setBookingMessage("❌ Please login again");
//             navigate('/login', { 
//               state: { 
//                 redirectTo: `/appointment/${docId}`,
//                 message: "Session expired. Please login again."
//               }
//             });
//           }
//         }, 1000);
//         return;
//       } catch (error) {
//         console.log("❌ Error restoring session:", error);
//         setBookingMessage("❌ Please login again");
//         navigate('/login');
//         return;
//       }
//     }

//     setBookingLoading(true);
//     setBookingMessage("");

//     try {
//       console.log("📅 Starting appointment booking process...");

//       // Calculate the selected date (slotIndex days from today)
//       const selectedDate = new Date();
//       selectedDate.setDate(selectedDate.getDate() + slotIndex);

//       // Parse the selected time
//       const [time, period] = slotTime.split(" ");
//       const [hours, minutes] = time.split(":");

//       let hour24 = parseInt(hours);
//       if (period === "PM" && hour24 !== 12) {
//         hour24 += 12;
//       } else if (period === "AM" && hour24 === 12) {
//         hour24 = 0;
//       }

//       // Set the date and time
//       selectedDate.setHours(hour24, parseInt(minutes), 0, 0);

//       const appointmentDateTime = selectedDate.toISOString();

//       console.log("📅 Final appointment datetime:", appointmentDateTime);
//       console.log("👨‍⚕️ Doctor:", docInfo.name);
//       console.log("👤 User:", user);

//       // Use the doctor's ID
//       const doctorId = docInfo.id || docInfo._id;
//       console.log("🎯 Using Doctor ID:", doctorId);

//       if (!doctorId) {
//         throw new Error("Doctor ID not found");
//       }

//       // Call the bookAppointment function
//       const result = await bookAppointment(
//         doctorId.toString(),
//         appointmentDateTime,
//         notes
//       );

//       if (result.success) {
//         setBookingMessage("✅ Appointment booked successfully! Redirecting...");
//         console.log("✅ Appointment booked:", result.data);

//         // Clear the form
//         setSlotTime("");
//         setNotes("");

//         setTimeout(() => {
//           navigate("/my-appointments");
//         }, 2000);
//       } else {
//         setBookingMessage(`❌ ${result.error}`);
//         console.error("❌ Booking failed:", result.error);
//       }
//     } catch (error) {
//       console.error("❌ Booking error:", error);
//       setBookingMessage("❌ Failed to book appointment. Please try again.");
//     } finally {
//       setBookingLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="max-w-6xl mx-auto p-6">
//         <div className="flex justify-center items-center min-h-64 flex-col">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
//           <p className="text-gray-600">Loading doctor information...</p>
//           <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
//         </div>
//       </div>
//     );
//   }

//   if (!docInfo) {
//     return (
//       <div className="max-w-6xl mx-auto p-6 text-center">
//         <div className="text-6xl mb-4">😕</div>
//         <h2 className="text-2xl font-bold text-red-600 mb-4">
//           Doctor Not Found
//         </h2>
//         <p className="text-gray-600 mb-2">
//           The doctor you're looking for is not available.
//         </p>
//         <p className="text-sm text-gray-500 mb-4">
//           Requested ID: <strong>{docId}</strong>
//         </p>
//         <button
//           onClick={() => navigate("/doctors")}
//           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//         >
//           Browse Doctors
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6">
//       {/* Backend Status */}
//       <div
//         className={`mb-6 p-4 rounded-lg border ${
//           backendStatus === "connected"
//             ? "bg-green-50 border-green-200 text-green-800"
//             : "bg-yellow-50 border-yellow-200 text-yellow-800"
//         }`}
//       >
//         <p className="font-medium">
//           {backendStatus === "connected"
//             ? "✅ Connected to backend"
//             : "⚠️ Using local data"}
//         </p>
//       </div>

//       {/* Doctor Information */}
//       <div className="flex flex-col lg:flex-row gap-8 mb-12">
//         <div className="lg:w-1/3">
//           <img
//             src={docInfo.image}
//             className="w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg"
//             alt={docInfo.name}
//           />
//         </div>

//         <div className="lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
//           <div className="flex items-center gap-3 mb-4">
//             <h1 className="text-3xl font-bold text-gray-900">{docInfo.name}</h1>
//             <img
//               src={assets.verified_icon}
//               className="w-6 h-6"
//               alt="Verified"
//             />
//             {backendStatus === "connected" && (
//               <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                 Live
//               </span>
//             )}
//           </div>

//           <div className="flex items-center gap-3 text-gray-600 mb-6">
//             <p className="text-lg">
//               {docInfo.degree} - {docInfo.speciality}
//             </p>
//             <span className="px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50">
//               {docInfo.experience}
//             </span>
//           </div>

//           <div className="mb-6">
//             <div className="flex items-center gap-2 mb-3">
//               <span className="text-lg font-bold text-gray-900">About</span>
//               <img src={assets.info_icon} className="w-5 h-5" alt="Info" />
//             </div>
//             <p className="text-gray-600 leading-relaxed">
//               {docInfo.about ||
//                 "Experienced doctor providing quality healthcare services."}
//             </p>
//           </div>

//           <div className="pt-4 border-t border-gray-200">
//             <p className="text-gray-700 font-medium">
//               Appointment Fee:{" "}
//               <span className="text-2xl font-bold text-gray-900 ml-2">
//                 ₹{docInfo.fees}
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Booking Section */}
//       <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
//         <h2 className="text-2xl font-bold text-gray-900 mb-6">
//           Book Appointment
//         </h2>
//         {/* Date Selection */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Select Date
//           </h3>
//           <div className="flex gap-4 overflow-x-auto pb-4">
//             {daysOfWeek.map((day, index) => {
//               const date = new Date();
//               date.setDate(date.getDate() + index);
//               const dateString = date.toLocaleDateString("en-US", {
//                 month: "short",
//                 day: "numeric",
//               });

//               return (
//                 <button
//                   key={index}
//                   onClick={() => setSlotIndex(index)}
//                   className={`flex flex-col items-center p-4 rounded-lg border-2 min-w-20 transition-all ${
//                     slotIndex === index
//                       ? "border-[#5f5FFF] bg-blue-50"
//                       : "border-gray-200 hover:border-gray-300"
//                   }`}
//                 >
//                   <span className="text-sm text-gray-600">{day}</span>
//                   <span className="font-semibold text-gray-800">
//                     {dateString}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//         {/* Time Slots */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Available Time Slots
//           </h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
//             {docSlots[slotIndex]?.map((slot, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSlotTime(slot.time)}
//                 className={`p-3 rounded-lg border-2 text-center transition-all ${
//                   slotTime === slot.time
//                     ? "border-[#5f5FFF] bg-blue-50 text-[#5f5FFF] font-semibold"
//                     : "border-gray-200 hover:border-gray-300 text-gray-700"
//                 }`}
//               >
//                 {slot.time}
//               </button>
//             ))}
//           </div>
//         </div>
//         {/* Additional Notes */}
//         <div className="mb-8">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Additional Notes (Optional)
//           </h3>
//           <textarea
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//             rows="3"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f5FFF] focus:border-transparent"
//             placeholder="Any specific concerns or symptoms you'd like to mention..."
//           />
//         </div>
//         {/* Booking Message */}
//         {bookingMessage && (
//           <div
//             className={`p-4 rounded-lg mb-6 ${
//               bookingMessage.includes("✅")
//                 ? "bg-green-50 border border-green-200 text-green-800"
//                 : "bg-red-50 border border-red-200 text-red-800"
//             }`}
//           >
//             {bookingMessage}
//           </div>
//         )}
//         {/* Book Button */}
//         <button
//           onClick={handleBookAppointment}
//           disabled={bookingLoading || !slotTime}
//           className="w-full bg-[#5f5FFF] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-[#4a4aff] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//         >
//           {bookingLoading
//             ? "Booking..."
//             : `Book Appointment - ₹${docInfo.fees}`}
//         </button>
//         // Add this temporarily to test the public endpoint
//         <button
//           onClick={async () => {
//             const result = await testPublicEndpoint();
//             if (result.success) {
//               alert("Public endpoint works! Check console for details.");
//             } else {
//               alert("Public endpoint failed: " + result.error);
//             }
//           }}
//           className="bg-green-500 text-white px-4 py-2 rounded mb-4"
//         >
//           Test Public Endpoint
//         </button>
//         {/* Debug Info - Remove in production */}
//         <div className="mt-6 bg-gray-50 p-4 rounded-lg">
//           <h4 className="font-semibold text-gray-700 mb-2">Debug Info:</h4>
//           <p className="text-sm">Selected Date: {slotIndex} days from today</p>
//           <p className="text-sm">Selected Time: {slotTime || "None"}</p>
//           <p className="text-sm">Doctor ID: {docInfo.id}</p>
//           <p className="text-sm">User: {user ? user.name : "Not logged in"}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Appointment;















import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";

function Appointment() {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors, backendStatus, bookAppointment, isAuthenticated, user, login } = useContext(AppContext);

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");
  const [notes, setNotes] = useState("");
  const [authChecked, setAuthChecked] = useState(false);

  console.log("=== APPOINTMENT COMPONENT DEBUG ===");
  console.log("📌 docId from URL:", docId);
  console.log("👨‍⚕️ Doctors array length:", doctors?.length);
  console.log("🌐 Backend Status:", backendStatus);
  console.log("🔐 User authenticated:", isAuthenticated());
  console.log("👤 Current User:", user);

  // Check authentication on component mount
  useEffect(() => {
    console.log("🔐 Checking authentication status on mount...");
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");
    
    console.log("  - LocalStorage Token:", token ? "Exists" : "Missing");
    console.log("  - LocalStorage User:", userData ? "Exists" : "Missing");
    console.log("  - Context isAuthenticated:", isAuthenticated());
    
    if (!isAuthenticated()) {
      if (token && userData) {
        console.log("🔄 Token exists but context not updated. Waiting for context...");
        // Wait a bit for context to potentially update
        setTimeout(() => {
          if (!isAuthenticated()) {
            console.log("❌ Still not authenticated, redirecting to login...");
            setBookingMessage("❌ Please login to book an appointment");
            setTimeout(() => {
              navigate('/login', { 
                state: { 
                  redirectTo: `/appointment/${docId}`,
                  message: "Please login to book your appointment"
                }
              });
            }, 1000);
          } else {
            console.log("✅ Authentication restored!");
            setAuthChecked(true);
          }
        }, 2000);
      } else {
        console.log("❌ No authentication data, redirecting to login...");
        setBookingMessage("❌ Please login to book an appointment");
        setTimeout(() => {
          navigate('/login', { 
            state: { 
              redirectTo: `/appointment/${docId}`,
              message: "Please login to book your appointment"
            }
          });
        }, 1000);
      }
    } else {
      console.log("✅ User is authenticated!");
      setAuthChecked(true);
    }
  }, [docId, navigate, isAuthenticated]);

  // Find doctor by ID - Only run if authenticated
  useEffect(() => {
    if (authChecked && isAuthenticated()) {
      console.log("🔄 SEARCHING FOR DOCTOR...");

      if (doctors && doctors.length > 0) {
        console.log("🔍 Looking for doctor with ID:", docId);
        
        // Log all available IDs for debugging
        console.log("📋 Available doctor IDs:", doctors.map(doc => ({
          name: doc.name,
          _id: doc._id,
          id: doc.id,
          doctorId: doc.doctorId
        })));

        const foundDoctor = doctors.find(
          (doc) =>
            doc.id?.toString() === docId ||
            doc._id?.toString() === docId ||
            doc.doctorId?.toString() === docId
        );

        if (foundDoctor) {
          console.log("🎉 DOCTOR FOUND:", foundDoctor.name);
          setDocInfo(foundDoctor);
        } else {
          console.log("❌ DOCTOR NOT FOUND!");
          console.log("🔍 Available IDs don't match:", docId);
        }

        setLoading(false);
      } else {
        console.log("❌ No doctors data available");
        setLoading(false);
      }
    }
  }, [doctors, docId, authChecked, isAuthenticated]);

  // Generate time slots
  useEffect(() => {
    if (docInfo) {
      console.log("🕒 Generating time slots for:", docInfo.name);

      let today = new Date();
      let slots = [];

      for (let i = 0; i < 7; i++) {
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        let startTime = new Date(currentDate);
        startTime.setHours(9, 0, 0, 0);

        let endTime = new Date(currentDate);
        endTime.setHours(18, 0, 0, 0);

        let timeSlots = [];
        let currentSlot = new Date(startTime);

        while (currentSlot < endTime) {
          let timeString = currentSlot.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          });

          timeSlots.push({
            datetime: new Date(currentSlot),
            time: timeString,
          });

          currentSlot.setMinutes(currentSlot.getMinutes() + 30);
        }

        slots.push(timeSlots);
      }

      setDocSlots(slots);
    }
  }, [docInfo]);

  const handleBookAppointment = async () => {
    console.log("🔐 AUTH CHECK BEFORE BOOKING:");
    console.log("  - isAuthenticated():", isAuthenticated());
    console.log("  - localStorage token:", localStorage.getItem("token") ? "Exists" : "Missing");
    console.log("  - localStorage user:", localStorage.getItem("user") ? "Exists" : "Missing");
    console.log("  - Context user:", user);

    if (!slotTime || !docInfo) {
      setBookingMessage("❌ Please select a time slot");
      return;
    }

    // Final authentication check
    if (!isAuthenticated()) {
      setBookingMessage("❌ Please login to book an appointment");
      setTimeout(() => {
        navigate('/login', { 
          state: { 
            redirectTo: `/appointment/${docId}`,
            message: "Please login to book your appointment"
          }
        });
      }, 1500);
      return;
    }

    setBookingLoading(true);
    setBookingMessage("");

    try {
      console.log("📅 Starting appointment booking process...");

      // Calculate the selected date (slotIndex days from today)
      const selectedDate = new Date();
      selectedDate.setDate(selectedDate.getDate() + slotIndex);

      // Parse the selected time
      const [time, period] = slotTime.split(" ");
      const [hours, minutes] = time.split(":");

      let hour24 = parseInt(hours);
      if (period === "PM" && hour24 !== 12) {
        hour24 += 12;
      } else if (period === "AM" && hour24 === 12) {
        hour24 = 0;
      }

      // Set the date and time
      selectedDate.setHours(hour24, parseInt(minutes), 0, 0);

      const appointmentDateTime = selectedDate.toISOString();

      console.log("📅 Final appointment datetime:", appointmentDateTime);
      console.log("👨‍⚕️ Doctor:", docInfo.name);
      console.log("👤 User:", user);

      // Use the doctor's ID
      const doctorId = docInfo.id || docInfo._id;
      console.log("🎯 Using Doctor ID:", doctorId);

      if (!doctorId) {
        throw new Error("Doctor ID not found");
      }

      // Call the bookAppointment function
      const result = await bookAppointment(
        doctorId.toString(),
        appointmentDateTime,
        notes
      );

      if (result.success) {
        setBookingMessage("✅ Appointment booked successfully! Redirecting...");
        console.log("✅ Appointment booked:", result.data);

        // Clear the form
        setSlotTime("");
        setNotes("");

        setTimeout(() => {
          navigate("/my-appointments");
        }, 2000);
      } else {
        setBookingMessage(`❌ ${result.error}`);
        console.error("❌ Booking failed:", result.error);
      }
    } catch (error) {
      console.error("❌ Booking error:", error);
      setBookingMessage("❌ Failed to book appointment. Please try again.");
    } finally {
      setBookingLoading(false);
    }
  };

  // Show loading while checking authentication
  if (!authChecked) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-center items-center min-h-64 flex-col">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
          <p className="text-gray-600">Checking authentication...</p>
          {bookingMessage && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
              {bookingMessage}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-center items-center min-h-64 flex-col">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
          <p className="text-gray-600">Loading doctor information...</p>
          <p className="text-sm text-gray-500 mt-2">Doctor ID: {docId}</p>
        </div>
      </div>
    );
  }

  if (!docInfo) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Doctor Not Found
        </h2>
        <p className="text-gray-600 mb-2">
          The doctor you're looking for is not available.
        </p>
        <p className="text-sm text-gray-500 mb-4">
          Requested ID: <strong>{docId}</strong>
        </p>
        <button
          onClick={() => navigate("/doctors")}
          className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
        >
          Browse Doctors
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Backend Status */}
      <div
        className={`mb-6 p-4 rounded-lg border ${
          backendStatus === "connected"
            ? "bg-green-50 border-green-200 text-green-800"
            : "bg-yellow-50 border-yellow-200 text-yellow-800"
        }`}
      >
        <p className="font-medium">
          {backendStatus === "connected"
            ? "✅ Connected to backend"
            : "⚠️ Using local data"}
        </p>
      </div>

      {/* Authentication Status */}
      <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg">
        <p className="font-medium">
          ✅ Welcome, {user?.name}! You are logged in and can book appointments.
        </p>
      </div>

      {/* Doctor Information */}
      <div className="flex flex-col lg:flex-row gap-8 mb-12">
        <div className="lg:w-1/3">
          <img
            src={docInfo.image}
            className="w-full max-w-sm rounded-2xl bg-gray-100 shadow-lg"
            alt={docInfo.name}
          />
        </div>

        <div className="lg:w-2/3 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{docInfo.name}</h1>
            <img
              src={assets.verified_icon}
              className="w-6 h-6"
              alt="Verified"
            />
            {backendStatus === "connected" && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Live
              </span>
            )}
          </div>

          <div className="flex items-center gap-3 text-gray-600 mb-6">
            <p className="text-lg">
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <span className="px-3 py-1 border border-gray-300 rounded-full text-sm bg-gray-50">
              {docInfo.experience}
            </span>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg font-bold text-gray-900">About</span>
              <img src={assets.info_icon} className="w-5 h-5" alt="Info" />
            </div>
            <p className="text-gray-600 leading-relaxed">
              {docInfo.about ||
                "Experienced doctor providing quality healthcare services."}
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-gray-700 font-medium">
              Appointment Fee:{" "}
              <span className="text-2xl font-bold text-gray-900 ml-2">
                ₹{docInfo.fees}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Book Appointment
        </h2>
        
        {/* Date Selection */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Select Date
          </h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {daysOfWeek.map((day, index) => {
              const date = new Date();
              date.setDate(date.getDate() + index);
              const dateString = date.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              });

              return (
                <button
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`flex flex-col items-center p-4 rounded-lg border-2 min-w-20 transition-all ${
                    slotIndex === index
                      ? "border-[#5f5FFF] bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm text-gray-600">{day}</span>
                  <span className="font-semibold text-gray-800">
                    {dateString}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Time Slots */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Available Time Slots
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {docSlots[slotIndex]?.map((slot, index) => (
              <button
                key={index}
                onClick={() => setSlotTime(slot.time)}
                className={`p-3 rounded-lg border-2 text-center transition-all ${
                  slotTime === slot.time
                    ? "border-[#5f5FFF] bg-blue-50 text-[#5f5FFF] font-semibold"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                {slot.time}
              </button>
            ))}
          </div>
        </div>

        {/* Additional Notes */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Additional Notes (Optional)
          </h3>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows="3"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5f5FFF] focus:border-transparent"
            placeholder="Any specific concerns or symptoms you'd like to mention..."
          />
        </div>

        {/* Booking Message */}
        {bookingMessage && (
          <div
            className={`p-4 rounded-lg mb-6 ${
              bookingMessage.includes("✅")
                ? "bg-green-50 border border-green-200 text-green-800"
                : bookingMessage.includes("❌")
                ? "bg-red-50 border border-red-200 text-red-800"
                : "bg-yellow-50 border border-yellow-200 text-yellow-800"
            }`}
          >
            {bookingMessage}
          </div>
        )}

        {/* Book Button */}
        <button
          onClick={handleBookAppointment}
          disabled={bookingLoading || !slotTime}
          className="w-full bg-[#5f5FFF] text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-[#4a4aff] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {bookingLoading
            ? "Booking..."
            : `Book Appointment - ₹${docInfo.fees}`}
        </button>

        {/* Debug Info - Remove in production */}
        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-700 mb-2">Debug Info:</h4>
          <p className="text-sm">Selected Date: {slotIndex} days from today</p>
          <p className="text-sm">Selected Time: {slotTime || "None"}</p>
          <p className="text-sm">Doctor ID: {docInfo._id || docInfo.id}</p>
          <p className="text-sm">User: {user ? user.name : "Not logged in"}</p>
          <p className="text-sm">Authenticated: {isAuthenticated() ? "Yes" : "No"}</p>
        </div>
      </div>
    </div>
  );
}

export default Appointment;