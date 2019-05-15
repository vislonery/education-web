import Vue from 'vue'
import Router from 'vue-router'
import login from '../pages/login/login.vue'
import register from '../pages/register/register.vue'
import index from '../pages/index/index.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            // component: content,
            children: [
                {
                    path: '/',
                    name: 'index',
                    component: index
                },
                {
                    path: '/login',
                    name: 'login',
                    component: login
                },
                {
                    path: '/register',
                    name: 'register',
                    component: register
                }
            ]
        },

    ]
})
