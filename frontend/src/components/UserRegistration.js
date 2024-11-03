// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // const UserRegistration = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [role, setRole] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/admin/users', { name, email, password,role });
// //       alert(res.data.message);
// //       navigate('/login');
// //     } catch (error) {
// //       console.error('Error registering user:', error.response.data);
// //       alert('Registration failed: ' + error.response.data.message);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Register User</h2>
// //       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
// //       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //       <input type="text" placeholder="Role" value={role} onChange={(e) => setRole(e.target.value)} required />
// //       <button type="submit">Register</button>
// //     </form>
// //   );
// // };

// // export default UserRegistration;

// import React, { useState } from 'react';
// import axios from 'axios';

// const UserRegistration = ({ onRegisterSuccess }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState('Student');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/admin/users', { name, email, password, role });
//       onRegisterSuccess(); // Switch to login form on success
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register User</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <select value={role} onChange={(e) => setRole(e.target.value)}>
//           <option value="Student">Student</option>
//           <option value="Admin">Admin</option>
//         </select>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default UserRegistration;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // e.g., 'Admin' or 'Student'
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/users', {
        name,
        email,
        password,
        role,
      });

      // Show success message and redirect to login
      alert(res.data.message);
      navigate('/login');
    } catch (error) {
      if (error.response?.status === 400) {
        alert(error.response.data.message); // Show "User already registered" message
        navigate('/login'); // Redirect to login page directly
      } else {
        console.error('Error registering user:', error);
        alert('Registration failed: ' + error.response?.data?.message || error.message);
      }
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Register User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)} required>
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Student">Student</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default UserRegistration;
