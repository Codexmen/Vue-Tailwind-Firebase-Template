import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '/src/pages/Login.vue';
import HomePage from '/src/pages/Home.vue';
import ProtectedPage from '/src/pages/ProtectedRoute.vue';
import {isUserLoggedInPromise} from "../useUser";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/protected",
      name: "protected",
      component: ProtectedPage,
      meta: {
        requiresAuth: true
      }
    },
  ],
});


router.beforeEach(async (to, from,next)=> {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isLoggedIn = await isUserLoggedInPromise();

  if (requiresAuth && !isLoggedIn) {
    next('/')
  } else {
    next();
  }
})
export default router;
