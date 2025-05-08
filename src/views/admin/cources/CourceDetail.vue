<script>
import LayoutApp from "../../layouts/LayoutApp.vue";

export default {
  components: {
    LayoutApp,
  },
  data() {
    return {
      course: null,
      courseId: null,
    };
  },
  created() {
    this.courseId = this.$route.params.id; // contoh: /courses/5/detail
    this.fetchCourse();
  },
  methods: {
    async fetchCourse() {
      // Simulasi API
      const response = {
        id: this.courseId,
        title: "Laravel Basic",
        description: "Belajar dasar-dasar Laravel",
        published: true,
        instructor: { id: "1", name: "Abdul" },
        syllabus: [
          { judul: "Pendahuluan", deskripsi: "Mengenal Laravel" },
          { judul: "Instalasi", deskripsi: "Cara instal Laravel" },
        ],
        attachment_url: "/uploads/laravel-basic.pdf",
      };
      this.course = response;
    },
  },
};
</script>

<template>
  <LayoutApp title="Detail Kursus" subtitle="Detail lengkap kursus">
    <section id="detail-course" v-if="course">
      <div class="card">
        <div class="card-body">
          <!-- Judul -->
          <h3>{{ course.title }}</h3>
          <p><strong>Deskripsi:</strong> {{ course.description }}</p>

          <!-- Pengajar -->
          <p><strong>Pengajar:</strong> {{ course.instructor.name }}</p>

          <!-- Status -->
          <p>
            <strong>Status:</strong>
            <span :class="course.published ? 'text-success' : 'text-warning'">
              {{ course.published ? "Dipublikasikan" : "Draft" }}
            </span>
          </p>

          <!-- Lampiran -->
          <div v-if="course.attachment_url" class="mt-3">
            <p><strong>Lampiran:</strong></p>
            <a
              :href="course.attachment_url"
              target="_blank"
              class="btn btn-sm btn-outline-primary"
            >
              Lihat PDF
            </a>
          </div>

          <!-- Syllabus -->
          <div class="mt-4">
            <h5>Silabus</h5>
            <ul class="list-group">
              <li
                v-for="(item, index) in course.syllabus"
                :key="index"
                class="list-group-item"
              >
                <strong>{{ index + 1 }}. {{ item.judul }}</strong>
                <p class="mb-0">{{ item.deskripsi }}</p>
              </li>
            </ul>
          </div>

          <!-- Kembali -->
          <button
            @click="$router.push('/cource')"
            class="btn btn-secondary mt-4"
          >
            Kembali ke Daftar Kursus
          </button>
        </div>
      </div>
    </section>

    <div v-else class="text-center py-5">
      <div class="spinner-border text-primary" role="status"></div>
    </div>
  </LayoutApp>
</template>
