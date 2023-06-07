import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      meta: {
        title: 'Redirect to Home',
      },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home',
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'FinzTracker'; // Set the page title dynamically
  next();
});

export default router;
