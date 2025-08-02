import axios from "axios";

const BASE_URL = "http://localhost:8000/api/auth";

export const loginUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/login`, data);
  return res.data;
};

export const registerUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/register`, data);
  return res.data;
};
