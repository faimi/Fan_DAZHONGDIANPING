<template>
  <div id="app">
    <v-buttonToolbar>
      <template v-slot:tabChoose>
        <div class="aui-bar aui-bar-btn aui-bar-btn-round width150">
          <div class="aui-bar-btn-item aui-active sh" @click="flag=false">商户</div>
          <div class="aui-bar-btn-item shtg" @click="flag=true">闪惠团购{{flag}}</div>
        </div>
      </template>
    </v-buttonToolbar>
    <v-classification v-if="flag==false"></v-classification>
    <v-foodList></v-foodList>
    <!-- <v-foodList style="width:1000px;"></v-foodList> -->
  </div>
</template>
<script>
import classification from "../../components/Classification/classification.vue";
import foodList from "../../components/FoodList/foodList.vue";
import buttonToolbar from "../../components/ButtonToolbar/buttonToolbar.vue";
export default {
  components: {
    "v-classification": classification,
    "v-foodList": foodList,
    "v-buttonToolbar": buttonToolbar
  },
  data(){
      return {
          flag:false
      }
  }
};
</script>
<style lang="less" scoped>
.width150 {
  width: 150px;
  .sh {
    width: 75px;
    font-size: 15px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .shtg {
    width: 75px;
    font-size: 15px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>