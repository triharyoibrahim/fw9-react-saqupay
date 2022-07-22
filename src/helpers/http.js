import axios from "axios";

const http = () => {
  return axios.create({
    baseURL: "",
  });
};
