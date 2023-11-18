// src/services/api.js

const BASE_URL = 'http://127.0.0.1:5000'; //backend URL

const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/sign_up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      // Handle non-successful response (e.g., display an error message)
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    // Registration successful
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    // Handle errors (e.g., display an error message or log the error)
    console.error('Error during registration:', error.message);
    throw error;
  }
};

const loginUser = async (loginData) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/admin_sign_in`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      // Handle non-successful response (e.g., display an error message)
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    // Login successful
    const responseData = await response.json();
    return responseData.token;
  } catch (error) {
    // Handle errors (e.g., display an error message or log the error)
    console.error('Error during login:', error.message);
    throw error;
  }
};

export { registerUser, loginUser };