import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

const BookAppointment = () => {
  const { doctors, user, isAuthenticated, bookAppointment, getDoctorById } = useContext(AppContext);
  const { doctorId } = useParams();
  const navigate = useNavigate();

  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentData, setAppointmentData] = useState({
    date: '',
    time: '',
    notes: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (doctorId) {
      loadDoctor();
    }
  }, [doctorId, doctors]);

  const loadDoctor = async () => {
    try {
      let doctor;
      
      if (doctorId) {
        doctor = await getDoctorById(doctorId);
      }
      
      if (doctor) {
        setSelectedDoctor(doctor);
      } else {
        setMessage('Doctor not found');
      }
    } catch (error) {
      console.error('Error loading doctor:', error);
      setMessage('Error loading doctor information');
    }
  };

  const handleInputChange = (field, value) => {
    setAppointmentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleBookAppointment = async () => {
    if (!isAuthenticated()) {
      setMessage('Please login to book an appointment');
      setTimeout(() => navigate('/login'), 2000);
      return;
    }

    if (!selectedDoctor) {
      setMessage('Please select a doctor');
      return;
    }

    if (!appointmentData.date || !appointmentData.time) {
      setMessage('Please select date and time');
      return;
    }

    const appointmentDateTime = `${appointmentData.date}T${appointmentData.time}:00`;

    setLoading(true);
    setMessage('');

    try {
      const result = await bookAppointment(
        selectedDoctor.id || selectedDoctor._id,
        appointmentDateTime,
        appointmentData.notes
      );

      if (result.success) {
        setMessage('✅ Appointment booked successfully!');
        // Reset form
        setAppointmentData({
          date: '',
          time: '',
          notes: ''
        });
        // Redirect to appointments page after 2 seconds
        setTimeout(() => navigate('/my-appointments'), 2000);
      } else {
        setMessage(`❌ ${result.error}`);
      }
    } catch (error) {
      setMessage('❌ Failed to book appointment');
    } finally {
      setLoading(false);
    }
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Get min date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get max date (3 months from now)
  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    return maxDate.toISOString().split('T')[0];
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Appointment</h1>

      {message && (
        <div className={`p-4 rounded-md mb-6 ${
          message.includes('✅') ? 'bg-green-100 text-green-700 border border-green-200' :
          'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {message}
        </div>
      )}

      {/* Doctor Selection */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Select Doctor</h2>
        
        {doctorId && selectedDoctor ? (
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <img 
              src={selectedDoctor.image} 
              alt={selectedDoctor.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold">{selectedDoctor.name}</h3>
              <p className="text-gray-600">{selectedDoctor.speciality}</p>
              <p className="text-sm text-gray-500">{selectedDoctor.degree}</p>
            </div>
          </div>
        ) : (
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            onChange={(e) => {
              const doctor = doctors.find(d => d.id === e.target.value || d._id === e.target.value);
              setSelectedDoctor(doctor);
            }}
            value={selectedDoctor?.id || selectedDoctor?._id || ''}
          >
            <option value="">Select a doctor</option>
            {doctors.map(doctor => (
              <option key={doctor.id || doctor._id} value={doctor.id || doctor._id}>
                {doctor.name} - {doctor.speciality}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Appointment Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Appointment Details</h2>
        
        <div className="space-y-4">
          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              min={getMinDate()}
              max={getMaxDate()}
              value={appointmentData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Time
            </label>
            <select
              value={appointmentData.time}
              onChange={(e) => handleInputChange('time', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            >
              <option value="">Select time</option>
              {timeSlots.map(slot => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              value={appointmentData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Any specific concerns or notes for the doctor..."
            />
          </div>
        </div>

        {/* Book Button */}
        <div className="mt-6">
          <button
            onClick={handleBookAppointment}
            disabled={loading || !selectedDoctor || !appointmentData.date || !appointmentData.time}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold"
          >
            {loading ? 'Booking Appointment...' : 'Book Appointment'}
          </button>
        </div>
      </div>

      {/* Doctor Info */}
      {selectedDoctor && (
        <div className="mt-6 bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold mb-2">Doctor Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>Name:</strong> {selectedDoctor.name}</p>
              <p><strong>Speciality:</strong> {selectedDoctor.speciality}</p>
              <p><strong>Experience:</strong> {selectedDoctor.experience}</p>
            </div>
            <div>
              <p><strong>Degree:</strong> {selectedDoctor.degree}</p>
              <p><strong>Consultation Fee:</strong> ₹{selectedDoctor.fees}</p>
              <p><strong>Rating:</strong> {selectedDoctor.rating}/5</p>
            </div>
          </div>
          {selectedDoctor.about && (
            <div className="mt-4">
              <p><strong>About:</strong> {selectedDoctor.about}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookAppointment;