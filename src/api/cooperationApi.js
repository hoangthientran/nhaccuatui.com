import axiosClient from "./axiosClient";

const cooperationApi = {
  getAll(params) {
    const url = "/cooperationList";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/cooperationList/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/cooperationList";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/cooperationList/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/cooperationList/${id}`;
    return axiosClient.delete(url);
  },
};

export default cooperationApi;
