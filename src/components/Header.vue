<script>
import modal from "@/components/modal.vue";
import { logoutApi } from "@/api/user.js";
export default {
  components: { modal },

  data() {
    return {
      navColor: false,
      searchText: "",
    };
  },
  mounted() {
    this.handalNavColor();
    window.addEventListener("scroll", this.handalNavColor);
    this.$store.dispatch("setUsername");
  },
  destroyed() {
    window.removeEventListener("scroll", this.handalNavColor);
  },
  methods: {
    handalNavColor(event) {
      if (window.pageYOffset > 200 || document.body.clientWidth < 768) {
        this.navColor = true;
      } else {
        this.navColor = false;
      }
    },
    logout() {
      logoutApi()
        .then(() => {
          console.log("logou成功");
        })
        .catch(() => {
          console.log("logou失敗");
        })
        .finally(() => {
          this.$store.dispatch("setUsername");
        });
    },
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
};
</script>
<template>
  <nav
    class="navbar fixed-top navbar-expand-md navbar-light"
    :class="{ navColor: navColor }"
  >
    <div class="container-fluid">
      <router-link class="navbar-brand nav-link" to="/" href="#"
        >網頁 Demo</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="d-flex me-auto">
          <input class="form-control me-2" type="search" v-model="searchText" />
          <button
            class="btn btn-outline-success"
            @click="this.$router.push('/search/' + searchText)"
          >
            Search
          </button>
        </div>

        <ul class="navbar-nav mb-2 mb-md-0">
          <template v-if="!username">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">登入</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">註冊</router-link>
            </li>
          </template>
          <template v-if="username">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#logoutModal"
                >登出</a
              >
            </li>
            <li class="nav-item d-flex" v-if="username">
              <router-link class="nav-link" to="/user"
                >您好~ {{ username }}</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
  <modal id="logoutModal">
    <template #header> 登出 </template>
    <template #body> 是否登出？ </template>
    <template #footer>
      <button
        type="button"
        class="btn main-color-bg text-light"
        data-bs-dismiss="modal"
        @click="logout"
      >
        登出
      </button></template
    >
  </modal>
</template>

<style lang="scss" scoped>
.navbar {
  transition: 0.8s;
}
.navColor {
  background-color: #f8f9fa;

  box-shadow: 0px 0px 5px #3a3a3a;
}
</style>