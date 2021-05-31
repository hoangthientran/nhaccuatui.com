// constants
import { CONTENTSONGTODAY_LIST } from "../constants/endpoints";
// axios
import axiosClient from "./axiosClient";

const listSongApi = {
  getListSong() {
    const url = CONTENTSONGTODAY_LIST;
    return axiosClient.get(url);
  },
};

export default listSongApi;
