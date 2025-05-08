<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    LayoutApp,
  },
  setup() {
    const router = useRouter();

    const enrollments = [
      {
        id: 1,
        user_name: "Abdul",
        course: "Laravel Basic",
        status: "Completed",
        progress: "100%",
        enrolled_at: "2025-05-01 10:00:00",
      },
      {
        id: 2,
        user_name: "Siti",
        course: "Vue.js Advanced",
        status: "In Progress",
        progress: "60%",
        enrolled_at: "2025-05-02 12:00:00",
      },
    ];

    const goToDetail = (id) => {
      router.push(`/enrollment-detail/${id}`);
    };

    return {
      enrollments,
      goToDetail,
    };
  },
};
</script>

<template>
  <LayoutApp title="Enrollment" subtitle="">
    <div class="card">
      <div class="card-header">
        <h5>Daftar Enrollment</h5>
      </div>
      <div class="card-body">
        <table class="table table-striped" id="table1">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama User</th>
              <th>Kursus</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Enrolled At</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(enroll, index) in enrollments" :key="enroll.id">
              <td>{{ index + 1 }}</td>
              <td>{{ enroll.user_name }}</td>
              <td>{{ enroll.course }}</td>
              <td>{{ enroll.status }}</td>
              <td>{{ enroll.progress }}</td>
              <td>{{ enroll.enrolled_at }}</td>
              <td>
                <button
                  class="btn icon icon-left btn-info btn-sm me-2"
                  @click="goToDetail(enroll.id)"
                >
                  Detail
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </LayoutApp>
</template>
