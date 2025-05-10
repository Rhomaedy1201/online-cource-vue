<template>
  <LayoutApp title="User" subtitle="">
    <template #btnAdd>
      <div class="col-12 col-md-6 order-md-2 order-last text-end">
        <router-link to="/user-create" class="btn icon icon-left btn-primary">
          Tambah User
        </router-link>
      </div>
    </template>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 col-md-6 order-md-1 order-last">
            <h5 class="card-title">Data User</h5>
          </div>
        </div>
        <div class="d-flex justify-content-between">
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
          <div>
            <input
              type="text"
              class="form-control"
              v-model="search"
              @input="handleSearch"
              placeholder="Cari Role..."
            />
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
            <tr v-for="(user, index) in users" :key="user.id">
              <td>{{ (page - 1) * pageLength + index + 1 }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.role?.name }}</td>
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
            <tr v-if="users.length === 0">
              <td colspan="5" class="text-center">Data Kosong</td>
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
    <!-- Loading Modal -->
    <LoadingModal :visible="loading" message="Mengambil data user..." />
  </LayoutApp>
</template>

<script>
import axios from "axios";
import LayoutApp from "../../layouts/LayoutApp.vue";
import LoadingModal from "@/components/LoadingModal.vue";

export default {
  components: {
    LayoutApp,
    LoadingModal,
  },
  data() {
    return {
      users: [],
      search: "",
      loading: false,
      page: 1,
      pageLength: 10,
      totalPages: 1,
    };
  },
  mounted() {
    this.getUser();
  },
  methods: {
    async getUser() {
      this.loading = true;
      try {
        const response = await axios.get("/users", {
          params: {
            search: this.search,
            page: this.page,
            page_length: this.pageLength,
          },
        });

        this.users = response.data.data.data;
        this.totalPages = response.data.data.last_page;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    handleSearch() {
      this.page = 1;
      this.getUser();
    },
    handlePageChange(pageNumber) {
      this.page = pageNumber;
      this.getUser();
    },
    handleChangeEntries(event) {
      this.pageLength = parseInt(event.target.value);
      this.page = 1;
      this.getUser();
    },
  },
};
</script>