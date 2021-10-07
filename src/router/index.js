import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Product from "../views/Product.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Register from "../views/Register.vue";
import User from "../views/User.vue";
import Order from "../views/User/Order";
import Cart from "../views/User/Cart";
import Info from "../views/User/Info";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/user",
    name: "User",
    component: User,
    children: [
      {
        path: "",
        name: "Info",
        component: Info,
      },
      {
        path: "order",
        name: "Order",
        component: Order,
      },
      {
        path: "cart",
        name: "Cart",
        component: Cart,
      },
    ],
  },

  {
    path: "/test",
    name: "Test",

    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/test.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
