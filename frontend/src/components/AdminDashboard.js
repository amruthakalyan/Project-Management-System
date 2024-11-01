import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Projects from "./Projects";
import TaskAssignment from "./TaskAssignment";
import TeamManagement from "./TeamManagement";
import Reports from "./Reports";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-content">
        <Routes>
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<TaskAssignment />} />
          <Route path="teams" element={<TeamManagement />} />
          <Route path="reports" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
