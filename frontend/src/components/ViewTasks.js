// src/components/ViewTasks.js
import { useEffect, useState } from "react";
import axios from "axios";

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}><b>Task:</b>{task.title}<br></br>
          <b>Description:</b>{task.description}
          <br></br>
          <b>Assigned to:</b>{task.assignedTo}<br></br>
          <b>Due Date:</b>{task.dueDate}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTasks;
