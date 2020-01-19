<template>
  <div id="app">
    <v-buttonToolbar>
      <div slot="left" @click="$router.push('/home')">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        <div class="van-nav-bar__text">返回</div>
      </div>
      <div slot="title">
        <van-tabs type="card" @click="show()">
          <van-tab title="商户" class="sh"></van-tab>
          <van-tab title="闪惠团购" class="shtg"></van-tab>
        </van-tabs>
      </div>
    </v-buttonToolbar>
    <v-groupBuying v-if="shows==true"></v-groupBuying>
    <v-foodList v-if="shows==false"></v-foodList>
  </div>
</template>
<script>
import foodList from "../../components/FoodList/foodList.vue";
import buttonToolbar from "../../components/ButtonToolbar/buttonToolbar.vue";
import groupBuying from "../../components/GroupBuying/groupBuying.vue";
export default {
  components: {
    "v-foodList": foodList,
    "v-buttonToolbar": buttonToolbar,
    "v-groupBuying": groupBuying
  },
  data() {
    return {
      shows: false,
    };
  },
  methods: {
    show() {
      this.shows = !this.shows;
    }
  },
};
</script>
<style lang="less" scoped>
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
</style>