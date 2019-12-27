<template>
  <div>
      
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  created(){
    this.$store.dispatch("getGroupBuying");
  },
  computed:{
    ...mapState(["GroupBuying"])
  }
};
</script>
<style lang="less" scoped>
</style>