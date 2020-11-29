// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

// 路由懒加载
const Home = () => import('../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')

const About = () => import('../components/About')
const User = () => import('../components/User')

const Profile = () => import('../components/Profile')

// 1.通过Vue.use
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      // {
      //   path: '/',
      //   redirect: 'news'
      // },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
    beforeEnter: (to, from, next) => {
      console.log('about beforeEnter');
      next()
    },
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// 前置守卫
router.beforeEach((to, from, next) => {
  // 如果不调 next() 就不会跳转到下一页去了
  // console.log(to);
  next()
  // document.title = to.meta.title;
  document.title = to.matched[0].meta.title;
})

// 后置回调
router.afterEach((to, from) => {
  console.log('------');
})

export default router

// console.log(router);
