

<script>
import { reactive, ref } from "@vue/reactivity";
import InputVue from "@/components/InputVue.vue";
import avatar from "@/components/avatar.vue";
// import { useRouter } from "vue-router";
// import { addUser } from "@/api/user";
// import { onMounted } from "@vue/runtime-core";
// import { Modal } from "bootstrap/dist/js/bootstrap.min.js";

export default {
  components: {
    avatar,
    InputVue,
  },
  setup() {
    // const router = useRouter();
    const message = ref("");
    const formInfos = reactive({
      pic: "",
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
    const errform = reactive({});
    // let modal;
    const submit = () => {
      //取formInfos 裡的 值
      let formValues = Object.keys(formInfos).map(key => ({[key]:formInfos[key].value}));
      console.log(formValues)
      // Object.keys(errform).forEach((el) => {
      //   delete errform[el];
      // });
      // addUser(form)
      //   .then((res) => {
      //     console.log(res);
      //     modal.show();
      //   })
      //   .catch((err) => {
      //     console.log("err: ", err.response);
      //     Object.keys(err.response.data).forEach((el) => {
      //       errform[el] = err.response.data[el];
      //     });
      //   });
    };
    const setAvatar = (imgDataUrl) => {
      formInfos.pic = imgDataUrl;
    };
    // onMounted(() => {
    //   var myModalEl = document.getElementById("sussesModal");
    //   modal = new Modal(myModalEl);
    //   myModalEl.addEventListener("hidden.bs.modal", function (event) {
    //     router.push({ name: "Login" });
    //   });
    // });
    // return { form, submit, errform, message, setAvatar };
    return { formInfos, errform, setAvatar, submit };
  },
};
</script>
<template>
  <div class="regirster d-flex flex-column justify-content-center">
    <div class="container">
      <h1 class="pb-5 text-center">註冊頁面</h1>

      <avatar @getAvatar="setAvatar" />

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
      />

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
      <input-vue
        v-model:message="formInfos.text.value"
        :info="formInfos.text"
      />
      <button class="button text mx-auto" @click="submit">確認</button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.regirster {
  width: 100vw;
  height: 100vh;
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

