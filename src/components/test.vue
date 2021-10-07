
<script>
import myComponent from "@/components/test2.vue";
export default {
  components: { myComponent },
  data() {
    return { parentData: "aa" };
  },
};
</script>
<template>
<div class="test">

  <my-component v-model:message="parentData"> </my-component>
  {{parentData}}f
</div>
</template>
<style lang="scss" scoped>
.test{
  padding: 100px;
}
</style>