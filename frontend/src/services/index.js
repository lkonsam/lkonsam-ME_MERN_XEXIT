import axios from "axios";

const API_URL = "https://lkonsam-me-mern-xexit.onrender.com/api";

export const registerApi = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Register API Error:", error.response?.data || error.message);
    throw error;
  }
};

export const loginApi = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      username,
      password,
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Login API Error:", error.response?.data || error.message);
    throw error;
  }
};

export const submitResignationApi = async (token, lwd) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/resign`,
      { lwd },
      {
        headers: { Authorization: `${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Resignation API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const submitQuestionnaireApi = async (token, responseList) => {
  try {
    const response = await axios.post(
      `${API_URL}/user/responses`,
      { responses: responseList },
      {
        headers: { Authorization: `${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Questionnaire API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const allResign = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/admin/resignations`, {
      headers: { Authorization: `${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const allResponse = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/admin/exit_responses`, {
      headers: { Authorization: `${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const conclude_resignation = async (
  token,
  resignationId,
  approved,
  lwd
) => {
  try {
    const response = await axios.put(
      `${API_URL}/admin/conclude_resignation`,
      {
        resignationId,
        approved,
        lwd,
      },
      {
        headers: { Authorization: `${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Conclude Resignation API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
