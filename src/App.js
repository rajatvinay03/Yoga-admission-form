import React from 'react';
import AdmissionForm from './components/AdmissionForm';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">Yoga Class Admission Form</h1>
      <AdmissionForm />
    </div>
  );
};

export default App;
