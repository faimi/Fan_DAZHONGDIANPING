<template>
  <div>
    <!-- 栅栏系统的row不能丢 -->
    <div class="bc row">
      <div class="col-md-1 col-xs-1"></div>
      <div class="col-md-2 col-xs-2">
        <img src="./image/flash_sale.png" />
      </div>
      <div class="xbk col-md-8 col-xs-8">
        <div class="zgc">
          星巴克中关村（软件园店）
          <span class="pri">￥35</span>
        </div>
        <div class="ti">每天十点开抢</div>
      </div>
      <div class="col-md-1 col-xs-1 img2">
        <img src="./image/arrow.png" />
      </div>
    </div>
    <div class="resBorder"></div>
    <div class="fl">
      <!-- <div class="fl" style="min-width:1000px"> -->
      <!-- 无论有没有for循环{{mode.title}}都显示不出来，在for循环下{{index.title}}才能显示出来 -->
      <div
        style="flex:1;width:50%;max-width:50%;min-width:50%;border:1px solid #ccc"
        v-for="(index,key) in mod"
        :key="key"
      >
        <div class="floatl">
          <div :class="color[key]">{{index.title}}</div>
          <div class="us">{{index.user}}</div>
        </div>
        <div>
          <img :src="index.pic" alt />
        </div>
      </div>
    </div>
    <div class="resBorder"></div>
    <div class="wz">
      猜你喜欢
      <img src="./image/competitive_icon.png" style="margin: -2px 0 0 4px;" />
    </div>
    <ul>
      <li>
        <div
          class="bg"
          v-for="(index,key) in dianpu.dianpu"
          :key="key"
          @click="$router.push(`/guessLikeDetails/${key}`)"
        >
          <div class="flex1">
            <img :src="index.img" class="imgs" />
          </div>
          <div class="flex4">
            <div class="dian">{{index.name}}</div>
            <div class="lei">{{index.type}}</div>
            <div class="ma10">
              <span class="pri">￥{{index.price}}</span>
              <span class="li" v-if="index.price>90">立减10元</span>
              <span class="li" v-if="index.name.length<10">返1%</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("getDianpu");
  },
  computed: {
    ...mapState(["dianpu"])
  },
  data() {
    return {
      color: ["color1", "color2", "color3", "color4"],
      mod: [
        {
          title: "免费吃喝玩",
          user: "新用户专享",
          pic: require("./image/cover_01.png")
        },
        {
          title: "免费看电影",
          user: "新用户专享",
          pic: require("./image/cover_02.png")
        },
        {
          title: "食色性也",
          user: "光棍节等你来",
          pic: require("./image/cover_03.png")
        },
        {
          title: "点评祝福",
          user: "单身用户专享",
          pic: require("./image/cover_04.png")
        }
      ]
    };
  }
};
</script>
<style scoped>
.wz {
  margin-right: 10px;
  color: #acacac;
  font-size: 20px;
  margin: 10px 21px;
}
.bg {
  background: white;
  display: flex;
  border-bottom: 1px solid #f2f2f2;
}
.flex1 {
  flex: 1;
  margin: 18px;
  text-align: center;
}
.flex4 {
  flex: 4;
  margin-top: 12px;
}
.imgs {
  width: 167px;
  height: 161px;
}
.dian {
  font-weight: 700;
  font-size: 22px;
  color: #333;
  margin-top: 25px;
}
.lei {
  color: #666;
  font-size: 14px;
  margin-top: 14px;
}
.pri {
  color: #f60;
  font-size: 17px;
  margin-right: 10px;
}
.li {
  color: #ff784b;
  border: 1px solid;
  padding: 4px;
  border-radius: 3px;
  margin-right: 10px;
}
.ma10 {
  margin-top: 16px;
}
.bc {
  background: white;
  margin: 20px 0;
  /* min-width: 1000px; */
}
.xbk {
  margin-top: 32px;
}
.zgc {
  color: #070707;
  font-size: 25px;
  font-family: fantasy;
  margin-bottom: 16px;
}
.ti {
  color: #6a6a6a;
  font-size: 22px;
}
.img2 {
  line-height: 159px;
}
.fl {
  display: flex;
  text-align: center;
  width: 100%;
  margin-left: 0;
  flex-wrap: wrap;
  background: white;
}
.tit {
  font-size: 23px;
  margin-top: 33px;
}
.us {
  font-size: 23px;
  margin-top: 20px;
  color: #6a6a6a;
}
.floatl {
  float: left;
  margin-left: 101px;
}
.color1 {
  color: #965037;
  font-size: 23px;
  margin-top: 33px;
}
.color2 {
  color: #ffa001;
  font-size: 23px;
  margin-top: 33px;
}
.color3 {
  color: #ff558c;
  font-size: 23px;
  margin-top: 33px;
}
.color4 {
  color: #2bbaff;
  font-size: 23px;
  margin-top: 33px;
}
ul,
ol {
  margin-top: 0;
  margin-bottom: 0;
}
.resBorder {
  background-color: #f0f0f0;
  height: 20px;
  width: 100%;
}
</style>