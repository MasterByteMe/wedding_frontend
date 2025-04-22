import axios from "axios";

const API = axios.create({
  baseURL: "https://wedding-backend-8y85.onrender.com/api",
});

// Optional: attach token automatically for protected routes
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
