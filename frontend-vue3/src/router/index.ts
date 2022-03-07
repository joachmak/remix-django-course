import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/hamsters",
      name: "hamsters",
      component: () => import("../views/HamstersView.vue"),
    },
    {
      path: "/hamsters/:id",
      name: "hamster",
      component: () => import("../views/HamsterView.vue"),
    },
    {
      path: "/species",
      name: "species",
      component: () => import("../views/SpeciesView.vue"),
    },
    {
      path: "/admin",
      name: "admin",
      component: () => import("../views/AdminView.vue"),
    },
  ],
});

export default router;
