import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import BasicLayout from '../Layout/BasicLayout'
import UserSelect from '../components/UserSelect'
import Tagging from '../components/Tagging'
import Done from '../components/Done'
import TimeSelect from '../components/TimeSelect'
import ParkSelect from '../components/ParkSelect'
import Test from '../components/Test'
import Payment from '../components/Payment'
import Working from '../components/Working'
import Error from '../components/Error'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BasicLayout,
    children: [
      {
        path: '',
        component: Index
      },
      {
        path: 'user',
        component: UserSelect
      },
      {
        path: 'tag',
        component: Tagging
      },
      {
        path: 'done',
        component: Done
      },
      {
        path: 'test',
        component: Test
      },
      {
        path: 'working',
        component: Working
      },
      {
        path: 'error',
        component: Error
      }
    ]
  },
  {
    path: '/select',
    name: 'select',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../Layout/SelectLayout.vue'),
    children: [
      {
        path: '',
        component: TimeSelect
      },
      {
        path: 'park',
        component: ParkSelect
      },
      {
        path: 'parked',
        component: ParkSelect
      },
      {
        path: 'payment',
        component: Payment
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
