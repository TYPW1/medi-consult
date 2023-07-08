<template>
  <div id="app">
    <button class="logout-button" v-if="route.path !== '/login'" @click="logout">Logout</button>
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const logout = () => {
      store.commit('logout')
      router.push('/login')
    }
    return { logout, route }
  },
}
</script>

<style scoped>
.logout-button {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background: #f8f9fa;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1000;  /* Add this line */
}

.logout-button:hover {
  background: #e9ecef;
}
</style>


