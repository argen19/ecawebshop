<template>
  <div>
    <Header />
    <Navigation :links="navLinks" />
    
    <div class="page-content">
      <main>
        <div class="title">
          <h2>Your Shopping Cart</h2>
        </div>
        
        <div id="cartItems">
          <p v-for="(item, index) in cart" :key="index">
            {{ item.name }} - ₱{{ item.price.toLocaleString() }}
          </p>
        </div>
        <h3 id="totalPrice">Total: ₱{{ total.toLocaleString() }}</h3>
        <router-link to="/payment" class="btn">Proceed to Payment</router-link>
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
  name: 'Cart',
  components: {
    Header,
    Navigation,
    Footer
  },
  data() {
    return {
      navLinks: [
        { path: '/products', name: 'Products' },
        { path: '/cart', name: 'Cart' },
        { path: '/payment', name: '->Payment' }
      ],
      cart: [],
      total: 0
    }
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || []
    this.total = this.cart.reduce((sum, item) => sum + (item.price || 0), 0)
  }
}
</script>
