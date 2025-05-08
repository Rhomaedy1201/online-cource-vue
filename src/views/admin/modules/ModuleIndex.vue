<script>
import LayoutApp from "../../layouts/LayoutApp.vue";

export default {
  components: {
    LayoutApp,
  },
  data() {
    return {
      modules: [],
    };
  },
  created() {
    this.fetchModules();
  },
  methods: {
    fetchModules() {
      // Simulasi data module
      this.modules = [
        {
          id: 1,
          title: "Laravel Basic",
          description: "Belajar dasar-dasar Laravel",
          course_title: "Web Development",
          instructor: "Abdul",
          order: 1,
          status: "Aktif",
          created_at: "2025-05-08",
        },
        {
          id: 2,
          title: "Vue.js Components",
          description: "Membuat komponen Vue.js yang reusable",
          course_title: "Frontend Mastery",
          instructor: "Siti",
          order: 2,
          status: "Aktif",
          created_at: "2025-05-01",
        },
      ];
    },
    editModule(id) {
      this.$router.push(`/module-edit/${id}`);
    },
    detailModule(id) {
      this.$router.push(`/module-detail/${id}`);
    },
    deleteModule(id) {
      if (confirm("Yakin ingin menghapus module ini?")) {
        this.modules = this.modules.filter((m) => m.id !== id);
        alert("Module berhasil dihapus!");
      }
    },
  },
};
</script>

<template>
  <LayoutApp title="Module" subtitle="">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 col-md-6 order-md-1 order-last">
            <h5 class="card-title">Data Module</h5>
          </div>
          <div class="col-12 col-md-6 order-md-2 order-last text-end">
            <button
              @click="$router.push('/module-create')"
              class="btn icon icon-left btn-primary"
            >
              <span data-feather="plus"></span>
              Tambah
            </button>
          </div>
        </div>
      </div>
      <div class="card-body">
        <table class="table table-striped" id="table1">
          <thead>
            <tr>
              <th>No</th>
              <th>Judul Module</th>
              <th>Deskripsi</th>
              <th>Kursus</th>
              <th>Pengajar</th>
              <th>Urutan</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(module, index) in modules" :key="module.id">
              <td>{{ index + 1 }}</td>
              <td>{{ module.title }}</td>
              <td>{{ module.description }}</td>
              <td>{{ module.course_title }}</td>
              <td>{{ module.instructor }}</td>
              <td>{{ module.order }}</td>
              <td>
                <span
                  :class="{
                    'badge bg-success': module.status === 'Aktif',
                    'badge bg-secondary': module.status !== 'Aktif',
                  }"
                >
                  {{ module.status }}
                </span>
              </td>
              <td>
                <button
                  @click="detailModule(module.id)"
                  class="btn icon icon-left btn-info btn-sm me-2"
                >
                  Detail
                </button>
                <button
                  @click="editModule(module.id)"
                  class="btn icon icon-left btn-primary btn-sm me-2"
                >
                  Edit
                </button>
                <button
                  @click="deleteModule(module.id)"
                  class="btn icon icon-left btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr v-if="modules.length === 0">
              <td colspan="8" class="text-center">Belum ada data module.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutApp>
</template>
