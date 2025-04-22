import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5050/api", // Render will be used later for production
});

// Attach JWT token to every request if present
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Assumes token is saved on login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
