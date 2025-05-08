<script>
import LayoutApp from "../../layouts/LayoutApp.vue";
export default {
  components: {
    LayoutApp,
  },
  data() {
    return {
      module: {
        title: "Laravel Basic",
        courseTitle: "Laravel Course",
        content: {
          section: "Intro Laravel",
          material: "Ini adalah pengantar Laravel...",
          video_url: "https://youtube.com/abcd",
          extra_notes: "Catatan penting sebelum lanjut.",
        },
        attachment: "/files/laravel-basic.pdf",
        published: true,
      },
    };
  },
};
</script>

<template>
  <LayoutApp title="Detail Module" subtitle="Lihat detail module">
    <div class="card">
      <div class="card-body">
        <h5>{{ module.title }}</h5>
        <p><strong>Course:</strong> {{ module.courseTitle }}</p>
        <div class="mt-3">
          <h6>Section:</h6>
          <p>{{ module.content.section }}</p>
          <h6>Material:</h6>
          <p>{{ module.content.material }}</p>
          <div v-if="module.content.video_url">
            <h6>Video:</h6>
            <a :href="module.content.video_url" target="_blank">{{
              module.content.video_url
            }}</a>
          </div>
          <div v-if="module.content.extra_notes">
            <h6>Catatan Tambahan:</h6>
            <p>{{ module.content.extra_notes }}</p>
          </div>
        </div>
        <div v-if="module.attachment" class="mt-3">
          <h6>Attachment:</h6>
          <a :href="module.attachment" target="_blank">Download Attachment</a>
        </div>
        <p class="mt-3">
          <strong>Status:</strong>
          <span
            class="badge ms-2"
            :class="module.published ? 'bg-success' : 'bg-secondary'"
          >
            {{ module.published ? "Published" : "Draft" }}
          </span>
        </p>
        <button
          type="button"
          @click="$router.back()"
          class="btn btn-secondary mt-3"
        >
          Kembali
        </button>
      </div>
    </div>
  </LayoutApp>
</template>
