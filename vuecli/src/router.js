import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import My from './views/My.vue'
import Child from './views/Child1.vue'
import Child2 from './views/Child2.vue'
import Child3 from './views/Child3.vue'
import Count from './views/Count.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path:'/my',
      component:My,
      children:[{
        path:'/child1/:num',
        component:Child
      },{
       path:'/child2',
       name:'groups',
       component:Child2
      },{
        path:'/child3',
        name:'son3',
        component:Child3
      }]
    },{
      path:'/exit',
      redirect:'/'
    },{
      path:'/about',
      alias:'/abc',
      beforeEnter:(to,from,next)=>{
        console.log(to,from,next);
        next();
      }
    },{
      path:'*',
      component:Error
    },{
      path:'/count',
      component:Count
    }
  ]
})
