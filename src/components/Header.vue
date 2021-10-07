<script>
export default {
  data() {
    return {
      navColor: false,
    };
  },
  mounted() {
    this.handalNavColor()
    window.addEventListener("scroll", this.handalNavColor);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handalNavColor);
  },
  methods: {
    handalNavColor(event) {
        console.log(window.pageYOffset > 200 , document.body.clientWidth<768)
      if (window.pageYOffset > 200 || document.body.clientWidth<768) {
        
        this.navColor = true;
      } else {

        this.navColor = false;
      }
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
      <a class="navbar-brand" href="#">Navbar</a>
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
        <form class="d-flex me-auto">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>

        <ul class="navbar-nav mb-2 mb-md-0">
          <template v-if="!username">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register"
                >register</router-link
              >
            </li>
          </template>
          <template v-if="username">
            <li class="nav-item">
              <router-link class="nav-link" to="/logout">logout</router-link>
            </li>
            <li class="nav-item d-flex" v-if="username">
              <router-link class="nav-link" to="/user"
                >hi~ {{ username }}</router-link
              >
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  transition: .8s;
}
.navColor {
  background-color: #f8f9fa;

    box-shadow: 0px 0px 5px #3a3a3a;
}
</style>