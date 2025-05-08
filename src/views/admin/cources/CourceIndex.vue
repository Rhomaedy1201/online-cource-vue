<script>
import LayoutApp from "../../layouts/LayoutApp.vue";

export default {
  components: {
    LayoutApp,
  },
  methods: {
    deleteCourse(id) {
      if (confirm("Yakin mau hapus?")) {
        // Panggil API delete atau logic hapus di sini
      }
    },
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          title: "Laravel Basic 1",
          description: "Belajar dasar-dasar Laravel",
          instructor: "Abdul",
          status: "published",
        },
      ],
    };
  },
};
</script>

<template>
  <LayoutApp title="Course" subtitle="">
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-12 col-md-6 order-md-1 order-last">
            <h5 class="card-title">Data Course</h5>
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
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(course, index) in courses" :key="course.id">
              <td>{{ index + 1 }}</td>
              <td>{{ course.title }}</td>
              <td>{{ course.description }}</td>
              <td>{{ course.instructor }}</td>
              <td>
                <span
                  :class="[
                    'badge',
                    course.status === 'published' ? 'bg-success' : 'bg-warning',
                  ]"
                >
                  {{
                    course.status === "published" ? "Dipublikasikan" : "Draft"
                  }}
                </span>
              </td>
              <td>
                <router-link
                  to="/cource-detail/1"
                  class="btn icon icon-left btn-primary"
                >
                  <svg class="bi" width="1em" height="1em" fill="currentColor">
                    <use
                      xlink:href="/static/images/bootstrap-icons.svg#eye-fill"
                    ></use>
                  </svg>
                </router-link>
                <router-link
                  to="/cource-edit/1"
                  class="btn icon icon-left btn-primary ms-2"
                >
                  <svg class="bi" width="1em" height="1em" fill="currentColor">
                    <use
                      xlink:href="/static/images/bootstrap-icons.svg#pencil-square"
                    ></use>
                  </svg>
                </router-link>
                <button
                  @click="deleteCourse(1)"
                  class="btn icon icon-left btn-danger ms-2"
                >
                  <svg class="bi" width="1em" height="1em" fill="currentColor">
                    <use
                      xlink:href="/static/images/bootstrap-icons.svg#trash"
                    ></use>
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutApp>
</template>
