import axios from "axios";
export const createRequest = () => {
  let userRequest = axios.create({
    // baseURL: "http://127.0.0.1:5000",
    baseURL: "https://shopcartflask.herokuapp.com/",
  });
  userRequest.defaults.withCredentials = true;
  return userRequest;
};
