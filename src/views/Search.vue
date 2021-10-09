

<script>
import { reactive, readonly, ref } from "@vue/reactivity";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import { searchProjectList } from "@/api/search";
import { onMounted, onUnmounted } from "vue";
//components
import product from "@/components/product.vue";
import modal from "@/components/modal.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.min.js";
export default {
  components: { product, modal },
  setup() {
    const route = useRoute();
    // 三個主要的值
    const keyword = ref("");
    const page = ref(0);
    const products = reactive({ data: [] });

    // 判斷正在搜尋
    const isLoad = ref(false);

    //搜尋 funcion
    const search = () => {
      isLoad.value = true;
      searchProjectList(keyword.value, page.value)
        .then((res) => {
          console.log("search Ok", keyword.value, page.value);
          products.data.push(...res.data.prods);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          isLoad.value = false;
        });
    };
    // 搜尋初始化function
    const initSearch = (r) => {
      keyword.value = r.params.keyword;
      page.value = 1;
      products.data = [];
      search();
    };
    // 搜尋初始化
    initSearch(route);
    //重新查詢 搜尋初始化
    onBeforeRouteUpdate((to, from, next) => {
      initSearch(to);
    });

    const modalText = ref("");
    //showModal
    const showModal = (text) => {
      modalText.value = text;
      console.log(modalText);
      let tmp = new Modal(document.getElementById("projectModel"));
      tmp.show();
    };
    // 滾輪事件，判斷是否滑到底
    const scrollEvent = (e) => {
      let cHeight = document.documentElement.clientHeight;
      let sHeight = document.documentElement.scrollHeight;
      let sTop = document.documentElement.scrollTop;
      // 到底並且沒有正在搜尋

      if (sHeight == cHeight + sTop && !isLoad.value) {
        page.value += 1;
        console.log("search nextpage", keyword.value, page.value);
        search();
      }
    };
    onMounted(() => {
      window.addEventListener("scroll", scrollEvent);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", scrollEvent);
    });

    return { products, showModal, isLoad, modalText, scrollEvent };
  },
};
</script>
<template>
  <div class="search" @scroll="scrollEvent">
    <div class="container">
      <div class="row align-items-stretch">
        <product
          class="col-6 col-md-4 col-lg-3 mb-3"
          v-for="i in products.data"
          :key="i"
          :data="i"
          @showModal="showModal"
        />
      </div>
      <div class="isLoad text-center pb-4">
        <img class="mx-auto" src="~@/assets/img/Home/isLoadPage.gif" alt="" />
      </div>
    </div>
  </div>
  <modal id="projectModel">
    <template #header> 訊息 </template>
    <template #body>{{ modalText }} </template>
  </modal>
</template>
<style scoped lang="scss">
.search {
  padding-top: 80px;
}
</style>