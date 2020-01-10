<template>
  <!-- <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="margin-top: 12px;">
        <van-row>
          <div v-for="(index,key) in name" :key="key">
            <van-col span="1"></van-col>
            <van-col span="2">
              <img class="img" :src="index.pict" @click="$router.push('/deliciousFood')" />
              <div class="font">{{index.tit}}</div>
            </van-col>
          </div>
        <van-row>
      </div>
  </div>-->
  <!-- 如果需要分页器 -->
  <!-- <div class="swiper-pagination"></div>
  </div>-->
<van-row>
  <van-col span="2">span: 8</van-col>
  <van-col span="3">span: 8</van-col>
  <van-col span="3">span: 8</van-col>
</van-row>
</template>

<script>
import { mapGetters } from "vuex";
import Swiper from "swiper";
import "swiper/css/swiper.css";
/* eslint-disable no-new */
// moke是图片接口  vue moke接口  http传输json数据
export default {
  created() {
    this.$store.dispatch("getName");
  },
  computed: {
    ...mapGetters(["name"])
  },
  mounted: function() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>

<style lang="less">
// body {
//   background-color: #f0f0f0;
// }
.row {
  margin-right: 153px;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  // padding: 12px 0px;
  z-index: 1;
  background: white;
  height: 246px;
}
.col-md-2-style {
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
}
.img {
  width: 70px;
  height: 70px;
}
.font {
  margin: 10px 0;
}
</style>
