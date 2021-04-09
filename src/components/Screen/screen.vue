<template>
  <div id="app">
    <van-dropdown-menu>
      <van-dropdown-item title="全部商区">
        <div slot="default">
          <van-tree-select
            :items="ClassifyArea"
            :active-id.sync="activeId"
            :main-active-index.sync="activeIndex"
          />
        </div>
      </van-dropdown-item>
      <van-dropdown-item :title="ms" ref="item">
        <div slot="default">
          <van-cell
            v-for="(index, key) in option1"
            :key="key"
            :title="index.text"
            :value="index.value"
            @click="onConfirm(index.text)"
            :class="ms == index.text ? 'f60' : ''"
          />
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="znpx" :options="option2" />
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
  },
  data() {
    return {
      activeId: 1,
      activeIndex: 0,
      znpx: "a",
      ms: "全部美食",
      option1: [
        {
          text: "全部美食",
          value: "",
        },
        {
          text: "面包/饮品",
          value: 313,
        },
        {
          text: "自助餐",
          value: 27,
        },
        {
          text: "火锅",
          value: 206,
        },
      ],
      option2: [
        { text: "智能排序", value: "a" },
        { text: "距离优先", value: "b" },
        { text: "人气优先", value: "c" },
        { text: "好评优先", value: "d" },
        { text: "口味优先", value: "e" },
        { text: "环境优先", value: "f" },
        { text: "服务优先", value: "g" },
        { text: "低价优先", value: "h" },
        { text: "高价优先", value: "i" },
      ],
    };
  },
  methods: {
    onConfirm(text) {
      this.$refs.item.toggle();
      this.$data.ms = text;
    },
  },
};
</script>

<style lang="less" scoped>
.f60 {
  color: #f60;
}
</style>