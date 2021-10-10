<script>
import $ from "jquery";

import { onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { computed, reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
//
import { addOrder, addCart } from "@/api/userInfo";
import { searchProject } from "@/api/search";
import modal from "@/components/modal.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.min.js";
export default {
  components: { modal },
  setup() {
    const store = useStore();
    const route = useRoute();
    const username = computed(() => store.state.username);
    const data = reactive({});
    const modalTitle = ref("");
    const id = route.params.id;
    const isLoad = ref(true);
    const buyisClick = ref(true);
    const modalText = ref("");
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
    // 增加iframe Css
    const addIframeCss = () => {
      let tmp = $(".subIntro iframe");
      tmp.addClass("iframe");
      tmp.parent().addClass("iframeParent");
      $(".subIntro img").css([{ width: "100%" }, { height: "auto" }]);
    };
    var showModal;
    onMounted(() => {
      // 綁定
      $(document).bind("DOMNodeInserted", addIframeCss);
      //showModal
      showModal = () => {
        let tmp = new Modal(document.getElementById("Modal"));
        tmp.show();
      };
    });
    onUnmounted(() => {
      $(document).unbind("DOMNodeInserted", addIframeCss);
    });

    const buySbumit = () => {
      buyisClick.value = false;
      modalTitle.value = "";
      if (!username.value) {
        modalText.value = "請先登入";
        showModal();
        return;
      }
      buyisClick.value = true;
      modalText.value = "確定購買？";
      showModal();
    };

    const buyConfirm = () => {
      buyisClick.value = false;
      addOrder({
        productId: data["id"],
        pic: data["pic"],
        name: data["name"],
        price: data["price"],
      })
        .then((res) => {
          console.log(res);
          modalText.value = "購買成功";
        })
        .catch((err) => {
          console.log(err);
          modalText.value = "購買失敗";
        });
    };

    const cartSubmit = () => {
      buyisClick.value = false;
      modalText.value = "";
      if (!username.value) {
        modalText.value = "請先登入";
        showModal();
        return;
      }
      addCart({
        productId: data["id"],
        pic: data["pic"],
        name: data["name"],
        price: data["price"],
      })
        .then((res) => {
          console.log(res);
          modalText.value = "已加入購物車";
        })
        .catch((err) => {
          console.log(err);
          modalText.value = "加入購物車失敗";
        })
        .finally(() => {
          showModal();
        });
    };
    return {
      data,
      buySbumit,
      cartSubmit,
      modalTitle,
      isLoad,
      modalText,
      buyisClick,
      buyConfirm,
    };
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
          <button class="button my-2" @click="buySbumit">直接購買</button>
          <button class="button" @click="cartSubmit">加入購物車</button>
        </div>
      </div>
      <!-- 圖片、影片 -->
      <template v-for="i in data.intro" :key="i">
        <div class="subIntro" v-if="i.Intro" v-html="i.Intro"></div>
        <img v-if="i.Pic" :src="'https://f.ecimg.tw/' + i.Pic" alt="" />
      </template>
    </div>
    <modal id="Modal">
      <template #header> 訊息 </template>
      <template #body>{{ modalText }} </template>
      <template #footer>
        <button
          v-if="buyisClick"
          class="btn main-color-bg text-light"
          @click="buyConfirm"
        >
          確認
        </button>
      </template>
    </modal>
  </div>
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

