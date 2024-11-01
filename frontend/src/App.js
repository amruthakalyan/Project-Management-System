import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard";
import StudentDashboard from "./components/StudentDashboard";
import UserRegistration from "./components/UserRegistration";
function App() {
  
  return (
    <>
    <UserRegistration/>
    <Router>
      <Routes>
        <Route path="/admin/*" element={<AdminDashboard />} />
        <Route path="/student/*" element={<StudentDashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
