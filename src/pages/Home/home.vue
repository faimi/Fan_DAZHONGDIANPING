<template>
  <div>
    <v-Search></v-Search>
    <v-Swipe></v-Swipe>
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
</style>