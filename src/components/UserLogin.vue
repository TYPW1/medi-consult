<template>
  <div>
    <h1>User Login</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="Username" v-model="username" />
      <input type="password" placeholder="Password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      // Check if the entered credentials are admin credentials
      if (this.username === 'admin' && this.password === 'admin') {
        this.$store.commit('adminLogin')
        this.$router.push('/admin')
      } else {
        // Here you would normally validate the username and password
        this.$store.commit('login')
        this.$router.push('/patients')
      }
    },
  },
};
</script>
