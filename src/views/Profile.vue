<template>
  <div>
    <Header />
    <Navigation :links="navLinks" />
    
    <div class="page-content profile-page">
      <section class="profile-card">
        <div class="profile-banner">
          <img src="/image/cover.png" alt="Cover">
        </div>
        
        <div class="profile-avatar">
          <img src="/image/profile.png" alt="User">
        </div>
        
        <h2>Tzuyu</h2>
        <span class="profile-role">Premium Driver</span>
        
        <p><strong>First Name:</strong> Tzu-yu</p>
        <p><strong>Last Name:</strong> Chou</p>
        <p><strong>Email:</strong> tzuyu@gmail.com</p>
        <p><strong>Mobile Number:</strong> 09216799439</p>
        <p><strong>Home Address:</strong> Sampaloc Street, Manila City</p>
        
        <div class="profile-stats">
          <div>
            <h4>Favorite</h4>
            <p>Luxury Sedan</p>
          </div>
          <div>
            <h4>Member Since</h4>
            <p>2022</p>
          </div>
          <div>
            <h4>Orders</h4>
            <p>2</p>
          </div>
        </div>
        
        <router-link to="/products" class="btn profile-btn">Order again</router-link>
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
  name: 'Profile',
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
        { path: '/login', name: 'Sign Out' }
      ]
    }
  }
}
</script>
