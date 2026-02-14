<template>
  <div>
    <Header />
    <Navigation :links="navLinks" />
    
    <div class="page-content">
      <main>
        <div class="title">
          <h2>Payment & Delivery</h2>
        </div>
        
        <form @submit.prevent="handleSubmit">
          <select required>
            <option value="">Select Payment Method</option>
            <option>Credit Card</option>
            <option>GCash</option>
            <option>Cash on Delivery</option>
          </select>
          
          <select required>
            <option value="">Delivery Option</option>
            <option>Pickup</option>
            <option>Home Delivery</option>
          </select>
          
          <button type="submit">Confirm Payment</button>
        </form>
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
  name: 'Payment',
  components: {
    Header,
    Navigation,
    Footer
  },
  data() {
    return {
      navLinks: [
        { path: '/cart', name: 'Cart' },
        { path: '/payment', name: 'Payment' }
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.$router.push('/confirmation')
    }
  }
}
</script>
