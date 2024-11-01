import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/users/login`, { email, password });
  return data;
};

export const getProjects = async (token) => {
  const { data } = await axios.get(`${API_URL}/projects`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
