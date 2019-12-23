<template>
    <div id="app">
        <v-classification></v-classification>
        <v-foodList></v-foodList>
        <!-- <v-foodList style="width:1000px;"></v-foodList> -->
    </div>
</template>
<script>
import classification from '../../components/Classification/classification.vue'
import foodList from '../../components/FoodList/foodList.vue'
export default {
    components:{
        'v-classification':classification,
        'v-foodList':foodList,
    }
}
</script>
<style lang="less" scoped>

</style>