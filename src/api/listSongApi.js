import axiosClient from "./axiosClient";

const listSongApi = {
  getListSong() {
    const url = "/listContentSongToday";
    return axiosClient.get(url);
  },
};

export default listSongApi;
