import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import HomeViewDemo from '../views/HomeViewDemo.vue'
import HomeViewDemo2 from '../views/HomeViewDemo2.vue'
import Start from '../views/Start.vue'

// 路由通常有两种模式，hash模式（URL路径中带/#/）和history模式

// 路由的配置数组（都是对象）
// path: 路由路径 必须以/开头，必填
// component: 对应的路由组件，必填
// name: 路由名字，可选
const routes = [
  {
    // 代表首页
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/home',
    // path: '/home/:id',  // for test router push params
    name: 'Home',
    component: HomeView
  },
  {
    path: '/demo',
    name: 'Demo',
    component: HomeViewDemo
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: HomeViewDemo2
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // 按需引入：如果没有访问 /about 就不会加载这个组件 节约性能  除了首页，其他页面都可以考虑 按需引入
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/detail',
    name: 'Detail',
    // 按需引入：如果没有访问 /about 就不会加载这个组件 节约性能  除了首页，其他页面都可以考虑 按需引入
    component: () => import('../views/Detail.vue')
  },
  {
    path: '/test',
    name: 'Test',
    // 按需引入：如果没有访问 /test 就不会加载这个组件 节约性能  除了首页，其他页面都可以考虑 按需引入
    component: () => import('../views/Test.vue')
  }
]

// 创建路由对象
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),  // process.env.BASE_URL可以删除也可以保留
  // history: createWebHashHistory(process.env.BASE_URL),  // hash mode, process.env.BASE_URL可以删除也可以保留
  routes    // routes: routes的简写
})

export default router
