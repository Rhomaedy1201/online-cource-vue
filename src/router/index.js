import { createRouter, createWebHistory } from "vue-router";
import LeadingPage from "../views/LeadingPage.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import DashboardPage from "../views/admin/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "leadingPage",
      component: LeadingPage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashboardPage,
    },
  ],
});

export default router;
