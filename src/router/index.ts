import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('../views/Login.vue') },
  { path: '/homePage', component: () => import('../views/HomePage.vue') },
  { path: '/tagsPage', component: () => import('../views/TagsPage.vue') },
  { path: '/detail/:id', component: () => import('../views/BookDetail.vue') },
  { path: '/search-detail/:keyword', component: () => import('../views/SearchBookDetail.vue') },
  { path: '/user-detail', component: () => import('../views/dropdown/UserDetail.vue') },
  { path: '/404', component: () => import('../components/404.vue') },
  { path: '/search-detail/:keyword', component: () => import('../views/SearchBookDetail.vue') },
  { path: '/nav-detail/:typeId', component: () => import('../views/NavTabDetail.vue') },
  { path: '/shopping-cart/:BookId', component: () => import('../views/shoppingCart/addShoppingCart.vue') },
  { path: '/order/:orderId', component: () => import('../views/shoppingCart/Order.vue') },

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

