const BASE_URL = 'http://127.0.0.1:8000';

const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // Handle the response
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Registration failed');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during registration:', error.message);
    throw error;
  }
};

const loginUser = async (loginData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    // Handle the response
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    const responseData = await response.json();
    return responseData.token; // Adjust accordingly based on your authentication mechanism
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};

export { registerUser, loginUser };
