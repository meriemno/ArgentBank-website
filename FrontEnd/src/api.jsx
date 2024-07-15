// src/api/api.jsx
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/v1';

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/user/login`, { email: username, password });
    if (response.data && response.data.body) {
      return {
        token: response.data.body.token,

      };
    } else {
      throw new Error('Invalid response format');
    }
  } catch (error) {
    throw new Error('Username or password incorrect');
  }
};
// Fonction pour récupérer le profil utilisateur depuis le
// Fonction pour récupérer le profil utilisateur depuis le token
export const getUserProfile = async (token) => {
  try {
    const response = await axios.post(`${API_URL}/user/profile`, {}, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.body; // Adapter selon le format de la réponse de votre API
  } catch (error) {
    throw new Error('Failed to fetch user profile');
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