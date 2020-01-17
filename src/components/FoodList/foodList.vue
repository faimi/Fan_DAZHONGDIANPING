<template>
  <div id="app">
    <div class="fl-flex" v-for="(index,key) in Name.kinds" v-bind:key="key">
        <div class="flex1">
          <div v-if="index.NameLabel!=null">
          <div class="qmth" v-if="index.NameLabel==1"></div>
          </div>
          <img class="BusinessImg" :src="index.NameImg" alt />
        </div>
        <div class="flex8">
          <div class="restaurantName">
            {{index.Names}}
            <span
              v-for="(index,key) in index.Names1"
              v-bind:key="'name'+key"
            >
              <span :class="index" class="marks"></span>
            </span>
          </div>
          <div class="rows2">
            <span :class="index.NameStar" class="DiscountImg"></span>
            <span class="tiao" v-if="index.EvaluationNumber!=null">{{index.EvaluationNumber}}条</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span class="ren" v-if="index.NameAverage!=null">￥{{index.NameAverage}}/人</span>
          </div>
          <div class="rows3">
            <span class="address" v-if="index.NameArea!=null">{{index.NameArea}}</span>
            <span class="foodType" v-if="index.NameType!=null">{{index.NameType}}</span>
          </div>
          <div class="rows4" v-if="index.NameCondition!=''">
            <span
              class="quality"
              v-for="(index,key) in index.NameCondition"
              v-bind:key="'all'+key"
            >{{index}}</span>
          </div>
          <div class="rows5" v-if="index.NameMark1!=''">
            <span class="marks" :class="index.NameMark1"></span>
            {{index.NameMark1s}}
          </div>
          <div class="rows6" v-if="index.NameMark2!=''">
            <span class="marks" :class="index.NameMark2"></span>
            {{index.NameMark2s}}
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
export default {
  // created() {
  //   //传字符，不能传对象
  //   this.$store.dispatch("getName");
  // },
  // computed: {
  //   //不能少了[]
  //   ...mapState(["name"])
  // },
  mounted(){
    this.$nextTick(()=>{
      this.NameIndex=this.$route.params.index;
      this.Name=this.$store.state.name[this.NameIndex]
    })
  },
  data(){
    return{
      NameIndex:0,
      Name:[]
    }
  }
};
</script>
<style lang="less" scoped>
#app {
  font-family: Hiragino Sans GB, Arial, Helvetica, "\5B8B\4F53", sans-serif;
  .fl-flex {
    display: flex;
    border-bottom: 1px solid #e1e1e1;
    .flex1 {
      flex: 1;
      margin: 20px 0px 12px 10px;
      .qmth {
        background-image: url("https://p0.meituan.net/meismis/ca7eaca0d4e1d654a0214a58fc7dcfb23740.png.webp");
        height: 19px;
        width: 52px;
        background-size: 52px auto;
        position: absolute;
        margin-top: 10px;
      }
      .BusinessImg {
        width: 93px;
      }
    }
    .flex8 {
      flex: 8;
      margin-top: 10px;
      margin-left: 14px;
      .restaurantName {
        font-size: 16px;
        font-weight: 400;
        color: #323232;
      }
      .rows2 {
        margin: 8px 0;
        .tiao {
          font-size: 12px;
          color: #333;
        }
        .ren {
          font-size: 12px;
          color: #333;
        }
      }
      .rows3 {
        .address {
          font-size: 12px;
          color: #999;
        }
        .foodType {
          font-size: 12px;
          color: #999;
        }
      }
      .rows4 {
        margin: 8px 0;
        .quality {
          font-size: 11px;
          border: 1px solid rgb(225, 225, 225);
          padding: 5px 4px;
          color: #999;
          margin-right: 7px;
        }
      }
      .rows5 {
        font-size: 13px;
        line-height: 40px;
        border-top: 1px solid rgb(225, 225, 225);
        border-bottom: 1px solid rgb(225, 225, 225);
      }
      .rows6 {
        font-size: 13px;
        line-height: 40px;
      }
    }
  }
}
</style>