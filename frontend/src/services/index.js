import axios from 'axios';

const API_URL = 'http://3.110.197.96:8082/api';

export const registerApi = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Register API Error:', error.response?.data || error.message);
    throw error;
  }
};

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Login API Error:', error.response?.data || error.message);
    throw error;
  }
};

export const submitResignationApi = async (token, lwd) => {
  try {
    const response = await axios.post(`${API_URL}/user/resign`, { lwd }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Resignation API Error:', error.response?.data || error.message);
    throw error;
  }
};

export const submitQuestionnaireApi = async (token, responseList) => {
  try {
    const response = await axios.post(`${API_URL}/user/responses`, { responses: responseList }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Questionnaire API Error:', error.response?.data || error.message);
    throw error;
  }
};
