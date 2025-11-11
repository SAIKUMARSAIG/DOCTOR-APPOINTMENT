// components/BackendTester.jsx
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

const BackendTester = () => {
  const { backendStatus } = useContext(AppContext);
  const [testResults, setTestResults] = useState({});
  const [loading, setLoading] = useState(false);

  const testEndpoints = async () => {
    setLoading(true);
    const results = {};
    const BASE_URL = "http://localhost:8080/api";

    try {
      // Test 1: Basic connectivity
      console.log("🔍 Testing basic connectivity...");
      const testResponse = await axios.get(`${BASE_URL}/doctors/test`, { timeout: 5000 });
      results.basicConnectivity = {
        status: testResponse.status,
        data: testResponse.data,
        success: true
      };
    } catch (error) {
      results.basicConnectivity = {
        success: false,
        error: error.message,
        status: error.response?.status
      };
    }

    try {
      // Test 2: Get all doctors
      console.log("🔍 Testing /doctors endpoint...");
      const doctorsResponse = await axios.get(`${BASE_URL}/doctors`, { timeout: 5000 });
      results.doctorsEndpoint = {
        status: doctorsResponse.status,
        data: doctorsResponse.data,
        count: doctorsResponse.data?.length,
        success: true
      };
    } catch (error) {
      results.doctorsEndpoint = {
        success: false,
        error: error.message,
        status: error.response?.status
      };
    }

    try {
      // Test 3: Get specific doctor
      console.log("🔍 Testing /doctors/{id} endpoint...");
      const doctorResponse = await axios.get(`${BASE_URL}/doctors/1`, { timeout: 5000 });
      results.specificDoctor = {
        status: doctorResponse.status,
        data: doctorResponse.data,
        success: true
      };
    } catch (error) {
      results.specificDoctor = {
        success: false,
        error: error.message,
        status: error.response?.status
      };
    }

    setTestResults(results);
    setLoading(false);
    console.log("🎯 Test Results:", results);
  };

  useEffect(() => {
    testEndpoints();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Backend Connection Test</h2>
      
      <div className="mb-4">
        <p className="text-lg">
          Backend Status: <span className={`font-bold ${
            backendStatus === 'connected' ? 'text-green-600' : 'text-red-600'
          }`}>
            {backendStatus}
          </span>
        </p>
      </div>

      <button
        onClick={testEndpoints}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Run Tests Again'}
      </button>

      <div className="space-y-4">
        {Object.entries(testResults).map(([key, result]) => (
          <div key={key} className={`p-4 rounded border ${
            result.success ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
          }`}>
            <h3 className="font-bold capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
            <p>Status: {result.success ? '✅ Success' : '❌ Failed'}</p>
            {result.status && <p>HTTP Status: {result.status}</p>}
            {result.count !== undefined && <p>Doctors Count: {result.count}</p>}
            {result.error && <p>Error: {result.error}</p>}
            {result.data && (
              <details className="mt-2">
                <summary className="cursor-pointer">Response Data</summary>
                <pre className="bg-gray-100 p-2 mt-2 rounded text-xs overflow-auto">
                  {JSON.stringify(result.data, null, 2)}
                </pre>
              </details>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BackendTester;