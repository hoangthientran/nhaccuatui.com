import axiosClient from "./axiosClient";

const listSongApi = {
  getListSong(params) {
    const url = "/listContentSongToday";
    return axiosClient.get(url, { params });
  },
};

export default listSongApi;
