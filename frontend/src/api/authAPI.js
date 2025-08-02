import axios from "axios";

const BASE_URL = "http://localhost:3000/api/auth";

export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

export const registerUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, data);
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};
