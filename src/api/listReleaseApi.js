import axiosClient from "./axiosClient";

const listReleaseApi = {
  getAll(params) {
    const url = "/listContentSongHot";
    return axiosClient.get(url, { params });
  },
};

export default listReleaseApi;
