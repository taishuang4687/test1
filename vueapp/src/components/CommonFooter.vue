<template>
    <div id='footer'>
        <ul class='footer-list' :style={background:selectMenu.bg}>
            <li @click='$emit("change",index)' v-for='(obj,index) in menu' :key='index'>
                <router-link :to='obj.path'>{{obj.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['menu','selectMenu']
    }
</script>

<style scoped>
    #footer{
        height: 1rem;
        background: #f00;
        position:fixed;
        bottom:0;
        width: 100%;
        text-align: center;
        line-height: 1rem;
    }
    .footer-list{
        display: flex;
    }
    .footer-list li{
        flex:1;
    }
    .footer-list a{
        color:#000;
        outline:none;
    }
    .footer-list a.router-link-exact-active{
        color:#fff;
    }
</style>