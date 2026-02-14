<template>
  <div>
    <Header />
    <Navigation :links="navLinks" />
    
    <div class="page-content">
      <section class="hero">
        <div class="hero-content">
          <h2 style="text-align: left;">Welcome, 
            <span style="color: rgb(160, 20, 20)">Driver!</span>
          </h2>
          <h1 style="font-size: 66px;">Buy A</h1>
          <h1 class="car-title">
            C<span class="car-a"><img src="/image/car-a.png" alt="A"></span>R   
          </h1>
        </div>
      </section>
      
      <main>
        <h2>Featured Vehicles</h2>
        
        <div class="products">
          <div class="card">
            <h3>Koenigsegg</h3>
            <router-link to="/products"><img src="/image/koenigsegg.png" Alt="Koenigsegg" class="car1"></router-link>
            <p><i>Faster acceleration, better handling and drifting.</i></p>
          </div>
          
          <div class="card">
            <h3>Bugatti</h3>
            <router-link to="/products"><img src="/image/bugatti.png" Alt="Bugatti" class="car2"></router-link>
            <p><i>Complete high-performance tour-de-force.</i></p>
          </div>
          
          <div class="card">
            <h3>Lamborghini</h3>
            <router-link to="/products"><img src="/image/lamborghini.png" Alt="Lamborghini" class="car3"></router-link>
            <p><i>High-power and specific torque of a new-generation turbo engine.</i></p>
          </div>
        </div>
      </main>
      
      <section class="intro-tagline">
        <div class="tagline-content">
          <h1>Premium Cars. Trusted Quality.</h1>
          <p>Choose from a wide range of reliable cars for every trip. Easy buying, great rates, and smooth rides — wherever you're going, we've got your wheels ready.</p>
        </div>
      </section>
      
      <section class="promo">
        <h1>DON'T MISS OUT.</h1>
        <img src="/image/ride.jpg" alt="Car driving">
        <div class="promo-text">
          <h4>CArce Exclusive</h4>
          <p>Experience affordable comfort and style. Buy your dream car now with CArce.</p>
          <h4>Buy it. Ride it. Love it.</h4>
          <router-link to="/login" class="btn">LOG IN NOW</router-link>
        </div>
      </section>
    </div>
    
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
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
      ]
    }
  }
}
</script>
