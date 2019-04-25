<template>
    <div>
        <h2>我的主页</h2>
        <div>
            <router-link to='/child1/7'>博客</router-link> |
            <router-link :to='{name:"groups",params:{name:"got7,kard"}}'>我的喜欢</router-link> |
            <router-link :to='{name:"son3",params:{name:"林在范",time:3}}'>我的赞</router-link>
        </div>
        <p></p>
            <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>