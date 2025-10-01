import { createRouter, createWebHistory } from 'vue-router'

// Example route components (replace with your actual components)
import App from '../App.vue'
import ConverterView from '@/views/ConverterView.vue'

const routes = [
  {
    path: '/color-converter',
    name: 'home',
    component: ConverterView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
