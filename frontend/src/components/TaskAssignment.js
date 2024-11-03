import React, { useState } from 'react';
import axios from 'axios';

const TaskAssignment = () => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    assignedTo: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/admin/tasks', task);
      alert('Task assigned successfully!');
      setTask({ title: '', description: '', assignedTo: '', dueDate: '' });
    } catch (error) {
      console.error('Error assigning task:', error);
    }
  };

  return (
    <div>

      <form onSubmit={handleSubmit}>
      <h2>Task Assignment</h2>
        <label>Task Title:</label>
        <input 
          type="text" 
          name="title" 
          value={task.title} 
          onChange={handleChange} 
          required 
        />

        <label>Task Description:</label>
        <textarea 
          name="description" 
          value={task.description} 
          onChange={handleChange} 
          required 
        />

        <label>Assign To:</label>
        <input 
          type="text" 
          name="assignedTo" 
          value={task.assignedTo} 
          onChange={handleChange} 
          required 
        />

        <label>Due Date:</label>
        <input 
          type="date" 
          name="dueDate" 
          value={task.dueDate} 
          onChange={handleChange} 
          required 
        />

        <button type="submit">Assign Task</button>
      </form>
    </div>
  );
};

export default TaskAssignment;
