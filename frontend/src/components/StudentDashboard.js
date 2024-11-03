// src/components/StudentDashboard.js
import { Routes, Route } from "react-router-dom";
import StudentNavbar from "./StudentNavbar";
import ViewProjects from "./ViewProjects";
import ViewTeams from "./ViewTeams";
import ViewTasks from "./ViewTasks";


const StudentDashboard = () => {
  return (
    <div>
      <StudentNavbar />
      <div className="dashboard-content">
        <Routes>
          <Route path="projects" element={<ViewProjects />} />
          <Route path="teams" element={<ViewTeams />} />
          <Route path="tasks" element={<ViewTasks />} />
        </Routes>
      </div>

    </div>
  );
};

export default StudentDashboard;

