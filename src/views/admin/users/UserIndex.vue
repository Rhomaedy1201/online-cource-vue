<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
export default {
  components: {
    LayoutApp,
  },
};
</script>

<template>
  <LayoutApp title="User" subtitle="">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 col-md-6 order-md-1 order-last">
            <h5 class="card-title">Data User</h5>
          </div>
          <div class="col-12 col-md-6 order-md-2 order-last text-end">
            <router-link
              to="/user-create"
              class="btn icon icon-left btn-primary"
            >
              Tambah User
            </router-link>
          </div>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-striped" id="table1">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Role</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Graiden</td>
              <td>Graiden@gmail.com</td>
              <td>Engineer</td>
              <td>
                <router-link
                  to="/user-edit/1"
                  class="btn icon icon-left btn-primary"
                >
                  <i data-feather="edit"></i> Edit
                </router-link>
                <a href="#" class="btn icon icon-left btn-danger ms-2">
                  <i data-feather="delete"></i>
                  Delete
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutApp>
</template>
