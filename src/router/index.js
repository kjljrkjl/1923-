import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

import Mine from '../pages/Mine'
import Position from '../pages/Position'
import Search from '../pages/Search'


const router = new VueRouter({
  routes:[
   
    {
      path:'/mine',
      component:Mine
    },
    {
      path:'/position',
      component:Position
    },
    {
      path:'/search',
      component:Search
    },
    {
      path:'/',
      redirect:'/position'
    },
]
})

export default router
