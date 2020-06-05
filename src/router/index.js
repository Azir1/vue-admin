import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Manage from '../views/manage/Manage.vue'
import Check from '../views/Check.vue'
import Charts from '../views/Charts.vue'
import User from '../views/User.vue'
import Student from '../views/manage/ManageStu.vue'
import Teacher from '../views/manage/ManageTec.vue'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    // 子路由
    // 重定向
    children: [
      {
        path: '/',
        redirect: '/home',
        component: Home
      },
      {
        path: '/home',
        name: 'home',
        component: Home
      },
      {
        path: '/manage',
        name: 'manage',
        component: Manage,
        children: [
          {
            path: '/manage/student',
            name: 'student',
            component: Student
          },
          {
            path: '/manage/teacher',
            name: 'Teacher',
            component: Teacher
          },
        ]
      },
      {
        path: '/check',
        name: 'check',
        component: Check
      },
      {
        path: '/charts',
        name: 'charts',
        component: Charts
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  linkExactActiveClass: "active",//设置路由激活的类名
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//全局守卫写在实例化路由后
//router对象调用  
//.beforeEach((进入到哪一个路由,从哪一个路由离开,对应的函数)=>{}) 
router.beforeEach((to, form, next) => {
  let token = localStorage.getItem('token')
  if (token) {
    if (to.path == "/login") {
      next("/home")
    } else {
      next()
    }
  } else {
    if (to.path == '/login' || to.path == '/register') {
      next();//跳转登录
    } else {
      next("/login")
    }
  }
})
export default router
