<template>
  <div>
    <h1>Login</h1>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="login">Login</button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const login = () => {
      // Here you would normally validate the username and password
      store.commit('login')
      router.push('/patients')
    }
    return { login }
  },
};
</script>
