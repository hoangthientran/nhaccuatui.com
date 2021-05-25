import axiosClient from "./axiosClient";

const karaokeApi = {
  getAll(params) {
    const url = "/listKaraoke";
    return axiosClient.get(url, { params });
  },
};

export default karaokeApi;
