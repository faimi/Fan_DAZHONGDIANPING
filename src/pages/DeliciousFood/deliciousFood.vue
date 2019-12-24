<template>
    <div id="app">
        <v-buttonToolbar></v-buttonToolbar>
        <v-classification></v-classification>
        <v-foodList></v-foodList>
        <!-- <v-foodList style="width:1000px;"></v-foodList> -->
    </div>
</template>
<script>
import classification from '../../components/Classification/classification.vue'
import foodList from '../../components/FoodList/foodList.vue'
import buttonToolbar from '../../components/ButtonToolbar/buttonToolbar.vue'
export default {
    components:{
        'v-classification':classification,
        'v-foodList':foodList,
        'v-buttonToolbar':buttonToolbar
    }
}
</script>
<style lang="less" scoped>

</style>