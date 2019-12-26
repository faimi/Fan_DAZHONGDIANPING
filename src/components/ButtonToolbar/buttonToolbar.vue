<template>
  <div id="app">
    <header class="aui-bar aui-bar-nav aui-bar-light"  v-if="$route.path=='/deliciousFood'||$route.path=='/city'">
      <a class="aui-pull-left aui-btn" @click.stop="$router.push('/home')">
        <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title">
      <slot name="tabChoose"></slot>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>

</style>