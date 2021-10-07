
<script>
import ProjectItem from "@/components/Home/ProjectItem.vue";
export default {
  components: { ProjectItem },
  setup() {
    const infos = [
      {
        name: "暗中之光",
        img: require("@/assets/img/Home/Project/project1.jpg"),
      },
      { name: "和樂", img: require("@/assets/img/Home/Project/project2.jpg") },
      {
        name: "現代沈思",
        img: require("@/assets/img/Home/Project/project3.jpg"),
      },
      {
        name: "溝與通",
        img: require("@/assets/img/Home/Project/project4.jpg"),
      },
      {
        name: "會議流程",
        img: require("@/assets/img/Home/Project/project5.jpg"),
      },
      {
        name: "原始生命",
        img: require("@/assets/img/Home/Project/project6.jpg"),
      },
      {
        name: "文明建築",
        img: require("@/assets/img/Home/Project/project7.jpg"),
      },
      {
        name: "燦爛之際",
        img: require("@/assets/img/Home/Project/project8.jpg"),
      },
    ];
    return { infos };
  },
};
</script>
<template>
  <div class="project text-center">
    <h2 class="title pt-5" data-aos="fade-up">客戶案例</h2>
    <p class="mt-3" data-aos="fade-up">
      必要的品牌企業形象建構，讓商機一眼就看到你！
    </p>
    <div class="container mt-5">
      <div class="row" data-aos="fade-up">
        <project-item
          class="col-6 col-lg-3"
          v-for="info in infos"
          :key="info"
          :info="info"
        >
        </project-item>
      </div>
      <button class="button my-5">更多客戶案例</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  background-color: rgb(218, 218, 218);
  .button{
    transform: scaleY(1.1) scaleX(1.1);
  }
}

</style>