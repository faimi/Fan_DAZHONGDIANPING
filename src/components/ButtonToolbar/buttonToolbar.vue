<template>
  <div id="app">
    <header class="aui-bar aui-bar-nav aui-bar-light">
      <a class="aui-pull-left aui-btn" @click="$router.push('/home')">
        <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title">
        <div class="aui-bar aui-bar-btn aui-bar-btn-round width150">
          <div class="aui-bar-btn-item aui-active sh">商户</div>
          <div class="aui-bar-btn-item shtg">闪惠团购</div>
        </div>
      </div>
    </header>
    <header class="aui-bar aui-bar-nav aui-bar-light">
      <a class="aui-pull-left aui-btn" @click="$router.push('/home')">
        <span class="aui-iconfont aui-icon-left"></span>
      </a>
      <div class="aui-title">
        <div class="aui-bar aui-bar-btn aui-bar-btn-round width200">
          <div class="aui-bar-btn-item aui-active gn">国内</div>
          <div class="aui-bar-btn-item gjgat">国际/港澳台</div>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
.width150 {
  width: 150px;
  .sh {
    width: 75px;
    font-size: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .shtg {
    width: 75px;
    font-size: 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
.width200 {
  width: 200px;
  .gn {
    width: 100px;
    font-size: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .gjgat {
    width: 100px;
    font-size: 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>