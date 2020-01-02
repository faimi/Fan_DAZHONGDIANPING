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
    <div class="resMoney">
      <span class="price1">￥</span>
      <span class="price2">9.2</span>
      <span class="price3">￥10.5</span>
      <button type="button" class="btn btn-warning ljgm">立即购买</button>
    </div>
    <div class="tui">
      <div class="suishi">
        <i class="restime comm comm-gou"></i>随时可退
      </div>
      <div class="zidong">
        <i class="restime comm comm-gou"></i>过期自动退
      </div>
    </div>
    <div class="resBorder"></div>
    <div style="margin-left: 15px;">
      <div class="sysh">适用商户（1）</div>
      <div class="resFlex">
        <div class="resNameBorder">
          <div class="resName">一口香烧饼</div>
          <div class="discount DiscountImg DiscountImg-three-five"></div>
          <div class="resKm">>100km</div>
        </div>
        <div class="dh"></div>
      </div>
      <div class="resAddress">
        <i class="resAdd"></i>
        庆丰路万达秋江花苑16幢10号
      </div>
    </div>
    <div class="resBorder"></div>
    <div style="margin-left: 15px;">
      <div class="tgxq">
        团购详情
        <i class="tgxqImg"></i>
      </div>
      <div class="foodName">烧饼</div>
      <div class="foodFlex">
        <div class="foodFlex1">葱油烧饼</div>
        <div class="foodFlex2">1份</div>
        <div class="foodFlex3">5元</div>
      </div>
      <div class="zgjz">
        <span style="text-decoration: line-through;">最高价值</span>&nbsp;&nbsp;&nbsp;
        <span style="text-decoration: line-through;">10.5元</span>
      </div>
      <div class="tgj">
        <span style="margin-right: 7px;">团购价</span>&nbsp;&nbsp;&nbsp;
        <span>9.2元</span>
      </div>
    </div>
    <div class="resBorder"></div>
    <div style="margin-left: 15px;">
      <div class="gmxz">
        购买须知
        <i class="gmxzImg"></i>
      </div>
      <div class="gmxzTitle">有效期</div>
      <p class="gmxzCon">2016-05-16至2020-02-05</p>
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
body {
  background-color: #fff;
}
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
      height: 20px;
      border-radius: 10px;
      color: white;
      left: 88%;
      font-size: 9px;
      line-height: 20px;
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
  .resMoney {
    display: flex;
    .price1 {
      color: #f63;
      font-size: 21px;
      margin-left: 11px;
      margin-top: 8px;
    }
    .price2 {
      color: #f63;
      font-size: 30px;
      flex: 1;
      margin-right: 19px;
    }
    .price3 {
      color: #8c8c8c;
      font-size: 14px;
      flex: 8;
      margin-top: 16px;
      text-decoration: line-through;
    }
    .ljgm {
      height: 33px;
      color: #fff;
      background-color: #f63;
      border-radius: 5px;
      text-align: center;
      font-size: 16px;
      margin: 4px 20px;
      line-height: 10px;
    }
  }
  .tui {
    display: flex;
    margin: 10px 0 10px 14px;
    .suishi {
      flex: 1;
      .restime {
        height: 24px;
      }
    }
    .zidong {
      flex: 1;
      .restime {
        height: 24px;
      }
    }
  }
  .resBorder {
    background-color: #f0f0f0;
    height: 20px;
    width: 100%;
  }
  .sysh {
    color: #999;
    font-weight: 400;
    font-size: 14px;
    height: 40px;
    line-height: 42px;
  }
  .resFlex {
    display: flex;
    .resNameBorder {
      border-right: 1px solid #ccc;
      flex: 6;
      .resName {
        font-weight: 700;
        font-size: 18px;
        color: #878787;
      }
      .discount {
        margin-top: 15px;
        line-height: 14px;
      }
      .resKm {
        text-align: right;
        margin-top: -22px;
        margin-right: 34px;
      }
    }
    .dh {
      flex: 1;
      width: 25px;
      height: 25px;
      background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.93/css/img/mobile.png)
        no-repeat;
      background-size: 25px auto;
      background-position: center 0;
      display: block;
      margin: 17px 0;
    }
  }
  .resAddress {
    margin: 13px 0;
    .resAdd {
      background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.93/css/img/icon-comm.png)
        center 0 no-repeat;
      background-size: 14px auto;
      display: inline-block;
      width: 14px;
      height: 14px;
      background-position: 0 -58px;
      vertical-align: middle;
    }
  }
  .tgxq {
    margin: 15px 0;
    .tgxqImg {
      background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.93/css/img/icon-comm.png)
        center 0 no-repeat;
      background-size: 14px auto;
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: middle;
      background-position: 0 -38px;
    }
  }
  .foodName {
    text-align: center;
    color: #999;
    margin: 10px 0;
  }
  .foodFlex {
    display: flex;
    margin: 15px 0;
    .foodFlex1 {
      flex: 5;
    }
    .foodFlex2 {
      flex: 1;
    }
    .foodFlex3 {
      flex: 1;
    }
  }
  .zgjz {
    text-align: right;
    margin-right: 15px;
    color: #999;
    margin-bottom: 15px;
  }
  .tgj {
    color: #f63;
    text-align: right;
    margin-right: 15px;
    margin-bottom: 25px;
  }
  .gmxz {
    margin: 15px 0;
    .gmxzImg {
      background: url(//www.dpfile.com/mod/app-m-tuangou/1.3.93/css/img/icon-comm.png)
        center 0 no-repeat;
      background-size: 14px auto;
      display: inline-block;
      width: 14px;
      height: 14px;
      vertical-align: middle;
      background-position: 0 -19px;
    }
  }
  .gmxzTitle {
    line-height: 28px;
    font-size: 13px;
    display: block;
    color: #999;
  }
  .gmxzCon {
    color: #666;
    margin: 15px 0;
    font-size: 15px;
  }
}
</style>