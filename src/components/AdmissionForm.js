import React, { useState } from 'react';
import api from '../services/api';
import './AdmissionForm.css';

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    selectedBatch: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required.';
    } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 65) {
      newErrors.age = 'Age must be between 18-65.';
    }

    if (!formData.selectedBatch) {
      newErrors.selectedBatch = 'Batch selection is required.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); 

    try {
      const response = await api.post('/enroll', formData);
      console.log('Enrollment response:', response.data);

      setSuccessMessage('Enrollment successful!');

      setFormData({
        name: '',
        age: '',
        selectedBatch: '',
      });
    } catch (error) {
      console.error('Error enrolling:', error.message);
    }
  };

  return (
    <div className="admission-form-container">
      <form onSubmit={handleSubmit} className="admission-form">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter your age"
        />
        {errors.age && <p className="error-message">{errors.age}</p>}

        <label>Select Batch:</label>
        <select
          name="selectedBatch"
          value={formData.selectedBatch}
          onChange={handleInputChange}
          placeholder="Select a batch"
        >
          <option value="">Select a batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
        {errors.selectedBatch && <p className="error-message">{errors.selectedBatch}</p>}

        {successMessage && <p className="success-message">{successMessage}</p>}

        <button type="submit" className="enroll-button">
          Enroll
        </button>
      </form>
    </div>
  );
};

export default AdmissionForm;
