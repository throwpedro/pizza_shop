import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import Home from './pages/home/Home.vue'
import Profile from './pages/profile/Profile.vue'
import Cart from './pages/cart/Cart.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/cart', component: Cart },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)
app.use(PrimeVue);
app.mount('#app')
