import React, { useState, useEffect } from 'react';
import './Project.css';
import axios from 'axios';

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
//   const [assignedTo, setAssignedTo] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('Not Started');
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/admin/projects');
      setProjects(res.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = {
      title,
      description,
    //   assignedTo: assignedTo.split(',').map(id => id.trim()), // Assuming IDs are comma-separated
      deadline,
      status,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/admin/projects', projectData);
      console.log('Project created:', response.data);
      fetchProjects(); // Refresh the project list
      // Clear the input fields after successful submission
      setTitle('');
      setDescription('');
    //   setAssignedTo('');
      setDeadline('');
      setStatus('Not Started');
      setError('');
    } catch (error) {
      setError('Error creating project: ' + error.message);
      console.error('Error creating project:', error);
    }
  };

  return (
    <div>
      <h2>Projects</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
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
          />
        </div>
        {/* <div>
          <label>Assigned To (User IDs):</label>
          <input
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
            placeholder="Comma-separated User IDs"
          />
        </div> */}
        <div>
          <label>Deadline:</label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <button type="submit">Create Project</button>
      </form>

      {/* <h3>Project List</h3>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <p>Assigned To: {project.assignedTo.join(', ')}</p>
            <p>Deadline: {new Date(project.deadline).toLocaleDateString()}</p>
            <p>Status: {project.status}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Project;
