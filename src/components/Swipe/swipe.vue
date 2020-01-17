<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" style="margin-top: 12px;">
        <van-row class="row">
          <van-col span="6" v-for="(index,key) in name" :key="key">
            <img class="img" :src="index.pict" @click="$router.push(`/deliciousFood/${index.tit}/${key}`)" />
            <div class="font">{{index.tit}}</div>
          </van-col>
        </van-row>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/css/swiper.css";
/* eslint-disable no-new */
// moke是图片接口  vue moke接口  http传输json数据
export default {
  created() {
    this.$store.dispatch("getName");
  },
  computed: {
    ...mapState(["name"])
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
.row {
  text-align: center;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  z-index: 1;
  background: white;
  height: 246px;
}
.img {
  width: 70px;
  height: 70px;
}
.font {
  text-align: center;
  font-size: 16px;
  font-family: Microsoft YaHei;
  margin-top: -6px;
  line-height: 25px;
}
</style>
