<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-header position-relative">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo">
            <router-link to="/dashboard">
              <img src="/compiled/svg/logo.svg" alt="Logo" />
            </router-link>
          </div>
          <div class="sidebar-toggler x">
            <a href="#" class="sidebar-hide d-xl-none d-block">
              <i class="bi bi-x bi-middle"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="sidebar-menu">
        <ul class="menu">
          <li class="sidebar-title">Menu</li>

          <li class="sidebar-item" :class="{ active: isActive('/dashboard') }">
            <router-link to="/dashboard" class="sidebar-link">
              <i class="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </router-link>
          </li>

          <li
            class="sidebar-item has-sub"
            :class="{ active: isMasterMenuOpen }"
          >
            <a href="#" class="sidebar-link" @click.prevent="toggleMaster">
              <i class="bi bi-hexagon-fill"></i>
              <span>Master Data</span>
            </a>

            <ul class="submenu">
              <li
                class="submenu-item"
                :class="{ active: isActive('/master-data/input') }"
              >
                <router-link to="/master-data/input" class="submenu-link"
                  >Input</router-link
                >
              </li>
              <li
                class="submenu-item"
                :class="{ active: isActive('/master-data/input-group') }"
              >
                <router-link to="/master-data/input-group" class="submenu-link"
                  >Input Group</router-link
                >
              </li>
              <!-- Tambahkan submenu lainnya sesuai kebutuhan -->
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMasterOpen = ref(false);

// Fungsi untuk menandai menu sebagai aktif
const isActive = (prefix) => {
  return route.path.startsWith(prefix);
};

// Dropdown terbuka jika route sekarang termasuk master-data/*
const isMasterMenuOpen = computed(() => {
  return isMasterOpen.value || route.path.startsWith("/master");
});

const toggleMaster = () => {
  isMasterOpen.value = !isMasterOpen.value;
};
</script>
