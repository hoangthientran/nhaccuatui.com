import axios from "axios";

// set up axiosClient
const axiosClient = axios.create({
  baseUrl: "https://api.ezfrontend.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  // Do something before request is sent
  (config) => config,
  // Do something with request error
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  (response) => response.data,
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  (error) => Promise.reject(error)
);

export default axiosClient;
