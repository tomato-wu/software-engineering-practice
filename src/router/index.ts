//router目录下的index.js
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Login.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
// 全局路由守卫的方法跟vue-router3一样
//路由全局前置守卫
// router.beforeEach((to, from, next) => {
//   console.log('路由全局前置守卫', to, from);
//   next()
// })
// //路由全局后置守卫
// router.afterEach((to, from, next) => {
//   console.log('路由全局后置守卫', to, from);
//   next()
// })

export default router

