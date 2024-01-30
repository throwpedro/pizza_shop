import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/md-dark-indigo/theme.css'
import Home from './pages/home/Home.vue'
import Profile from './pages/profile/Profile.vue'
import Cart from './pages/cart/Cart.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);
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
app.component("v-icon", OhVueIcon);
app.mount('#app')
