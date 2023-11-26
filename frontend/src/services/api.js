const BASE_URL = 'http://127.0.0.1:8000';

// Function to get the CSRF token from cookies
const getCsrfToken = () => {
  const name = 'csrftoken';
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : '';
};

// Function to get the authentication token from your application state or any storage
const getAuthToken = () => {
  // Replace this with the actual code to get the authentication token from your state or storage
  // Example: return yourAuthTokenState;
  return '';
};

const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCsrfToken(),
        'Authorization': `Token ${getAuthToken()}`, // Include the authentication token
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
        'X-CSRFToken': getCsrfToken(),
        'Authorization': `Token ${getAuthToken()}`,
      },
      body: JSON.stringify(loginData),
    });

    // Handle the response
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Login failed');
    }

    return response;  // Return the entire response object

  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};

export { registerUser, loginUser };
