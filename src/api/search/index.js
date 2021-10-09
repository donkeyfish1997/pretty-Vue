import axios from "axios";
const userRequest = axios.create({
  // baseURL: "http://127.0.0.1:5000",
  baseURL: "https://shopcartflask.herokuapp.com/",
});
userRequest.defaults.withCredentials = true;

export const searchProject = (id) => {
  return userRequest.get("/product", {
    params: { id },
  });
};

export const searchProjectList = (keyword, page) => {
  return userRequest.get("/search", {
    params: { keyword, page },
  });
};
