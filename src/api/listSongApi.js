import axiosClient from "./axiosClient";

const listSongApi = {
  async getAll() {
    // Fetch product list
    const listSong = await axiosClient.get("/listContentSongToday");
    // console.log(listSong);
    return {
      data: listSong,
    };
  },
};

export default listSongApi;
