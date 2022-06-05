import {createRouter, createWebHashHistory} from 'vue-router'
//import HomeView from '../views/HomeView.vue'


const routes = [
    {
        path: '/settings',
        name: 'settings',
        component: () => import(/* webpackChunkName: "about" */ '../views/SettingsView.vue')
    },
    {
        path: '/translations',
        name: 'translations',
        component: () => import(/* webpackChunkName: "about" */ '../views/TranslationsView.vue')
    },
    {
        path: '/location',
        name: 'location',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/LocationView.vue')
    },
    {
        path: '/mybalance',
        name: 'mybalance',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/BalanceView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes
})

export default router
