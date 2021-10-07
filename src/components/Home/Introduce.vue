
<script>
export default {};
</script>
<template>
  <div class="interoduce container">
    <div class="row text-center">
      <div
        class="item col-12 col-sm-6 mb-3 "
        data-aos="fade-up"
      >
        <div class="content">
          <h2 class="title">
            為什麼需要RWD響應式網頁設計?
            <p>【GOOGLE建議網頁設計採用RWD，有助於網站SEO】</p>
          </h2>
          <p class="py-3">
            響應式網頁設計(Responsive Web
            Design)，隨著各種裝置尺寸，自動適應內容佈局與大小，創造舒適的使用者閱讀體環境與體驗。搭配專業內容與優秀圖像，即時抓住客戶目光，掌握商機！
          </p>
          <button class="button">方案與費用</button>
        </div>
        <div class="img mx-auto mt-5">
          <img src="~@/assets/img/Home/introduce.jpeg" alt="" />
        </div>
      </div>
      <div class="item col-12 col-sm-6 mb-3"
      data-aos="fade-down">
        <div class="img mx-auto mb-5">
          <img src="~@/assets/img/Home/introduce2.jpeg" alt="" />
        </div>
        <div class="content">
          <h2 class="title">人性化網頁架構，隨時隨地保持網站活性</h2>
          <p class="py-3">
            網站想調整架構又怕程式碼得重寫？ (其實是又要花$$..)
            別怕！人性化的管理後台，讓您持續增減網站區塊不受限，即時有效曝光主推產品或發佈第一手訊息。..當然，我們也提供專人服務！
          </p>
          <button class="button">客戶案例</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content {
  .title {
    font-size: 1.6rem;
    p {
      font-size: 1rem;
    }
  }

}
img {
  width: 60%;
  border-radius: 10px;
  object-fit: cover;
}
</style>