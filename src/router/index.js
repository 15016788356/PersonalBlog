import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/index',
    component: Index
  },
  {
    path: '/sitemap',
    component: () => import('../views/sitemap.vue')
  },
  {
    path: '/about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/guestbook',
    component: () => import('../views/guestbook.vue')
  },
  {
    path: '/editorBlog',
    component: () => import('../views/editorBlog.vue')
  },
  {
    path: '/editorEveryDay',
    component: () => import('../views/editorEveryDay.vue')
  },
  {
    path: '/blogDetail/:id',
    component: () => import('../views/blogDetail.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
