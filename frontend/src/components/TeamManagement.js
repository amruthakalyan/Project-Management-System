import React, { useState } from 'react';
import axios from 'axios';

const TeamManagement = () => {
    const [name, setName] = useState('');
    const [members, setMembers] = useState([]);
    // const [projectId, setProjectId] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post('http://localhost:5000/api/admin/teams', {
                name,
                members,  // should be an array of user IDs
                // projectId,
            });
            console.log('Team created:', res.data);
        } catch (error) {
            console.error('Error creating team:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
             <h2>Teams</h2>
            <input
                type="text"
                placeholder="Team Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            {/* <input
                type="text"
                placeholder="Project ID"
                value={projectId}
                onChange={(e) => setProjectId(e.target.value)}
                required
            /> */}
            <input
                type="text"
                placeholder="Members (comma-separated User IDs)"
                value={members}
                onChange={(e) => setMembers(e.target.value.split(','))}
                required
            />
            <button type="submit">Create Team</button>
        </form>
    );
};

export default TeamManagement;
