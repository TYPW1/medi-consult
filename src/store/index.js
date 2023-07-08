import { createStore } from 'vuex'

export default createStore({
  state: {
    isLoggedIn: false,
    isAdminLoggedIn: false,
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true
    },
    logout(state) {
      state.isLoggedIn = false
    },
    adminLogin(state) {
      state.isAdminLoggedIn = true
    },
    adminLogout(state) {
      state.isAdminLoggedIn = false
    },
  },
})
