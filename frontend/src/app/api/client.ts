import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://3.110.55.64:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
