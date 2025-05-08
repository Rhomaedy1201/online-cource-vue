import { createRouter, createWebHistory } from "vue-router";
import LeadingPage from "../views/LeadingPage.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import DashboardPage from "../views/admin/Dashboard.vue";
import RolePage from "../views/admin/roles/RoleIndex.vue";
import RoleCreatePage from "../views/admin/roles/RoleCreate.vue";
import RoleEditPage from "../views/admin/roles/RoleEdit.vue";
import UserPage from "../views/admin/users/UserIndex.vue";
import UserCreatePage from "../views/admin/users/UserCreate.vue";
import UserEditPage from "../views/admin/users/UserEdit.vue";
import CourcePage from "../views/admin/cources/CourceIndex.vue";
import CourceCreatePage from "../views/admin/cources/CourceCreate.vue";
import CourceEditPage from "../views/admin/cources/CourceEdit.vue";
import CourceDetailPage from "../views/admin/cources/CourceDetail.vue";

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
    // User
    {
      path: "/user",
      name: "user",
      component: UserPage,
    },
    {
      path: "/user-create",
      name: "user-create",
      component: UserCreatePage,
    },
    {
      path: "/user-edit/:id",
      name: "user-edit/:id",
      component: UserEditPage,
    },
    // Cource
    {
      path: "/cource",
      name: "cource",
      component: CourcePage,
    },
    {
      path: "/cource-create",
      name: "cource-create",
      component: CourceCreatePage,
    },
    {
      path: "/cource-edit/:id",
      name: "cource-edit/:id",
      component: CourceEditPage,
    },
    {
      path: "/cource-detail/:id",
      name: "cource-detail/:id",
      component: CourceDetailPage,
    },
  ],
});

export default router;
