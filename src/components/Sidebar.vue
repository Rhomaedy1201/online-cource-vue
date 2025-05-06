<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-header position-relative">
        <div class="d-flex justify-content-between align-items-center">
          <div class="logo">
            <a href="index.html">
              <img src="/compiled/svg/logo.svg" alt="Logo" />
            </a>
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

          <li class="sidebar-item">
            <router-link to="/dashboard" class="sidebar-link">
              <i class="bi bi-grid-fill"></i>
              <span>Dashboard</span>
            </router-link>
          </li>

          <!-- Tambahkan class `active` jika dropdown sedang terbuka -->
          <li class="sidebar-item has-sub" :class="{ active: isMasterOpen }">
            <a href="#" class="sidebar-link" @click.prevent="toggleMaster">
              <i class="bi bi-hexagon-fill"></i>
              <span>Master Data</span>
            </a>

            <ul class="submenu">
              <li class="submenu-item">
                <a href="form-element-input.html" class="submenu-link">Input</a>
              </li>
              <li class="submenu-item">
                <a href="form-element-input-group.html" class="submenu-link"
                  >Input Group</a
                >
              </li>
              <li class="submenu-item">
                <a href="form-element-select.html" class="submenu-link"
                  >Select</a
                >
              </li>
              <li class="submenu-item">
                <a href="form-element-radio.html" class="submenu-link">Radio</a>
              </li>
              <li class="submenu-item">
                <a href="form-element-checkbox.html" class="submenu-link"
                  >Checkbox</a
                >
              </li>
              <li class="submenu-item">
                <a href="form-element-textarea.html" class="submenu-link"
                  >Textarea</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isMasterOpen = ref(false);

function toggleMaster() {
  isMasterOpen.value = !isMasterOpen.value;
}
</script>
