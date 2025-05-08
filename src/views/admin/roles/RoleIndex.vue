<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
export default {
  components: {
    LayoutApp,
  },
};
</script>

<template>
  <LayoutApp title="Role" subtitle="">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 col-md-6 order-md-1 order-last">
            <h5 class="card-title">Data Role</h5>
          </div>
          <div class="col-12 col-md-6 order-md-2 order-last text-end">
            <router-link
              to="/role-create"
              class="btn icon icon-left btn-primary"
            >
              Tambah Role
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
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Graiden</td>
              <td>
                <router-link
                  to="/role-edit/1"
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
