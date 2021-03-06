import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Export from '@/components/Export'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/export',
    },
    {
      path: '/export',
      name: 'Export',
      component: Export
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
