import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BackendStatus = () => {
  const [status, setStatus] = useState('checking');
  const [message, setMessage] = useState('');

  useEffect(() => {
    checkBackendStatus();
  }, []);

  const checkBackendStatus = async () => {
    try {
      setStatus('checking');
      const response = await axios.get('http://localhost:8080/api/users/test', {
        timeout: 5000
      });
      setStatus('connected');
      setMessage(`Backend is running: ${response.data}`);
    } catch (error) {
      setStatus('failed');
      if (error.code === 'ECONNREFUSED') {
        setMessage('Backend server is not running on port 8080');
      } else {
        setMessage(`Backend error: ${error.message}`);
      }
    }
  };

  return (
    <div className={`p-3 rounded-md mb-4 ${
      status === 'connected' ? 'bg-green-100 text-green-700' :
      status === 'failed' ? 'bg-red-100 text-red-700' :
      'bg-blue-100 text-blue-700'
    }`}>
      <div className="flex justify-between items-center">
        <div>
          <strong>Backend Status:</strong> 
          {status === 'connected' && ' ✅ Connected'}
          {status === 'failed' && ' ❌ Failed'}
          {status === 'checking' && ' 🔍 Checking...'}
          <div className="text-sm mt-1">{message}</div>
        </div>
        <button 
          onClick={checkBackendStatus}
          className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
        >
          Retest
        </button>
      </div>
    </div>
  );
};

export default BackendStatus;