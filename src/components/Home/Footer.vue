
<script>
export default {};
</script>
<template>
  <div class="footer container py-5">
    <div class="row">
      <div class="connect col-12 col-sm-4 ">
        <h5 class="pb-4">軒誠的面試作品｜Donkeyfish Design</h5>
        <p>Email｜donkeyfish199&@gmail.com</p>
        <p>Phone｜0965-437142</p>
        <p>Line@｜donkeyfish1997</p>
        <p>Office Hours｜Mon. to Fri. 10am~6pm</p>
        <p>彰化縣員林市中孝街２９號</p>
        <p>(拉啦啦啦啦啦啦)</p>
      </div>
      <div class="service col-12  col-sm-4 ps-2">
        <h5 class="pb-4">服務項目</h5>
        <p>網頁設計｜虛擬主機管理｜網域註冊</p>
        <p>品牌設計｜CIS企業識別｜LOGO設計｜名片設計</p>
        <p>Google關鍵字廣告｜SEO關鍵字優化</p>
        <p>形象廣告影片｜商業攝影</p>
      </div>
      <div class="line col-12 col-sm-4 ">
        <h5 class="pb-4">立刻加入Line@了解更多</h5>
        <img class="line" src="~@/assets/img/Home/line.png" alt="" />
        <img class="lineQr d-block mt-3" src="~@/assets/img/Home/lineQrcode.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  .row {
    div {
  
      p {
        font-weight: 200;
        font-size: 0.9rem;
      }
      &.connect {
        p {
          line-height: 1;
        }
      }
      &.service {
      }
      &.line {
        .line {
          width: 100px;
          height: 35px;
        }
        .lineQr{
          width: 100px;
        }
      }
    }
  }
}
</style>