import { createRouter, createWebHistory } from 'vue-router'
import dashboard from '@/components/dashboard.vue'
import TaskBoard from '@/components/TaskBoard.vue' 
import AppCalender from '@/components/AppCalender.vue'
import SalesDashboard from '@/components/SalesDashboard.vue'
import TeamMembers from '@/components/TeamMembers.vue'

const routes = [
  { path: '/', name: 'Home', component: dashboard },
  { path: '/task', name: 'task', component: TaskBoard },
 { path: '/calendar', name: 'calendar', component: AppCalender },
 { path: '/sale', name: 'sale', component: SalesDashboard },
 {path: '/team', name: 'team', component:TeamMembers }
 
 

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
