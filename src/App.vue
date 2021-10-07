<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>


<template>
  <Header />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->

  <router-view />
</template>

<style lang="scss">
html {
  font-size: 16px;
}
* {
  font-family: "Noto Sans TC", sans-serif, "Microsoft JhengHei";
  font-weight: 400;
  line-height: 1.8;
}

.button {
  min-width: 200px;
  padding: 20px 50px;
  color:white;
  border-radius: 10px;
  background-color: #0091cd;
  border: 0px;
  border-bottom: 1px solid #56a0d3;
  transition: .5s;
  &:hover{
    background-color: #56a0d3;

  }
}
</style>
