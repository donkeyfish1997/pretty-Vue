<script>
export default {};
</script>
<template>
  <nav class="navbar fixed-top navbar-expand-md navbar-light">
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
  <!-- 

          <ul class="navbar-nav">
          <li class="nav-item" v-show="!username">
            <router-link to="/login" class="nav-link">login</router-link>
          </li>
          <li class="nav-item" v-show="username">
            <router-link to="/logout" class="nav-link">logout</router-link>
          </li>
          <li class="nav-item" v-show="!username">
            <router-link to="/register" class="nav-link">register</router-link>
          </li>
          <li class="nav-item d-flex" v-if="username">
            <router-link to="/user" class="nav-link active"
              >hi~ {{ username }}
            </router-link>
            <router-link v-if="username" to="/user" class="avatar ms-1">
              <img v-if="false" :src="avatarPath" alt="" />
            </router-link>
          </li>
        </ul> -->
</template>

<style>
</style>