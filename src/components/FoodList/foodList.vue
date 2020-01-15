<template>
  <!-- <div id="app">
    <div class="fl-flex" v-for="(index,key) in restaurant.Restaurant" v-bind:key="key">
      <div class="flex1">
        <div class="qmth" v-if="index.RestaurantLabel==1"></div>
        <img class="BusinessImg" :src="index.RestaurantImg" alt />
      </div>
      <div class="flex8">
        <div class="restaurantName">
          {{index.RestaurantName}}
          <span
            v-for="(item,key) in index.RestaurantName1"
            v-bind:key="'name'+key"
          >
            <span :class="item" class="marks"></span>
          </span>
        </div>
        <div class="rows2">
          <span :class="index.RestaurantStar" class="DiscountImg"></span>
          <span class="tiao">{{index.EvaluationNumber}}条</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span class="ren">￥{{index.RestaurantAverage}}/人</span>
        </div>
        <div class="rows3">
          <span class="address">{{index.RestaurantArea}}</span>
          <span class="foodType">{{index.RestaurantType}}</span>
        </div>
        <div class="rows4" v-if="index.RestaurantCondition!=''">
          <span
            class="quality"
            v-for="(item,key) in index.RestaurantCondition"
            v-bind:key="'all'+key"
          >{{item}}</span>
        </div>
        <div class="rows5" v-if="index.RestaurantMark1!=''">
          <span class="marks" :class="index.RestaurantMark1"></span>
          {{index.RestaurantMark1s}}
        </div>
        <div class="rows6" v-if="index.RestaurantMark2!=''">
          <span class="marks" :class="index.RestaurantMark2"></span>
          {{index.RestaurantMark2s}}
        </div>
      </div>
    </div>
  </div> -->
  <div>
    {{KTV}}
    {{restaurant}}
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("getKtv");
    this.$store.dispatch("getRestaurant");
  },
  computed: {
    ...mapState(["KTV","restaurant"])
  }
};
</script>
<style lang="less" scoped>
#app {
  font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
  .fl-flex {
    display: flex;
    border-bottom: 1px solid #e1e1e1;
    .flex1 {
      flex: 1;
      margin: 20px 0px 12px 10px;
      .qmth {
        background-image: url("https://p0.meituan.net/meismis/ca7eaca0d4e1d654a0214a58fc7dcfb23740.png.webp");
        height: 19px;
        width: 52px;
        background-size: 52px auto;
        position: absolute;
        margin-top: 10px;
      }
      .BusinessImg {
        width: 93px;
      }
    }
    .flex8 {
      flex: 8;
      margin-top: 10px;
      margin-left: 14px;
      .restaurantName {
        font-size: 16px;
        font-weight: 400;
        color: #323232;
      }
      .rows2 {
        margin: 8px 0;
        .tiao {
          font-size: 12px;
          color: #333;
        }
        .ren {
          font-size: 12px;
          color: #333;
        }
      }
      .rows3 {
        .address {
          font-size: 12px;
          color: #999;
        }
        .foodType {
          font-size: 12px;
          color: #999;
        }
      }
      .rows4 {
        margin: 8px 0;
        .quality {
          font-size: 11px;
          border: 1px solid rgb(225, 225, 225);
          padding: 5px 4px;
          color: #999;
          margin-right: 7px;
        }
      }
      .rows5 {
        font-size: 13px;
        line-height: 40px;
        border-top: 1px solid rgb(225, 225, 225);
        border-bottom: 1px solid rgb(225, 225, 225);
        // width: calc(500%);
      }
      .rows6 {
        font-size: 13px;
        line-height: 40px;
        // width: calc(500%);
      }
    }
  }
}
</style>