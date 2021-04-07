<template>
  <div id="app">
    <v-buttonToolbar>
      <div slot="left" @click="$router.push('/home')">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        <div class="van-nav-bar__text">返回</div>
      </div>
      <div slot="title" v-if="$route.path == '/deliciousFood/美食/0'">
        <van-tabs type="card" @click="show()">
          <van-tab title="商户" class="sh"></van-tab>
          <van-tab title="闪惠团购" class="shtg"></van-tab>
        </van-tabs>
      </div>
      <div slot="title" v-else>
        <span v-if="$route.path == '/deliciousFood/酒店/1'">酒店</span>
        <span v-if="$route.path == '/deliciousFood/休闲娱乐/2'">休闲娱乐</span>
        <span v-if="$route.path == '/deliciousFood/外卖/3'">外卖</span>
        <span v-if="$route.path == '/deliciousFood/火锅/4'">火锅</span>
        <span v-if="$route.path == '/deliciousFood/丽人/5'">丽人</span>
        <span v-if="$route.path == '/deliciousFood/周边游/6'">周边游</span>
        <span v-if="$route.path == '/deliciousFood/KTV/7'">KTV</span>
      </div>
    </v-buttonToolbar>
    <!-- <v-classification></v-classification> -->
    <v-screen
      v-if="shows == false && $route.path == '/deliciousFood/美食/0'"
    ></v-screen>
    <v-groupBuying v-if="shows == true"></v-groupBuying>
    <v-foodList v-if="shows == false"></v-foodList>
  </div>
</template>
<script>
import foodList from "../../components/FoodList/foodList.vue";
import classification from "../../components/Classification/classification.vue";
import buttonToolbar from "../../components/ButtonToolbar/buttonToolbar.vue";
import groupBuying from "../../components/GroupBuying/groupBuying.vue";
import screen from "../../components/Screen/screen.vue";
export default {
  components: {
    "v-foodList": foodList,
    "v-classification": classification,
    "v-buttonToolbar": buttonToolbar,
    "v-groupBuying": groupBuying,
    "v-screen": screen,
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.shows = false;
    });
  },
  data() {
    return {
      shows: false,
    };
  },
  methods: {
    show() {
      this.shows = !this.shows;
    },
  },
};
</script>
<style lang="less" scoped>
body {
  .width150 {
    width: 150px;
    .sh {
      width: 75px;
      font-size: 15px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
    .shtg {
      width: 75px;
      font-size: 15px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }
}
</style>