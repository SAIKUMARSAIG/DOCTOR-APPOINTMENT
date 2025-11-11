// api.js
const API_BASE_URL = 'http://localhost:8080/api';





// api.js

// Helper function to get auth headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json',
  };
  
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  
  return headers;
};






// Authentication API calls
export const authAPI = {
  signin: async (credentials) => {
    try {
      console.log('🔐 Attempting login:', credentials.email);
      const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      console.log('📊 Login response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Login failed:', errorText);
        throw new Error(`Login failed: ${response.status} ${response.statusText}. Details: ${errorText}`);
      }

      const result = await response.json();
      console.log('✅ Login successful:', result);
      return result;
    } catch (error) {
      console.error('❌ Network error during login:', error);
      throw error;
    }
  },

  signup: async (userData) => {
    try {
      console.log('📝 Attempting signup:', userData.email);
      const response = await fetch(`${API_BASE_URL}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      console.log('📊 Signup response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Signup failed:', errorText);
        throw new Error(`Signup failed: ${response.status} ${response.statusText}. Details: ${errorText}`);
      }

      const result = await response.json();
      console.log('✅ Signup successful:', result);
      return result;
    } catch (error) {
      console.error('❌ Network error during signup:', error);
      throw error;
    }
  },

  logout: async () => {
    // Clear local storage for logout
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return { success: true };
  },
};

// Doctor API calls
export const doctorAPI = {
  getAllDoctors: async () => {
    try {
      console.log('🔄 Fetching doctors from:', `${API_BASE_URL}/doctors`);
      const response = await fetch(`${API_BASE_URL}/doctors`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const doctors = await response.json();
      console.log('✅ Doctors fetched successfully:', doctors);
      return doctors;
    } catch (error) {
      console.error('❌ Error fetching doctors:', error);
      throw error;
    }
  },

  getDoctorById: async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/doctors/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch doctor');
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching doctor:', error);
      throw error;
    }
  },

  getDoctorsBySpeciality: async (speciality) => {
    try {
      console.log(`🔍 Fetching doctors by speciality: ${speciality}`);
      const response = await fetch(`${API_BASE_URL}/doctors/speciality/${speciality}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching doctors by speciality:', error);
      throw error;
    }
  },

  getTopDoctors: async () => {
    try {
      console.log('⭐ Fetching top doctors');
      const response = await fetch(`${API_BASE_URL}/doctors/top`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Error fetching top doctors:', error);
      throw error;
    }
  },

  updateDoctor: async (doctorId, doctorData) => {
    try {
      console.log("✏️ UPDATING DOCTOR ID:", doctorId);
      
      const response = await axios.put(`${API_BASE_URL}/doctors/${doctorId}`, doctorData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("✅ Doctor updated successfully:", response.data);
      return response.data;
      
    } catch (err) {
      console.error("❌ Error updating doctor:", err);
      throw new Error(err.response?.data?.message || err.response?.data?.error || 'Failed to update doctor');
    }
  },

  deleteDoctor: async (doctorId) => {
    try {
      console.log("🗑️ DELETING DOCTOR ID:", doctorId);
      
      const response = await axios.delete(`${API_BASE_URL}/doctors/${doctorId}`);
      
      console.log("✅ Doctor deleted successfully:", response.data);
      return response.data;
      
    } catch (err) {
      console.error("❌ Error deleting doctor:", err);
      console.error("Error response:", err.response);
      
      const errorMessage = err.response?.data?.message || 
                          err.response?.data?.error || 
                          err.message || 
                          'Failed to delete doctor';
      
      throw new Error(errorMessage);
    }
  },

  addDoctor: async (doctorData) => {
    try {
      console.log("🔄 ADDING NEW DOCTOR DATA:", doctorData);
      
      const response = await axios.post(`${API_BASE_URL}/doctors`, doctorData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log("✅ Doctor added successfully:", response.data);
      return response.data;
      
    } catch (err) {
      console.error("❌ Error adding doctor:", err);
      throw new Error(err.response?.data?.message || err.response?.data?.error || 'Failed to add doctor');
    }
  }



};



// api.js - Simplified Appointment API
export const appointmentAPI = {









bookAppointment: async (appointmentData) => {
    try {
      console.log('🔄 Booking appointment with data:', appointmentData);
      
      const response = await fetch(`${API_BASE_URL}/appointments/public`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      
      console.log('📊 Public endpoint response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Public endpoint failed:', errorText);
        
        // Try to parse error response
        try {
          const errorJson = JSON.parse(errorText);
          throw new Error(errorJson.error || `Booking failed: ${response.status}`);
        } catch (e) {
          throw new Error(`Booking failed: ${response.status} - ${errorText}`);
        }
      }
      
      const result = await response.json();
      console.log('✅ Appointment booked successfully via public endpoint:', result);
      return result;
    } catch (error) {
      console.error('❌ Network error booking appointment:', error);
      throw error;
    }
  },


















  // Get appointments by user ID
  getUserAppointments: async (userId) => {
    try {
      console.log('🔄 Fetching appointments for user:', userId);
      
      const response = await fetch(`${API_BASE_URL}/appointments/user/${userId}`, {
        headers: getAuthHeaders(),
      });
      
      console.log('📊 Response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Server error fetching user appointments:', errorText);
        throw new Error(`Failed to fetch appointments: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('✅ User appointments API response:', result);
      
      return result.appointments || [];
    } catch (error) {
      console.error('❌ Error fetching user appointments:', error);
      throw error;
    }
  },

  // Book new appointment - ONLY USE PUBLIC ENDPOINT
  bookAppointment: async (appointmentData) => {
    try {
      console.log('🔄 Booking appointment with data:', appointmentData);
      
      // ONLY use the public endpoint - no fallback to authenticated endpoint
      console.log('🔄 Using public endpoint for booking...');
      const response = await fetch(`${API_BASE_URL}/appointments/public`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(appointmentData),
      });
      
      console.log('📊 Public endpoint response status:', response.status);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Public endpoint failed:', errorText);
        throw new Error(`Booking failed: ${response.status} - ${errorText}`);
      }
      
      const result = await response.json();
      console.log('✅ Appointment booked successfully via public endpoint:', result);
      return result;
    } catch (error) {
      console.error('❌ Network error booking appointment:', error);
      throw error;
    }
  },

  // Cancel appointment
  cancelAppointment: async (appointmentId) => {
    try {
      console.log('🔄 Canceling appointment:', appointmentId);
      
      const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}/cancel`, {
        method: 'PUT',
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to cancel appointment: ${errorText}`);
      }
      
      const result = await response.json();
      console.log('✅ Appointment canceled successfully:', result);
      return result;
    } catch (error) {
      console.error('❌ Error canceling appointment:', error);
      throw error;
    }
  },

  // Get all appointments (for admin)
  getAllAppointments: async () => {
    try {
      console.log('🔄 Fetching all appointments');
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        headers: getAuthHeaders(),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('❌ Error fetching appointments:', error);
      throw error;
    }
  }
};