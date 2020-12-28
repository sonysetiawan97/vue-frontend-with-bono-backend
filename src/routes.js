import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('./views/login/login')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('./views/login/register')
        },
        {
            path: '/book',
            name: 'bookList',
            component: () => import('./views/book/bookList'),
            beforeEnter: isLoggedIn
        },
        {
            path: '/book/create',
            name: 'bookCreate',
            component: () => import('./views/book/bookCreate'),
            beforeEnter: isLoggedIn
        },
        {
            path: '/book/read/:id',
            name: 'bookSingleRead',
            component: () => import('./views/book/bookSingleRead'),
            beforeEnter: isLoggedIn
        }
    ]
})

async function isLoggedIn(to, from, next) {
    if (!window.$cookies.get('token')){
        next({path: '/'})
    }
    next()
}

export default router