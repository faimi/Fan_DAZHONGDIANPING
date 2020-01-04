<template>
  <div>
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