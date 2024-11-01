// src/components/StudentNavbar.js
import { Link } from "react-router-dom";
import "./Navbar.css";  // Assuming the same styling as AdminNavbar

const StudentNavbar = () => {
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
      </ul>
    </nav>
  );
};

export default StudentNavbar;
