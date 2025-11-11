// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // const AdminDashboard = () => {
// // // //   const navigate = useNavigate();
// // // //   const [activeTab, setActiveTab] = useState('dashboard');
// // // //   const [users, setUsers] = useState([]);
// // // //   const [doctors, setDoctors] = useState([]);
// // // //   const [appointments, setAppointments] = useState([]);

// // // //   // Check authentication on component mount
// // // //   useEffect(() => {
// // // //     const isAuthenticated = localStorage.getItem('adminAuthenticated');
// // // //     const loginTime = localStorage.getItem('adminLoginTime');
    
// // // //     // Check if session is valid (24 hours)
// // // //     if (!isAuthenticated || !loginTime) {
// // // //       navigate('/admin/login');
// // // //       return;
// // // //     }
    
// // // //     const loginTimestamp = new Date(loginTime).getTime();
// // // //     const currentTime = new Date().getTime();
// // // //     const hoursDiff = (currentTime - loginTimestamp) / (1000 * 60 * 60);
    
// // // //     if (hoursDiff > 24) {
// // // //       localStorage.removeItem('adminAuthenticated');
// // // //       localStorage.removeItem('adminLoginTime');
// // // //       navigate('/admin/login');
// // // //     }
// // // //   }, [navigate]);

// // // //   const handleLogout = () => {
// // // //     localStorage.removeItem('adminAuthenticated');
// // // //     localStorage.removeItem('adminLoginTime');
// // // //     navigate('/admin/login');
// // // //   };

// // // //   // Mock data - replace with actual API calls
// // // //   useEffect(() => {
// // // //     // Simulate fetching data
// // // //     setUsers([
// // // //       { id: 1, name: 'John Doe', email: 'john@example.com', appointments: 3 },
// // // //       { id: 2, name: 'Jane Smith', email: 'jane@example.com', appointments: 1 },
// // // //       { id: 3, name: 'Bob Johnson', email: 'bob@example.com', appointments: 2 }
// // // //     ]);

// // // //     setDoctors([
// // // //       { id: 1, name: 'Dr. Sarah Johnson', speciality: 'Cardiologist', patients: 45 },
// // // //       { id: 2, name: 'Dr. Michael Chen', speciality: 'Dermatologist', patients: 32 },
// // // //       { id: 3, name: 'Dr. Emily Davis', speciality: 'Pediatrician', patients: 28 }
// // // //     ]);

// // // //     setAppointments([
// // // //       { id: 1, patient: 'John Doe', doctor: 'Dr. Sarah Johnson', date: '2024-01-15', status: 'Scheduled' },
// // // //       { id: 2, patient: 'Jane Smith', doctor: 'Dr. Michael Chen', date: '2024-01-16', status: 'Completed' },
// // // //       { id: 3, patient: 'Bob Johnson', doctor: 'Dr. Emily Davis', date: '2024-01-17', status: 'Cancelled' }
// // // //     ]);
// // // //   }, []);

// // // //   const renderContent = () => {
// // // //     switch (activeTab) {
// // // //       case 'dashboard':
// // // //         return (
// // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // // //             <div className="bg-white p-6 rounded-lg shadow">
// // // //               <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
// // // //               <p className="text-3xl font-bold text-blue-600">{users.length}</p>
// // // //             </div>
// // // //             <div className="bg-white p-6 rounded-lg shadow">
// // // //               <h3 className="text-lg font-semibold text-gray-700">Total Doctors</h3>
// // // //               <p className="text-3xl font-bold text-green-600">{doctors.length}</p>
// // // //             </div>
// // // //             <div className="bg-white p-6 rounded-lg shadow">
// // // //               <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
// // // //               <p className="text-3xl font-bold text-purple-600">{appointments.length}</p>
// // // //             </div>
// // // //           </div>
// // // //         );

// // // //       case 'users':
// // // //         return (
// // // //           <div className="bg-white rounded-lg shadow overflow-hidden">
// // // //             <table className="min-w-full divide-y divide-gray-200">
// // // //               <thead className="bg-gray-50">
// // // //                 <tr>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // //                 {users.map((user) => (
// // // //                   <tr key={user.id}>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.appointments}</td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         );

// // // //       case 'doctors':
// // // //         return (
// // // //           <div className="bg-white rounded-lg shadow overflow-hidden">
// // // //             <table className="min-w-full divide-y divide-gray-200">
// // // //               <thead className="bg-gray-50">
// // // //                 <tr>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speciality</th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patients</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // //                 {doctors.map((doctor) => (
// // // //                   <tr key={doctor.id}>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{doctor.name}</td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.speciality}</td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{doctor.patients}</td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         );

// // // //       case 'appointments':
// // // //         return (
// // // //           <div className="bg-white rounded-lg shadow overflow-hidden">
// // // //             <table className="min-w-full divide-y divide-gray-200">
// // // //               <thead className="bg-gray-50">
// // // //                 <tr>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
// // // //                 </tr>
// // // //               </thead>
// // // //               <tbody className="bg-white divide-y divide-gray-200">
// // // //                 {appointments.map((appointment) => (
// // // //                   <tr key={appointment.id}>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patient}</td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor}</td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
// // // //                     <td className="px-6 py-4 whitespace-nowrap">
// // // //                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// // // //                         appointment.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
// // // //                         appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
// // // //                         'bg-red-100 text-red-800'
// // // //                       }`}>
// // // //                         {appointment.status}
// // // //                       </span>
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))}
// // // //               </tbody>
// // // //             </table>
// // // //           </div>
// // // //         );

// // // //       default:
// // // //         return null;
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="min-h-screen bg-gray-100">
// // // //       {/* Header */}
// // // //       <header className="bg-white shadow">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="flex justify-between items-center py-6">
// // // //             <div className="flex items-center">
// // // //               <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
// // // //             </div>
// // // //             <button
// // // //               onClick={handleLogout}
// // // //               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
// // // //             >
// // // //               Logout
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </header>

// // // //       {/* Navigation */}
// // // //       <nav className="bg-white shadow-sm">
// // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // //           <div className="flex space-x-8">
// // // //             {['dashboard', 'users', 'doctors', 'appointments'].map((tab) => (
// // // //               <button
// // // //                 key={tab}
// // // //                 onClick={() => setActiveTab(tab)}
// // // //                 className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
// // // //                   activeTab === tab
// // // //                     ? 'border-blue-500 text-blue-600'
// // // //                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
// // // //                 }`}
// // // //               >
// // // //                 {tab}
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </nav>

// // // //       {/* Main Content */}
// // // //       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
// // // //         <div className="px-4 py-6 sm:px-0">
// // // //           {renderContent()}
// // // //         </div>
// // // //       </main>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AdminDashboard;













// // // import React, { useState, useEffect, useContext } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import { AppContext } from '../context/AppContext';

// // // const AdminDashboard = () => {
// // //   const navigate = useNavigate();
// // //   const { doctors, setDoctors } = useContext(AppContext);
// // //   const [activeTab, setActiveTab] = useState('doctors');
// // //   const [users, setUsers] = useState([]);
// // //   const [appointments, setAppointments] = useState([]);
  
// // //   // Doctor form state
// // //   const [doctorForm, setDoctorForm] = useState({
// // //     name: '',
// // //     speciality: '',
// // //     degree: '',
// // //     experience: '',
// // //     fees: '',
// // //     about: '',
// // //     image: '',
// // //     verified: false
// // //   });
// // //   const [editingDoctor, setEditingDoctor] = useState(null);

// // //   // Check authentication
// // //   useEffect(() => {
// // //     const isAuthenticated = localStorage.getItem('adminAuthenticated');
// // //     if (!isAuthenticated) {
// // //       navigate('/admin/login');
// // //     }
// // //   }, [navigate]);

// // //   // Mock data for users and appointments
// // //   useEffect(() => {
// // //     setUsers([
// // //       { id: 1, name: 'John Doe', email: 'john@example.com', appointments: 3 },
// // //       { id: 2, name: 'Jane Smith', email: 'jane@example.com', appointments: 1 },
// // //     ]);

// // //     setAppointments([
// // //       { id: 1, patient: 'John Doe', doctor: 'Dr. Sarah Johnson', date: '2024-01-15', status: 'Scheduled' },
// // //       { id: 2, patient: 'Jane Smith', doctor: 'Dr. Michael Chen', date: '2024-01-16', status: 'Completed' },
// // //     ]);
// // //   }, []);

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('adminAuthenticated');
// // //     localStorage.removeItem('adminLoginTime');
// // //     navigate('/admin/login');
// // //   };

// // //   // Doctor management functions
// // //   const handleAddDoctor = (e) => {
// // //     e.preventDefault();
    
// // //     const newDoctor = {
// // //       id: Date.now(), // Temporary ID, in real app use backend ID
// // //       ...doctorForm,
// // //       fees: parseFloat(doctorForm.fees),
// // //       verified: true
// // //     };

// // //     setDoctors(prev => [...prev, newDoctor]);
// // //     setDoctorForm({
// // //       name: '',
// // //       speciality: '',
// // //       degree: '',
// // //       experience: '',
// // //       fees: '',
// // //       about: '',
// // //       image: '',
// // //       verified: false
// // //     });
// // //   };

// // //   const handleEditDoctor = (doctor) => {
// // //     setEditingDoctor(doctor);
// // //     setDoctorForm({
// // //       name: doctor.name,
// // //       speciality: doctor.speciality,
// // //       degree: doctor.degree,
// // //       experience: doctor.experience,
// // //       fees: doctor.fees,
// // //       about: doctor.about,
// // //       image: doctor.image,
// // //       verified: doctor.verified
// // //     });
// // //   };

// // //   const handleUpdateDoctor = (e) => {
// // //     e.preventDefault();
    
// // //     setDoctors(prev => 
// // //       prev.map(doc => 
// // //         doc.id === editingDoctor.id 
// // //           ? { ...doc, ...doctorForm, fees: parseFloat(doctorForm.fees) }
// // //           : doc
// // //       )
// // //     );
    
// // //     setEditingDoctor(null);
// // //     setDoctorForm({
// // //       name: '',
// // //       speciality: '',
// // //       degree: '',
// // //       experience: '',
// // //       fees: '',
// // //       about: '',
// // //       image: '',
// // //       verified: false
// // //     });
// // //   };

// // //   const handleDeleteDoctor = (doctorId) => {
// // //     if (window.confirm('Are you sure you want to delete this doctor?')) {
// // //       setDoctors(prev => prev.filter(doc => doc.id !== doctorId));
// // //     }
// // //   };

// // //   const cancelEdit = () => {
// // //     setEditingDoctor(null);
// // //     setDoctorForm({
// // //       name: '',
// // //       speciality: '',
// // //       degree: '',
// // //       experience: '',
// // //       fees: '',
// // //       about: '',
// // //       image: '',
// // //       verified: false
// // //     });
// // //   };

// // //   const renderContent = () => {
// // //     switch (activeTab) {
// // //       case 'dashboard':
// // //         return (
// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// // //             <div className="bg-white p-6 rounded-lg shadow">
// // //               <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
// // //               <p className="text-3xl font-bold text-blue-600">{users.length}</p>
// // //             </div>
// // //             <div className="bg-white p-6 rounded-lg shadow">
// // //               <h3 className="text-lg font-semibold text-gray-700">Total Doctors</h3>
// // //               <p className="text-3xl font-bold text-green-600">{doctors.length}</p>
// // //             </div>
// // //             <div className="bg-white p-6 rounded-lg shadow">
// // //               <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
// // //               <p className="text-3xl font-bold text-purple-600">{appointments.length}</p>
// // //             </div>
// // //           </div>
// // //         );

// // //       case 'doctors':
// // //         return (
// // //           <div className="space-y-6">
// // //             {/* Add/Edit Doctor Form */}
// // //             <div className="bg-white p-6 rounded-lg shadow">
// // //               <h3 className="text-lg font-semibold text-gray-800 mb-4">
// // //                 {editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}
// // //               </h3>
// // //               <form onSubmit={editingDoctor ? handleUpdateDoctor : handleAddDoctor} className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
// // //                   <input
// // //                     type="text"
// // //                     required
// // //                     value={doctorForm.name}
// // //                     onChange={(e) => setDoctorForm({...doctorForm, name: e.target.value})}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                     placeholder="Dr. John Doe"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Speciality</label>
// // //                   <select
// // //                     required
// // //                     value={doctorForm.speciality}
// // //                     onChange={(e) => setDoctorForm({...doctorForm, speciality: e.target.value})}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                   >
// // //                     <option value="">Select Speciality</option>
// // //                     <option value="General physician">General Physician</option>
// // //                     <option value="Gynecologist">Gynecologist</option>
// // //                     <option value="Dermatologist">Dermatologist</option>
// // //                     <option value="Pediatricians">Pediatrician</option>
// // //                     <option value="Neurologist">Neurologist</option>
// // //                     <option value="Gastroenterologist">Gastroenterologist</option>
// // //                     <option value="Cardiologist">Cardiologist</option>
// // //                   </select>
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
// // //                   <input
// // //                     type="text"
// // //                     required
// // //                     value={doctorForm.degree}
// // //                     onChange={(e) => setDoctorForm({...doctorForm, degree: e.target.value})}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                     placeholder="MBBS, MD"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
// // //                   <input
// // //                     type="text"
// // //                     required
// // //                     value={doctorForm.experience}
// // //                     onChange={(e) => setDoctorForm({...doctorForm, experience: e.target.value})}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                     placeholder="5 years"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Fees (₹)</label>
// // //                   <input
// // //                     type="number"
// // //                     required
// // //                     value={doctorForm.fees}
// // //                     onChange={(e) => setDoctorForm({...doctorForm, fees: e.target.value})}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                     placeholder="500"
// // //                   />
// // //                 </div>

// // //                 <div>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
// // //                   <input
// // //                     type="url"
// // //                     required
// // //                     value={doctorForm.image}
// // //                     onChange={(e) => setDoctorForm({...doctorForm, image: e.target.value})}
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                     placeholder="https://example.com/doctor.jpg"
// // //                   />
// // //                 </div>

// // //                 <div className="md:col-span-2">
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
// // //                   <textarea
// // //                     required
// // //                     value={doctorForm.about}
// // //                     onChange={(e) => setDoctorForm({...doctorForm, about: e.target.value})}
// // //                     rows="3"
// // //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// // //                     placeholder="Doctor's description and expertise..."
// // //                   />
// // //                 </div>

// // //                 <div className="md:col-span-2 flex gap-3">
// // //                   <button
// // //                     type="submit"
// // //                     className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
// // //                   >
// // //                     {editingDoctor ? 'Update Doctor' : 'Add Doctor'}
// // //                   </button>
// // //                   {editingDoctor && (
// // //                     <button
// // //                       type="button"
// // //                       onClick={cancelEdit}
// // //                       className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
// // //                     >
// // //                       Cancel
// // //                     </button>
// // //                   )}
// // //                 </div>
// // //               </form>
// // //             </div>

// // //             {/* Doctors List */}
// // //             <div className="bg-white rounded-lg shadow overflow-hidden">
// // //               <div className="px-6 py-4 border-b border-gray-200">
// // //                 <h3 className="text-lg font-semibold text-gray-800">Doctors List ({doctors.length})</h3>
// // //               </div>
// // //               <div className="overflow-x-auto">
// // //                 <table className="min-w-full divide-y divide-gray-200">
// // //                   <thead className="bg-gray-50">
// // //                     <tr>
// // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
// // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speciality</th>
// // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
// // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
// // //                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody className="bg-white divide-y divide-gray-200">
// // //                     {doctors.map((doctor) => (
// // //                       <tr key={doctor.id} className="hover:bg-gray-50">
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <img
// // //                             src={doctor.image}
// // //                             alt={doctor.name}
// // //                             className="h-12 w-12 rounded-full object-cover"
// // //                           />
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
// // //                           <div className="text-sm text-gray-500">{doctor.experience}</div>
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                           {doctor.speciality}
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                           {doctor.degree}
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// // //                           ₹{doctor.fees}
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// // //                           <div className="flex gap-2">
// // //                             <button
// // //                               onClick={() => handleEditDoctor(doctor)}
// // //                               className="text-blue-600 hover:text-blue-900"
// // //                             >
// // //                               Edit
// // //                             </button>
// // //                             <button
// // //                               onClick={() => handleDeleteDoctor(doctor.id)}
// // //                               className="text-red-600 hover:text-red-900"
// // //                             >
// // //                               Delete
// // //                             </button>
// // //                           </div>
// // //                         </td>
// // //                       </tr>
// // //                     ))}
// // //                   </tbody>
// // //                 </table>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         );

// // //       case 'users':
// // //         return (
// // //           <div className="bg-white rounded-lg shadow overflow-hidden">
// // //             <div className="px-6 py-4 border-b border-gray-200">
// // //               <h3 className="text-lg font-semibold text-gray-800">Users ({users.length})</h3>
// // //             </div>
// // //             <table className="min-w-full divide-y divide-gray-200">
// // //               <thead className="bg-gray-50">
// // //                 <tr>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white divide-y divide-gray-200">
// // //                 {users.map((user) => (
// // //                   <tr key={user.id}>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.appointments}</td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         );

// // //       case 'appointments':
// // //         return (
// // //           <div className="bg-white rounded-lg shadow overflow-hidden">
// // //             <div className="px-6 py-4 border-b border-gray-200">
// // //               <h3 className="text-lg font-semibold text-gray-800">Appointments ({appointments.length})</h3>
// // //             </div>
// // //             <table className="min-w-full divide-y divide-gray-200">
// // //               <thead className="bg-gray-50">
// // //                 <tr>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// // //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white divide-y divide-gray-200">
// // //                 {appointments.map((appointment) => (
// // //                   <tr key={appointment.id}>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patient}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
// // //                     <td className="px-6 py-4 whitespace-nowrap">
// // //                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// // //                         appointment.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
// // //                         appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
// // //                         'bg-red-100 text-red-800'
// // //                       }`}>
// // //                         {appointment.status}
// // //                       </span>
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </table>
// // //           </div>
// // //         );

// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100">
// // //       {/* Header */}
// // //       <header className="bg-white shadow">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex justify-between items-center py-6">
// // //             <div className="flex items-center">
// // //               <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
// // //             </div>
// // //             <button
// // //               onClick={handleLogout}
// // //               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
// // //             >
// // //               Logout
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* Navigation */}
// // //       <nav className="bg-white shadow-sm">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex space-x-8">
// // //             {['dashboard', 'doctors', 'users', 'appointments'].map((tab) => (
// // //               <button
// // //                 key={tab}
// // //                 onClick={() => setActiveTab(tab)}
// // //                 className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
// // //                   activeTab === tab
// // //                     ? 'border-blue-500 text-blue-600'
// // //                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
// // //                 }`}
// // //               >
// // //                 {tab}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Main Content */}
// // //       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
// // //         <div className="px-4 py-6 sm:px-0">
// // //           {renderContent()}
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;

























// // import React, { useState, useEffect, useContext } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { AppContext } from '../context/AppContext';

// // const AdminDashboard = () => {
// //   const navigate = useNavigate();
// //   const { doctors, setDoctors } = useContext(AppContext);
// //   const [activeTab, setActiveTab] = useState('doctors');
// //   const [users, setUsers] = useState([]);
// //   const [appointments, setAppointments] = useState([]);
  
// //   // Doctor form state
// //   const [doctorForm, setDoctorForm] = useState({
// //     name: '',
// //     speciality: '',
// //     degree: '',
// //     experience: '',
// //     fees: '',
// //     about: '',
// //     image: '',
// //     verified: true
// //   });
// //   const [editingDoctor, setEditingDoctor] = useState(null);
// //   const [formMessage, setFormMessage] = useState('');

// //   // Check authentication
// //   useEffect(() => {
// //     const isAuthenticated = localStorage.getItem('adminAuthenticated');
// //     if (!isAuthenticated) {
// //       navigate('/admin/login');
// //     }
// //   }, [navigate]);

// //   // Mock data for users and appointments
// //   useEffect(() => {
// //     setUsers([
// //       { id: 1, name: 'John Doe', email: 'john@example.com', appointments: 3 },
// //       { id: 2, name: 'Jane Smith', email: 'jane@example.com', appointments: 1 },
// //     ]);

// //     setAppointments([
// //       { id: 1, patient: 'John Doe', doctor: 'Dr. Sarah Johnson', date: '2024-01-15', status: 'Scheduled' },
// //       { id: 2, patient: 'Jane Smith', doctor: 'Dr. Michael Chen', date: '2024-01-16', status: 'Completed' },
// //     ]);
// //   }, []);

// //   const handleLogout = () => {
// //     localStorage.removeItem('adminAuthenticated');
// //     localStorage.removeItem('adminLoginTime');
// //     navigate('/admin/login');
// //   };

// //   // Doctor management functions
// //   const handleAddDoctor = (e) => {
// //     e.preventDefault();
// //     console.log('🔄 Adding new doctor...', doctorForm);
    
// //     // Validate form
// //     if (!doctorForm.name || !doctorForm.speciality || !doctorForm.degree || !doctorForm.experience || !doctorForm.fees || !doctorForm.image) {
// //       setFormMessage('❌ Please fill all required fields');
// //       return;
// //     }

// //     const newDoctor = {
// //       id: Date.now(), // Temporary ID
// //       name: doctorForm.name,
// //       speciality: doctorForm.speciality,
// //       degree: doctorForm.degree,
// //       experience: doctorForm.experience,
// //       fees: parseFloat(doctorForm.fees),
// //       about: doctorForm.about,
// //       image: doctorForm.image,
// //       verified: true
// //     };

// //     console.log('✅ New doctor object:', newDoctor);

// //     // Update doctors state
// //     setDoctors(prev => {
// //       const updatedDoctors = [...prev, newDoctor];
// //       console.log('📊 Updated doctors array:', updatedDoctors);
// //       return updatedDoctors;
// //     });

// //     // Reset form
// //     setDoctorForm({
// //       name: '',
// //       speciality: '',
// //       degree: '',
// //       experience: '',
// //       fees: '',
// //       about: '',
// //       image: '',
// //       verified: true
// //     });

// //     setFormMessage('✅ Doctor added successfully!');
    
// //     // Clear message after 3 seconds
// //     setTimeout(() => setFormMessage(''), 3000);
// //   };

// //   const handleEditDoctor = (doctor) => {
// //     console.log('✏️ Editing doctor:', doctor);
// //     setEditingDoctor(doctor);
// //     setDoctorForm({
// //       name: doctor.name,
// //       speciality: doctor.speciality,
// //       degree: doctor.degree,
// //       experience: doctor.experience,
// //       fees: doctor.fees.toString(),
// //       about: doctor.about,
// //       image: doctor.image,
// //       verified: doctor.verified
// //     });
// //     setFormMessage('');
// //   };

// //   const handleUpdateDoctor = (e) => {
// //     e.preventDefault();
// //     console.log('🔄 Updating doctor:', editingDoctor.id);
    
// //     if (!doctorForm.name || !doctorForm.speciality || !doctorForm.degree || !doctorForm.experience || !doctorForm.fees || !doctorForm.image) {
// //       setFormMessage('❌ Please fill all required fields');
// //       return;
// //     }

// //     const updatedDoctor = {
// //       ...editingDoctor,
// //       name: doctorForm.name,
// //       speciality: doctorForm.speciality,
// //       degree: doctorForm.degree,
// //       experience: doctorForm.experience,
// //       fees: parseFloat(doctorForm.fees),
// //       about: doctorForm.about,
// //       image: doctorForm.image,
// //       verified: true
// //     };

// //     setDoctors(prev => 
// //       prev.map(doc => 
// //         doc.id === editingDoctor.id ? updatedDoctor : doc
// //       )
// //     );
    
// //     setEditingDoctor(null);
// //     setDoctorForm({
// //       name: '',
// //       speciality: '',
// //       degree: '',
// //       experience: '',
// //       fees: '',
// //       about: '',
// //       image: '',
// //       verified: true
// //     });
    
// //     setFormMessage('✅ Doctor updated successfully!');
// //     setTimeout(() => setFormMessage(''), 3000);
// //   };

// //   const handleDeleteDoctor = (doctorId) => {
// //     console.log('🗑️ Deleting doctor:', doctorId);
// //     if (window.confirm('Are you sure you want to delete this doctor?')) {
// //       setDoctors(prev => {
// //         const filtered = prev.filter(doc => doc.id !== doctorId);
// //         console.log('📊 Doctors after deletion:', filtered);
// //         return filtered;
// //       });
// //       setFormMessage('✅ Doctor deleted successfully!');
// //       setTimeout(() => setFormMessage(''), 3000);
// //     }
// //   };

// //   const cancelEdit = () => {
// //     setEditingDoctor(null);
// //     setDoctorForm({
// //       name: '',
// //       speciality: '',
// //       degree: '',
// //       experience: '',
// //       fees: '',
// //       about: '',
// //       image: '',
// //       verified: true
// //     });
// //     setFormMessage('');
// //   };

// //   // Debug: Log doctors state changes
// //   useEffect(() => {
// //     console.log('📊 Current doctors state:', doctors);
// //   }, [doctors]);

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case 'dashboard':
// //         return (
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
// //               <p className="text-3xl font-bold text-blue-600">{users.length}</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h3 className="text-lg font-semibold text-gray-700">Total Doctors</h3>
// //               <p className="text-3xl font-bold text-green-600">{doctors.length}</p>
// //             </div>
// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
// //               <p className="text-3xl font-bold text-purple-600">{appointments.length}</p>
// //             </div>
// //           </div>
// //         );

// //       case 'doctors':
// //         return (
// //           <div className="space-y-6">
// //             {/* Add/Edit Doctor Form */}
// //             <div className="bg-white p-6 rounded-lg shadow">
// //               <h3 className="text-lg font-semibold text-gray-800 mb-4">
// //                 {editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}
// //               </h3>
              
// //               {formMessage && (
// //                 <div className={`p-3 rounded mb-4 ${
// //                   formMessage.includes('✅') 
// //                     ? 'bg-green-50 text-green-700 border border-green-200' 
// //                     : 'bg-red-50 text-red-700 border border-red-200'
// //                 }`}>
// //                   {formMessage}
// //                 </div>
// //               )}

// //               <form onSubmit={editingDoctor ? handleUpdateDoctor : handleAddDoctor} className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
// //                   <input
// //                     type="text"
// //                     required
// //                     value={doctorForm.name}
// //                     onChange={(e) => setDoctorForm({...doctorForm, name: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="Dr. John Doe"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Speciality *</label>
// //                   <select
// //                     required
// //                     value={doctorForm.speciality}
// //                     onChange={(e) => setDoctorForm({...doctorForm, speciality: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                   >
// //                     <option value="">Select Speciality</option>
// //                     <option value="General physician">General Physician</option>
// //                     <option value="Gynecologist">Gynecologist</option>
// //                     <option value="Dermatologist">Dermatologist</option>
// //                     <option value="Pediatricians">Pediatrician</option>
// //                     <option value="Neurologist">Neurologist</option>
// //                     <option value="Gastroenterologist">Gastroenterologist</option>
// //                     <option value="Cardiologist">Cardiologist</option>
// //                   </select>
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
// //                   <input
// //                     type="text"
// //                     required
// //                     value={doctorForm.degree}
// //                     onChange={(e) => setDoctorForm({...doctorForm, degree: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="MBBS, MD"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Experience *</label>
// //                   <input
// //                     type="text"
// //                     required
// //                     value={doctorForm.experience}
// //                     onChange={(e) => setDoctorForm({...doctorForm, experience: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="5 years"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Fees (₹) *</label>
// //                   <input
// //                     type="number"
// //                     required
// //                     min="0"
// //                     value={doctorForm.fees}
// //                     onChange={(e) => setDoctorForm({...doctorForm, fees: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="500"
// //                   />
// //                 </div>

// //                 <div>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">Image URL *</label>
// //                   <input
// //                     type="url"
// //                     required
// //                     value={doctorForm.image}
// //                     onChange={(e) => setDoctorForm({...doctorForm, image: e.target.value})}
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="https://example.com/doctor.jpg"
// //                   />
// //                 </div>

// //                 <div className="md:col-span-2">
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
// //                   <textarea
// //                     value={doctorForm.about}
// //                     onChange={(e) => setDoctorForm({...doctorForm, about: e.target.value})}
// //                     rows="3"
// //                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
// //                     placeholder="Doctor's description and expertise..."
// //                   />
// //                 </div>

// //                 <div className="md:col-span-2 flex gap-3">
// //                   <button
// //                     type="submit"
// //                     className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
// //                   >
// //                     {editingDoctor ? 'Update Doctor' : 'Add Doctor'}
// //                   </button>
// //                   {editingDoctor && (
// //                     <button
// //                       type="button"
// //                       onClick={cancelEdit}
// //                       className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors"
// //                     >
// //                       Cancel
// //                     </button>
// //                   )}
// //                 </div>
// //               </form>
// //             </div>

// //             {/* Doctors List */}
// //             <div className="bg-white rounded-lg shadow overflow-hidden">
// //               <div className="px-6 py-4 border-b border-gray-200">
// //                 <h3 className="text-lg font-semibold text-gray-800">
// //                   Doctors List ({doctors.length})
// //                 </h3>
// //                 <p className="text-sm text-gray-600 mt-1">
// //                   Total {doctors.length} doctors in the system
// //                 </p>
// //               </div>
              
// //               {doctors.length === 0 ? (
// //                 <div className="p-8 text-center text-gray-500">
// //                   No doctors found. Add your first doctor above.
// //                 </div>
// //               ) : (
// //                 <div className="overflow-x-auto">
// //                   <table className="min-w-full divide-y divide-gray-200">
// //                     <thead className="bg-gray-50">
// //                       <tr>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speciality</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
// //                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="bg-white divide-y divide-gray-200">
// //                       {doctors.map((doctor) => (
// //                         <tr key={doctor.id} className="hover:bg-gray-50">
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <img
// //                               src={doctor.image}
// //                               alt={doctor.name}
// //                               className="h-12 w-12 rounded-full object-cover"
// //                               onError={(e) => {
// //                                 e.target.src = 'https://via.placeholder.com/100x100?text=Doctor';
// //                               }}
// //                             />
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
// //                             <div className="text-sm text-gray-500">{doctor.experience}</div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                             {doctor.speciality}
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                             {doctor.degree}
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// //                             ₹{doctor.fees}
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
// //                             <div className="flex gap-2">
// //                               <button
// //                                 onClick={() => handleEditDoctor(doctor)}
// //                                 className="text-blue-600 hover:text-blue-900 px-2 py-1 rounded hover:bg-blue-50"
// //                               >
// //                                 Edit
// //                               </button>
// //                               <button
// //                                 onClick={() => handleDeleteDoctor(doctor.id)}
// //                                 className="text-red-600 hover:text-red-900 px-2 py-1 rounded hover:bg-red-50"
// //                               >
// //                                 Delete
// //                               </button>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         );

// //       // ... rest of the cases (users, appointments) remain the same
// //       case 'users':
// //         return (
// //           <div className="bg-white rounded-lg shadow overflow-hidden">
// //             <div className="px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-lg font-semibold text-gray-800">Users ({users.length})</h3>
// //             </div>
// //             <table className="min-w-full divide-y divide-gray-200">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200">
// //                 {users.map((user) => (
// //                   <tr key={user.id}>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.appointments}</td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         );

// //       case 'appointments':
// //         return (
// //           <div className="bg-white rounded-lg shadow overflow-hidden">
// //             <div className="px-6 py-4 border-b border-gray-200">
// //               <h3 className="text-lg font-semibold text-gray-800">Appointments ({appointments.length})</h3>
// //             </div>
// //             <table className="min-w-full divide-y divide-gray-200">
// //               <thead className="bg-gray-50">
// //                 <tr>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
// //                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y divide-gray-200">
// //                 {appointments.map((appointment) => (
// //                   <tr key={appointment.id}>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patient}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctor}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.date}</td>
// //                     <td className="px-6 py-4 whitespace-nowrap">
// //                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
// //                         appointment.status === 'Scheduled' ? 'bg-yellow-100 text-yellow-800' :
// //                         appointment.status === 'Completed' ? 'bg-green-100 text-green-800' :
// //                         'bg-red-100 text-red-800'
// //                       }`}>
// //                         {appointment.status}
// //                       </span>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>
// //         );

// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* Header */}
// //       <header className="bg-white shadow">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex justify-between items-center py-6">
// //             <div className="flex items-center">
// //               <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
// //             </div>
// //             <button
// //               onClick={handleLogout}
// //               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
// //             >
// //               Logout
// //             </button>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Navigation */}
// //       <nav className="bg-white shadow-sm">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="flex space-x-8">
// //             {['dashboard', 'doctors', 'users', 'appointments'].map((tab) => (
// //               <button
// //                 key={tab}
// //                 onClick={() => setActiveTab(tab)}
// //                 className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
// //                   activeTab === tab
// //                     ? 'border-blue-500 text-blue-600'
// //                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
// //                 }`}
// //               >
// //                 {tab}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </nav>

// //       {/* Main Content */}
// //       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
// //         <div className="px-4 py-6 sm:px-0">
// //           {renderContent()}
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;











// import React, { useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AppContext } from '../context/AppContext';
// import { doctorAPI, userAPI, appointmentAPI } from '../services/api';

// const AdminDashboard = () => {
//   const navigate = useNavigate();
//   const { doctors, setDoctors } = useContext(AppContext);
//   const [activeTab, setActiveTab] = useState('doctors');
//   const [users, setUsers] = useState([]);
//   const [appointments, setAppointments] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
  
//   // Doctor form state
//   const [doctorForm, setDoctorForm] = useState({
//     name: '',
//     speciality: '',
//     degree: '',
//     experience: '',
//     fees: '',
//     about: '',
//     image: '',
//     verified: true
//   });
//   const [editingDoctor, setEditingDoctor] = useState(null);
//   const [formMessage, setFormMessage] = useState('');

//   // Check authentication
//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem('adminAuthenticated');
//     if (!isAuthenticated) {
//       navigate('/admin/login');
//     }
//   }, [navigate]);

//   // Fetch data from backend based on active tab
//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       setError('');
      
//       try {
//         switch (activeTab) {
//           case 'doctors':
//             const doctorsData = await doctorAPI.getAllDoctors();
//             setDoctors(doctorsData);
//             break;
//           case 'users':
//             const usersData = await userAPI.getAllUsers();
//             setUsers(usersData);
//             break;
//           case 'appointments':
//             const appointmentsData = await appointmentAPI.getAllAppointments();
//             setAppointments(appointmentsData);
//             break;
//           default:
//             break;
//         }
//       } catch (err) {
//         setError(`Failed to fetch ${activeTab} data: ${err.message}`);
//         console.error('Error fetching data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [activeTab, setDoctors]);

//   const handleLogout = () => {
//     localStorage.removeItem('adminAuthenticated');
//     localStorage.removeItem('adminLoginTime');
//     navigate('/admin/login');
//   };

//   // Doctor management functions
//   const handleAddDoctor = async (e) => {
//     e.preventDefault();
//     console.log('🔄 Adding new doctor...', doctorForm);
    
//     // Validate form
//     if (!doctorForm.name || !doctorForm.speciality || !doctorForm.degree || !doctorForm.experience || !doctorForm.fees) {
//       setFormMessage('❌ Please fill all required fields');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const newDoctor = {
//         name: doctorForm.name,
//         speciality: doctorForm.speciality,
//         degree: doctorForm.degree,
//         experience: doctorForm.experience,
//         fees: parseFloat(doctorForm.fees),
//         about: doctorForm.about || 'GOOD DOCTOR',
//         image: doctorForm.image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
//         verified: true
//       };

//       console.log('✅ Sending doctor data to backend:', newDoctor);

//       // Send to backend
//       const createdDoctor = await doctorAPI.addDoctor(newDoctor);
//       console.log('✅ Doctor created successfully:', createdDoctor);

//       // Update local state with the doctor returned from backend (includes ID)
//       setDoctors(prev => [...prev, createdDoctor]);

//       // Reset form
//       setDoctorForm({
//         name: '',
//         speciality: '',
//         degree: '',
//         experience: '',
//         fees: '',
//         about: '',
//         image: '',
//         verified: true
//       });

//       setFormMessage('✅ Doctor added successfully!');
      
//     } catch (err) {
//       setError(`Failed to add doctor: ${err.message}`);
//       setFormMessage('❌ Failed to add doctor. Please try again.');
//       console.error('Error adding doctor:', err);
//     } finally {
//       setLoading(false);
//       setTimeout(() => setFormMessage(''), 3000);
//     }
//   };

//   const handleEditDoctor = (doctor) => {
//     console.log('✏️ Editing doctor:', doctor);
//     setEditingDoctor(doctor);
//     setDoctorForm({
//       name: doctor.name,
//       speciality: doctor.speciality,
//       degree: doctor.degree,
//       experience: doctor.experience,
//       fees: doctor.fees.toString(),
//       about: doctor.about,
//       image: doctor.image,
//       verified: doctor.verified
//     });
//     setFormMessage('');
//   };

//   const handleUpdateDoctor = async (e) => {
//     e.preventDefault();
//     console.log('🔄 Updating doctor:', editingDoctor.id);
    
//     if (!doctorForm.name || !doctorForm.speciality || !doctorForm.degree || !doctorForm.experience || !doctorForm.fees) {
//       setFormMessage('❌ Please fill all required fields');
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       const updatedDoctorData = {
//         name: doctorForm.name,
//         speciality: doctorForm.speciality,
//         degree: doctorForm.degree,
//         experience: doctorForm.experience,
//         fees: parseFloat(doctorForm.fees),
//         about: doctorForm.about,
//         image: doctorForm.image,
//         verified: true
//       };

//       // Send update to backend
//       const updatedDoctor = await doctorAPI.updateDoctor(editingDoctor.id, updatedDoctorData);
//       console.log('✅ Doctor updated successfully:', updatedDoctor);

//       // Update local state
//       setDoctors(prev => 
//         prev.map(doc => 
//           doc.id === editingDoctor.id ? updatedDoctor : doc
//         )
//       );
      
//       setEditingDoctor(null);
//       setDoctorForm({
//         name: '',
//         speciality: '',
//         degree: '',
//         experience: '',
//         fees: '',
//         about: '',
//         image: '',
//         verified: true
//       });
      
//       setFormMessage('✅ Doctor updated successfully!');
//     } catch (err) {
//       setError(`Failed to update doctor: ${err.message}`);
//       setFormMessage('❌ Failed to update doctor. Please try again.');
//       console.error('Error updating doctor:', err);
//     } finally {
//       setLoading(false);
//       setTimeout(() => setFormMessage(''), 3000);
//     }
//   };

//   const handleDeleteDoctor = async (doctorId) => {
//     console.log('🗑️ Deleting doctor:', doctorId);
//     if (!window.confirm('Are you sure you want to delete this doctor?')) {
//       return;
//     }

//     setLoading(true);
//     setError('');

//     try {
//       // Delete from backend
//       await doctorAPI.deleteDoctor(doctorId);
//       console.log('✅ Doctor deleted successfully');

//       // Update local state
//       setDoctors(prev => prev.filter(doc => doc.id !== doctorId));
//       setFormMessage('✅ Doctor deleted successfully!');
//     } catch (err) {
//       setError(`Failed to delete doctor: ${err.message}`);
//       setFormMessage('❌ Failed to delete doctor. Please try again.');
//       console.error('Error deleting doctor:', err);
//     } finally {
//       setLoading(false);
//       setTimeout(() => setFormMessage(''), 3000);
//     }
//   };

//   const cancelEdit = () => {
//     setEditingDoctor(null);
//     setDoctorForm({
//       name: '',
//       speciality: '',
//       degree: '',
//       experience: '',
//       fees: '',
//       about: '',
//       image: '',
//       verified: true
//     });
//     setFormMessage('');
//   };

//   const renderContent = () => {
//     if (loading) {
//       return (
//         <div className="flex justify-center items-center py-12">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           <span className="ml-3 text-gray-600">Loading...</span>
//         </div>
//       );
//     }

//     if (error) {
//       return (
//         <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
//           <div className="flex items-center">
//             <div className="text-red-600 font-semibold">Error:</div>
//             <div className="text-red-600 ml-2">{error}</div>
//           </div>
//         </div>
//       );
//     }

//     switch (activeTab) {
//       case 'dashboard':
//         return (
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
//               <p className="text-3xl font-bold text-blue-600">{users.length}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-lg font-semibold text-gray-700">Total Doctors</h3>
//               <p className="text-3xl font-bold text-green-600">{doctors.length}</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
//               <p className="text-3xl font-bold text-purple-600">{appointments.length}</p>
//             </div>
//           </div>
//         );

//       case 'doctors':
//         return (
//           <div className="space-y-6">
//             {/* Add/Edit Doctor Form */}
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 {editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}
//               </h3>
              
//               {formMessage && (
//                 <div className={`p-3 rounded mb-4 ${
//                   formMessage.includes('✅') 
//                     ? 'bg-green-50 text-green-700 border border-green-200' 
//                     : 'bg-red-50 text-red-700 border border-red-200'
//                 }`}>
//                   {formMessage}
//                 </div>
//               )}

//               <form onSubmit={editingDoctor ? handleUpdateDoctor : handleAddDoctor} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
//                   <input
//                     type="text"
//                     required
//                     value={doctorForm.name}
//                     onChange={(e) => setDoctorForm({...doctorForm, name: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Dr. John Doe"
//                     disabled={loading}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Speciality *</label>
//                   <select
//                     required
//                     value={doctorForm.speciality}
//                     onChange={(e) => setDoctorForm({...doctorForm, speciality: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     disabled={loading}
//                   >
//                     <option value="">Select Speciality</option>
//                     <option value="General Physician">General Physician</option>
//                     <option value="Gynecologist">Gynecologist</option>
//                     <option value="Dermatologist">Dermatologist</option>
//                     <option value="Pediatrician">Pediatrician</option>
//                     <option value="Neurologist">Neurologist</option>
//                     <option value="Gastroenterologist">Gastroenterologist</option>
//                     <option value="Cardiologist">Cardiologist</option>
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
//                   <input
//                     type="text"
//                     required
//                     value={doctorForm.degree}
//                     onChange={(e) => setDoctorForm({...doctorForm, degree: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="MBBS, MD"
//                     disabled={loading}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Experience *</label>
//                   <input
//                     type="text"
//                     required
//                     value={doctorForm.experience}
//                     onChange={(e) => setDoctorForm({...doctorForm, experience: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="5 years"
//                     disabled={loading}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Fees (₹) *</label>
//                   <input
//                     type="number"
//                     required
//                     min="0"
//                     value={doctorForm.fees}
//                     onChange={(e) => setDoctorForm({...doctorForm, fees: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="500"
//                     disabled={loading}
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
//                   <input
//                     type="url"
//                     value={doctorForm.image}
//                     onChange={(e) => setDoctorForm({...doctorForm, image: e.target.value})}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="https://example.com/doctor.jpg"
//                     disabled={loading}
//                   />
//                 </div>

//                 <div className="md:col-span-2">
//                   <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
//                   <textarea
//                     value={doctorForm.about}
//                     onChange={(e) => setDoctorForm({...doctorForm, about: e.target.value})}
//                     rows="3"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                     placeholder="Doctor's description and expertise..."
//                     disabled={loading}
//                   />
//                 </div>

//                 <div className="md:col-span-2 flex gap-3">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
//                   >
//                     {loading ? 'Processing...' : (editingDoctor ? 'Update Doctor' : 'Add Doctor')}
//                   </button>
//                   {editingDoctor && (
//                     <button
//                       type="button"
//                       onClick={cancelEdit}
//                       disabled={loading}
//                       className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
//                     >
//                       Cancel
//                     </button>
//                   )}
//                 </div>
//               </form>
//             </div>

//             {/* Doctors List */}
//             <div className="bg-white rounded-lg shadow overflow-hidden">
//               <div className="px-6 py-4 border-b border-gray-200">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Doctors List ({doctors.length})
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Total {doctors.length} doctors in the system
//                 </p>
//               </div>
              
//               {doctors.length === 0 ? (
//                 <div className="p-8 text-center text-gray-500">
//                   No doctors found. Add your first doctor above.
//                 </div>
//               ) : (
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speciality</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {doctors.map((doctor) => (
//                         <tr key={doctor.id} className="hover:bg-gray-50">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <img
//                               src={doctor.image}
//                               alt={doctor.name}
//                               className="h-12 w-12 rounded-full object-cover"
//                               onError={(e) => {
//                                 e.target.src = 'https://via.placeholder.com/100x100?text=Doctor';
//                               }}
//                             />
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
//                             <div className="text-sm text-gray-500">{doctor.experience}</div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {doctor.speciality}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {doctor.degree}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                             ₹{doctor.fees}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                             <div className="flex gap-2">
//                               <button
//                                 onClick={() => handleEditDoctor(doctor)}
//                                 disabled={loading}
//                                 className="text-blue-600 hover:text-blue-900 px-2 py-1 rounded hover:bg-blue-50 transition-colors disabled:text-blue-400 disabled:cursor-not-allowed"
//                               >
//                                 Edit
//                               </button>
//                               <button
//                                 onClick={() => handleDeleteDoctor(doctor.id)}
//                                 disabled={loading}
//                                 className="text-red-600 hover:text-red-900 px-2 py-1 rounded hover:bg-red-50 transition-colors disabled:text-red-400 disabled:cursor-not-allowed"
//                               >
//                                 Delete
//                               </button>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         );

//       case 'users':
//         return (
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800">Users ({users.length})</h3>
//             </div>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {users.map((user) => (
//                   <tr key={user.id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.appointments || 0}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );

//       case 'appointments':
//         return (
//           <div className="bg-white rounded-lg shadow overflow-hidden">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <h3 className="text-lg font-semibold text-gray-800">Appointments ({appointments.length})</h3>
//             </div>
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {appointments.map((appointment) => (
//                   <tr key={appointment.id}>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patientName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctorName}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       {new Date(appointment.appointmentDate).toLocaleDateString()}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
//                         appointment.status === 'SCHEDULED' ? 'bg-yellow-100 text-yellow-800' :
//                         appointment.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
//                         appointment.status === 'CANCELLED' ? 'bg-red-100 text-red-800' :
//                         'bg-gray-100 text-gray-800'
//                       }`}>
//                         {appointment.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-6">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//             >
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <nav className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex space-x-8">
//             {['dashboard', 'doctors', 'users', 'appointments'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
//                   activeTab === tab
//                     ? 'border-blue-500 text-blue-600'
//                     : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//         <div className="px-4 py-6 sm:px-0">
//           {renderContent()}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;

















import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { doctorAPI, appointmentAPI } from '../services/api';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [activeTab, setActiveTab] = useState('doctors');
  const [users, setUsers] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


    const appContext = useContext(AppContext)

  
  // Doctor form state
  const [doctorForm, setDoctorForm] = useState({
    name: '',
    speciality: '',
    degree: '',
    experience: '',
    fees: '',
    about: '',
    image: '',
    verified: true
  });
  const [editingDoctor, setEditingDoctor] = useState(null);
  const [formMessage, setFormMessage] = useState('');

  // Check authentication
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      navigate('/admin/login');
    }
  }, [navigate]);

  // Fetch data from backend based on active tab
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      
      try {
        switch (activeTab) {
          case 'doctors':
            const doctorsData = await doctorAPI.getAllDoctors();
            setDoctors(doctorsData);
            break;
          case 'users':
            const usersData = await userAPI.getAllUsers();
            setUsers(usersData);
            break;
          case 'appointments':
            const appointmentsData = await appointmentAPI.getAllAppointments();
            setAppointments(appointmentsData);
            break;
          default:
            break;
        }
      } catch (err) {
        setError(`Failed to fetch ${activeTab} data: ${err.message}`);
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    localStorage.removeItem('adminLoginTime');
    navigate('/admin/login');
  };

  // Doctor management functions
  const handleAddDoctor = async (e) => {
    e.preventDefault();
    console.log('🔄 Adding new doctor...', doctorForm);
    
    // Validate form
    if (!doctorForm.name || !doctorForm.speciality || !doctorForm.degree || !doctorForm.experience || !doctorForm.fees) {
      setFormMessage('❌ Please fill all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const newDoctor = {
        name: doctorForm.name,
        speciality: doctorForm.speciality,
        degree: doctorForm.degree,
        experience: doctorForm.experience,
        fees: parseFloat(doctorForm.fees),
        about: doctorForm.about || 'GOOD DOCTOR',
        image: doctorForm.image || 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
        verified: true
      };

      console.log('✅ Sending doctor data to backend:', newDoctor);

      // Send to backend using the function from api.js
      const createdDoctor = await doctorAPI.addDoctor(newDoctor);
      console.log('✅ Doctor created successfully:', createdDoctor);

      // Update local state with the doctor returned from backend (includes ID)
      setDoctors(prev => [...prev, createdDoctor]);

      // Reset form
      setDoctorForm({
        name: '',
        speciality: '',
        degree: '',
        experience: '',
        fees: '',
        about: '',
        image: '',
        verified: true
      });

      setFormMessage('✅ Doctor added successfully!');
      
    } catch (err) {
      setError(`Failed to add doctor: ${err.message}`);
      setFormMessage('❌ Failed to add doctor. Please try again.');
      console.error('Error adding doctor:', err);
    } finally {
      setLoading(false);
      setTimeout(() => setFormMessage(''), 3000);
    }
  };

  const handleEditDoctor = (doctor) => {
    console.log('✏️ Editing doctor:', doctor);
    setEditingDoctor(doctor);
    setDoctorForm({
      name: doctor.name,
      speciality: doctor.speciality,
      degree: doctor.degree,
      experience: doctor.experience,
      fees: doctor.fees.toString(),
      about: doctor.about,
      image: doctor.image,
      verified: doctor.verified
    });
    setFormMessage('');
  };

  const handleUpdateDoctor = async (e) => {
    e.preventDefault();
    console.log('🔄 Updating doctor:', editingDoctor.id);
    
    if (!doctorForm.name || !doctorForm.speciality || !doctorForm.degree || !doctorForm.experience || !doctorForm.fees) {
      setFormMessage('❌ Please fill all required fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const updatedDoctorData = {
        name: doctorForm.name,
        speciality: doctorForm.speciality,
        degree: doctorForm.degree,
        experience: doctorForm.experience,
        fees: parseFloat(doctorForm.fees),
        about: doctorForm.about,
        image: doctorForm.image,
        verified: true
      };

      // Send update to backend
      const updatedDoctor = await doctorAPI.updateDoctor(editingDoctor.id, updatedDoctorData);
      console.log('✅ Doctor updated successfully:', updatedDoctor);

      // Update local state
      setDoctors(prev => 
        prev.map(doc => 
          doc.id === editingDoctor.id ? updatedDoctor : doc
        )
      );
      
      setEditingDoctor(null);
      setDoctorForm({
        name: '',
        speciality: '',
        degree: '',
        experience: '',
        fees: '',
        about: '',
        image: '',
        verified: true
      });
      
      setFormMessage('✅ Doctor updated successfully!');
    } catch (err) {
      setError(`Failed to update doctor: ${err.message}`);
      setFormMessage('❌ Failed to update doctor. Please try again.');
      console.error('Error updating doctor:', err);
    } finally {
      setLoading(false);
      setTimeout(() => setFormMessage(''), 3000);
    }
  };

const handleDeleteDoctor = async (doctorId, doctorName) => {
  console.log('🗑️ Deleting doctor:', doctorId, doctorName);
  
  if (!window.confirm(`Are you sure you want to delete Dr. ${doctorName}?`)) {
    return;
  }

  setLoading(true);
  try {
    console.log('🚀 Sending DELETE request...');
    
    // Use the doctorAPI.deleteDoctor function
    const response = await doctorAPI.deleteDoctor(doctorId);
    
    console.log('✅ Delete response:', response);
    
    if (response.success !== false) {
      alert('Doctor deleted successfully!');
      
      // Update local state by removing the deleted doctor
      setDoctors(prev => prev.filter(doc => doc.id !== doctorId));
      
      // If using AppContext, refresh the doctors list
      if (appContext && appContext.fetchDoctors) {
        appContext.fetchDoctors();
      }
    } else {
      alert('Error: ' + (response.error || 'Failed to delete doctor'));
    }
  } catch (error) {
    console.error('❌ Error deleting doctor:', error);
    alert('Error deleting doctor: ' + error.message);
  } finally {
    setLoading(false);
  }
};


  const cancelEdit = () => {
    setEditingDoctor(null);
    setDoctorForm({
      name: '',
      speciality: '',
      degree: '',
      experience: '',
      fees: '',
      about: '',
      image: '',
      verified: true
    });
    setFormMessage('');
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Loading...</span>
        </div>
      );
    }

    if (error) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
          <div className="flex items-center">
            <div className="text-red-600 font-semibold">Error:</div>
            <div className="text-red-600 ml-2">{error}</div>
          </div>
          <button
            onClick={() => setError('')}
            className="mt-2 text-red-600 hover:text-red-800 text-sm"
          >
            Dismiss
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">{users.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Doctors</h3>
              <p className="text-3xl font-bold text-green-600">{doctors.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Appointments</h3>
              <p className="text-3xl font-bold text-purple-600">{appointments.length}</p>
            </div>
          </div>
        );

      case 'doctors':
        return (
          <div className="space-y-6">
            {/* Add/Edit Doctor Form */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                {editingDoctor ? 'Edit Doctor' : 'Add New Doctor'}
              </h3>
              
              {formMessage && (
                <div className={`p-3 rounded mb-4 ${
                  formMessage.includes('✅') 
                    ? 'bg-green-50 text-green-700 border border-green-200' 
                    : 'bg-red-50 text-red-700 border border-red-200'
                }`}>
                  {formMessage}
                </div>
              )}

              <form onSubmit={editingDoctor ? handleUpdateDoctor : handleAddDoctor} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    value={doctorForm.name}
                    onChange={(e) => setDoctorForm({...doctorForm, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Dr. John Doe"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Speciality *</label>
                  <select
                    required
                    value={doctorForm.speciality}
                    onChange={(e) => setDoctorForm({...doctorForm, speciality: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    disabled={loading}
                  >
                    <option value="">Select Speciality</option>
                    <option value="General Physician">General Physician</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatrician">Pediatrician</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                    <option value="Cardiologist">Cardiologist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Degree *</label>
                  <input
                    type="text"
                    required
                    value={doctorForm.degree}
                    onChange={(e) => setDoctorForm({...doctorForm, degree: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="MBBS, MD"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Experience *</label>
                  <input
                    type="text"
                    required
                    value={doctorForm.experience}
                    onChange={(e) => setDoctorForm({...doctorForm, experience: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="5 years"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Fees (₹) *</label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={doctorForm.fees}
                    onChange={(e) => setDoctorForm({...doctorForm, fees: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="500"
                    disabled={loading}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                  <input
                    type="url"
                    value={doctorForm.image}
                    onChange={(e) => setDoctorForm({...doctorForm, image: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="https://example.com/doctor.jpg"
                    disabled={loading}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
                  <textarea
                    value={doctorForm.about}
                    onChange={(e) => setDoctorForm({...doctorForm, about: e.target.value})}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Doctor's description and expertise..."
                    disabled={loading}
                  />
                </div>

                <div className="md:col-span-2 flex gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-blue-400 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : (editingDoctor ? 'Update Doctor' : 'Add Doctor')}
                  </button>
                  {editingDoctor && (
                    <button
                      type="button"
                      onClick={cancelEdit}
                      disabled={loading}
                      className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Doctors List */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">
                  Doctors List ({doctors.length})
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Total {doctors.length} doctors in the system
                </p>
              </div>
              
              {doctors.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No doctors found. Add your first doctor above.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Speciality</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Degree</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {doctors.map((doctor) => (
                        <tr key={doctor.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <img
                              src={doctor.image}
                              alt={doctor.name}
                              className="h-12 w-12 rounded-full object-cover"
                              onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/100x100?text=Doctor';
                              }}
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{doctor.name}</div>
                            <div className="text-sm text-gray-500">{doctor.experience}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {doctor.speciality}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {doctor.degree}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ₹{doctor.fees}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleEditDoctor(doctor)}
                                disabled={loading}
                                className="text-blue-600 hover:text-blue-900 px-2 py-1 rounded hover:bg-blue-50 transition-colors disabled:text-blue-400 disabled:cursor-not-allowed"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteDoctor(doctor.id,doctor.name)}
                                disabled={loading}
                                className="text-red-600 hover:text-red-900 px-2 py-1 rounded hover:bg-red-50 transition-colors disabled:text-red-400 disabled:cursor-not-allowed"
                              >
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        );

      case 'users':
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Users ({users.length})</h3>
            </div>
            {users.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No users found.
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Appointments</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.appointments || 0}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case 'appointments':
        return (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">Appointments ({appointments.length})</h3>
            </div>
            {appointments.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No appointments found.
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Doctor</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{appointment.patientName || appointment.patient}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{appointment.doctorName || appointment.doctor}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {appointment.appointmentDate ? new Date(appointment.appointmentDate).toLocaleDateString() : appointment.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          (appointment.status === 'SCHEDULED' || appointment.status === 'Scheduled') ? 'bg-yellow-100 text-yellow-800' :
                          (appointment.status === 'COMPLETED' || appointment.status === 'Completed') ? 'bg-green-100 text-green-800' :
                          (appointment.status === 'CANCELLED' || appointment.status === 'Cancelled') ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {['dashboard', 'doctors', 'users', 'appointments'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                  activeTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;