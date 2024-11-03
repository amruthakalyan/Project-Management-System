import React, { useState } from 'react';
import axios from 'axios';

const CreateReport = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending'); // Default status
  const [error, setError] = useState(null); // For error handling
  const [success, setSuccess] = useState(null); // For success message

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reportData = {
      title,
      description,
      status, // Make sure this is one of the valid enum values
    };
  
    try {
      const response = await axios.post('http://localhost:5000/api/admin/reports', reportData);
      console.log('Report created:', response.data);
    } catch (error) {
      console.error('Error creating report:', error);
    }
  };
  
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
      <h2>Create Report</h2>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="in progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button type="submit">Create Report</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>} {/* Display error */}
      {success && <div style={{ color: 'green' }}>{success}</div>} {/* Display success */}
    </div>
  );
};

export default CreateReport;

