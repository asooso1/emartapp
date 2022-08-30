import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from '../views/ProductList.vue'
import NavBar from '../components/NavBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'product-list',
    components: {
      default: ProductList,
      header: NavBar,
      // footer: NavBar,
    },
  },
  {
    path: '/test',
    name: 'navbar',
    components: {
      NavBar
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
