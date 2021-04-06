<template>
  <div id="app">
    <van-nav-bar>
      <slot slot="left" name="left"></slot>
      <slot slot="title" name="title"></slot>
    </van-nav-bar>
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