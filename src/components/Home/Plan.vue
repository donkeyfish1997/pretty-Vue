
<script>
import PlanItem from "@/components/Home/PlanItem.vue";
export default {
  components: { PlanItem },
  setup() {
    const infos = [
      [
        "A. 單頁式 形象網站",
        "$ 19,800",
        "精準的核心訴求,迅速拓展業務。",
        "新創Startups、服務類、產品數少",
        "單頁架構設計，五項選單區塊設計",
        "RWD 響應式網頁設計架構",
        "搜尋引擎基礎友善架構",
        "線上聯繫表單",
        "區塊自由增減",
        "圖文自由增減、更新",
        "後台管理介面",
        "SSL安全加密",
        "Google Map嵌入",
        "Google Analytics分析串接",
        "3 次調整校正服務",
        "5-7 日交件",
      ],
      [
        "B. 五頁式 形象網站",
        "$ 22,800",
        "中小企業最適方案。",
        "自營企業、事務所、工作室",
        "五項選單架構設計",
        "RWD 響應式網頁設計架構",
        "搜尋引擎基礎友善架構",
        "最新消息文章系統/線上聯繫表單",
        "頁面、區塊自由增減",
        "圖文自由增減、更新",
        "後台管理介面",
        "SSL安全加密",
        "Google Map嵌入",
        "Google Analytics分析串接",
        "3 次調整校正服務",
        "5-7 日交件",
      ],
      [
        "C. 型錄式 企業形象網站",
        "$ 29,800",
        "具產品/型錄分類管理。",
        "上市櫃公司、電子業、產品展示需求",
        "七項選單架構設計+型錄分類管理",
        "RWD 響應式網頁設計架構",
        "搜尋引擎基礎友善架構",
        "最新消息文章系統/線上聯繫表單",
        "頁面、區塊自由增減",
        "圖文自由增減、更新",
        "後台管理介面",
        "SSL安全加密",
        "Google Map嵌入",
        "Google Analytics分析串接",
        "3 次調整校正服務",
        "5-7 日交件",
      ],
      [
        "D. 多語系 跨國形象網站",
        "$ 35,800",
        "全站式三語系切換，各語系指定內容。",
        "跨國企業、拓展國外市場、分公司者",
        "七項選單架構設計+型錄分類管理+多國語系統 (三語切換)",
        "RWD 響應式網頁設計架構",
        "搜尋引擎基礎友善架構",
        "最新消息文章系統/線上聯繫表單",
        "頁面、區塊自由增減",
        "圖文自由增減、更新",
        "後台管理介面",
        "SSL安全加密",
        "Google Map嵌入",
        "Google Analytics分析串接",
        "3 次調整校正服務",
        "5-7 日交件",
      ],
    ];
    return { infos };
  },
};
</script>
<template>
  <div class="plan">
    <h2 class="title pt-5" data-aos="fade-up">方案與費用</h2>
    <p class="mt-3" data-aos="fade-up">
      精實的品牌企業首選方案。花的實在、效果加倍！
    </p>
   <div class="container mt-5">
      <div class="row" data-aos="fade-up">
        <plan-item
          class="col-12 col-sm-6 col-md-3 mb-2"
          v-for="info in infos"
          :key="info"
          :info="info"
        />
      </div>
    </div>
    <div class="notice mt-4 mx-auto">
      <h5>注意事項</h5>
      <p>◎購物車系統、平面設計、攝影服務等額外需求，可依需求加購。</p>
      <p>◎內容批次上架服務按需求另外報價，舉凡文章、商品、多國語系內容等。</p>
      <p>
        ◎上述方案均可搭配虛擬主機管理服務，年繳 $6200： Linux SSD
        虛擬主機管理<br />
        儲存空間2G / 月流量20G / 5組免費企業信箱。
      </p>
      <p>◎搭配虛擬主機方案贈送首年國際網域 (.com/.org/.net)，次年續約 $680。</p>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.plan {
  text-align: center;
  .notice {
    text-align: left;
    max-width: 600px;
    h5 {
      padding:10px 20px;
      // border-left: 7px solid #0091cd;
    }
  }
}
</style>