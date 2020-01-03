<template>
  <div id="app">
    <div style="position: relative;">
      <!-- <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="resImg" :src="img" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div> -->
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
        <i class="icon-comm icon-comm-dingwei"></i>
        庆丰路万达秋江花苑16幢10号
      </div>
    </div>
    <div class="resBorder"></div>
    <div style="margin-left: 15px;">
      <div class="tgxq">
        团购详情
        <i class="icon-comm icon-comm-shu"></i>
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
      <div style="margin-bottom: 10px;">
        <span class="gd">更多图文详情</span>&nbsp;
        <span class="jy">（建议Wifi环境下打开，土豪请随意）</span>
      </div>
    </div>
    <div class="resBorder"></div>
    <div style="margin-left: 15px;">
      <div class="gmxz">
        购买须知
        <i class="icon-comm icon-comm-laba"></i>
      </div>
      <div class="gmxzTitle">有效期</div>
      <ul class="gmxzCon">
        <li>2016-05-16至2020-02-05</li>
      </ul>
      <div class="gmxzTitle">除外日期</div>
      <ul class="gmxzCon">
        <li>2018年2月14日至2018年2月22日，2017年11月17日-12月16日</li>
      </ul>
      <div class="gmxzTitle">使用时间</div>
      <ul class="gmxzCon">
        <li>团购券使用时间：10:00-20:00</li>
      </ul>
      <div class="gmxzTitle">预约提醒</div>
      <ul class="gmxzCon">
        <li>无需预约，消费高峰期可能需要等位</li>
      </ul>
      <div class="gmxzTitle">规则提醒</div>
      <ul class="gmxzCon">
        <li>每张团购券建议1人使用</li>
      </ul>
      <div class="gmxzTitle">其他费用</div>
      <ul class="gmxzCon">
        <li>不提供餐巾纸</li>
      </ul>
      <div class="gmxzTitle">包间</div>
      <ul class="gmxzCon">
        <li>店内无包间</li>
      </ul>
      <div class="gmxzTitle">堂食外带</div>
      <ul class="gmxzCon">
        <li>仅限餐前外带，提供免费打包服务</li>
      </ul>
      <div class="gmxzTitle">温馨提示</div>
      <ul class="gmxzCon">
        <li>团购用户不可同时享受商家其他优惠</li>
      </ul>
      <div class="gmxzTitle">商家服务</div>
      <ul class="gmxzCon">
        <li>免费提供100个停车位</li>
      </ul>
      <div class="gmxzTitle">发票信息</div>
      <ul class="gmxzCon">
        <li>发票问题请询问商家</li>
      </ul>
    </div>
    <div class="resBorder1">
      <button type="button" class="btn btn-warning ljgm">立即购买</button>
    </div>
    <div class="tg">一口香烧饼的其他团购</div>
    <div style="margin:15px 0;">
      <span class="price1">￥</span>
      <span class="price2">9.5</span>
      <span class="price3">￥10</span>
      <span>雪花无骨鸡柳大份1份</span>
    </div>
    <div style="margin:15px 0;">
      <span class="price1">￥</span>
      <span class="price2">14.5</span>
      <span class="price3">￥16.5</span>
      <span>鲜肉饼至尊套餐</span>
    </div>
    <div style="margin:15px 0;">
      <span class="price1">￥</span>
      <span class="price2">6.2</span>
      <span class="price3">￥7</span>
      <span>葱油烧饼+臭豆腐</span>
    </div>
    <div class="resBorder"></div>
    <div class="tg">看了此团购的人也看了</div>
    <div class="resFlexs">
      <img
        class="resImgs"
        src="https://p0.meituan.net/deal/0e774376a885086e76a788eedcbc5ea8141548.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
      />
      <div class="resBorders">
        <div class="resNames">悦四海海鲜自助音乐餐厅</div>
        <span class="resNewPrices">￥109.9</span>
        <span class="resOldPrices">￥120</span>
      </div>
    </div>
    <div class="resFlexs">
      <img
        class="resImgs"
        src="https://p0.meituan.net/deal/__22857129__4366422.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
      />
      <div class="resBorders">
        <div class="resNames">川德火锅</div>
        <span class="resNewPrices">￥45.8</span>
        <span class="resOldPrices">￥48</span>
      </div>
    </div>
    <div class="resFlexs">
      <img
        class="resImgs"
        src="https://p0.meituan.net/deal/3120192c8ee3750b02767af0b639693025645.jpg%40450w_280h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20"
      />
      <div class="resBorders">
        <div class="resNames">家好鱼圆</div>
        <span class="resNewPrices">￥18</span>
        <span class="resOldPrices">￥20</span>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
import Vue from "vue";
import { mapState } from "vuex";
export default {
  // created() {
  //   this.$store.dispatch("getDianpu");
  // },
  // computed: {
  //   ...mapState(["dianpu"])
  // },
  mounted: function() {
    this.$nextTick(() => {
      // this.dianpu=this.$store.state[this.$router]
      console.log(this.$store.state);
    });
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
  },
  data() {
    return {
      dianpu: [],
      dianpuIndex: 0
    };
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
    bottom: 0px;
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
  }
  .tgxq {
    margin: 15px 0;
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
  .jy {
    color: #999;
    font-size: 10px;
  }
  .gmxz {
    margin: 15px 0;
  }
  .gmxzTitle {
    line-height: 28px;
    font-size: 13px;
    display: block;
    color: #999;
  }
  .gmxzCon {
    color: #666;
    margin: 3px 0 15px 15px;
    font-size: 15px;
  }
  .resBorder1 {
    background-color: #f0f0f0;
    text-align: center;
    .ljgm {
      height: 38px;
      color: #fff;
      background-color: #f63;
      border-radius: 5px;
      font-size: 16px;
      line-height: 38px;
      width: 95%;
      margin: 10px auto;
      padding: 0px;
    }
  }
  .tg {
    margin: 10px 0px 10px 15px;
    font-size: 15px;
    color: #323232;
  }
  .price1 {
    color: #f63;
    font-size: 12px;
    margin-left: 11px;
    margin-top: 8px;
  }
  .price2 {
    color: #f63;
    font-size: 18px;
    flex: 1;
    margin-right: 5px;
  }
  .price3 {
    color: #8c8c8c;
    font-size: 12px;
    flex: 8;
    margin: 16px 5px 0 0;
    text-decoration: line-through;
  }
  .resFlexs {
    display: flex;
    margin-bottom: 10px;
    .resImgs {
      width: 94px;
      height: 58px;
      margin: 0px 10px 10px 15px;
      flex: 1;
    }
    .resBorders {
      margin: 3px 0 8px 5px;
      flex: 5;
      .resNames {
        margin-bottom: 10px;
      }
      .resNewPrices {
        font-size: 18px;
        color: #f63;
      }
      .resOldPrices {
        text-decoration: line-through;
        font-size: 12px;
        color: #666;
      }
    }
  }
}
</style>