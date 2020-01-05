<template>
  <div>
    <v-buttonToolbar>
      <template v-slot:tabChoose>团购详情</template>
    </v-buttonToolbar>
    <v-LikeDetail></v-LikeDetail>
  </div>
</template>
<script>
import buttonToolbar from "../../components/ButtonToolbar/buttonToolbar.vue";
import LikeDetail from "../../components/Guess you like it detail/Guess-you-like-it-detail.vue";
export default {
  components: {
    "v-LikeDetail": LikeDetail,
    "v-buttonToolbar": buttonToolbar
  }
};
</script>
<style lang="less" scoped>
</style>