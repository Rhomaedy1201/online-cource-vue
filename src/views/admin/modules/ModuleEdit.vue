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
  created() {
    this.loadModule();
  },
  methods: {
    loadModule() {
      // Simulasi ambil data module dari API atau props
      const fetchedModule = {
        title: "Laravel Basic",
        course_id: "course-uuid-1",
        content: {
          section: "Intro Laravel",
          material: "Ini adalah pengantar Laravel...",
          video_url: "https://youtube.com/abcd",
          extra_notes: "Catatan penting sebelum lanjut.",
        },
        published: true,
      };
      // Prefill data
      this.title = fetchedModule.title;
      this.courseId = fetchedModule.course_id;
      this.section = fetchedModule.content.section;
      this.material = fetchedModule.content.material;
      this.videoUrl = fetchedModule.content.video_url;
      this.extraNotes = fetchedModule.content.extra_notes;
      this.published = fetchedModule.published;
    },
    handleFileUpload(event) {
      this.attachment = event.target.files[0];
    },
    updateModule() {
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
      console.log("Module yang diupdate:", formData);
      // API PUT di sini
      this.$router.push("/module");
    },
  },
};
</script>

<template>
  <LayoutApp title="Edit Module" subtitle="Form untuk mengedit module">
    <div class="card">
      <div class="card-body">
        <form @submit.prevent="updateModule">
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
            <small class="form-text text-muted"
              >Kosongkan jika tidak ingin mengganti file.</small
            >
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
          <button type="submit" class="btn btn-primary">Update</button>
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
