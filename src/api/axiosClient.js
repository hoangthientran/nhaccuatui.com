import axios from "axios";

const axiosClient = axios.create({
  baseUrl: "https://my-json-server.typicode.com/hoangthientran/data-nhaccuatui",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
