import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Login.vue') },
  { path: '/homePage', component: () => import('../views/HomePage.vue') },
  { path: '/tagsPage', component: () => import('../views/TagsPage.vue') },
  { path: '/detail/:id', component: () => import('../views/BookDetail.vue') },
<<<<<<< HEAD
  { path: '/search-detail/:keyword', component: () => import('../views/SearchBookDetail.vue') },
  { path: '/nav-detail/:typeid', component: () => import('../views/NavTabDetail.vue') }
=======
  { path: '/404', component: () => import('../components/404.vue') },
  { path: '/search-detail/:keyword', component: () => import('../views/SearchBookDetail.vue') }
>>>>>>> 88f47f6ec7249caf394df4bd19ed42b21b0a1a47

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

