import { RouteRecordRaw } from 'vue-router'
import Home from '../pages/home/index.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/set',
    name: 'Set',
    component: () => import('../pages/set/index.vue'),
  },
]

export default routes
