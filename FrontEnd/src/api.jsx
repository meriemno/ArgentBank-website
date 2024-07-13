// src/api/api.jsx
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, { email: username, password });
    console.log('API response:', response.data.body.token); // Log pour vérifier la réponse
    console.log('API response:', response.data.body.firstName); // Log pour vérifier la réponse
    if (response.data && response.data.body) {
      return {
        token: response.data.body.token,
        userInfo: {
          firstName: response.data.body.firstName,
          lastName: response.data.body.lastName,
          userName: response.data.body.userName,
        },
      };
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    console.error('API call error:', error.message);
    throw new Error('Username or password incorrect');
  }
};

export const updateUsername = async (token, userName) => {
  try {
    const response = await axios.put(
      `${API_URL}/user/profile`,
      { userName },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data.body;
  } catch (error) {
    throw new Error('Failed to update username');
  }
};