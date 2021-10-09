<script>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { login } from "@/api/user.js";
import InputVue from "@/components/InputVue.vue";

export default {
  components: { InputVue },
  setup() {
    const router = useRouter();
    const store = useStore();
    const isLoad = ref(false);
    const errText = ref("");
    const formInfos = reactive({
      email: { type: "email", name: "信箱", value: "", err: "" },
      password: { type: "password", name: "再次確認", value: "", err: "" },
      err: { err: "" },
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
      errText.value = "";
      // 正在傳送
      isLoad.value = true;
      // api
      login(formValues)
        .then((res) => {
          // 成功
          console.log("loginSus", res);
          store.dispatch("setUsername");
          router.push("/");
        })
        .catch((err) => {
          // 失敗
          console.log("logginErr: ", err.response);
          // 設置err值
          Object.keys(err.response.data).forEach((key) => {
            formInfos[key].err = err.response.data[key];
          });
        })
        .finally(() => {
          //傳送結束
          isLoad.value = false;
        });
    };
    return { formInfos, errText, submit, isLoad };
  },
};
</script>

<template>
  <div class="login d-flex flex-column justify-content-center">
    <div class="container">
      <h1 class="pb-5 text-center">登入頁面</h1>

      <input-vue
        v-for="info in [formInfos.email, formInfos.password]"
        :key="info"
        v-model:message="info.value"
        :info="info"
        class="mt-3"
      />

      <!-- 確認Ｆ -->
      <button class="button text mt-3" @click="submit">確認</button>
      <img
        v-show="isLoad"
        class="ps-5"
        src="~@/assets/img/Home/isLoad.gif"
        alt=""
      />
      <span class="ms-5 text-danger">
        {{ formInfos.err.err }}
      </span>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.login {
  width: 100vw;
  min-height: 100vh;
  padding-top: 60px;
  background-color: #dadada;
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