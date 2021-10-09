<script>
import Header from "./components/Header.vue";
export default {
  components: { Header },
};
</script>


<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
.iframeParent {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
