<template>
    
    <div id='header' :style={background:selectMenu.bg}>
        <span>首页</span>
        <span class='title'>{{selectMenu.name}}</span>
    </div>
</template>

<script>
    export default {
        props:['selectMenu']
    }
</script>

<style scoped>
    #header{
        height: 1rem;
        background: #f00;
        width: 100%;
        line-height: 1rem;
        position:fixed;
        color:#fff;
        top:0;
    }
    .title{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
    }
</style>