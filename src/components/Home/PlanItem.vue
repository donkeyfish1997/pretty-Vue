<script>
export default {
  props: ["info"],
  setup(props) {
    const info = props.info;
    return { info };
  },
};
</script>
<template>
  <div class="planItem">
    <ul>
      <li class="py-2" v-for="i in info" :key="i">{{ i }}</li>
      <li class="py-3"><button class="button">馬上查詢</button></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.planItem {
  ul {
    padding-left: 0;
    border: 1px solid #e1e1e1;
    border-radius: 6px;
    li {
      padding-left: 0;
      list-style: none;
      border-top: 1px solid #e1e1e1;
      &:nth-child(even) {
        background: #f8f8f8;
      }
      &:first-child {
        background-color: #56a0d3;
        color: #ffffff;
        border-color: #c4dff6;
      }

      &:nth-child(2) {
        font-size: 35px;
        background-color: #0091cd;
        color: #ffffff;
        border-color: #c4dff6;
      }
      .button {
        min-width: 0;
        padding: 5px 15px;
        font-size: 0.9rem;
      }
    }
  }
}
</style>