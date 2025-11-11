// // // import React, { useContext } from 'react'
// // // import { AppContext } from '../context/AppContext'

// // // function MyAppointments() {

// // //   const {doctors} = useContext(AppContext);


// // //   return (
// // //     <div>
// // //         <p className='pb-3 mt-12 font-medium text-zinc-700 border-b border-zinc-200' >My Appointments</p>
// // //         <div>
// // //             {
// // //               doctors.slice(0,2).map((item,index)=>(
// // //                   <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b'>
// // //                     <div className='bg-indigo-50'>
// // //                       <img src={item.image} alt="" className='w-32 bg-indigo-300' />
// // //                     </div>

// // //                     <div className='flex-1 text-sm text-zinc-600'>
// // //                       <p className='text-neutral-800 font-semibold'>{item.name}</p>
// // //                       <p className='text-zinc-700 font-medium mt-1'>{item.speciality}</p>
// // //                       <p className='text-xs mt-2'>{item.address.line1}</p>
// // //                       <p className='text-xs'>{item.address.line2}</p>
// // //                       <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time</span> 15, August 2025 | 8:30 PM</p>
// // //                     </div>
// // //                     <div></div>
// // //                     <div className='flex flex-col gap-2 justify-end'>
// // //                         <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-[#5f5fff] hover:text-white cursor-pointer transition-all duration-700'>Pay Online</button>
// // //                         <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-700'>Cancel Appointment</button>
// // //                     </div>
// // //                   </div>
// // //               ))
// // //             }
// // //         </div>
// // //     </div>
// // //   )
// // // }

// // // export default MyAppointments














// // import React, { useContext, useEffect, useState } from 'react'
// // import { AppContext } from '../context/AppContext'
// // import { useNavigate } from 'react-router-dom';

// // function MyAppointments() {
// //   const { fetchUserAppointments, cancelAppointment, isAuthenticated, doctors } = useContext(AppContext);
// //   const [appointments, setAppointments] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const navigate = useNavigate();

// //   console.log("📅 MyAppointments component loaded");

// //   useEffect(() => {
// //     const loadAppointments = async () => {
// //       if (!isAuthenticated()) {
// //         console.log("❌ User not authenticated, redirecting to login");
// //         navigate('/login');
// //         return;
// //       }

// //       try {
// //         console.log("🔄 Fetching user appointments...");
// //         const userAppointments = await fetchUserAppointments();
// //         console.log("✅ Appointments fetched:", userAppointments);
        
// //         // If no appointments from backend, show sample data
// //         if (userAppointments.length === 0) {
// //           console.log("📋 No appointments found, showing sample data");
// //           // You can show a message or keep empty
// //           setAppointments([]);
// //         } else {
// //           setAppointments(userAppointments);
// //         }
// //       } catch (error) {
// //         console.error("❌ Error fetching appointments:", error);
// //         // Fallback to sample data from doctors
// //         setAppointments(doctors.slice(0, 2).map((doctor, index) => ({
// //           id: index + 1,
// //           doctor: doctor,
// //           appointmentDateTime: new Date(Date.now() + (index * 24 * 60 * 60 * 1000)), // Sample dates
// //           status: 'CONFIRMED',
// //           notes: 'Regular checkup'
// //         })));
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     loadAppointments();
// //   }, [fetchUserAppointments, isAuthenticated, navigate, doctors]);

// //   const handleCancelAppointment = async (appointmentId) => {
// //     if (!window.confirm('Are you sure you want to cancel this appointment?')) {
// //       return;
// //     }

// //     try {
// //       console.log("🗑️ Cancelling appointment:", appointmentId);
// //       const result = await cancelAppointment(appointmentId);
      
// //       if (result.success) {
// //         console.log("✅ Appointment cancelled successfully");
// //         // Remove the cancelled appointment from the list
// //         setAppointments(prev => prev.filter(apt => apt.id !== appointmentId));
// //       } else {
// //         console.error("❌ Failed to cancel appointment:", result.error);
// //         alert('Failed to cancel appointment: ' + result.error);
// //       }
// //     } catch (error) {
// //       console.error("❌ Error cancelling appointment:", error);
// //       alert('Error cancelling appointment');
// //     }
// //   };

// //   const handlePayOnline = (appointmentId) => {
// //     console.log("💳 Processing payment for appointment:", appointmentId);
// //     // Implement payment logic here
// //     alert('Payment functionality will be implemented soon!');
// //   };

// //   if (loading) {
// //     return (
// //       <div className="max-w-6xl mx-auto p-6">
// //         <div className="flex justify-center items-center min-h-64">
// //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
// //           <p className="ml-4 text-gray-600">Loading appointments...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   if (!isAuthenticated()) {
// //     return (
// //       <div className="max-w-6xl mx-auto p-6 text-center">
// //         <div className="text-6xl mb-4">🔐</div>
// //         <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Required</h2>
// //         <p className="text-gray-600 mb-4">Please log in to view your appointments.</p>
// //         <button 
// //           onClick={() => navigate('/login')}
// //           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// //         >
// //           Go to Login
// //         </button>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="max-w-6xl mx-auto p-4 md:p-6">
// //       <p className='pb-3 mt-12 font-medium text-zinc-700 border-b border-zinc-200'>My Appointments</p>
      
// //       {appointments.length === 0 ? (
// //         <div className="text-center py-12">
// //           <div className="text-gray-400 text-6xl mb-4">📅</div>
// //           <h3 className="text-xl font-semibold text-gray-700 mb-2">No Appointments</h3>
// //           <p className="text-gray-500 mb-4">You don't have any appointments scheduled yet.</p>
// //           <button
// //             onClick={() => navigate('/doctors')}
// //             className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
// //           >
// //             Book an Appointment
// //           </button>
// //         </div>
// //       ) : (
// //         <div className="mt-6">
// //           {appointments.map((appointment, index) => (
// //             <div key={appointment.id || index} className='grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 py-6 border-b border-gray-200'>
// //               {/* Doctor Image and Basic Info */}
// //               <div className='flex flex-col sm:flex-row md:flex-col gap-4'>
// //                 <div className='bg-indigo-50 rounded-lg overflow-hidden'>
// //                   <img 
// //                     src={appointment.doctor?.image || '/default-doctor.png'} 
// //                     alt={appointment.doctor?.name || 'Doctor'} 
// //                     className='w-full h-32 object-cover'
// //                   />
// //                 </div>
                
// //                 <div className='flex-1'>
// //                   <p className='text-neutral-800 font-semibold'>{appointment.doctor?.name || 'Doctor Name'}</p>
// //                   <p className='text-zinc-700 font-medium mt-1'>{appointment.doctor?.speciality || 'Speciality'}</p>
// //                   <p className='text-xs mt-2'>{appointment.doctor?.address?.line1 || 'Medical Center'}</p>
// //                   <p className='text-xs'>{appointment.doctor?.address?.line2 || 'Healthcare Street'}</p>
// //                 </div>
// //               </div>

// //               {/* Appointment Details */}
// //               <div className='text-sm text-zinc-600'>
// //                 <p className='text-xs mt-1'>
// //                   <span className='text-sm text-neutral-700 font-medium'>Date & Time:</span>{' '}
// //                   {appointment.appointmentDateTime 
// //                     ? new Date(appointment.appointmentDateTime).toLocaleString() 
// //                     : '15, August 2025 | 8:30 PM'
// //                   }
// //                 </p>
// //                 <p className='text-xs mt-2'>
// //                   <span className='text-sm text-neutral-700 font-medium'>Status:</span>{' '}
// //                   <span className={`px-2 py-1 rounded-full text-xs ${
// //                     appointment.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
// //                     appointment.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
// //                     appointment.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
// //                     'bg-gray-100 text-gray-800'
// //                   }`}>
// //                     {appointment.status || 'CONFIRMED'}
// //                   </span>
// //                 </p>
// //                 {appointment.notes && (
// //                   <p className='text-xs mt-2'>
// //                     <span className='text-sm text-neutral-700 font-medium'>Notes:</span> {appointment.notes}
// //                   </p>
// //                 )}
// //                 <p className='text-sm font-semibold text-neutral-800 mt-2'>
// //                   Fee: ₹{appointment.doctor?.fees || 50}
// //                 </p>
// //               </div>

// //               {/* Action Buttons */}
// //               <div className='flex flex-col gap-2 justify-end'>
// //                 <button 
// //                   onClick={() => handlePayOnline(appointment.id)}
// //                   disabled={appointment.status === 'CANCELLED'}
// //                   className='text-sm text-stone-500 text-center py-2 border rounded hover:bg-[#5f5fff] hover:text-white cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
// //                 >
// //                   Pay Online
// //                 </button>
// //                 <button 
// //                   onClick={() => handleCancelAppointment(appointment.id)}
// //                   disabled={appointment.status === 'CANCELLED'}
// //                   className='text-sm text-stone-500 text-center py-2 border rounded hover:bg-red-600 hover:text-white cursor-pointer transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
// //                 >
// //                   {appointment.status === 'CANCELLED' ? 'Cancelled' : 'Cancel Appointment'}
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // export default MyAppointments;











































// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom';

// function MyAppointments() {
//   const { fetchUserAppointments, cancelAppointment, isAuthenticated, user } = useContext(AppContext);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   console.log("📅 MyAppointments component loaded");
//   console.log("👤 User:", user);

//   useEffect(() => {
//     const loadAppointments = async () => {
//       if (!isAuthenticated) {
//         console.log("❌ User not authenticated, redirecting to login");
//         navigate('/login');
//         return;
//       }

//       try {
//         console.log("🔄 Fetching user appointments...");
//         const userAppointments = await fetchUserAppointments();
//         console.log("✅ Appointments fetched:", userAppointments);
        
//         setAppointments(userAppointments);
//       } catch (error) {
//         console.error("❌ Error fetching appointments:", error);
//         setMessage('Failed to load appointments');
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAppointments();
//   }, [fetchUserAppointments, isAuthenticated, navigate]);

//   const handleCancelAppointment = async (appointmentId) => {
//     if (!window.confirm('Are you sure you want to cancel this appointment?')) {
//       return;
//     }

//     try {
//       console.log("🗑️ Cancelling appointment:", appointmentId);
//       const result = await cancelAppointment(appointmentId);
      
//       if (result.success) {
//         console.log("✅ Appointment cancelled successfully");
//         setMessage('Appointment cancelled successfully');
        
//         // Remove the cancelled appointment from the list
//         setAppointments(prev => prev.filter(apt => apt.id !== appointmentId));
        
//         setTimeout(() => setMessage(''), 3000);
//       } else {
//         console.error("❌ Failed to cancel appointment:", result.error);
//         setMessage('Failed to cancel appointment: ' + result.error);
//       }
//     } catch (error) {
//       console.error("❌ Error cancelling appointment:", error);
//       setMessage('Error cancelling appointment');
//     }
//   };

//   const handlePayOnline = (appointment) => {
//     console.log("💳 Processing payment for appointment:", appointment.id);
//     alert(`Payment of ₹${appointment.doctor?.fees} for Dr. ${appointment.doctor?.name} will be processed soon!`);
//   };

//   if (loading) {
//     return (
//       <div className="max-w-6xl mx-auto p-6">
//         <div className="flex justify-center items-center min-h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
//           <p className="ml-4 text-gray-600">Loading appointments...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated) {
//     return (
//       <div className="max-w-6xl mx-auto p-6 text-center">
//         <div className="text-6xl mb-4">🔐</div>
//         <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Required</h2>
//         <p className="text-gray-600 mb-4">Please log in to view your appointments.</p>
//         <button 
//           onClick={() => navigate('/login')}
//           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//         >
//           Go to Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
//         <button
//           onClick={() => navigate('/doctors')}
//           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//         >
//           Book New Appointment
//         </button>
//       </div>

//       {message && (
//         <div className={`p-4 rounded-lg mb-6 ${
//           message.includes('cancelled') 
//             ? 'bg-green-50 border border-green-200 text-green-800'
//             : 'bg-red-50 border border-red-200 text-red-800'
//         }`}>
//           {message}
//         </div>
//       )}

//       {appointments.length === 0 ? (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-6xl mb-4">📅</div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">No Appointments</h3>
//           <p className="text-gray-500 mb-4">You don't have any appointments scheduled yet.</p>
//           <button
//             onClick={() => navigate('/doctors')}
//             className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//           >
//             Book an Appointment
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {appointments.map((appointment) => (
//             <div key={appointment.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Doctor Info */}
//                 <div className="flex items-start space-x-4">
//                   <img
//                     src={appointment.doctor?.image || '/default-doctor.png'}
//                     alt={appointment.doctor?.name}
//                     className="w-16 h-16 rounded-lg object-cover"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{appointment.doctor?.name}</h3>
//                     <p className="text-gray-600 text-sm">{appointment.doctor?.speciality}</p>
//                     <p className="text-gray-500 text-sm">{appointment.doctor?.degree}</p>
//                   </div>
//                 </div>

//                 {/* Appointment Details */}
//                 <div className="space-y-2">
//                   <p className="text-sm">
//                     <span className="font-medium text-gray-700">Date & Time:</span>{' '}
//                     {appointment.appointmentDateTime 
//                       ? new Date(appointment.appointmentDateTime).toLocaleString() 
//                       : 'Not scheduled'
//                     }
//                   </p>
//                   <p className="text-sm">
//                     <span className="font-medium text-gray-700">Status:</span>{' '}
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       appointment.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-800' :
//                       appointment.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                       appointment.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                       'bg-gray-100 text-gray-800'
//                     }`}>
//                       {appointment.status}
//                     </span>
//                   </p>
//                   {appointment.notes && (
//                     <p className="text-sm">
//                       <span className="font-medium text-gray-700">Notes:</span> {appointment.notes}
//                     </p>
//                   )}
//                   <p className="text-sm font-semibold text-gray-900">
//                     Fee: ₹{appointment.doctor?.fees || 'N/A'}
//                   </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-col space-y-2">
//                   <button 
//                     onClick={() => handlePayOnline(appointment)}
//                     disabled={appointment.status === 'CANCELLED'}
//                     className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//                   >
//                     Pay Online
//                   </button>
//                   <button 
//                     onClick={() => handleCancelAppointment(appointment.id)}
//                     disabled={appointment.status === 'CANCELLED' || appointment.status === 'COMPLETED'}
//                     className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
//                   >
//                     {appointment.status === 'CANCELLED' ? 'Cancelled' : 'Cancel Appointment'}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default MyAppointments;
























// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { useNavigate } from 'react-router-dom';

// function MyAppointments() {
//   const { fetchUserAppointments, cancelAppointment, isAuthenticated, user } = useContext(AppContext);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const AppContext = useContext(AppContext);

//   console.log("📅 MyAppointments component loaded");
//   console.log("👤 User:", user);
//   console.log("🔑 Authenticated:", isAuthenticated());

//   useEffect(() => {
//     const loadAppointments = async () => {
//       if (!isAuthenticated()) {
//         console.log("❌ User not authenticated, redirecting to login");
//         setError('Please log in to view appointments');
//         setTimeout(() => navigate('/login'), 2000);
//         return;
//       }

//       try {
//         setLoading(true);
//         setError('');
//         setMessage('');
        
//         console.log("🔄 Fetching user appointments...");
//         const userAppointments = await fetchUserAppointments();
//         console.log("✅ Appointments fetched:", userAppointments);
        
//         setAppointments(userAppointments || []);
        
//         if (!userAppointments || userAppointments.length === 0) {
//           setMessage('No appointments found');
//         }
//       } catch (error) {
//         console.error("❌ Error fetching appointments:", error);
        
//         if (error.message.includes('403') || error.message.includes('forbidden')) {
//           setError('Access denied. Please check your permissions or try logging in again.');
//         } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
//           setError('Session expired. Please log in again.');
//           setTimeout(() => navigate('/login'), 2000);
//         } else if (error.message.includes('No user ID')) {
//           setError('User information not found. Please log in again.');
//           setTimeout(() => navigate('/login'), 2000);
//         } else {
//           setError('Failed to load appointments: ' + error.message);
//         }
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadAppointments();
//   }, [fetchUserAppointments, isAuthenticated, navigate]);

//   const handleCancelAppointment = async (appointmentId) => {
//     if (!window.confirm('Are you sure you want to cancel this appointment?')) {
//       return;
//     }

//     try {
//       console.log("🗑️ Cancelling appointment:", appointmentId);
//       setMessage('');
//       setError('');
      
//       const result = await cancelAppointment(appointmentId);
      
//       if (result.success) {
//         console.log("✅ Appointment cancelled successfully");
//         setMessage('Appointment cancelled successfully');
        
//         // Remove the cancelled appointment from the list
//         setAppointments(prev => prev.filter(apt => apt.id !== appointmentId));
        
//         setTimeout(() => setMessage(''), 3000);
//       } else {
//         console.error("❌ Failed to cancel appointment:", result.error);
//         setError('Failed to cancel appointment: ' + result.error);
        
//         // Refresh appointments list to get current status
//         try {
//           const updatedAppointments = await fetchUserAppointments();
//           setAppointments(updatedAppointments || []);
//         } catch (refreshError) {
//           console.error("Failed to refresh appointments:", refreshError);
//         }
//       }
//     } catch (error) {
//       console.error("❌ Error cancelling appointment:", error);
//       setError('Error cancelling appointment: ' + error.message);
//     }
//   };

//   const handlePayOnline = (appointment) => {
//     console.log("💳 Processing payment for appointment:", appointment.id);
    
//     if (appointment.status === 'CANCELLED') {
//       alert('This appointment has been cancelled and cannot be paid for.');
//       return;
//     }
    
//     if (appointment.status === 'COMPLETED') {
//       alert('This appointment has already been completed.');
//       return;
//     }
    
//     const fee = appointment.doctor?.fees || appointment.fee || 500; // Default fee if not available
//     alert(`Payment of ₹${fee} for Dr. ${appointment.doctor?.name} will be processed soon!\n\nYou will be redirected to the payment gateway.`);
    
//     // In a real app, you would redirect to payment gateway here
//     // navigate('/payment', { state: { appointment, amount: fee } });
//   };

//   const handleRetryLoad = () => {
//     setError('');
//     setLoading(true);
//     setTimeout(() => {
//       window.location.reload(); // Simple reload to retry
//     }, 500);
//   };

//   if (loading) {
//     return (
//       <div className="max-w-6xl mx-auto p-6">
//         <div className="flex justify-center items-center min-h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
//           <p className="ml-4 text-gray-600">Loading appointments...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!isAuthenticated()) {
//     return (
//       <div className="max-w-6xl mx-auto p-6 text-center">
//         <div className="text-6xl mb-4">🔐</div>
//         <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Required</h2>
//         <p className="text-gray-600 mb-4">Please log in to view your appointments.</p>
//         <button 
//           onClick={() => navigate('/login')}
//           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//         >
//           Go to Login
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-6xl mx-auto p-4 md:p-6">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
//         <button
//           onClick={() => navigate('/doctors')}
//           className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//         >
//           Book New Appointment
//         </button>
//       </div>

//       {/* Error Message */}
//       {error && (
//         <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
//           <div className="flex justify-between items-start">
//             <div className="flex-1">
//               <h3 className="text-red-800 font-semibold mb-2">Error Loading Appointments</h3>
//               <p className="text-red-700">{error}</p>
//             </div>
//             <button
//               onClick={handleRetryLoad}
//               className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
//             >
//               Retry
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Success Message */}
//       {message && (
//         <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6 text-green-800">
//           {message}
//         </div>
//       )}

//       {appointments.length === 0 && !error ? (
//         <div className="text-center py-12">
//           <div className="text-gray-400 text-6xl mb-4">📅</div>
//           <h3 className="text-xl font-semibold text-gray-700 mb-2">No Appointments Found</h3>
//           <p className="text-gray-500 mb-4">You don't have any appointments scheduled yet.</p>
//           <button
//             onClick={() => navigate('/doctors')}
//             className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
//           >
//             Book an Appointment
//           </button>
//         </div>
//       ) : (
//         <div className="space-y-6">
//           {appointments.map((appointment) => (
//             <div key={appointment.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {/* Doctor Info */}
//                 <div className="flex items-start space-x-4">
//                   <img
//                     src={appointment.doctor?.image || '/default-doctor.png'}
//                     alt={appointment.doctor?.name}
//                     className="w-16 h-16 rounded-lg object-cover border border-gray-200"
//                     onError={(e) => {
//                       e.target.src = '/default-doctor.png';
//                     }}
//                   />
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-gray-900 text-lg">
//                       {appointment.doctor?.name || 'Doctor Information Not Available'}
//                     </h3>
//                     <p className="text-gray-600 text-sm">
//                       {appointment.doctor?.speciality || 'Speciality not specified'}
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                       {appointment.doctor?.degree || 'Medical Professional'}
//                     </p>
//                     <p className="text-sm font-semibold text-gray-900 mt-2">
//                       Fee: ₹{appointment.doctor?.fees || appointment.fee || 'N/A'}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Appointment Details */}
//                 <div className="space-y-3">
//                   <div>
//                     <span className="font-medium text-gray-700 text-sm">Date & Time:</span>
//                     <p className="text-gray-900">
//                       {appointment.appointmentDateTime 
//                         ? new Date(appointment.appointmentDateTime).toLocaleString('en-IN', {
//                             weekday: 'short',
//                             year: 'numeric',
//                             month: 'short',
//                             day: 'numeric',
//                             hour: '2-digit',
//                             minute: '2-digit'
//                           })
//                         : 'Not scheduled'
//                       }
//                     </p>
//                   </div>
                  
//                   <div className="flex items-center space-x-2">
//                     <span className="font-medium text-gray-700 text-sm">Status:</span>
//                     <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                       appointment.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
//                       appointment.status === 'COMPLETED' ? 'bg-green-100 text-green-800 border border-green-200' :
//                       appointment.status === 'CANCELLED' ? 'bg-red-100 text-red-800 border border-red-200' :
//                       appointment.status === 'CONFIRMED' ? 'bg-green-100 text-green-800 border border-green-200' :
//                       'bg-gray-100 text-gray-800 border border-gray-200'
//                     }`}>
//                       {appointment.status || 'PENDING'}
//                     </span>
//                   </div>
                  
//                   {appointment.notes && (
//                     <div>
//                       <span className="font-medium text-gray-700 text-sm">Notes:</span>
//                       <p className="text-gray-600 text-sm mt-1">{appointment.notes}</p>
//                     </div>
//                   )}
                  
//                   {appointment.id && (
//                     <div>
//                       <span className="font-medium text-gray-700 text-sm">Appointment ID:</span>
//                       <p className="text-gray-500 text-xs font-mono">{appointment.id}</p>
//                     </div>
//                   )}
//                 </div>

//                 {/* Actions */}
//                 <div className="flex flex-col space-y-3">
//                   <button 
//                     onClick={() => handlePayOnline(appointment)}
//                     disabled={appointment.status === 'CANCELLED' || appointment.status === 'COMPLETED'}
//                     className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
//                   >
//                     {appointment.status === 'COMPLETED' ? 'Completed' : 'Pay Online'}
//                   </button>
                  
//                   <button 
//                     onClick={() => handleCancelAppointment(appointment.id)}
//                     disabled={appointment.status === 'CANCELLED' || appointment.status === 'COMPLETED'}
//                     className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
//                   >
//                     {appointment.status === 'CANCELLED' ? 'Cancelled' : 
//                      appointment.status === 'COMPLETED' ? 'Completed' : 'Cancel Appointment'}
//                   </button>
                  
//                   {(appointment.status === 'SCHEDULED' || appointment.status === 'CONFIRMED') && (
//                     <button 
//                       onClick={() => alert('Reschedule functionality coming soon!')}
//                       className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
//                     >
//                       Reschedule
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Debug Info - Remove in production */}
//       <div className="mt-8 p-4 bg-gray-100 rounded-lg">
//         <h4 className="font-semibold mb-2 text-sm">Debug Info:</h4>
//         <div className="text-xs text-gray-600 space-y-1">
//           <p>Total Appointments: {appointments.length}</p>
//           <p>User ID: {user?.id || 'Not available'}</p>
//           <p>User Email: {user?.email || 'Not available'}</p>
//           <p>Appointments Data: {JSON.stringify(appointments.slice(0, 1))}</p>
//         </div>
//       </div>


//       // Add this button temporarily to test endpoints
// <button 
//   onClick={() => {
//     const { testAppointmentEndpoints } = useContext(AppContext);

//     testAppointmentEndpoints();
//   }}
//   className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
// >
//   Test Endpoints
// </button>
//     </div>



//   )
// }

// export default MyAppointments;












import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom';

function MyAppointments() {
  const { 
    fetchUserAppointments, 
    cancelAppointment, 
    isAuthenticated, 
    user,
    testAppointmentEndpoints  // Add this to the destructuring
  } = useContext(AppContext);
  
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  console.log("📅 MyAppointments component loaded");
  console.log("👤 User:", user);
  console.log("🔑 Authenticated:", isAuthenticated());

  useEffect(() => {
    const loadAppointments = async () => {
      if (!isAuthenticated()) {
        console.log("❌ User not authenticated, redirecting to login");
        setError('Please log in to view appointments');
        setTimeout(() => navigate('/login'), 2000);
        return;
      }

      try {
        setLoading(true);
        setError('');
        setMessage('');
        
        console.log("🔄 Fetching user appointments...");
        const userAppointments = await fetchUserAppointments();
        console.log("✅ Appointments fetched:", userAppointments);
        
        setAppointments(userAppointments || []);
        
        if (!userAppointments || userAppointments.length === 0) {
          setMessage('No appointments found');
        }
      } catch (error) {
        console.error("❌ Error fetching appointments:", error);
        
        if (error.message.includes('403') || error.message.includes('forbidden')) {
          setError('Access denied. Please check your permissions or try logging in again.');
        } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
          setError('Session expired. Please log in again.');
          setTimeout(() => navigate('/login'), 2000);
        } else if (error.message.includes('No user ID')) {
          setError('User information not found. Please log in again.');
          setTimeout(() => navigate('/login'), 2000);
        } else {
          setError('Failed to load appointments: ' + error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadAppointments();
  }, [fetchUserAppointments, isAuthenticated, navigate]);

  const handleCancelAppointment = async (appointmentId) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) {
      return;
    }

    try {
      console.log("🗑️ Cancelling appointment:", appointmentId);
      setMessage('');
      setError('');
      
      const result = await cancelAppointment(appointmentId);
      
      if (result.success) {
        console.log("✅ Appointment cancelled successfully");
        setMessage('Appointment cancelled successfully');
        
        // Remove the cancelled appointment from the list
        setAppointments(prev => prev.filter(apt => apt.id !== appointmentId));
        
        setTimeout(() => setMessage(''), 3000);
      } else {
        console.error("❌ Failed to cancel appointment:", result.error);
        setError('Failed to cancel appointment: ' + result.error);
        
        // Refresh appointments list to get current status
        try {
          const updatedAppointments = await fetchUserAppointments();
          setAppointments(updatedAppointments || []);
        } catch (refreshError) {
          console.error("Failed to refresh appointments:", refreshError);
        }
      }
    } catch (error) {
      console.error("❌ Error cancelling appointment:", error);
      setError('Error cancelling appointment: ' + error.message);
    }
  };

  const handlePayOnline = (appointment) => {
    console.log("💳 Processing payment for appointment:", appointment.id);
    
    if (appointment.status === 'CANCELLED') {
      alert('This appointment has been cancelled and cannot be paid for.');
      return;
    }
    
    if (appointment.status === 'COMPLETED') {
      alert('This appointment has already been completed.');
      return;
    }
    
    const fee = appointment.doctor?.fees || appointment.fee || 500; // Default fee if not available
    alert(`Payment of ₹${fee} for Dr. ${appointment.doctor?.name} will be processed soon!\n\nYou will be redirected to the payment gateway.`);
    
    // In a real app, you would redirect to payment gateway here
    // navigate('/payment', { state: { appointment, amount: fee } });
  };

  const handleRetryLoad = () => {
    setError('');
    setLoading(true);
    setTimeout(() => {
      window.location.reload(); // Simple reload to retry
    }, 500);
  };

  // Handle test endpoints button click
  const handleTestEndpoints = () => {
    if (testAppointmentEndpoints) {
      testAppointmentEndpoints();
    } else {
      console.log('❌ testAppointmentEndpoints function not available');
      alert('Test endpoints function not available');
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-center items-center min-h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#5f5FFF]"></div>
          <p className="ml-4 text-gray-600">Loading appointments...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated()) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center">
        <div className="text-6xl mb-4">🔐</div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">Authentication Required</h2>
        <p className="text-gray-600 mb-4">Please log in to view your appointments.</p>
        <button 
          onClick={() => navigate('/login')}
          className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">My Appointments</h1>
        <button
          onClick={() => navigate('/doctors')}
          className="bg-[#5f5FFF] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
        >
          Book New Appointment
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-red-800 font-semibold mb-2">Error Loading Appointments</h3>
              <p className="text-red-700">{error}</p>
            </div>
            <button
              onClick={handleRetryLoad}
              className="ml-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
            >
              Retry
            </button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {message && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg mb-6 text-green-800">
          {message}
        </div>
      )}

      {/* Test Endpoints Button - Add this */}
      <div className="mb-6">
        <button 
          onClick={handleTestEndpoints}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Test Endpoints
        </button>
        <p className="text-sm text-gray-500 mt-2">
          Click to test if appointment endpoints are working
        </p>
      </div>

      {appointments.length === 0 && !error ? (
        <div className="text-center py-12">
          <div className="text-gray-400 text-6xl mb-4">📅</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">No Appointments Found</h3>
          <p className="text-gray-500 mb-4">You don't have any appointments scheduled yet.</p>
          <button
            onClick={() => navigate('/doctors')}
            className="bg-[#5f5fff] text-white px-6 py-2 rounded-lg hover:bg-[#4a4aff] transition-colors"
          >
            Book an Appointment
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Doctor Info */}
                <div className="flex items-start space-x-4">
                  <img
                    src={appointment.doctor?.image || '/default-doctor.png'}
                    alt={appointment.doctor?.name}
                    className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                    onError={(e) => {
                      e.target.src = '/default-doctor.png';
                    }}
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {appointment.doctor?.name || 'Doctor Information Not Available'}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {appointment.doctor?.speciality || 'Speciality not specified'}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {appointment.doctor?.degree || 'Medical Professional'}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 mt-2">
                      Fee: ₹{appointment.doctor?.fees || appointment.fee || 'N/A'}
                    </p>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700 text-sm">Date & Time:</span>
                    <p className="text-gray-900">
                      {appointment.appointmentDateTime 
                        ? new Date(appointment.appointmentDateTime).toLocaleString('en-IN', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })
                        : 'Not scheduled'
                      }
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700 text-sm">Status:</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.status === 'SCHEDULED' ? 'bg-blue-100 text-blue-800 border border-blue-200' :
                      appointment.status === 'COMPLETED' ? 'bg-green-100 text-green-800 border border-green-200' :
                      appointment.status === 'CANCELLED' ? 'bg-red-100 text-red-800 border border-red-200' :
                      appointment.status === 'CONFIRMED' ? 'bg-green-100 text-green-800 border border-green-200' :
                      'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                      {appointment.status || 'PENDING'}
                    </span>
                  </div>
                  
                  {appointment.notes && (
                    <div>
                      <span className="font-medium text-gray-700 text-sm">Notes:</span>
                      <p className="text-gray-600 text-sm mt-1">{appointment.notes}</p>
                    </div>
                  )}
                  
                  {appointment.id && (
                    <div>
                      <span className="font-medium text-gray-700 text-sm">Appointment ID:</span>
                      <p className="text-gray-500 text-xs font-mono">{appointment.id}</p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-3">
                  <button 
                    onClick={() => handlePayOnline(appointment)}
                    disabled={appointment.status === 'CANCELLED' || appointment.status === 'COMPLETED'}
                    className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
                  >
                    {appointment.status === 'COMPLETED' ? 'Completed' : 'Pay Online'}
                  </button>
                  
                  <button 
                    onClick={() => handleCancelAppointment(appointment.id)}
                    disabled={appointment.status === 'CANCELLED' || appointment.status === 'COMPLETED'}
                    className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
                  >
                    {appointment.status === 'CANCELLED' ? 'Cancelled' : 
                     appointment.status === 'COMPLETED' ? 'Completed' : 'Cancel Appointment'}
                  </button>
                  
                  {(appointment.status === 'SCHEDULED' || appointment.status === 'CONFIRMED') && (
                    <button 
                      onClick={() => alert('Reschedule functionality coming soon!')}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Reschedule
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Debug Info - Remove in production */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h4 className="font-semibold mb-2 text-sm">Debug Info:</h4>
        <div className="text-xs text-gray-600 space-y-1">
          <p>Total Appointments: {appointments.length}</p>
          <p>User ID: {user?.id || 'Not available'}</p>
          <p>User Email: {user?.email || 'Not available'}</p>
          <p>Appointments Data: {JSON.stringify(appointments.slice(0, 1))}</p>
        </div>
      </div>
    </div>
  )
}

export default MyAppointments;