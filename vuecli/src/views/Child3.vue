<template>
    <div>
        <div>{{$route.params.name}}{{$route.params.time}}分钟前为您点赞</div>
        <div>您已经获得了{{$store.state.count}}个赞</div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>