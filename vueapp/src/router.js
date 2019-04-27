import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/Movie.vue'
import Music from '@/views/Music.vue'
import Book from '@/views/Book.vue'
import Photo from '@/views/Photo.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/movie',
      component:Movie
    },{
      path:'/music',
      component:Music
    },{
      path:'/book',
      component:Book
    },{
      path:'/photo',
      component:Photo
    }
  ]
})
