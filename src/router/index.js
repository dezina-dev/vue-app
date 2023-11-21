import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FunnyView from '../views/FunnyView.vue'
import WellnessView from '../views/WellnessView'
import CareerView from '../views/CareerView.vue'
import GrowthView from '../views/GrowthView.vue'
import ChatgptView from '../views/ChatgptView.vue';
import NewsView from '../views/NewsView.vue'
import GroomingView from '../views/GroomingView.vue'
import FoodieView from '../views/FoodieView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/funny',
    name: 'funny',
    component: FunnyView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/wellness',
    name: 'wellness',
    component: WellnessView
  },
  {
    path: '/career',
    name: 'career',
    component: CareerView
  },
  {
    path: '/grow-up',
    name: 'grow-up',
    component: GrowthView
  },
  {
    path: '/chatgpt',
    name: 'Chatgpt',
    component: ChatgptView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/grooming',
    name: 'grooming',
    component: GroomingView
  },
  {
    path: '/foodie',
    name: 'foodie',
    component: FoodieView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
