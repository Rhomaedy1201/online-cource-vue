<script>
import LayoutApp from "../../layouts/LayoutApp.vue";

export default {
  components: {
    LayoutApp,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        syllabus: [{ judul: "", deskripsi: "" }],
        published: false,
        instructor_id: "",
        attachment: null,
      },
      instructors: [],
      courseId: null,
    };
  },
  created() {
    this.courseId = this.$route.params.id; // ambil ID dari route misalnya /courses/:id/edit
    this.fetchInstructors();
    this.fetchCourse();
  },
  methods: {
    fetchInstructors() {
      // Simulasi fetch data instructor
      this.instructors = [
        { id: "1", name: "John Doe" },
        { id: "2", name: "Jane Smith" },
      ];
    },
    async fetchCourse() {
      // Simulasi fetch course dari API
      // Biasanya pakai axios.get(`/api/courses/${this.courseId}`)
      const response = {
        title: "Vue JS Dasar",
        description: "Belajar dasar Vue JS untuk pemula.",
        syllabus: [
          { judul: "Pendahuluan", deskripsi: "Mengenal Vue JS" },
          { judul: "Instalasi", deskripsi: "Cara instalasi Vue JS" },
        ],
        published: true,
        instructor_id: "1",
      };
      // Set data ke form
      this.form = {
        ...this.form,
        ...response,
      };
    },
    addSyllabus() {
      this.form.syllabus.push({ judul: "", deskripsi: "" });
    },
    removeSyllabus(index) {
      this.form.syllabus.splice(index, 1);
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        if (file.type !== "application/pdf") {
          alert("Hanya file PDF yang diperbolehkan.");
          event.target.value = null;
          return;
        }
        if (file.size < 100 * 1024 || file.size > 500 * 1024) {
          alert("Ukuran file harus antara 100KB - 500KB.");
          event.target.value = null;
          return;
        }
        this.form.attachment = file;
      }
    },
    updateCourse() {
      console.log("Data kursus yang diupdate:", this.form);
      // Panggil API untuk update, misalnya:
      // axios.put(`/api/courses/${this.courseId}`, this.form)
    },
  },
};
</script>

<template>
  <LayoutApp title="Edit Kursus" subtitle="Form untuk edit kursus">
    <section id="edit-course">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <!-- Judul -->
              <div class="form-group">
                <label>Judul Kursus</label>
                <input
                  v-model="form.title"
                  type="text"
                  class="form-control"
                  placeholder="Masukkan judul kursus"
                  required
                />
              </div>

              <!-- Deskripsi -->
              <div class="form-group mt-3">
                <label>Deskripsi Kursus</label>
                <textarea
                  v-model="form.description"
                  class="form-control"
                  placeholder="Masukkan deskripsi kursus"
                  rows="3"
                ></textarea>
              </div>

              <!-- Syllabus Dinamis -->
              <div class="form-group mt-3">
                <label>Outline Silabus</label>
                <div
                  class="border rounded p-3 mb-2"
                  v-for="(item, index) in form.syllabus"
                  :key="index"
                >
                  <div
                    class="d-flex justify-content-between align-items-center mb-2"
                  >
                    <strong>Bagian {{ index + 1 }}</strong>
                    <button
                      type="button"
                      class="btn btn-sm btn-danger"
                      @click="removeSyllabus(index)"
                      v-if="form.syllabus.length > 1"
                    >
                      Hapus
                    </button>
                  </div>
                  <input
                    v-model="item.judul"
                    type="text"
                    class="form-control mb-2"
                    placeholder="Judul Bagian"
                  />
                  <textarea
                    v-model="item.deskripsi"
                    class="form-control"
                    placeholder="Deskripsi Bagian"
                    rows="2"
                  ></textarea>
                </div>
                <button
                  type="button"
                  class="btn btn-sm btn-secondary mt-2"
                  @click="addSyllabus"
                >
                  Tambah Bagian
                </button>
              </div>

              <!-- Published Switch -->
              <div class="form-group mt-3">
                <label>Status Publikasi</label>
                <div class="form-check form-switch">
                  <input
                    v-model="form.published"
                    class="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                  />
                  <label class="form-check-label" for="flexSwitchCheckDefault">
                    {{ form.published ? "Dipublikasikan" : "Draft" }}
                  </label>
                </div>
              </div>

              <!-- Instructor -->
              <div class="form-group mt-3">
                <label>Instruktur</label>
                <select
                  v-model="form.instructor_id"
                  class="form-select"
                  required
                >
                  <option value="" disabled>Pilih Instruktur</option>
                  <option
                    v-for="inst in instructors"
                    :key="inst.id"
                    :value="inst.id"
                  >
                    {{ inst.name }}
                  </option>
                </select>
              </div>

              <!-- Upload File -->
              <div class="form-group mt-3">
                <label>Upload File PDF (100KB - 500KB)</label>
                <input
                  type="file"
                  class="form-control"
                  @change="handleFileUpload"
                  accept="application/pdf"
                />
              </div>

              <!-- Simpan -->
              <button @click="updateCourse" class="btn btn-primary mt-4">
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </LayoutApp>
</template>
