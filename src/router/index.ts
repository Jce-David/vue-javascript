import { createRouter, createWebHashHistory } from 'vue-router'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
  
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
  
    },
    {
        path: '/product',
        name: 'product',
        component: () => import('../views/ProductView.vue'),
 
    },
    {
      path: '/categories/:categoryId',
      name: 'category',
      component: () => import('../views/ProductView.vue')
    },  
    {
        path: '/product/:id',
        name: 'product-details',
        component: () => import('../views/ProductRoute.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/account',
      name: 'account',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CartView.vue')
    }
  ]
})

export default router
