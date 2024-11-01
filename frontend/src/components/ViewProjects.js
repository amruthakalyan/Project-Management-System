// // src/components/ViewProjects.js
// import { useEffect, useState } from "react";
// import axios from "axios";

// const ViewProjects = () => {
//   const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/admin/projects");
//         setProjects(response.data);
//       } catch (error) {
//         console.error("Error fetching projects:", error);
//       }
//     };
//     fetchProjects();
//   }, []);

//   return (
//     <div>
//       <h2>Projects</h2>
//       <ul>
//         {projects.map((project) => (
//           <li key={project.id}>{project.title}<br></br>{project.description}<br></br>{project.assignedTo}<br></br>{project.deadline}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ViewProjects;
// src/components/ViewProjects.js
import { useEffect, useState } from "react";
import axios from "axios";

const ViewProjects = () => {
  const [projects, setProjects] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/projects");
        setProjects(response.data.data || []); // Default to empty array if data is not present
      } catch (error) {
        console.error("Error fetching projects:", error);
        setProjects([]); // Set as empty array in case of error
      }
    };
    fetchProjects();

  }, []);

  return (
    <div>
      <h2>Projects</h2>
      <ol>
        {Array.isArray(projects) && projects.length > 0 ? (
          projects.map((project) => <li key={project.id}><b>Project Title:</b>{project.title}<br></br>
          <b>Project Description:</b>{project.description}<br></br>
          <b>Assigned to:</b>{project.assignedTo}<br></br>
          <b>Deadline:</b>{project.deadline}<br></br> <br></br></li>) 
        ) : (
          <li>No projects available</li>
        )}
      </ol>
    </div>
  );
};

export default ViewProjects;
