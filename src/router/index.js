import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '/src/pages/Login.vue';
import SignUpPage from '/src/pages/SignUp.vue';
import CounterPage from '/src/pages/Counter.vue';
import {isUserLoggedInPromise} from "../useUser";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUpPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterPage,
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
    console.log('render route');
    next();
  }
})
export default router;
