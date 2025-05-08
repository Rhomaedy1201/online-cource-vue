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
        <div class="page-title">
          <div class="row">
            <div class="col-12 col-md-6 order-md-1 order-last">
              <h3>{{ title }}</h3>
              <p class="text-subtitle text-muted">{{ subtitle }}</p>
            </div>
            <!-- <div class="col-12 col-md-6 order-md-2 order-first">
              <nav
                aria-label="breadcrumb"
                class="breadcrumb-header float-start float-lg-end"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    DataTable
                  </li>
                </ol>
              </nav>
            </div> -->
          </div>
        </div>

        <section class="section">
          <slot></slot>
        </section>
      </div>

      <!-- footer -->
      <FooterAdmin />
    </div>
  </div>
</template>

<style>
</style>