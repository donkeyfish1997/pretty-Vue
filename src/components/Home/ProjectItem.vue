<script>
export default {
  props: ["info"],
  setup(props) {
    const name = props.info.name;
    const url = `url(${props.info.img})`;
    return { name, url };
  },
};
</script>
<template>
  <div class="projectItem">
    <div class="mb-3" style="overflow:hidden;">
      <div class="item" :style="{ backgroundImage: url }">
        <div class="content">
          {{ name }}
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.projectItem {
  overflow: hidden;
  .item {
    width: 100%;
    height: 300px;
    background: no-repeat center center;
    background-size: cover;
    

    color:transparent;
    font-size: 1.3rem;
    transition: transform 1s, color 1s;
    &:hover {
      color: white;
      transform: scaleY(1.1) scaleX(1.1);
      .content {
        background-color: rgba(0, 0, 0, 0.591);
      }
    }
    .content {
      //文字置中設定
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      transition: background-color 1s;
    }
  }
}
</style>