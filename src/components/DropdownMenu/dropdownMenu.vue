<template>
  <div>
    {{test}}
    <van-dropdown-menu>
      <!-- <slot slot="default" name="default"></slot> -->
      <van-dropdown-item title="全部商区" v-model="value1" :options="test" />
      <van-dropdown-item title="美食" v-model="value2" :options="option2" />
      <van-dropdown-item title="智能排序" v-model="value2" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("getClassifyArea");
  },
  computed: {
    ...mapGetters(["ClassifyArea"]),
    test:function(){
      var temp=[];
      for(var i=0;i<this.ClassifyArea.length;i++){
        temp.push(this.ClassifyArea[i].AllArea)
      };
      return temp;
    }
  },
  data() {
    return {
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
  }
};
</script>
<style lang="less" scoped>
</style>