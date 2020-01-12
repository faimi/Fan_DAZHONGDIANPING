<template>
  <div id="app">
    <van-nav-bar>
      <slot slot="left" name="left"></slot>
      <slot slot="title" name="title"></slot>
    </van-nav-bar>
    <!-- <header
      class="aui-bar aui-bar-nav aui-bar-light"
      v-if="$route.path=='/deliciousFood'||$route.path=='/city'"
    >
      <a class="aui-pull-left aui-btn" @click.stop="$router.push('/home')">
        <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title">
        <slot name="tabChoose"></slot>
      </div>
    </header>-->
    <!-- <header class="aui-bar aui-bar-nav aui-bar-light headerBar" v-else>
      <a class="aui-pull-left aui-btn icon-fh" @click.stop="$router.push('/home')">
        <span class="aui-iconfont aui-icon-left span-fh"></span>
        <span class="fh">返回</span>
      </a>
      <span class="aui-title tabchoose">
        <slot name="tabChoose"></slot>
      </span>
    </header>-->
  </div>
</template>

<script>
export default {};
</script>
<style lang="less" scoped>
#app {
  .sh {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .shtg {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>