import Vue from 'vue'
import Router from 'vue-router'
import Downshu from '@/components/downshu'
import Downtree from '@/components/downtree'
import Topshu from '@/components/topshu'
import Cstree from '@/components/cstree'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Downshu',
      name: 'Downshu',
      component: Downshu
    },
    {
      path: '/',
      name: 'Cstree',
      component: Cstree
    },
    {
      path: '/Downtree',
      name: 'Downtree',
      component: Downtree
    },
    {
      path: '/Topshu',
      name: 'Topshu',
      component: Topshu
    }
  ]
})
