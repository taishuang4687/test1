<template>
    <div>
        <div>此时的值为：{{$store.state.count}}</div>
        <button @click="add">++</button>
        <button @click="reduce">--</button>
        <div>{{count}}</div>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex';
    export default {
        // computed:{
        //     count(){
        //         return this.$store.state.count;
        //     }
        // }
        // computed:mapState(['count'])
        // computed:mapState({
        //     count:(state)=>{
        //         return state.count;
        //     }
        // })
        methods:mapMutations(['add','reduce']),
        computed:mapState({
            count:state=>state.count
        })
        
    }
</script>

<style lang="scss" scoped>

</style>