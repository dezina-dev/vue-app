import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import FunnyView from '../views/FunnyView.vue';
import WellnessView from '../views/WellnessView';
import CareerView from '../views/CareerView.vue';
import GrowthView from '../views/GrowthView.vue';
import ChatgptView from '../views/ChatgptView.vue';
import NewsView from '../views/NewsView.vue';
import GroomingView from '../views/GroomingView.vue';
import FoodieView from '../views/FoodieView';
import CrudView from '../views/CrudView';
import FormView from '../views/FormView';
import LearnView from '../views/LearnView'
import VuexView from '../views/VuexView';
import ShoppingView from '../views/ShoppingView'
import CartView from '../views/CartView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crud',
    name: 'crud',
    component: CrudView
  },
  {
    path: '/form',
    name: 'form',
    component: FormView
  },
  {
    path: '/learn-it',
    name: 'learn',
    component: LearnView
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: VuexView
  },
  {
    path: '/shopping',
    name: 'shopping',
    component: ShoppingView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
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
