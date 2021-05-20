import axios from "axios";

// set up axiosClient
const axiosClient = axios.create({
  baseURL: "https://json-server-nhaccuatui.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default axiosClient;
