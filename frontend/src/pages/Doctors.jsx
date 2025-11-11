// // // // // // import React, { useContext, useEffect, useState } from "react";
// // // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // // import { AppContext } from "../context/AppContext";

// // // // // // const Doctors = () => {
// // // // // //   const { speciality } = useParams();
// // // // // //   const navigate = useNavigate();

// // // // // //   const { doctors } = useContext(AppContext);

// // // // // //   const [filterDoc, setFilterDoc] = useState([]);

// // // // // //   const [showfilter, setShowFilter] = useState(false);

// // // // // //   const applyFilter = () => {
// // // // // //     if (speciality) {
// // // // // //       setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
// // // // // //     } else {
// // // // // //       setFilterDoc(doctors);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     applyFilter();
// // // // // //   }, [doctors, speciality]);

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <p className="text-gray-600">Browse through the doctors specialist.</p>
// // // // // //       <div className="flex flex-col md:flex-row justify-between items-start gap-5 mt-5">
// // // // // //         <button
// // // // // //           onClick={() => setShowFilter((prev) => !prev)}
// // // // // //           className={`py-1 px-3 border rounded text-sm transition-all sm:hidden  ${
// // // // // //             showfilter ? "bg-[#5f5fff] text-white" : ""
// // // // // //           } cursor-pointer`}
// // // // // //         >
// // // // // //           Filters
// // // // // //         </button>

// // // // // //         <div
// // // // // //           className={`flex flex-col gap-4 text-gray-600 ${
// // // // // //             showfilter ? "flex" : "hidden sm:flex"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <p
// // // // // //             onClick={() => {
// // // // // //               navigate("/doctors/General physician");
// // // // // //               window.scrollTo(0, 0);
// // // // // //             }}
// // // // // //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
// // // // // //               speciality === "General physician"
// // // // // //                 ? "bg-blue-100 border-blue-400"
// // // // // //                 : ""
// // // // // //             }`}
// // // // // //           >
// // // // // //             General physician
// // // // // //           </p>

// // // // // //           <p
// // // // // //             onClick={() => {
// // // // // //               navigate("/doctors/Gynecologist");
// // // // // //               window.scrollTo(0, 0);
// // // // // //             }}
// // // // // //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
// // // // // //               speciality === "Gynecologist" ? "bg-blue-100 border-blue-400" : ""
// // // // // //             }`}
// // // // // //           >
// // // // // //             Gynecologist
// // // // // //           </p>

// // // // // //           <p
// // // // // //             onClick={() => {
// // // // // //               navigate("/doctors/Dermatologist");
// // // // // //               window.scrollTo(0, 0);
// // // // // //             }}
// // // // // //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
// // // // // //               speciality === "Dermatologist"
// // // // // //                 ? "bg-blue-100 border-blue-400"
// // // // // //                 : ""
// // // // // //             }`}
// // // // // //           >
// // // // // //             Dermatologist
// // // // // //           </p>

// // // // // //           <p
// // // // // //             onClick={() => {
// // // // // //               navigate("/doctors/Pediatricians");
// // // // // //               window.scrollTo(0, 0);
// // // // // //             }}
// // // // // //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
// // // // // //               speciality === "Pediatricians"
// // // // // //                 ? "bg-blue-100 border-blue-400"
// // // // // //                 : ""
// // // // // //             }`}
// // // // // //           >
// // // // // //             Pediatricians
// // // // // //           </p>

// // // // // //           <p
// // // // // //             onClick={() => {
// // // // // //               navigate("/doctors/Neurologist");
// // // // // //               window.scrollTo(0, 0);
// // // // // //             }}
// // // // // //             className={`w-[94vw] sm:w-auto pl-3  py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
// // // // // //               speciality === "Neurologist" ? "bg-blue-100 border-blue-400" : ""
// // // // // //             }`}
// // // // // //           >
// // // // // //             Neurologist
// // // // // //           </p>

// // // // // //           <p
// // // // // //             onClick={() => {
// // // // // //               navigate("/doctors/Gastroenterologist");
// // // // // //               window.scrollTo(0, 0);
// // // // // //             }}
// // // // // //             className={`w-[94vw] sm:w-auto pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer ${
// // // // // //               speciality === "Gastroenterologist"
// // // // // //                 ? "bg-blue-100 border-blue-400"
// // // // // //                 : ""
// // // // // //             }`}
// // // // // //           >
// // // // // //             Gastroenterologist
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Doctors Grid */}
// // // // // //         {/* <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4"> */}
// // // // // //         <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // // // // //           {filterDoc.map((item, index) => (
// // // // // //             // <div
// // // // // //             //   onClick={() => navigate(`/appointment/${item._id}`)}
// // // // // //             //   key={index}
// // // // // //             //   className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer
// // // // // //             //            hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
// // // // // //             // >
// // // // // //             //   <img
// // // // // //             //     src={item.image}
// // // // // //             //     alt={item.name}
// // // // // //             //     className="w-full object-cover bg-blue-50"
// // // // // //             //   />
// // // // // //             //   <div className="p-4">
// // // // // //             //     <div className="flex flex-row gap-2 items-center text-green-500 text-sm">
// // // // // //             //       <span className="h-2 w-2 rounded-full bg-green-500"></span>
// // // // // //             //       <p>Available</p>
// // // // // //             //     </div>
// // // // // //             //     <div className="mt-2 flex flex-col items-start text-left">
// // // // // //             //       <p className="font-semibold text-gray-800">{item.name}</p>
// // // // // //             //       <p className="text-gray-500 text-sm">{item.speciality}</p>
// // // // // //             //     </div>
// // // // // //             //   </div>
// // // // // //             // </div>

// // // // // //             <div
// // // // // //               onClick={() => navigate(`/appointment/${item._id}`)}
// // // // // //               key={index}
// // // // // //               className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 hover:shadow-lg transition-all duration-500"
// // // // // //             >
// // // // // //               <img
// // // // // //                 src={item.image}
// // // // // //                 alt={item.name}
// // // // // //                 className="w-full object-cover bg-blue-50"
// // // // // //               />
// // // // // //               <div className="p-4">
// // // // // //                 <div className="flex flex-row gap-2 items-center text-green-500 text-sm">
// // // // // //                   <span className="h-2 w-2 rounded-full bg-green-500"></span>
// // // // // //                   <p>Available</p>
// // // // // //                 </div>
// // // // // //                 <div className="mt-2 flex flex-col items-start text-left">
// // // // // //                   <p className="font-semibold text-gray-800">{item.name}</p>
// // // // // //                   <p className="text-gray-500 text-sm">{item.speciality}</p>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default Doctors;

// // // // // // import React, { useContext, useState, useEffect } from 'react'
// // // // // // import { useNavigate } from 'react-router-dom'
// // // // // // import { AppContext } from '../context/AppContext'
// // // // // // import { assets } from '../assets/assets_frontend/assets'

// // // // // // function Doctors() {
// // // // // //   const { doctors } = useContext(AppContext)
// // // // // //   const navigate = useNavigate()

// // // // // //   const [searchTerm, setSearchTerm] = useState('')
// // // // // //   const [selectedSpeciality, setSelectedSpeciality] = useState('All')
// // // // // //   const [filteredDoctors, setFilteredDoctors] = useState([])
// // // // // //   const [loading, setLoading] = useState(true)

// // // // // //   // Get unique specialities for filter
// // // // // //   const specialities = ['All', ...new Set(doctors.map(doc => doc.speciality))]

// // // // // //   // Filter doctors based on search and speciality
// // // // // //   useEffect(() => {
// // // // // //     setLoading(true)

// // // // // //     let filtered = doctors

// // // // // //     // Filter by search term
// // // // // //     if (searchTerm) {
// // // // // //       filtered = filtered.filter(doc =>
// // // // // //         doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         doc.speciality.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // // // // //         doc.degree.toLowerCase().includes(searchTerm.toLowerCase())
// // // // // //       )
// // // // // //     }

// // // // // //     // Filter by speciality
// // // // // //     if (selectedSpeciality !== 'All') {
// // // // // //       filtered = filtered.filter(doc => doc.speciality === selectedSpeciality)
// // // // // //     }

// // // // // //     setFilteredDoctors(filtered)
// // // // // //     setLoading(false)
// // // // // //   }, [doctors, searchTerm, selectedSpeciality])

// // // // // //   const handleDoctorClick = (doctorId) => {
// // // // // //     navigate(`/appointment/${doctorId}`)
// // // // // //   }

// // // // // //   const handleBookAppointment = (doctorId, e) => {
// // // // // //     e.stopPropagation() // Prevent navigating to doctor detail when clicking book button
// // // // // //     navigate(`/appointment/${doctorId}`)
// // // // // //   }

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="flex justify-center items-center min-h-64">
// // // // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="max-w-7xl mx-auto p-4 md:p-6">
// // // // // //       {/* Header Section */}
// // // // // //       <div className="text-center mb-8">
// // // // // //         <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
// // // // // //           Find Your Doctor
// // // // // //         </h1>
// // // // // //         <p className="text-gray-600 max-w-2xl mx-auto">
// // // // // //           Book appointments with the best healthcare professionals. Choose from our verified doctors.
// // // // // //         </p>
// // // // // //       </div>

// // // // // //       {/* Search and Filter Section */}
// // // // // //       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
// // // // // //         <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
// // // // // //           {/* Search Input */}
// // // // // //           <div className="flex-1 w-full md:max-w-md">
// // // // // //             <div className="relative">
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Search doctors by name, speciality, or degree..."
// // // // // //                 value={searchTerm}
// // // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // // //                 className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]"
// // // // // //               />
// // // // // //               <img
// // // // // //                 src={assets.search_icon}
// // // // // //                 alt="Search"
// // // // // //                 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
// // // // // //               />
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           {/* Speciality Filter */}
// // // // // //           <div className="w-full md:w-auto">
// // // // // //             <select
// // // // // //               value={selectedSpeciality}
// // // // // //               onChange={(e) => setSelectedSpeciality(e.target.value)}
// // // // // //               className="w-full md:w-48 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF] bg-white"
// // // // // //             >
// // // // // //               {specialities.map((speciality, index) => (
// // // // // //                 <option key={index} value={speciality}>
// // // // // //                   {speciality}
// // // // // //                 </option>
// // // // // //               ))}
// // // // // //             </select>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Results Count */}
// // // // // //         <div className="mt-4 text-sm text-gray-600">
// // // // // //           Showing {filteredDoctors.length} of {doctors.length} doctors
// // // // // //           {searchTerm && ` for "${searchTerm}"`}
// // // // // //           {selectedSpeciality !== 'All' && ` in ${selectedSpeciality}`}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Doctors Grid */}
// // // // // //       {filteredDoctors.length === 0 ? (
// // // // // //         <div className="text-center py-12">
// // // // // //           <img
// // // // // //             src={assets.search_icon}
// // // // // //             alt="No doctors found"
// // // // // //             className="w-16 h-16 mx-auto mb-4 opacity-50"
// // // // // //           />
// // // // // //           <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
// // // // // //           <p className="text-gray-500">
// // // // // //             Try adjusting your search criteria or browse all specialities.
// // // // // //           </p>
// // // // // //           <button
// // // // // //             onClick={() => {
// // // // // //               setSearchTerm('')
// // // // // //               setSelectedSpeciality('All')
// // // // // //             }}
// // // // // //             className="mt-4 bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // // // // //           >
// // // // // //             Show All Doctors
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       ) : (
// // // // // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// // // // // //           {filteredDoctors.map((doctor) => (
// // // // // //             <div
// // // // // //               key={doctor._id}
// // // // // //               onClick={() => handleDoctorClick(doctor._id)}
// // // // // //               className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300 cursor-pointer group"
// // // // // //             >
// // // // // //               {/* Doctor Image */}
// // // // // //               <div className="relative h-48 bg-gray-100 overflow-hidden">
// // // // // //                 <img
// // // // // //                   src={doctor.image}
// // // // // //                   alt={doctor.name}
// // // // // //                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// // // // // //                 />
// // // // // //                 <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
// // // // // //                   <img src={assets.verified_icon} alt="Verified" className="w-5 h-5" />
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               {/* Doctor Info */}
// // // // // //               <div className="p-4">
// // // // // //                 <div className="flex items-start justify-between mb-2">
// // // // // //                   <div className="flex-1">
// // // // // //                     <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#5f5FFF] transition-colors">
// // // // // //                       {doctor.name}
// // // // // //                     </h3>
// // // // // //                     <p className="text-sm text-gray-600 mt-1">
// // // // // //                       {doctor.degree}
// // // // // //                     </p>
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 <div className="flex items-center justify-between mb-3">
// // // // // //                   <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
// // // // // //                     {doctor.speciality}
// // // // // //                   </span>
// // // // // //                   <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
// // // // // //                     {doctor.experience} exp
// // // // // //                   </span>
// // // // // //                 </div>

// // // // // //                 <p className="text-sm text-gray-600 line-clamp-2 mb-3">
// // // // // //                   {doctor.about && doctor.about.length > 100
// // // // // //                     ? `${doctor.about.substring(0, 100)}...`
// // // // // //                     : doctor.about}
// // // // // //                 </p>

// // // // // //                 <div className="flex items-center justify-between">
// // // // // //                   <div className="text-sm font-semibold text-gray-900">
// // // // // //                     ₹{doctor.fees}
// // // // // //                   </div>
// // // // // //                   <button
// // // // // //                     onClick={(e) => handleBookAppointment(doctor._id, e)}
// // // // // //                     className="bg-[#5f5FFF] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#4a4aff] transition-colors"
// // // // // //                   >
// // // // // //                     Book Now
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Speciality Categories */}
// // // // // //       <div className="mt-12">
// // // // // //         <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
// // // // // //           Browse by Speciality
// // // // // //         </h2>
// // // // // //         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
// // // // // //           {specialities.filter(spec => spec !== 'All').map((speciality, index) => (
// // // // // //             <button
// // // // // //               key={index}
// // // // // //               onClick={() => setSelectedSpeciality(speciality)}
// // // // // //               className={`p-4 rounded-lg border-2 text-center transition-all duration-200 ${
// // // // // //                 selectedSpeciality === speciality
// // // // // //                   ? 'border-[#5f5FFF] bg-blue-50 text-[#5f5FFF]'
// // // // // //                   : 'border-gray-200 bg-white text-gray-700 hover:border-[#5f5FFF] hover:text-[#5f5FFF]'
// // // // // //               }`}
// // // // // //             >
// // // // // //               <div className="font-medium text-sm">{speciality}</div>
// // // // // //             </button>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default Doctors

// // // // // import React, { useContext, useEffect, useState } from "react";
// // // // // import { useParams, useNavigate } from "react-router-dom";
// // // // // import { AppContext } from "../context/AppContext";

// // // // // const Doctors = () => {
// // // // //   const { speciality } = useParams();
// // // // //   const navigate = useNavigate();
// // // // //   const { doctors } = useContext(AppContext);
// // // // //   const [filterDoc, setFilterDoc] = useState([]);
// // // // //   const [showfilter, setShowFilter] = useState(false);

// // // // //   const applyFilter = () => {
// // // // //     if (speciality) {
// // // // //       setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
// // // // //     } else {
// // // // //       setFilterDoc(doctors);
// // // // //     }
// // // // //   };

// // // // //   useEffect(() => {
// // // // //     applyFilter();
// // // // //   }, [doctors, speciality]);

// // // // //   const handleDoctorClick = (doctorId) => {
// // // // //     console.log("Navigating to doctor:", doctorId);
// // // // //     navigate(`/appointment/${doctorId}`);
// // // // //   };

// // // // //   return (
// // // // //     <div className="max-w-7xl mx-auto">
// // // // //       <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Doctors</h1>
// // // // //       <p className="text-gray-600 mb-8">Browse through the doctors specialist.</p>

// // // // //       <div className="flex flex-col md:flex-row justify-between items-start gap-8">
// // // // //         {/* Filters Sidebar */}
// // // // //         <div className="w-full md:w-64">
// // // // //           <button
// // // // //             onClick={() => setShowFilter((prev) => !prev)}
// // // // //             className={`w-full py-3 px-4 border-2 rounded-lg text-sm font-medium transition-all sm:hidden mb-4 ${
// // // // //               showfilter ? "bg-[#5f5fff] text-white border-[#5f5fff]" : "border-gray-300 text-gray-700"
// // // // //             }`}
// // // // //           >
// // // // //             {showfilter ? "Hide Filters" : "Show Filters"}
// // // // //           </button>

// // // // //           <div className={`bg-white rounded-lg border border-gray-200 p-4 ${showfilter ? "block" : "hidden sm:block"}`}>
// // // // //             <h3 className="font-semibold text-gray-900 mb-4">Specialities</h3>
// // // // //             <div className="space-y-2">
// // // // //               {[
// // // // //                 "General physician",
// // // // //                 "Gynecologist",
// // // // //                 "Dermatologist",
// // // // //                 "Pediatricians",
// // // // //                 "Neurologist",
// // // // //                 "Gastroenterologist"
// // // // //               ].map((spec) => (
// // // // //                 <p
// // // // //                   key={spec}
// // // // //                   onClick={() => {
// // // // //                     navigate(`/doctors/${spec}`);
// // // // //                     setShowFilter(false);
// // // // //                     window.scrollTo(0, 0);
// // // // //                   }}
// // // // //                   className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// // // // //                     speciality === spec
// // // // //                       ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// // // // //                       : "text-gray-600 hover:bg-gray-100"
// // // // //                   }`}
// // // // //                 >
// // // // //                   {spec}
// // // // //                 </p>
// // // // //               ))}

// // // // //               {/* Show All Doctors */}
// // // // //               <p
// // // // //                 onClick={() => {
// // // // //                   navigate("/doctors");
// // // // //                   setShowFilter(false);
// // // // //                   window.scrollTo(0, 0);
// // // // //                 }}
// // // // //                 className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// // // // //                   !speciality
// // // // //                     ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// // // // //                     : "text-gray-600 hover:bg-gray-100"
// // // // //                 }`}
// // // // //               >
// // // // //                 All Doctors
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Doctors Grid */}
// // // // //         <div className="flex-1">
// // // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //             {filterDoc.map((doctor, index) => (
// // // // //               <div
// // // // //                 key={doctor._id}
// // // // //                 onClick={() => handleDoctorClick(doctor._id)}
// // // // //                 className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#5f5fff] transition-all duration-300 group"
// // // // //               >
// // // // //                 {/* Doctor Image */}
// // // // //                 <div className="h-48 bg-gray-100 overflow-hidden">
// // // // //                   <img
// // // // //                     src={doctor.image}
// // // // //                     alt={doctor.name}
// // // // //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// // // // //                   />
// // // // //                 </div>

// // // // //                 {/* Doctor Info */}
// // // // //                 <div className="p-4">
// // // // //                   {/* Availability Badge */}
// // // // //                   <div className="flex items-center gap-2 text-green-600 text-xs font-medium mb-3">
// // // // //                     <span className="h-2 w-2 rounded-full bg-green-500"></span>
// // // // //                     Available Today
// // // // //                   </div>

// // // // //                   {/* Doctor Name and Speciality */}
// // // // //                   <div className="mb-3">
// // // // //                     <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#5f5fff] transition-colors">
// // // // //                       {doctor.name}
// // // // //                     </h3>
// // // // //                     <p className="text-gray-600 text-sm mt-1">{doctor.speciality}</p>
// // // // //                     <p className="text-gray-500 text-xs">{doctor.degree}</p>
// // // // //                   </div>

// // // // //                   {/* Experience and Rating */}
// // // // //                   <div className="flex items-center justify-between mb-3">
// // // // //                     <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
// // // // //                       {doctor.experience} experience
// // // // //                     </span>
// // // // //                   </div>

// // // // //                   {/* Fee and Book Button */}
// // // // //                   <div className="flex items-center justify-between pt-3 border-t border-gray-100">
// // // // //                     <div>
// // // // //                       <p className="text-xs text-gray-500">Appointment Fee</p>
// // // // //                       <p className="font-semibold text-gray-900">₹{doctor.fees}</p>
// // // // //                     </div>
// // // // //                     <button
// // // // //                       onClick={(e) => {
// // // // //                         e.stopPropagation();
// // // // //                         handleDoctorClick(doctor._id);
// // // // //                       }}
// // // // //                       className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a4aff] transition-colors"
// // // // //                     >
// // // // //                       Book Now
// // // // //                     </button>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* No Doctors Found */}
// // // // //           {filterDoc.length === 0 && (
// // // // //             <div className="text-center py-12">
// // // // //               <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
// // // // //               <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
// // // // //               <p className="text-gray-500 mb-4">
// // // // //                 {speciality
// // // // //                   ? `No ${speciality} doctors available at the moment.`
// // // // //                   : "No doctors available at the moment."
// // // // //                 }
// // // // //               </p>
// // // // //               <button
// // // // //                 onClick={() => navigate("/doctors")}
// // // // //                 className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // // // //               >
// // // // //                 View All Doctors
// // // // //               </button>
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //             // In your Doctors component, add a test section:
// // // // // <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 rounded">
// // // // //   <h3 className="font-bold">Debug Navigation</h3>
// // // // //   <p>Test links:</p>
// // // // //   <button
// // // // //     onClick={() => navigate('/appointment/doc1')}
// // // // //     className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
// // // // //   >
// // // // //     Test doc1
// // // // //   </button>
// // // // //   <button
// // // // //     onClick={() => navigate('/appointment/doc2')}
// // // // //     className="bg-blue-500 text-white px-4 py-2 rounded"
// // // // //   >
// // // // //     Test doc2
// // // // //   </button>
// // // // // </div>

// // // // //     </div>

// // // // //   );
// // // // // };

// // // // // export default Doctors;

// // // // import React, { useContext, useEffect, useState } from "react";
// // // // import { useParams, useNavigate } from "react-router-dom";
// // // // import { AppContext } from "../context/AppContext";

// // // // const Doctors = () => {
// // // //   const { speciality } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const { doctors, loading } = useContext(AppContext);
// // // //   const [filterDoc, setFilterDoc] = useState([]);
// // // //   const [showfilter, setShowFilter] = useState(false);

// // // //   console.log("🔄 Doctors Component - Loading:", loading);
// // // //   console.log("👨‍⚕️ Doctors data:", doctors);
// // // //   console.log("🎯 Speciality filter:", speciality);

// // // //   const applyFilter = () => {
// // // //     if (speciality) {
// // // //       const filtered = doctors.filter((doc) => doc.speciality === speciality);
// // // //       console.log(`🔍 Filtered ${filtered.length} doctors for ${speciality}`);
// // // //       setFilterDoc(filtered);
// // // //     } else {
// // // //       console.log(`📋 Showing all ${doctors.length} doctors`);
// // // //       setFilterDoc(doctors);
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (doctors.length > 0) {
// // // //       applyFilter();
// // // //     }
// // // //   }, [doctors, speciality]);

// // // //   const handleDoctorClick = (doctorId) => {
// // // //     console.log("🎯 Clicked doctor ID:", doctorId);
// // // //     console.log("🔄 Navigating to:", `/appointment/${doctorId}`);
// // // //     navigate(`/appointment/${doctorId}`);
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="max-w-7xl mx-auto p-6">
// // // //         <div className="flex justify-center items-center min-h-64">
// // // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="max-w-7xl mx-auto p-4 md:p-6">
// // // //       <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Doctors</h1>
// // // //       <p className="text-gray-600 mb-8">Browse through the doctors specialist.</p>

// // // //       {/* Debug Info */}
// // // //       <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
// // // //         <p className="text-sm text-blue-700">
// // // //           <strong>Debug:</strong> {doctors.length} doctors loaded | {filterDoc.length} filtered
// // // //         </p>
// // // //         <p className="text-xs text-blue-600 mt-1">
// // // //           Available IDs: {doctors.map(d => d._id).join(', ')}
// // // //         </p>
// // // //       </div>

// // // //       <div className="flex flex-col md:flex-row gap-8">
// // // //         {/* Filters Sidebar */}
// // // //         <div className="w-full md:w-64">
// // // //           <button
// // // //             onClick={() => setShowFilter((prev) => !prev)}
// // // //             className={`w-full py-3 px-4 border-2 rounded-lg text-sm font-medium transition-all sm:hidden mb-4 ${
// // // //               showfilter ? "bg-[#5f5fff] text-white border-[#5f5fff]" : "border-gray-300 text-gray-700"
// // // //             }`}
// // // //           >
// // // //             {showfilter ? "Hide Filters" : "Show Filters"}
// // // //           </button>

// // // //           <div className={`bg-white rounded-lg border border-gray-200 p-4 ${showfilter ? "block" : "hidden sm:block"}`}>
// // // //             <h3 className="font-semibold text-gray-900 mb-4">Specialities</h3>
// // // //             <div className="space-y-2">
// // // //               {[
// // // //                 "General physician",
// // // //                 "Gynecologist",
// // // //                 "Dermatologist",
// // // //                 "Pediatricians",
// // // //                 "Neurologist",
// // // //                 "Gastroenterologist"
// // // //               ].map((spec) => (
// // // //                 <p
// // // //                   key={spec}
// // // //                   onClick={() => {
// // // //                     navigate(`/doctors/${spec}`);
// // // //                     setShowFilter(false);
// // // //                     window.scrollTo(0, 0);
// // // //                   }}
// // // //                   className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// // // //                     speciality === spec
// // // //                       ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// // // //                       : "text-gray-600 hover:bg-gray-100"
// // // //                   }`}
// // // //                 >
// // // //                   {spec}
// // // //                 </p>
// // // //               ))}

// // // //               <p
// // // //                 onClick={() => {
// // // //                   navigate("/doctors");
// // // //                   setShowFilter(false);
// // // //                   window.scrollTo(0, 0);
// // // //                 }}
// // // //                 className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// // // //                   !speciality
// // // //                     ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// // // //                     : "text-gray-600 hover:bg-gray-100"
// // // //                 }`}
// // // //               >
// // // //                 All Doctors
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Doctors Grid */}
// // // //         <div className="flex-1">
// // // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //             {filterDoc.map((doctor) => (
// // // //               <div
// // // //                 key={doctor._id}
// // // //                 onClick={() => handleDoctorClick(doctor._id)}
// // // //                 className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#5f5fff] transition-all duration-300 group"
// // // //               >
// // // //                 {/* Doctor Image */}
// // // //                 <div className="h-48 bg-gray-100 overflow-hidden">
// // // //                   <img
// // // //                     src={doctor.image}
// // // //                     alt={doctor.name}
// // // //                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// // // //                   />
// // // //                 </div>

// // // //                 {/* Doctor Info */}
// // // //                 <div className="p-4">
// // // //                   {/* Availability Badge */}
// // // //                   <div className="flex items-center gap-2 text-green-600 text-xs font-medium mb-3">
// // // //                     <span className="h-2 w-2 rounded-full bg-green-500"></span>
// // // //                     Available Today
// // // //                   </div>

// // // //                   {/* Doctor Name and Speciality */}
// // // //                   <div className="mb-3">
// // // //                     <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#5f5fff] transition-colors">
// // // //                       {doctor.name}
// // // //                     </h3>
// // // //                     <p className="text-gray-600 text-sm mt-1">{doctor.speciality}</p>
// // // //                     <p className="text-gray-500 text-xs">{doctor.degree}</p>
// // // //                   </div>

// // // //                   {/* Experience */}
// // // //                   <div className="flex items-center justify-between mb-3">
// // // //                     <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
// // // //                       {doctor.experience} experience
// // // //                     </span>
// // // //                   </div>

// // // //                   {/* Fee and Book Button */}
// // // //                   <div className="flex items-center justify-between pt-3 border-t border-gray-100">
// // // //                     <div>
// // // //                       <p className="text-xs text-gray-500">Appointment Fee</p>
// // // //                       <p className="font-semibold text-gray-900">₹{doctor.fees}</p>
// // // //                     </div>
// // // //                     <button
// // // //                       onClick={(e) => {
// // // //                         e.stopPropagation();
// // // //                         handleDoctorClick(doctor._id);
// // // //                       }}
// // // //                       className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a4aff] transition-colors"
// // // //                     >
// // // //                       Book Now
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* No Doctors Found */}
// // // //           {filterDoc.length === 0 && !loading && (
// // // //             <div className="text-center py-12">
// // // //               <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
// // // //               <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
// // // //               <p className="text-gray-500 mb-4">
// // // //                 {speciality
// // // //                   ? `No ${speciality} doctors available at the moment.`
// // // //                   : "No doctors available at the moment."
// // // //                 }
// // // //               </p>
// // // //               <button
// // // //                 onClick={() => navigate("/doctors")}
// // // //                 className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // // //               >
// // // //                 View All Doctors
// // // //               </button>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Doctors;

// // // import React, { useContext, useEffect, useState } from "react";
// // // import { useParams, useNavigate } from "react-router-dom";
// // // import { AppContext } from "../context/AppContext";

// // // const Doctors = () => {
// // //   const { speciality } = useParams();
// // //   const navigate = useNavigate();
// // //   const { doctors, loading } = useContext(AppContext);
// // //   const [filterDoc, setFilterDoc] = useState([]);

// // //   console.log("=== DOCTORS COMPONENT ===");
// // //   console.log("📊 Doctors from context:", doctors);
// // //   console.log("🔢 Number of doctors:", doctors.length);
// // //   console.log("🎯 Speciality:", speciality);
// // //   console.log("⏳ Loading:", loading);

// // //   // Apply filter when doctors or speciality changes
// // //   useEffect(() => {
// // //     console.log("🔄 Applying filter...");

// // //     if (doctors && doctors.length > 0) {
// // //       let filtered = doctors;

// // //       if (speciality) {
// // //         filtered = doctors.filter((doc) => doc.speciality === speciality);
// // //         console.log(`🔍 Filtered to ${filtered.length} doctors for ${speciality}`);
// // //       } else {
// // //         console.log(`📋 Showing all ${doctors.length} doctors`);
// // //       }

// // //       setFilterDoc(filtered);
// // //     } else {
// // //       console.log("❌ No doctors data available");
// // //       setFilterDoc([]);
// // //     }
// // //   }, [doctors, speciality]);

// // //   const handleDoctorClick = (doctorId) => {
// // //     console.log("🎯 Clicked doctor ID:", doctorId);
// // //     console.log("🔄 Navigating to:", `/appointment/${doctorId}`);
// // //     navigate(`/appointment/${doctorId}`);
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="max-w-7xl mx-auto p-6">
// // //         <div className="flex justify-center items-center min-h-64">
// // //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// // //           <p className="ml-4 text-gray-600">Loading doctors...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="max-w-7xl mx-auto p-4 md:p-6">
// // //       <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Doctors</h1>
// // //       <p className="text-gray-600 mb-8">Browse through the doctors specialist.</p>

// // //       {/* Debug Info - Remove this in production */}
// // //       <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
// // //         <p className="text-sm text-yellow-800">
// // //           <strong>Debug Info:</strong> {doctors.length} doctors loaded | {filterDoc.length} filtered | Speciality: {speciality || 'All'}
// // //         </p>
// // //         <p className="text-xs text-yellow-600 mt-1">
// // //           Available IDs: {doctors.map(d => d._id).join(', ')}
// // //         </p>
// // //       </div>

// // //       <div className="flex flex-col md:flex-row gap-8">
// // //         {/* Filters Sidebar */}
// // //         <div className="w-full md:w-64">
// // //           <div className="bg-white rounded-lg border border-gray-200 p-4">
// // //             <h3 className="font-semibold text-gray-900 mb-4">Specialities</h3>
// // //             <div className="space-y-2">
// // //               {[
// // //                 "General physician",
// // //                 "Gynecologist",
// // //                 "Dermatologist",
// // //                 "Pediatricians",
// // //                 "Neurologist",
// // //                 "Gastroenterologist"
// // //               ].map((spec) => (
// // //                 <p
// // //                   key={spec}
// // //                   onClick={() => {
// // //                     navigate(`/doctors/${spec}`);
// // //                     window.scrollTo(0, 0);
// // //                   }}
// // //                   className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// // //                     speciality === spec
// // //                       ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// // //                       : "text-gray-600 hover:bg-gray-100"
// // //                   }`}
// // //                 >
// // //                   {spec}
// // //                 </p>
// // //               ))}

// // //               <p
// // //                 onClick={() => {
// // //                   navigate("/doctors");
// // //                   window.scrollTo(0, 0);
// // //                 }}
// // //                 className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// // //                   !speciality
// // //                     ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// // //                     : "text-gray-600 hover:bg-gray-100"
// // //                 }`}
// // //               >
// // //                 All Doctors
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* Doctors Grid */}
// // //         <div className="flex-1">
// // //           {filterDoc.length === 0 ? (
// // //             <div className="text-center py-12">
// // //               <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
// // //               <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
// // //               <p className="text-gray-500 mb-4">
// // //                 {speciality
// // //                   ? `No ${speciality} doctors available at the moment.`
// // //                   : "No doctors available at the moment."
// // //                 }
// // //               </p>
// // //               <button
// // //                 onClick={() => navigate("/doctors")}
// // //                 className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// // //               >
// // //                 View All Doctors
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //               {filterDoc.map((doctor) => (
// // //                 <div
// // //                   key={doctor._id}
// // //                   onClick={() => handleDoctorClick(doctor._id)}
// // //                   className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#5f5fff] transition-all duration-300 group"
// // //                 >
// // //                   {/* Doctor Image */}
// // //                   <div className="h-48 bg-gray-100 overflow-hidden">
// // //                     <img
// // //                       src={doctor.image}
// // //                       alt={doctor.name}
// // //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// // //                     />
// // //                   </div>

// // //                   {/* Doctor Info */}
// // //                   <div className="p-4">
// // //                     {/* Availability Badge */}
// // //                     <div className="flex items-center gap-2 text-green-600 text-xs font-medium mb-3">
// // //                       <span className="h-2 w-2 rounded-full bg-green-500"></span>
// // //                       Available Today
// // //                     </div>

// // //                     {/* Doctor Name and Speciality */}
// // //                     <div className="mb-3">
// // //                       <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#5f5fff] transition-colors">
// // //                         {doctor.name}
// // //                       </h3>
// // //                       <p className="text-gray-600 text-sm mt-1">{doctor.speciality}</p>
// // //                       <p className="text-gray-500 text-xs">{doctor.degree}</p>
// // //                     </div>

// // //                     {/* Experience */}
// // //                     <div className="flex items-center justify-between mb-3">
// // //                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
// // //                         {doctor.experience} experience
// // //                       </span>
// // //                     </div>

// // //                     {/* Fee and Book Button */}
// // //                     <div className="flex items-center justify-between pt-3 border-t border-gray-100">
// // //                       <div>
// // //                         <p className="text-xs text-gray-500">Appointment Fee</p>
// // //                         <p className="font-semibold text-gray-900">₹{doctor.fees}</p>
// // //                       </div>
// // //                       <button
// // //                         onClick={(e) => {
// // //                           e.stopPropagation();
// // //                           console.log("🔘 Book Now clicked for:", doctor._id);
// // //                           handleDoctorClick(doctor._id);
// // //                         }}
// // //                         className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a4aff] transition-colors"
// // //                       >
// // //                         Book Now
// // //                       </button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Doctors;

// // import React, { useContext, useEffect, useState } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import { AppContext } from "../context/AppContext";

// // const Doctors = () => {
// //   const { speciality } = useParams();
// //   const navigate = useNavigate();
// //   const { doctors, loading, backendStatus, refreshDoctors } = useContext(AppContext);
// //   const [filterDoc, setFilterDoc] = useState([]);

// //   console.log("=== DOCTORS COMPONENT ===");
// //   console.log("📊 Doctors from context:", doctors);
// //   console.log("🔢 Number of doctors:", doctors.length);
// //   console.log("🌐 Backend Status:", backendStatus);
// //   console.log("🎯 Speciality:", speciality);
// //   console.log("⏳ Loading:", loading);

// //   // Apply filter when doctors or speciality changes
// //   useEffect(() => {
// //     console.log("🔄 Applying filter...");

// //     if (doctors && doctors.length > 0) {
// //       let filtered = doctors;

// //       if (speciality) {
// //         filtered = doctors.filter((doc) => doc.speciality === speciality);
// //         console.log(`🔍 Filtered to ${filtered.length} doctors for ${speciality}`);
// //       } else {
// //         console.log(`📋 Showing all ${doctors.length} doctors`);
// //       }

// //       setFilterDoc(filtered);
// //     } else {
// //       console.log("❌ No doctors data available");
// //       setFilterDoc([]);
// //     }
// //   }, [doctors, speciality]);

// //   const handleDoctorClick = (doctorId) => {
// //     console.log("🎯 Clicked doctor ID:", doctorId);
// //     console.log("🔄 Navigating to:", `/appointment/${doctorId}`);
// //     navigate(`/appointment/${doctorId}`);
// //   };

// //   if (loading) {
// //     return (
// //       <div className="max-w-7xl mx-auto p-6">
// //         <div className="flex justify-center items-center min-h-64">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// //           <p className="ml-4 text-gray-600">Loading doctors...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-7xl mx-auto p-4 md:p-6">
// //       <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Doctors</h1>
// //       <p className="text-gray-600 mb-8">Browse through the doctors specialist.</p>

// //       {/* Backend Status */}
// //       <div className={`mb-6 p-4 rounded-lg border ${
// //         backendStatus === 'connected'
// //           ? 'bg-green-50 border-green-200 text-green-800'
// //           : backendStatus === 'failed'
// //           ? 'bg-yellow-50 border-yellow-200 text-yellow-800'
// //           : 'bg-blue-50 border-blue-200 text-blue-800'
// //       }`}>
// //         <div className="flex justify-between items-center">
// //           <div>
// //             <p className="font-medium">
// //               {backendStatus === 'connected' && '✅ Connected to backend - Live data'}
// //               {backendStatus === 'failed' && '⚠️ Using local data - Backend unavailable'}
// //               {backendStatus === 'checking' && '🔍 Checking backend connection...'}
// //             </p>
// //             <p className="text-sm mt-1">
// //               {doctors.length} doctors available
// //               {backendStatus === 'failed' && ' (local data)'}
// //             </p>
// //           </div>
// //           {backendStatus === 'failed' && (
// //             <button
// //               onClick={refreshDoctors}
// //               className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#4a4aff] transition-colors"
// //             >
// //               Retry Connection
// //             </button>
// //           )}
// //         </div>
// //       </div>

// //       <div className="flex flex-col md:flex-row gap-8">
// //         {/* Filters Sidebar */}
// //         <div className="w-full md:w-64">
// //           <div className="bg-white rounded-lg border border-gray-200 p-4">
// //             <h3 className="font-semibold text-gray-900 mb-4">Specialities</h3>
// //             <div className="space-y-2">
// //               {[
// //                 "General physician",
// //                 "Gynecologist",
// //                 "Dermatologist",
// //                 "Pediatricians",
// //                 "Neurologist",
// //                 "Gastroenterologist"
// //               ].map((spec) => (
// //                 <p
// //                   key={spec}
// //                   onClick={() => {
// //                     navigate(`/doctors/${spec}`);
// //                     window.scrollTo(0, 0);
// //                   }}
// //                   className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// //                     speciality === spec
// //                       ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// //                       : "text-gray-600 hover:bg-gray-100"
// //                   }`}
// //                 >
// //                   {spec}
// //                 </p>
// //               ))}

// //               <p
// //                 onClick={() => {
// //                   navigate("/doctors");
// //                   window.scrollTo(0, 0);
// //                 }}
// //                 className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
// //                   !speciality
// //                     ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
// //                     : "text-gray-600 hover:bg-gray-100"
// //                 }`}
// //               >
// //                 All Doctors
// //               </p>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Doctors Grid */}
// //         <div className="flex-1">
// //           {filterDoc.length === 0 ? (
// //             <div className="text-center py-12">
// //               <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
// //               <h3 className="text-xl font-semibold text-gray-700 mb-2">No doctors found</h3>
// //               <p className="text-gray-500 mb-4">
// //                 {speciality
// //                   ? `No ${speciality} doctors available at the moment.`
// //                   : "No doctors available at the moment."
// //                 }
// //               </p>
// //               <button
// //                 onClick={() => navigate("/doctors")}
// //                 className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// //               >
// //                 View All Doctors
// //               </button>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {filterDoc.map((doctor) => (
// //                 <div
// //                   key={doctor._id}
// //                   onClick={() => handleDoctorClick(doctor._id)}
// //                   className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#5f5fff] transition-all duration-300 group"
// //                 >
// //                   {/* Doctor Image */}
// //                   <div className="h-48 bg-gray-100 overflow-hidden">
// //                     <img
// //                       src={doctor.image}
// //                       alt={doctor.name}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
// //                     />
// //                   </div>

// //                   {/* Doctor Info */}
// //                   <div className="p-4">
// //                     {/* Availability Badge */}
// //                     <div className="flex items-center gap-2 text-green-600 text-xs font-medium mb-3">
// //                       <span className="h-2 w-2 rounded-full bg-green-500"></span>
// //                       Available Today
// //                     </div>

// //                     {/* Doctor Name and Speciality */}
// //                     <div className="mb-3">
// //                       <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#5f5fff] transition-colors">
// //                         {doctor.name}
// //                       </h3>
// //                       <p className="text-gray-600 text-sm mt-1">{doctor.speciality}</p>
// //                       <p className="text-gray-500 text-xs">{doctor.degree}</p>
// //                     </div>

// //                     {/* Experience */}
// //                     <div className="flex items-center justify-between mb-3">
// //                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
// //                         {doctor.experience} experience
// //                       </span>
// //                       {backendStatus === 'connected' && (
// //                         <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
// //                           Live
// //                         </span>
// //                       )}
// //                     </div>

// //                     {/* Fee and Book Button */}
// //                     <div className="flex items-center justify-between pt-3 border-t border-gray-100">
// //                       <div>
// //                         <p className="text-xs text-gray-500">Appointment Fee</p>
// //                         <p className="font-semibold text-gray-900">₹{doctor.fees}</p>
// //                       </div>
// //                       <button
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           console.log("🔘 Book Now clicked for:", doctor._id);
// //                           handleDoctorClick(doctor._id);
// //                         }}
// //                         className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a4aff] transition-colors"
// //                       >
// //                         Book Now
// //                       </button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Doctors;



























// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";

// const Doctors = () => {
//   const { speciality } = useParams();
//   const navigate = useNavigate();
//   const { doctors, loading, backendStatus, backendError, fetchDoctors } =
//     useContext(AppContext);
//   const [filterDoc, setFilterDoc] = useState([]);
//   const [showDebug, setShowDebug] = useState(false);

//   console.log("=== DOCTORS COMPONENT DEBUG ===");
//   console.log("📊 Doctors data:", doctors);
//   console.log("🔢 Doctors count:", doctors.length);
//   console.log("🌐 Backend Status:", backendStatus);
//   console.log("❌ Backend Error:", backendError);
//   console.log("⏳ Loading:", loading);

//   // Apply filter when doctors or speciality changes
//   useEffect(() => {
//     console.log("🔄 Applying filter...");

//     if (doctors && doctors.length > 0) {
//       let filtered = doctors;

//       if (speciality) {
//         filtered = doctors.filter((doc) => doc.speciality === speciality);
//         console.log(
//           `🔍 Filtered to ${filtered.length} doctors for ${speciality}`
//         );
//       } else {
//         console.log(`📋 Showing all ${doctors.length} doctors`);
//       }

//       setFilterDoc(filtered);
//     } else {
//       console.log("❌ No doctors data available");
//       setFilterDoc([]);
//     }
//   }, [doctors, speciality]);

//   // const handleDoctorClick = (doctorId) => {
//   //   console.log("🎯 Clicked doctor ID:", doctorId);
//   //   console.log("🔄 Navigating to:", `/appointment/${doctorId}`);
//   //   navigate(`/appointment/${doctorId}`);
//   // };

//   const handleDoctorClick = (doctor) => {
//     // Use _id as the primary identifier since that's what MongoDB uses
//     const doctorId = doctor._id || doctor.id;
//     console.log("🎯 Clicked doctor:", doctor.name);
//     console.log("🎯 Doctor ID:", doctorId);
//     console.log("🔄 Navigating to:", `/appointment/${doctorId}`);
//     navigate(`/appointment/${doctorId}`);
//   };

//   // And in the button click - pass the entire doctor object:

//   if (loading) {
//     return (
//       <div className="max-w-7xl mx-auto p-6">
//         <div className="flex justify-center items-center min-h-64 flex-col">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
//           <p className="text-gray-600">Loading doctors...</p>
//           <p className="text-sm text-gray-500 mt-2">
//             Backend Status: {backendStatus}
//           </p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-4 md:p-6">
//       {/* Header with Debug Toggle */}
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Doctors</h1>
//           <p className="text-gray-600">
//             Browse through the doctors specialist.
//           </p>
//         </div>
//         {/* <button
//           onClick={() => setShowDebug(!showDebug)}
//           className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors"
//         >
//           {showDebug ? "Hide Debug" : "Show Debug"}
//         </button> */}
//       </div>

//       {/* Backend Status Panel */}
//       {/* <div
//         className={`mb-6 p-4 rounded-lg border ${
//           backendStatus === "connected"
//             ? "bg-green-50 border-green-200 text-green-800"
//             : backendStatus === "failed"
//             ? "bg-red-50 border-red-200 text-red-800"
//             : "bg-yellow-50 border-yellow-200 text-yellow-800"
//         }`}
//       >
//         <div className="flex justify-between items-center">
//           <div>
//             <p className="font-medium">
//               {backendStatus === "connected" &&
//                 "✅ Connected to Backend - Live Data"}
//               {backendStatus === "failed" && "❌ Backend Connection Failed"}
//               {backendStatus === "checking" &&
//                 "🔍 Checking Backend Connection..."}
//             </p>
//             <p className="text-sm mt-1">
//               Showing {doctors.length} doctors
//               {backendStatus === "failed" && " (using local data)"}
//               {backendError && ` - Error: ${backendError}`}
//             </p>
//           </div>
//           {backendStatus === "failed" && (
//             <button
//               onClick={fetchDoctors}
//               className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#4a4aff] transition-colors"
//             >
//               Retry Connection
//             </button>
//           )}
//         </div>
//       </div> */}

//       {/* Debug Information Panel */}
//       {showDebug && (
//         <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
//           <h3 className="font-bold text-blue-800 mb-3">Debug Information</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
//             <div>
//               <p>
//                 <strong>Backend Status:</strong> {backendStatus}
//               </p>
//               <p>
//                 <strong>Doctors Count:</strong> {doctors.length}
//               </p>
//               <p>
//                 <strong>Filtered Count:</strong> {filterDoc.length}
//               </p>
//               <p>
//                 <strong>Speciality Filter:</strong> {speciality || "None"}
//               </p>
//             </div>
//             <div>
//               <p>
//                 <strong>Backend Error:</strong> {backendError || "None"}
//               </p>
//               <p>
//                 <strong>Loading State:</strong> {loading ? "Yes" : "No"}
//               </p>
//               <p>
//                 <strong>Doctor IDs:</strong>{" "}
//                 {doctors
//                   .slice(0, 3)
//                   .map((d) => d._id)
//                   .join(", ")}
//                 ...
//               </p>
//             </div>
//           </div>
//           <details className="mt-3">
//             <summary className="cursor-pointer font-medium text-blue-700">
//               Raw Doctors Data
//             </summary>
//             <pre className="bg-white p-3 mt-2 rounded border text-xs overflow-auto max-h-40">
//               {JSON.stringify(doctors, null, 2)}
//             </pre>
//           </details>
//         </div>
//       )}

//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <div className="w-full md:w-64">
//           <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
//             <h3 className="font-semibold text-gray-900 mb-4">Specialities</h3>
//             <div className="space-y-2">
//               {[
//                 "General physician",
//                 "Gynecologist",
//                 "Dermatologist",
//                 "Pediatricians",
//                 "Neurologist",
//                 "Gastroenterologist",
//               ].map((spec) => (
//                 <p
//                   key={spec}
//                   onClick={() => {
//                     navigate(`/doctors/${spec}`);
//                     window.scrollTo(0, 0);
//                   }}
//                   className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
//                     speciality === spec
//                       ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
//                       : "text-gray-600 hover:bg-gray-100"
//                   }`}
//                 >
//                   {spec}
//                 </p>
//               ))}

//               {/* Show All Doctors */}
//               <p
//                 onClick={() => {
//                   navigate("/doctors");
//                   window.scrollTo(0, 0);
//                 }}
//                 className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
//                   !speciality
//                     ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
//                     : "text-gray-600 hover:bg-gray-100"
//                 }`}
//               >
//                 All Doctors
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Doctors Grid */}
//         <div className="flex-1">
//           {filterDoc.length === 0 ? (
//             <div className="text-center py-12">
//               <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">
//                 No doctors found
//               </h3>
//               <p className="text-gray-500 mb-4">
//                 {speciality
//                   ? `No ${speciality} doctors available at the moment.`
//                   : "No doctors available at the moment."}
//               </p>
//               <button
//                 onClick={() => navigate("/doctors")}
//                 className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//               >
//                 View All Doctors
//               </button>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {filterDoc.map((doctor) => (
//                 <div
//                   key={doctor._id}
//                   // onClick={() => handleDoctorClick(doctor.id)}

//                   onClick={(e) => {
//                     e.stopPropagation();
//                     console.log(
//                       "🔘 Book Now clicked for:",
//                       doctor._id || doctor.id
//                     );
//                     handleDoctorClick(doctor);
//                   }}
//                   className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#5f5fff] transition-all duration-300 group"
//                 >
//                   {/* Doctor Image */}
//                   <div className="h-48 bg-gray-100 overflow-hidden">
//                     <img
//                       src={doctor.image}
//                       alt={doctor.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>

//                   {/* Doctor Info */}
//                   <div className="p-4">
//                     {/* Availability Badge */}
//                     <div className="flex items-center gap-2 text-green-600 text-xs font-medium mb-3">
//                       <span className="h-2 w-2 rounded-full bg-green-500"></span>
//                       Available Today
//                     </div>

//                     {/* Doctor Name and Speciality */}
//                     <div className="mb-3">
//                       <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#5f5fff] transition-colors">
//                         {doctor.name}
//                       </h3>
//                       <p className="text-gray-600 text-sm mt-1">
//                         {doctor.speciality}
//                       </p>
//                       <p className="text-gray-500 text-xs">{doctor.degree}</p>
//                     </div>

//                     {/* Experience and Backend Status */}
//                     <div className="flex items-center justify-between mb-3">
//                       <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                         {doctor.experience} experience
//                       </span>
//                       {backendStatus === "connected" && (
//                         <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
//                           Live
//                         </span>
//                       )}
//                     </div>

//                     {/* Fee and Book Button */}
//                     <div className="flex items-center justify-between pt-3 border-t border-gray-100">
//                       <div>
//                         <p className="text-xs text-gray-500">Appointment Fee</p>
//                         <p className="font-semibold text-gray-900">
//                           ₹{doctor.fees}
//                         </p>
//                       </div>
//                       {/* <button 
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           console.log("🔘 Book Now clicked for:", doctor.id);
//                           handleDoctorClick(doctor.id);
//                         }}
//                         className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a4aff] transition-colors"
//                       >
//                         Book Now
//                       </button> */}

//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           console.log("🔘 Book Now clicked for:", doctor.id); // Change to doctor.id
//                           handleDoctorClick(doctor.id); // Change to doctor.id
//                         }}
//                         className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a4aff] transition-colors"
//                       >
//                         Book Now
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Data Source Information */}
//       <div className="mt-8 text-center text-sm text-gray-500">
//         <p>
//           {backendStatus === "connected"
//             ? "✅ Data loaded from backend database"
//             : "⚠️ Using local demonstration data - Backend unavailable"}
//         </p>
//         {backendStatus === "failed" && (
//           <button
//             onClick={fetchDoctors}
//             className="mt-2 text-[#5f5fff] hover:text-[#4a4aff] underline"
//           >
//             Click here to retry backend connection
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Doctors;





























import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const { doctors, loading, backendStatus, backendError, fetchDoctors } =
    useContext(AppContext);
  const [filterDoc, setFilterDoc] = useState([]);
  const [showDebug, setShowDebug] = useState(false);

  console.log("=== DOCTORS COMPONENT DEBUG ===");
  console.log("📊 Doctors data:", doctors);
  console.log("🔢 Doctors count:", doctors.length);
  console.log("🌐 Backend Status:", backendStatus);
  console.log("❌ Backend Error:", backendError);
  console.log("⏳ Loading:", loading);

  // Apply filter when doctors or speciality changes
  useEffect(() => {
    console.log("🔄 Applying filter...");

    if (doctors && doctors.length > 0) {
      let filtered = doctors;

      if (speciality) {
        filtered = doctors.filter((doc) => doc.speciality === speciality);
        console.log(
          `🔍 Filtered to ${filtered.length} doctors for ${speciality}`
        );
      } else {
        console.log(`📋 Showing all ${doctors.length} doctors`);
      }

      setFilterDoc(filtered);
    } else {
      console.log("❌ No doctors data available");
      setFilterDoc([]);
    }
  }, [doctors, speciality]);

  const handleDoctorClick = (doctor) => {
    // Use _id as the primary identifier since that's what MongoDB uses
    const doctorId = doctor._id || doctor.id;
    console.log("🎯 Clicked doctor:", doctor.name);
    console.log("🎯 Doctor ID:", doctorId);
    console.log("🔄 Navigating to:", `/appointment/${doctorId}`);
    navigate(`/appointment/${doctorId}`);
  };

  const handleCardClick = (doctor) => {
    console.log("🖱️ Card clicked for:", doctor.name);
    handleDoctorClick(doctor);
  };

  const handleBookNowClick = (e, doctor) => {
    e.stopPropagation(); // Prevent card click from triggering
    console.log("🔘 Book Now clicked for:", doctor.name);
    console.log("🔘 Doctor ID:", doctor._id || doctor.id);
    handleDoctorClick(doctor);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-center items-center min-h-64 flex-col">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF] mb-4"></div>
          <p className="text-gray-600">Loading doctors...</p>
          <p className="text-sm text-gray-500 mt-2">
            Backend Status: {backendStatus}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      {/* Header with Debug Toggle */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Doctors</h1>
          <p className="text-gray-600">
            Browse through the doctors specialist.
          </p>
        </div>
        {/* <button
          onClick={() => setShowDebug(!showDebug)}
          className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors"
        >
          {showDebug ? "Hide Debug" : "Show Debug"}
        </button> */}
      </div>

      {/* Backend Status Panel */}
      {/* <div
        className={`mb-6 p-4 rounded-lg border ${
          backendStatus === "connected"
            ? "bg-green-50 border-green-200 text-green-800"
            : backendStatus === "failed"
            ? "bg-red-50 border-red-200 text-red-800"
            : "bg-yellow-50 border-yellow-200 text-yellow-800"
        }`}
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium">
              {backendStatus === "connected" &&
                "✅ Connected to Backend - Live Data"}
              {backendStatus === "failed" && "❌ Backend Connection Failed"}
              {backendStatus === "checking" &&
                "🔍 Checking Backend Connection..."}
            </p>
            <p className="text-sm mt-1">
              Showing {doctors.length} doctors
              {backendStatus === "failed" && " (using local data)"}
              {backendError && ` - Error: ${backendError}`}
            </p>
          </div>
          {backendStatus === "failed" && (
            <button
              onClick={fetchDoctors}
              className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#4a4aff] transition-colors"
            >
              Retry Connection
            </button>
          )}
        </div>
      </div> */}

      {/* Debug Information Panel */}
      {showDebug && (
        <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-3">Debug Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>
                <strong>Backend Status:</strong> {backendStatus}
              </p>
              <p>
                <strong>Doctors Count:</strong> {doctors.length}
              </p>
              <p>
                <strong>Filtered Count:</strong> {filterDoc.length}
              </p>
              <p>
                <strong>Speciality Filter:</strong> {speciality || "None"}
              </p>
            </div>
            <div>
              <p>
                <strong>Backend Error:</strong> {backendError || "None"}
              </p>
              <p>
                <strong>Loading State:</strong> {loading ? "Yes" : "No"}
              </p>
              <p>
                <strong>Doctor IDs:</strong>{" "}
                {doctors
                  .slice(0, 3)
                  .map((d) => d._id)
                  .join(", ")}
                ...
              </p>
            </div>
          </div>
          <details className="mt-3">
            <summary className="cursor-pointer font-medium text-blue-700">
              Raw Doctors Data
            </summary>
            <pre className="bg-white p-3 mt-2 rounded border text-xs overflow-auto max-h-40">
              {JSON.stringify(doctors, null, 2)}
            </pre>
          </details>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters Sidebar */}
        <div className="w-full md:w-64">
          <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-4">
            <h3 className="font-semibold text-gray-900 mb-4">Specialities</h3>
            <div className="space-y-2">
              {[
                "General physician",
                "Gynecologist",
                "Dermatologist",
                "Pediatricians",
                "Neurologist",
                "Gastroenterologist",
              ].map((spec) => (
                <p
                  key={spec}
                  onClick={() => {
                    navigate(`/doctors/${spec}`);
                    window.scrollTo(0, 0);
                  }}
                  className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
                    speciality === spec
                      ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {spec}
                </p>
              ))}

              {/* Show All Doctors */}
              <p
                onClick={() => {
                  navigate("/doctors");
                  window.scrollTo(0, 0);
                }}
                className={`px-3 py-2 rounded-lg transition-all cursor-pointer text-sm ${
                  !speciality
                    ? "bg-blue-100 border border-blue-400 text-blue-700 font-medium"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                All Doctors
              </p>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="flex-1">
          {filterDoc.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">👨‍⚕️</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No doctors found
              </h3>
              <p className="text-gray-500 mb-4">
                {speciality
                  ? `No ${speciality} doctors available at the moment.`
                  : "No doctors available at the moment."}
              </p>
              <button
                onClick={() => navigate("/doctors")}
                className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
              >
                View All Doctors
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDoc.map((doctor) => (
                <div
                  key={doctor._id}
                  onClick={() => handleCardClick(doctor)}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:border-[#5f5fff] transition-all duration-300 group"
                >
                  {/* Doctor Image */}
                  <div className="h-48 bg-gray-100 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Doctor Info */}
                  <div className="p-4">
                    {/* Availability Badge */}
                    <div className="flex items-center gap-2 text-green-600 text-xs font-medium mb-3">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                      Available Today
                    </div>

                    {/* Doctor Name and Speciality */}
                    <div className="mb-3">
                      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-[#5f5fff] transition-colors">
                        {doctor.name}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {doctor.speciality}
                      </p>
                      <p className="text-gray-500 text-xs">{doctor.degree}</p>
                    </div>

                    {/* Experience and Backend Status */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {doctor.experience} experience
                      </span>
                      {backendStatus === "connected" && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                          Live
                        </span>
                      )}
                    </div>

                    {/* Fee and Book Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-500">Appointment Fee</p>
                        <p className="font-semibold text-gray-900">
                          ₹{doctor.fees}
                        </p>
                      </div>

                      <button
                        onClick={(e) => handleBookNowClick(e, doctor)}
                        className="bg-[#5f5fff] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#4a4aff] transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Data Source Information */}
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>
          {backendStatus === "connected"
            ? "✅ Data loaded from backend database"
            : "⚠️ Using local demonstration data - Backend unavailable"}
        </p>
        {backendStatus === "failed" && (
          <button
            onClick={fetchDoctors}
            className="mt-2 text-[#5f5fff] hover:text-[#4a4aff] underline"
          >
            Click here to retry backend connection
          </button>
        )}
      </div>
    </div>
  );
};

export default Doctors;