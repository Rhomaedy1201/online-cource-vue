<template>
  <LayoutApp title="Role" subtitle="">
    <template #btnAdd>
      <div class="col-12 col-md-6 order-md-2 order-last text-end">
        <router-link to="/role-create" class="btn icon icon-left btn-primary">
          Tambah Role
        </router-link>
      </div>
    </template>
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <div>
          <input
            type="text"
            class="form-control"
            v-model="search"
            @input="handleSearch"
            placeholder="Cari Role..."
          />
        </div>
        <div class="row align-items-center gx-1">
          <div class="col-auto">
            <span>Show</span>
          </div>
          <div class="col-auto">
            <select
              class="form-select form-select-sm"
              @change="handleChangeEntries"
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div class="col-auto">
            <span>Entries</span>
          </div>
        </div>
      </div>

      <div class="card-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(role, index) in roles" :key="role.id">
              <td>{{ (page - 1) * pageLength + index + 1 }}</td>
              <td>{{ role.name }}</td>
              <td>
                <router-link
                  :to="`/role-edit/${role.id}`"
                  class="btn btn-primary btn-sm"
                >
                  Edit
                </router-link>
                <button
                  @click="deleteRole(role.id)"
                  class="btn btn-sm btn-danger ms-2"
                >
                  <i data-feather="delete"></i>
                  Delete
                </button>
              </td>
            </tr>
            <tr v-if="roles.length === 0">
              <td colspan="3" class="text-center">Data Kosong</td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination -->
        <nav class="mt-3">
          <ul class="pagination">
            <li
              class="page-item"
              :class="{ disabled: page === 1 }"
              @click="handlePageChange(page - 1)"
            >
              <a class="page-link" href="#">Previous</a>
            </li>
            <li
              class="page-item"
              v-for="n in totalPages"
              :key="n"
              :class="{ active: page === n }"
              @click="handlePageChange(n)"
            >
              <a class="page-link" href="#">{{ n }}</a>
            </li>
            <li
              class="page-item"
              :class="{ disabled: page === totalPages }"
              @click="handlePageChange(page + 1)"
            >
              <a class="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <LoadingModal :visible="loading" message="Mengambil data role..." />
  </LayoutApp>
</template>


<script>
import axios from "axios";
import LayoutApp from "../../layouts/LayoutApp.vue";
import LoadingModal from "@/components/LoadingModal.vue";

import {
  showSuccessAlert,
  showErrorAlert,
  showConfirmDeleteAlert,
} from "@/utils/alert";

export default {
  components: {
    LayoutApp,
    LoadingModal,
  },
  data() {
    return {
      roles: [],
      search: "",
      page: 1,
      pageLength: 10,
      totalPages: 1,
      loading: false,
    };
  },
  mounted() {
    this.getRoles();
  },
  methods: {
    async getRoles() {
      this.loading = true;
      try {
        const response = await axios.get("/role", {
          params: {
            search: this.search,
            page: this.page,
            page_length: this.pageLength,
          },
        });

        this.roles = response.data.data.data;
        this.totalPages = response.data.data.last_page;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    handleSearch() {
      this.page = 1;
      this.getRoles();
    },
    handlePageChange(pageNumber) {
      this.page = pageNumber;
      this.getRoles();
    },
    handleChangeEntries(event) {
      this.pageLength = parseInt(event.target.value);
      this.page = 1;
      this.getRoles();
    },

    async deleteRole(id) {
      const confirm = await showConfirmDeleteAlert();

      if (confirm.isConfirmed) {
        try {
          await axios.delete(`/role-delete/${id}`);
          showSuccessAlert("Role berhasil dihapus");
          this.getRoles();
        } catch (error) {
          showErrorAlert("Gagal menghapus role");
        }
      }
    },
  },
};
</script>
