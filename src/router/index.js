import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Payment from '../views/Payment.vue'
import Confirmation from '../views/Confirmation.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Profile from '../views/Profile.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/products', name: 'Products', component: Products },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/payment', name: 'Payment', component: Payment },
  { path: '/confirmation', name: 'Confirmation', component: Confirmation },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/profile', name: 'Profile', component: Profile }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
