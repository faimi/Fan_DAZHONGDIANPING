<template>
  <div id="app">
    <router-link to="/home"></router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
  }
};
</script>
<style lang="less" scoped>
	
</style>