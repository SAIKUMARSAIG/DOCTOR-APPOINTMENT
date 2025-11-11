import React, { createContext, useState, useEffect } from "react";
import { doctors as staticDoctors } from "../assets/assets_frontend/assets";
import axios from "axios";
import { appointmentAPI } from '../services/api.js';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState("checking");

  const BASE_URL = "http://localhost:8080/api";



const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  const userData = localStorage.getItem("user");
  
  console.log("🔐 AUTH DEBUG:");
  console.log("  - Token exists:", !!token);
  console.log("  - User data exists:", !!userData);
  console.log("  - Context user:", user);
  console.log("  - Context token:", token);
  
  const isAuth = !!token && !!user;
  console.log("  - Final isAuthenticated result:", isAuth);
  
  return isAuth;
};

  // Setup axios defaults
  useEffect(() => {
    axios.defaults.timeout = 10000;
    
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (e) {
          console.error("Error parsing user data:", e);
          localStorage.removeItem("user");
        }
      }
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  // Initialize data
  useEffect(() => {
    console.log("🎯 AppContext initializing...");
    fetchDoctors();

    if (!user && token) {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          setUser(JSON.parse(userData));
        } catch (e) {
          console.error("Error parsing user data:", e);
        }
      }
    }
  }, []);

  // ==================== AUTHENTICATION METHODS ====================

  const login = async (email, password) => {
    try {
      setLoading(true);
      
      const response = await axios.post(`${BASE_URL}/auth/signin`, {
        email,
        password,
      });

      const { token: authToken, id, name, email: userEmail } = response.data;
      
      if (!authToken) {
        throw new Error("No token received");
      }

      const userData = {
        id: id || response.data.user?.id,
        name: name || response.data.user?.name,
        email: userEmail || response.data.user?.email,
        phone: response.data.user?.phone || "",
        address: response.data.user?.address || {
          line1: "",
          line2: "",
          city: "",
          state: "",
          zipCode: "",
        },
        gender: response.data.user?.gender || "",
        dob: response.data.user?.dob || "",
      };

      setToken(authToken);
      setUser(userData);
      localStorage.setItem("token", authToken);
      localStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;

      return { success: true, data: response.data };
    } catch (error) {
      console.error("Login error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Login failed",
      };
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name, email, password) => {
    try {
      setLoading(true);
      
      const response = await axios.post(`${BASE_URL}/auth/signup`, {
        name,
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        return await login(email, password);
      }
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error("Signup error:", error);
      return {
        success: false,
        error: error.response?.data?.message || "Signup failed",
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    delete axios.defaults.headers.common["Authorization"];
  };

 
  // ==================== DOCTOR METHODS ====================

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      setBackendStatus("checking");
      
      const response = await axios.get(`${BASE_URL}/doctors`);
      
      let doctorsData = response.data;
      let doctorsArray = [];

      if (Array.isArray(doctorsData)) {
        doctorsArray = doctorsData;
      } else if (doctorsData._embedded?.doctors) {
        doctorsArray = doctorsData._embedded.doctors;
      } else if (doctorsData.content) {
        doctorsArray = doctorsData.content;
      } else if (doctorsData.data) {
        doctorsArray = doctorsData.data;
      } else {
        doctorsArray = [doctorsData];
      }

      if (doctorsArray.length > 0) {
        setDoctors(doctorsArray);
        setBackendStatus("connected");
      } else {
        throw new Error("No doctors data received");
      }
      
    } catch (error) {
      console.error("Backend fetch failed, using static data:", error);
      // setDoctors(staticDoctors);
      setBackendStatus("static");
    } finally {
      setLoading(false);
    }
  };

  const fetchDoctorsBySpeciality = async (speciality) => {
    try {
      const response = await axios.get(`${BASE_URL}/doctors/speciality/${speciality}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching doctors by speciality:", error);
      return doctors.filter((doc) => doc.speciality === speciality);
    }
  };

  const fetchTopDoctors = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/doctors/top`);
      return response.data;
    } catch (error) {
      console.error("Error fetching top doctors:", error);
      return doctors.slice(0, 4);
    }
  };

  const getDoctorById = async (doctorId) => {
    try {
      const localDoctor = doctors.find(doc => 
        doc.id === doctorId || 
        doc._id === doctorId || 
        doc.id?.toString() === doctorId.toString()
      );
      
      if (localDoctor) {
        return localDoctor;
      }

      const response = await axios.get(`${BASE_URL}/doctors/${doctorId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching doctor ${doctorId}:`, error);
      return null;
    }
  };

  // ==================== APPOINTMENT METHODS ====================

 
  

  // ==================== PROFILE METHODS ====================

const fetchUserProfile = async () => {
  try {

    const token = localStorage.getItem('token');
    if (!token) {
      return { success: false, error: 'No authentication token' };
    }

    console.log('🔄 Fetching user profile from backend...');
    
    const response = await axios.get(`${BASE_URL}/users/profile`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ User profile fetched successfully:', response.data);
    
    // ✅ FIX: Wrap the response data in the expected format
    const userData = response.data;
    
    // Update both context state and localStorage
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    
    return { 
      success: true, 
      data: userData // ✅ Return the data directly, not wrapped
    };
    
  } catch (error) {
    console.error('❌ Profile fetch error:', error.message);
    
    // Use cached data as fallback
    const cachedUser = JSON.parse(localStorage.getItem('user') || 'null');
    if (cachedUser) {
      console.log('📦 Using cached user data');
      setUser(cachedUser);
      return { 
        success: false, 
        error: 'Using cached data', 
        data: cachedUser 
      };
    }
    
    return { 
      success: false, 
      error: error.response?.data?.error || error.message 
    };
  }
};



// ==================== APPOINTMENT METHODS ====================

const fetchUserAppointments = async () => {
  try {
    if (!user || !user.id) {
      console.log('❌ No user ID available for fetching appointments');
      throw new Error('User not authenticated or user ID missing');
    }

    console.log('🔄 Fetching appointments for user ID:', user.id);
    
    const appointments = await appointmentAPI.getUserAppointments(user.id);
    console.log('✅ Appointments fetched successfully:', appointments);
    return appointments;
  } catch (error) {
    console.error('❌ Error fetching user appointments:', error);
    
    // Show specific error messages based on error type
    if (error.message.includes('403') || error.message.includes('forbidden')) {
      throw new Error('Access denied. Please check your permissions or try logging in again.');
    } else if (error.message.includes('401') || error.message.includes('unauthorized')) {
      throw new Error('Session expired. Please log in again.');
    } else if (error.message.includes('No user ID')) {
      throw new Error('User information not found. Please log in again.');
    } else {
      throw error;
    }
  }
};

const cancelAppointment = async (appointmentId) => {
  try {
    console.log('🗑️ Cancelling appointment:', appointmentId);
    
    const result = await appointmentAPI.cancelAppointment(appointmentId);
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Error cancelling appointment:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to cancel appointment' 
    };
  }
};

// FIXED: Simple bookAppointment method without the problematic function call
// In AppContext.js - Simplify bookAppointment method
const bookAppointment = async (doctorId, appointmentDateTime, notes = "") => {
  try {
    console.log('📅 Booking appointment:', { doctorId, appointmentDateTime, notes });

    const appointmentData = {
      doctorId: doctorId.toString(),
      appointmentDateTime: appointmentDateTime,
      notes: notes,
      // Remove userId from public endpoint call since it uses default user
    };

    console.log('📤 Sending appointment data to public endpoint:', appointmentData);
    
    // Direct call to public endpoint only
    const result = await appointmentAPI.bookAppointment(appointmentData);
    return { success: true, data: result };
  } catch (error) {
    console.error('❌ Booking error:', error);
    return {
      success: false,
      error: error.message || "Booking failed. Please try again.",
    };
  }
};
// Check appointment availability






 const updateUserProfile = async (userData) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return { success: false, error: 'No authentication token' };
    }

    console.log('💾 Updating user profile...', userData);
    
    const response = await axios.put(`${BASE_URL}/users/profile`, userData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('✅ Profile update response:', response.data);
    
    // ✅ FIX: Handle both response formats
    if (response.data.success) {
      // New format: {success: true, user: {...}}
      const updatedUser = response.data.user || response.data;
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return { success: true, data: updatedUser };
    } else {
      // Direct user data format
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      return { success: true, data: response.data };
    }
    
  } catch (error) {
    console.error('❌ Profile update error:', error);
    return { 
      success: false, 
      error: error.response?.data?.error || error.message || 'Failed to update profile'
    };
  }
};





  // Delete doctor function
  const handleDeleteDoctor = async (doctorId) => {
    if (!window.confirm(`Are you sure you want to delete Dr. ${doctorId}?`)) {
      return;
    }

    setLoading(true);
    try {
      const response = await axios.delete(`http://localhost:8080/api/doctors/${doctorId}`);
      
      if (response.data.success) {
        alert('Doctor deleted successfully!');
        fetchDoctors(); // Refresh the list
      } else {
        alert('Error: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
      alert('Error deleting doctor: ' + (error.response?.data?.error || error.message));
    } finally {
      setLoading(false);
    }
  };

// Add this to your AppContext for testing
const testPublicEndpoint = async () => {
  try {
    console.log('🧪 Testing public appointment endpoint...');
    
    const testData = {
      doctorId: "1",
      appointmentDateTime: "2024-01-15T10:00:00",
      notes: "Test appointment from frontend"
    };

    const response = await fetch(`${BASE_URL}/appointments/public`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('📊 Response status:', response.status);
    console.log('📊 Response ok:', response.ok);
    
    const responseText = await response.text();
    console.log('📦 Response text:', responseText);

    if (response.ok) {
      try {
        const jsonResponse = JSON.parse(responseText);
        console.log('✅ PUBLIC ENDPOINT WORKS! Response:', jsonResponse);
        return { success: true, data: jsonResponse };
      } catch (e) {
        console.log('✅ PUBLIC ENDPOINT WORKS! Response:', responseText);
        return { success: true, data: responseText };
      }
    } else {
      console.log('❌ PUBLIC ENDPOINT FAILED:', responseText);
      return { success: false, error: responseText };
    }
  } catch (error) {
    console.log('💥 PUBLIC ENDPOINT ERROR:', error.message);
    return { success: false, error: error.message };
  }
};







  // Add this to your AppContext temporarily for testing
const testAppointmentEndpoints = async () => {
  console.log('🧪 Testing appointment endpoints...');
  
  const testData = {
    doctorId: "1",
    appointmentDateTime: "2024-01-15T10:00:00",
    notes: "Test appointment"
  };

  const endpoints = [
    { 
      url: `${BASE_URL}/appointments/public`, 
      method: 'POST', 
      data: testData,
      auth: false 
    },
    { 
      url: `${BASE_URL}/appointments`, 
      method: 'POST', 
      data: testData,
      auth: true 
    },
    { 
      url: `${BASE_URL}/appointments/user/${user?.id || 1}`, 
      method: 'GET', 
      auth: true 
    },
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\n🔍 Testing: ${endpoint.method} ${endpoint.url}`);
      
      const headers = {
        'Content-Type': 'application/json',
      };
      
      if (endpoint.auth && token) {
        headers['Authorization'] = `Bearer ${token}`;
        console.log('🔑 Using authentication token');
      }

      const options = {
        method: endpoint.method,
        headers: headers,
      };

      if (endpoint.method === 'POST') {
        options.body = JSON.stringify(endpoint.data);
      }

      const response = await fetch(endpoint.url, options);
      const responseText = await response.text();

      console.log(`📊 Status: ${response.status} ${response.statusText}`);
      
      if (response.ok) {
        console.log(`✅ SUCCESS: ${endpoint.url} is working!`);
        try {
          const jsonResponse = JSON.parse(responseText);
          console.log('📦 Response data:', jsonResponse);
        } catch (e) {
          console.log('📦 Response text:', responseText);
        }
      } else {
        console.log(`❌ FAILED: ${endpoint.url} - ${responseText}`);
      }
    } catch (error) {
      console.log(`💥 ERROR: ${endpoint.url} - ${error.message}`);
    }
  }
};

// Call this in your component to test
// testAppointmentEndpoints();




// In AppContext - Add this detailed debug function
const debugPublicEndpoint = async () => {
  console.log('🔍 DEBUG: Testing public endpoint in detail...');
  
  const testData = {
    doctorId: "1",
    appointmentDateTime: new Date().toISOString(),
    notes: "Test appointment from debug"
  };

  console.log('📤 Request details:');
  console.log('URL:', `${BASE_URL}/appointments/public`);
  console.log('Method: POST');
  console.log('Headers:', { 'Content-Type': 'application/json' });
  console.log('Body:', testData);

  try {
    const startTime = Date.now();
    const response = await fetch(`${BASE_URL}/appointments/public`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });
    const endTime = Date.now();

    console.log('📊 Response details:');
    console.log('Status:', response.status);
    console.log('Status Text:', response.statusText);
    console.log('Response Time:', endTime - startTime + 'ms');
    console.log('Headers:', Object.fromEntries([...response.headers]));
    
    const responseText = await response.text();
    console.log('Response Body:', responseText);

    if (response.ok) {
      console.log('✅ SUCCESS: Public endpoint is accessible and working!');
      try {
        const jsonResponse = JSON.parse(responseText);
        return { success: true, data: jsonResponse };
      } catch (e) {
        return { success: true, data: responseText };
      }
    } else {
      console.log('❌ FAILED: Public endpoint returned error');
      return { 
        success: false, 
        status: response.status, 
        error: responseText,
        details: {
          url: `${BASE_URL}/appointments/public`,
          method: 'POST',
          requestBody: testData
        }
      };
    }
  } catch (error) {
    console.log('💥 NETWORK ERROR:', error);
    return { 
      success: false, 
      error: error.message,
      isNetworkError: true
    };
  }
};




  
 



  // ==================== CONTEXT VALUE ====================

  const value = {
    // State
    doctors,
    user,
    token,
    loading,
    backendStatus,
    
    // Authentication Methods
    login,
    signup,
    logout,
    isAuthenticated,
    
    // Doctor Methods
    fetchDoctors,
    fetchDoctorsBySpeciality,
    fetchTopDoctors,
    getDoctorById,
    handleDeleteDoctor,
    
    // Appointment Methods
    bookAppointment,
    fetchUserAppointments,
    cancelAppointment,
    
    // Profile Methods
    fetchUserProfile,
    updateUserProfile,
    testAppointmentEndpoints,

    testPublicEndpoint,
    
    // Computed Values
    doctorsCount: doctors.length,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;