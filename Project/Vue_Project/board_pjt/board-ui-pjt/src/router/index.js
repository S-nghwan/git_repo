import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HM001M',
    component: () => import('@/views/home/HM001M.vue')
  },
  {
    path: '/HM002M',
    name: 'HM002M',
    component: () => import('@/views/home/HM002M.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
