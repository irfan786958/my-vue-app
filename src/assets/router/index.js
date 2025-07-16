import { createRouter, createWebHistory } from 'vue-router'
import DashboardPanel from '../components/DashboardPanel.vue'
import TaskBoard from '../components/TaskBoard.vue'

const routes = [
  { path: '/', component: DashboardPanel },
  { path: '/tasks', component: TaskBoard }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
