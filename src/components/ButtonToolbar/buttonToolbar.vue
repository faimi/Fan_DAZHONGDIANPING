<template>
  <div id="app">
    <header
      class="aui-bar aui-bar-nav aui-bar-light"
      v-if="$route.path=='/deliciousFood'||$route.path=='/city'"
    >
      <a class="aui-pull-left aui-btn" @click.stop="$router.push('/home')">
        <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title">
        <slot name="tabChoose"></slot>
      </div>
    </header>
    <header class="aui-bar aui-bar-nav aui-bar-light headerBar">
      <a class="aui-pull-left aui-btn icon-fh" @click.stop="$router.push('/home')">
        <span class="aui-iconfont aui-icon-left span-fh"></span>
        <span class="fh">返回</span>
      </a>
      <span class="aui-title tabchoose">
        <slot name="tabChoose"></slot>
      </span>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.headerBar {
  height: 28px;
  line-height: 28px;
  .icon-fh {
    margin: 10px 0;
    .span-fh {
      font-size: 17px;
      color: #333;
      font-weight: bold;
    }
    .fh {
      margin-left: 3px;
      color: #333;
      font-size: 14px;
    }
  }
  .tabchoose {
    font-size: 18px;
    line-height: 2.25rem;
    color: #333;
    margin: 10px 0;
  }
}
</style>