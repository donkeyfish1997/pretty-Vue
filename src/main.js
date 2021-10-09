import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//css 不要預設
import "normalize.css";
// BootstrapVue3
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faUserFriends,
  faComments,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
library.add(faUserFriends, faComments, faShoppingCart);

createApp(App)
  .use(store)
  .use(router)
  .use(BootstrapVue3)
  .use(
    AOS.init({
      offset: 100,
    })
  )
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
