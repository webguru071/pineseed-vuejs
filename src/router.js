import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Domain from './views/Domain.vue'
import Hosting from './views/Hosting.vue'
import Services from './views/Services.vue'
import Price from './views/Price.vue'
import Blog from './views/Blog.vue'
import Contact from './views/Contact.vue'

Vue.use(VueRouter)

var routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/domain',
        name: 'domain',
        component: Domain
    },
    {
        path: '/hosting',
        name: 'hosting',
        component: Hosting
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/price',
        name: 'price',
        component: Price
    },
    {
        path: '/blog',
        name: 'blog',
        component: Blog
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    }
]

var router = new VueRouter({
    mode: 'history',
    routes
})

export default router