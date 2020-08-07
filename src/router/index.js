import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "Login",
            path: "/login",
            component: () => import("../views/Login")
        },
        {
            name: "Signup",
            path: "/signup",
            component: () => import("../views/Signup")
        },
        {
            name: 'Home',
            path: "/",
            component: () => import('../views/Home')
        }
    ]
});