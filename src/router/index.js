import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex'
import UserLogin from '../components/UserLogin.vue'
import AdminPage from '../components/AdminPage.vue'
import PatientList from '../components/PatientList.vue'
import PatientPage from '../components/PatientPage.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: UserLogin },
  { path: '/admin', component: AdminPage, meta: { requiresAdminAuth: true } },
  { path: '/patients', component: PatientList, meta: { requiresAuth: true } },
  { path: '/patient/:id', component: PatientPage, props: true, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const store = useStore()
  if (to.meta.requiresAuth && !store.state.isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
