<template>
  <div>
    <!-- <router-view></router-view> -->
    <div class="bg wz">
      <div class="flx1 dz" style="min-width: 46px;">
        <!-- <router-link to="/city">嘉兴</router-link> -->
        <!-- <section> -->
          <span class="cur" @click="$router.push('/city')">嘉兴</span>
        <!-- </section> -->
        <span class="iconfont icon-xiala"></span>
      </div>
      <input class="iconfont icon-sousuo inp" type="text" placeholder="&nbsp;&nbsp;&nbsp;&#xe633;" />
      <div class="gr">
        <span class="iconfont icon-gerenzhongxin flx1"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  },
  methods: {
  }
};
</script>
<style scoped>
.active {
  font-size: 20px;
  color: #000;
  text-decoration: none;
}
.iconfont {
  color: white;
}
.bg {
  background-color: #f63;
  height: 44px;
}
.wz {
  color: white;
  display: flex;
}
.flx1 {
  flex: 1;
}
.dz {
  margin: auto 15px;
}
.icon-xiala {
  font-size: 13px;
  margin-left: 1px;
}
.inp {
  width: 74%;
  height: 23px;
  margin: auto;
  border-radius: 25px;
  outline: none;
  color: black;
  flex: 21;
}
.gr {
  margin: auto 19px;
}
.cur {
  cursor: pointer;
}
</style>