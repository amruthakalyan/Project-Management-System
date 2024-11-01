import React, { useState } from 'react';
import axios from 'axios';

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/users/register', { name, email, password,role });
      alert(res.data.message);
    } catch (error) {
      console.error('Error registering user:', error.response.data);
      alert('Registration failed: ' + error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register User</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistration;
