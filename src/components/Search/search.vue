<template>
  <div>
    <!-- <router-view></router-view> -->
    <div class="bg wz">
      <div class="flx1 dz" style="min-width: 46px;">
        <!-- <router-link to="/city">嘉兴</router-link> -->
        <span class="cur" @click="$router.push('/city')">嘉兴</span>
        <span class="iconfont icon-xiangxia" style="font-size: 14px;"></span>
      </div>
      <input type="text" class="iconfont inp" :placeholder="icon" />
      <div class="gr">
        <span class="iconfont icon-gerenzhongxin flx1" style="font-size: 25px;"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      icon: "\ue60a  输入商户名、地点"
    };
  },
  components: {},
  methods: {}
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
  font-size: 14px;
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
  font-size: 13px;
  padding-left: 15px;
  background-color: #fff;
}
.gr {
  margin: auto 19px;
}
.cur {
  cursor: po inter;
}
input::-webkit-input-placeholder {
  /* position:relative; */
  /* left:15px; */
  color: #b8b8b8;
}
</style>