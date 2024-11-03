// src/components/StudentNavbar.js
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";  // Assuming the same styling as AdminNavbar

const StudentNavbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data here
    localStorage.removeItem('user'); // Example of clearing user data from localStorage
    navigate("/login"); // Navigate to the login page
  };

  return (
    <nav className="navbar">
      <ul className="navbar-links">
      <li className="logo">PMS</li>
        <li>
          <Link to="projects">Projects</Link>
        </li>
        <li>
          <Link to="teams">Teams</Link>
        </li>
        <li>
          <Link to="tasks">Tasks</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default StudentNavbar;
