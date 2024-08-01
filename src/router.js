import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";

import ProjectList from "./pages/ProjectList.vue";

import AppAbout from "./pages/AppAbout.vue";

import ProjectDetail from "./pages/ProjectDetail.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'projects',
            component: ProjectList
        },
        {
            path: '/blog/:slug',
            name: 'detail',
            component: ProjectDetail
        },
        {
            path: '/about',
            name: 'posts',
            component: AppAbout
        },

    ]
});

export { router };