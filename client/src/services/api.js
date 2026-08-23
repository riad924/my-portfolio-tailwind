import axios from "axios";

const api = axios.create({
 baseURL: "https://my-portfolio-tailwind-4.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;