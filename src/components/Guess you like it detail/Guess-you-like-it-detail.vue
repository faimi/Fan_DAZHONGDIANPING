<template>
  <div id="app">
    <div style="position: relative;">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              class="resImg"
              src="//p0.meituan.net/deal/fe2fe63b8a2c2e04f7c330bed9f3982d39999.jpg.webp@180w_180h_1e_1c_1l_80q|watermark=0"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="resText">
        <h3>一口香烧饼</h3>
        <p>仅售9.2元！最高价值10.5元的葱油饼豪华套餐，建议单人使用，提供免费停车位。</p>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  mounted: function() {
    var swiper = new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      loop: true
    });
  }
};
</script>
<style lang="less" scoped>
#app {
  .swiper-container {
    width: 100%;
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
      .resImg {
        width: 100%;
        height: 100%;
      }
    }
    .swiper-pagination {
      position: absolute;
      top: 20px;
      width: 37px;
      background: rgba(0, 0, 0, 0.4);
      height: 8%;
      border-radius: 10px;
      color: white;
      left: 88%;
      font-size: 9px;
      line-height: 19px;
    }
  }
  .resText {
    position: absolute;
    background: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      from(rgba(0, 0, 0, 0)),
      to(rgba(0, 0, 0, 0.6))
    );
    bottom: 10px;
    z-index: 1000;
    width: 100%;
    h3 {
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      line-height: 18px;
      margin: 3px 17px;
    }
    p {
      color: #fff;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 12px;
      line-height: 14px;
      margin: 8px 17px;
    }
  }
}
</style>