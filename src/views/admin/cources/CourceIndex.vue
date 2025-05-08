<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
export default {
  components: {
    LayoutApp,
  },
};
</script>

<template>
  <LayoutApp title="Cource" subtitle="">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 col-md-6 order-md-1 order-last">
            <h5 class="card-title">Data Cource</h5>
          </div>
          <div class="col-12 col-md-6 order-md-2 order-last text-end">
            <router-link
              to="/cource-create"
              class="btn icon icon-left btn-primary"
            >
              <span data-feather="plus"></span>
              Tambah
            </router-link>
          </div>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-striped" id="table1">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul</th>
              <th>Deskripsi</th>
              <th>Pengajar</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Laravel Basic</td>
              <td>Belajar dasar-dasar Laravel</td>
              <td>Abdul</td>
              <td>
                <router-link
                  to="/cource-detail/1"
                  class="btn icon icon-left btn-primary"
                >
                  <i data-feather="eye"></i>
                </router-link>
                <router-link
                  to="/cource-edit/1"
                  class="btn icon icon-left btn-primary ms-2"
                >
                  <i data-feather="edit"></i>
                </router-link>
                <a href="#" class="btn icon icon-left btn-danger ms-2">
                  <i data-feather="trash"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutApp>
</template>
