<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
export default {
  components: {
    LayoutApp,
  },
  data() {
    return {
      title: "",
      courseId: "",
      section: "",
      material: "",
      videoUrl: "",
      extraNotes: "",
      attachment: null,
      published: false,
      courses: [
        { id: "course-uuid-1", title: "Laravel Basic" },
        { id: "course-uuid-2", title: "Vue.js Advanced" },
      ],
    };
  },
  methods: {
    handleFileUpload(event) {
      this.attachment = event.target.files[0];
    },
    saveModule() {
      const content = {
        section: this.section,
        material: this.material,
        video_url: this.videoUrl,
        extra_notes: this.extraNotes,
      };
      const formData = new FormData();
      formData.append("title", this.title);
      formData.append("course_id", this.courseId);
      formData.append("content", JSON.stringify(content));
      formData.append("published", this.published);
      if (this.attachment) {
        formData.append("attachment", this.attachment);
      }
      console.log("Module yang akan dikirim:", formData);
      // API POST di sini
      this.$router.push("/module");
    },
  },
};
</script>

<template>
  <LayoutApp
    title="Tambah Module"
    subtitle="Form untuk menambahkan module baru"
  >
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="saveModule">
          <div class="mb-3">
            <label class="form-label">Judul Module</label>
            <input
              type="text"
              class="form-control"
              v-model="title"
              required
              placeholder="Masukkan judul module"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Course</label>
            <select class="form-control" v-model="courseId" required>
              <option disabled value="">Pilih Course</option>
              <option
                v-for="course in courses"
                :key="course.id"
                :value="course.id"
              >
                {{ course.title }}
              </option>
            </select>
          </div>
          <!-- Bagian Content -->
          <div class="mb-3">
            <label class="form-label">Section</label>
            <input
              type="text"
              class="form-control"
              v-model="section"
              placeholder="Judul section/module"
              required
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Material</label>
            <textarea
              class="form-control"
              rows="5"
              v-model="material"
              placeholder="Isi materi module"
              required
            ></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Video URL (Opsional)</label>
            <input
              type="url"
              class="form-control"
              v-model="videoUrl"
              placeholder="Link video pendukung"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">Catatan Tambahan (Opsional)</label>
            <textarea
              class="form-control"
              rows="3"
              v-model="extraNotes"
              placeholder="Catatan tambahan"
            ></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Attachment (Opsional)</label>
            <input
              type="file"
              class="form-control"
              @change="handleFileUpload"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="published"
              id="published"
            />
            <label class="form-check-label" for="published"> Published </label>
          </div>
          <button type="submit" class="btn btn-primary">Simpan</button>
          <button
            type="button"
            @click="$router.back()"
            class="btn btn-secondary ms-2"
          >
            Kembali
          </button>
        </form>
      </div>
    </div>
  </LayoutApp>
</template>
