// import axios from "axios";
import { createRequest } from "./createRequest";

export const login = (addjson) => {
  let userRequest = createRequest();
  userRequest.interceptors.request.use(
    function(config) {
      const addinfo = config.data;
      const mailReg = /[A-z0-9]@([A-z0-9s]+\.){1,3}/;
      const data = {};
      //信箱須符合格式
      if (!mailReg.test(addinfo["email"])) {
        data.email = "此欄位須符合格式";
      }
      if (addinfo["email"] === "") data["email"] = "此欄位不得為空";
      if (addinfo["password"] === "") data["password"] = "此欄位不得為空";

      if (Object.keys(data).length) {
        throw { response: { data } };
      }

      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  return userRequest.post("/user/login", addjson, {
    withCredentials: true,
  });
};

export const logoutApi = () => {
  let userRequest = createRequest();
  return userRequest.post("/user/logout");
};

export const register = (addjson) => {
  let userRequest = createRequest();

  userRequest.interceptors.request.use(
    function(config) {
      const addinfo = config.data;
      const key = ["username", "email", "password", "comfirmPass", "sex"];
      const mailReg = /[A-z0-9]@([A-z0-9s]+\.){1,3}/;
      const data = {};

      //信箱須符合格式
      if (!mailReg.test(addinfo["email"])) {
        data.email = "此欄位須符合格式";
      }
      // 除了text以外的欄位皆不得為空
      key.forEach((el) => {
        if (addinfo[el] === "") data[el] = "此欄位不得為空";
      });
      //密碼需一樣
      if (addinfo["password"] !== addinfo["comfirmPass"]) {
        data.comfirmPass = "與上述密碼不符";
      }
      if (Object.keys(data).length) {
        throw { response: { data } };
      }

      delete addinfo["comfirmPass"];
      return config;
    },
    function(error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return userRequest.post("/user/add", addjson);
};

export const getSessionUser = () => {
  let userRequest = createRequest();
  console.log("gogoggo getSessionUser");
  return userRequest.get("/user/getUsernameFromSession", {
    withCredentials: true,
  });
};
