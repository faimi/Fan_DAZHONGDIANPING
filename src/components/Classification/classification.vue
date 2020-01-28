<template>
  <div id="app">
    <div class="cf-flex dropdown" @click="shows()">
      <div class="cf-flex1" type="button" id="dropdownMenu1">
        全部商区
        <span class="iconfont icon-jiangxu down"></span>
        <span class="iconfont icon-shengxu up"></span>
      </div>
      <!-- 会报错，所以:key=后面一定要加'all'或者'part'，单单把(index,key)里面的key修改了不行 -->
      <!-- <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li class="lef-li" data-stop-propagation="true">
          <a
            href="#"
            class="dropdown-menu-li"
            v-for="(index, key) in ClassifyArea"
            :key="'all' + key"
            @click="choose(key)"
          >{{ index.AllArea }}</a>
        </li>
        <li class="right-li" v-if="ClassifyArea[0] != null">
          <a
            href="#"
            v-for="(index, key) in ClassifyArea[type].classifyArea"
            :key="'part' + key"
            :class="key == 0 ? 'dropdown-menu-li f63' : 'dropdown-menu-li'"
          >
            {{ index }}
            <div class="zx" v-if="key != 0">APP专享</div>
          </a>
        </li>
      </ul>-->
      <div class="cf-flex1">
        美食
        <span class="iconfont icon-jiangxu down"></span>
        <span class="iconfont icon-shengxu up"></span>
      </div>
      <div class="cf-flex1">
        智能排序
        <span class="iconfont icon-jiangxu down"></span>
        <span class="iconfont icon-shengxu up"></span>
      </div>
    </div>
    <ul class="dropdown-menu" v-if="show">
      <li class="lef-li">
        <div
          href="#"
          class="dropdown-menu-li"
          v-for="(index, key) in ClassifyArea"
          :key="'all' + key"
          @click="choose(key)"
        >{{ index.AllArea }}</div>
      </li>
      <li class="right-li">
        <div
          href="#"
          v-for="(index, key) in ClassifyArea[type].classifyArea"
          :key="'part' + key"
          :class="key == 0 ? 'dropdown-menu-li f63' : 'dropdown-menu-li'"
        >
          {{ index }}
          <div class="zx" v-if="key != 0">APP专享</div>
        </div>
      </li>
    </ul>
    //新建一个组件写筛选
    <!-- <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu> -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// 1、不是生命周期渲染的问题，是异步的问题，用nextTick，而且这个可以放在任何一个生命周期里面，不一定要是updated
// 2、ClassifyArea外面还包着一层classificationArea这是为什么？
// 3、modules用的不三不四
// 4、state和getters一样，那就没有必要写getters，不要写多余重复的代码，要明白自己写的是什么
// 5、学会用devtools
// 6、map，Object(key),namespace,箭头函数
// 7、所以现在的问题是models的问题，数据为空
export default {
  created() {
    this.$store.dispatch("getClassifyArea");
    // this.$nextTick(function () {
    //   this.$store.dispatch("getClassifyArea");
    // })
  },
  mounted: function() {
    // 不能用==
    // this.$nextTick(function () {
    // this.$store.dispatch("getClassifyArea");
    // })
    //   this.$nextTick(function () {
    //   this.$store.dispatch("classificationArea/getClassifyArea");
    //   // console.log(this.ClassifyArea)
    // })
    // this.arr=this.classificationArea;
    // console.log(this.arr.ClassifyArea);
    // var arr=[];
    // arr=this.classificationArea;
    // // console.log(this.classificationArea.ClassifyArea);
    // console.log(arr);
    // console.log(arr['ClassifyArea']);
    // console.log(this.arr['ClassifyArea']);
    // console.log(Object.keys(this.classificationArea))
    // this.classificationArea.map(function(item){
    // console.log(item);
    // })
  },
  computed: {
    // ...mapState('classificationArea',{
    //   ClassifyArea:state=>state.ClassifyArea
    // }),
    ...mapGetters(["ClassifyArea"])
  },
  data() {
    return {
      type: 0,
      arr: [],
      show: false,
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },
  methods: {
    choose(key) {
      this.type = key;
    },
    shows() {
      this.show = !this.show;
    }
  }
};
// $("body").on("click", "[data-stopPropagation]", function(e) {
//   e.stopPropagation();
// });
</script>
<style lang="less" scoped>
#app {
  font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
  margin: 0 auto;
  height: 41px;
  line-height: 41px;
  .cf-flex {
    background-color: #fff;
    display: flex;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #f0f0f0;
    .cf-flex1 {
      flex: 1;
      color: #111;
      width: 33%;
      .down {
        color: #bbbbbb;
        font-size: 8px;
        visibility: visible;
      }
      .up {
        color: #bbbbbb;
        font-size: 8px;
        position: absolute;
        margin-left: -17px;
        visibility: hidden;
      }
    }
    .cf-flex1:active {
      cursor: pointer;
      .down {
        color: #bbbbbb;
        font-size: 8px;
        visibility: hidden;
      }
      .up {
        color: #bbbbbb;
        position: absolute;
        font-size: 8px;
        visibility: visible;
        margin-left: -17px;
      }
    }
  }
  .dropdown-menu {
    width: 100%;
    box-shadow: none;
    font-family: PingFangSC-Medium;
    margin-top: 0;
    border-radius: 0;
    border: none;
    padding-bottom: 0;
    height: 350px;
    .lef-li {
      // height: 360px;
      background-color: #fff;
      .dropdown-menu-li {
        color: #111;
        font-size: 14px;
        height: 40px;
        line-height: 34px;
        border-left: 2px solid #fff;
        padding-left: 10px;
      }
      .dropdown-menu-li:hover {
        border-left: 2px solid #f63;
        background-color: #f9f9f9;
      }
      // 注意是focus，不是active
      .dropdown-menu-li:focus {
        color: #f63;
        background-color: #f0f0f0;
        // border-left: 2px solid #f63;
        font-size: 14px;
        height: 40px;
        line-height: 34px;
      }
    }
    .right-li {
      float: right;
      width: 50%;
      margin-top: -320px;
      overflow: hidden;
      height: 320px;
      overflow-y: scroll;
      background-color: #f0f0f0;
      .dropdown-menu-li {
        color: #111;
        font-size: 14px;
        height: 40px;
        line-height: 34px;
        padding-left: 10px;
        .zx {
          text-align: right;
          margin-top: -35px;
          color: #f63;
          margin-right: 10px;
        }
      }
      .dropdown-menu-li:hover {
        background-color: #f0f0f0;
      }
      //注意渲染顺序，如果f63在dropdown-menu-li的上方，样式会被覆盖
      .f63 {
        color: #f63;
      }
    }
    .right-li::-webkit-scrollbar {
      display: none; /* 隐藏滚动条 */
    }
  }
}
</style>
