<script>
import SidebarAdmin from "../../components/Sidebar.vue";

export default {
  name: "App",
  components: {
    SidebarAdmin,
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
        <a href="#" class="burger-btn d-block d-xl-none">
          <i class="bi bi-justify fs-3"></i>
        </a>
      </header>

      <div class="page-heading">
        <h3>Profile Statistics</h3>
      </div>
      <div class="page-content">
        <section class="row">
          <div class="col-12 col-lg-">
            <div class="row">
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div
                        class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"
                      >
                        <div class="stats-icon purple mb-2">
                          <i class="iconly-boldShow"></i>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 class="text-muted font-semibold">Profile Views</h6>
                        <h6 class="font-extrabold mb-0">112.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div
                        class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"
                      >
                        <div class="stats-icon blue mb-2">
                          <i class="iconly-boldProfile"></i>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 class="text-muted font-semibold">Followers</h6>
                        <h6 class="font-extrabold mb-0">183.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div
                        class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"
                      >
                        <div class="stats-icon green mb-2">
                          <i class="iconly-boldAdd-User"></i>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 class="text-muted font-semibold">Following</h6>
                        <h6 class="font-extrabold mb-0">80.000</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6 col-lg-3 col-md-6">
                <div class="card">
                  <div class="card-body px-4 py-4-5">
                    <div class="row">
                      <div
                        class="col-md-4 col-lg-12 col-xl-12 col-xxl-5 d-flex justify-content-start"
                      >
                        <div class="stats-icon red mb-2">
                          <i class="iconly-boldBookmark"></i>
                        </div>
                      </div>
                      <div class="col-md-8 col-lg-12 col-xl-12 col-xxl-7">
                        <h6 class="text-muted font-semibold">Saved Post</h6>
                        <h6 class="font-extrabold mb-0">112</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div class="footer clearfix mb-0 text-muted">
          <div class="float-start">
            <p>2023 &copy; Mazer</p>
          </div>
          <div class="float-end">
            <p>
              Crafted with
              <span class="text-danger"
                ><i class="bi bi-heart-fill icon-mid"></i
              ></span>
              by <a href="https://saugi.me">Saugi</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
</style>