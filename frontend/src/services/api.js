import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:5000'; // actual backend URL

const api = axios.create({
  baseURL: BASE_URL,
});

export const getClients = () => {
  return api.get('/api/clients');
};

// Add more functions for different API calls as needed

