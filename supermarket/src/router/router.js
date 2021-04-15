import Vue from 'vue'
import VueRouter from 'vue-router'

// 组件导入
import Home from '../views/home/Home.vue'
import Cart from '../views/cart/Cart.vue'
import My from '../views/my/My.vue'
import Detail from "../views/detail/Detail"
import Address from "../views/address/Address.vue"
import AddressEdit from "../views/address/addressChildren/AddressEdit.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  }, 
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    path: '/my',
    component: My,
  },
  {
    path: "/detail/:id",
    component: Detail
  },
  {
    path: "/address",
    component: Address
  },
  {
    path: "/address/addressEdit",
    component: AddressEdit
  }
]

const router = new VueRouter({
  routes
})

export default router;