import axiosClient from "./axiosClient";

const titleHeaderApi = {
  getAll(params) {
    const url = "/titleHeaders";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/titleHeaders/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/titleHeaders";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/titleHeaders/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/titleHeaders/${id}`;
    return axiosClient.delete(url);
  },
};

export default titleHeaderApi;
