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
          <li class="sidebar-item" :class="{ active: isActive('/role') }">
            <router-link to="/role" class="sidebar-link">
              <i class="bi bi-grid-fill"></i>
              <span>Role</span>
            </router-link>
          </li>
          <li class="sidebar-item" :class="{ active: isActive('/user') }">
            <router-link to="/user" class="sidebar-link">
              <i class="bi bi-grid-fill"></i>
              <span>User</span>
            </router-link>
          </li>
          <li class="sidebar-item" :class="{ active: isActive('/cource') }">
            <router-link to="/cource" class="sidebar-link">
              <i class="bi bi-grid-fill"></i>
              <span>Course</span>
            </router-link>
          </li>
          <li class="sidebar-item" :class="{ active: isActive('/module') }">
            <router-link to="/module" class="sidebar-link">
              <i class="bi bi-grid-fill"></i>
              <span>Module</span>
            </router-link>
          </li>
          <li class="sidebar-item" :class="{ active: isActive('/enrollment') }">
            <router-link to="/enrollment" class="sidebar-link">
              <i class="bi bi-grid-fill"></i>
              <span>Enrollment</span>
            </router-link>
          </li>
          <li class="sidebar-item">
            <a
              type="button"
              class="sidebar-link"
              data-bs-toggle="modal"
              data-bs-target="#logout"
            >
              <i class="fa-fw select-all fas"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div
    class="modal fade text-left"
    id="logout"
    tabindex="-1"
    role="dialog"
    data-bs-backdrop="true"
    aria-labelledby="myModalLabel140"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-warning">
          <h5 class="modal-title white" id="myModalLabel140">Warning Modal</h5>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i data-feather="x"></i>
          </button>
        </div>
        <div class="modal-body">Apakah anda yakin ingin logout?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-light-secondary"
            data-bs-dismiss="modal"
          >
            <i class="bx bx-x d-block d-sm-none"></i>
            <span class="d-none d-sm-block">Close</span>
          </button>

          <button
            type="button"
            class="btn btn-warning ms-1"
            data-bs-dismiss="modal"
          >
            <i class="bx bx-check d-block d-sm-none"></i>
            <span class="d-none d-sm-block">Loogout</span>
          </button>
        </div>
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
</script>
