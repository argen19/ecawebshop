<template>
  <div>
    <Header />
    
    <main class="auth-container">
      <div class="auth-text">
        <h2>Welcome Here, Driver!</h2>
        <p>Let's drive with <b>CArce</b></p>
      </div>
      
      <div class="auth-left">
        <img src="/image/signup.png" alt="Signup Background">
      </div>
      
      <div class="auth-card">
        <h2>User Sign Up</h2>
        
        <form @submit.prevent="handleSubmit">
          <input type="text" placeholder="First Name">
          <input type="text" placeholder="Last Name">
          <input type="email" placeholder="Email Address">
          <input type="password" placeholder="Password">
          <input type="password" placeholder="Confirm Password">
          <input type="text" placeholder="Mobile Number">
          <textarea rows="3" placeholder="Home Address"></textarea>
          
          <button type="submit">Create Account</button>
        </form>
        
        <p>
          Already have an account?
          <router-link to="/login">Back to Login</router-link>
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
  name: 'Signup',
  components: {
    Header,
    Footer
  },
  methods: {
    handleSubmit() {
      alert('Account created successfully (placeholder)')
      this.$router.push('/login')
    }
  }
}
</script>
