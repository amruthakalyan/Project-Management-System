// src/components/Navbar.js
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
      </ul>
    </nav>
  );
};

export default Navbar;
