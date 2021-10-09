import axios from "axios";
const userRequest = axios.create({
  // baseURL: "http://127.0.0.1:5000",
  baseURL: "https://shopcartflask.herokuapp.com/",
});
userRequest.defaults.withCredentials = true;

export const addOrder = (addjson) => {
  return userRequest.post("/product/addOrder", addjson);
};

export const addCart = (addjson) => {
  return userRequest.post("/product/addCart", addjson);
};

export const cartDel = (id) => {
  console.log("cartDel");
  return userRequest.get("/user/cartDel", { params: { id } });
};


export const orderList = () => {
  return userRequest.post("/user/orderList");
};

export const cartList = () => {
  return userRequest.post("/user/cartList");
};
