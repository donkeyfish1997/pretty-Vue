

<script>
import { reactive, ref } from "@vue/reactivity";
import { register } from "@/api/user.js";
// component
import InputVue from "@/components/InputVue.vue";
import avatar from "@/components/avatar.vue";
import modal from "@/components/modal.vue";
import { Modal } from "bootstrap/dist/js/bootstrap.min.js";

// import { useRouter } from "vue-router";
// import { addUser } from "@/api/user";
// import { onMounted } from "@vue/runtime-core";
// import { Modal } from "bootstrap/dist/js/bootstrap.min.js";

export default {
  components: {
    avatar,
    InputVue,
    modal,
  },
  setup() {
    // const router = useRouter();
    // 欄位資訊
    const isLoad = ref(false);
    const formInfos = reactive({
      pic: { value: "" },
      username: { type: "text", name: "帳號", value: "", err: "" },
      email: { type: "email", name: "信箱", value: "", err: "" },
      comfirmPass: { type: "password", name: "密碼", value: "", err: "" },
      password: { type: "password", name: "再次確認", value: "", err: "" },
      sex: {
        type: [
          ["男", "man"],
          ["女", "female"],
          ["其他", "other"],
        ],
        value: "",
      },
      text: { type: "text", name: "一句話", value: "", err: "" },
    });

    const submit = () => {
      //取formInfos 裡的 值 formValues
      let formValues = {};
      Object.keys(formInfos).forEach((key) => {
        formValues[key] = formInfos[key].value;
      });
      // 刪除 error
      Object.keys(formInfos).forEach((key) => {
        formInfos[key].err = "";
      });
      // 正在傳送
      isLoad.value = true;
      // api
      register(formValues)
        .then((res) => {
          // 成功
          console.log("registerSus", res);
          let tmp = new Modal(document.getElementById("susModal"));
          tmp.show();
        })
        .catch((err) => {
          // 失敗
          console.log("registerErr: ", err.response);
          // 設置err值
          Object.keys(err.response.data).forEach((key) => {
            console.log(err.response.data[key]);
            formInfos[key].err = err.response.data[key];
          });
        })
        .finally(() => {
          //傳送結束
          isLoad.value = false;
        });
    };

    return { isLoad, formInfos, submit };
  },
};
</script>
<template>
  <div class="regirster d-flex flex-column justify-content-center">
    <div class="container">
      <h1 class="pb-5 text-center">註冊頁面</h1>
      <!-- 大頭照 -->
      <avatar
        @getAvatar="
          (pic) => {
            formInfos.pic.value = pic;
          }
        "
      />
      <span>{{ formInfos.pic.err }}</span>
      <!-- 帳號、信箱、密碼、再次確認 -->
      <input-vue
        v-for="info in [
          formInfos.username,
          formInfos.email,
          formInfos.comfirmPass,
          formInfos.password,
        ]"
        :key="info"
        v-model:message="info.value"
        :info="info"
        class="mt-3"
      />
      <!-- 性別 -->
      <p :class="['mt-3', 'mb-0', { 'text-danger': formInfos.sex.err }]">
        性別 {{ formInfos.sex.err }}
      </p>

      <div class="form-check" v-for="i in formInfos.sex.type" :key="i">
        <input
          class="form-check-input"
          type="radio"
          name="sexRadio"
          :id="i[1]"
          :value="i[1]"
          v-model="formInfos.sex.value"
        />
        <label class="form-check-label" :for="i[1]">
          {{ i[0] }}
        </label>
      </div>

      <!-- 一句話 -->
      <input-vue
        v-model:message="formInfos.text.value"
        :info="formInfos.text"
      />
      <!-- 確認Ｆ -->
      <button class="button text mt-3" @click="submit">確認</button>
      <img
        v-show="isLoad"
        class="ps-5"
        src="~@/assets/img/Home/isLoad.gif"
        alt=""
      />
    </div>
  </div>
  <modal id="susModal">
    <template #header> 註冊成功 </template>
    <template #body> 請跳轉到登入頁面 </template>
    <template #footer>
      <button
        type="button"
        class="btn main-color-bg text-light"
        data-bs-dismiss="modal"
        @click="this.$router.push('/login')"
      >
        跳轉
      </button>
    </template>
  </modal>
</template>
<style lang="scss" scoped>
.regirster {
  width: 100vw;
  min-height: 100vh;
  background-color: #dadada;
  padding-top: 60px;
  .container {
    max-width: 700px;
    padding: 50px 30px;
    border-radius: 15px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 5px 20px rgb(108, 108, 108);
    h1 {
      font-weight: 650;
      color: $main-color;
    }
  }
}
</style>

