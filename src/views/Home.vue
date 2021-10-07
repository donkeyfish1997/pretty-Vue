
<script>
import Banner from "@/components/Home/Banner.vue";
import Introduce from "@/components/Home/Introduce.vue";
import Backstage from "@/components/Home/Backstage.vue";
import Project from "@/components/Home/Project.vue";
import Plan from "@/components/Home/Plan.vue";
import connect from "@/components/Home/connect.vue";
import Footer from "@/components/Home/Footer.vue";
export default {
  components: {
    Banner,
    Introduce,
    Backstage,
    Project,
    Plan,
    connect,
    Footer,
  },
};
</script>
<template>
  <Banner />
  <Introduce class="mt-5" />
  <Backstage class="mt-5" />
  <Project />
  <Plan />
  <connect />
  <Footer />
</template>



<style>
</style>
