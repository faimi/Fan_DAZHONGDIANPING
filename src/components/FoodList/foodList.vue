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
          <span v-for="(index,key) in index.Names1" v-bind:key="'name'+key">
            <span :class="index" class="marks"></span>
          </span>
        </div>
        <div class="rows2">
          <span v-if="index.NameTakeOutFood!=null">
            <span
              v-for="(item,it) in 5"
              :key="it"
              class="TakeOutFood"
              :class="index.NameTakeOutFood"
            ></span>
          </span>
          <span v-if="index.NameStar!=null" :class="index.NameStar" class="DiscountImg"></span>
          <span class="defen" v-if="index.NameDeFen!=null">{{index.NameDeFen}}分&nbsp;&nbsp;&nbsp;</span>
          <span class="defen1" v-if="index.NameDeFen1!=null">{{index.NameDeFen1}}&nbsp;&nbsp;&nbsp;</span>
          <span class="tiao" v-if="index.EvaluationNumber!=null">{{index.EvaluationNumber}}条</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span
            class="ren"
            v-if="index.NameAverage!=null"
          >￥{{index.NameAverage}}/人</span>
          <span class="ren" v-if="index.NameModel!=null">|&nbsp;&nbsp;{{index.NameModel}}</span>
          <span class="xf" v-if="index.NameXF!=null">{{index.NameXF}}人消费</span>
          <span class="minute" v-if="index.NameMinute!=null">{{index.NameMinute}}人消费</span>
        </div>
        <div class="rows3">
          <span class="address" v-if="index.NameArea!=null">{{index.NameArea}}</span>
          <span class="foodType" v-if="index.NameType!=null">{{index.NameType}}</span>
        </div>
        <div class="rows4">
          <span class="price" v-if="index.NamePrice!=null">
            ￥{{index.NamePrice}}&nbsp;
            <span class="qi">起</span>
          </span>
          <span class="yuding" v-if="index.NameYuding!=null">{{index.NameYuding}}</span>
          <span v-if="index.NameCondition!=''">
            <span
              class="quality"
              v-for="(index,key) in index.NameCondition"
              v-bind:key="'all'+key"
            >{{index}}</span>
          </span>
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
  mounted() {
    this.$nextTick(() => {
      this.NameIndex = this.$route.params.index;
      this.Name = this.$store.state.name[this.NameIndex];
    });
  },
  data() {
    return {
      NameIndex: 0,
      Name: []
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/home") {
      } else {
        this.NameIndex = this.$route.params.index;
        this.Name = this.$store.state.name[this.NameIndex];
      }
    }
  }
};
</script>
<style lang="less" scoped>
#app {
  font: 100%/1 -apple-system, Roboto, PingFang SC, Noto Sans CJK SC, sans-serif;
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
      margin-top: 16px;
      margin-left: 14px;
      .restaurantName {
        font-size: 16px;
        font-weight: 400;
        color: #323232;
      }
      .rows2 {
        margin: 8px 0;
        .defen {
          color: #ea120e;
          font-size: 12px;
          font-weight: 800;
        }
        .defen1 {
          color: #333;
          font-size: 11px;
        }
        .tiao {
          font-size: 12px;
          color: #333;
        }
        .ren {
          font-size: 12px;
          color: #333;
        }
        .minute {
          color: #999;
          font-size: 10px;
          position: absolute;
          right: 22px;
          margin-top: 5px;
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
        padding: 6px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        .price {
          font-size: 20px;
          font-weight: 500;
          color: #f63;
          .qi {
            color: #999;
            font-size: 10px;
            font-weight: 100;
          }
        }
        .yuding {
          color: #999;
          font-size: 10px;
          position: absolute;
          right: 22px;
          margin-top: 5px;
        }
        .quality {
          font-size: 11px;
          border: 1px solid rgb(225, 225, 225);
          padding: 4px 4px;
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