// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const UserLogin = () => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       const res = await axios.post('http://localhost:5000/api/admin/users/login', { email, password });
// // //       alert(res.data.message);
// // //     } catch (error) {
// // //       console.error('Error logging in:', error.response.data);
// // //       alert('Login failed: ' + error.response.data.message);
// // //     }
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit}>
// // //       <h2>Login User</h2>
// // //       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// // //       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// // //       <button type="submit">Login</button>
// // //     </form>
// // //   );
// // // };

// // // export default UserLogin;

// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';

// // const UserLogin = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const res = await axios.post('http://localhost:5000/api/admin/users', { email, password });
// //       alert(res.data.message);

// //       // Assuming the API response includes the user's role
// //       const userRole = res.data.role; // Adjust this based on your API response structure

// //       // Navigate based on user role
// //       if (userRole === 'Admin') {
// //         navigate('/admin-dashboard'); // Admin dashboard route
// //       } else if (userRole === 'Student') {
// //         navigate('/student-dashboard'); // Student dashboard route
// //       } else {
// //         alert('Unknown role. Please contact support.');
// //       }
// //     } catch (error) {
// //       console.error('Error logging in:', error.response.data);
// //       alert('Login failed: ' + error.response.data.message);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <h2>Login User</h2>
// //       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
// //       <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
// //       <button type="submit">Login</button>
// //     </form>
// //   );
// // };

// // export default UserLogin;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


// const UserLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Use the correct endpoint for login
//       const res = await axios.post('http://localhost:5000/api/admin/users/login', { email, password });
//       alert(res.data.message);

//       const userRole = res.data.role; // Adjust based on your API response structure
//       if (userRole === 'Admin') {
//         // navigate('/admin');
//         navigate('/admin')
//       } else if (userRole === 'Student') {
//         navigate('/student');
//         // navigate(<StudentDashboard/>)
//       } else {
//         alert('Unknown role. Please contact support.');
//       }
//     } catch (error) {
//       console.error('Error logging in:', error.response?.data || error.message);
//       alert('Login failed: ' + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Login User</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default UserLogin;


import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import AdminDashboard from './AdminDashboard';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/admin/users/login', { email, password });
      alert(res.data.message);

      const userRole = res.data.role;
      console.log("User role from API response:", userRole); // Debugging line to check role

      if (userRole === 'Admin') {
        navigate('/admin'); // Ensure route matches your setup
      } else if (userRole === 'Student') {
        navigate('/student'); // Ensure route matches your setup
      } else {
        alert('Unknown role. Please contact support.');
      }
    } catch (error) {
      console.error('Error logging in:', error.response?.data || error.message);
      alert('Login failed: ' + (error.response?.data?.message || error.message));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login User</h2>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default UserLogin;
