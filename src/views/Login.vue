<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
// import { login } from "@/api/user";
import router from "@/router/index.js";

export default {
  setup() {
    const store = useStore();
    const form = reactive({ email: "", password: "" });
    const errform = reactive({});
    const submit = () => {
      Object.keys(errform).forEach((el) => {
        delete errform[el];
      });
      login(form)
        .then((res) => {
          console.log("登入成功");
          store.dispatch("setUsername");
          router.push({ path: "/" });
        })
        .catch((err) => {
          Object.keys(err.response.data).forEach((el) => {
            errform[el] = err.response.data[el];
          });
        });
    };
    return { form, submit, errform };
  },
};
</script>

<template>
  <div class="login d-flex flex-column justify-content-center">
    <div class="container">
      <h1 class="pb-5 text-center">登入頁面</h1>
      <div class="form-floating mb-3">
        <input
          type="text"
          :class="{ 'is-invalid': errform['email'] }"
          v-model="form.email"
          class="form-control"
          id="email"
          placeholder="tmp"
        />
        <label for="text">{{
          errform["email"] ? "email" + errform["email"] : "email"
        }}</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="password"
          :class="{ 'is-invalid': errform['password'] }"
          v-model="form.password"
          class="form-control"
          id="password"
          placeholder="tmp"
        />
        <label for="text">{{
          errform["password"] ? "password" + errform["password"] : "password"
        }}</label>
      </div>
      <input
        class="form-control button py-3"
        type="submit"
        value="送出"
        @click="submit"
      />
      <p class="err" v-show="errform.err">{{ errform.err }}</p>
    </div>
  </div>

  <div class="container"></div>
</template>



<style lang="scss" scoped>

.login {
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