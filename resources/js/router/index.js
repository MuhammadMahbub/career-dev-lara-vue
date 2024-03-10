import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import NotFound from '../components/errors/404.vue'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/:any",
        name: "NotFound",
        component: NotFound,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
