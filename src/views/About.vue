<template>
  <div>
    <Header />
    <Navigation :links="navLinks" />
    
    <div class="page-content">
      <main>
        <section class="about-hero">
          <div class="about-text">
            <h2>About Our Company</h2>
            <p>
              CArce is a professional car sales company focused on delivering
              high-quality vehicles that meet modern standards of performance,
              safety, and reliability. Every vehicle is carefully selected and
              inspected to ensure customer satisfaction.
            </p>
            
            <h2 style="margin-top: 40px;">Owner & Founder</h2>
            <p>
              CArce was founded by Edzel Kim C. Arce, an Information Technology student with a passion.
              This website is part of her learning journey in web development and entrepreneurship.
            </p>
          </div>
        </section>
        
        <section class="belief-section">
          <div class="belief-box">
            <h2>What We Believe</h2>
            <p>
              Great service isn't just about handing over keys, it's about creating piece of mind. <br><br>
              We value transparency, responsibility, and respect for your time.
              We believe you deserve clean, reliable vehicles and a support team that's ready when you are.
              <br><br>
              Whether you're planning a business trip, a weekend getaway, or just need a backup vehicle,
              our goal is to keep things smooth, simple, and stress-free — every single time
            </p>
            
            <p class="about-closing">
              Your road trip starts with trust. <strong>Let's drive.</strong>
            </p>
          </div>
        </section>
        
        <section class="why-choose-us">
          <h2>Why Choose Us</h2>
          <div class="why-grid">
            <div class="why-box">
              <h3>Reliable Vehicles</h3>
              <p>Well-maintained, clean, and performance-ready — always.</p>
            </div>
            <div class="why-box">
              <h3> 24/7 Supporrt</h3>
              <p>We're here whenever you need help — day or night.</p>
            </div>
            <div class="why-box">
              <h3>Easy Buying</h3>
              <p>Fast, smooth, and stress-free from start to finish</p>
            </div>
          </div>
        </section>
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
  name: 'About',
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
