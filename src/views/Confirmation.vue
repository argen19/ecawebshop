<template>
  <div>
    <Header />
    
    <div class="page-content">
      <main>
        <div class="title">
          <h2>Transaction Successful</h2>
        </div>
        
        <p>Thank you for choosing CArce.</p>
        
        <div id="receipt">
          <h3>E-Receipt</h3>
          <p v-for="(item, index) in cart" :key="index">
            {{ item.name }} - ₱{{ item.price.toLocaleString() }}
          </p>
        </div>
        
        <h3 id="totalPrice">Total: ₱{{ total.toLocaleString() }}</h3>
        
        <router-link to="/" class="btn">Back to Home</router-link>
      </main>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Confirmation',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      cart: [],
      total: 0
    }
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || []
    this.total = this.cart.reduce((sum, item) => sum + (item.price || 0), 0)
    localStorage.clear()
  }
}
</script>
