
<script>
export default {};
</script>
<template>
  <div
    class="
      backstage
      d-flex
      flex-column
      justify-content-center
      align-items-center
      text-center
    "
  >
    <img src="~@/assets/img/Home/user.jpeg" alt="" data-aos="fade-up" />
    <h1 class="title my-5" data-aos="fade-up">
      直覺後台操作，但你真正需要的是「專人服務」
    </h1>
    <p class="text" data-aos="fade-up">
      全站式後台管理，自由更新區塊圖文內容與最新消息發布。內容管理編輯器搭配直覺拖曳、點擊，輕鬆使用。當然，你更需要「專人線上服務」，省去後台學習與操作的瑣事，交給我們！讓你輕鬆無虞地營運網站。
    </p>
  </div>
</template>
<style lang="scss" scoped>
.backstage {
  color: white;
  background: linear-gradient(rgba(255, 255, 255, 0.562), rgb(0, 0, 0)),
    url("~@/assets/img/Home/backstage.jpeg") no-repeat fixed center center;
  background-size: cover;
  min-height: 400px;

  img {
    border-radius: 50%;
    width: 100px;
  }
  p {
    width: 80%;
    font-size: 1rem;
  }
}
</style>