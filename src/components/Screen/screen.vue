<template>
  <div id="app">
    <van-dropdown-menu>
      <van-dropdown-item title="全部商区">
        <div slot="default">
          <van-tree-select
            :items="items"
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
          />
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="znpx" :options="option2" />
    </van-dropdown-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          // 导航名称
          text: "所有城市",
          // 导航名称右上角徽标，2.5.6 版本开始支持
          badge: 3,
          // 是否在导航名称右上角显示小红点
          dot: true,
          // 导航节点额外类名
          className: "my-class",
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: "温州",
              // id，作为匹配选中状态的标识符
              id: 1,
              // 禁用选项
              //   disabled: true,
            },
            {
              text: "杭州",
              id: 2,
            },
          ],
        },
      ],
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
</style>