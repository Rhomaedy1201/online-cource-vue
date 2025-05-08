<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    LayoutApp,
  },
  setup() {
    const route = useRoute();
    const enrollmentId = route.params.id;

    // Simulasi data berdasarkan ID
    const enrollment = {
      id: enrollmentId,
      user_name: "Abdul",
      course: "Laravel Basic",
      status: "Completed",
      progress: "100%",
      enrolled_at: "2025-05-01 10:00:00",
      modules: [
        {
          title: "Instalasi Laravel",
          status: "Completed",
          completed_at: "2025-05-01 11:00:00",
        },
        {
          title: "Routing Dasar",
          status: "Completed",
          completed_at: "2025-05-01 12:00:00",
        },
        {
          title: "Controller & View",
          status: "Completed",
          completed_at: "2025-05-01 13:00:00",
        },
      ],
    };

    return {
      enrollment,
    };
  },
};
</script>

<template>
  <LayoutApp title="Detail Enrollment">
    <div class="card">
      <div class="card-header">
        <h5>Detail Enrollment</h5>
      </div>
      <div class="card-body">
        <p><strong>Nama User:</strong> {{ enrollment.user_name }}</p>
        <p><strong>Kursus:</strong> {{ enrollment.course }}</p>
        <p><strong>Status:</strong> {{ enrollment.status }}</p>
        <p><strong>Progress:</strong> {{ enrollment.progress }}</p>
        <p><strong>Tanggal Daftar:</strong> {{ enrollment.enrolled_at }}</p>

        <hr />

        <h6>Detail Modul:</h6>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Modul</th>
              <th>Status</th>
              <th>Completed At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(modul, index) in enrollment.modules" :key="index">
              <td>{{ modul.title }}</td>
              <td>{{ modul.status }}</td>
              <td>{{ modul.completed_at }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutApp>
</template>
