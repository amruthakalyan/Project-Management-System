import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import UserLogin from './components/UserLogin'; 
// import Footer from './components/Footer';

const App = () => (

  <>
  <Router>
    <Routes>
      <Route path="/" element={<AuthPage />} /> 
      <Route path="/admin/*" element={<AdminDashboard />} />
      <Route path="/student/*" element={<StudentDashboard />} />
      <Route path="/login" element={<UserLogin />} /> 
    </Routes>
  </Router>
    </>
);

export default App;
