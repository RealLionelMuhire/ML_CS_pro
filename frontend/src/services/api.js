// src/services/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:8000'; // Update with your Django backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const registerUser = async (userData) => {
  try {
    const response = await api.post('/register/admin/', userData);

    if (!response.data.success) {
      // Handle non-successful response (e.g., display an error message)
      throw new Error(response.data.message || 'Registration failed');
    }

    // Registration successful
    return response.data;
  } catch (error) {
    // Handle errors (e.g., display an error message or log the error)
    console.error('Error during registration:', error.message);
    throw error;
  }
};

const loginUser = async (loginData) => {
  try {
    const response = await api.post('/login/admin/', loginData);

    if (!response.data.success) {
      // Handle non-successful response (e.g., display an error message)
      throw new Error(response.data.message || 'Login failed');
    }

    // Login successful
    return response.data.token;
  } catch (error) {
    // Handle errors (e.g., display an error message or log the error)
    console.error('Error during login:', error.message);
    throw error;
  }
};

export { registerUser, loginUser };
