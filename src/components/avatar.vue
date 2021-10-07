
<script>
import { reactive, ref } from "@vue/reactivity";
import myUpload from "vue-image-crop-upload";
export default {
  components: {
    "my-upload": myUpload,
  },
  emits: ["getAvatar"],
  setup(props,{ emit }) {
    const show = ref(false);
    const params = {
      token: "123456798",
      name: "avatar",
    };
    const headers = {
      smail: "*_~",
    };
    const imgDataUrl = ref(""); // the datebase64 url of created image

    const toggleShow = function () {
      show.value = !show.value;
    };
    /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
    const cropSuccess = function (img_data_url, field) {
      console.log("-------- crop success --------");
      imgDataUrl.value = img_data_url;
      console.log(emit)
      emit("getAvatar", img_data_url);
    };
    /**
     * upload success
     *
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
    const cropUploadSuccess = function (jsonData, field) {
      console.log("-------- upload success --------");
      console.log(jsonData);
      console.log("field: " + field);
    };
    /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
    const cropUploadFail = function (status, field) {
      console.log("-------- upload fail --------");
      console.log(status);
      console.log("field: " + field);
    };

    return {
      show,
      params,
      headers,
      imgDataUrl,
      toggleShow,
      cropSuccess,
      cropUploadSuccess,
      cropUploadFail,
    };
  },
};
</script>
<template>
  <a
    class="btn btn-primary"
   
    @click="toggleShow"
    >設置大頭照</a
  >
  <div v-if="imgDataUrl" class="avatar d-inline-block ms-5">
    <img :src="imgDataUrl" />
  </div>

  <!-- ------------- -->
  <my-upload
    field="img"
    @crop-success="cropSuccess"
    @crop-upload-success="cropUploadSuccess"
    @crop-upload-fail="cropUploadFail"
    v-model="show"
    :width="300"
    :height="300"
    :params="params"
    :headers="headers"
    img-format="png"
  ></my-upload>
</template>

<style scoped lang="scss">
.avatar {
  height: 50px;
  width: 50px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
  }
}
</style>