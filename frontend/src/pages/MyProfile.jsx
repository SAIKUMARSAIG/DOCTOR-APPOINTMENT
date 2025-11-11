import React, { useState, useContext, useEffect, useRef } from 'react'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import { useNavigate } from 'react-router-dom';
import BackendStatus from '../components/BackendStatus';

function MyProfile() {
  const { user, isAuthenticated, updateUserProfile } = useContext(AppContext);
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipCode: ''
    },
    gender: '',
    dob: ''
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [backendStatus, setBackendStatus] = useState('checking');
  const [apiError, setApiError] = useState('');

  const hasLoadedRef = useRef(false);

  // Direct API call to fetch user profile
  const fetchUserProfileDirectly = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      console.log('🔄 Fetching user profile directly from API...');
      console.log('📞 API URL: http://localhost:8080/api/users/profile');
      console.log('🔑 Token exists:', !!token);
      
      const response = await fetch('http://localhost:8080/api/users/profile', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('📊 Response status:', response.status);
      console.log('📊 Response ok:', response.ok);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Server error response:', errorText);
        
        if (response.status === 401) {
          throw new Error('Authentication failed - Please login again');
        } else if (response.status === 404) {
          throw new Error('Profile not found');
        } else {
          throw new Error(`Server error: ${response.status} - ${errorText}`);
        }
      }

      const result = await response.json();
      console.log('✅ Profile data received:', result);
      
      return result;
    } catch (error) {
      console.error('❌ Error fetching profile:', error);
      setApiError(error.message);
      throw error;
    }
  };

  const loadUserProfile = async (forceRefresh = false) => {
    if (!isAuthenticated()) {
      return;
    }
    
    try {
      setLoading(true);
      setBackendStatus('checking');
      setMessage('🔍 Loading profile data...');
      setApiError('');
      
      console.log('🔄 Loading user profile directly...');
      const profileData = await fetchUserProfileDirectly();
      
      console.log('📊 Direct fetch result:', profileData);
      
      // Check if we got valid data from backend
      if (profileData && (profileData.id || profileData.email)) {
        setBackendStatus('connected');
        
        // Transform the data to match our state structure
        const transformedData = {
          name: profileData.name || '',
          email: profileData.email || '',
          phone: profileData.phone || '',
          address: profileData.address || {
            line1: '',
            line2: '',
            city: '',
            state: '',
            zipCode: ''
          },
          gender: profileData.gender || '',
          dob: profileData.dob || ''
        };
        
        setUserData(transformedData);
        setMessage('✅ Profile data loaded successfully from database');
        
        console.log('💾 Transformed user data:', transformedData);
        
      } else {
        throw new Error('Invalid or empty profile data received from server');
      }
      
    } catch (error) {
      console.error('❌ Error loading profile:', error);
      setBackendStatus('failed');
      
      // Use current user context data as fallback
      if (user) {
        console.log('🔄 Falling back to context user data:', user);
        setUserData({
          name: user.name || '',
          email: user.email || '',
          phone: user.phone || '',
          address: user.address || {
            line1: '',
            line2: '',
            city: '',
            state: '',
            zipCode: ''
          },
          gender: user.gender || '',
          dob: user.dob || ''
        });
        setMessage('⚠️ Using cached profile data - Could not connect to backend');
      } else {
        setMessage('❌ Error loading profile data');
      }
    } finally {
      setLoading(false);
      hasLoadedRef.current = true;
      setTimeout(() => setMessage(''), 5000);
    }
  };

  // Test API connection independently
  const testAPIConnection = async () => {
    try {
      console.log('🧪 Testing API connection...');
      const token = localStorage.getItem('token');
      
      const response = await fetch('http://localhost:8080/api/users/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      console.log('🧪 API Test Response:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });
      
      return response.ok;
    } catch (error) {
      console.error('🧪 API Test Failed:', error);
      return false;
    }
  };

  useEffect(() => {
    console.log('=== MyProfile Component Mounted ===');
    console.log('Current user context:', user);
    console.log('Is authenticated:', isAuthenticated());
    console.log('Has token:', !!localStorage.getItem('token'));
    
    if (isAuthenticated() && !hasLoadedRef.current) {
      // Test API first
      testAPIConnection().then(apiWorking => {
        console.log('🧪 API Working:', apiWorking);
        
        if (apiWorking) {
          // API is working, load fresh data
          loadUserProfile();
        } else {
          // API not working, use context data
          setBackendStatus('failed');
          if (user) {
            setUserData({
              name: user.name || '',
              email: user.email || '',
              phone: user.phone || '',
              address: user.address || {
                line1: '',
                line2: '',
                city: '',
                state: '',
                zipCode: ''
              },
              gender: user.gender || '',
              dob: user.dob || ''
            });
            setMessage('⚠️ Using cached data - API connection failed');
          }
        }
      });
    }
  }, [isAuthenticated, user]);

  const handleSave = async () => {
    if (loading) return;
    
    setLoading(true);
    setMessage('');
    setApiError('');
    
    try {
      console.log('💾 Saving profile data...', userData);
      
      const result = await updateUserProfile(userData);
      console.log('💾 Save result:', result);
      
      if (result.success) {
        setMessage('✅ Profile updated successfully!');
        setBackendStatus('connected');
        setIsEdit(false);
        
        // Refresh the data to ensure we have the latest from backend
        setTimeout(() => {
          loadUserProfile(true);
        }, 1000);
      } else {
        setMessage('❌ ' + (result.error || 'Failed to update profile'));
        setBackendStatus('failed');
      }
      
    } catch (error) {
      console.error('❌ Save error:', error);
      setMessage('❌ Error: ' + error.message);
    } finally {
      setLoading(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  const handleRefresh = async () => {
    console.log('🔄 Manually refreshing profile...');
    setMessage('🔄 Refreshing profile...');
    setApiError('');
    
    // Test API first
    const apiWorking = await testAPIConnection();
    if (apiWorking) {
      await loadUserProfile(true);
    } else {
      setMessage('❌ Cannot refresh - API connection failed');
      setBackendStatus('failed');
    }
  };

  const handleCancel = () => {
    // Reload fresh data from backend when canceling
    loadUserProfile(true);
    setIsEdit(false);
    setMessage('');
    setApiError('');
  };

  const handleInputChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleAddressChange = (field, value) => {
    setUserData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        [field]: value
      }
    }));
  };

  if (!isAuthenticated()) {
    return (
      <div className="max-w-4xl mx-auto p-4 md:p-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <p className="text-red-500 text-lg">Please log in to view your profile</p>
          <button 
            onClick={() => navigate('/login')}
            className="mt-4 bg-[#5f5FFF] text-white px-6 py-2 rounded-md hover:bg-[#4a4aff] transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='max-w-4xl mx-auto p-4 md:p-6 flex flex-col gap-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-800'>My Profile</h1>
        <div className="flex gap-2">
          <button 
            onClick={handleRefresh}
            disabled={loading}
            className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600 disabled:opacity-50"
          >
            Refresh
          </button>
          <BackendStatus />
        </div>
      </div>

      {/* Status Messages */}
      {backendStatus && (
        <div className={`p-3 rounded-md ${
          backendStatus === 'connected' ? 'bg-green-100 text-green-700 border border-green-200' :
          backendStatus === 'failed' ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
          'bg-blue-100 text-blue-700 border border-blue-200'
        }`}>
          {backendStatus === 'connected' && '✅ Connected to backend - Profile data loaded from database'}
          {backendStatus === 'failed' && '⚠️ Using cached data - Could not connect to backend'}
          {backendStatus === 'checking' && '🔍 Loading profile data...'}
        </div>
      )}
      
      {message && (
        <div className={`p-3 rounded-md ${
          message.includes('❌') ? 'bg-red-100 text-red-700 border border-red-200' :
          message.includes('⚠️') ? 'bg-yellow-100 text-yellow-700 border border-yellow-200' :
          message.includes('🔍') || message.includes('🔄') ? 'bg-blue-100 text-blue-700 border border-blue-200' :
          'bg-green-100 text-green-700 border border-green-200'
        }`}>
          {message}
        </div>
      )}

      {apiError && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md border border-red-200">
          <strong>API Error:</strong> {apiError}
        </div>
      )}

      {loading && !isEdit && (
        <div className="flex justify-center items-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#5f5FFF]"></div>
          <span className="ml-2">Loading profile...</span>
        </div>
      )}
      
      {/* Profile Header */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
        <div className='relative'>
          <img 
            className='w-32 h-32 rounded-lg object-cover border-2 border-gray-200' 
            src={assets.profile_pic} 
            alt="Profile" 
          />
          {isEdit && (
            <button className='absolute bottom-2 right-2 bg-[#5f5FFF] text-white p-1 rounded text-xs'>
              Change
            </button>
          )}
        </div>
        
        <div className='flex-1 space-y-2'>
          {isEdit ? (
            <input 
              className='text-2xl font-medium w-full p-2 border rounded focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
              type="text" 
              value={userData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your name"
              disabled={loading}
            />
          ) : (
            <p className='text-2xl font-medium text-gray-800'>{userData.name || 'No name set'}</p>
          )}
          <p className='text-gray-500'>{userData.email}</p>
          {isEdit && (
            <input 
              className='w-full p-2 border rounded focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF] text-gray-500' 
              type="email" 
              value={userData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="Your email"
              disabled={loading}
            />
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6'>
        <h3 className='text-xl font-semibold text-gray-800 border-b pb-2'>Contact Information</h3>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div>
            <label className='block font-medium text-gray-700 mb-2'>Phone Number</label>
            {isEdit ? (
              <input 
                className='w-full p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
                type="text" 
                value={userData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter phone number"
                disabled={loading}
              />
            ) : (
              <p className="p-3 text-gray-600 bg-gray-50 rounded-lg min-h-[48px] flex items-center">
                {userData.phone || 'Not set'}
              </p>
            )}
          </div>

          <div>
            <label className='block font-medium text-gray-700 mb-2'>Gender</label>
            {isEdit ? (
              <select 
                className='w-full p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]'
                value={userData.gender}
                onChange={(e) => handleInputChange('gender', e.target.value)}
                disabled={loading}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            ) : (
              <p className="p-3 text-gray-600 bg-gray-50 rounded-lg min-h-[48px] flex items-center">
                {userData.gender || 'Not set'}
              </p>
            )}
          </div>

          <div>
            <label className='block font-medium text-gray-700 mb-2'>Date of Birth</label>
            {isEdit ? (
              <input 
                className='w-full p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
                type="date" 
                value={userData.dob}
                onChange={(e) => handleInputChange('dob', e.target.value)}
                disabled={loading}
              />
            ) : (
              <p className="p-3 text-gray-600 bg-gray-50 rounded-lg min-h-[48px] flex items-center">
                {userData.dob ? new Date(userData.dob).toLocaleDateString() : 'Not set'}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className='block font-medium text-gray-700 mb-2'>Address</label>
            {isEdit ? (
              <div className="space-y-3">
                <input 
                  className='w-full p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
                  type="text" 
                  value={userData.address.line1}
                  onChange={(e) => handleAddressChange('line1', e.target.value)}
                  placeholder="Street address"
                  disabled={loading}
                />
                <input 
                  className='w-full p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
                  type="text" 
                  value={userData.address.line2}
                  onChange={(e) => handleAddressChange('line2', e.target.value)}
                  placeholder="Apartment, suite, etc."
                  disabled={loading}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input 
                    className='p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
                    type="text" 
                    value={userData.address.city}
                    onChange={(e) => handleAddressChange('city', e.target.value)}
                    placeholder="City"
                    disabled={loading}
                  />
                  <input 
                    className='p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
                    type="text" 
                    value={userData.address.state}
                    onChange={(e) => handleAddressChange('state', e.target.value)}
                    placeholder="State"
                    disabled={loading}
                  />
                  <input 
                    className='p-3 border rounded-lg focus:outline-none focus:border-[#5f5FFF] focus:ring-1 focus:ring-[#5f5FFF]' 
                    type="text" 
                    value={userData.address.zipCode}
                    onChange={(e) => handleAddressChange('zipCode', e.target.value)}
                    placeholder="ZIP Code"
                    disabled={loading}
                  />
                </div>
              </div>
            ) : (
              <div className="p-3 text-gray-600 bg-gray-50 rounded-lg space-y-1 min-h-[48px] flex items-center">
                {userData.address.line1 || userData.address.city ? (
                  <div>
                    <p>{userData.address.line1}</p>
                    {userData.address.line2 && <p>{userData.address.line2}</p>}
                    {(userData.address.city || userData.address.state || userData.address.zipCode) && (
                      <p>
                        {[userData.address.city, userData.address.state, userData.address.zipCode]
                          .filter(Boolean).join(', ')}
                      </p>
                    )}
                  </div>
                ) : (
                  'No address set'
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className='flex justify-end gap-3 pt-4'>
        {isEdit ? (
          <>
            <button 
              onClick={handleCancel}
              disabled={loading}
              className='bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 disabled:opacity-50 transition-colors font-medium'
            >
              Cancel
            </button>
            <button 
              onClick={handleSave}
              disabled={loading}
              className='bg-[#5f5FFF] text-white px-6 py-3 rounded-lg hover:bg-[#4a4aff] disabled:opacity-50 transition-colors font-medium flex items-center gap-2'
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                'Save Profile'
              )}
            </button>
          </>
        ) : (
          <button 
            onClick={() => setIsEdit(true)}
            className='bg-[#5f5FFF] text-white px-6 py-3 rounded-lg hover:bg-[#4a4aff] transition-colors font-medium'
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Enhanced Debug Info */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h4 className="font-semibold mb-2">Debug Info:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <pre>{JSON.stringify(userData, null, 2)}</pre>
          </div>
          <div className="space-y-1">
            <p><strong>Backend Status:</strong> {backendStatus}</p>
            <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
            <p><strong>Edit Mode:</strong> {isEdit ? 'Yes' : 'No'}</p>
            <p><strong>Authenticated:</strong> {isAuthenticated() ? 'Yes' : 'No'}</p>
            <p><strong>Has Token:</strong> {localStorage.getItem('token') ? 'Yes' : 'No'}</p>
            <p><strong>API Error:</strong> {apiError || 'None'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile;