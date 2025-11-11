import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';

const DoctorsDebug = () => {
  const { 
    doctors, 
    backendStatus, 
    backendError, 
    testDoctorsEndpoint,
    fetchDoctors,
    loading 
  } = useContext(AppContext);
  
  const [testResult, setTestResult] = useState(null);

  const testBackend = async () => {
    const result = await testDoctorsEndpoint();
    setTestResult(result);
  };

  const refreshDoctors = async () => {
    await fetchDoctors();
  };

  useEffect(() => {
    console.log('Doctors in context:', doctors);
    console.log('Backend status:', backendStatus);
    console.log('Backend error:', backendError);
  }, [doctors, backendStatus, backendError]);

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '10px' }}>
      <h3>Doctors Backend Debug</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <button onClick={testBackend} style={{ marginRight: '10px' }}>
          Test Backend Connection
        </button>
        <button onClick={refreshDoctors}>
          Refresh Doctors
        </button>
      </div>

      <div>
        <p><strong>Status:</strong> {backendStatus}</p>
        <p><strong>Error:</strong> {backendError || 'None'}</p>
        <p><strong>Loading:</strong> {loading ? 'Yes' : 'No'}</p>
        <p><strong>Doctors Count:</strong> {doctors.length}</p>
      </div>

      {testResult && (
        <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f5f5f5' }}>
          <h4>Test Results:</h4>
          <pre>{JSON.stringify(testResult, null, 2)}</pre>
        </div>
      )}

      <div style={{ marginTop: '10px' }}>
        <h4>Doctors Data ({doctors.length}):</h4>
        <div style={{ maxHeight: '300px', overflow: 'auto' }}>
          <pre>{JSON.stringify(doctors, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default DoctorsDebug;