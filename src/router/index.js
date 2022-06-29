import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import About from "../views/About.vue";
import Booking from "../views/Booking.vue";
import Login from "../views/Login.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    
    routes: [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard

    },
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/booking',
        name: 'Booking',
        component: Booking
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]

})
export default router