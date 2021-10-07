<script>
export default {};
</script>
<template>
  <div class="connect">
    <div data-aos="fade-up" data-aos-offset="100" class="content text-center">
      <h3 class="pt-5 pb-3">
        <span class="title">網頁設計</span> 為你締造下一個黃金十年
      </h3>
      <p class="pb-3">而我們知道該怎麼做，幫助你穩健又快速地起步！</p>
      <div class="flex">
        <button class="button mb-5 me-2">
          <font-awesome-icon icon="comments" /> 立即聯繫
        </button>
        <button class="button mb-5 ms-2">
          <font-awesome-icon icon="user-friends" /> 即時對話
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.connect {
  height: 500px;
  background: url("~@/assets/img/Home/connect.jpg") no-repeat bottom;
  background-size: 100% 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .content {
    max-width: 700px;
    width: 80%;
    background-color: rgba(255, 255, 255, 0.872);
    border-radius: 40px;
    box-shadow: 0 0 29px 0 rgba(0, 0, 0, 0.521);
    .title {
      font-weight: 650;
      color: #0076a9;
    }
    .button:first-child {
      background-color: black;
      &:hover {
        background-color: rgb(72, 72, 72);
      }
    }
  }
}
</style>