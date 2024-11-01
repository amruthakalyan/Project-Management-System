// src/components/ViewTeams.js
import { useEffect, useState } from "react";
import axios from "axios";

const ViewTeams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/teams");
        setTeams(response.data);
      } catch (error) {
        console.error("Error fetching teams:", error);
      }
    };
    fetchTeams();
  }, []);

  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}><b>Team Name:</b>{team.name}<br></br>
          <b>Team Members:</b>{team.members + " "}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTeams;
