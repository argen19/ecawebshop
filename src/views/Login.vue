<template>
  <div>
    <Header />
    
    <main class="auth-container">
      <div class="auth-text">
        <h2>Welcome Back, Driver!</h2>
        <p>Let's drive with <b>CArce</b></p>
      </div>
      
      <div class="auth-left">
        <img src="/image/login.png" alt="Login Background">
      </div>
      
      <div class="auth-card">
        <h2>User Login</h2>
        
        <form @submit.prevent="handleSubmit">
          <input type="email" placeholder="Email Address">
          <input type="password" placeholder="Password">
          <button type="submit">Login</button>
        </form>
        
        <p>
          Don't have an account?
          <router-link to="/signup">Sign up here</router-link>
        </p>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Login',
  components: {
    Header,
    Footer
  },
  methods: {
    handleSubmit() {
      alert('Login successful (placeholder)')
      this.$router.push('/profile')
    }
  }
}
</script>
