// router/index.js
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/home.vue";
import About from "./components/about.vue";
import users from "./components/users.vue";
import dynemic_component from "./components/dynemic_component.vue";
import vishal from "./components/vishal.vue";
import dhaval from "./components/dhaval.vue";
import nimesh from "./components/nimesh.vue";

const routes = [
  {
    path: "/",
    // name: 'Home',
    component: Home,
  },
  {
    path: "/about",
    // name: 'about',
    component: About,
  },
  {
    path: "/users",
    component: users,
  },
  {
    path: "/dynemic",
    component: dynemic_component,
  },
  {
    path: "/dropdown",
    component: About,
  },
  {
    path: "/users/vishal",
    component: vishal,
  },
  {
    path: "/users/dhaval",
    component: dhaval,
  },
  {
    path: "/users/nimesh",
    component: nimesh,
  },
];


const router = createRouter({ history: createWebHistory(), routes });
export default router;
