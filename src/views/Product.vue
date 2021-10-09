<script>
import $ from "jquery";

import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { addOrder, addCart } from "@/api/userInfo";
import { searchProject } from "@/api/search";
import { computed, reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    const username = computed(() => store.getters.getUsername);
    const data = reactive({});
    const modalTitle = ref("");
    const id = route.params.id;
    const isLoad = ref(true);
    searchProject(id)
      .then((res) => {
        data["id"] = res.data.id;
        data["intro"] = res.data.intro;
        data["liability"] = res.data.liability;
        data["name"] = res.data.name;
        data["pic"] = res.data.pic;
        data["price"] = res.data.price;
        data["qty"] = res.data.qty;
        data["slogan"] = res.data.slogan.replace(/\r\n/g, "<br>");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        isLoad.value = false;
        let tmp = $(".subIntro iframe");
        tmp.addClass("iframe");
        tmp.parent().addClass("iframeParent");
      });

    onMounted(() => {
      // 增加iframe Css
      const addIframeCss = () => {
        let tmp = $(".subIntro iframe");
        tmp.addClass("iframe");
        tmp.parent().addClass("iframeParent");
        $(".subIntro img").css([{ width: "100%" }, { height: "auto" }]);
      };
      // 綁定
      $(document).bind("DOMNodeInserted", addIframeCss);
    });
    onUnmounted(() => {
      $(document).unbind("DOMNodeInserted", addIframeCss);
    });

    const buy = () => {
      if (!username.value) {
        modalTitle.value = "請先登入";
      } else {
        addOrder({
          productId: data["id"],
          pic: data["pic"],
          name: data["name"],
          price: data["price"],
        })
          .then((res) => {
            console.log(res);
            modalTitle.value = "購買成功";
          })
          .catch((err) => {
            console.log(err);
            modalTitle.value = "購買失敗";
          });
      }
    };

    const cart = () => {
      if (!username.value) {
        modalTitle.value = "請先登入";
      } else {
        addCart({
          productId: data["id"],
          pic: data["pic"],
          name: data["name"],
          price: data["price"],
        })
          .then((res) => {
            console.log(res);
            modalTitle.value = "已加入購物車";
          })
          .catch((err) => {
            console.log(err);
            modalTitle.value = "加入購物車失敗";
          });
      }
    };
    return { data, buy, cart, modalTitle, isLoad };
  },
};
</script>
<template>
  <div class="product">
    <img
      class="isLoad d-block mx-auto"
      src="~@/assets/img/Home/isLoadPage.gif"
      alt=""
      v-if="isLoad"
    />

    <div class="container" v-if="!isLoad">
      <div class="row align-items-stretch mb-5">
        <!-- 圖片 -->
        <div class="img col-12 col-sm-6">
          <img :src="'https://f.ecimg.tw/' + data.pic" alt="" />
        </div>
        <!-- 主要介紹 -->
        <div class="mainIntro col-12 col-sm-6 d-flex flex-column">
          <h4>{{ data.name }}</h4>
          <h4>{{ data.price }}</h4>
          <div class="mb-auto" v-html="data.slogan"></div>
          <!-- 按鈕 -->
          <button class="button my-2" @click="buy">直接購買</button>
          <button class="button" @click="cart">加入購物車</button>
        </div>
      </div>
      <!-- 圖片、影片 -->
      <template v-for="i in data.intro" :key="i">
        <div class="subIntro" v-if="i.Intro" v-html="i.Intro"></div>
        <img v-if="i.Pic" :src="'https://f.ecimg.tw/' + i.Pic" alt="" />
      </template>
    </div>
  </div>
  <!-- Modal -->
  <!-- <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modalTitle }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>-->
</template> 
<style scoped lang="scss">
.product {
  padding-top: 100px;
  .isLoad {
    width: auto;
  }

  img {
    width: 100%;
  }

  .button {
    padding: 5px;
    max-width: 500px;
  }
}

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

