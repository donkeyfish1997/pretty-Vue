import { createStore } from "vuex";
import { getSessionUser } from "@/api/user.js";
// import search from "./search";
// import home from "./home";
export default createStore({
  state: {
    username: "",
    searchData: "",
    searchPage: 0,
  },

  actions: {
    setUsername(context) {
      getSessionUser()
        .then((res) => {
          console.log("getSessionUser,成功");
          context.commit("setUsername", res.data);
        })
        .catch((err) => {
          console.log("getSessionUser,失敗");
          context.commit("setUsername", "");
        });
    },
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
  getters: {},
  modules: {},
});
