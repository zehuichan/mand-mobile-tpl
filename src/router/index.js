import Vue from 'vue'
import Router from 'vue-router'

// basic components
const Layout = () => import('@/layout')

// view components
const Me = () => import('@/views/me')

Vue.use(Router)


export const routes = [
  {path: '/', redirect: 'me'},
  {path: '/403', component: () => import('@/views/errorPage/403')},
  {path: '/404', component: () => import('@/views/errorPage/404')},
  {path: '/500', component: () => import('@/views/errorPage/500')},
  {
    path: '/me',
    component: Layout,
    children: [
      {
        path: '',
        component: Me,
        name: 'me',
        meta: {title: '我'}
      }
    ]
  },
]

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes
})
