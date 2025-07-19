import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/components/dashboard.vue'
import TaskBoard from '@/components/TaskBoard.vue' 
import AppCalender from '@/components/AppCalender.vue'
const routes = [
  { path: '/', name: 'Home', component: dashboard },
  { path: '/task', name: 'task', component: TaskBoard },
 { path: '/calendar', name: 'calendar', component: AppCalender }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
