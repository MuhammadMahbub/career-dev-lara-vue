import { createRouter, createWebHistory } from "vue-router";
import Home from '../components/Home.vue'
import Dashboard from '../components/Dashboard.vue'
import Login from '../components/auth/Login.vue'
import Register from '../components/auth/Register.vue'
import NotFound from '../components/errors/404.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/:any",
        name: "notfound",
        component: NotFound,
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;
