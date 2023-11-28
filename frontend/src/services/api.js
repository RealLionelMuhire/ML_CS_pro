const BASE_URL = 'http://127.0.0.1:8000';

// Function to get the CSRF token from cookies
const getCsrfToken = () => {
  const name = 'csrftoken';
  const cookieValue = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return cookieValue ? cookieValue.pop() : '';
};

// Function to get the authentication token from local storage
const getAuthToken = () => {
  return localStorage.getItem('authToken');
};

// Function to set the authentication token to local storage
const setAuthToken = (token) => {
  localStorage.setItem('authToken', token);
};

const registerUser = async (userData) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      },
      body: JSON.stringify(loginData),
    });

    // Log the entire response object for inspection
    console.log('Response status:', response.status);
    console.log('Response ok:', response.ok);
    // Handle the response
    const responseText = await response.text(); // Get the response text


    console.log('Response text:', responseText); // Log the response text

    if (!response.ok) {
      const errorData = responseText ? JSON.parse(responseText) : {};
      throw new Error(errorData.message || 'Login failed');
    }

    // Parse JSON once to get the data
    const responseData = responseText ? JSON.parse(responseText) : {};

    // Store the authentication token in local storage
    setAuthToken(responseData.token);

    return responseData;  // Return the parsed response data
  } catch (error) {
    console.error('Error during login:', error.message);
    throw error;
  }
};


const otherApiCall = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/some-endpoint/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCsrfToken(),
        'Authorization': `Token ${getAuthToken()}`,
      },
    });

    // Handle the response
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Request failed');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error during API call:', error.message);
    throw error;
  }
};


export { registerUser, loginUser };
