// constants
import { CONTENTSONGTODAY_LIST } from "../constants/endpoints";
// axios
import axiosClient from "./axiosClient";

const songTodayApi = {
  getSongTodayApi(params) {
    const url = CONTENTSONGTODAY_LIST;
    return axiosClient.get(url, { params });
  },
};

export default songTodayApi;
