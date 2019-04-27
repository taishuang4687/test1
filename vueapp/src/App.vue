<template>
  <div id='app'>
    <common-header :selectMenu='selectMenu'></common-header>
    <div class="content">
      <router-view></router-view>
    </div>
    <common-footer :menu='menu' :selectMenu='selectMenu' @change='change'></common-footer>
  </div>
</template>

<script>
  import CommonHeader from '@/components/CommonHeader.vue'
  import CommonFooter from '@/components/CommonFooter.vue'
  export default {
    components:{
      CommonHeader,
      CommonFooter,
    },
    data(){
            return{
                menu:[{
                    name:'电影',
                    path:'/movie',
                    bg:'pink'
                },{
                    name:'音乐',
                    path:'/music',
                    bg:'#ccc'
                },{
                    name:'书籍',
                    path:'/book',
                    bg:'#cfbbaa'
                },{
                    name:'图片',
                    path:'/photo',
                    bg:'#cff0aa'
                }],
                selectMenu:{
                  name:'电影',
                  path:'/movie',
                  bg:'pink'
                }
            }
        },
        methods:{
          change(index){
            this.selectMenu = this.menu[index];
          },
          created(){
              this.menu.forEach((obj,index)=>{
                if(obj.path == this.$route.path){
                this.selectMenu = obj;
        }
        })
   
  }}}
</script>

<style scoped>
  .content{
    margin:1rem 0;
  }
</style>