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
  top: 0;
  right: 0;
  padding: 0.5em;
  background: none;
  border: none;
  font-size: 1.5em;
}
</style>
