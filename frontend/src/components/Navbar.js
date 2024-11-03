// src/components/Navbar.js
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session data here
    localStorage.removeItem('user'); 
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
          <Link to="tasks">Task Assignment</Link>
        </li>
        <li>
          <Link to="teams">Team Management</Link>
        </li>
        <li>
          <Link to="reports">Reports</Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

