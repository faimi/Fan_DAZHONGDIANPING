<template>
  <div class="city">
    <v-ButtonToolbar>
      <div slot="left" @click="$router.push('/home')">
        <i class="van-icon van-icon-arrow-left van-nav-bar__arrow"></i>
        <div class="van-nav-bar__text">返回</div>
      </div>
      <div slot="title">
        <van-tabs type="card">
          <van-tab title="国内" class="gn"></van-tab>
          <van-tab title="国际/港澳台" class="gj"></van-tab>
        </van-tabs>
      </div>
    </v-ButtonToolbar>
    <div class="sousuo">
      <input
        class="iconfont inp"
        type="text"
        placeholder="输入城市名或拼音查询"
      />
    </div>
    <div class="wf">无法获取您的定位</div>
    <div class="cs">&nbsp;&nbsp;&nbsp;热门城市</div>
    <div class="flex">
      <div class="flex3 com" v-for="(index1, k1) in remen" :key="k1">
        &nbsp;&nbsp;&nbsp;{{ index1 }}
      </div>
    </div>
    <div class="cs">&nbsp;&nbsp;&nbsp;更多城市</div>
    <div class="flex">
      <div class="flex3 com" v-for="(zi, k6) in zimu" :key="k6">{{ zi }}</div>
    </div>
    <div v-for="(item, k3) in city" :key="k3 + '-city'">
      <div class="cs">&nbsp;&nbsp;&nbsp;{{ item.title }}</div>
      <div class="flex">
        <div class="flex3 com" v-for="(list, k5) in item.lists" :key="k5">
          {{ list }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import buttonToolbar from "../../components/ButtonToolbar/buttonToolbar.vue";
export default {
  created() {
    this.$store.dispatch("getCity");
  },
  data() {
    return {
      remen: [
        "北京",
        "成都",
        "重庆",
        "广州",
        "杭州",
        "南京",
        "上海",
        "深圳",
        "苏州",
        "天津",
        "武汉",
        "西安",
      ],
      zimu: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  computed: {
    ...mapGetters(["city"]),
  },
  components: {
    "v-ButtonToolbar": buttonToolbar,
  },
  mounted() {
    console.log(this);
  },
};
</script>
<style scoped>
#app {
  font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
}
.city {
  top: 0;
  left: 0;
  z-index: 666;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.inp {
  width: 80%;
  height: 32px;
  margin: auto;
  border-radius: 25px;
  outline: none;
  color: black;
  font-size: 15px;
  text-align: center;
}
.sousuo {
  text-align: center;
  background-color: #f2f2f2;
  height: 50px;
  line-height: 50px;
}
.wf {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 14px;
}
.cs {
  height: 30px;
  line-height: 30px;
  background-color: #f2f2f2;
  font-size: 14px;
  font-weight: 700;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex5 {
  flex: 1;
  width: 20%;
  max-width: 20%;
  min-width: 20%;
}
.flex3 {
  flex: 1;
  width: 33%;
  min-width: 33%;
  max-width: 33.3%;
}
.com {
  border-right: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 14px;
}
.width200 {
  width: 200px;
}
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
.gn {
  width: 75px;
  font-size: 15px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.gj {
  width: 75px;
  font-size: 15px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>