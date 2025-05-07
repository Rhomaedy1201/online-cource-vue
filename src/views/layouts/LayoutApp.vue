<script>
import SidebarAdmin from "../../components/Sidebar.vue";
import FooterAdmin from "../../components/Footer.vue";

export default {
  name: "App",
  components: {
    SidebarAdmin,
    FooterAdmin,
  },

  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <router-view />
  <div id="app">
    <!-- sidebar -->
    <SidebarAdmin />

    <div id="main">
      <header class="mb-3">
        <router-link to="/dashboard" class="burger-btn d-block d-xl-none">
          <i class="bi bi-justify fs-3"></i>
        </router-link>
      </header>

      <!-- Heading -->
      <div class="page-heading">
        <h3>{{ title }}</h3>
        <p class="text-subtitle text-muted">{{ subtitle }}</p>
      </div>

      <!-- Contents -->
      <div class="page-content">
        <slot></slot>
      </div>

      <!-- footer -->
      <FooterAdmin />
    </div>
  </div>
</template>

<style>
</style>