<template>
  <div>
    <Header />
    <Navigation :links="navLinks" />
    
    <div class="page-content">
      <main>
        <div class="title">
          <h2>Product Catalog</h2>
        </div>
        
        <div class="products">
          <div class="card" v-for="product in products" :key="product.name">
            <h3>{{ product.name }}</h3>
            <img :src="product.image" :class="product.className">
            <p>₱{{ product.price.toLocaleString() }}</p>
            <button @click="addToCart(product.name, product.price)">Add to Cart</button>
          </div>
        </div>
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
  name: 'Products',
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
        { path: '/cart', name: '->Cart' },
        { path: '/about', name: 'About' },
        { path: '/contact', name: 'Contact' },
        { path: '/login', name: 'Log In' }
      ],
      products: [
        { name: 'Bugatti Centodieci', image: '/image/bugatti.png', price: 5472800, className: 'car1' },
        { name: 'Koenigsegg One1', image: '/image/koenigsegg.png', price: 4088000, className: 'car2' },
        { name: 'Lamborghini Huracan', image: '/image/lamborghini.png', price: 4749530, className: 'car3' },
        { name: 'Porsche 911 Turbo', image: '/image/porsche.png', price: 3909483, className: '' },
        { name: 'Front End Silhouette', image: '/image/silhouette.png', price: 3450000, className: '' },
        { name: 'Mclaren 570s', image: '/image/mclaren.png', price: 2262180, className: '' },
        { name: 'Gold Lamborghini', image: '/image/gold.png', price: 9603250, className: '' },
        { name: 'Maruti Suzuki', image: '/image/maruti.png', price: 3245902, className: '' },
        { name: 'Lexus NX 300h', image: '/image/lexus.png', price: 2811914, className: '' },
        { name: 'Range Rover Vogue', image: '/image/rover.png', price: 3950000, className: '' },
        { name: 'Luxury Van', image: '/image/van.png', price: 3850000, className: '' },
        { name: 'Chevrolet Silverado', image: '/image/garvee.png', price: 4223000, className: '' }
      ]
    }
  },
  methods: {
    addToCart(name, price) {
      let cart = JSON.parse(localStorage.getItem('cart')) || []
      cart.push({ name, price })
      localStorage.setItem('cart', JSON.stringify(cart))
      alert(name + ' added to cart!')
    }
  }
}
</script>
