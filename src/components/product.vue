<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { addCart } from "@/api/userInfo";
import { computed } from "@vue/reactivity";
import modal from "@/components/modal.vue";

export default {
  components: { modal },
  props: ["data"],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();
    const data = props.data;
    const username = computed(() => store.state.username);

    const cartSubmit = () => {
      let modalText = "";
      if (!username.value) {
        modalText = "請先登入";
        emit("showModal", modalText);
        return;
      }
      addCart({
        productId: data["Id"],
        pic: data["picB"],
        name: data["name"],
        price: data["price"],
      })
        .then((res) => {
          console.log(res);
          modalText = "已加入購物車";
        })
        .catch((err) => {
          console.log(err);
          modalText = "加入購物車失敗";
        })
        .finally(() => {
          emit("showModal", modalText);
        });
    };
    //開啟新視窗 product 詳細資訊
    const projuctClick = () => {
      let tmp = router.resolve({
        name: "Product",
        params: { id: data.Id },
      });
      window.open(tmp.href, "_blank");
    };
    return { data, cartSubmit, projuctClick };
  },
};
</script>
<template>
  <div class="product">
    <div class="content" @click="projuctClick">
      <div class="img">
        <img class="" :src="'https://f.ecimg.tw/' + data.picB" alt="" />
      </div>
      <div class="text px-1">
        <h5 class="header">{{ data.name }}<br /><br /></h5>
        <p class="describe">{{ data.describe }}</p>
        <div class="add d-flex">
          <span>$</span>{{ data.price }}
          <font-awesome-icon
            class="botton ms-auto"
            @click="cartSubmit"
            icon="shopping-cart"
          />
        </div>
      </div>

      <!-- <div
      v-if="del"
      class="product flex-nowrap row mt-4"
      @click="goProduct(data.Id)"
    >
      <img
        class="col-3 col-md-2"
        :src="'https://f.ecimg.tw/' + data.picB"
        alt=""
      />

      <div class="text col-9 col-md-9 p-10">
        <h5 class="header">{{ data.name }}</h5>
        <p class="describe">{{ data.describe }}</p>
        <div class="d-flex justify-content-between">
          
          <button
            @click.stop="Cart(data)"
            v-if="data.describe"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <fa icon="shopping-cart" />
          </button>
          <button @click.stop="delId(data.Id)" v-if="data.delete">
            <fa icon="trash" />
          </button>
        </div>
      </div>
    </div> -->
    </div>
  </div>
</template>
<style scoped lang="scss">
.product {
  .content {
    border: 2px solid rgb(176, 176, 176);
    border-radius: 20px 20px 10px 10px;
    overflow: hidden;

    .img {
      img {
        width: 100%;
      }
    }
    .text {
      h5,
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.3;
      }
      p {
        margin-bottom: 0;
      }
      .add {
        font-size: 2rem;
        font-weight: 500;
        line-height: 1;
        padding: 6px 7px 2px;
        color: #ed1c23e4;
        span {
          font-weight: 700;
          font-size: 0.8rem;
        }
        .botton {
          color: $main-color;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            color: $main-color-light;
          }
        }
      }
    }
  }
}
</style>