<template>
  <div id="app">
    <div v-for="(index,key) in GroupBuying" v-bind:key="'one'+key">
      <div class="GroupName">{{index.GroupName}}</div>
      <!-- <div v-for="(item,k) in index.GroupType" v-bind:key="'two'+k">
        <div class="GroupBorder">
          <div class="GroupContent">
            <img class="GroupImg" :src="item.GroupRestaurantImg" />
          </div>
          <div class="GroupIntroduce">
            <div class="GroupIntru">{{item.GroupRestaurantType}}</div>
            <div class="GroupPrice">
              <span class="nowPrice">￥{{item.GroupRestaurantNewPrice}}</span>
              <span class="oldPrice">￥{{item.GroupRestaurantOldPrice}}</span>
              <div class="GroupSold">已售{{item.GroupRestaurantTypeSold}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="GroupHidden" @click="shows(key)">
        还有{{index.GroupType.length-2}}个团购
        <span
          class="iconfont icon-xiangxia"
          style="font-size: 14px;"
        ></span>
      </div>
      <div class="nulls"></div> -->
      <div v-if="show[key]==false">
        <div v-for="(item,k) in index.GroupType" v-bind:key="'two'+k">
          <div class="GroupBorder" v-if="k<2">
            <div class="GroupContent">
              <img class="GroupImg" :src="item.GroupRestaurantImg" />
            </div>
            <div class="GroupIntroduce">
              <div class="GroupIntru">{{item.GroupRestaurantType}}</div>
              <div class="GroupPrice">
                <span class="nowPrice">￥{{item.GroupRestaurantNewPrice}}</span>
                <span class="oldPrice">￥{{item.GroupRestaurantOldPrice}}</span>
                <div class="GroupSold">已售{{item.GroupRestaurantTypeSold}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="GroupHidden" @click="shows(key)">
          还有{{index.GroupType.length-2}}个团购
          <span
            class="iconfont icon-xiangxia"
            style="font-size: 14px;"
          ></span>
        </div>
        <div class="nulls"></div>
      </div>
      <div v-else>
        <div class="GroupBorder" v-for="(item,k1) in index.GroupType" v-bind:key="'three'+k1">
          <div class="GroupContent">
            <img class="GroupImg" :src="item.GroupRestaurantImg" />
          </div>
          <div class="GroupIntroduce">
            <div class="GroupIntru">{{item.GroupRestaurantType}}</div>
            <div class="GroupPrice">
              <span class="nowPrice">￥{{item.GroupRestaurantNewPrice}}</span>
              <span class="oldPrice">￥{{item.GroupRestaurantOldPrice}}</span>
              <div class="GroupSold">
                已售{{item.GroupRestaurantTypeSold}}
              </div>
            </div>
          </div>
        </div>
        <div class="nulls"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
export default {
  created() {
    this.$store.dispatch("getGroupBuying");
  },
  data() {
    return {
    };
  },
  methods: {
    shows(key) {
      this.show[key] = true;
      this.$forceUpdate();
      // this.GroupBuying[key].GroupType.length = 2;
      // this.$forceUpdate();
    }
  },
  computed: {
    ...mapState(["GroupBuying"]),
    show: {
      get: function() {
        var temp = [];
        for (var i = 0; i < this.GroupBuying.length; i++) {
          temp.push(false);
        }
        return (this.show = temp);
      },
      set: function() {}
    }
  },
  TwoGroupType: function() {
    for (var i = 0; i < this.GroupBuying.length; i++) {
      for (var j = 0; j < this.GroupBuying[i].GroupType.length; j++) {
        var temp = this.GroupBuying[i].GroupType[j];
        var temp1 = temp.filter(function(item, index, array) {
          return item < 2;
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
#app {
  font-family: Hiragino Sans GB, Arial, Helvetica, "宋体", sans-serif;
  .GroupName {
    border-bottom: 1px solid #f0f0f0;
    font-size: 16px;
    line-height: 46px;
    color: #333;
    padding: 0 12px 0 13px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .GroupBorder {
    padding: 10px 10px 8px;
    display: -webkit-box;
    border-bottom: 1px solid #f0f0f0;
    .GroupContent {
      position: relative;
      .GroupImg {
        height: 66px;
        width: 90px;
        border-radius: 3px;
        margin-right: 10px;
      }
    }
    .GroupIntroduce {
      -webkit-box-flex: 1;
      .GroupIntru {
        font-size: 14px;
        line-height: 15px;
        max-height: 30px;
        color: #666;
        margin: 11px 0 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
      .GroupPrice {
        .nowPrice {
          color: #f63;
          margin-right: 5px;
          font-size: 18px;
        }
        .oldPrice {
          color: #999;
          font-size: 14px;
          text-decoration: line-through;
        }
        .GroupSold {
          text-align: right;
          color: #999;
          font-size: 12px;
          margin: -20px 14px;
        }
      }
    }
  }
  .GroupHidden {
    padding: 10px 0;
    text-align: center;
    color: #333;
    font-size: 14px;
    border-bottom: 1px solid #f0f0f0;
  }
  .nulls {
    height: 10px;
    background-color: #f0f0f0;
  }
}
</style>