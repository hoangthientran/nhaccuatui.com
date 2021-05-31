// constants
import { COOPERATION_LIST } from "../constants/endpoints";
// axios
import axiosClient from "./axiosClient";

const cooperationApi = {
  getAll(params) {
    const url = COOPERATION_LIST;
    return axiosClient.get(url, { params });
  },
};

export default cooperationApi;
