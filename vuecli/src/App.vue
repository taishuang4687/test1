<template>
  <div id="app">
    <div id="nav">
      <button @click="goback">&lt;</button> |
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/my'>我的</router-link> |
      <router-link to='/abc'>alias</router-link> |
      <router-link to='/exit'>退出</router-link> |
      <router-link to='/count'>count</router-link>
      <button @click="next">&gt;</button>
    </div>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>
<script>
export default {
    methods:{
      goback(){
        this.$router.go(-1);
      },
      next(){
        this.$router.go(1);
      }
    }
}
</script>

<style>
.fade-enter{
  opacity:0;
}
.fade-enter-active{
  transition: opacity 1s ease;
}
.fade-enter-to{
  opacity:1;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  transition:opacity 1s ease;
}
.fade-leave-to{
  opacity:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
