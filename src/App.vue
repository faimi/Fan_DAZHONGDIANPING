<template>
  <div id="app">
    <!-- <v-Swipe></v-Swipe> -->
    <!-- 下面三个router-link都可以实现页面跳转，但是router-link中必须写入文字或组件，否则就是一个空的a标签 -->
    <!-- <router-link :to="{name:'home'}">1111111111<v-Swipe></v-Swipe></router-link> -->
    <!-- <router-link :to="{path:'/home'}">1111</router-link> -->
    <!-- <router-link to="/home">11111111111111111111111111111</router-link> -->
    <keep-alive>
      <!-- 只需rouer-view和index.js的重定向，就可以显示home页面，不需要上面再写router-link -->
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Swipe from "./components/Swipe/swipe";
export default {
  name: "App",
  components: {
    "v-Swipe": Swipe
    //不能在App.vue组件之间import组件，否则该组件会永远出现在页面上（跳转后也存在）
  }
};
</script>
<style lang="less" scoped>
</style>