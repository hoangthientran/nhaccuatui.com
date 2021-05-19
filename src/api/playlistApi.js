import axiosClient from "./axiosClient";

const playlistApi = {
  getAll(params) {
    const url = "/getplaylist";
    return axiosClient.get(url, { params });
  },

  get(id) {
    const url = `/getplaylist/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = "/getplaylist";
    return axiosClient.post(url, data);
  },

  update(data) {
    const url = `/getplaylist/${data.id}`;
    return axiosClient.patch(url, data);
  },

  remove(id) {
    const url = `/getplaylist/${id}`;
    return axiosClient.delete(url);
  },
};

export default playlistApi;
