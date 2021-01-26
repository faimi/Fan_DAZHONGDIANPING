<template>
  <div>
    <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu> -->
    <v-Search></v-Search>
    <v-Swipe></v-Swipe>
    <div class="resBorder"></div>
    <v-GuessLike></v-GuessLike>
  </div>
</template>
<script>
import Swipe from "../../components/Swipe/swipe.vue";
import GuessLike from "../../components/Guess you like it/Guess-you-like-it.vue";
import Search from "../../components/Search/search.vue";
export default {
  components: {
    "v-Swipe": Swipe,
    "v-GuessLike": GuessLike,
    "v-Search": Search
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "所有商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  }
};
</script>
<style lang="less">
.resBorder {
  background-color: #f0f0f0;
  height: 20px;
  width: 100%;
}
</style>