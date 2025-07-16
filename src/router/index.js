import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/components/dashboard.vue'
import TaskBoard from '@/components/TaskBoard.vue'
const routes = [
  { path: '/', name: 'Home', component: dashboard },
  { path: '/task', name: 'task', component: TaskBoard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
