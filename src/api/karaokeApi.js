// constants
import { KARAOKE_LIST } from "../constants/endpoints";
// axios
import axiosClient from "./axiosClient";

const karaokeApi = {
  getListKaraoke(params) {
    const url = KARAOKE_LIST;
    return axiosClient.get(url, { params });
  },
};

export default karaokeApi;
