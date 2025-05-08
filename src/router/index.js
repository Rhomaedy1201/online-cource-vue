import { createRouter, createWebHistory } from "vue-router";
import LeadingPage from "../views/LeadingPage.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import DashboardPage from "../views/admin/Dashboard.vue";
import RolePage from "../views/admin/roles/RoleIndex.vue";
import RoleCreatePage from "../views/admin/roles/RoleCreate.vue";
import RoleEditPage from "../views/admin/roles/RoleEdit.vue";

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
    // ROLES
    {
      path: "/role",
      name: "role",
      component: RolePage,
    },
    {
      path: "/role-create",
      name: "role-create",
      component: RoleCreatePage,
    },
    {
      path: "/role-edit/:id",
      name: "role-edit/:id",
      component: RoleEditPage,
    },
  ],
});

export default router;
