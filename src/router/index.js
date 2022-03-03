import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/streams',
    name: 'stream',
    component: () => import('../components/Stream/StreamList.vue')
  },
  {
    path: '/courses',
    name: 'course',
    component: () => import('../components/Course/CourseList.vue')
  },
  {
    path: '/departments',
    name: 'department',
    component: () => import('../components/Department/DepartmentList.vue')
  },
  {
    path: '/classes',
    name: 'class',
    component: () => import('../components/Clas/ClassList.vue')
  },
  {
    path: '/subjects',
    name: 'subject',
    component: () => import('../components/Subject/SubjectList.vue')
  },
  {
    path: '/streams/add',
    name: 'addStream',
    component: () => import('../components/Stream/StreamForm.vue')
  },
  {
    path: '/courses/add',
    name: 'addCourse',
    component: () => import('../components/Course/CourseForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
