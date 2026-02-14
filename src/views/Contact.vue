<template>
  <div>
    <Header />
    <Navigation :links="navLinks" />
    
    <div class="page-content">
      <main>
        <form @submit.prevent="handleSubmit">
          <h2>Contact Our Sales Team</h2>
          <input type="text" v-model="name" placeholder="Full Name">
          <textarea v-model="message" rows="5" placeholder="Your Inquiry"></textarea>
          <button type="submit">Submit Inquiry</button>
        </form>
        
        <p id="response" :style="{ color: responseColor }">{{ response }}</p>
      </main>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Navigation,
    Footer
  },
  data() {
    return {
      navLinks: [
        { path: '/', name: 'Home' },
        { path: '/profile', name: 'Profile' },
        { path: '/products', name: 'Products' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/login', name: 'Log In' }
      ],
      name: '',
      message: '',
      response: '',
      responseColor: ''
    }
  },
  methods: {
    handleSubmit() {
      if (this.name === '' || this.message === '') {
        this.response = 'Please complete all required fields before submitting.'
        this.responseColor = 'red'
      } else {
        this.response = `Thank you for your inquiry, ${this.name}. Our sales team will contact you shortly.`
        this.responseColor = 'green'
        this.name = ''
        this.message = ''
      }
    }
  }
}
</script>
