import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/Index.vue'
import aboutUsView from '@/views/about-us.vue'
import contactUsView from '@/views/contact-us.vue'
import product from '@/views/product.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
      path: '/about',
      name: 'About',
      component: aboutUsView
    },
    {
      path: '/contact',
      name: 'contact-us',
      component: contactUsView
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
  ]
})

export default router
